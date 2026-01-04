import { colors } from "@/constants/color-config";
import { PlayerInfo } from "@/views/profile-view";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const HealthStatCards = ({ playerInfo }: { playerInfo: PlayerInfo }) => {
  return (
    <View
      className="m-3 p-4 rounded-2xl border border-gray-700 bg-gray-800"
      style={{ gap: 10, borderRadius: 10 }}
    >
      <View className="flex-row items-center justify-between">
        <Text className="text-2xl font-bold text-gray-200">Health Status</Text>
        <View className="px-3 py-1 rounded-full bg-green-600">
          <Text className="text-sm font-medium text-white">
            {playerInfo.healthStatus}
          </Text>
        </View>
      </View>

      <View
        className="flex-col p-4"
        style={{ gap: 10, backgroundColor: colors.darkGray, borderRadius: 10 }}
      >
        <View className="flex-row items-center">
          <Ionicons name="heart" size={20} color="#4ade80" />
          <Text className="ml-2 text-xl text-green-400">
            Excellent Condition
          </Text>
        </View>

        <Text className="mt-2 text-xl text-gray-300">
          No injuries reported. Ready for match selection. Last check:{" "}
          {playerInfo.lastCheck}
        </Text>
      </View>
    </View>
  );
};

export default HealthStatCards;
