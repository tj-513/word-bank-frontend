import * as React from 'react';
import { Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Settings from '../screens/Settings';
import WordCollection from '../screens/WordCollection';
import WordGame from '../screens/WordGame';

const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const WordCollectionStack = createStackNavigator();
const WordGameStack = createStackNavigator();

const headerLeftButton = (navigation) => (
  <Icon.Button
    name='ios-menu'
    size={25}
    color='#0a0a0a'
    backgroundColor='#ffffff'
    onPress={() => navigation.openDrawer()}
  ></Icon.Button>
);

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name='Home'
      component={Home}
      options={{
        title: 'Home',
        headerTitleAlign: 'center',
        headerLeft: () => headerLeftButton(navigation),
      }}
    />
  </HomeStack.Navigator>
);

const SettingsStackScreen = ({ navigation }) => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen
      name='Settings'
      component={Settings}
      options={{
        title: 'Settings',
        headerTitleAlign: 'center',
        headerLeft: () => headerLeftButton(navigation),
      }}
    />
  </SettingsStack.Navigator>
);

const WordCollectionStackScreen = ({ navigation }) => (
  <WordCollectionStack.Navigator>
    <WordCollectionStack.Screen
      name='WordCollection'
      component={WordCollection}
      options={{
        title: 'WordCollection',
        headerTitleAlign: 'center',
        headerLeft: () => headerLeftButton(navigation),
      }}
    />
  </WordCollectionStack.Navigator>
);

const WordGameStackScreen = ({ navigation }) => (
  <WordGameStack.Navigator>
    <WordGameStack.Screen
      name='WordGame'
      component={WordGame}
      options={{
        title: 'WordGame',
        headerTitleAlign: 'center',
        headerLeft: () => headerLeftButton(navigation),
      }}
    />
  </WordGameStack.Navigator>
);

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <Image
        source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
        style={{ width: 100, height: 100, alignSelf: 'center' }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name='Home' component={HomeStackScreen} />
      <Drawer.Screen
        name='WordCollection'
        component={WordCollectionStackScreen}
      />
      <Drawer.Screen name='WordGame' component={WordGameStackScreen} />
      <Drawer.Screen name='Settings' component={SettingsStackScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
