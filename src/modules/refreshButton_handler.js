import { getScores } from './api.js';

const refreshButton = document.querySelector('.refresh_button');

const refreshScores = async () => {
  const { data, status } = await getScores();

  const scoresTable = document.querySelector('.scores-table');
  if (status !== 200) {
    scoresTable.innerHTML = `Error ${status}: ${data.message}`;
  } else {
    scoresTable.innerHTML = '';
    data.result.forEach((e) => {
      const score = document.createElement('li');
      score.classList.add('score');
      score.innerHTML = `${e.user}:${e.score}`;
      scoresTable.appendChild(score);
    });
  }
  return scoresTable;
};

refreshButton.onclick = () => refreshScores();
