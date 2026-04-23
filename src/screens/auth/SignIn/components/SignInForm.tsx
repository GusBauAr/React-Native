import { useState } from "react";
import { View } from "react-native";
import AppButton from "../../../../../components/ui/AppButton";
import AppInput from "../../../../../components/ui/AppInput";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("LOGIN:", { email, password });
  };

  return (
    <View>
      <AppInput label="Email" value={email} onChangeText={setEmail} />
      <AppInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <AppButton title="Sign In" onPress={handleLogin} />
    </View>
  );
}
