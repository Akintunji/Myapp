import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TextInput ,Picker, Text, View,SafeAreaView,Button,ScrollView,Alert,Image,Keyboard } from 'react-native';
import { Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import React, { useState,useEffect } from 'react';

export default function airtime() {


  const buy=()=>{
   
  
    if(amount.length==0||network_id.length==0||phonenumber.length==0||token.length==0 ){
      alert('Missing Field');
    }
  fetch('https/haykaytelecoms.com.ng/api/buy_vtu', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    phonenumber :phonenummber,
      network_id: network_id,
      amount:amount,

  
    })
  }) .then((response) => response.json())
      .then((response) => {
      
   if (response.status=="Success"){
    alert('Transaction Successful');
    navigation.navigate('dashboard')}
   else{alert('Failed Transaction');}
  
  });
  
  }
  return (
<SafeAreaView style={styles.Safeareaview}>
<View style={styles.header}>
      <Text style={styles.title}>HAYKAYTELECOMS</Text>      
    </View>
<View style={styles.welcome}>
      <Text>Reseller Ewallet</Text>
 <Text>SELECT NETWORK</Text>
 <Picker   style={{ height: 50, width: 100 }}
  onValueChange={(Value) =>
    set_network_id(Value )}>

<Picker.Item label = "Mtn" value = "1" />
 <Picker.Item label = "GLO" value = "3" />
 <Picker.Item label = "AIRTEL" value = "2" />
 <Picker.Item label = "9MOBILE" value = "4" />
 
 </Picker>

    <TextInput style={styles.welcome}  
        placeholder="PhoneNumber"

       />
 <TextInput
        style={styles.phoneinput}
      
        placeholder=" Enter Amount"
        keyboardType="number"
       
        onTextChange={(Value) =>
          set_amount(Value )}
      />  

<Button title='Buy'
 onPress={buy}/>
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
container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
      borderColor: 'purple',
      color:'purple',
   
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
    width: 66,
    height: 58,
  },
usernameinput:{fontSize:20,
fontWeight:'bold',
color: 'white',},
 

});
