#! /usr/bin/env python

from convert_amp_jekyll_to_hugo import AmpImgParser

import unittest

class AmpParserTestCase(unittest.TestCase):

    def testAmpParser(self):
        a = AmpImgParser()
        a.feed('<amp-img src="{{ IMG_PATH }}new-gcal-event-creation.png" alt="New Google Calendar event creation" width="451" height="394" layout="responsive"></amp-img>')
        assert a.tag_info['src'] == "{{ IMG_PATH }}new-gcal-event-creation.png"
        assert a.tag_info['alt'] == "New Google Calendar event creation"
        assert a.tag_info['width'] == "451"
        assert a.tag_info['height'] == "394"
        assert a.tag_info['layout'] == "responsive"

if __name__ == '__main__':
    unittest.main()
