# REST-API
A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services. REST stands for representational state transfer.REST is a set of architectural constraints, not a protocol or a standard. API developers can implement REST in a variety of ways.When a client request is made via a RESTful API, it transfers a representation of the state of the resource to the requester or endpoint. This information, or representation, is delivered in one of several formats via HTTP: JSON (Javascript Object Notation), HTML, XLT, Python, PHP, or plain text. JSON is the most generally popular file format to use because, despite its name, it’s language-agnostic, as well as readable by both humans and machines.
<h2> Technology Used </h2>
<p align="justify">
<img src="https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript"/>
<img src="https://img.shields.io/badge/-Mongo DB-black?style=flat-square&logo=mongodb"/>
<img src="https://img.shields.io/badge/-Express-black?style=flat-square&logo=express"/>
<img src="https://img.shields.io/badge/-Node JS-black?style=flat-square&logo=node"/>
<img src="https://img.shields.io/badge/-Git-black?style=flat-square&logo=git"/>
<img src="https://img.shields.io/badge/-GitHub-black?style=flat-square&logo=github"/>
<img src="https://img.shields.io/badge/-Postman-black?style=flat-square&logo=postman"/>
</p>
<h2>Project Overview </h2>
<p> The REST API that is created is a Bank API, in which the user can add his information like account number, age and password. Mongoose is used to connect Node JS to MongoDB, end point is created on http://localhost:3000/bank using which CRUD operations can be performed on the data.</p>
<h2> Important topics covered </h2>
<ol>
  <li> Creating REST API using Express JS.</li>
  <li> Express JS.</li>
  <li>MongoDB.</li>
  <li> Mongoose to connect NodeJS to MongoDB.</li>
  <li> Adding validation to the user data.</li>
  <li> Accessing API from the browser. </li>
  <li> Testing API endpoints using Postman. </li>
</ol>
<h2>Project Installation and Working</h2>
<p>Starting the Mongo DB database connection on local port</p>

```Bash
C:\Users\trish\mongoDB\bin\mongod.exe --dbpath=C:\Users\trish\mongoDB-data
```
<p>Initialise npm in project folder</p>

```Bash
npm init
```
<p>Install Dependencies</p>

```Bash
npm i mongodb
npm i mongoose
npm i validator
npm i express
```
<p>Start up the server</p>

```Bash
npm run dev
```
 ## Testing with Postman

- Install [Postman](https://www.getpostman.com/apps) to interact with REST API
- Create a user with:
  - URL: http://localhost:3000/bank
  - Method: POST
  - Body: raw + JSON (application/json)
 
- Read/find a user with:
  - URL: http://localhost:3000/bank/
  - URL: http://localhost:3000/bank/:id
  - Method: GET
- Update a user with:
  - URL: http://localhost:3000/bank/:id
  - Method: PATCH
  - Body: raw + JSON (application/json)
- Delete a user with:
  - URL: http://localhost:3000/bank/:id
  - Method: DELETE
