import { Text, TextInput, View } from "react-native";

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};

export default function AppInput({
  label,
  value,
  onChangeText,
  secureTextEntry,
}: Props) {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={{ marginBottom: 5 }}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 8,
        }}
      />
    </View>
  );
}
