import axios from "axios";

const fetchComics = async (index) => {
  const comics = []

  for (let i = index; i > index - 8; i-- ) {
    const fetchComics = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://xkcd.com/${i}/info.0.json`
    );
    
    comics.push(fetchComics.data);
  }
  
  return comics
};

export default fetchComics;
