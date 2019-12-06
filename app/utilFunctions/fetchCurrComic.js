import axios from 'axios'

const fetchCurrComic = async() => {
  const getCurrentIndex = await axios.get(
    `https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json`
  );

  return getCurrentIndex.data.num
}

export default fetchCurrComic
