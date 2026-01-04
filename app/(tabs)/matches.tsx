import React, { useState } from "react";
import TrainingView from "@/components/matches/training-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/color-config";
import MatchesHeader from "@/components/matches/matches-header";
import MatchesTabContent from "@/components/matches/match-content";
import { ScrollView } from "react-native";

export type matchType = {
  id: number;
  opponent: string;
  date: string;
  time: string;
  type: "upcoming" | "past" | "training";
  status: "Upcoming" | "In Progress" | "Completed";
  statusColor: "orange" | "blue" | "red" | "green";
  outcome: "WIN" | "LOSS" | "DRAW";
  outcomeColor: "green" | "red" | "blue";
  score: string;
  rating: number;
  position: string;
};
const MatchesView = () => {
  const [activeTab, setActiveTab] = useState<"Matches" | "Training">("Matches");

  const matches: matchType[] = [
    {
      id: 1,
      opponent: "vs Storm United",
      date: "Nov 20, 2025",
      time: "15:00",
      type: "upcoming",
      outcome: "WIN",
      outcomeColor: "green",
      score: "2-1",
      rating: 8.2,
      position: "Midfielder",
      status: "Upcoming",
      statusColor: "orange",
    },
    {
      id: 2,
      opponent: "vs Eagle FC",
      date: "Nov 13, 2025",
      time: "14:30",
      type: "past",
      outcome: "DRAW",
      outcomeColor: "blue",
      score: "2-2",
      rating: 8.2,
      position: "Midfielder",
      status: "Completed",
      statusColor: "green",
    },
    {
      id: 3,
      opponent: "vs Phoenix FC",
      date: "Nov 6, 2025",
      time: "16:00",
      type: "past",
      outcome: "LOSS",
      outcomeColor: "red",
      score: "0-2",
      rating: 7.5,
      position: "Midfielder",
      status: "Completed",
      statusColor: "red",
    },
    {
      id: 4,
      opponent: "vs Titan FC",
      date: "Oct 30, 2025",
      time: "15:30",
      type: "past",
      outcome: "WIN",
      outcomeColor: "green",
      score: "3-1",
      rating: 8.8,
      position: "Midfielder",
      status: "Completed",
      statusColor: "green",
    },
  ];

  return (
    <SafeAreaView
      className="flex flex-col flex-1"
      style={{ backgroundColor: colors.darkGray }}
    >
      {/* Header */}
      <MatchesHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      <ScrollView
        contentContainerStyle={{ paddingTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {activeTab === "Matches" ? (
          <MatchesTabContent matches={matches} />
        ) : (
          <TrainingView />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MatchesView;
