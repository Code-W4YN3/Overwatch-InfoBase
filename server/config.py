from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from flask_bcrypt import Bcrypt
import os

db = SQLAlchemy()

app = Flask(__name__, template_folder='../client/public')
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://wayneywoohoo:glQegfWf8EgP3i9xBZQAc8n6AlWpJYOS@dpg-ckg6eemafg7c73bp0cmg-a.ohio-postgres.render.com/overwatch'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = b'Y\xf1Xz\x00\xad|eQ\x80t \xca\x1a\x10K'

migrate = Migrate(app, db)
bcrypt = Bcrypt(app)

db.init_app(app)

