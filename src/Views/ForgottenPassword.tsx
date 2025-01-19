import React, { useState } from 'react';
import { View, TextInput, StyleSheet,Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Register: undefined;
    ForgottenPassword: undefined;
    CreateCompany: undefined;
  };
  
  type Props = StackScreenProps<RootStackParamList, 'ForgottenPassword'>;

const ForgottenPassword: React.FC<Props> = ( { navigation }) => {
    const [user, setUser] = useState('');
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Restore Password</Text>
       <TextInput style={styles.input} placeholder='User' value={user} onChangeText={setUser}/>
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>RESTORE</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      marginBottom: 20,
    },
    input: {
      width: '50%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      margin: 5,
      marginBottom:10,
    },
    button: {
      backgroundColor: '#3333',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginTop: 20,
      // Sombra en Android
      elevation: -5, // Crea una sombra en Android
      // Sombra en iOS
      shadowColor: 'black', // Color de la sombra
      shadowOffset: {
        width: 3, // Desplazamiento horizontal
        height: 3, // Desplazamiento vertical
      },
      shadowOpacity: 0.25, // Opacidad de la sombra
      shadowRadius: 3.84, // Radio de difuminado
    },
    buttonText: {
      color: '606361',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default ForgottenPassword;
