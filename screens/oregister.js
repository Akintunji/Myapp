import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, TextInput, View,SafeAreaView,Button,ScrollView,Alert,Image,Keyboard,Usestate} from 'react-native';
import { Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';


export default function App({navigation}) {

  return (
<SafeAreaView style={styles.Safeareaview}>
<View style={styles.header}>
      <Text style={styles.title}>HAYKAYTELECOMS</Text>      
    </View>
  <ScrollView>
<View>


 <Text>
Name
  </Text>
    <TextInput style={styles.usernameinput}  
        placeholder="Enter Email"
keyboardType="text"
       onSubmitEditing={Keyboard.dismiss}/>


  <Text>
  Email Adress
  </Text>
    <TextInput style={styles.usernameinput}  
        placeholder="Enter Email"
keyboardType="text"
       onSubmitEditing={Keyboard.dismiss}/>
  
 <Text>
  PhoneNumber
  </Text>
    <TextInput style={styles.usernameinput}  
        placeholder="PhoneNumber"
keyboardType="text"
       onSubmitEditing={Keyboard.dismiss}/>
 <Text>
  Password
  </Text>
    <TextInput style={styles.usernameinput}  
        placeholder="Password"
keyboardType="text"
       onSubmitEditing={Keyboard.dismiss}/>

 <Text>
  Password
  </Text>
    <TextInput style={styles.usernameinput}  
        placeholder="Confirm Password"
keyboardType="text"
       onSubmitEditing={Keyboard.dismiss}/>
<Button title="Register"/>



<Text>
    Forgot Password?
  </Text>

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

usernameinput:{fontSize:20,
fontWeight:'bold',
color: 'white',},
 
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
  usernameinput:{ flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      borderColor: 'purple',
   fontSize:20,
fontWeight:'bold',
    height:80, 
color: 'white', },
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
