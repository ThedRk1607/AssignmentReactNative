import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Fade from './Fade';
import Src from './src';
import RotateButton from './rotate';
import Slide from './slideIn';
const Stack = createStackNavigator();

export default function MyStack() {
  return (
   <NavigationContainer>
     <Stack.Navigator  initialRouteName="src" > 
      <Stack.Screen name="src" component={Src} />
      <Stack.Screen name="Slide" component={Slide}  />
      <Stack.Screen name="RotateButton" component={RotateButton} />
      <Stack.Screen name="Fade" component={Fade} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

