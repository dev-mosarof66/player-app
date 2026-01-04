import React from "react";
import { View, Text } from "react-native";
import TasksTab from "./tasks-tab";

const Header = ({
  handleTab,
  activeTab,
}: {
  handleTab: (tab: string) => void;
  activeTab: string;
}) => {
  return (
    <View className="px-4 pt-4 pb-4" style={{ gap: 16 }}>
      <Text className="font-semibold text-gray-300 text-3xl" >
        Tasks
      </Text>

      {/* Tabs */}
      <TasksTab setActiveTab={handleTab} activeTab={activeTab} />
    </View>
  );
};

export default Header;
