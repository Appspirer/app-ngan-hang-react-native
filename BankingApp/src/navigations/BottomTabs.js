import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Wallet, AddNew, Expenses, Profile, Home } from '../screens';
import Colors from '../themes/Colors';
import Icons from '../themes/Icons';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: Colors.blue,
      tabBarStyle:{
        height:60,
        paddingTop:10
      }
       }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {Icons.Icons({ name: focused ? 'Home_focus' : 'Home', height: 22, width: 25 })}
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Expenses"
        component={Expenses}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {Icons.Icons({ name: focused ? 'Expenses_focus' : 'Expenses', height: 22, width: 26.4 })}
            </View>
          )
        }}
      />
      <Tab.Screen
        name="AddNew"
        component={AddNew}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              height: 64,
              width: 64,
              borderRadius: 32,
              borderWidth: 8,
              borderColor: Colors.white,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.blue,
              marginTop: -20
            }}>
              {Icons.Icons({ name: 'plus', height: 16, width: 16 })}
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {Icons.Icons({ name: focused ? 'Wallet_focus' : 'Wallet', height: 22, width: 22 })}
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              {Icons.Icons({ name: focused ? 'Profile_focus' : 'Profile', height: 22, width: 21 })}
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}