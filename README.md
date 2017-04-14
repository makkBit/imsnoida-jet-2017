## imsnoida-jet-2017


Make sure git, nodeJS, mongoDB installed on your system

To run a local copy of the app:

Run a local mongodb server:
```
//in project directory
mkdir data
mongod --dbpath=./data --port=8000
```
Then:
```
git clone https://github.com/makkBit/imsnoida-jet-2017.git
npm install
npm run dev
```
App will run on localhost:3000
