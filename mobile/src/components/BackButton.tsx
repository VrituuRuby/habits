import { Text, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

import { useNavigation } from "@react-navigation/native";

export function BackButton() {
  const { goBack } = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
      <Feather name="arrow-left" color={colors.zinc[400]} size={32} />
    </TouchableOpacity>
  );
}