import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../../views/screens/TabScreens/HomePage';
import MyFavourites from '../../views/screens/TabScreens/MyFavourites';
import PostItem from '../../views/screens/TabScreens/PostItem';
import MyProfile from '../../views/screens/TabScreens/MyProfile';
import HistoryPage from '../../views/screens/TabScreens/HistoryPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: { color: 'black' },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="home" color={'black'} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={MyFavourites}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="favorite" color={'black'} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={PostItem}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="add" color={'black'} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryPage}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="history" color={'black'} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="MyProfile"
          component={MyProfile}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="person" color={'black'} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default TabBar;
