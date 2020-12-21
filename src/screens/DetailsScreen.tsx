/* eslint-disable react-hooks/exhaustive-deps */
import React, {ReactElement, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
  View,
} from 'react-native';
import useGetShowDetails from '../hooks/useGetShowDetails';
import {RouteProp} from '@react-navigation/native';
import {RootStackParams} from '../types/navigation';
import {ScrollView} from 'react-native-gesture-handler';

type DetailsScreenRouteProp = RouteProp<RootStackParams, 'Details'>;

type Props = {
  route: DetailsScreenRouteProp;
};

const DetailsScreen = ({route}: Props): ReactElement => {
  const [getDetails, details, errorMessage, loading] = useGetShowDetails();

  useEffect(() => {
    const {showId} = route.params;
    getDetails(showId);
  }, [route.params]);

  useEffect(() => {}, [details]);

  const stripHtml = (htmlString: string) => htmlString.replace(/<[^>]+>/g, '');
  const getRatings = () =>
    details?.rating?.average
      ? `Ratings: ${details?.rating?.average}`
      : 'No ratings available';

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : errorMessage ? (
        <View style={styles.error}>
          <Text>{errorMessage}</Text>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <>
            {details?.image?.original ? (
              <Image
                style={styles.image}
                source={{uri: details?.image?.original}}
              />
            ) : (
              <View style={styles.noImage}>
                <Text>No image available</Text>
              </View>
            )}

            <View style={styles.info}>
              <Text style={styles.title}>{details?.name}</Text>
              <Text style={styles.ratings}>{getRatings()}</Text>
              <Text style={styles.summary}>
                {details?.summary
                  ? stripHtml(details.summary)
                  : 'No summary available.'}
              </Text>
            </View>
          </>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    margin: 20,
    justifyContent: 'center',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: 376,
    height: 552,
    borderRadius: 4,
  },
  noImage: {
    backgroundColor: '#FFF',
    width: 376,
    height: 552,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    backgroundColor: '#D8CACA',
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  ratings: {
    fontStyle: 'italic',
    paddingTop: 10,
  },
  summary: {
    paddingTop: 10,
  },
});

export default DetailsScreen;
