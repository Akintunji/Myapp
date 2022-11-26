import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Picker, View,SafeAreaView,Button,ScrollView,Alert,Image,Keyboard,TextInput } from 'react-native';
import { Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import React, { useState,useEffect } from 'react';

export default function Electricity() {


    const [amount,set_amount]= useState('');
    const[discotype, set_discotype]=useState('');
      const[meternum,set_meternum]=useState('');
      const [Metertype,  set_meter_type]=useState('');
    const [phonenumber, set_phonenumber]= useState('');
    const buy=()=>{
  
    if(plan_id.length==0||network_id.length==0||phonenumber.length==0||token.length==0 ){
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
        discotype:discotype,
        amount:amount,
        meternum:meternum,
        Metertype:Metertype,
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
  <ScrollView>

  <View style={{ marginTop: 100 }} />





  <Text>SELECT DISTRIBUTOR</Text>
 <Picker onValueChange={(Value) =>
set_discotype(Value )}>

<Picker.Item label = "ABUJA" value = "11" />
 <Picker.Item label = "KANO" value = "15" />
 <Picker.Item label = "PORTHARCOUT" value = "18" />
 <Picker.Item label = "IBADAN" value = "14" />
 
 </Picker>


<View>
<Text>SELECT METER TYPE</Text>

<Picker onValueChange={(Value) =>
  set_meter_type(Value )}>
<Picker.Item label = "PREPAID " value = "Prepaid" />
<Picker.Item label = "POSTPAID" value = "Postpaid" />
</Picker>
<Text> Enter METER NUMBER </Text>
 <TextInput
        style={styles.phoneinput}
        placeholder=" Enter Meter-Number"
        onChangeText={(Value) =>
          set_phonenumber(Value )}
/>  

 </View>

<Button title='Buy'/>
 



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

});
