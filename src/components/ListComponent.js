import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';

const ListComponent = ({dataTemp=null, status=null}) => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.ItemView}>
        <View style={styles.ItemImage}>
          {status}
          <Image style={{height: '100%', width: '100%',}} source={{uri: item.imageUrl}} />
        </View>
        <Text style={styles.ItemAuthor}>{item.author}</Text>
        <Text style={styles.ItemText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.FlatListView}>
      <FlatList
        data={dataTemp}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        horizontal={true}
      />
    </View>
  );
};

export default ListComponent;

const styles = StyleSheet.create({
  FlatListView: {
    backgroundColor: 'green',
    height: 283,
    width: '100%',
  },
  ItemView: {
    marginLeft: 15,
    flexDirection: 'column',
  },
  ItemImage: {
    backgroundColor: 'red',
    width: 130,
    height: 190,
    borderRadius: 4,
  },
  ItemAuthor: {
    color: '#777777',
    fontSize: 13,
    marginBottom: 5,
    marginTop: 10,
  },
  ItemText: {
    fontSize: 15,
  },
});
