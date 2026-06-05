# Peerceptive Assignment 4:
The purpose of this repository is to showcase my knowledge and skills with modern JavaScript, TypeScript, NPM and the Vite build toolchain.
I will show this by creating a simple calculator app that is written in TypeScript and uses Vite to run the app on a dev server during devlopment
and build/bundle the app into a package for a production build.

## Setting Up:
If you would like to run/test this app for yourself:

1. Go to the main page for this repo. Click the green code button and you can choose either to clone or fork this repository, or you can also download a zipped copy of the files
2. Open the file folder in a code editor of your choosing (I recommend VS Code)
3. If you don't have Node.js you will need to install it by going to www.nodejs.org
4. Once you have installed everything you can confirm it is installed correctly by opening a terminal in your code editor and type: ```node -v```, if it returns a version number you are good to go!
5. Install dependencies by typing ```npm install``` into the terminal.
6. From there you can type in the terminal: ```npm run dev``` to run the app in a dev server or you can type: ```npm run build``` and then ```npm run preview``` to build a production build of the app and preview it.


## Project Explanation:
<br>

<ins> **How did TypeScript's type system help me catch errors or improve code quality?:** </ins>
<br>
<br>
It allowed me to make sure that all the logic I wrote was actually returning the types that I wanted the logic to return and use. For instance if a variable was supposed to hold a string, TypeScript
would let me know if my logic was returning a number instead. Since I was working with strings for user input from the calculator button values, converting them to numbers for calculations and then returning those values back to strings to display in the calculator display, it definetly helped to keep track off what type was supposed to go where.
<br>
<br>

<ins> **What were my project structure decisions and how did I organize my modules, using import/export?** </ins>
<br>
<br>
This one was the biggest challenge for me as I'm still learning the ins and outs of setting up Node/Vite projects. After a few trips to the Bing search engine and helpful answers from Bing's version of CoPilot I decided to keep the basic structure from the intial project setup the same. I added a 3 sub-directories named ```components, utils and types``` in my ```src``` directory. From there I put the ```types.ts``` file in ```types```. I put the ```calculator.ts``` file in ```components``` since that file contain the Calculator class and function logic that controlled all the main logic for the app and the UI display for the app. I orginally had put logic for the different button presses in the ```main.ts``` file but after reading up online I learned that it was best practice to have ```main.ts``` be mostly just general entry point for Vite with minimal framework and imports and you should avoid putting any logic code in there. Under CoPilot's suggestion I moved the logic for the buttons to its own ```button.ts``` file in ```utils```.
<br>
<br>

<ins> **How did Vite's dev server and build pipeline support my devlopment workflow?** </ins>
<br>
<br>
It allowed me to keep a constant preview of my app open up at all times by running the app in a dev server. Whenever I changed something, it would instantly update the app and allow me to see the changes I was making in real time. Another very handy feature that was useful to me was that I was able to get instant feedback on if something I coded broke the app as Vite would very CLEARLY show that there was an error that prevented the app from running. Also the build feature came in handy as It caught an error the VS code and TypeScript didn't catch for some reason. I had declared a variable without setting a initial value and Vite pointed out that there could be problems using that variable in my logic without setting a intial value. After I corrected the error I was able to build and run the preview of the build without any problems.
<br>
<br>

<ins> **Which JavaScript patterns did I find the most useful and why?** </ins>
<br>
<br>
I found destructuring and closures to be the most useful. Destructuring allowed me to call specfic functions from inside the Calculator class such as the button logic in the ```buttons.ts``` file.
Closures came in handy in the Calculator class itself. I was able to reference different variable values and keep a running tally throughout the scope of the class. This allowed for the app to keep track of varables such as currentInput across different class methods.

## Repo Author:
Josh Gaudet/iltStudent07
