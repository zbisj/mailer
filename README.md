# Mailer

## Description

* This project allows its users to create and query their emails. It is built to showcase how microservices or distributed systems work.
* The tech stack is as follows:

    - [PM2](https://pm2.keymetrics.io/) (run concurrent microservices with live-reloading and logs)
    - [Yarn](https://yarnpkg.com/) (package manager)
    - [Axios](https://www.npmjs.com/package/axios) (API quiries)
    - [Lerna](https://lerna.js.org/)  (managemet of multiple microservices across directories)
    - [MongoBD](https://www.mongodb.com/) (storage)
    - [Express](https://expressjs.com/) (microservice API routes and servers)
    - [MailJet](https://www.mailjet.com/) (creates and sends emails)
    - [GraphQL](https://graphql.org/) (database quiries and mutation)
    - [CloudAMQP](https://www.cloudamqp.com/) (run and manage RabbitMQ messages)
    - [MongooseJS](https://mongoosejs.com/) (database connector)
    
 ## Installation
 
 * Clone or download this repository
 * ``` cd ../path/to/the/file ```
 * ``` npm install pm2 -g ```
 * Root directory ```yarn install``` 
 * ``` cd packages/gateway && yarn install```
 * ``` cd packages/mailing_service && yarn install```
 * ``` cd packages/database_service && yarn install```
 * Create a MailJet account and copy your public and secrete API key and paste them inside the ```ecosystem.config.js``` file
 
## Usage 

* Open terminal and type ```pm2 start ecosystem.config.js``` this will run and watch all your microservices with live-reloading.
* (Optional) Open seperate terminal and type ```pm2 logs``` this will minitor and log all activities on your microservices.
* (Optional) Open seperate terminal and type ```pm2 monit``` this will minitor and log all activities on your microservices.
* Got to http://localhost:3001/gq
* ```query { mails }``` this query will fetch all emails in the database.
* ```query { mails(id: "EMAIL ID") }``` this query will fetch a single email from the database correspondig to the <ID> provided.
* ```mutation { mail(subject: "YOUR SUBJECT", receiver: "YOUR RECEIVER", content: "YOUR CONTENT") }``` this mutation will create and send an email.


## Contributing

* Contributions are welcomed via pull-requests on feature branches using [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/)


## License

* This project is open-source and available to everyone under the [MIT](https://opensource.org/licenses/MIT) license





