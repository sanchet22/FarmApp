import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile } from '../screens';
import Post from '../screens/Post'; 
import { Image, Text, TouchableOpacity, View } from 'react-native';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      // ...styles.shadow
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 100,
        height: 70,
        borderRadius: 50,
        // backgroundColor:"#e32f45"
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#ccc", // Updated background color to gray
  }
};

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen 
        name='Home' 
        component={Home} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image 
                source={require('../assets/icons/home.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  // tintColor: focused? '#e32f45': ''
                }}
              />
              <Text>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen 
        name='Post' 
        component={Post} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Image 
              source={require('../assets/icons/plus.png')}
              resizeMode='contain'
              style={{
                width: 70,
                height: 70,
                // tintColor: focused? '#e32f45': ''
              }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
        }}
      />
      <Tab.Screen 
        name='Profile' 
        component={Profile} 
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image 
                source={require('../assets/icons/profile.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  // tintColor: focused? '#e32f45': ''
                }}
              />
              <Text>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
