from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from flask_bcrypt import Bcrypt
import os

db = SQLAlchemy()

app = Flask(__name__,static_url_path='', static_folder='../client/build', template_folder='../client/build')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI')
app.secret_key = b'Y\xf1Xz\x00\xad|eQ\x80t \xca\x1a\x10K'

migrate = Migrate(app, db)
bcrypt = Bcrypt(app)

db.init_app(app)

