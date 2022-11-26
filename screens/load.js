import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button,ScrollView,Alert,Image,} from 'react-native';
import { Dimensions } from 'react-native';

//const [userlogin, setlogin]=useState('false');



export default function load() {
    
   
return (
<SafeAreaView style={styles.Safeareaview}>
<View style={styles.welcome}>  
    <Text >HAYKAYTELECOMS</Text>  
</View>

  </SafeAreaView>

  );
}






const styles = StyleSheet.create({
    Safeareaview: {
     flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',

fontWeight:'bold',
    height:80, 
color: 'white',
PaddingTop:38,
  },

 welcome: {
    flex: 1,
    fontSize:20,
    alignItems: 'center',
   justifyContent: 'center',
      color:'white',
    
  },  

});
