function Register() {

const [email, setemail]=useState('');
const [password, setpass]=useState(''); 
const [username, setusername]=useState('');
const [confirm_password,  setcpass]=useState('');
const [Phonenumber, setphone]=useState('');
const [referercode,setreferercode]=useState('');
 const reg = () => {

if (email.length==0 || password.length==0 || confirm_password.length || username.length || Phonenumber.length || referercode.length ) {alert('Missing Field');}

if(password!==confirm_password) { alert('Passwords Donot Match');}
}

  return (
<TouchableOpacity>
 <View style={{marginTop:50 }}>


</View>
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,  backgroundColor: 'white',paddingVertical:40,}}>
   <Text style={{  justifyContent: 'center', alignItems: 'center',color: 'purple' }}>
   Username
  </Text>
 <TextInput title= "Name"
  placeholder="Username"
   style={{ color: 'puple',borderWidth:4,borderColor:'purple',marginTop:10 }}
  OnChangeText={(val)=>setusername(val)}
 placeholderTextColor="white"/>  


 <Text style={{  justifyContent: 'center', alignItems: 'center',color: 'puple',marginTop:15 }}>
   Email
  </Text>
 <TextInput title= "Email"
        placeholder="Enter Email"
style={{ color: 'puple',borderWidth:4,borderColor:'purple',marginTop:15 }}
onChangeText={(val)=>setemail(val)} placeholderTextColor="puple"
 />


<Text style={{  justifyContent: 'center', alignItems: 'center',color: 'purple',marginTop:15  }}>
   Phonenumber
  </Text>
 <TextInput  style={styles.TextInput} 
        placeholder="Enter Phonenumber"
style={{ color: 'puple',borderWidth:4,borderColor:'purple' }}
onChangeText={(val)=> setphone(val)} placeholderTextColor="purple"/>

<Text style={{  justifyContent: 'center', alignItems: 'center',color: 'purple',marginTop:15 }}>
    Password
  </Text>
<TextInput  
placeholder="Enter Password"
onChangeText={(val)=>setpass(val)}
secureTextEntry='true'
placeholderTextColor="white"
 onSubmitEditing={Keyboard.dismiss}   
 style={{ color: 'puple',borderWidth:4,borderColor:'purple' }}  />

<Text style={{  justifyContent: 'center', alignItems: 'center',color: 'purple',marginTop:15  }}>
  Confirm  Password
  </Text>
<TextInput  
placeholder="confirm Password"
onChangeText={(val)=> setcpass(val)}
secureTextEntry='true'
placeholderTextColor="white"
 onSubmitEditing={Keyboard.dismiss}  
 style={{ color: 'puple',borderWidth:4,borderColor:'purple' }}   />

<Text style={{  justifyContent: 'center', alignItems: 'center',color: 'purple' ,marginTop:15 }}>
  Referer Code (Optional)
  </Text>
<TextInput  
placeholder="Enter Referer Code"

onChangeText={(val)=> setreferercode(val)}
placeholderTextColor="purple"
 onSubmitEditing={Keyboard.dismiss}  
 style={{ color: 'puple',borderWidth:4,borderColor:'purple' }}   />


<Button title="REGISTER" onPress={reg} />
<Text style={{  justifyContent: 'center', alignItems: 'center',color: 'white' }}>
   Already Registered
  </Text>

</View>
</TouchableOpacity>




    
  );
}

}