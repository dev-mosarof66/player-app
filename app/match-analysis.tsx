import Header from "@/components/match-analysis/header";
import KeyMoments from "@/components/match-analysis/key-moments";
import MatchPerformance from "@/components/match-analysis/match-performance";
import MatchSummary from "@/components/match-analysis/match-summary";
import YourHitmap from "@/components/match-analysis/your-hitmap";
import { colors } from "@/constants/color-config";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MatchAnalysisScreen = () => {
  const performanceMetrics = [
    { label: "Distance Covered", value: "10.2 km" },
    { label: "Pass Accuracy", value: "87%", hasProgress: true, progress: 87 },
    { label: "Shots", value: "3" },
    { label: "Shots on Target", value: "2" },
    { label: "Tackles", value: "5" },
    { label: "Dribbles", value: "8" },
    { label: "Interceptions", value: "3" },
    { label: "Passes Completed", value: "62/71" },
  ];

  const keyMoments = [
    { time: "12'", type: "Key Pass", description: "Assist to goal" },
    { time: "34'", type: "Shot on Target", description: "Saved by goalkeeper" },
    {
      time: "56'",
      type: "Tackle Won",
      description: "Important defensive action",
    },
    { time: "78'", type: "Shot on Target", description: "Close attempt" },
  ];

  return (
    <SafeAreaView
      className="flex-1 bg-darkGray"
      style={{ backgroundColor: colors.darkGray }}
    >
      {/* header  */}
      <Header />

      <ScrollView
        className="flex-1"
        style={{
          paddingTop: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ gap: 20 }}>
          <MatchSummary />
          <MatchPerformance performanceMetrics={performanceMetrics} />
          <YourHitmap />
          <KeyMoments keyMoments={keyMoments} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MatchAnalysisScreen;
