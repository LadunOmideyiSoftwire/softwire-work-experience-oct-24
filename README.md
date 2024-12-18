# Softwire Work Experience - Oct 2024

## Week Schedule

| Day/Time  | Activity                                                                       |
|-----------|--------------------------------------------------------------------------------|
| Monday    |                                                                                |
| 10:00     | Arrival/tour                                                                   |
| 10:30     | Introductions and Setup                                                        |
| 11:30     | Feature specification and Trello Setup                                         |
| 12:00     | Presentation: Git and Github                                                   |
| 12:30     | Lunch break                                                                    |
| 13:30     | Code development                                                               |
| 14:00     | Pairing session (Sammy Young)                                                  |
| 15:00     | Guest Presentation: Apprenticeships (Joseph Walker)                            |
| 15:30     | Code development                                                               |
| 16:00     | End of Day                                                                     |
| Tuesday   |                                                                                |
| 10:00     | Standup                                                                        |
| 10:30     | Presentation: HTML/CSS/JS                                                      |
| 11:00     | Guest Presentation: What It Means To Be A UX Designer (Gabi Mikolajczak)       |
| 11:30     | Code development                                                               |
| 12:30     | Lunch break                                                                    |
| 13:30     | Code development                                                               |
| 16:00     | Live JS Presentation (Sammy Young)                                             |
| 16:00     | End of Day                                                                     |
| Wednesday |                                                                                |
| 10:00     | Standup                                                                        |
| 10:30     | Presentation: HTTP Requests and Backend Development                            |
| 11:00     | Code development                                                               |
| 12:00     | Guest presentation: Operating Systems (Atakan Cole)                            |
| 12:30     | Lunch break                                                                    |
| 13:30     | Code development                                                               |
| 16:00     | End of Day                                                                     |
| Thursday  |                                                                                |
| 10:00     | Standup                                                                        |
| 10:30     | Code development                                                               |
| 11:00     | Guest presentation: Recruitment (Frances Portaluri)                            |
| 11:30     | Code development                                                               |
| 12:30     | Lunch break                                                                    |
| 13:30     | Code development                                                               |
| 16:00     | End of Day                                                                     |
| Friday    |                                                                                |
| 10:00     | Standup                                                                        |
| 10:30     | Code development                                                               |
| 12:30     | Lunch break                                                                    |
| 13:30     | Presentation Prep                                                              |
| 14:00     | Presentation                                                                   |
| 15:00     | Retro                                                                          |
| 15:30     | Fun and games!                                                                 |
| 16:00     | End of Day                                                                     |


