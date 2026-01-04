import { taskType } from "@/app/(tabs)/tasks";
import { scaleSpacing } from "@/utils/responsive";
import React from "react";
import { View } from "react-native";
import TaskCard from "./task-card";

const TaskList = ({
  selectedTask,
  onTaskPress,
}: {
  selectedTask: taskType[];
  onTaskPress: (task: taskType) => void;
}) => {
  return (
    <View
      className="flex-1"
      style={{
        gap: scaleSpacing(14),
        paddingBottom: scaleSpacing(20),
        paddingHorizontal: scaleSpacing(10),
      }}
    >
      {selectedTask.map((task) => (
        <TaskCard key={task.id} task={task} onPress={onTaskPress} />
      ))}
    </View>
  );
};

export default TaskList;
