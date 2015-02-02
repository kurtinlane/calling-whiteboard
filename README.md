# calling-whiteboard
calling-whiteboard


The main idea behind this repo is to create a web application that is a virtual whiteboard. 
On the virtual whitebaord are cards that will have information about a single indiviudal. 
The info for these cards will be from [lds webservices] (https://tech.lds.org/wiki/LDS_Tools_Web_Services). 

So a Bishop or Bishopric member logs into our our website (same as logging into [lds.org] (https://www.lds.org/?lang=eng)

Once logged in, our app hits all the necessary endpoints to get information about the callings and populates 
the tree of callings on our website with the individuals info
 - how long they have been in the calling
 - the name of the calling
 - what callings they have ever held
 - they basic contact info
 
Could also have a list of people who don't have callings on the right, and whatever else we think it needs.

Add as you please.. just make branches and ask for you code to be merged with pull requests! 



### To get it running

`git clone` this repo

`cd` into this repo

once in the repo run: 

`npm install`

`bower install`

`grunt server`


This project was started off of this [project](https://github.com/kennethlynne/generator-angular-xl/blob/master/README.md) So look here if you have any questions about deployment, grunt files, npm, bower or the way the app is set up 

