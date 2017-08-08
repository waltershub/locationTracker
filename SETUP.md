
# MVP Solo Project

You have 24 hours to produce something compelling using the skills you've honed over the past five weeks.

There are two routes you could take:
1. MVP - Bare bones[here](https://github.com/hackreactor/hrnyc9-mvp): Come up with a well-defined, well-scoped idea that meets basic requirements and take the steps you deem necessary to make it a reality _OR_
2. MVP - Starter Kit[here](https://github.com/hackreactor/hrnyc9-mvp-starter): Use the structured guiding requirements to build a CRUD application. 

## 1. Bare Minimum Requirements (Bare Bones)

- Use git to track your progress 
- Start with an empty directory and a blinking cursor. Do not use any generators, templates or previous code.
- Your app must contain a server and a client application.
- Deploy the app to Heroku

As you work through the project, you may reference public resources and code from past sprints but __DO NOT COPY AND PASTE CODE.__ This is your chance to synthesize material from the past five weeks. 

### Project Demos:

Be prepared to spend no more than 2 minutes demoing and explaining your app to classmates and staff. 

## 2. Structured Requirements (Starter Kit)

This option requires less creativity but allows you to use the MVP project as a time to review.

The following requirements are divided up into the 3 main pillars of an application - the database, server and client. How you choose to implement these requirements is up to you but guidelines are provided below.

### Housekeeping
##### Complete by Day 1, 12:30pm 

- Brainstorm an idea (implement a technology, build a product, make art, etc).
- Wireframe the idea (draw out what the finished product would look like).
- Determine what portion of this could be done in 24 hours.
- Make a list of features and cut the scope down to only the most essential. 
- Cut the above scope in half again.
- Determine what technology makes sense for your project 
- Make sure you have all the necessary global tools installed
  - These include but are not limited to:
  - Node and npm
  - nodemon
  - git
  - Webpack (for React builds)
- Initialize a git repo with `$ git init` (remember to commit often!)
- Add and update the `.gitignore` file if necessary (you will want to ignore config files)
- Create the `package.json` file and add any necessary dependencies as you work through the project.
  - Don't forget to add any npm scripts you might need. _hint_: Maybe a script to start your server?
- **Do not forgo good planning. Planning is half the battle.** Only proceed if you have a clear idea of what your final product will look like. 

### Data Persistence _(Optional; recommended if applicable)_
##### Complete by Day 1, 3:30pm

- Consider what your app needs to store with an MVP-first mindset
  - A single table/collection might be all you need
  - Use knex/mongoose to connect to your Database
  - Use knex/mongoose to build your table(s)/schema
  - In a `models` directory, create your model(s) with methods to
    - `fetchAll` from a table/collection and
    - `addOne` to that table/collection
    - etc.
- OPTIONAL: Consider using Firebase, an online NoSQL database that you can use from the front-end directly (via a library)

### The Server
##### Complete by Day 1, 7:00pm 

The server should provide static-file serving and a RESTful API which can be used by the client-side code. Node 6+ supports most [common ES6 features](http://kangax.github.io/compat-table/es6/#node6). Consider writing your back-end code in ES6.

- In your entry point (index.js), complete a server that accepts HTTP requests
- Create a router
  - The handlers should make use of your models
- Test your server in Postman if necessary

### The Client
##### Complete by Day 2, 2:30pm

The client application should be a single page application, served via the server's static file service. It comprises code that's necessary to interact with the API through a user interface.

For this portion, although you could use any front-end technology, most people prefer Angular. 

### Deployment
##### Complete by Day 2, 4:30pm

- Deploy the app! (Be warned, Heroku does not play nice with SQLite. What would it take to use a different database in your production environment?)
- Make sure you create necessary files like the Procfile, and add any environment variables you might need. 

## Presentation

- Take at least an hour before dinner to prepare your presentation. Prepare, Practice and Present.
- [ ] Create a short script, it should guide the viewer through the app by discussing the problem, the solution and the tech stack used.
- [ ] Practice the script, making adjustments as necessary to make sure you touch on all of the salient points of your app
- [ ] Be ready to present after dinner. It will move at a fast pace so make sure you are ready.

## Advanced Content (for both options)

- Add Authentication to your app. Try using JWT in your implementation.
- **Have fun with CSS**. A lot of developers have (somewhat) unfounded fears of making things look good but it's a necessary skill.
- Write a couple of tests. Emulate past sprints.

## **Prepare to pitch / demo your project, tomorrow @ 4:30pm.**

## Resources

### Inspiration

- [Trees in Santa Monica MVP](https://pure-brook-58155.herokuapp.com/)
- [Energy Consumption MVP](http://mtham8.github.io/DVUSEnergy/#panel2)
- [Facial Recognition MVP](http://www.dmusicb.com/)
- [Subway Metro Map MVP](http://metrom8.colinzarnegar.com/map)
- [Connect Five MVP](https://aqueous-island-89621.herokuapp.com/#/play)
- [Flash Cards](https://flashyourself.firebaseapp.com/)

### APIs

- [Open Weather API](http://openweathermap.org/api)
- [SoundCloud API](https://developers.soundcloud.com/docs/api/guide)
- [Nutrition API](https://developer.nutritionix.com/v1_1/quick-start/upc-scan)
- [Pokemon API](http://pokeapi.co/)
- [List of Public APIs (100+)](https://github.com/toddmotto/public-apis)
- [Getty Images](http://developers.gettyimages.com/en/)
