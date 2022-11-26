import 'react-native-gesture-handler';

import React,{ useState,useEffect,useRef } from 'react';
import { Text,TextInput, View,Button,Image,Alert,TouchableOpacity ,SafeAreaView,Keyboard ,ScrollView,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableWithoutFeedback } from 'react-native-web';
import {Paystack} from 'react-native';
import  { Paystack , paystackProps}  from 'react-native-paystack-webview';




export default function Fundwallet() {  
  const paystackWebViewRef = useRef<paystackProps.PayStackRef>(); 
  const [email, setemail] = useState;
  const [amount,set_amount]=useState('');




  async function retrieveUsertoken() {
    try {   
  const session = await AsyncStorage.getItem("user_session");
  if (session!==undefined) {
const app_token=JSON.parse(session);

set_token(app_token.token);


    }
    else{console.log('Empty values')}
} catch (error) {
    
}
}


useEffect(() => {
  retrieveUsertoken();
 });

  

  async function retrieveUseremail() {
    try {   
    
      fetch('https/haykaytelecoms.com.ng/api/email_confirmation', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        token :token,
       
    
      
        })
      }) .then((response) => response.json())
          .then((response) => {
          
            setemail(response.email);
      
      });
      
      
    } catch (error) {
        
    }
  }
   
  


 
    return (

      useEffect(() => {
        retrieveUseremail();
       });
      
      <SafeAreaView style={styles.Safeareaview}>
        <ScrollView>
      <View style={{flex: 1}}>

<Text style={styles.Buttons}>Enter Amount</Text>

 <TextInput
        style={styles.phoneinput}
        placeholder=" Enter Amount"
        onChangeText={(Value) =>
    set_amount(Value )
  }/> 



        <Paystack
          paystackKey="pk_live_0890fce70ac1ed82aee63188096b3303549f6f0b"
          billingEmail="email"
          amount={amount}
          onCancel={(e) => {
          Alert('You have successfully cancelled funding');
          navigation.navigate('dashboard');
          }}
          onSuccess={(res) => {
            Alert('Funding Sucessful');
          }}
          ref={paystackWebViewRef}
        />
  
          <TouchableOpacity onPress={()=> paystackWebViewRef.current.startTransaction()}>
            <Text>Pay Now</Text>
          </TouchableOpacity>
        </View>
        
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
   PaddingTop:38,
 
    alignItems: 'center',
Color: 'purple',

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
