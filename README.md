# Simple Form
## Prerequisites

These are both JavaScript based projects so all you're going to need is:

- Any recent version of Node such as  [v14.15+](https://nodejs.org/en/download/current/)
- NPM, I'm currently running v6.14.12 (on Windows OS it comes with Node)

## Server

Just CD into to the SimpleForm\Server folder and run ```npm install``` and then ```npm start``` that should start the server. You're now good to start the webpage / client!

## Client

It's not convention to include the dist folder in a GIT repo but I did it for convenince sake. All you need to do to start the form is go into the SimpleForm\Client\dist directory and open the index.html file and it should pop up into your preferred browser!

Otherwise if you want to actually "run" it, just change directories into SimpleForm\Client, simply again give it a ```npm run dev``` and then either ```npm run dev``` to run the webpack dev configuration or rebuild the dist folder with ```npm run build```. 
