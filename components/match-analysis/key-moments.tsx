import { colors } from "@/constants/color-config";
import React from "react";
import { Text, View } from "react-native";
import { scaleFontSize, scaleSpacing, scaleHeight } from "@/utils/responsive";

const KeyMoments = ({ keyMoments }: { keyMoments: any[] }) => {
  return (
    <View className="p-4 mx-4 rounded-2xl border border-gray-700 bg-gray-800" style={{
      marginBottom: scaleHeight(50),
    }}>
      <Text className="mb-4 text-xl font-bold text-gray-200">Key Moments</Text>
      <View style={{ gap: scaleSpacing(12) }}>
        {keyMoments.map((moment, index) => (
          <View key={index} style={{ gap: scaleSpacing(4) }} className="flex flex-row flex-1">
            {/* Time Badge */}
            <View className="flex items-center justify-center w-12 h-12 rounded-xl border border-gray-700 bg-gray-900 ">
              <Text
                className="text-base font-bold text-blue-600 "
                style={{ fontSize: scaleFontSize(16), color: colors.blue }}
              >
                {moment.time ? moment.time : "00:00"}
              </Text>
            </View>

            <View
              className="flex-1 p-4 rounded-xl border border-gray-800 bg-gray-900"
              style={{ gap: scaleSpacing(12) }}
            >
              {/* Moment Details */}
              <View className="flex-1">
                <Text className="mb-1 text-base font-semibold text-gray-200">
                  {moment.type ? moment.type : "Type"}
                </Text>
                <Text className="text-base text-gray-300">
                  {moment.description ? moment.description : "Description"}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default KeyMoments;
