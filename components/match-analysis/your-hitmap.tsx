import { colors } from "@/constants/color-config";
import { Activity } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import Svg, { ClipPath, Defs, Polygon, Rect } from "react-native-svg";

const YourHitmap = () => {
  return (
    <View
      className="p-4 mx-4 rounded-2xl border border-gray-700 bg-gray-800"
      style={{ gap: 24 }}
    >
      <Text className="text-xl font-bold text-gray-200">Your Heatmap</Text>
      <View>
        {/* Pitch Visualization */}
        <View
          className="relative flex overflow-hidden h-48 rounded-md border border-gray-700 bg-gray-900"
          style={{
            height: 220,
          }}
        >
          {/* grid line  */}
          <View
            className="bg-gray-700"
            style={{
              height: 220,
              width: 1,
              position: "absolute",
              top: "50%",
              left: "50%",
              zIndex: 100,
              transform: [{ translateY: -220 / 2 }, { translateX: -1 / 2 }],
            }}
          />

          {/* circle  */}
          <View
            className="absolute top-0 left-0 flex items-center justify-center w-full h-full"
            style={{ zIndex: 100 }}
          >
            <View
              className="relative rounded-full border border-gray-700 bg-transparent"
              style={{
                width: 96,
                height: 96,
                borderWidth: 1,
              }}
            />
          </View>

          {/* active area  */}
          <View className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <View className="relative w-full h-full rounded-t-full flex items-center justify-center">
              <Svg
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: [{ translateY: -65 }, { translateX: -50 }],
                }}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <Defs>
                  <ClipPath id="hitmapPolygonClip">
                    <Polygon points="0,0 0,61 100,35" />
                  </ClipPath>
                </Defs>
                <Rect
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  fill="rgba(59, 130, 246, 0.05)"
                  clipPath="url(#hitmapPolygonClip)"
                />
              </Svg>
            </View>
          </View>

          {/* background layer  */}
          <View className="absolute top-0 left-0 w-full h-full bg-gray-900/50" />
        </View>
      </View>
      {/* Heatmap Description */}
      <View className="flex-row items-center justify-center" style={{ gap: 8 }}>
        <Activity size={20} color={colors.blue} />
        <Text className="text-lg text-gray-300">
          Most active in central midfield area
        </Text>
      </View>
    </View>
  );
};

export default YourHitmap;
