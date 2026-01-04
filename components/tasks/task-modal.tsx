import { colors } from "@/constants/color-config";
import { taskType } from "@/app/tasks";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";

interface TaskModalProps {
  visible: boolean;
  onClose: () => void;
  task?: taskType | null;
}

const TaskModal: React.FC<TaskModalProps> = ({ visible, onClose, task }) => {
  if (!task) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/80 backdrop-blur-sm">
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingTop: 80, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Main Task Card */}
          <View className="m-4 rounded-2xl border border-gray-700 bg-gray-800">
            {/* Header with Close Button */}
            <View className="flex-row items-center justify-between p-4 border-b border-gray-800">
              <Text className="flex-1 text-2xl font-bold text-gray-300">
                {task.title}
              </Text>
              <TouchableOpacity
                onPress={onClose}
                className="items-center justify-center w-8 h-8"
              >
                <Ionicons name="close" size={24} color={colors.gray} />
              </TouchableOpacity>
            </View>

            <View className="px-4 pb-4" style={{ gap: 16 }}>
              <View className="flex-row items-center" style={{ gap: 8 }}>
                {/* Tags */}
                <View className="flex-row flex-wrap" style={{ gap: 8 }}>
                  {task.categories.map((category, index) => (
                    <View
                      key={index}
                      className={`px-3 py-1.5 rounded-lg bg-gray-700 `}
                    >
                      <Text className="text-sm text-gray-200">{category}</Text>
                    </View>
                  ))}
                </View>
                {/* date  */}
                <View className="px-3 py-1.5 rounded-lg bg-orange-600">
                  <Text className="text-sm text-gray-200">{task.status}</Text>
                </View>
              </View>
              {/* Description */}
              <View>
                <Text className="mb-2 text-xl text-gray-200">Description:</Text>
                <Text className="text-lg text-gray-300">
                  {task.description}
                </Text>
              </View>

              {/* Due Date */}
              <View>
                <Text className="mb-1 text-xl text-gray-200">Due Date:</Text>
                <Text className="text-lg text-gray-300">{task.dueDate}</Text>
              </View>

              {/* Task Video Section */}
              <View className="flex flex-col" style={{ gap: 8 }}>
                <Text className="text-xl text-gray-200">Task Video:</Text>
                {/* Video Placeholder */}
                <View className="flex items-center justify-center w-full h-60 mb-3 rounded-xl border border-gray-700 bg-gray-900">
                  <View className="flex items-center justify-center w-16 h-16 rounded-full border border-white/20 bg-white/5">
                    <Ionicons
                      name="play"
                      size={28}
                      color={colors.gray}
                      style={{ marginLeft: 4 }}
                    />
                  </View>
                </View>
              </View>

              {/* buttons  */}
              <View
                className="flex flex-col justify-between"
                style={{ gap: 8 }}
              >
                {/* View Task Video Button */}
                <TouchableOpacity className="flex items-center py-3.5 rounded-xl bg-blue-600 active:bg-blue-700">
                  <Text className="text-base font-semibold text-gray-200">
                    View Task Video
                  </Text>
                </TouchableOpacity>
                {/* Mark as Complete Button */}
                <TouchableOpacity className="flex items-center py-4 rounded-xl bg-green-600 active:bg-green-700">
                  <Text className="text-base font-bold text-gray-200">
                    Mark as Complete
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default TaskModal;
