import BgWrapper from "@/components/bg-wrapper";
import Header from "@/components/match-details/header";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Calendar, Clock, MapPin } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { RootStackParamList } from "./_layout";
import { colors } from "@/constants/color-config";

type Props = NativeStackScreenProps<RootStackParamList, "MatchDetails">;

const data = [
  {
    id: 1,
    type: "upcoming",
    game: "Premier League",
    team: "Liverpool",
    opponent: "Manchester United",
    date: "2024-01-01",
    time: "10:00",
    location: "Anfield",
  },
];

const MatchDetailsScreen = ({ route }: Props) => {
  const { matchId } = route.params;
  const match = data.find((item) => item.id.toString() === matchId) || data[0];

  return (
    <BgWrapper>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 50 }}
      >
        <View className="px-4">
          {/* Main Match Card */}
          <View
            className="p-4 rounded-xl border border-gray-700 bg-gray-800"
            style={{ gap: 30 }}
          >
            {/* Game Type */}
            <View className="items-center">
              <View className="px-3 py-1 rounded-full bg-blue-500 border border-blue-500/50">
                <Text className="text-lg font-semibold text-gray-200">
                  {match.game}
                </Text>
              </View>
            </View>

            {/* Teams */}
            <View className="flex-row items-center justify-between">
              <View className="flex-1 items-center" style={{ gap: 8 }}>
                <View className="w-16 h-16 rounded-lg border border-gray-700 bg-gray-900" />
                <Text className="text-lg font-semibold text-gray-300 text-center">
                  {match.team}
                </Text>
              </View>

              <Text className="text-2xl font-bold text-gray-300 mx-4">VS</Text>

              <View className="flex-1 items-center" style={{ gap: 8 }}>
                <View className="w-16 h-16 rounded-lg border border-gray-700 bg-gray-900" />
                <Text className="text-lg font-semibold text-gray-300 text-center">
                  {match.opponent}
                </Text>
              </View>
            </View>

            {/* Match Info */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 20,
              }}
            >
              <View className="flex-row items-center" style={{ gap: 8 }}>
                <Calendar size={18} color={colors.blue} />
                <Text className="text-lg text-gray-300">{match.date}</Text>
              </View>

              <View className="flex-row items-center" style={{ gap: 8 }}>
                <Clock size={18} color={colors.blue} />
                <Text className="text-lg text-gray-300">{match.time}</Text>
              </View>

              <View className="flex-row items-center" style={{ gap: 8 }}>
                <MapPin size={18} color={colors.blue} />
                <Text className="text-lg text-gray-300">
                  {match.location}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </BgWrapper>
  );
};

export default MatchDetailsScreen;
