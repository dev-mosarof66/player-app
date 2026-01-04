import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Tabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: "Matches" | "Training";
  setActiveTab: (tab: "Matches" | "Training") => void;
}) => {
  return (
    <View className="px-4 pt-4 pb-4" style={{ gap: 16 }}>
      {/* Tab Navigation */}
      <View
        className="flex-row w-full rounded-md border border-gray-700 bg-gray-800"
        style={{ gap: 8, borderRadius: 8 }}
      >
        <TouchableOpacity
          onPress={() => setActiveTab("Matches")}
          className={`flex-1 py-3 rounded-lg ${
            activeTab === "Matches"
              ? "border border-blue-500 bg-blue-500"
              : "bg-transparent"
          }`}
        >
          <Text
            className={`text-center font-medium ${
              activeTab === "Matches" ? "text-white" : "text-gray-300"
            }`}
          >
            Matches
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab("Training")}
          className={`flex-1 py-3 rounded-lg ${
            activeTab === "Training"
              ? "border border-blue-500 bg-blue-500"
              : "bg-transparent"
          }`}
        >
          <Text
            className={`text-center font-medium ${
              activeTab === "Training" ? "text-white" : "text-gray-300"
            }`}
          >
            Training
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tabs;
