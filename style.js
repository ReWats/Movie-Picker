//I originally wanted each genre button to iterate through a list of movies and return a randomised movie from that genre but I couldn't make it work so I created a 'Surprise Me' button at the bottom of the div which will return a random movie once clicked.

//Created array of random movies
const movies = [
  "Dumb and Dumber",
  "The Hangover",
  "Big Trouble in Little China",
  "Goonies",
  "Lost Boys",
  "Twilight",
  "The Green Mile",
  "Shawshank Redemption",
  "Lucy",
  "Split",
  "Cloverfield",
  "Don't Look Up",
  "Twister",
  "A Quiet Place",
  "Girl on the Train",
  "Stand By Me",
  "IT",
  "The Cloud Atlas",
  "The Matrix",
  "Aliens",
  "Waterworld",
  "A Star is Born",
  "Joker",
  "Sister Act"
];

//Used onClick in HTML to call the function
function randomMovie(){
  const movieList = document.getElementById("surpriseMe");
  movieList.innerHTML = "";

//Get a random movie from the list
const randomMovie = getRandomMovie(1); 

//Although I only want to return 1 item, the for loop makes the movie title returned randomised from the array and would allow for flexibility if I wanted to return 2 or more titles
for (let i = 0; i < randomMovie.length; i++) {
  const film = randomMovie[i];
    const listItem = document.createElement("ul");
    listItem.textContent = film;
    movieList.appendChild(listItem);
}
//As I am only returning 1 movie title this is not really efficient/required I think but was good practice
 function getRandomMovie(count) {
    const randomMovie = [];
    const movieCopy = movies.slice();

//Again, if I were returning more than 1 title, this would ensure randomisation
    while (randomMovie.length < count) {
      const randomIndex = Math.floor(Math.random() * movieCopy.length);
      const pickedMovie = movieCopy.splice(randomIndex, 1)[0];
      
      randomMovie.push(pickedMovie);
    }
    return randomMovie;
  }
}

//Change inner text of specified button to recommend a movie of that genre when clicked. I tried using toggle and onClick in the HTML but it caused the last button only to toggle no matter which button was clicked even when using unique IDs
document.getElementById("btnA").addEventListener("click", function(){ 
  const bnA = document.getElementById("btnA");
    if (bnA.innerText === "Comedy") {
        bnA.innerText = "Deadpool";
    } else {
        bnA.innerText = "Comedy";
    }
})

document.getElementById("btnB").addEventListener("click", function(){ 
  const bnB = document.getElementById("btnB");
    if (bnB.innerText === "Horror") {
        bnB.innerText = "Halloween";
    } else {
        bnB.innerText = "Horror";
    }
})

document.getElementById("btnC").addEventListener("click", function(){ 
  const bnC = document.getElementById("btnC");
    if (bnC.innerText === "RomCom") {
        bnC.innerText = "The Proposal";
    } else {
        bnC.innerText = "RomCom";
    }
})

document.getElementById("btnD").addEventListener("click", function(){ 
  const bnD = document.getElementById("btnD");
    if (bnD.innerText === "Thriller") {
        bnD.innerText = "Taken";
    } else {
        bnD.innerText = "Thriller";
    }
})










 
