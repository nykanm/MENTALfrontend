Welcome to the MENTAL Frontend GitHub repository!

### Getting started:

Download necessary dependencies. 

```
npm install
```

For this project, we are using a service to send an email from our group's shared email
to a desired user. Since this is a public folder, we're using a `.env` file to keep our
credentials secret.

What you need to do is change `.env.example` to `.env` and fill in the details with a
gmail account. If you want to use the NeuroTech's, message on Slack for the secrets.

```
EMAIL=<your.email>@gmail.com
PASSWORD=<magic_words>
```

That's it! To run the server just enter the command below into your CLI:

```
node server.js 
```

And you'll find the website at `localhost:3000`.


Strategy: 
HTML: A div for each letter with two classes, .row-1 and .col-1 (but numbers 1-6)
CSS: A default style for a div, plus a .active class for lit up elements
JS: A function cycles adding then removing .active class to elements with .row[1-6] then .col[1-6] with a predetermined wait time
