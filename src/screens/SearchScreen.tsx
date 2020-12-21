import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import useSearchTvShows from '../hooks/useSearchTvShows';
import ResultsDetail from '../components/ResultsDetail';
import {SafeAreaView} from 'react-native-safe-area-context';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [search, results, errorMessage, loading] = useSearchTvShows();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} testID="SearchScreen">
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <SearchBar
              term={term}
              onTermChange={setTerm}
              onTermSubmit={() => search(term)}
            />
            {errorMessage ? (
              <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}
          </>
        }
        data={results}
        keyExtractor={(result) => result?.show?.id.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details', {
                  showId: item.show.id,
                  showName: item.show.name,
                });
              }}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={
          <>
            {loading ? <ActivityIndicator size="small" color="#000" /> : null}
          </>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    margin: 20,
    justifyContent: 'center',
  },
  results: {
    flex: 1,
    justifyContent: 'center',
  },
  errorMessage: {
    color: '#FF0000',
  },
});

export default SearchScreen;
