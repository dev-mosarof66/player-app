import { colors } from "@/constants/color-config";
import { useRouter } from "expo-router";
import { LogIn, LogOut } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ProfileHeader = ({ isLoggedIn = false }: { isLoggedIn: boolean }) => {
  const router = useRouter();

  const handleLogout = () => {
    router.replace("/login");
  };
  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <View
      className="flex-row items-center justify-between w-full px-4 pt-4 pb-4"
      style={{ gap: 16 }}
    >
      <Text className="text-3xl font-bold text-gray-300">My Profile</Text>
{/* 
      <TouchableOpacity
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700/50"
        onPress={isLoggedIn ? handleLogout : handleLogin}
      >
        {isLoggedIn ? (
          <LogOut color={colors.blue} size={20} />
        ) : (
          <LogIn color={colors.blue} size={20} />
        )}
      </TouchableOpacity> */}
    </View>
  );
};

export default ProfileHeader;
