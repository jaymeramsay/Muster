https://musterapp.herokuapp.com


# Muster

**Welcome to Muster **

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

### Challenges:

* I've never made a full-stack web application by myself before.

* This is my first application built with React, and I learned so much about the core of how React operates: parent-child data sharing, creating and maintaining state, properties and they pass data, component lifecycle, nested components, and manipulation of the shadow DOM. Considering how vast React is, I'm sure I only but scratched the surface but also achieved a rich foundation for the framework as well.

* React is a very complex framework to learn and implement into a stack. It took a significant amount of time trying to figure out the file structure and boilerplate of the create-react-app and how it works with an Express back-end. I created the file structure for my app right away, installing most of the dependencies for my back-end. When I finally installed create-react-app, I learned that React had its own dependencies, node_modules, package.json, etc. It even has it's own localhost, which I later learned was for quick-view rendering. It was challenging to figure out which ones to keep and how to re-structure the application so that React and Express are both getting the same information from one set of files. Then, I had to make sure Heroku was getting information from my database. Once I figured out the work flow between React, Express, and Heroku, I could start focusing more on my user stories.

* Routing became confusing. Between my Knex queries on the back-end and my Axios queries on the front-end, sending data wasn't clear at first. There were different queries for each end and I had to double check and make sure the right data was being sent from end to end.

* I had some deployment issues around corrupt migrations. In the beginning, I created an ERD that shaped my database. I went ahead and created all of those tables at the top of my sprint, later to realize I only needed one table instead of three. I deleted the tables I didn't need and learned what it means to do that. Just because I delete them from my file structure, it doesn't mean that Knex deletes them, and if I delete the migrations tables in Knex, that doesn't mean that Heroku deletes them. I learned that I probably shouldn't ever mess with my databases like this in the future, but if absolutely necessary, I know how to solve this problem and where to drop my tables.

* Implementing auth was tricky. I'd used Bcrypt before but not with Axios. It took some time and research to make sure that I only needed to authenticate in Express; I didn't need to do so in the front end with Axios as well.

<br><br>
<br>


# Getting Started
- npm install
- npm run build
