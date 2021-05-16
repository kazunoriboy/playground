from flask import Flask, Response, request
import requests
import hashlib

app = Flask(__name__)
salt = "UNIQUE_SALT"
default_name = 'Jhon Doe'

@app.route('/', methods=['GET', 'POST'])
def mainpage():

    name = default_name
    if request.method == 'POST':
        name = request.form['name']

    salted_name = salt + name
    name_hash = hashlib.sha256(salted_name.encode()).hexdigest()

    header = '<html><head><title>Identidock</title></head><body>'
    body = '''<form method="POST">
              Hello<input type="text" name="name" value="{}">
              <input type="submit" value="submit">
              </form>
              <p>You look like a:
              <img src="/monster/monster.png"/>
              '''.format(name)
    footer = '</body></html>'

    return header + body + footer

@app.route('/monster/<name>')
def get_identicon(name):

    r = requests.get('http://dnmonster:8080/monster/' + name + '?size=80')
    image = cache.get(name)
    
    return Response(image, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')


