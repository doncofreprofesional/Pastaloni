import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import styles from '../Styles/Styles';
import { UserReg } from '../Model/DTO/Users/UserReg'


type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Register: undefined;
    ForgottenPassword: undefined;
    CreateCompany: undefined;
  };

type User ={

}  
type Props = StackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen: React.FC<Props> = ({navigation}) => {
    const [user, setUser] = useState<UserReg>({
      FullName: '',
      IdentificationNumber: '',
      Email: '',
      Phone: '',
      Address:'',
      ZipCode:'',
      City:'',
      Country: '',
      User:'',
      Password:''
    });
  
    // esto lo hizo gpt
    const handleChange = (field: keyof UserReg, value: string | number) => {
      setUser((prev) => ({
        ...prev,
        [field]: value,
      }));
    };

    const handleSubmit = () => {
      if(user.Email === 'cofre.le@gmail.com')
      {
        navigation.navigate('Home')
      }
    };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput style={styles.input} placeholder='FullName' value={user.FullName} onChangeText={(value) => handleChange('FullName', value)}/>
      <TextInput style={styles.input} placeholder='Identification Number' value={user.IdentificationNumber} onChangeText={(value) => handleChange('IdentificationNumber', value)}/>
      <TextInput style={styles.input} placeholder='Email' value={user.Email} onChangeText={(value) => handleChange('Email', value)}/>
      {/* <TextInput style={styles.input} placeholder='Repeat Email' value={user} onChangeText={(value) => handleChange('FullName', value)}/> */}
      <TextInput style={styles.input} placeholder='Phone' value={user.Phone} onChangeText={(value) => handleChange('Phone', value)}/>
      <TextInput style={styles.input} placeholder='Address' value={user.Address} onChangeText={(value) => handleChange('Address', value)}/>
      <TextInput style={styles.input} placeholder='Zip Code' value={user.ZipCode} onChangeText={(value) => handleChange('ZipCode', value)}/>
      <TextInput style={styles.input} placeholder='City' value={user.City} onChangeText={(value) => handleChange('City', value)}/>
      <TextInput style={styles.input} placeholder='Country' value={user.Country} onChangeText={(value) => handleChange('Country', value)}/>
      <TextInput style={styles.input} placeholder='User' value={user.User} onChangeText={(value) => handleChange('User', value)}/>
      <TextInput style={styles.input} placeholder='Password' value={user.Password} onChangeText={(value) => handleChange('Password', value)} />
      {/* <TextInput style={styles.input} placeholder='Repeat Password' value={pass} onChangeText={setPass} /> */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
};
//() => navigation.navigate('Home')
// const Styles = Stylesheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       },
//       title: {
//         fontSize: 20,
//         marginTop: -150,
//         marginBottom: 20,
//       },
//       input: {
//         width: '50%',
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         padding: 10,
//         borderRadius: 5,
//         margin: 5,
//         marginBottom:10,
//       },
//       button: {
//         backgroundColor: '#3333',
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         borderRadius: 10,
//         marginTop: 20,
//         // Sombra en Android
//         elevation: -5, // Crea una sombra en Android
//         // Sombra en iOS
//         shadowColor: 'black', // Color de la sombra
//         shadowOffset: {
//           width: 3, // Desplazamiento horizontal
//           height: 3, // Desplazamiento vertical
//         },
//         shadowOpacity: 0.25, // Opacidad de la sombra
//         shadowRadius: 3.84, // Radio de difuminado
//       },
//       buttonText: {
//         color: '606361',
//         fontSize: 16,
//         fontWeight: 'bold',
//       },
// });

export default RegisterScreen;
