import { taskType } from "@/app/(tabs)/tasks";
import { colors } from "@/constants/color-config";
import { scaleFontSize, scaleSpacing } from "@/utils/responsive";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const data: taskType[] = [
  {
    id: 1,
    title: "Complete Fitness Assessment",
    description:
      "Complete the weekly fitness assessment including cardio and strength tests.",
    categories: ["Physical"],
    dueDate: "Nov 16, 2025",
    status: "Soon",
    completed: false,
    isMine: true,
  },
  {
    id: 2,
    title: "Review Match Footage",
    description: "Review the match footage and identify areas for improvement.",
    categories: ["Technical"],
    dueDate: "Nov 17, 2025",
    status: "New",
    completed: false,
    isMine: true,
  },
  {
    id: 3,
    title: "Technical Drill Practice",
    description: "Practice the technical drills and improve your skills.",
    categories: ["Technical"],
    dueDate: "Nov 18, 2025",
    status: "Soon",
    completed: false,
    isMine: true,
  },
];

export const getBatchColor = (status: string) => {
  switch (status) {
    case "Soon":
      return "bg-orange-500/70";
    case "New":
      return "bg-blue-500/70";
    case "Late":
      return "bg-red-500/70";
    case "Done":
      return "bg-green-500/70";
    default:
      return "bg-gray-800/70";
  }
};

const RunningTasks = ({
  setSelectedTask,
  setModalVisible,
}: {
  setSelectedTask: (task: taskType) => void;
  setModalVisible: (visible: boolean) => void;
}) => {
  const router = useRouter();

  return (
    <View className="px-4">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="font-semibold text-gray-300" style={{ fontSize: scaleFontSize(19) }}>
          Today's Tasks
        </Text>
        <TouchableOpacity onPress={() => router.push("/tasks")}>
          <Text style={{ fontSize: scaleFontSize(13), color: colors.blue, fontWeight: "500" }}>
            View All
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ gap: scaleSpacing(12) }}>
        {data.map((item) => {
          const batchColor = getBatchColor(item.status);
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                setSelectedTask(item as taskType);
                setModalVisible(true);
              }}
            >
              <View
                className="p-4 rounded-xl border border-gray-700 bg-gray-800"
                style={{ gap: scaleSpacing(10) }}
              >
                <View className="flex-row items-center justify-between">
                  <Text
                    className="font-semibold text-gray-300"
                    style={{ fontSize: scaleFontSize(17) }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    className={`px-2 py-0.5 font-semibold rounded-lg text-gray-200 ${batchColor}`}
                    style={{ fontSize: scaleFontSize(12) }}
                  >
                    {item.status}
                  </Text>
                </View>
                <Text
                  className="text-sm text-gray-300"
                  style={{ fontSize: scaleFontSize(12) }}
                >
                  {item.dueDate}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default RunningTasks;
