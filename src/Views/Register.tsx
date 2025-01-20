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

type Props = StackScreenProps<RootStackParamList, 'Register'>;

const RegisterScreen: React.FC<Props> = ({navigation}) => {
    const [repeatEmail, setRepeatEmail] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    let errors = '';
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
    const validate = () => {
      let valid = true;
      if (user.FullName.length < 5 ) {
        errors += "Full name is required.\n";
        valid = false;
      }
      if (user.Email.length < 1) {
        errors += "Email is required.\n";
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(user.Email)) {
        errors = "Invalid email format.\n";
        valid = false;
      }
      if (user.Email !== repeatEmail ) {
        errors = "Emails doen't match\n";
        valid = false;
      }
      if (user.Password.length < 1) {
        errors = "Password is required.\n";
        valid = false;
      } else if (user.Password.length < 6) {
        errors = "Password must be at least 6 characters.\n";
        valid = false;
      } else if (!/[A-Z]/.test(user.Password)) {
        // Verifica si contiene al menos una letra mayúscula
        errors = "Password must contain at least one uppercase letter.\n";
        valid = false;
      } else if (!/[0-9]/.test(user.Password)) {
        // Verifica si contiene al menos un número
        errors = "Password must contain at least one number.\n";
        valid = false;
      } 
      if (user.Password !== repeatPassword) {
        errors = "Passwords do not match.\n";
        valid = false;
      }
      console.log(errors)
      return valid;
    };

    const handleSubmit = () => {
      if(validate())
      {
        navigation.navigate('Login');
      }
      else {
        console.log('asd')
        navigation.navigate('Login');
      }
    };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput style={styles.input} placeholder='FullName' value={user.FullName} onChangeText={(value) => handleChange('FullName', value)}/>
      <TextInput style={styles.input} placeholder='Identification Number' value={user.IdentificationNumber} onChangeText={(value) => handleChange('IdentificationNumber', value)}/>
      <TextInput style={styles.input} placeholder='Email' value={user.Email} onChangeText={(value) => handleChange('Email', value)}/>
      <TextInput style={styles.input} placeholder='Repeat Email' value={repeatEmail} onChangeText={setRepeatEmail}/>
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
      {errors === '' && <Text>{errors}</Text>}
    </View>
  );
};
export default RegisterScreen;
