import React, { useRef } from 'react';
import { View, Button, Animated, StyleSheet } from 'react-native';

const RotatingButton = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current; // Initial value for rotation: 0

  const handlePress = () => {
    Animated.timing(
      rotateAnim,
      {
        toValue: 1, // Rotate to 1 (which we will interpolate to 360 degrees)
        duration: 1000, // Duration of the rotation animation (in milliseconds)
        useNativeDriver: true, // Use native driver for better performance
      }
    ).start(() => {
      // Reset the animation value back to 0 after it completes
      rotateAnim.setValue(0);
    });
  };

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
        <Button title="Press Me To Rotate-360" onPress={handlePress} />
      </Animated.View>
    </View>
  );
}

const RotateButton = () => {
  return (
    <View style={styles.appContainer}>
      <RotatingButton />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RotateButton;
