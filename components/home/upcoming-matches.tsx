import { colors } from "@/constants/color-config";
import { ChevronRight } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { scaleFontSize, scaleSpacing } from "@/utils/responsive";
import { useRouter } from "expo-router";

const data = [
  {
    title: "vs Storm United",
    date: "Nov 20, 2025",
    time: "15:00",
    status: "Match",
    id: 1,
  },
  {
    title: "Tactical Training",
    date: "Nov 16, 2025",
    time: "10:00",
    status: "Training",
    id: 2,
  },
];

const getBatchColor = (status: string) => {
  switch (status) {
    case "Match":
      return "bg-blue-500/70";
    case "Training":
      return "bg-green-500/70";
    default:
      return "bg-gray-800/70";
  }
};

const UpcomingMatches = () => {
  const router = useRouter();

  const handleNavigate = (index: string, status: string) => {
    if (status === "Match") {
      router.push("/matches");
    }
  };
  return (
    <View className="px-4">
      <View className="flex-row items-center justify-between mb-4">
        <Text
          className="font-semibold text-gray-300"
          style={{ fontSize: scaleFontSize(19) }}
        >
          Upcoming Matches
        </Text>
        <TouchableOpacity onPress={() => router.push("/matches")}>
          <Text
            style={{
              fontSize: scaleFontSize(13),
              color: colors.blue,
              fontWeight: "500",
            }}
          >
            View Matches
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ gap: scaleSpacing(12) }}>
        {data.map((item) => {
          const batchColor = getBatchColor(item.status);
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleNavigate(item.id.toString(), item.status)}
            >
              <View
                className="flex flex-row justify-between w-full p-4 rounded-xl border border-gray-700 bg-gray-800"
                style={{ gap: scaleSpacing(10) }}
              >
                <View
                  className="flex flex-col justify-between flex-1"
                  style={{ gap: scaleSpacing(10) }}
                >
                  <Text
                    className="font-semibold text-gray-300"
                    style={{ fontSize: scaleFontSize(17) }}
                  >
                    {item.title}
                  </Text>
                  <View className="flex-row " style={{ gap: scaleSpacing(6) }}>
                    <Text
                      className="text-sm font-semibold text-gray-300"
                      style={{ fontSize: scaleFontSize(12) }}
                    >
                      {item.date}
                    </Text>
                    <Text
                      className="text-sm text-gray-300"
                      style={{ fontSize: scaleFontSize(16) }}
                    >
                      •
                    </Text>
                    <Text
                      className="text-sm text-gray-300"
                      style={{ fontSize: scaleFontSize(12) }}
                    >
                      {item.time}
                    </Text>
                  </View>
                </View>
                <View className="flex flex-col items-center justify-center">
                  <View
                    className="flex-row items-center justify-center"
                    style={{ gap: scaleSpacing(6) }}
                  >
                    <Text
                      className={`px-3 py-0.5 font-semibold rounded-lg text-gray-200 ${batchColor}`}
                      style={{
                        fontSize: scaleFontSize(13),
                        textAlign: "center",
                      }}
                    >
                      {item.status}
                    </Text>
                    <ChevronRight size={20} color={colors.gray} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default UpcomingMatches;
