# -*- coding: utf-8 -*-
"""
Created on Sun Mar 12 08:01:52 2017

@author: Brian
"""

from Flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
