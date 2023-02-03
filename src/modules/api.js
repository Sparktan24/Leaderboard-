//  id of my game OXZXZC0f8zbkv7ApEb36
const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OXZXZC0f8zbkv7ApEb36/scores/';
const apiHeaders = {
  headers: {
    'content-type': 'application/json',
  },
};

const getScores = async () => {
  const resFetch = await fetch(apiURL);
  const data = await resFetch.json();
  console.log('data:', data);
  const { status } = resFetch; // const stat = restFetch.status
  if (status !== 200) return 'Error';
  return { data, status };
};

export default getScores;
