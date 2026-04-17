import { Text, TouchableOpacity, View } from "react-native";
import SignInForm from "./components/SignInForm";

export default function SignInScreen({ navigation }: any) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Sign In</Text>

      <SignInForm />

      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={{ marginTop: 20, textAlign: "center" }}>
          Dont have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}
