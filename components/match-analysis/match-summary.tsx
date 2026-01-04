import React from "react";
import { View, Text } from "react-native";
import { scaleFontSize, scaleSpacing } from "@/utils/responsive";

const MatchSummary = ({ isUpcoming }: { isUpcoming: boolean }) => {
  return (
    <View className="px-4">
      <View
        className="p-4 rounded-2xl border border-gray-700 bg-gray-800"
        style={{ gap: scaleSpacing(20) }}
      >
        <View style={{ gap: scaleSpacing(8) }}>
          <View className="w-fit mx-auto bg-blue-500 px-4 py-1 rounded-lg">
            <Text className="text-xl font-bold text-center text-gray-200">
              Cup Quarter Final
            </Text>
          </View>
          <Text className="text-lg text-center text-gray-300">
            November 13, 2025
          </Text>
        </View>

        {/* Teams and Score */}
        <View className="flex-row items-center justify-between">
          {/* Thunder FC */}
          <View
            className="flex items-center justify-center flex-1"
            style={{ gap: scaleSpacing(8) }}
          >
            <View className="w-12 h-12 rounded-lg border border-gray-700 bg-gray-900" />
            <Text className="text-lg font-semibold text-center text-gray-300">
              Thunder FC
            </Text>
          </View>

          {/* Score */}
          {!isUpcoming ? (
            <View className="flex-row items-center justify-center">
              <Text
                className="text-lg font-semibold text-center text-gray-300"
                style={{ fontSize: scaleFontSize(20) }}
              >
                VS
              </Text>
            </View>
          ) : (
            <View className="flex-row items-center justify-center">
              <View className="px-4 py-1 rounded-lg border border-gray-700 bg-gray-900">
                <Text
                  className="text-2xl font-bold text-gray-300"
                  style={{ fontSize: scaleFontSize(20) }}
                >
                  2 - 2
                </Text>
              </View>
            </View>
          )}

          {/* Eagle FC */}
          <View
            className="flex items-center justify-center flex-1"
            style={{ gap: scaleSpacing(8) }}
          >
            <View className="w-12 h-12 rounded-lg border border-gray-700 bg-gray-900" />
            <Text className="text-lg font-semibold text-center text-gray-300">
              Eagle FC
            </Text>
          </View>
        </View>

        {/* Badges */}
        <View
          className="flex-row items-center justify-center"
          style={{ gap: scaleSpacing(8) }}
        >
          <View className="px-3 py-1 rounded-lg bg-blue-500">
            <Text className="text-base font-medium text-white">Midfielder</Text>
          </View>
          <View className="px-3 py-1 rounded-lg bg-green-500">
            <Text className="text-base font-medium text-white">
              {isUpcoming ? "Rating: N/A" : "Rating: 8.2"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MatchSummary;
