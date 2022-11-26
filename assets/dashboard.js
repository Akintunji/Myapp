
import React, { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button,ScrollView,Alert,Image,Keyboard,TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createAppContainer } from '@react-navigation';

import { NavigationContainer } from '@react-navigation/native';
import data from '../wallet/data';
import vtu from '../wallet/vtu';

import cable from '../wallet/cable';
import electricity from '../wallet/electricity';
function dashboard_C({navigation}) {

   // if (signed_in=='true') { Alert('Invalid Crediatials'); }
  return (
<SafeAreaView style={styles.Safeareaview}>
  <ScrollView>

<View style={styles.welcome}>
      <Text>Reseller Ewallet</Text>
<Text>Your Wallet Balances is #4578</Text>
    </View>



 <View style={styles.Buttons}><TouchableOpacity  onPress={() => navigation.navigate('data')}><Text>data</Text></TouchableOpacity> </View>
  <View style={styles.Buttons}><TouchableOpacity><Text>Subscribe To Cable TV</Text></TouchableOpacity> </View>
  <View style={styles.Buttons}><TouchableOpacity><Text>Reseller Ewallet</Text></TouchableOpacity> </View>
 <View style={styles.Buttons}><TouchableOpacity><Text>Buy PINS</Text></TouchableOpacity> </View>
 <View style={styles.Buttons}><TouchableOpacity><Text>Reseller Ewallet</Text> </TouchableOpacity></View>



     
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
export default function dashboard() {
const Stack = createBottomTabNavigator();
  return (  <NavigationContainer independent={true}>
    <Stack.Navigator>
       <Stack.Screen name="dashboard" component={dashboard_C} 
       options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }}/>
      <Stack.Screen name="data" component={data} 
      options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }}/>
      
     <Stack.Screen name="cable" component={cable} 
      options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }}/>
       <Stack.Screen name="electricity" component={electricity} 
      options={{
          title: '',
          headerStyle: {
            backgroundColor: 'purple',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }}/> 
    </Stack.Navigator>
    </NavigationContainer>
  );

}