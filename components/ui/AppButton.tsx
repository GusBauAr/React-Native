import { Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export default function AppButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#007bff",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <Text style={{ color: "#fff", fontWeight: "bold" }}>{title}</Text>
    </TouchableOpacity>
  );
}
