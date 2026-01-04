import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const TrainingView = () => {
  const trainingSessions = [
    {
      id: 1,
      title: "Tactical Training",
      date: "Nov 15, 2025",
      time: "10:00",
      rating: "excellent",
      ratingColor: "green",
      note: "Great understanding of new formation",
    },
    {
      id: 2,
      title: "Fitness Session",
      date: "Nov 12, 2025",
      time: "09:00",
      rating: "good",
      ratingColor: "blue",
      note: "Improved endurance levels",
    },
    {
      id: 3,
      title: "Technical Drills",
      date: "Nov 8, 2025",
      time: "14:00",
      rating: "average",
      ratingColor: "orange",
      note: "Need to work on first touch",
    },
  ];

  const getRatingStyles = (color: string) => {
    const styles = {
      green: "bg-green-500",
      blue: "bg-blue-500",
      orange: "bg-orange-500",
    };
    return styles[color as keyof typeof styles] || "bg-gray-500";
  };

  return (
    <View className="px-4" style={{ gap: 16 }}>
      <View style={{ gap: 12 }}>
        {trainingSessions.map((session) => (
          <TouchableOpacity
            key={session.id}
            className="p-4 rounded-xl border border-gray-700 bg-gray-800"
            style={{ gap: 16 }}
          >
            <View style={{ gap: 2 }}>
              {/* Header with Title and Rating Badge */}
              <View className="flex-row items-start justify-between">
                <Text className="flex-1 text-xl font-medium text-gray-300">
                  {session.title}
                </Text>
                <View
                  className={`px-3 py-1 rounded-full ${getRatingStyles(
                    session.ratingColor
                  )}`}
                >
                  <Text className="text-base font-medium text-white capitalize">
                    {session.rating}
                  </Text>
                </View>
              </View>

              {/* Date & Time */}
              <View className="flex-row items-center" style={{ gap: 4 }}>
                <Ionicons name="calendar-outline" size={16} color="#9CA3AF" />
                <Text className="ml-2 text-base text-gray-300">
                  {session.date} • {session.time}
                </Text>
              </View>
            </View>
            {/* Note Section */}
            <View className="p-4 mt-4 rounded-xl bg-gray-900">
              <Text className="text-lg text-center leading-5 text-gray-300">
                {session.note}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TrainingView;
