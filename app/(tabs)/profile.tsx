import GeneralInfo from "@/components/profile/general-info";
import HealthStatCards from "@/components/profile/health-stat-cards";
import PlayerStatCard from "@/components/profile/player-stat-card";
import ProfileCard from "@/components/profile/profile-card";
import ProfileHeader from "@/components/profile/profile-header";
import { colors } from "@/constants/color-config";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export interface PlayerInfo {
  name: string;
  position: string;
  team: string;
  age: number;
  height: number;
  weight: number;
  preferredFoot: string;
  jerseyNumber: number;
  healthStatus: string;
  fitnessLevel: number;
  passingAccuracy: number;
  avgDistanceCovered: number;
  shotsOnTarget: number;
  goals: number;
  assists: number;
  avgRating: number;
  lastCheck: string;
}

const playerInfo: PlayerInfo = {
  name: "Marcus Silva",
  position: "Midfielder",
  team: "Thunder FC",
  age: 24,
  height: 178,
  weight: 72,
  preferredFoot: "Right",
  jerseyNumber: 10,
  healthStatus: "Healthy",
  fitnessLevel: 92,
  passingAccuracy: 87,
  avgDistanceCovered: 10.2,
  shotsOnTarget: 68,
  goals: 8,
  assists: 12,
  avgRating: 8.2,
  lastCheck: "Nov 14, 2025",
};

const ProfileScreen = () => {
  return (
    <SafeAreaView
      className="flex flex-col flex-1"
      style={{ backgroundColor: colors.darkGray, gap: 8 }}
    >
      {/* Header */}
      <ProfileHeader isLoggedIn={false} />
      <ScrollView
        className="flex-1"
        style={{
          paddingTop: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <ProfileCard playerInfo={playerInfo} />
        <GeneralInfo playerInfo={playerInfo} />
        <HealthStatCards playerInfo={playerInfo} />
        <PlayerStatCard playerInfo={playerInfo} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
