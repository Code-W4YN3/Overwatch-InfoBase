from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask import Flask
from flask_bcrypt import Bcrypt
import os

db = SQLAlchemy()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///overwatch.db'
app.secret_key = 'super secret key'
app.config['SESSION_TYPE'] = 'filesystem'

migrate = Migrate(app, db)
bcrypt = Bcrypt(app)

db.init_app(app)

