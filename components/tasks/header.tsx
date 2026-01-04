import { scaleFontSize, scaleSpacing } from "@/utils/responsive";
import React from "react";
import { Text, View } from "react-native";
import Tabs from "./tabs";

const Header = ({
  handleTab,
  activeTab,
}: {
  handleTab: (tab: string) => void;
  activeTab: string;
}) => {
  return (
    <View className="px-4 pt-4 pb-4" style={{ gap: scaleSpacing(16) }}>
      <Text className="font-semibold text-gray-300 text-3xl" style={{ fontSize: scaleFontSize(30) }}>
        Tasks
      </Text>

      {/* Tabs */}
      <Tabs setActiveTab={handleTab} activeTab={activeTab} />
    </View>
  );
};

export default Header;
