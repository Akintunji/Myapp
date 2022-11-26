import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button,ScrollView,Alert,Image,Keyboard,Usestate} from 'react-native';
import { Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import login from './screens/login';
import register from './screens/register';
import dashboard from './screens/dashboard';

//const [userlogin, setlogin]=useState('false');



export default function homepage() {
    if (userlogin==true){
return <dashboard/>
};        
return (
<SafeAreaView style={styles.Safeareaview}>
<View style={styles.header}>
      <Text style={styles.title}>HAYKAYTELECOMS</Text>      
    </View>
  <ScrollView>
  <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
<View style={styles.welcome}>
      <Text>Welome to Haykaytelecoms</Text>

<Text>We have fast delivery.</Text>
<Text>To get started</Text>

<StatusBar style="auto" />
    </View>

<View style={styles.container}>
      <Text>For Your Aitime,Data Vtu </Text>
<Text>Subscriptions etc</Text>      
<Text>Buy your data at cheap an affordable prices</Text>
<Text>How do i get started?</Text>
<Text>Sign Up, FREE</Text>
<Text>FUND your wallet,Your wallet is credited immediately</Text>
<Text>Start selling or buying data,vtu,subscribe to Gotv etc</Text>
<Button title='LOGIN'   onPress={() => navigation.navigate('LOGIN')}/>
<Text>Sign Up, FREE</Text><Button title='SIGNUP'  onPress={() => navigation.navigate('register')}/>
<StatusBar style="auto" />

<View>
 <Image  style={styles.image} source={require("../assets/Glo.jpg")}/>
<Text>GLO</Text>
<Image  style={styles.image} source={require("../assets/Mtn.png")}/>
<Text>MTN</Text>
<Image  style={styles.image} source={require("../assets/airtel.png")}/>
<Text>AIRTEL</Text>
<Image  style={styles.image} source={require("../assets/9mobile.png")}/>
<Text>9M0BILE</Text>
</View>
<View></View>
<Image  style={styles.image} source={require("../assets/paystack.png")}/>
<Text>Haykay Telecommunication offers the best in internet,Datasbscription,Airtime To cash,</Text>
<Text>Airtime To cash Vtu etc.</Text>
<Text>For more enquiry/info :call 07015564961</Text>
<Text>or emal:enquiries @haykaytelecoms.com.ng</Text>
<Text>or admi@haykaytelecoms.com.ng</Text>
</View>
<View style={styles.footer}>
 
<Text>Haykaytelecoms(C)</Text>

</View>
<View>
  
</View>

</ScrollView>
  </SafeAreaView>

  );
}






const styles = StyleSheet.create({
header: {
height: '100',
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
 welcome: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      borderColor: 'purple',
      color:'purple',
    
  },  
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      borderColor: 'purple',
      color:'purple',
    
  },

button:{
    flex: 10.02,
    backgroundColor: '#fff',
    alignItems: 'center',
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
