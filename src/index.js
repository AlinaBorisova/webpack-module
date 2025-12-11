import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const soundCards = document.querySelectorAll('.sound-card');

  soundCards.forEach(card => {
    card.addEventListener('click', () => {
      const allAudio = document.querySelectorAll('audio');

      const audio = card.querySelector('audio');

      if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
        card.classList.remove('sound-card-active');
      } else {
        soundCards.forEach(cardItem => {
          cardItem.classList.remove('sound-card-active');
        });

        allAudio.forEach(item => {
          if (item !== audio) {
            item.pause();
            item.currentTime = 0;
          }
        });
        audio.play();
        card.classList.add('sound-card-active');
      }

    });
  });
});

