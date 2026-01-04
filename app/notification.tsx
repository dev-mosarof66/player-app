import BgWrapper from "@/components/bg-wrapper";
import { colors } from "@/constants/color-config";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "@/components/notifications/header";
import { Bell } from "lucide-react-native";

const mockNotifications = [
  {
    id: 1,
    title: "Match Reminder",
    message:
      "Your match against Storm United starts in 2 hours. Don't forget to arrive 30 minutes early.",
    time: "2 hours ago",
    type: "match",
  },
  {
    id: 2,
    title: "Training Session",
    message:
      "Tactical training session scheduled for tomorrow at 10:00 AM. Focus on defensive positioning.",
    time: "5 hours ago",
    type: "training",
  },
  {
    id: 3,
    title: "Performance Update",
    message:
      "Your match analysis from last week is ready. Check your stats: 85% pass accuracy, 12 km distance covered.",
    time: "1 day ago",
    type: "performance",
  },
  {
    id: 4,
    title: "Team Announcement",
    message:
      "Team meeting scheduled for Friday at 3:00 PM. We'll discuss the upcoming tournament strategy.",
    time: "1 day ago",
    type: "announcement",
  },
  {
    id: 5,
    title: "Match Result",
    message:
      "Final score: Your Team 3 - 1 Storm United. Great performance! Review your key moments in Match Analysis.",
    time: "2 days ago",
    type: "result",
  },
  {
    id: 6,
    title: "Training Reminder",
    message:
      "Strength and conditioning session today at 4:00 PM. Bring your training gear.",
    time: "2 days ago",
    type: "training",
  },
  {
    id: 7,
    title: "New Task Assigned",
    message:
      "You have a new video analysis task. Review the tactical breakdown of the last match.",
    time: "3 days ago",
    type: "task",
  },
  {
    id: 8,
    title: "Match Schedule Update",
    message:
      "Your match against Thunder FC has been rescheduled to November 25th at 16:00.",
    time: "3 days ago",
    type: "match",
  },
];

const NotificationScreen = () => {
  return (
    <BgWrapper>
      <Header />
      <ScrollView
        className="flex-1"
        style={{ paddingTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ gap: 12, paddingBottom: 50 }} className="px-4">
          {mockNotifications.length > 0 ? (
            mockNotifications.map((notification) => (
              <View
                key={notification.id}
                className="p-4 rounded-xl border border-gray-700 bg-gray-800"
              >
                <View style={{ gap: 12 }} className="w-fit">
                  <View
                    style={{ gap: 2 }}
                    className="w-fit flex flex-row items-center justify-between"
                  >
                    <View className="flex-row items-center" style={{ gap: 4 }}>
                      <Bell color={colors.blue} size={22} />
                      <Text className="text-xl text-gray-300 font-bold">
                        {notification.title}
                      </Text>
                    </View>
                    <View className="bg-blue-700 rounded-full p-1 px-2">
                      <Text className="text-sm text-white text-right">
                        {notification.time}
                      </Text>
                    </View>
                  </View>
                  <Text
                    className="text-base text-gray-300 leading-5"
                    style={{
                      lineHeight: 20,
                      maxWidth: "100%",
                    }}
                  >
                    {notification.message}
                  </Text>
                </View>
              </View>
            ))
          ) : (
            <View
              className="flex items-center justify-center h-full"
              style={{
                paddingTop: 100,
                gap: 12,
              }}
            >
              <Bell color={colors.blue} size={45} />
              <Text className="text-2xl text-gray-300 font-bold">
                No notifications found
              </Text>
              <Text className="text-lg text-gray-300">
                You will see your notifications here
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </BgWrapper>
  );
};

export default NotificationScreen;
