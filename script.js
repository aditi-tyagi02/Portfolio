document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');

    hamburgerIcon.addEventListener('click', function () {
        hamburgerIcon.classList.toggle('open');
        menuLinks.classList.toggle('open');
    });
});
// Get the typewriter text element
const typewriterText = document.getElementById('typewriter-text');

// Define the texts to be typed
const texts = [
  'Frontend Developer',
  'Software Engineer',
  'Technical Content Writer',
  'Full Stack Developer',
];

// Set the initial text
typewriterText.textContent = '';

// Set the typing speed (in milliseconds)
const typingSpeed = 100;

// Set the current text index
let currentIndex = 0;

// Function to type the text
function typeText() {
  const text = texts[currentIndex];
  const characters = text.split('');
  let characterIndex = 0;

  function typeCharacter() {
    if (characterIndex < characters.length) {
      typewriterText.textContent += characters[characterIndex];
      characterIndex++;
      setTimeout(typeCharacter, typingSpeed);
    } else {
      // Add a delay before moving to the next text
      setTimeout(() => {
        // Add a cursor effect by adding a blinking cursor character
        typewriterText.textContent += '|';
          typewriterText.textContent = typewriterText.textContent.slice(0, -1);
          setTimeout(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            typewriterText.textContent = '';
            typeText();
          }, 500);
        }, 500);
    }
  }

  typeCharacter();
}

typeText();