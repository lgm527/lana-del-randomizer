/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

//Like function
let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

let articleHearts = document.querySelectorAll(".like");

function likeCallback(e) {
  let heart = e.target;
  let text = document.querySelector('.like');
  mimicServerCall()
    .then(function(serverMessage){
      alert(serverMessage);
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      alert("Something went wrong!");
    });
}

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("YAY, thanks for showing some love");
    }, 300);
  });
}

//random lana lyric button
let button = document.getElementById("button");
let answer = document.getElementById("answer");

let quotes = [
  "It's not fashionable to love me.",
  "I fell free when I see no one and nobody knows my name.",
  "I've got nothing much to live for ever since I found my fame.",
  "Boy, look at you, looking at me.",
  "Loving me is all you need to feel.",
  "Got my blue nail polish on. It's my favorite color and my favorite tone of song.",
  "You know sometimes, baby, I'm so carefree.",
  "I keep my lips red to seem like cherries in the spring.",
  "What I do, I do best.",
  "In the land of gods and monsters, I was an angel.",
  "Be young, be dope, be proud.",
  "Done my hair up real big beauty queen style.",
  "It's alarming honestly how charming she can be.",
  "I'm your national anthem.",
  "He said to 'be cool' but I'm already coolest.",
  "All the pretty stars shine for you, my love.",
  "It never was about the party or the clubs.",
  "Those summer nights seem long ago.",
  "The power of youth is on my mind.",
  "I pledge allegiance to my dad for teaching me everything he knows.",
  "Life is awesome, I confess.",
  "High heels off, I'm feeling alive.",
  "Nothing scares me anymore."
];

button.addEventListener("click", function(){
    answer.innerHTML = `"${quotes[Math.floor(Math.random()*quotes.length)]}"`
  });