import { View, Text } from "react-native";
import React from "react";
import { scaleFontSize } from "@/utils/responsive";

const Header = ({ title }: { title: string }) => {
  return (
    <View className="px-4 pt-4 pb-4">
      <Text
        className="font-semibold text-gray-300 text-2xl"
        style={{ fontSize: scaleFontSize(21) }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Header;
