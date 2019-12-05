import axios from "axios";

const fetchComics = async (comics, index) => {
  const fetchComics = await axios.get(
    `https://cors-anywhere.herokuapp.com/https://xkcd.com/${index}/info.0.json`
  );

  comics.push(fetchComics.data);
};

export default fetchComics;
