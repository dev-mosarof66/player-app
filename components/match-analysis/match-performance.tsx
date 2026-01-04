import React from "react";
import { View, Text } from "react-native";
import { colors } from "@/constants/color-config";

const MatchPerformance = ({
  performanceMetrics,
  isUpcoming,
}: {
  performanceMetrics: any[];
  isUpcoming: boolean;
}) => {
  return (
    <View
      className="p-4 mx-4 rounded-2xl border border-gray-700 bg-gray-800"
      style={{ gap: 16 }}
    >
      <Text className="text-xl font-bold text-gray-200">Your Performance</Text>
      {isUpcoming ? (
        <View
          style={{
            gap: 20,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text className="text-lg font-semibold text-gray-300">
            Will be updated after the match.
          </Text>
        </View>
      ) : (
        <View style={{ gap: 20 }}>
          {performanceMetrics.map((metric, index) => (
            <View key={index} style={{ gap: 8 }}>
              <View
                className="flex-row items-center justify-between"
                style={{ gap: 12 }}
              >
                <Text className="flex-1 text-base text-gray-300">
                  {metric.label}
                </Text>
                <Text className="text-base font-semibold text-gray-200">
                  {metric.value}
                </Text>
              </View>

              {metric.hasProgress && (
                <View className="w-full h-2 overflow-hidden rounded-full bg-gray-700">
                  <View
                    className="h-full rounded-full"
                    style={{
                      width: `${metric.progress}%`,
                      backgroundColor: colors.blue,
                    }}
                  />
                </View>
              )}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default MatchPerformance;
