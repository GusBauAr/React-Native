import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../../src/screens/auth/SignIn";
import SignUpScreen from "../../src/screens/auth/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
