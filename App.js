import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, Button, Image, Alert, TouchableOpacity, SafeAreaView, Keyboard, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
//import 'react-native-gesture-handler';
import Login from './screens/login';
import Register from './screens/register';
import Dashboard from './wallet/dashboard';
import Data from './screens/data';
import Vtu from './screens/vtu';
import Cable from './screens/cable';


function HomeScreen({ navigation }) {




  return (<SafeAreaView style={styles.Touchable}>
    <ScrollView>

      <View style={{ justifyContent: 'center', }}>    </View>
      <Text style={{ justifyContent: 'center', alignItems: 'center', color: 'purple' }}>Welcome To Haykaytelecoms</Text>
      <Text style={{ justifyContent: 'center', alignItems: 'center', color: 'purple' }}>For your Data,</Text>
      <Text style={{ justifyContent: 'center', alignItems: 'center', color: 'purple', }}>Vtu</Text>
      <Text style={{ justifyContent: 'center', alignItems: 'center', color: 'purple', }}>Data</Text>
      <Text style={{ justifyContent: 'center', alignItems: 'center', color: 'purple', }}>,Electricity Payment </Text>
      <Text style={{ justifyContent: 'center', alignItems: 'center', color: 'purple', }}>Cable subscription Payment </Text>
      <View style={{ marginTop: 190 }} />

      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>



        <Image style={styles.image} source={require("./assets/Glo.jpg")} />
        <Text>GLO</Text>
        <Image style={styles.image} source={require("./assets/Mtn.png")} />
        <Text>MTN</Text>
        <Image style={styles.image} source={require("./assets/airtel.png")} />
        <Text>AIRTEL</Text>
        <Image style={styles.image} source={require("./assets/9mobile.png")} />
        <Text>9M0BILE</Text>
        <Button
          title="login"
          onPress={() => navigation.navigate('Login')}
        />


        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')} />

<Button
          title="Register"
          onPress={() => navigation.navigate('Dashboard')} />


      </View>




      <View
        animationType="slide"
        transparent={true}
        visible={true}
>
    <Text style={{
        alignItems: 'center',
        justifyContent: 'center',marginLeft:200,
        color:'purple',}} >
       .. We are reliable! </Text>

</View>

      <View style={{ marginTop: 100 }} />
  
      <View style={{ marginTop: 100 }} />

    </ScrollView>
  </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  Touchable: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',

  },

  header: {
    height: '100',
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    height: 80,
    color: 'white',
    PaddingTop: 38,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  welcome: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'purple',
    color: 'purple',

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'purple',
    color: 'purple',

  },

  button: {
    flex: 10.02,
    backgroundColor: '#fff',
    alignItems: 'center',
  },


  footer: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    Color: 'white',
    color: "#20232a",
    top: 270,
    height: 658,
  },
  image: {
    width: 66,
    height: 58,
  },
  Buttons: {
    backgroundColor: 'pink',
    justifyContent: 'center',
    marginTop: 50,


  },
});




const Tab = createBottomTabNavigator();
//const Tab = createStackNavigator();
//const isSignedIn =true;
export default function App() {
  return (<NavigationContainer>
    <Tab.Navigator >

      <Tab.Screen name="Home" component={HomeScreen} options={{
        title: 'Haykaytelecoms',
        headerStyle: {
          backgroundColor: 'purple',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarButton: () => null,
      }} />
      <Tab.Screen name="Login" component={Login} options={{
        title: 'Haykaytelecoms',
        headerStyle: {

          backgroundColor: 'purple',
        }, headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarButton: () => null,
      }} />
      <Tab.Screen name="Register" component={Register} options={{
          title: 'Haykaytelecoms',
              headerStyle: {
          backgroundColor: 'purple',
        }, headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarButton: () => null,
      }} />

    
      

<Tab.Screen name="Dashboard" component={Dashboard} options={{
          title: 'Haykaytelecoms',
              headerStyle: {
          backgroundColor: 'purple',
        }, headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarButton: () => null,
      }} />



    </Tab.Navigator>


  </NavigationContainer>


  );


}

