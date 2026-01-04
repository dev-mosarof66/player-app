import React from "react";
import { ArrowLeft } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { colors } from "@/constants/color-config";
import { useRouter } from "expo-router";



const Header = () => {
  const router = useRouter();
  return (
    <View
    className="flex px-4 pt-4 pb-4"
    style={{
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    }}
  >
    <TouchableOpacity
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700/50"
      onPress={() => router.back()}
    >
      <ArrowLeft color={colors.blue} size={20} />
    </TouchableOpacity>
    <Text className="text-2xl font-bold text-gray-300">Notifications</Text>
  </View>
  );
};

export default Header;