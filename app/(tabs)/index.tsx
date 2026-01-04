import Header from "@/components/home/header";
import QuickOverview from "@/components/home/quick-overview";
import RunningTasks from "@/components/home/running-tasks";
import UpcomingMatches from "@/components/home/upcoming-matches";
import PerformanceSummary from "@/components/home/performance-summary";
import BgWrapper from "@/components/bg-wrapper";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import TaskModal from "@/components/tasks/task-modal";
import { taskType } from "./tasks";

//placeholder image
const profileImage = require("@/public/profile-image.jpeg");

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState<taskType | null>(null);
  return (
    <BgWrapper>
      <Header image={profileImage} />
      <ScrollView
        style={{
          paddingTop: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ gap: 20 }}>
          <QuickOverview />

          <RunningTasks setSelectedTask={setSelectedTask} setModalVisible={setModalVisible} />

          <UpcomingMatches />

          <PerformanceSummary />
        </View>

        <TaskModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          task={selectedTask}
        />
      </ScrollView>
    </BgWrapper>
  );
};

export default HomeScreen;
