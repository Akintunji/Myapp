import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Picker, View,SafeAreaView,Button,ScrollView,Alert,Image,Keyboard,TextInput } from 'react-native';
import { Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState,useEffect } from 'react';





export default function data() {

  async function retrieve_token() {
    try {   
        const session = await AsyncStorage.getItem("token");
        alert()
        } catch (error) {
        // There was an error on the native side
    }
}

  const [network_id, set_network_id]=useState('');
  const [plan_id, set_plan_id]=useState('');
const[phonenumber, set_phonenumber] =useState(''); 
  const buydata = async () => {
  
  
  if(empty(network_id)||empty()) { alert('Passwords Donot Match');navigation.navigate('home');}
  
   fetch('http://127.0.0.1:8000/api/buydata', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    token: token,
      plan_id: plan_id,
      network_id:network_id,
     phonenumber:phonenumber,
  
    })
  }) .then((response) => response.json())
      .then((response) => {
      
   if (response.status=="Success"){Alert('transaction Succesful')}
   else{alert('FAiled Transaction');}
  
  });
  
  }
    
  

  retrieve_token();

  return (
  
<SafeAreaView style={styles.Safeareaview}>
<View style={styles.welcome}>
      <Text>Reseller Ewallet</Text>

    </View>
  <ScrollView>



 <View style={styles.Buttons}>

 <Text>SELECT NETWORK</Text>
 <Picker selectedValue = {network_id} onValueChange = {(val)=>set_network_id(value)}>
<Picker.Item label = "network_id" value = "" />
<Picker.Item label = "Mtn" value = "1" />
 <Picker.Item label = "GLO" value = "3" />
 <Picker.Item label = "AIRTEL" value = "2" />
 <Picker.Item label = "9MOBILE" value = "4" />
 
 </Picker>
</View>

<View>
<Text>SELECT PLAN</Text>

<Picker selectedValue={plan_id} onValueChange =   {(val)=>set_plan_id(value)}>
<Picker.Item label = "MTN 500.00mb SME" value = "252" />
<Picker.Item label = "MTN SME 1GB #240" value = "7" />
<Picker.Item label = "MTN SME 2GB #480 " value = "8" />
<Picker.Item label = "MTN  SME 3GB #720" value = "44" />
<Picker.Item label = "MTN  SME 5GB #1230 " value = "11" />
<Picker.Item label = "MTN  SME 10GB #2450" value = "253" />
<Picker.Item label = "MTN	GIFTING	120gb - 19000" value = "208" />
<Picker.Item label = "MTN  GIFTING 1GB #475 1WEEK" value = "215" />
<Picker.Item label = "MTN  GIFTING 1.5GB #950" value = "210" />
<Picker.Item label = "MTN  GIFTING  5GB #2375" value = "49" />
<Picker.Item label = "MTN GIFTING 10GB #2875 " value = "224" />
<Picker.Item label = "MTN  GIFTING 25GB #5700 " value = "227" />
<Picker.Item label = "MTN GIFTING 10GB #2875 " value = "51" />
<Picker.Item label = "MTN GIFTING 40GB #9500 " value = "52" />
<Picker.Item label = "MTN GIFTING 75GB #14270 " value = "224" />
<Picker.Item label = "MTN GIFTING 120GB #19070" value = "208" />
<Picker.Item label = "MTN CDG 150MB #60" value = "208" />
<Picker.Item label = "MTN CDG 250MB #75" value = "273" />
<Picker.Item label = "MTN CDG 500MB #145" value = "270"  />
<Picker.Item label = "MTN CDG 1GB #250  " value = "265" />
<Picker.Item label = "MTN CDG 2GB #490" value = "266" />
<Picker.Item label = "MTN CDG 3GB #630" value = "267" />
<Picker.Item label = "MTN CDG 10GB #2270 " value = "269" />
<Picker.Item label = "GLO 1.35GB #455" value = "1" />
 <Picker.Item label = "GLO 2.5GB #895 " value = "3" />
 <Picker.Item label = "GLO 4.1GB #1330" value = "2" />
 <Picker.Item label = "GLO 5.8GB #1760" value = "4" />
<Picker.Item label = "GLO 7.7GB #2225" value = "1" />
 <Picker.Item label = "GLO 10GB #2630" value = "3" />
<Picker.Item label = "GLO 10GB #2630 " value = "2" />
 <Picker.Item label = "GLO 13.25GB #3520 " value = "4" />
 <Picker.Item label = "GLO 18.25GB #4400" value = "1" />
 <Picker.Item label = "GLO 29.5GB #6980" value = "3" />
<Picker.Item label = "GLO 50GB #8709 " value = "2" />
 <Picker.Item label = "GLO 13.25GB #3520 " value = "4" />
  <Picker.Item label = "GLO 93.0GB #13130 " value = "4" />
 <Picker.Item label = "GLO 119.0GB #15660 " value = "4" />
 <Picker.Item label = "GLO 13.25GB #3520 " value = "4" />
 <Picker.Item label = "GLO 138.0GB #17430" value = "4" />
<Picker.Item label = "AIRTEL SME 500MB #230 " value = "279" />
<Picker.Item label = " AIRTEL SME 1GB #420 " value = "280" />
<Picker.Item label = "AIRTEL SME 2GB #830 " value = "281" />
<Picker.Item label = "AIRTEL SME 5GB #2030 " value = "282" />
<Picker.Item label = "AIRTEL GIFTING 750MB #470 " value = "220" />
<Picker.Item label = "AIRTEL GIFTING 1.5GB #940  " value = "145" />
<Picker.Item label = "AIRTEL GIFTING 2GB #1150 1 MONTH  " value = "279" />
<Picker.Item label = " AIRTEL GIFTING 3.0GB #1430 " value = "280" />
<Picker.Item label = "AIRTEL GIFTING 4.5GB #1900 " value = "281" />
<Picker.Item label = "AIRTEL GIFTING 6.0GB #2370 " value = "282" />
<Picker.Item label = "AIRTEL GIFTING 10.0GB #2840 " value = "220" />
<Picker.Item label = "AIRTEL GIFTING 20.0GB #4720   " value = "145" />
<Picker.Item label = "AIRTEL GIFTING 40GB #9420 1 MONTH  " value = "279" />
<Picker.Item label = " AIRTEL GIFTING 75GB #14180 1 MONTH" value = "280" />
<Picker.Item label = "AIRTEL GIFTING 120GB #188501 MONTH " value = "281" />
<Picker.Item label = "9MOBILE SME 1.5GB #450 1 MONTH  " value = "282" />
<Picker.Item label = "9MOBILE SME 2.0GB #570 1 MONTH  " value = "220" />
<Picker.Item label = "9MOBILE SME 3.0GB #770 1 MONTH   " value = "145" />
<Picker.Item label = "9MOBILE SME 4.5GB  #1020    " value = "279" />
<Picker.Item label = "  9MOBILE SME 5GB #1223  1 MONTH" value = "280" />
<Picker.Item label = "  9MOBILE SME 8GB #1730  1 MONTH" value = "281" />
<Picker.Item label = "9MOBILE SME 11GB #2310 1 MONTH" value = "282" />
<Picker.Item label = "9MOBILE SME 15GB #3325 1 MONTH  " value = "220" />
<Picker.Item label = "9MOBILE SME 20GB #3930 1 MONTH   " value = "145" />
<Picker.Item label = " 9MOBILE GIFTING 500MB #470 1 MONTH   " value = "279" />
<Picker.Item label = " 9M0BILE GIFTING 1.5GB #900" value = "280" />
<Picker.Item label = " 9MOBILE GIFTING 2.0GB #1025  1 MONTH" value = "281" />
<Picker.Item label = "9MOBILE GIFTING 3GB #1330 1 MONTH " value = "282" />
<Picker.Item label = "9MOBILE GIFTING 4.5GB #1760 1 MONTH   " value = "220" />
<Picker.Item label = " 9MOBILE GIFTING 11.0GB #3500 1 MONTH" value = "145" />
<Picker.Item label = " 9MOBILE GIFTING 15GB #4370 1 MONTH   " value = "279" />
<Picker.Item label = " 9MOBILE GIFTING 40.0GB #8720 1 MONTH" value = "280" />
<Picker.Item label = " 9MOBILE GIFTING 75.0GB #13070 1 MONTH" value = "281" />
 </Picker>
</View>

<View style={styles.Buttons}>

 <Text> Enter PhoneNumber </Text>
 <TextInput
        style={styles.phoneinput}
        placeholder=" Enter PhoneNumber"
        Onchangetext={(val)=>set_phonenumber(val)}/>  
 </View>

<Button title='Buy' onPress={buydata}/>
 


     
<View style={styles.footer}>
 
<Text>Haykaytelecoms(C)</Text>

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
