import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const tabs = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "My Tasks",
    value: "my-tasks",
  },
  {
    label: "Completed",
    value: "completed",
  },
  {
    label: "Team",
    value: "team",
  },
  {
    label: "Archive",
    value: "archive",
  },
];

const TasksTab = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View
        className="flex-row items-center justify-between"
        style={{ gap: 8 }}
      >
        {tabs.map((tab) => {
          const activeBgColor =
            activeTab === tab.value ? "bg-blue-600" : "bg-transparent";
          return (
            <TouchableOpacity
              key={tab.value}
              onPress={() => setActiveTab(tab.value)}
              className={`flex items-center justify-center w-28 h-10 px-4 py-2 rounded-lg border border-gray-700 ${activeBgColor}`}
            >
              <Text
                className={`text-[16px] font-bold ${
                  activeTab === tab.value ? "text-white" : "text-gray-300"
                }`}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default TasksTab;
