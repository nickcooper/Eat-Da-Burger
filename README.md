# Eat-Da-Burger

This app is a burger logger with MySQL, Node, Express, Handlebars, and ORM.

* Eat-Da-Burger, an app that lets users input the names of burgers they'd like to eat.
```
* Whenever a user submits a burger's name, your app will display the burger on the
 left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour!` button. When the user
 clicks it, the burger will move to the right side of the page.

* aApp will store every burger in a database.

```

### Prerequisites

This app requires a number of programs:
* [Node.js](https://nodejs.org/en/)
* NPM Packages: 
	* [Express](https://www.npmjs.com/package/express)
	* [Express-Handlers](https://www.npmjs.com/package/express-handlebars)
	* [MySQL](https://www.npmjs.com/package/mysql)

#### Directory structure

```
Eat-Da-Burger
│
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │	├── css
│   │   │   └── burger_style.css
│   │   ├── img
│   │   │   └── cork-board.png
│   │   └── js
│   │   	 └── burgers.js
│   │
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    │
    ├── layouts
    │   └── main.handlebars
    │
    └── partials
    	└── burgers
		    └── burger-block.handlebars
```