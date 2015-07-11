# calibrjs
Inspired by TheFurryMonk's WebAppFramework and based on Express.js
![My image](http://jaaaaaaannn.github.io/calibrjs/img/preview.png)

```
git clone https://github.com/jaaaaaaannn/calibrjs
cd calibrjs
```

## INSTALL node.js

## INSTALL DEPENDENCIES
all required node modules are included in the repository, if modules are missing run 'npm install' to fetch all dependencies in package.json (make sure you are in the same folder as package.json when you fetch)
```
npm install
```

## CREATE DB
### step 1: Install Mongodb by downloading the installer from [MongoDB](http://mongodb.org)

### step 2: Run Mongod and Mongo
Create a folder named 'data' within the root folder of calibrjs (same folder as package.json) and point mongod to store files there. change the path below as necessary.

```
mongod --dbpath c:\projects\calibrjs\data\
```

Once it says "[initandlisten] waiting for connections on port 27017", you're good.
Run mongo in another console

```
mongo
```

youll see something like this 

```
c:\mongo\bin>mongo
MongoDB shell version: 2.4.5
connecting to: test
```

change database to calibrjs

```
use calibrjs
```


database names and details used by calibr.js can be changed in constants.js

## HOW TO USE:
calibr.js is intended to be used as a REST API webservice, but I have included demos in the public folder.
to test the login functionality just go to localhost:3000/login.html.
to add users just go to localhost:3000/test.html
