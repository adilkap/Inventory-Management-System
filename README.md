# Inventory Management Web Application

Thanks for taking the time to view my project!
I have the required functionality for the challenge, along with the ability to:
Push a button export product data to a CSV

## Technologies Used
1. Node.js
2. MongoDB (mongoose)

## Prerequisites
* [node.js](https://nodejs.org/en/) (server-side)

The following steps assume that this dependency are present.

## Run the Project

1. Clone this repo
2. cd into the repo ```cd image-repo```
3. Use npm to install dependencies ```npm install```
4. Start the server using ```npm start```
5. Navigate to [http://localhost:3000](http://localhost:3000)


## Project Scope

The application has both the backend and frontend components complete to enhance user experience!

Users are able to:
1. Add inventory items with multiple details 
2. Update existing inventory items
3. Delete existing inventory items
4. Export all inventory data to ```.csv``` format 


## User Flow - API's

| Type | Purpose | Endpoint
| ------------- | ------------- | ------------ |
| GET  | Get all existing inventory items | /api/items |
| POST  | Create inventory item | /api/items |
| PUT  | Update an inventory item | /api/items/:id |
| DELETE  | Delete an inventory item  | /api/items/:id |
| GET | Export to csv format | /export |


## DB Models

Each inventory items uses the following model:
```
name: STRING
type: STRING
status: STRING
location: STRING
receivedDate: DATE
shippedDate: DATE
```


### Testing and Improvements:

Due to the smaller nature of this project, very simple tests were added. In the future, other unit and black-box tests providing 100% code coverage will be included. 

Improve:
1. Deployment
Dockerizing this system and adding a CI/CD pipeline is key for further development.
2. Authentication
The authentication system can be added by using a 3rd party such as firebase or cognito, providing services such as 2FA, reset, and verification.

