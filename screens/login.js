import React, { useState,useEffect } from 'react';
import { Text,TextInput, View,Button,Image,Alert,TouchableOpacity ,SafeAreaView,Keyboard ,ScrollView,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Dashboard from '../wallet/dashboard';

import AsyncStorage from '@react-native-async-storage/async-storage';

function Logins({navigation}){
const [signed_in, setsigned_in]=useState('false'); 
const [balance,setbalance]=useState('');
const [token,settoken]=useState('');
const [name, setname]=useState('');
const [email, setemail]=useState('');
const [password, setpass]=useState('');
async function userlogin (value){

  
   fetch('https://www.haykaytelecoms.com.ng/api/apilogin', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    email : email,
      password: password,
  
  })
  }) .then((response) => response.json())
      .then((response) => {
     AsyncStorage.setItem(
          "user_session",
          JSON.stringify({
          name : response.name,
              token :response.token,
              balance :response.balance,            
          }));
   if (response.status=="Success"){
    navigation.navigate('dashboard')}
 
    else{
      alert('Invalid Details');}
  });
  
  }


return (
  <SafeAreaView>  <View style={{marginTop:200 }}>


</View>
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , paddingVertical:40,}}>
      <Text style={{  justifyContent: 'center', alignItems: 'center',color: 'gold' }}>
   Email
  </Text>
 <TextInput title= "Email"
  placeholder="Enter Email"
style={{ color: 'puple',borderWidth:4,borderradius:4,borderColor:'purple' }}
onChangeText={(val)=>setemail(val)} placeholderTextColor="purple"
 underlineColorAndroid="transparent"
autoCorrect='true'/>
<Text>{name} {token}</Text>
<Text style={{  justifyContent: 'center', alignItems: 'center',color: 'gold' }}>
    Password
  </Text>

 <TextInput title= "Email"
  placeholder="Enter password"
style={{ color: 'puple',borderWidth:4,borderradius:4,borderColor:'purple' }}
onChangeText={(val)=>setpass(val)} placeholderTextColor="purple"
autoCorrect='true'
 underlineColorAndroid="transparent"
secureTextEntry='true'/>
<Text>{password}</Text>


<Text style={{  justifyContent: 'center', alignItems: 'center',color: 'blue' }}>
  Remember Me</Text>
  <View style={{ backgroundColor:'white',height:"20%",}}/>  
<Button title="LOGIN"  onPress={userlogin} />


</View>


</SafeAreaView>
   

  );

}




export default  function Login() {
const Stack =createNativeStackNavigator ();
// createBottomTabNavigator();
  return (


<Stack.Navigator>
<Stack.Screen name="Haykaytelecoms" component={Logins} 
options={{
  headerShown: false,
            
  tabBarStyle: {
    display: "none",
  },
}}/>
<Stack.Screen name="dashboard" component={Dashboard} 
options={{
 
  headerShown: false,
  

}}
/>
</Stack.Navigator>


  );

}