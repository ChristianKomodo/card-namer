# Card Namer

### Practice app using NodeJS and Express

Simple CRUD exercise in Node using an internal array instead of database connection.  Uses [Joi](https://www.npmjs.com/package/joi) for basic object schema validation.

1. Clone the repo, and then run `npm install`.
2. Start the server with `nodemon index.js`.
3. Navigate to `localhost:3000`


#### Run these exciting commands!

`localhost:3000/`
Shows the application title "Card Namer Deluxe"

`localhost:3000/api/cards/`
Displays a list of the cards in the array

`localhost:3000/api/cards/1`
Displays the first card in the array.  There are three.

If you use [Postman](https://www.getpostman.com/) to execute a `PUT` with a new name as the body of the request, you can edit one of the existing cards:

`PUT` to `localhost:3000/api/cards/1` for instance, include this JSON body:
```
{
    "name": "Different Creature Name"
}
```



Enjoy!