import React, {Dispatch, SetStateAction} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

type Props = {
  term: string;
  onTermChange: Dispatch<SetStateAction<string>>;
  onTermSubmit: () => void;
};

const SearchBar = ({term, onTermChange, onTermSubmit}: Props) => {
  return (
    <View style={styles.backgroundStyle}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search TV-Show"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 2,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
