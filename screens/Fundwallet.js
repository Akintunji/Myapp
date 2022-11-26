import 'react-native-gesture-handler';

import React,{ useState,useEffect } from 'react';
import { Text,TextInput, View,Button,Image,Alert,TouchableOpacity ,SafeAreaView,Keyboard ,ScrollView,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableWithoutFeedback } from 'react-native-web';



const fund =async (value) => {

  fetch('http://127.0.0.1:8000/api/fundwallet', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
     email : email,
    amount:amount
  })
}) .then((response) => response.json())
    .then((response) => {
    if(response.status=='success'){
        alert('wallet funded');
    }      });

  }



export default function fundwallet() {
  const [amount,set_amount]=useState('');
  const [phone_number,set_Phonenumbe]=useState('');

  const retrieveData = async () => {
  try {
    const email = await AsyncStorage.getItem('logged_in_email');

   if (email.length == 0 || password.length==0) {
      Alert('You are not loggd in');
    navigation.navigate('Login')
    }
  } catch (error) {
    // Error retrieving data
  }
};

  return (
<SafeAreaView style={styles.Safeareaview}>
 <ScrollView>
<View style={styles.welcome}>
      <Text>Reseller Ewallet</Text>

    </View>
 



 <View>

 <Text style={styles.Buttons}>Enter Amount</Text>

 <TextInput
        style={styles.phoneinput}
        placeholder=" Enter Amount"
        onChangeText={(Value) =>
    set_amount(Value )
  }/> 




 <Text  style={styles.Buttons}> Enter PhonesNumber </Text>
 <TextInput
        style={styles.phoneinput}
        placeholder=" Enter PhoneNumber"
        onChangeText={(Value) =>
    set_Phonenumber(Value )
  }/> 
 </View>

<Button title='Buy' style={{ width:300,}}/>
 


     

</ScrollView>
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
   
    alignItems: 'center',
    justifyContent: 'center',
      borderColor: 'purple',
      color:'white',
   
  },

Buttons:{
   PaddingTop:38,Top:20,
    color: 'purple',
    alignItems: 'center',

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

});
