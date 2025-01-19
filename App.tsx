// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
// import HomeScreen from './src/Views/Home';
// import Screen1 from './src/Views/MenuItems/Screen1';
// import Screen2 from './src/Views/MenuItems/Screen2';
// import Screen3 from './src/Views/MenuItems/Screen3';

// type RootTabParamList = {
//   Screen1: undefined;
//   Screen2: undefined;
//   Home: undefined;
//   Screen3: undefined;
// };

// const Tab = createBottomTabNavigator<RootTabParamList>();

// const App: React.FC = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName: keyof typeof Ionicons.glyphMap;

//             if (route.name === 'Screen1') {
//               iconName = focused ? 'settings' : 'settings-outline';
//             } else if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'Screen2') {
//               iconName = focused ? 'list' : 'list-outline';
//             } else if (route.name === 'Screen3') {
//               iconName = focused
//                 ? 'information-circle'
//                 : 'information-circle-outline';
//             } else {
//               iconName = 'ellipse';
//             }

//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//           tabBarStyle: { height: 60 },
//         })}
//       >
//         <Tab.Screen name="Screen1" component={Screen1} />
//         <Tab.Screen name="Screen2" component={Screen2} />
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Screen3" component={Screen3} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Pastaloni/src/Views/Home';
import LoginScreen from '../Pastaloni/src/Views/Login';
import RegisterScreen from '../Pastaloni/src/Views/Register';
import ForgottenPasswordScreen from '../Pastaloni/src/Views/ForgottenPassword';
import CreateCompanyScreen from '../Pastaloni/src/Views/CreateCompany';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  ForgottenPassword: undefined;
  CreateCompany: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName= 'Login' /*userlogged ?  "Home" : 'Login' */>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerTitle: 'Login' }} // Título de la pantalla Login
      />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: 'Home' }} // Título de la pantalla Home
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerTitle: 'Register' }} // Título de la pantalla Login
        />
        <Stack.Screen
          name="ForgottenPassword"
          component={ForgottenPasswordScreen}
          options={{ headerTitle: 'I have forgotten my password' }} // Título de la pantalla Login
        />
        <Stack.Screen
          name="CreateCompany"
          component={CreateCompanyScreen}
          options={{ headerTitle: 'Create Company' }} // Título de la pantalla Login
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
