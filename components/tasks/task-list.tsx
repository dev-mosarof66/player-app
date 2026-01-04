import React from "react";
import { View } from "react-native";
import TaskCard from "./task-card";
import { taskType } from "@/app/(tabs)/tasks";

const TaskList = ({
  selectedTask,
  onTaskPress,
}: {
  selectedTask: taskType[];
  onTaskPress: (task: taskType) => void;
}) => {
  return (
    <View className="flex-1 px-4" style={{ gap: 12 }}>
      {selectedTask.map((task) => (
        <TaskCard key={task.id} task={task} onPress={onTaskPress} />
      ))}
    </View>
  );
};

export default TaskList;
