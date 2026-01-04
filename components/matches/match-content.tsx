import { matchType } from "@/app/matches";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Calendar, Star } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "@/app/_layout";

const getStatusStyles = (color: string) => {
  const styles = {
    orange: "bg-orange-500",
    blue: "bg-blue-500",
    red: "bg-red-500",
    green: "bg-green-500",
  };
  return styles[color as keyof typeof styles] || "bg-gray-500";
};

const MatchesTabContent = ({ matches }: { matches: matchType[] }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleMatchPress = (match: matchType) => {
    if (match.type === "upcoming") {
      navigation.navigate("MatchDetails", { matchId: match.id.toString() });
    } else {
      navigation.navigate("MatchAnalysis", { matchId: match.id.toString() });
    }
  };
  return (
    <View className="px-4" style={{ gap: 16 }}>
      {matches.map((match) => {
        const batchColor = getStatusStyles(match.statusColor);
        return (
          <TouchableOpacity
            key={match.id}
            className="p-4 rounded-xl border border-gray-700 bg-gray-800"
            style={{ gap: 4 }}
            onPress={() => handleMatchPress(match)}
          >
            {/* oponent + type  */}
            <View className="flex flex-row items-center justify-between">
              <Text className="text-xl font-medium text-gray-200">
                {match.opponent}
              </Text>
              <View className={`px-2 py-1 rounded-full ${batchColor}`}>
                <Text className="text-base font-medium text-gray-200">
                  {match.type === "upcoming" ? "Upcoming" : match.outcome}
                </Text>
              </View>
            </View>
            {/* time + score  */}
            <View className="flex flex-row items-center justify-between">
              <View
                className="flex flex-row items-center"
                style={{
                  gap: 6,
                }}
              >
                <Calendar size={16} color="gray" />
                <Text className="text-base text-gray-300">{match.date}</Text>

                <View
                  style={{
                    width: 4,
                    height: 4,
                    backgroundColor: "gray",
                    borderRadius: 2,
                  }}
                />

                <Text className="text-base text-gray-300">{match.time}</Text>
              </View>
              {match.type !== "upcoming" && (
                <Text className="text-lg font-medium text-gray-200">
                  {match.score}
                </Text>
              )}
            </View>

            {/* position + rating  */}
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center">
                <Text className="text-base text-gray-300">
                  Position: {match.position}
                </Text>
              </View>
              <View
                className="flex flex-row items-center px-2 py-1 rounded-full bg-blue-500"
                style={{ gap: 4 }}
              >
                <Star size={16} color="white" />
                <Text className="ml-1 text-sm text-gray-200">
                  {match.rating}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MatchesTabContent;
