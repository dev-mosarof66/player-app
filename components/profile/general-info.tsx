import { PlayerInfo } from "@/views/profile-view";
import React from "react";
import { Text, View } from "react-native";

const GeneralInfo = ({ playerInfo }: { playerInfo: PlayerInfo }) => {
  return (
    <View
      className="mx-3 p-4 rounded-2xl border border-gray-700 bg-gray-800"
      style={{ gap: 12, borderRadius: 10 }}
    >
      <Text className="text-2xl font-bold text-gray-200 ">General Info</Text>

      <View style={{ gap: 10 }}>
        <View className="flex-row justify-between">
          <Text className="text-xl text-gray-300">Age</Text>
          <Text className="text-xl font-medium text-gray-200">
            {playerInfo.age}
          </Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-xl text-gray-300">Height</Text>
          <Text className="text-xl font-medium text-gray-200">
            {playerInfo.height} cm
          </Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-xl text-gray-300">Weight</Text>
          <Text className="text-xl font-medium text-gray-200">
            {playerInfo.weight} kg
          </Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-xl text-gray-300">Preferred Foot</Text>
          <Text className="text-xl font-medium text-gray-200">
            {playerInfo.preferredFoot}
          </Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-xl text-gray-300">Jersey Number</Text>
          <Text className="text-xl font-medium text-gray-200">
            #{playerInfo.jerseyNumber}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default GeneralInfo;
