
import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import CalculatorScreen from './src/presentation/screens/CalculatorScreen';
import { styles } from './src/config/theme/AppTheme';
function App(): React.JSX.Element {
  
  return (
    
      <View style = {styles.background} >
            <StatusBar
              barStyle={'light-content'}
              backgroundColor={'black'}
            />
            <CalculatorScreen />
      </View> 

   
  );
}
export default App;
