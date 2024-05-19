import React, { useEffect, useRef } from 'react';
import { View, Text, FlatList, Animated, StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const SlideInItem = ({ item, index }) => {
  const translateX = useRef(new Animated.Value(-SCREEN_WIDTH)).current;

  useEffect(() => {
    Animated.timing(
      translateX,
      {
        toValue: 0,
        duration: 500,
        delay: index * 100, // Slight delay between each item
        useNativeDriver: true,
      }
    ).start();
  }, [translateX, index]);

  return (
    <Animated.View style={{ ...styles.item, transform: [{ translateX }] }}>
      <Text style={styles.text}>{item}</Text>
    </Animated.View>
  );
};

const SlideInList = ({ data }) => {
  const renderItem = ({ item, index }) => (
    <SlideInItem item={item} index={index} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const Slide= () => {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <View style={styles.container}>
      <SlideInList data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: SCREEN_WIDTH - 40,
    padding: 20,
    marginVertical: 10,
    backgroundColor: 'powderblue',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Slide;
