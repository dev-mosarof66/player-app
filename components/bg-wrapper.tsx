import { colors } from "@/constants/color-config";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const BgWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.darkGray }}
    >
      <StatusBar style="light" backgroundColor={colors.darkGray} />
      {children}
    </SafeAreaView>
  );
};

export default BgWrapper;
