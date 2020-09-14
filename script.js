// Create a babies object with 2 arrays:
// 1) pet  2) human
const babies = {
    pet: [
        {
            name: 'Coco',
            url: 'assets/coco.jpg',
            about: 'She runs faster than a race car',
            alt: 'cute white and brindle Whippet puppy'
        },
        {
            name: 'Chiki',
            url: 'assets/chiki.jpg',
            about: 'Loves to camouflage on dark backgrounds',
            alt: 'adorable black mini Chihuahua doggie'
        },
        {
            name: 'Nacho',
            url: 'assets/nacho.jpg',
            about: 'Will eat your shoes while you walk',
            alt: 'white Bull Terrier pup'
        }
    ],
    human: [
        {
            name: 'Gabo',
            url: 'assets/gabo.jpg',
            about: 'Battery-life: forever in unstoppable loops',
            alt: '5 year old boy sitting through the sunroof of a car laughing'
        },
        {
            name: 'Dani',
            url: 'assets/dani.jpg',
            about: 'He screams louder than a parrot',
            alt: '7 month old baby boy making a funny face'
        },
        {
            name: 'Grandma',
            url: 'assets/grandma.jpg',
            about: 'Will not move unless she watched a CSI episode',
            alt: 'portrait of a grandmother smiling'
        }
    ]
};

// Create a namespace:
const babyApp = {};

// Declare a function that will return a random item from any array
function randomSubject(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Error handling, ensure user has selected something before allowing them to submit
$('input[type="radio"]').on('change', function() {
    $('input[type="submit"]').prop('disabled', false);
});

// Create an event listener for a 'submit' event in the form
$('form').on('submit', function (e) {
    e.preventDefault();

    // Save information from checked radio buttons into a variable
    const accomplice = $('input[name=baby]:checked').val();

    // Determine what the user's choice correspond to from the babies object
    if (accomplice) {
        // Display the baby-of-the-day name & photo on the page
        // Use bracket notation to detect the input value from the radio button 
        const toDisplay = randomSubject(babies[accomplice]);
        $('.results').html(`
        <p class="choice">${toDisplay.name}</p>
        <img src="${toDisplay.url}" alt="${toDisplay.alt}">
        `);
        // Display a piece of advice corresponding to the selected baby
        $('.funFact').html(`
        <p class="advise">${toDisplay.about}</p>
        `);
    
    }
    
});

// Reset radio buttons/allow user to start again
// $('.reStart').on('click', function (e) {
//     e.preventDefault();
//     location.reload(true);

// }


// Create init function that will kick off the app:
babyApp.init = () => {

}
// Create document ready:
$(document).ready(function () {
    babyApp.init();
})

// Stretch goals:
// Turn the baby-of-the-day photo into a baby-gallery with a couple of more photos 