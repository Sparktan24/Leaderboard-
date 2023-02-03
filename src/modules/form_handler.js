import { postScore } from './api.js';

const form = document.querySelector('#form');
const username = document.querySelector('#name');
const score = document.querySelector('#score');

const addToDOM = (user, score) => {
  const scoreLi = document.createElement('li');
  scoreLi.innerHTML = `${user}: ${score}`;
  scoreLi.classList.add('score');
  document.querySelector('.scores-table').appendChild(scoreLi);
};

const addToAPI = async (user, score) => {
  const { data, status } = await postScore(user, score);
  if (status !== 201) return `Error ${status}: ${data.message}`;
  addToDOM(user, score);
  return { data, status };
};

form.onsubmit = (e) => {
  e.preventDefault();
  const scoreUserName = username.value;
  const scoreValue = score.value;
  addToAPI(scoreUserName, scoreValue);
  form.reset();
};
