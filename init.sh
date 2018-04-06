#!/bin/bash

npm install -g browserify
npm install -g watchify
npm install -g uglify
npm install -g babelify
npm install -g supervisor
npm install -g typescript

npm install

brew update
brew install postgresql
brew services start postgresql
createdb postgres_db
psql postgres_db < init.sql