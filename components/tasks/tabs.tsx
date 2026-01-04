import {
  scaleFontSize,
  scaleHeight,
  scaleSpacing,
  scaleWidth,
} from "@/utils/responsive";
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
];

const Tabs = ({
  activeTab,
  setActiveTab,
  handleTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  handleTab: (tab: string) => void;
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: scaleSpacing(10),
        paddingVertical: scaleSpacing(4),
        marginBottom: scaleSpacing(10),
      }}
    >
      <View
        className="flex-row items-center justify-between"
        style={{ gap: scaleSpacing(10) }}
      >
        {tabs.map((tab) => {
          const activeBgColor =
            activeTab === tab.value ? "bg-blue-600" : "bg-transparent";
          return (
            <TouchableOpacity
              key={tab.value}
              onPress={() => handleTab(tab.value)}
              className={`flex items-center justify-center rounded-lg border border-gray-700 ${activeBgColor}`}
              style={{
                width: scaleWidth(112),
                height: scaleHeight(35),
              }}
            >
              <Text
                className={`font-bold ${
                  activeTab === tab.value ? "text-white" : "text-gray-300"
                }`}
                style={{ fontSize: scaleFontSize(14) }}
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

export default Tabs;
