import '/scss/styles.scss';

// Show and hide sections as buttons are pressed
const introSection = document.querySelector('.intro');
const theAnswerSection = document.querySelector('.the-answer');
const earthSection = document.querySelector('.earth');
const earthExplodedSection = document.querySelector('.earth-exploded');
const theQuestionSection = document.querySelector('.the-question');

const showTheAnswerButton = document.querySelector('.show-the-answer');
const showEarthButton = document.querySelector('.show-earth');
const showTheQuestionButton = document.querySelector('.show-the-question');

showTheAnswerButton.addEventListener('click', () => {
  introSection.classList.remove('show');
  theAnswerSection.classList.add('show');
});

showEarthButton.addEventListener('click', () => {
  theAnswerSection.classList.remove('show');
  earthSection.classList.add('show');

  // After the Earth has exploded, show the next section
  setTimeout(() => {
    earthSection.classList.remove('show');
    earthExplodedSection.classList.add('show');
  }, 2000);
});

showTheQuestionButton.addEventListener('click', () => {
  earthExplodedSection.classList.remove('show');
  theQuestionSection.classList.add('show');
});
