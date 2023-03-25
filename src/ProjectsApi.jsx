import react from "react"

const Projs = [
    {
        id:1,
        img:"url",
        link:"https://amith-342.github.io/drumKit/",
        name:"DrumKit",

        Description:"I have written this project using JavaScript.This uses two eventlisteners- click and keypress and the event listener triggers the audio either when the element is clicked or the corresponding letter is pressed."
    },
    {
        id:2,
        img:"url",
        link:"https://amith-342.github.io/simonGame/",
         name:"Simon Game",
        Description:"I have used jquery framework to write the code for this project.There are four colors and at each level the user has to guess the sequence of the color.The pattern of the colors is stored in an array(gamePatt) and the pattern of the user is stored in the array(userClickedPattern).After each level user pattern array is emptied and the pattern is checked with the game pattern."
    },
    {
        id:3,
        img:"url",
        link:"https://amith-342.github.io/keeperapp/",
        name:"Keeper App",
        Description:"I have used ReactJS framework for this project.It is a simple project that maintains notes.Two components in this project does most of the work The App Component and the Input Component.App component maintains the array which has to be updated once the user add a new item to the list.This is done using useState hook.The input component gets the title and the content.It passes these values to the app component using addItem function which was defined in App and was passed to input as a prop."
    },
    {
        id:4,
        img:"url",
        link:"https://amith-342.github.io/pixelEditor/",
        name:"Image Slider",
        Description:"I have used JavaScript for this project.It starts off by creating a specific amount of pixels using two for loops.It appends td to tr and the created tr to the table.Each pixel is a table element td with a unique id consisting of the i and j value from the for loops used to create the table elements.So when the user hovers on that particular pixel it can be uniquely identified using its id."
    },
    {
        id:5,
        img:"url",
        link:"https://github.com/Amith-342/newsLetterSignup",
        name:"NewsLetter Sign Up",
        Description:"I have used NodeJS and Express for this project.When the browser sends a get request for the home route index.html file is sent, when it sends a post request on the home route the data of the user is collected using req and res from the post callBack function.After collecting the data the user is usually responded with a success message by sending him/her a different html file based on his authentication.The data collected from the user is sent to the mail chimp server using the http get method.As this can't be deployed on git hub it could not be shown."
    },
    {
        id:6,
        img:"url",
        link:"https://amith-342.github.io/rockPaperScissor/",
        name:"Rock Paper Scissor",
        Description:"This project was  done using Javascript.This is a simple JS project that randomly generates a no between 1 to 3,each associated to either Rock,Paper or Scissor.As the user clicks on the buttons the user data is checked with the randomly generated number and the results are declared after comparision."
    },
    {
        id:7,
        img:"url",
        link:"https://amith-342.github.io/cssSite/",
        name:"My Site-CSS",
        Description:"Beginner Level Project"
    },
    {
        id:8,
        img:"url",
        link:"",
        name:"React Animative",
        Description:""
    },
    {
        id:9,
        img:"url",
        link:"https://amith-342.github.io/bootstrap/",
        name:"Bootstrap Tindog",
        Description:"Beginner Level Project"
    },
    {
        id:10,
        img:"url",
        link:"https://classy-muffin-179e44.netlify.app/",
        name:"To Do List(Mongoose)",
        Description:"Hosted on Netlify and Render for free.Should reload after every operation."
    },
    {
        id:11,
        img:"url",
        link:"https://amith-342.github.io/mergedReact/",
        name:"React Combine",
        Description:"It is a ReactJS project.It contains 3 projects.A restaurant,A news API and a MakeList project."
    },
    {
        id:12,
        img:"url",
        link:"https://classy-muffin-179e44.netlify.app/",
        name:"To do List Mongoose",
        Description:""
    }
    




]


export default Projs