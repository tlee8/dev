#BoatInspired -- Thomas Lee, Claire Liu, Josh Weiner
#SoftDev2 pd6
#K08 -- Ay Mon, Go Git It From Yer Flask
#2019-03-08

from flask import Flask, redirect, url_for, render_template, session, request
import pymongo
import os
import json

app = Flask(__name__)
app.secret_key = os.urandom(32)
collection = None  

global SERVER_ADDR = "134.209.67.113"

@app.route('/')
def home():
	return render_template('home.html')

@app.route("/build", methods = ["POST"])
def build():
    SERVER_ADDR = request.form['serverid']
	connection=pymongo.MongoClient(SERVER_ADDR)
	db=connection.Liusers
	collection=db.movies
	f = open("movies.json","r")
	data = json.loads(f.read())
	f.close()
	collection.insert_many(data)
    queryResults=None
return render_template('home.html', queryResults = queryResults) 

def title_movie(title):
    return collection.find({'title':title})

def genre_movie(genre):
    return collection.find({'genres':genre})

def year_movie(year):
    return collection.find({'year':year})

def lessthan_year(year):
    return collection.find({'year':{'$lt':year}})

def year_and_genre(year,genre):
    return collection.find({'year': year, 'genre': genre})

def display(collection):
    for i in collection:
        print(i['title'])

if __name__ == "__main__":
    app.debug = True
app.run()
