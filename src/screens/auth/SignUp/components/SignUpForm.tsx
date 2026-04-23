import { useState } from "react";
import { View } from "react-native";
import AppButton from "../../../../../components/ui/AppButton";
import AppInput from "../../../../../components/ui/AppInput";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log("REGISTER:", { name, email, password });
  };

  return (
    <View>
      <AppInput label="Full Name" value={name} onChangeText={setName} />
      <AppInput label="Email Address" value={email} onChangeText={setEmail} />
      <AppInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <AppInput
        label="Confirm Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <AppButton title="Create Account" onPress={handleRegister} />
    </View>
  );
}
