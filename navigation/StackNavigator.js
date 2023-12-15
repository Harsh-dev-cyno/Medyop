import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AddScreen from '../screens/AddScreen';
import SettingScreen from '../screens/SettingScreen';
import AccountScreen from '../screens/AccountScreen';
import { AntDesign,Entypo,Ionicons } from '@expo/vector-icons';
import color from '../constant/color';
import CameraClick from '../components/CameraClick';
import MedicineHomeScreen from '../screens/Medicine/MedicineHomeScreen';
import AddMedicineScreen from '../screens/Medicine/AddMedicineScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    function MainBottomTabs(){
        return(
            <Tab.Navigator screenOptions={{
                headerShown:false,
                tabBarLabelStyle: { color: color.colors.black },
            }}>
                <Tab.Screen name='Home' component={HomeScreen} options={{
                    headerShown:false,
                    tabBarLabel:'Home',
                    tabBarIcon:({focused})=>
                    focused ? <Entypo name="home" size={24} color={color.colors.secondaryGreen} /> : <AntDesign name="home" size={24} color="black" />
                }}/>
                <Tab.Screen name='Add' component={AddScreen} options={{
                     headerShown:false,
                     tabBarLabel:'Add',
                    tabBarIcon:({focused})=>
                    focused ? <Entypo name="plus" size={24} color={color.colors.secondaryGreen} /> : <Entypo name="plus" size={24} color="black" />
                }}/>
                <Tab.Screen name='Setting' component={SettingScreen} options={{
                     headerShown:false,
                     tabBarLabel:'Setting',
                    tabBarIcon:({focused})=>
                    focused ? <Ionicons name="ios-settings-sharp" size={24} color={color.colors.secondaryGreen} /> : <Ionicons name="ios-settings-outline" size={24} color="black" />
                }}/>
                <Tab.Screen name='Account' component={AccountScreen} options={{
                     headerShown:false,
                     tabBarLabel:'Account',
                    tabBarIcon:({focused})=>
                    focused ? <Ionicons name="md-person-sharp" size={24} color={color.colors.secondaryGreen} /> : <Ionicons name="md-person-outline" size={24} color="black" />
                }}/>
            </Tab.Navigator>
        )
    }
    function MedicineBottomTabs(){
        return(
            <Tab.Navigator screenOptions={{
                headerShown:false,
                tabBarLabelStyle: { color: color.colors.black },
            }}>
                <Tab.Screen name='Home' component={MedicineHomeScreen} options={{
                    headerShown:false,
                    tabBarLabel:'Home',
                    tabBarIcon:({focused})=>
                    focused ? <Entypo name="home" size={24} color={color.colors.secondaryGreen} /> : <AntDesign name="home" size={24} color="black" />
                }}/>
                <Tab.Screen name='Add' component={AddScreen} options={{
                     headerShown:false,
                     tabBarLabel:'Add',
                    tabBarIcon:({focused})=>
                    focused ? <Entypo name="plus" size={24} color={color.colors.secondaryGreen} /> : <Entypo name="plus" size={24} color="black" />
                }}/>
                <Tab.Screen name='Setting' component={SettingScreen} options={{
                     headerShown:false,
                     tabBarLabel:'Setting',
                    tabBarIcon:({focused})=>
                    focused ? <Ionicons name="ios-settings-sharp" size={24} color={color.colors.secondaryGreen} /> : <Ionicons name="ios-settings-outline" size={24} color="black" />
                }}/>
                <Tab.Screen name='Account' component={AccountScreen} options={{
                     headerShown:false,
                     tabBarLabel:'Account',
                    tabBarIcon:({focused})=>
                    focused ? <Ionicons name="md-person-sharp" size={24} color={color.colors.secondaryGreen} /> : <Ionicons name="md-person-outline" size={24} color="black" />
                }}/>
            </Tab.Navigator>
        )
    }
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Main' component={MainBottomTabs} options={{headerShown:false}}/>
        <Stack.Screen name='MainMedicine' component={MedicineBottomTabs} options={{headerShown:false}}/>
        <Stack.Screen name='AddMedicine' component={AddMedicineScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Camera' component={CameraClick}/>

    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})