// Create a babies object with 2 arrays:
// 1) fur-babies  2) human-babies
const babies = {
    pet: [
        {
            name: 'Coco',
            url: 'assets/coco.jpg'
        },
        {
            name: 'Chiki',
            url: 'assets/chiki.jpg'
        },
        {
            name: 'Nacho',
            url: 'assets/nacho.jpg'
        }
    ],
    human: [
        {
            name: 'Gabo',
            url: 'assets/gabo.jpg'
        },
        {
            name: 'Dani',
            url: 'assets/dani.jpg'
        },
        {
            name: 'Grandma',
            url: 'assets/grandma.jpg'
        }
    ]
};

// Create a namespace:
const babyApp = {};

function randomBaby(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Create an event listener for a 'submit' event in the form
$('form').on('submit', function (e) {
    e.preventDefault();

    // Save information from checked radio buttons into variables
    const accomplice = $('input[name=baby]:checked').val();
    const petArray = babies.pet
    const humanArray = babies.human

    if (accomplice === "furBaby") {
        const toDisplay = randomBaby(petArray);
        $('.results').html(`
        <p class="choice">${toDisplay.name}</p>
        <img src="${toDisplay.url}">
        `);
    } else {
        const toDisplay = randomBaby(humanArray);
        $('.results').html(`
        <p class="choice">${toDisplay.name}</p>
        <img src="${toDisplay.url}">
        `);
    }

    console.log(accomplice);
});
// Error handling, ensure user has selected something before allowing them to submit



// Determine what the user's choice correspond to from the babies object
// let accomplice = $(this).find('input:checked').val();
// const accomplice = [];
// We need to randomly select a baby-of-the-day

// Declare a function that will return a random item from any array

// Display the baby-of-the-day photo on the page

// Create init function that will kick off the app:
babyApp.init = () => {
    // babyApp.getResults();
    console.log('I work!');
}
// Create document ready:
$(document).ready(function () {
    babyApp.init();
})


// Stretch goals:
// Display a piece of advice corresponding to the selected baby
// Turn the baby-of-the-day photo into a baby-gallery with a couple of more photos 
// Reset radio buttons/allow user to start again