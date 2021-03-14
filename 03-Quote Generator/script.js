const shareButton = document.querySelector(".share-button");
const newQuoteButton = document.querySelector(".new-quote-button");

const quoteText = document.querySelector(".text");
const quoteAuthor = document.querySelector(".author");
const body = document.querySelector("body");

let quotes = [
  {
    quote: "I'm not sure if I was the first man in space or the last dog.",
    source: "-Yuri Gagarin",
  },
  {
    quote:
      "'We’ll never survive!' 'Nonsense. You’re only saying that because no one ever has.'",
    source: "-William Goldman",
  },
  {
    quote:
      "You know, Hobbes, some days even my lucky rocket ship underpants don't help.",
    source: "-Bill Watterson",
  },
  {
    quote:
      "You people talk about the living and the dead as if they were two mutually exclusive categories. As if you cannot have a river that is also a road, or a song that is also a color.",
    source: "-Neil Gaiman",
  },
  {
    quote:
      "Yet man will never be perfect until he learns to create and destroy; he does know how to destroy, and that is half the battle.",
    source: "-Alexandre Dumas",
  },
  {
    quote:
      "Never let your sense of morals prevent you from doing what is right.",
    source: "-Isaac Asimov",
  },
  {
    quote:
      "Let's think the unthinkable, let's do the undoable. Let us prepare to grapple with the ineffable itself, and see if we may not eff it after all.",
    source: "-Douglas Adams",
  },
  {
    quote:
      "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
  },
  {
    quote:
      "I'm not dumb. I just have a command of thoroughly useless information.",
    source: "-Bill Watterson",
  },
  {
    quote:
      "A bone to the dog is not charity. Charity is the bone shared with the dog, when you are just as hungry as the dog.",
    source: "-Jack London",
  },
];

newQuoteButton.addEventListener("click", function (e) {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let newQuote = quotes[randomNumber];
  quoteText.textContent = newQuote.quote;
  quoteAuthor.textContent = newQuote.source;
  body.style.backgroundImage = "url(https://source.unsplash.com/random)";
});
