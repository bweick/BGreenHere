# -*- coding: utf-8 -*-
"""
Created on Sun Mar 12 08:01:52 2017

@author: Brian
"""

from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return app.send_static_file('index.html')