## Set up
### Download and install required software
- [VS Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en) - you can pick the one that says "LTS" (Long-term support)
- [Git](https://git-scm.com/downloads) - select "Windows" and then "Click here to download"
You can use the default settings when installing them - just click "Next".

### Create a GitHub account
Go to [GitHub](https://github.com/) and create an account with your email address, unless you already have an account.

### Join our Trello board
To help us track our tasks and their statuses, I've set up a [Trello board](https://trello.com/b/xht3NNc5/softwire-work-experience-october-24). I will send you an invite link on the first day. You will be prompted to sign in / up.

### Clone the code
We all need to create a local copy of the code before you can make changes to it on your computer.
1. Open Powershell
2. Type the following command and hit enter
    ```
    git clone https://github.com/LadunOmideyiSoftwire/softwire-work-experience-oct-24.git
    ```
This tells `git` to `clone` the repository i.e. create a copy of the code on your laptop at `C:\Users\Administrator\softwire-work-experience-oct-24`.

### Open the project in VS Code
On the same powershell window, execute the following command
```
code softwire-work-experience-oct-24
```
This tells VS Code (`code`) to open the new folder `softwire-work-experience-oct-24`.
You should now see the project in VS Code. 


### Install dependencies
Dependencies are external pieces of software that our code relies on. These are defined in `package.json`.
1. Open a terminal within VS Code (`Ctrl + Shift + '`). This works the same way as the Powershell that we were just using, except VS Code opens it in the project folder for you automatically.
2. Run the following command in the terminal to install all our dependencies:
    ```
    npm install
    ```

You'll need to run this command again whenever a new dependency is added (which we probably won't do this week), but not every time when you run the website locally.

### Add Git Graph VS Code extension (optional but recommended)
This extension helps us visualise the git history.

- Open VS Code
- Click the extension tab on the left panel
- Search for "Git Graph"
- Click "Install"

Now when you open the Source Control tab on the left, you have the option to see the git history.

## Running locally
To test your changes whilst you are developing, you will need to be able to run the website locally. 
This means that the code is running on your own computer and you can access it in a browser without having to deploy the app publicly over the internet.

- Make sure that all of the dependencies are installed - You would've run `npm install` in the previous section
- Run the app locally
  - You can run the app with `npm start`
  - If you're interested in what `npm start` does, you can look in `package.json` where I've defined it to run `serve src` which uses the `serve` library to run the `src` folder as a website we can visit locally.
- Visit the website
  - After you have run `npm start` you should see `Serving! Local: http://localhost:3000`
  - If you visit `http://localhost:3000` now, you will see the version of the index page that would be generated by your version of the code

## Useful Links

### Project Resources

| What                 | Why                                                          | Where                                                                                                                  |
|----------------------|--------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| Trello Board         | To keep track of tasks and their statuses                    | [here](https://trello.com/invite/b/671ec59a322c9dcd5a7f78a8/ATTI36b0bf801bed030c6da765e469a36c72012FAF15/softwire-work-experience-october-2024) |
| GitHub repo          | Central location for all of our code                         | [here](https://github.com/LadunOmideyiSoftwire/softwire-work-experience-oct-24)                                                |
| Live site (frontend) | Where our current `main` branch code is running the frontend | https://softwire-work-experience-oct-24.vercel.app/                                                                  |

### Useful HTML/CSS/JavaScript Guides

| What                                                                 | Where                                                                                                 |
|----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| HTML Basics                                                          | [here](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)       |
| CSS Basics                                                           | [here](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)        |
| CSS Flexbox Guide                                                    | [here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)                                       |
| JavaScript Basics                                                    | [here](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics) |
| HTTP Request Methods (we'll probably only need GET and POST)         | [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)                                     |
| HTTP Response Codes (we'll probably only need 200, 400, 404 and 500) | [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)                                      |



## Technical Overview 

The codebase has two components: frontend and backend. The `main` branch of the repository is set to run on Vercel 
(a cloud platform). I've set this all up for you so you don't need to worry about how this hosting works, but I'll 
be giving a quick overview on Wednesday to make it feel less "magic".

### Frontend vs Backend
For a full Tetris website, we will need two separate components - frontend and backend. The frontend deals with what happens on the browser like how the tetris blocks are displayed and how the game is played. If we want to store any data about users e.g. their scores, we need a database, which can be accessed through the backend. So when the frontend (the browser side) needs any user data, it sends a "request" to the backend, and then the backend communicates with the database, and sends the data back to the frontend. We'll talk more about this on Thursday.

We'll likely only have the time for the frontend development this week.

### Branches
The `main` branch of the repository is set to run on Vercel 
(a cloud platform). I've set this all up for you so you don't need to worry about how this hosting works, but I'll 
be giving a quick overview on Wednesday to make it feel less "magic".

### Frontend
The frontend codebase contains all of the code to control what you see on the screen when you use the website. It is 
written in HTML/CSS/JavaScript.
- HTML provides the basic structure of each page
- CSS is used to control the formatting and layout of the HTML content
- JavaScript is used to control the behaviour of different elements on the page

When running (either on Vercel or locally), the files in the frontend directory are available at `<siteurl>/<filename>`. 
For example, `src/game.html` is available at `https://softwire-work-experience-oct-24.vercel.app/game` or `http://localhost:3000/game`. The `src/index.html` is special in the sense that it can be accessed through `https://softwire-work-experience-oct-24.vercel.app` or `http://localhost:3000` without specifying `index`. 

Lots of websites use frameworks or libraries rather than "Vanilla JavaScript" to put together the site (you may have 
heard of React, Angular, Vue.js or many more, for example). These provide useful in-build functionality that makes it
easier to build complex applications. In this project, we will not be using any specific library/framework in the 
frontend so that we can focus on writing code that we control rather than integrating with a specific "black box" that 
does things for us.

Larger projects also often use TypeScript (for both frontend and backend) rather than JavaScript. TypeScript is a language that builds on top of JavaScript to add some new features. For simplicity, we will be using JavaScript for this project in both the front-end and back-end code.

## How to Contribute Code

This section will all be covered by a presentation on the first day, so don't worry about this until we've spoken about Git/GitHub! It should be a useful reminder in future though!

Git can be a bit confusing if you're using it for the first time. If you're unsure about any step, feel free to grab me and we can go over it.

### Initial repository set up
- See the _Set up_ section on how to clone the repo.

### Working on a Feature

Try not to make changes on the `main` branch, this branch should always only contain code that has been reviewed. Development work should be done on a feature branch. However, don't worry if you accidentally work on `main`! Just let me know and I'll help you move it over to a feature branch.

- Make sure you are on the `main` branch and that it is up to date:
    - `git checkout main`
    - `git pull`
- Create a branch for your feature:
    - `git checkout -b [your-own-feature-branch-name]`
- Make some code changes
- Add your changes:
    - (if you want to check what changes you have): `git status`
    - `git add [yourFiles.example]`
    - `git commit -m "sensible message here, e.g. add a line piece to the library"`
    - You can (and probably should) do this process multiple times on your branch as you gradually add code to acheive the feature
- Push the changes to GitHub:
    - If it's the first time you have pushed this branch:
        - `git push --set-upstream origin [your-own-feature-branch-name]`
    - If you have pushed this branch before:
        - `git push`

### Requesting a Review

Once you are happy with your code, you can open GitHub in a browser and do the following:
- Navigate to the page for the repository
- Select "Pull requests" in the bar at the top
- Click the "New pull request" button
- Set the branches as follows:
    - base: `main` (this should be the default)
    - compare: `your-own-feature-branch-name`
- Click "Create pull request"
- Add a sensible title and description of your changes, then click "Create pull request"
- I will then review your changes and either make some comments or approve it:
    - If I make comments, you can make the changes on your branch locally and `git push` to update the code in GitHub
    - If I approve it, we can merge it into `main`. Wahey!

## Working on Tetris after the work experience week
### To Keep Working On Tetris Locally:
First, make sure you have all the required software on your laptop (See the Set up section at the top).

Next create your own repository:
1. Fork the repository (click the "fork" button in the top right of this repository main page on Github). This will create your own GitHub repository with the same code as this one, but make it yours!
2. Find the URL of your forked repository (on your repo's main page, click the green "Code" button and copy the `https` URL)
3. On your computer, use the terminal to go to the folder you want to download the repository in. You can use the `cd` command e.g. `cd /someFolder/anotherFolder`
4. Run `git clone <url-of-your-forked-repo>`.
5. Navigate to the cloned repo using `cd`
6. You should now have your own version of the code you can work on and push to.

### To Deploy Your Own Version Of Tetris:
1. Follow all the steps of the previous section to get your own version of Tetris in Github and locally.
2. Set up a free Vercel account (link [here](https://vercel.com/)).
3. Add a new project.
4. Import your own forked version of the tetris repository into vercel. You are linking Vercel and GitHub here
5. Change the Root Directory to be `src` because that's where all the code is
6. Click deploy to get your site up and running
7. Once it is completed, click on the continue to dashboard button
8. You can visit your site by clicking on the link under where it says Domains
9. When you push to the main branch on your Github repository, the website should now automatically deploy to your own Vercel app URL.