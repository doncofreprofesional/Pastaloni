import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Pastaloni/src/Views/Home';
import LoginScreen from '../Pastaloni/src/Views/Login';
import RegisterScreen from '../Pastaloni/src/Views/Register';
import ForgottenPasswordScreen from '../Pastaloni/src/Views/ForgottenPassword';
import CreateCompanyScreen from '../Pastaloni/src/Views/CreateCompany';
import AdministrationScreen from './src/Views/MenuItems/Administration/AdministrationPrincipal';
import DeliveryScreen from './src/Views/MenuItems/Delivery/DeliveryPrincipal';
import SellScreen from './src/Views/MenuItems/Sell/SellPrincipal';
import WareHouseScreen from './src/Views/MenuItems/WareHouse/WareHousePrincipal';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// type RootStackParamList = {
//   Home: undefined;
//   Login: undefined;
//   Register: undefined;
//   ForgottenPassword: undefined;
//   CreateCompany: undefined;
//   AdministrationPrincipal: undefined;
//   DeliveryPrincipal: undefined;
//   SellPrincipal: undefined;
//   WareHousePrincipal: undefined;

  
// };
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgottenPassword: undefined;
  CreateCompany: undefined;
  Home: undefined;
};

type TabParamList = {
  Home: undefined;
  AdministrationPrincipal: undefined;
  DeliveryPrincipal: undefined;
  SellPrincipal: undefined;
  WareHousePrincipal: undefined;
};


const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();
const BottomTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'AdministrationPrincipal':
              iconName = 'briefcase';
              break;
            case 'DeliveryPrincipal':
              iconName = 'bicycle';
              break;
            case 'SellPrincipal':
              iconName = 'cash';
              break;
            case 'WareHousePrincipal':
              iconName = 'cube';
              break;
            default:
              iconName = 'ellipse';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: 60,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerTitle: 'Home' }} />
      <Tab.Screen
        name="AdministrationPrincipal"
        component={AdministrationScreen}
        options={{ headerTitle: 'Administration' }}
      />
      <Tab.Screen
        name="DeliveryPrincipal"
        component={DeliveryScreen}
        options={{ headerTitle: 'Delivery' }}
      />
      <Tab.Screen
        name="SellPrincipal"
        component={SellScreen}
        options={{ headerTitle: 'Sell' }}
      />
      <Tab.Screen
        name="WareHousePrincipal"
        component={WareHouseScreen}
        options={{ headerTitle: 'WareHouse' }}
      />
    </Tab.Navigator>
  );
};

// Main App Navigator
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerTitle: 'Login' }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerTitle: 'Register' }}
        />
        <Stack.Screen
          name="ForgottenPassword"
          component={ForgottenPasswordScreen}
          options={{ headerTitle: 'I have forgotten my password' }}
        />
        <Stack.Screen
          name="CreateCompany"
          component={CreateCompanyScreen}
          options={{ headerTitle: 'Create Company' }}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabs} // Incluye las pestañas como una pantalla
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
// const App: React.FC = () => {
//   return (
//     <NavigationContainer> 
//       <Stack.Navigator initialRouteName= 'Login' /*userlogged ?  "Home" : 'Login' */>
//       <Stack.Screen
//         name="Login"
//         component={LoginScreen}
//         options={{ headerTitle: 'Login' }} 
//       />
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ headerTitle: 'Home' }} 
//         />
//         <Stack.Screen
//           name="Register"
//           component={RegisterScreen}
//           options={{ headerTitle: 'Register' }} 
//         />
//         <Stack.Screen
//           name="ForgottenPassword"
//           component={ForgottenPasswordScreen}
//           options={{ headerTitle: 'I have forgotten my password' }} 
//         />
//         <Stack.Screen
//           name="CreateCompany"
//           component={CreateCompanyScreen}
//           options={{ headerTitle: 'Create Company' }} 
//         />
//         <Stack.Screen
//           name="AdministrationPrincipal"
//           component={AdministrationScreen}
//           options={{ headerTitle: 'Administration' }} 
//         />
//         <Stack.Screen
//           name="DeliveryPrincipal"
//           component={DeliveryScreen}
//           options={{ headerTitle: 'Delivery' }} 
//         />
//         <Stack.Screen
//           name="SellPrincipal"
//           component={SellScreen}
//           options={{ headerTitle: 'Sell' }} 
//         />
//         <Stack.Screen
//           name="WareHousePrincipal"
//           component={WareHouseScreen}
//           options={{ headerTitle: 'WareHouse' }} 
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
