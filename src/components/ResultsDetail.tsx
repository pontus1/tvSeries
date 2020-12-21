import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {TvShowSearch} from '../types/tvShows';

type Props = {
  result: TvShowSearch;
};

const ResultsDetail = ({result}: Props) => {
  const {
    show: {image, name},
  } = result;

  return (
    <View style={styles.container}>
      {image?.medium ? (
        <Image style={styles.image} source={{uri: image?.medium}} />
      ) : (
        <View style={styles.noImage}>
          <Text>No image available</Text>
        </View>
      )}
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 25,
  },
  image: {
    resizeMode: 'cover',
    width: 210,
    height: 295,
    borderRadius: 4,
    marginBottom: 5,
  },
  noImage: {
    backgroundColor: '#FFF',
    width: 210,
    height: 295,
    borderRadius: 4,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
  },
});

export default ResultsDetail;
