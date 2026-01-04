import { colors } from "@/constants/color-config";
import React from "react";
import { Text, View } from "react-native";
import { CircularProgress } from "../circular-progress";
import { scaleFontSize, scaleSpacing } from "@/utils/responsive";

const performanceData = [
  {
    title: "Weekly Fitness",
    value: "92%",
    percentage: 92,
    hasChart: true,
  },
  {
    title: "Last Match Rating",
    value: "8.2",
    hasChart: false,
  },
  {
    title: "Distance Covered",
    value: "10.2 km",
    hasChart: false,
  },
  {
    title: "Pass Accuracy",
    value: "87%",
    hasChart: false,
  },
];

const PerformanceSummary = () => {
  return (
    <View
      className="px-4"
      style={{
        gap: scaleSpacing(10),
        paddingBottom: scaleSpacing(30),
      }}
    >
      <Text className="font-semibold text-gray-300" style={{ fontSize: scaleFontSize(19) }}>
        Performance Summary
      </Text>
      <View className="p-4 rounded-xl border border-gray-700 bg-gray-800">
        {/* Weekly Fitness */}
        {performanceData
          .filter((item) => item.hasChart)
          .map((item, index) => (
            <View
              key={index}
              className="flex flex-row items-center justify-between mb-4"
            >
              <View
                className="flex flex-col items-start justify-between"
                style={{ gap: scaleSpacing(14) }}
              >
                <Text className="text-gray-300" style={{ fontSize: scaleFontSize(17) }}>
                  {item.title}
                </Text>
                <Text
                  className="font-semibold text-white"
                  style={{ fontSize: scaleFontSize(22) }}
                >
                  {item.value}
                </Text>
              </View>
              {/* chart section  */}
              <CircularProgress
                percentage={item.percentage || 0}
                size={70}
                strokeWidth={7}
                color={colors.green}
              />
            </View>
          ))}

        <View className="w-full h-px bg-gray-700" />
        {/* performance summary section  */}
        <View className="flex flex-col pt-3" style={{ gap: scaleSpacing(13) }}>
          {performanceData
            .filter((item) => !item.hasChart)
            .map((item, index) => {
              return (
                <View
                  key={index}
                  className="flex-row items-center justify-between"
                >
                  <Text className="text-gray-300" style={{ fontSize: scaleFontSize(15) }}>
                    {item.title}
                  </Text>
                  <Text
                    className="font-semibold text-white"
                    style={{ fontSize: scaleFontSize(15) }}
                  >
                    {item.value}
                  </Text>
                </View>
              );
            })}
        </View>
      </View>
    </View>
  );
};

export default PerformanceSummary;
