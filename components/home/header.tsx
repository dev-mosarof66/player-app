import { colors } from "@/constants/color-config";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { scaleFontSize, scaleSpacing } from "@/utils/responsive";

const Header = ({ image }: { image: ImageSourcePropType | undefined }) => {
  const router = useRouter();
  return (
    <View className={"w-full px-4 pt-4 pb-4"}>
      <View className="flex-row items-center justify-between">
        {/* image + name + position */}
        <View className="flex-row items-center" style={{ gap: scaleSpacing(12) }}>
          <View
            className={`flex items-center justify-center w-12 h-12 rounded-full bg-gray-700/50`}
            style={{
              borderRadius: "100%",
              borderWidth: 1,
              borderColor: colors.gray,
            }}
          >
            {image ? (
              <Image
                source={image}
                className="w-full h-full rounded-full"
                style={{ width: "100%", height: "100%", resizeMode: "cover" }}
              />
            ) : (
              <Text
                className="font-bold text-gray-200"
                style={{ fontSize: scaleFontSize(17) }}
              >
                MS
              </Text>
            )}
          </View>
          <View>
            <Text
              className="font-semibold text-gray-200"
              style={{ fontSize: scaleFontSize(18) }}
            >
              Marcus Silva
            </Text>
            <Text className="text-gray-200" style={{ fontSize: scaleFontSize(14) }}>
              Midfielder
            </Text>
          </View>
        </View>
        {/* notifications */}
        <TouchableOpacity
          className={`flex items-center justify-center w-12 h-12 rounded-full bg-gray-700/50`}
          style={{
            borderRadius: "100%",
            borderWidth: 1,
            borderColor: colors.gray,
          }}
          onPress={() => router.push("/notification")}
        >
          <Ionicons
            name="notifications-outline"
            size={24}
            color={colors.gray}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
