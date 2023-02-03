//  id of my game = OXZXZC0f8zbkv7ApEb36
const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OXZXZC0f8zbkv7ApEb36/scores/';

const getScores = async () => {
  const resFetch = await fetch(apiURL);
  const data = await resFetch.json();
  const { status } = resFetch; // const stat = restFetch.status
  return { data, status };
};

const postScore = async (user, score) => {
  const resFetch = await fetch(apiURL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const data = await resFetch.json();
  const { status } = resFetch;
  return { data, status };
};

export { getScores, postScore };
