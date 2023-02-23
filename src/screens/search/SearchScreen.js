import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import {BackLogo, SearchLogo} from '../../assets/icons/svgIcons';
import PropTypes from 'prop-types';


const SearchScreen = ({navigation}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    navigation.setOptions({
      title: 'Поиск',
      headerBackTitle: ' ',

      headerBackImage: () => <BackLogo />,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerStyle: {
        backgroundColor: '#EFEFEF',
      },
    });
  }, []);

  const SearchInput = () => {
    return (
      <View style={styles.searchView}>
        <SearchLogo />
        <TextInput
          style={styles.searchInput}
          placeholder="Поиск"
          value={value}
          onChange={setValue}
        />
      </View>
    );
  };
  SearchInput.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
  };

  return (
    <View style={styles.view}>
      <SearchInput/>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchView: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    width: '100%',
    height: 40,
  },
  searchInput: {
    marginLeft: 10,
    height: 40,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },
});
