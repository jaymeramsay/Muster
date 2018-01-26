# Muster

**Welcome to Muster!**
![./musterpage.jpg)]

Muster is an interactive, full stack web app built over the course of two weeks.

Helping people budget and set goals to acquire wish list items, Muster breaks down salary and calculates how many labor hours needed to purchase the items.

Technologies:
* React
* Node.js
* Express
* PostgreSQL
* Bcrypt
* CSS
* **[Knex.js](http://knexjs.org/)** - SQL query builder
* **[Amazon Wish List API](https://github.com/doitlikejustin/amazon-wish-lister)** - wish list item generator
* **[Heroku](http://www.heroku.com)** - deployment
* **[Axios](https://www.npmjs.com/package/axios)** - front-end routing library
</hr>

## Challenges:

* This is my first application built with React, and I learned so much about the core of how React operates: parent-child data sharing, creating and maintaining state, properties and they pass data, component lifecycle, nested components, and manipulation of the shadow DOM.

* Integrating React in a way that makes the most sense. I started the project by installing my dependencies as planned, however I learned that React handles dependencies independently of the root application. I had to determine which files to keep and which files to delete in order for my front-end and back-end to communicate properly.

* Routing between Knex queries and Axios queries clearly. Since Axios was used in the front-end, and Knex was used in the back-end, they each had a different set of queries to build. I had to work to make sure that the proper data was being sent to the proper place. 

* I had some deployment issues around corrupt migrations. In the beginning, I created an ERD that shaped my database. I went ahead and created all of those tables at the top of my sprint, later to realize I only needed one table instead of three. I deleted the tables I didn't need and learned what it means to do that. Just because I delete them from my file structure, it doesn't mean that Knex deletes them, and if I delete the migrations tables in Knex, that doesn't mean that Heroku deletes them. I learned that I probably shouldn't ever mess with my databases like this in the future, but if absolutely necessary, I know how to solve this problem and where to drop my tables.
<br><br>
<br>

## Features:

*Displays Amazon wish list items
!()

## Experience Muster for yourself!
### Have a look at the [demo](https://youtu.be/Q1L-1ZRinI4) here!

### Getting Started with the Code
- npm install
- npm run build

### Check it out on [Heroku](https://musterapp.herokuapp.com)!
