import { PlayerInfo } from "@/app/(tabs)/profile";
import { colors } from "@/constants/color-config";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const PlayerStatCard = ({ playerInfo }: { playerInfo: PlayerInfo }) => {
  return (
    <View
      className="m-3 p-4 rounded-2xl border border-gray-700 bg-gray-800"
      style={{ gap: 15, borderRadius: 10, marginBottom: 50 }}
    >
      <Text className="text-2xl font-bold text-gray-200">
        Player Statistics
      </Text>

      {/* Passing Accuracy */}
      <View className="w-full" style={{ width: "100%", gap: 10 }}>
        <View className="flex-row justify-between">
          <Text className="text-xl text-gray-300">Passing Accuracy</Text>
          <Text className="text-xl font-medium text-gray-200">87%</Text>
        </View>
        <View className="h-2 overflow-hidden rounded-full bg-gray-700">
          <View
            className="h-full rounded-full bg-blue-500"
            style={{ width: `${playerInfo.passingAccuracy}%` }}
          />
        </View>
      </View>

      {/* Avg Distance Covered */}
      <View className="flex-row items-center" style={{ gap: 10 }}>
        <Ionicons name="pulse" size={20} color={colors.blue} />
        <View className="flex-1 ml-2 flex-row justify-between">
          <Text className="text-xl text-gray-300">Avg Distance Covered</Text>
          <Text className="text-xl font-medium text-gray-200">
            {playerInfo.avgDistanceCovered} km
          </Text>
        </View>
      </View>

      {/* Fitness Level */}
      <View className="w-full" style={{ width: "100%", gap: 10 }}>
        <View className="flex-row justify-between">
          <MaterialIcons name="trending-up" size={20} color={colors.blue} />
          <View className="flex-1 ml-2 flex-row justify-between">
            <Text className="text-xl text-gray-300">Fitness Level</Text>
            <Text className="text-xl font-medium text-gray-200">
              {playerInfo.fitnessLevel}%
            </Text>
          </View>
        </View>
        <View className="h-2 overflow-hidden rounded-full bg-gray-700">
          <View
            className="h-full rounded-full bg-blue-500"
            style={{ width: `${playerInfo.fitnessLevel}%` }}
          />
        </View>
      </View>

      {/* Shots on Target */}
      <View className="w-full" style={{ width: "100%", gap: 8 }}>
        <View className="flex-row justify-between">
          <Text className="text-xl text-gray-300">Shots on Target</Text>
          <Text className="text-xl font-medium text-gray-200">
            {playerInfo.shotsOnTarget}%
          </Text>
        </View>
        <View className="h-2 overflow-hidden rounded-full bg-gray-700">
          <View
            className="h-full rounded-full bg-blue-500"
            style={{ width: `${playerInfo.shotsOnTarget}%` }}
          />
        </View>
      </View>

      {/* Stats Cards Row */}
      <View className="flex-row justify-between">
        {/* Goals */}
        <View className="flex items-center flex-1 p-4 mr-2 rounded-xl bg-gray-900">
          <Text className="mb-1 text-3xl font-bold text-gray-200">
            {playerInfo.goals}
          </Text>
          <Text className="text-xl text-gray-300">Goals</Text>
        </View>

        {/* Assists */}
        <View className="flex items-center flex-1 p-4 mx-1 rounded-xl bg-gray-900">
          <Text className="mb-1 text-3xl font-bold text-gray-200">
            {playerInfo.assists}
          </Text>
          <Text className="text-xl text-gray-300">Assists</Text>
        </View>

        {/* Avg Rating */}
        <View className="flex items-center flex-1 p-4 ml-2 rounded-xl bg-gray-900">
          <Text className="mb-1 text-3xl font-bold text-gray-200">
            {playerInfo.avgRating}
          </Text>
          <Text className="text-xl text-gray-300">Avg Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default PlayerStatCard;
