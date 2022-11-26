import { createStackNavigator } from '@react-navigation/stack';
function HomeScreen() {
  const [email, setemail]=useState('');
const [password, setpass]=useState(''); 
const [signed_in, setsigned_in]=useState('false'); 
const userlogin = () => {

  fetch('http://127.0.0.1:8000/api/apilogin', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
     email : email,
    password:password
  })
}) .then((response) => response.json())
    .then((response) => {
    console.log(response);
   //if(response.status=='Failed'){navigation.navigate('register')}
    });

  }

return (<TouchableOpacity>
     <View style={{marginTop:200 }}>


</View>
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,  backgroundColor: 'white',paddingVertical:40,}}>
      <Text style={{  justifyContent: 'center', alignItems: 'center',color: 'gold' }}>
   Email
  </Text>
 <TextInput title= "Email"
  placeholder="Enter Email"
style={{ color: 'puple',borderWidth:4,borderradius:4,borderColor:'purple' }}
onChangeText={(val)=>setemail(val)} placeholderTextColor="purple"
autoCorrect='true'/>
<Text>{email}</Text>
<Text style={{  justifyContent: 'center', alignItems: 'center',color: 'gold' }}>
    Password
  </Text>

 <TextInput title= "Email"
  placeholder="Enter password"
style={{ color: 'puple',borderWidth:4,borderradius:4,borderColor:'purple' }}
onChangeText={(val)=>setpass(val)} placeholderTextColor="purple"
autoCorrect='true'
secureTextEntry='true'/>
<Text>{password}</Text>


<Text style={{  justifyContent: 'center', alignItems: 'center',color: 'blue' }}>
  Remember Me</Text>
  <View style={{ backgroundColor:'white',height:"20%",}}/>  
<Button title="LOGIN" onPress={userlogin} />


</View>




</TouchableOpacity>);
}

function SettingsScreen() {

  const [email, setemail]=useState('');
const [password, setpass]=useState(''); 
const [signed_in, setsigned_in]=useState('false'); 
const userlogin = () => {

  fetch('http://127.0.0.1:8000/api/apilogin', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
     email : email,
    password:password
  })
}) .then((response) => response.json())
    .then((response) => {
    console.log(response);
   //if(response.status=='Failed'){navigation.navigate('register')}
    });

  }

return (<TouchableOpacity>
     <View style={{marginTop:200 }}>


</View>
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,  backgroundColor: 'white',paddingVertical:40,}}>
      <Text style={{  justifyContent: 'center', alignItems: 'center',color: 'gold' }}>
   Email
  </Text>
 <TextInput title= "Email"
  placeholder="Enter Email"
style={{ color: 'puple',borderWidth:4,borderradius:4,borderColor:'purple' }}
onChangeText={(val)=>setemail(val)} placeholderTextColor="purple"
autoCorrect='true'/>
<Text>{email}</Text>
<Text style={{  justifyContent: 'center', alignItems: 'center',color: 'gold' }}>
    Password
  </Text>

 <TextInput title= "Email"
  placeholder="Enter password"
style={{ color: 'puple',borderWidth:4,borderradius:4,borderColor:'purple' }}
onChangeText={(val)=>setpass(val)} placeholderTextColor="purple"
autoCorrect='true'
secureTextEntry='true'/>
<Text>{password}</Text>


<Text style={{  justifyContent: 'center', alignItems: 'center',color: 'blue' }}>
  Remember Me</Text>
  <View style={{ backgroundColor:'white',height:"20%",}}/>  
<Button title="LOGIN" onPress={userlogin} />


</View>




</TouchableOpacity>

  
  );
}
const Stack = createStackNavigator();


Export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Homescreen" component={Home} />
      
    
    </Stack.Navigator>
  );

}