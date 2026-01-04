import { taskType } from "@/app/(tabs)/tasks";
import { colors } from "@/constants/color-config";
import { scaleFontSize, scaleSpacing } from "@/utils/responsive";
import { ChevronRight } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { getBatchColor } from "../home/running-tasks";

const TaskCard = ({
  task,
  onPress,
}: {
  task: taskType;
  onPress: (task: taskType) => void;
}) => {
  if (!task) return null;

  return (
    <TouchableOpacity onPress={() => onPress(task)}>
      <View
        className="w-full p-4 bg-gray-800"
        style={{ borderRadius: 10, gap: scaleSpacing(8) }}
      >
        <View className="flex-row items-center justify-between">
          {/* Title */}
          <Text className="font-medium text-gray-200" style={{ fontSize: scaleFontSize(18) }}>
            {task.title || "Untitled Task"}
          </Text>

          {/* Status */}
          <View className="flex-row items-center" style={{ gap: scaleSpacing(4) }}>
            <View
              className={`px-2 py-0.5 rounded-md ${getBatchColor(task.status)}`}
            >
              <Text className="text-gray-200" style={{ fontSize: scaleFontSize(11) }}>
                {task.status}
              </Text>
            </View>
            <ChevronRight size={20} color={colors.gray} strokeWidth={2.5} />
          </View>
        </View>
        {/* categories  */}
        {task.categories && task.categories.length > 0 && (
          <View className="flex-row items-center" style={{ gap: scaleSpacing(4) }}>
            {task.categories.map((category: string) => (
              <View
                key={category}
                className="flex-row items-center px-2 py-0.5 rounded-md bg-gray-700"
                style={{ gap: scaleSpacing(4) }}
              >
                <Text
                  key={category}
                  className="text-gray-200"
                  style={{ fontSize: scaleFontSize(12) }}
                >
                  {category}
                </Text>
              </View>
            ))}
          </View>
        )}
        {/* due date  */}
        {task.dueDate && (
          <Text className="text-gray-300" style={{ fontSize: scaleFontSize(14) }}>
            Due: {task.dueDate}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default TaskCard;
