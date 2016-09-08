#!/usr/bin/env python

import sys, os, re

def get_files(d):
    return [os.path.join(d,f) for f in os.listdir(d) if os.path.isfile(os.path.join(d,f)) and f.endswith('.md') or f.endswith('.markdown')]

def process_file(fn, do_write = False):
    lines = []
    changed = False
    with open(fn, 'r') as f:
        for line in f:
            if '<amp-img' in line and '</amp-img>' not in line:
                line = line.replace('>', '></amp-img>')
                changed = True
            lines.append(line)
    if changed and do_write:
        with open(fn, 'w') as f:
            f.write("".join(lines))

if __name__ == '__main__':
    d = sys.argv[1]
    do_write = False
    if len(sys.argv) == 3:
        do_write = sys.argv[2].lower() == 'write'

    print 'Do Write:', do_write

    files = get_files(d)

    for f in files:
        process_file(f, do_write)
