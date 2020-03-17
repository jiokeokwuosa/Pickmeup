import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import PhoneCode from './DailingCode.component';

const Homepage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');   
    const handleTextChange = num => {
        setPhoneNumber(num);
    }
  return (
    <View style={styles.container}>
        <View style={styles.secondContainer}>
            <View style={styles.rowDiv}>
                <Image source = {require('./../assets/logo.png')} style={{height:50, width:50}}/>
                <Text style={styles.logoText}>Pickmeup</Text>
            </View>
            <View style={styles.columnDiv}>
                <Text style={styles.myText}>Hey there!</Text>
                <Text style={styles.myText1}>Type in your phone number to get started</Text>
            </View>
            <View style={styles.myDiv2}>
                <PhoneCode/>
                <TextInput style={styles.textInput}
                    placeholder="Phone Number"
                    onChangeText={handleTextChange}
                    value={phoneNumber}
                />
            </View>
            <View style={styles.myDiv3}>
                <Text style={styles.myText2}>or you sign in with</Text>
            </View>            
        </View> 
        <View style={styles.lastDiv}>
            <View style={styles.box}>
                <Image source = {require('./../assets/facebbok.png')} style={{height:20, width:20}}/>
                <Text>Facebook</Text> 
            </View>
            <View style={styles.box1}>
                <Image source = {require('./../assets/google.png')} style={{height:20, width:20}}/>
                <Text>Google</Text> 
            </View>
        </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  secondContainer: {   
    backgroundColor: '#0000CD',
    height:'86%',     
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
    paddingTop:50,    
    paddingHorizontal:30      
  }, 
  rowDiv:{
    flexDirection:'row',
  },
  box:{
    borderWidth: 1,
    borderColor:'#0000CD',
    borderRadius:5,
    paddingHorizontal:15,
    paddingVertical: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  box1:{
    borderWidth: 1,
    borderColor:'grey',
    borderRadius:5,
    paddingHorizontal:15,
    paddingVertical: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  lastDiv :{
    marginTop:24,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  myDiv2:{
    flexDirection:'row',
    height: 35,
    backgroundColor: '#f5f5f5',
    alignItems: 'stretch',
    marginTop:50,
    borderRadius: 8,
    paddingHorizontal:10 
  },
  columnDiv:{
    flexDirection:'column',
  },
  myDiv3:{
    alignItems:'center',
    position: 'absolute',
    bottom:5,
    left: '40%'
  },
  myText:{
    fontSize:20,
    color: 'white',
    marginTop:30
  },
  myText1:{
    fontSize:20,
    color: 'white',
    marginTop:10
  },
  myText2:{
    color: 'white', 
    textAlign: 'center'   
  },
  logoText:{
    fontSize:35,
    color: 'white'
  },
  textInput:{
    borderLeftWidth: 1,    
    paddingHorizontal:7,
    width:'80%'  
  },
});

export default Homepage;