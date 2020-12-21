import {useState} from 'react';
import {getShowInfo} from '../api';
import {TvShow} from '../types/tvShows';

export default (): [
  (showId: number) => Promise<void>,
  TvShow | null,
  string,
  boolean,
] => {
  const [details, setDetails] = useState<TvShow | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const getDetails = async (showId: number) => {
    setDetails(null);
    setErrorMessage('');
    setLoading(true);
    try {
      const response = await getShowInfo({showId});
      setDetails(response.data);
    } catch (error) {
      setErrorMessage('Could not get show details.');
    } finally {
      setLoading(false);
    }
  };

  return [getDetails, details, errorMessage, loading];
};
