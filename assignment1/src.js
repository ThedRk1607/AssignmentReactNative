import { StyleSheet, View,Button } from 'react-native'
import React from 'react'
import Fade from './Fade';
import RotateButton from './rotate';
import Slide from './slideIn';
const Src = ({navigation}) => {
  return (
    
      <View style={styles.container}>
      <Button title="FadeIn-Animation" onPress={() => navigation.navigate('Fade')}  />
      <Button title="SlideIn-Animation" onPress={() => navigation.navigate('Slide')} />
      <Button title="Rotate-Animation" onPress={() => navigation.navigate('RotateButton')} />
       
      </View>
  
  )
}

export default Src;

const styles = StyleSheet.create({

  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical:200,
    padding:20,
    
  },
  button: {
    margin: 10,
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
