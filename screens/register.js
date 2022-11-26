import React, { useState,useEffect } from 'react';
import { Text,TextInput, View,Button,Image,Alert,TouchableOpacity ,SafeAreaView,Keyboard ,ScrollView,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Dashboard from '../wallet/dashboard';

function Reg_component({navigation}){
const [email,setemail]=useState('');
const [password, setpass]=useState(''); 
const [username, setusername]=useState('');
const [confirm_password,  setcpass]=useState('');
const [phonenumber, setphonenumber]=useState('');
const [referer_code, setreferercode]=useState('');

//const reg = async () => {

//if (email.length==0 || password.length==0 || confirm_password.length==0  || username.length==0  || Phonenumber.length ==0  ) {alert('Missing Field');}
async function reg (value){
if(password!==confirm_password) { alert('Passwords Donot Match');navigation.navigate('home');}

fetch('https://www.haykaytelecoms.com.ng/api/Api_h', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  email : email,
    password: password,
    name:username,
   phonenumber:phonenumber,
   referer_code:referer_code,

  })
}) .then((response) => response.json())
    .then((response) => {
   
 if (response.status=="Success"){navigation.navigate('dashboard')}
 else{alert('Problems Encountered Registering You,Maybe email taken');}

});

}
  

     


  

return (
<SafeAreaView>
 <View style={{marginTop:50 }}>


</View>
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,  backgroundColor: 'white',paddingVertical:40,}}>
   <Text style={{  justifyContent: 'center', alignItems: 'center',color: 'purple' }}>
   Usernames
  </Text>

 <TextInput title= "username"
    
style={{ color: 'puple',borderWidth:4,borderColor:'purple',marginTop:15 }}
onChangeText={(val)=>setusername(val)} placeholderTextColor="puple"
 />


 <Text style={{  justifyContent: 'center', alignItems: 'center',color: 'puple',marginTop:15 }}>
   Email{email}
  </Text>
 <TextInput title= "Email"
    
style={{ color: 'puple',borderWidth:4,borderColor:'purple',marginTop:15 }}
onChangeText={(val)=>setemail(val)} placeholderTextColor="puple"
 />

<Text style={{  justifyContent: 'center', alignItems: 'center',color: 'purple',marginTop:15  }}>
   Phonenumber
  </Text>
 <TextInput  
       
style={{ color: 'puple',borderWidth:4,borderColor:'purple' }}
onChangeText={(val)=>  setphonenumber(val)} placeholderTextColor="purple"/>

<Text style={{  justifyContent: 'center', alignItems: 'center',color: 'purple',marginTop:15 }}>
    Password
  </Text>
<TextInput  

onChangeText={(val)=>setpass(val)}

placeholderTextColor="white"
 onSubmitEditing={Keyboard.dismiss}   
 style={{ color: 'puple',borderWidth:4,borderColor:'purple' }}  />

<Text style={{  justifyContent: 'center', alignItems: 'center',color: 'purple',marginTop:15  }}>
  Confirm  Password
  </Text>
  
<TextInput  

onChangeText={(val)=>setcpass(val)}

placeholderTextColor="white"
 onSubmitEditing={Keyboard.dismiss}   
 style={{ color: 'puple',borderWidth:4,borderColor:'purple' }}  />

<Text style={{  justifyContent: 'center', alignItems: 'center',color: 'purple' ,marginTop:15 }}>
  Referer Code (Optional)
  </Text>
<TextInput  
onChangeText={(val)=> setreferercode(val)}
placeholderTextColor="purple"
  
 style={{ color: 'puple',borderWidth:4,borderColor:'purple' }}   />


<Button title="REGISTER" onPress={reg}  style={{ width:300,}}/>



  <View style={{ marginTop: 300 }} />
  <Text style={{  justifyContent: 'center', alignItems: 'center',color: 'white' }}>
   Already Registered
  </Text>
</View>
</SafeAreaView>
  );



}

export default function Register() {
  const Stack = createNativeStackNavigator();
  
    return (
      <Stack.Navigator>
        <Stack.Screen name="Haykaytelecoms" component={Reg_component} 
        options={{
           
            headerShown: false,
            
            tabBarStyle: {
              display: "none",
            },
           
            
        }}/>
        
        <Stack.Screen name="dashboard" component={Dashboard} 
        options={() => ({
         
          headerShown: false,     
        })}/>
      </Stack.Navigator>
  
    );
  
  }