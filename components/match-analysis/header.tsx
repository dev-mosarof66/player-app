import { colors } from "@/constants/color-config";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Header = () => {
  const router = useRouter();
  return (
    <View
      className="flex-row items-center w-full px-4 pt-2 pb-4"
      style={{ gap: 12 }}
    >
      <TouchableOpacity
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-700/50"
        onPress={() => router.back()}
      >
        <ArrowLeft color={colors.blue} size={20} />
      </TouchableOpacity>
      <Text className="text-2xl font-bold text-gray-300">Match Analysis</Text>
    </View>
  );
};

export default Header;
