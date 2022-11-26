import 'react-native-gesture-handler';

import React,{ useState,useEffect } from 'react';
import { Text,TextInput, View,Button,Image,Alert,TouchableOpacity ,SafeAreaView,Keyboard ,ScrollView,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableWithoutFeedback } from 'react-native-web';





export default function vtu() {

const [phonenumber,Set_phonemuber]=useState('');
  const [amount,set_amount]=useState('');

  const [network_id,set_network_id]=useState('');


  const [token,Set_token]=useState('');

  async function retrieveUsertoken() {
    try {   
        const session = await EncryptedStorage.getItem("user_session");
const app_token=session.json.parse();
        if (session !== undefined) {
          Set_token(app_token.token)
        }
    } catch (error) {
        // There was an error on the native side
    }
}

  const  buy =async (value) => {

  
    fetch('http://127.0.0.1:8000/api/apilogin', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
     token : token,
    amount:amount,
   phonenumber:phonenumber,
   network_id:network_id,

   })
   }) .then((response) => response.json())
       .then((response) => {
      if(response.status=="Success"){
     navigation.navigate('dashboard')}
     if (response.status!=="Success"){alert('Failed Transavtions')}
   
   });
   
   }
 

   useEffect(() => {
    retrieveUserSession()});

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
        placeholder=" E.g 30000"
        onChangeText={(Value) =>
    set_amount(Value )
  }/> 




 <Text  style={styles.Buttons}> Enter PhonesNumber </Text>
 <TextInput
        style={styles.phoneinput}
        placeholder="E.g 08131384359"
        onChangeText={(Value) =>
          Set_phonemuber(Value )
  }/> 
 </View>

<Button/>
 


     

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

 color: "#20232a",
 top: 270,
height: 658,
  },
 image: {
    width: 66,
    height: 58,
  },
  phoneinput:{
  color:'purple',
  
  }

});
