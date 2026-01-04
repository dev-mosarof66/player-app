import { colors } from "@/constants/color-config";
import { PlayerInfo } from "@/views/profile-view";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const ProfileCard = ({ playerInfo }: { playerInfo: PlayerInfo }) => {
  return (
    <View className="items-center mb-2">
      {/* Profile Picture */}
      <View className="flex items-center justify-center w-32 h-32 mb-4 rounded-full bg-slate-700">
        <Ionicons name="person" size={64} color={colors.gray} />
      </View>

      {/* Player Name */}
      <Text className="mb-1 text-3xl font-bold text-gray-300">
        {playerInfo.name}
      </Text>

      {/* Position */}
      <Text className="mb-1 text-2xl text-gray-300">
        {playerInfo.position}
      </Text>

      {/* Team */}
      <Text className="text-lg text-gray-300">{playerInfo.team}</Text>
    </View>
  );
};

export default ProfileCard;
