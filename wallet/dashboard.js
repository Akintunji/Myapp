
import React, { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TouchableOpacity, View,SafeAreaView,Button,ScrollView,Alert,Image,Keyboard,pressable,Modal } from 'react-native';
import { Dimensions } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TouchableWithoutFeedback } from 'react-native-web';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import vtu from './vtu';
import cable from './cable';
import data from './data';
import  electricity from './electricity';
import fundwallet from './Fundwallet';




 
 // const [balance, setbalance]= useState('');

function dashboardd({ navigation }) {


  const [balance, setbalance]= useState('');
  const [token, settoken]= useState('');
  const [name, setname]= useState('');


async function retrieveUserSession() {
  try {   
      const session=await AsyncStorage.getItem("user_session");

    if (session!==undefined) {
      const session_items=JSON.parse(session);
  setname(session_items.name);
  settoken(session_items.token);
  setbalance(session_items.balance);

      }
      else{console.log('Empty values')}
  } catch (error) {
      
  }
}
 

useEffect(() => {
  retrieveUserSession();
 });



return (
  

<SafeAreaView style={styles.Safeareaview}>

<View style={styles.welcome}>

<Text>Welcome {name}</Text> 
<Text>Your Wallet Balances is #{balance}</Text>

    </View>

    <Button
        title="Fund Wallet"
        onPress={() => navigation.navigate('fundwallet')}
      />

 <View style={styles.pcontainer}>
 <View style={styles.container}>

 <View ><Image  style={styles.image} source={require("../assets/vtu.jpg")}/>
 <TouchableOpacity onPress={() => navigation.navigate('Vtu')}> <Text>Buy Vtu</Text> </TouchableOpacity ></View>

 <View ><Image  style={styles.image} source={require("../assets/data.jpg")}/><TouchableOpacity onPress={() => navigation.navigate('Data')}>  <Text>Buy Data </Text></TouchableOpacity > </View>
 
</View>
<View></View>
 <View style={styles.container}>

   <View><Image  style={styles.image} source={require("../assets/cable.jpg")}/><TouchableOpacity onPress={() => navigation.navigate('Cable')}><Text> Cable TV</Text></TouchableOpacity > </View>
  
 <View><Image  style={styles.image} source={require("../assets/electricity.jpg")}/> <TouchableOpacity onPress={() => navigation.navigate('Electricity')}><Text>Buy Electricity </Text></TouchableOpacity > </View>


 </View>
   </View>


     

  </SafeAreaView>

  );
}
const styles = StyleSheet.create({
header: {
     flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
fontSize:20,
fontWeight:'bold',
    height:80, 
color: 'white',
PaddingTop:38,
  },
title:{fontSize:20,
fontWeight:'bold',
color: 'white',},
 content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      borderColor: 'purple',
      color:'purple',
    
  },  

pcontainer: {
    flex: 1,
flexDirection:"row",
  top:50,
    justifyContent: 'center',
      borderColor: 'white',
      color:'white',
   left:50,
  },


container: {
    flex: 1,
bottom:50,
  top:170,
    justifyContent: 'center',
      borderColor: 'white',
      color:'white',
   
  },

Buttons:{
   PaddingTop:38,Top:20,
    backgroundColor: 'purple',
    alignItems: 'center',
Color: '#fff',
 width: 96,
    height: 98,
fontWeight:'bold',
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
    width: 96,
    height: 98,
  },

});
export default function dashboard() {
const Stack = createNativeStackNavigator();
//createBottomTabNavigator();
 //createStackNavigator();

  return (


    
    <Stack.Navigator>
      <Stack.Screen name="Homescreen" component={dashboardd} 
      options={{ headerShown: false,tabBarStyle: {
        display: "none",

      },   tabBarButton: () => null, }}/>
      
    
      <Stack.Screen name="Data" component={data} options={{ headerShown: false,tabBarStyle: {
          display: "none",
        }, }}/>
      <Stack.Screen name="Vtu" component={vtu}  
      options={{ headerShown: false,tabBarStyle: {
          display: "none",
        }, }}/>
      <Stack.Screen name="Cable" component={cable} options={{ headerShown: false,tabBarStyle: {
          display: "none",
        }, }}/>
      
      <Stack.Screen name="Electricity" component={electricity} options={{ headerShown: false,tabBarStyle: {
          display: "none",
        }, }}/>

<Stack.Screen name="fundwallet" component={fundwallet} options={{ headerShown: false,tabBarStyle: {
          display: "none",
        }, }}/>

    </Stack.Navigator>

  );

}