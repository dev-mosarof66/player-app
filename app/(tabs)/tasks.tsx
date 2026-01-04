import TaskModal from "@/components/tasks/task-modal";
import Header from "@/components/tasks/header";
import TaskList from "@/components/tasks/task-list";
import { colors } from "@/constants/color-config";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export type taskType = {
  id: number;
  title: string;
  categories: string[];
  description: string;
  dueDate: string;
  status: string;
  completed: boolean;
  isMine: boolean;
};

const tasks: taskType[] = [
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
    categories: ["Tactical"],
    dueDate: "Nov 17, 2025",
    status: "New",
    completed: true,
    isMine: false,
  },
  {
    id: 3,
    title: "Technical Drill Practice",
    description: "Practice technical drills to improve your skills.",
    categories: ["Dribbling"],
    dueDate: "Nov 13, 2025",
    status: "Late",
    completed: false,
    isMine: true,
  },
  {
    id: 4,
    title: "Shooting Practice",
    description: "Practice shooting to improve your skills.",
    categories: ["Shooting"],
    dueDate: "Nov 14, 2025",
    status: "Done",
    completed: true,
    isMine: false,
  },
  {
    id: 5,
    title: "Team Strategy Review",
    description: "Review the team strategy and identify areas for improvement.",
    categories: ["Tactical", "Team"],
    dueDate: "Nov 18, 2025",
    status: "New",
    completed: false,
    isMine: true,
  },
  {
    id: 6,
    title: "Physical Training",
    description: "Practice physical training to improve your skills.",
    categories: ["Tactical", "Team"],
    dueDate: "Nov 18, 2025",
    status: "Late",
    completed: false,
    isMine: true,
  },
  {
    id: 7,
    title: "Shooting Practice",
    description: "Practice shooting to improve your skills.",
    categories: ["Shooting"],
    dueDate: "Nov 18, 2025",
    status: "Done",
    completed: false,
    isMine: false,
  },
];

const TasksScreen = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [modalVisible, setModalVisible] = useState(false);
  const [taskList, setTaskList] = useState<taskType[]>(tasks);
  const [selectedTask, setSelectedTask] = useState<taskType | null>(null);

  const handleTab = (tab: string) => {
    if (tab === "all") {
      setTaskList(tasks);
    } else if (tab === "my-tasks") {
      setTaskList(tasks.filter((task) => task.isMine === true));
    } else if (tab === "completed") {
      setTaskList(tasks.filter((task) => task.completed === true));
    } else if (tab === "team") {
      setTaskList(tasks.filter((task) => task.isMine === false));
    }
    setActiveTab(tab);
  };

  const handleSelectTask = (task: taskType) => {
    setSelectedTask(task);
    setModalVisible(true);
  };

  return (
    <SafeAreaView
      className="flex flex-col flex-1"
      style={{ backgroundColor: colors.darkGray }}
    >
      <Header handleTab={handleTab} activeTab={activeTab} />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <TaskList selectedTask={taskList} onTaskPress={handleSelectTask} />
      </ScrollView>

      <TaskModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        task={selectedTask}
      />
    </SafeAreaView>
  );
};

export default TasksScreen;
