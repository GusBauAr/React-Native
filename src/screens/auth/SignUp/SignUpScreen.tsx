import { Text, TouchableOpacity, View } from "react-native";
import SignUpForm from "./components/SignUpForm";

export default function SignUpScreen({ navigation }: any) {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Create Account</Text>

      <SignUpForm />

      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text style={{ marginTop: 20, textAlign: "center" }}>
          Already have an account? Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}
