const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
    if (showingTerm){
        document.getElementById("card-content").innerText = flashcards[currentIndex].term
    }
    else{
        document.getElementById("card-content").innerText = flashcards[currentIndex].definition
    }
}

// The rest of the code you will write is apart of event listeners

let nextBtn = document.getElementById("next-btn")
let prevBtn = document.getElementById("prev-btn")

nextBtn.addEventListener("click", () => {
    if(currentIndex === 2){
        currentIndex = 0;
    }
    else{
        currentIndex++;
    }
    displayCard()
})

prevBtn.addEventListener("click", () => {
    if(currentIndex === 0){
        currentIndex = 2;
    }
    else{
        currentIndex--;
    }
    displayCard()
})

let notecard = document.getElementById("notecard")
notecard.addEventListener("click", ()=>{
    showingTerm = !showingTerm
    displayCard()
})

// This line will display the card when the page is refreshed
window.onload = displayCard;