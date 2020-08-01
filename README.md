# MEAN-stack-CRUD-TEST

MEAN-stack web application that allows users to add/edit/delete rows from a user table.

## TO DO List
### Front-End
- [x] Add user page
- [x] List user page
- [x] Edit user page
- [x] 404 page
- [x] Delete user
- [x] Form input validation
- [x] Only 1 Art Manager in the entire table
- [x] Search users by role and keyword
- [x] Handle http error and exceptions
- [x] Loading spinner
- [x] Error message toaster

### Back-End
- [x] CRUD user API
- [x] API Request parameter validataion
- [x] Handle error message
- [x] Enable CORS
- [x] Handle security info with dotenv

### Deploy
- [x] Deploy script
- [x] [GitHub](https://github.com/devninja9/MEAN-Stack-Test)
- [x] [Evennode](http://devninja.eu-4.evennode.com)

## Installation
### Pre-requisites
- git
- node.js
- npm
- mongodb

### How to run deploy script
```
$ git clone https://github.com/devninja9/MEAN-Stack-Test .
$ ./build.sh
```

Please make sure that 
- Add Git remote url for _Evennode_.
- Set MongoDB connection _Evennode_ provides.

### How to run for development
```
// Run Angular
$ cd elephantstock-app
$ npm install
$ ng serve

// Run Express
$ cd ../backend
$ npm install
$ nodemon server.js
```

Please make sure you already run your local MongoDB.
