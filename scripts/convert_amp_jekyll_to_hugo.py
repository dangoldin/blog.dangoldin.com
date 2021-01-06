#! /usr/bin/env python

import os
import argparse
import logging
import re
from html.parser import HTMLParser

RE_AMPIMG = re.compile(r"<amp-img.*?/amp-img>")

class AmpImgParser(HTMLParser):
    tag_info = {}

    def handle_starttag(self, tag, attrs):        
        self.tag_info.update(attrs)

def find_amp_img(s):
    return RE_AMPIMG.findall(s)

def get_img_from_amp(amp_img_info):
    src = amp_img_info.get('src', None)
    alt = amp_img_info.get('alt', '')
    width = amp_img_info.get('width', None)
    height = amp_img_info.get('height', None)
    layout = amp_img_info.get('layout', None)

    src = src.replace('{{IMG_PATH}}', '/image/')
    src = src.replace('{{ IMG_PATH }}', '/image/')
    src = src.replace('/assets/static/images/', '/image/')    
    
    return '<img src="{}" alt="{}" data-width="{}" data-height="{}" data-layout="{}" />'.format(src, alt, width, height, layout)

def convert_amp_img(s):
    amp_imgs = find_amp_img(s)
    for amp_img in amp_imgs:
        parser = AmpImgParser()
        parser.feed(s)
        new_img_tag = get_img_from_amp(parser.tag_info)
        s = s.replace(amp_img, new_img_tag)
    return s

def remove_setup(s):
    return s.replace('{% include setup %}', '')

def convert_meta_tags(s):
    return s.replace('image_url', 'meta_img').replace('/assets/static/images/', '/image/')

def remove_hash_from_tags(s):
    # Just max it out at 10
    return s.replace('- #', '- ', 10).replace("- '#", "- '", 10)

def process_file(path):
    logging.info('Processing', path)
    with open(path, 'r') as f:
        c = f.read()
        c = remove_setup(c)
        c = convert_amp_img(c)
        c = convert_meta_tags(c)
        c = remove_hash_from_tags(c)
        c = c.replace('src="image', 'src="/image', 200)
    with open(path, 'w') as f:
        f.write(c)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("dir")
    args = parser.parse_args()
    print('Processing directory:', args.dir)

    for fi in os.listdir(args.dir):
        process_file(os.path.join(args.dir, fi))
