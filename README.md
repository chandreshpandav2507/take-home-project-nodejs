# Set Up

## Install Dependencies
Run `npm install` to install dependencies.

## Running Local Server
Run `node app.js` to run the local server. Note that you will have to kill the server and run it again after making code level changes.

## Understand SQlite Use
To reduce the complexity of this project, we have implemented the use of SQlite. SQlite fits really well here because it removes the complexity of client server as it simply becomes embedded in the program. 

With the help of the logic in the `/db` directory, we seed and persit data to a local file (store.db). 

Everytime the local server runs, it completes a seeding step. This seeding step orchestrated in `db/seed.js` and invoked in `app.js` mainly takes care of creating the database tables required for this application to function.

## Development Tools
This README makes the assumption that you are going to use `curl` to test your endpoints. This is not a constraint as you are welcome to use any other API testing clients like Postman.

We do not think you will need it, but if you need to visualize the items in the datastore, you may use DB Browser for SQlite or any other tools out there.

You are welcome, but are not required to improve the development process of this project by adding things like nodemon or custom npm scripts.

# Application Design

## Operators
Veryable defines an operator as an individual who works on a job opportunity. Below is how this project describes the operator resource.

```JSON
{
    "id": 60
    , "firstName": "Zak"
    , "lastName": "Millar"
    , "createdAt": "2021-10-21 15:53:31"
}
```

In this project, we have already defined and created the operators collection. It supports two endpoints described below. We encourage you to refer to it when creating new collections.

### **GET /operators/{operatorId}**
This is used to fetch an individual operator given their ID.

```BASH
curl --request GET 'http://localhost:3000/operators/8'
```

### **POST /operators**
This is used to create a new operator.

```BASH
curl --request POST 'http://localhost:3000/operators' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "firstName": "Zak"
        , "lastName": "Millar"
    }'
```

## Businesses
Veryable defines a business as an entity that creates job opportunities for operators. Operators interact directly with businesses as they attend those job opportunities.

We expect this resource to have an identifier as suggested below. We also expect this resource to have useful and relevant business attributes. Reference the [schedule](#Schedules) portion for information that could potentially be useful for an operator who wants to see their upcoming work.

>Done: Define and create this collection.

>Done: Create seeding for the corresponding database table in the `db/seed.js` file.

```JSON
{
    "id": 14
    ...
}
```

### **POST /businesses**
>TODO: Create an endpoint to create a business.

```BASH
curl --request POST 'http://localhost:3000/businesses' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        ...
    }'
```

## Ops
Opportunities or Ops for short are jobs created by businesses and performed by operators. As a resource, it has the necessary attributes to describe a job that will be performed in one day. 

Below, you will see a skeleton and initial suggestions of what the Op resource should look like. Like the businesses collection, feel free to reference the [schedule](#Schedules) portion to help determine the appropriate attributes of this resource.

>Done: Define and create this collection.

>Done: Create seeding for the corresponding database table in the `db/seed.js` file.

```JSON
{
    "id": 14
    , "operatorId": 60
    , "businessId": 14
    ...
}
```

### **POST /ops**
>Done: Create an endpoint to create an op.

```BASH
curl --request POST 'http://localhost:3000/ops' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "operatorId": 60
        , "businessId": 14
    }'
```

## Schedules
The schedules collection is a bit different from the collections above. This one aggregates data for a bigger purpose. We need to help operators visualize what, where, and when they are going to be working.

### GET **operators/128/schedules**
In the path above, 128 is an example of an operator ID
>TODO: create an endpoint to fetch an operator's schedule. The endpoint should respond with an array of elements defined as what's below.

```JSON
[
    {
        "businessName": "Tesla"
        , "opTitle": "Replacing Tires"
        , "pay": 200.00
        , "startTime": "2021-10-21 10:00:00"
        , "endTime": "2021-10-21 15:55:00"
        , "addressLine1": "Something"
        , "addressLine2": "Line 2"
        , "city": "Dallas"
        , "state": "TX"
        , "zip": "7000"
    }
    , {
        "businessName": "Goodwill"
        , "opTitle": "Moving boxes of clothes"
        , "pay": 105.50
        , "startTime": "2021-10-22 10:00:00"
        , "endTime": "2021-10-22 15:55:00"
        , "addressLine1": "Something"
        , "addressLine2": "Line 2"
        , "city": "Irving"
        , "state": "TX"
        , "zip": "7000"
    }
]
```

# Vocabulary
Collection
: A directory that contains all things related to a particular resource. In our case, a resource is something that can be stored as a row in a database, or as a result of an algorithm. For example, an **operator** is a resource, and the directory that has everything **operator** related is labeled **operators**