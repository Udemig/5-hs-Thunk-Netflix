import { useEffect } from 'react';
import { fetchByUrl } from '../app/actions/movieActions';

const ListMovie = ({ genre }) => {
  useEffect(() => {
    fetchByUrl(`/discover/movie?with_genres=${genre.id}`)
      // gelen filmleri state e aktar
      .then((res) => console.log(res.results));
  }, []);
  return (
    <div>
      <h1>{genre.name}</h1>
    </div>
  );
};

export default ListMovie;
