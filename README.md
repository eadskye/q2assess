# q2assess

# Galvanize Message


## Read the entire README before beginning. Commit often.


## Important Note

This is a timed assessment.  You should be able to complete it in under 3 hours.  Remember to commit and push to your forked repository. At the _very least_, you should commit after each test passes. We will use the timestamps to evaluate how long it took.

## Project Description

The app is a simple message board.

### Requirements

You are responsible for:

- [ ] Forking and cloning this GitHub Repo.
- [ ] Creating the test and development databases locally.
- [ ] Creating the database migration.
- [ ] Creating the database seed data.
- [ ] Creating the RESTful API to handle messages resource.
- [ ] Creating a client website that enables all CRUD functionality for messages resource. *You can decide what form the client website takes.*
- [ ] Deployment of full stack app on Heroku.

**TIP: Make the site functional before you make it pretty. Functional html pages are sufficient for the 3-hour requirement.**


### Tests

We have provided tests to help you build the database migrations, seeds and routes.  *Use them.* If you are unsure of what the test is asking for, open the test and read it. You can ask an instructor for test clarifications.

At the command line type `npm test` to run the tests.

**TIP: When testing your migrations you may need to drop and recreate your database before running the test so that your migration changes are reflected in the database.**

### Messages Object

You need to create routes, seed data and migrations for the following object.

```javascript
[{
	id:1,
  	name:'Criminal',
  	message:'What Are You?'
},{
	id:2,
    name:'Batman',
    message:'I\'m Batman'
}]
```

```text,kkk
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                          messages                                        │
├─────────────┬─────────────────────────┬──────────────────────────────────────────────────┤
│id           │serial                   │primary key                                       │
|name         │varchar(255)             │not null                                          │
|message      │varchar(255)             │not null                                          │
│created_at   │timestamp with time zone │not null default now()                            │
│updated_at   │timestamp with time zone │not null default now()                            │
└─────────────┴─────────────────────────┴──────────────────────────────────────────────────┘
```
