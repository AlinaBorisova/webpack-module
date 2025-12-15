import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const soundCards = document.querySelectorAll('.sound-card');
  const volume = document.getElementById('volume');

  soundCards.forEach(card => {
    card.addEventListener('click', () => {
      const allAudio = document.querySelectorAll('audio');
      const img = card.querySelector('img[src*="bg.jpg"]');
      const bgImage = img ? img.src : null;

      if (bgImage) {
        document.body.style.backgroundImage = `url(${bgImage})`;
      }

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

  volume.addEventListener('input', (event) => {
    const volumeValue = +event.target.value;
    const activeCard = document.querySelector('.sound-card-active');

    if (activeCard) {
      const audio = activeCard.querySelector('audio');
      if (audio) {
        audio.volume = volumeValue;
        volume.value = audio.volume;
      }
    }
  });
});

