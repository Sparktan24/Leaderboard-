import { getScores } from './api.js';

const refreshButton = document.querySelector('.refresh_button');

const refreshScores = async () => {
  console.log('enters refreshScores');
  const { data, status } = await getScores();
  //  if (status !== 200) return null;

  const scoresTable = document.querySelector('.scores-table');
  if (status !== 200) {
    scoresTable.innerHTML = `Error ${status}: ${data.message}`;
  } else {
    scoresTable.innerHTML = '';
    data.result.forEach((e) => {
      //  console.log('enter foreach cicle');
      const score = document.createElement('li');
      score.classList.add('score');
      score.innerHTML = `${e.user}:${e.score}`;
      scoresTable.appendChild(score);
    });
  }
  //  console.log('score:', scoresTable);
  return scoresTable;
};

refreshButton.onclick = () => refreshScores();
