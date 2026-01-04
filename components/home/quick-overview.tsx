import { colors } from "@/constants/color-config";
import { Activity, Target } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import { scaleFontSize, scaleSpacing } from "@/utils/responsive";

const data = [
  {
    id: 1,
    title: "Fitness Level",
    value: 92,
    icon: Activity,
    color: colors.green,
  },
  {
    id: 2,
    title: "Task Completion",
    value: 75,
    icon: Target,
    color: colors.blue,
  },
];

const QuickOverview = () => {
  return (
    <View className="flex flex-col w-full px-4" >
      <Text className="mb-4 font-semibold text-gray-200" style={{ fontSize: scaleFontSize(19) }}>
        Quick Overview
      </Text>
      <View className="flex-row" style={{ gap: scaleSpacing(16) }}>
        {data.map((item) => {
          return (
            <View
              key={item.id}
              className="flex-1 p-4 rounded-2xl border border-gray-700 bg-gray-800"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: scaleSpacing(10),
              }}
            >
              <View>
                <item.icon size={30} color={item.color} />
              </View>
              <Text className="font-bold text-white" style={{ fontSize: scaleFontSize(23) }}>
                {item.value}%
              </Text>
              <Text className="text-gray-200" style={{ fontSize: scaleFontSize(15) }}>
                {item.title}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default QuickOverview;
