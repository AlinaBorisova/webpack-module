import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const soundCards = document.querySelectorAll('.sound-card');
  const volume = document.getElementById('volume') as HTMLInputElement;

  soundCards.forEach(card => {
    card.addEventListener('click', () => {
      const allAudio = document.querySelectorAll('audio');
      const img = card.querySelector('img[src*="bg.jpg"]') as HTMLImageElement;
      const bgImage = img ? img.src : null;

      if (bgImage) {
        document.body.style.backgroundImage = `url(${bgImage})`;
      }

      const audio = card.querySelector('audio') as HTMLAudioElement;

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

  volume.addEventListener('input', (event: Event) => {
    const target = event.currentTarget as HTMLInputElement;
    if (!target) return;

    const volumeValue = +target.value;
    const activeCard = document.querySelector('.sound-card-active');

    if (activeCard) {
      const audio = activeCard.querySelector('audio') as HTMLAudioElement;
      if (audio) {
        audio.volume = volumeValue;
        volume.value = audio.volume.toString();
      }
    }
  });
});
