import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, StyleSheet, View, Text, Image} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import dataTemp from '../../data/Data';

const CarouselComponent = () => {
  const {width: screenWidth} = Dimensions.get('window');
  const itemWidth = screenWidth;
  const itemHeight = 200;
  const [activeIndex, setActiveIndex] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      carouselRef.current.snapToNext();
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const CarouselItem = ({item = null}) => {
    return <Image style={styles.itemImage} source={{uri: item.imageUrl}} />;
  };

  const carouselProps = {
    data: dataTemp,
    renderItem: CarouselItem,
    sliderWidth: screenWidth,
    itemWidth: itemWidth,
    itemHeight: itemHeight,
  };

  return (
    <View style={styles.CarouselView}>
      <Carousel
        {...carouselProps}
        ref={carouselRef}
        onSnapToItem={index => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={dataTemp.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginatiosContainer}
        dotStyle={styles.dotActiv}
        inactiveDotStyle={styles.dotInActiv}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    </View>
  );
};

export default CarouselComponent;

const styles = StyleSheet.create({
  paginatiosContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
  },
  CarouselView: {
    height: 160,
    width: '100%',
  },
  dotInActiv: {
    height: 6,
    width: 6,
    opacity: 0.8,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
  },
  dotActiv: {
    height: 10,
    width: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderRadius: 5,
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
});
