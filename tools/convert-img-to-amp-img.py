#!/usr/bin/env python

from PIL import Image
import sys, os, re

# For the full HTML element - <img src="image.jpg">
RE_IMG = re.compile('(<img.+?src=["\'].+?["\']>)')

# For the image url itself - "image.jpg"
RE_IMG_SRC = re.compile('src=["\'](.+?)["\']')

def get_files(d):
    return [os.path.join(d,f) for f in os.listdir(d) if os.path.isfile(os.path.join(d,f)) and f.endswith('.md') or f.endswith('.markdown')]

def process_file(fn):
    with open(fn, 'r') as f:
        t = f.read()
        img_elements = RE_IMG.findall(t)
        for img_el in img_elements:
            img_url = RE_IMG_SRC.findall(img_el)[0]
            if '{{ IMG_PATH }}' in img_url:
                img_path = img_url.replace('{{ IMG_PATH }}', '')
                dims = get_dims(img_path)
                if dims is not None:
                    width, height = dims
                    replace_str = img_el.replace('>', ' width="{0}" height="{1}" layout="responsive">'.format(width, height)).replace('<img', '<amp-img')
                    print img_el, '=>', replace_str
                    t = t.replace(img_el, replace_str)
                    with open(fn, 'w') as fo:
                        fo.write(t)
        if len(img_elements):
            print t

def get_dims(img_path):
    with Image.open(os.path.join('assets/static/images', img_path)) as im:
        return im.size
    return None

if __name__ == '__main__':
    d = sys.argv[1]

    files = get_files(d)

    for f in files:
        process_file(f)
