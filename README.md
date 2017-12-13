# node-curl
This is a very basic example of CRUD in Node.js n mySQL.

## Installation
*for newbies : Clone or download zip to your machine then hit this :

	npm install

## Configuration (database)
config/connection.js

        host: 'localhost',
        user: 'root',
        password : 'root',
        port : 3306, //port mysql
        database:'sampledb'	

You're gonna need to create a DB named 'sampledb' and import sampledb.sql

## Login Details

```
Username: admin
Password: 123456
```

## Directory Structure

```
.
|-- app.js
|-- config
|   |-- connection.js
|   |-- index.js
|   `-- route.js
|-- customer
|   |-- customerController.js
|   `-- customerModel.js
|-- Images
|   |-- imgUploader_1513148531557_ultra_dm_1495373946.jpg
|   |-- imgUploader_1513148616018_240_F_78735333_o3qJe4bT5ciwldLIjVDulFKrDAV3jGYO.jpg
|   |-- imgUploader_1513148758490_person-flat.png
|   `-- imgUploader_1513148819457_240_F_78735333_o3qJe4bT5ciwldLIjVDulFKrDAV3jGYO.jpg
|-- login
|   |-- loginController.js
|   `-- loginModel.js
|-- package.json
|-- public
|   |-- css
|   |   `-- style.css
|   `-- js
|       `-- all.js
|-- README.md
|-- sampledb.sql
`-- views
    |-- add_customer.ejs
    |-- customers.ejs
    |-- edit_customer.ejs
    |-- index.ejs
    |-- layouts
    |   |-- footer.ejs
    |   `-- header.ejs
    `-- login.ejs
```
![Alt text](ScreenShot/login.png?raw=true "Login")
![Alt text](ScreenShot/listing.png?raw=true "Listing")
![Alt text](ScreenShot/add.png?raw=true "Add")
![Alt text](ScreenShot/edit.png?raw=true "Edit")

## NOTES
This repo still use Express 3, you might want to upgrade yourself or you can Go here (https://github.com/knojiyak/node-curl) for newest Express 
