import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SerieListScreen from './screens/SerieListScreen';
import SerieDetailScreen from './screens/SerieDetailScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="SerieList" 
        component={SerieListScreen}
        options={{title: 'Serie lista'}}
        />
        <Stack.Screen 
        name="SerieDetail" 
        component={SerieDetailScreen}
        options={{title: 'Serie detaljer'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
