import {useState} from 'react';
import {getShowsBySearchTerm} from '../api';
import {TvShowSearch} from '../types/tvShows';

export default (): [
  (searchTerm: string) => Promise<void>,
  TvShowSearch[],
  string,
  boolean,
] => {
  const [results, setResults] = useState<TvShowSearch[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const search = async (searchTerm: string) => {
    setResults([]);
    setErrorMessage('');
    setLoading(true);
    try {
      const response = await getShowsBySearchTerm({searchTerm});
      setResults(response.data);
    } catch (error) {
      setErrorMessage('Something whent wrong, please try again...');
    } finally {
      setLoading(false);
    }
  };

  return [search, results, errorMessage, loading];
};
