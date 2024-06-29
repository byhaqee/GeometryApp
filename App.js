import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './components/HomeScreen';
import CalculatorScreen from './components/CalculatorScreen';
import HistoryScreen from './components/HistoryScreen';
import CustomDrawerContent from './components/DrawerContent';

const Drawer = createDrawerNavigator();

export default function App() {
  const [initial, setInitial] = useState('');
  const [history, setHistory] = useState([]);

  return (
    <NavigationContainer>
      {initial ? (
        <Drawer.Navigator
          initialRouteName="Calculator"
          drawerContent={(props) => (
            <CustomDrawerContent
              {...props}
              initial={initial}
              setInitial={setInitial}
              history={history}
              setHistory={setHistory}
            />
          )}
        >
          <Drawer.Screen name="Calculator">
            {(props) => (
              <CalculatorScreen
                {...props}
                initial={initial}
                history={history}
                setHistory={setHistory}
              />
            )}
          </Drawer.Screen>
          <Drawer.Screen name="History">
            {(props) => <HistoryScreen {...props} history={history} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      ) : (
        <HomeScreen setInitial={setInitial} />
      )}
    </NavigationContainer>
  );
}
