import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React,{ useState,useEffect } from 'react';
import { Text,Picker,TextInput, View,Button,Image,Alert,TouchableOpacity ,SafeAreaView,Keyboard ,ScrollView,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableWithoutFeedback } from 'react-native-web';

export default function Vtu() {

  const [network_id, set_network_id]=useState(''); 
  const [phonenumber,  set_phonenumber]=useState(''); 
  const [token, set_token]=useState('');
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


  const Buy=()=>{
    alert(phonenumber);
    if(network_id.length==0||phonenumber.length==0||amount.length==0) { alert('Missing Field');
    
  }
  
  fetch('https://www.haykaytelecoms.com.ng/api/buy_vtu', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    phonenumber :phonenumber,
      network_id: network_id,
      amount:amount,
      token:token,
  
    })
  }) .then((response) => response.json())
      .then((response) => {
      
   if (response.status=="Success"){

    alert('Transaction Successful');
    navigation.navigate('dashboard')}
   else{
    console.log(response);
    
    alert('Failed Transaction');}
  
  });
  
  }

  return (
<SafeAreaView style={styles.Safeareaview}>
 <ScrollView>
 <View style={{ marginTop: 100 }} />
 <View style={styles.Buttons}>

 <Text>SELECT NETWORK</Text>
 <Picker 
  style={{ height: 50, width: 100 }}
  onValueChange={(Value) =>
    set_network_id(Value )
  }>
<Picker.Item label = "" value = "" />
<Picker.Item label = "Mtn" value = "1" />
 <Picker.Item label = "GLO" value = "3" />
 <Picker.Item label = "AIRTEL" value = "2" />
 <Picker.Item label = "9MOBILE" value = "4" />
 
 </Picker>
</View>



 <View>

 <Text style={styles.Buttons}>Enter Amount</Text>

 <TextInput
        style={styles.phoneinput}
        placeholder=" E.g 3000"
        onChangeText={(Value) =>
    set_amount(Value )
  }/> 




 <Text  style={styles.Buttons}> Enter PhonesNumber </Text>
 <TextInput
        style={styles.phoneinput}
        placeholder=" E.g 0813.."
        onChangeText={(Value) =>
          set_phonenumber(Value )
  }/> 
 </View>

<Button title='Buy' onPress={Buy}/>
 


     

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
color: 'white',
alignItems: 'center',},
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
color: 'purple',

  },
  phoneinput:{
    PaddingTop:38,
 alignItems: 'center',
 color: 'purple',

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
Safeareaview:{
  alignItems: 'center',
}
});
