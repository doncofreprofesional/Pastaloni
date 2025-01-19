import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../Styles/Styles';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  ForgottenPassword: undefined;
  CreateCompany: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Pastaloni</Text>
      <TextInput style={styles.input} placeholder='User' value={user} onChangeText={setUser}/>
      <TextInput style={styles.input} placeholder='Password' value={pass} onChangeText={setPass} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
      <View style={{display:'flex', marginLeft:'27%',marginTop:20, alignSelf:'flex-start'}}>
         <Text onPress={() => {navigation.navigate('Register');}} style={{color:'blue', marginTop:15,}}>Register</Text>
         <Text onPress={() => {navigation.navigate('ForgottenPassword');}} style={{color:'blue',marginTop:15}}>I have Forgotten My Password</Text>
         <Text onPress={() => {navigation.navigate('CreateCompany');}} style={{color:'blue',marginTop:15}}>Create Company</Text>
      </View>
      
    </View>
  );
};

export default LoginScreen;
