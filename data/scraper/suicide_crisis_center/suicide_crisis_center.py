'''gets list of suicide crisis centers'''

from constants import URL
import requests

def get_page():
    '''gets page from suicide hotline website'''
    return requests.get(URL)

if __name__ == '__main__':
    print(get_page())
