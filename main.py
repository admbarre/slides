import os
from flask import Flask
from flask import render_template
app = Flask(__name__)

image_folder = 'static/imgs/'
images = []

slider_width = '640px'
slider_height = '480px'

@app.route('/')
def mock():
    return app.send_static_file('mock.html')

@app.route('/slides')
def slides():
    images = [image_folder + path for path in os.listdir(image_folder)]
    print('Images loaded...')
    for img in images:
        print(f'Path: {img}')
    return render_template('slides.html',images = images, slider_width = slider_width, slider_height = slider_height)
