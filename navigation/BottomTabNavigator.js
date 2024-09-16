import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CreatePosts from "../screens/CreatePostScreen";
import PostDetails from "../screens/PostScreen";
import EditScreen from "../screens/EditPostScreen"


const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="CreatePost" component={CreatePosts} options={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
          
          headerTitle: "Create Post",
        }} />
      <HomeStack.Screen name="PostDetails" component={PostDetails} options={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
          
          headerTitle: "Post Details",
        }}/>
      <HomeStack.Screen 
          name="EditPost" 
          component={EditScreen} 
          options={{
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#000",
          
          headerTitle: "Edit Post",
        }}/>
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      
    </SettingsStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          keyboardHidesTabBar: true,
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="settings"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
