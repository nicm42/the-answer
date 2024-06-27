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

const earthImage = document.querySelector('.earth-img');
const explosionImage = document.querySelector('.explosion-img');

showTheAnswerButton.addEventListener('click', () => {
  introSection.setAttribute('hidden', 'true');
  introSection.classList.remove('show');
  theAnswerSection.removeAttribute('hidden');
  theAnswerSection.classList.add('show');
});

showEarthButton.addEventListener('click', () => {
  theAnswerSection.setAttribute('hidden', 'true');
  theAnswerSection.classList.remove('show');
  earthSection.removeAttribute('hidden');
  earthSection.classList.add('show');

  // After the Earth is visible, show the explosion
  setTimeout(() => {
    earthImage.setAttribute('hidden', 'true');
    earthImage.classList.remove('show');
    explosionImage.removeAttribute('hidden');
    explosionImage.classList.add('show');
  }, 1000);

  // After the Earth has exploded, show the next section
  setTimeout(() => {
    earthSection.setAttribute('hidden', 'true');
    earthSection.classList.remove('show');
    earthExplodedSection.removeAttribute('hidden');
    earthExplodedSection.classList.add('show');
  }, 2000);
});

showTheQuestionButton.addEventListener('click', () => {
  earthExplodedSection.setAttribute('hidden', 'true');
  earthExplodedSection.classList.remove('show');
  theQuestionSection.removeAttribute('hidden');
  theQuestionSection.classList.add('show');
});
