import BgWrapper from "@/components/bg-wrapper";
import { colors } from "@/constants/color-config";
import { scaleFontSize, scaleSpacing } from "@/utils/responsive";
import { useRouter } from "expo-router";
import { ArrowLeft, Lock, Mail } from "lucide-react-native";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <BgWrapper>
      <View
        className="flex-row items-center w-full px-4 pt-4 pb-4"
        style={{ gap: 12 }}
      >
        <TouchableOpacity
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700/50"
          onPress={() => router.back()}
        >
          <ArrowLeft color={colors.blue} size={20} />
        </TouchableOpacity>
        <Text className="text-2xl font-bold text-gray-300">Login</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-center items-center h-full"
      >
        <View className="px-6 w-full items-center justify-center h-full">
          <View className="p-6 rounded-2xl border border-gray-700 bg-gray-800 w-full max-w-md">
            <View style={{ gap: 32 }}>
              {/* Header */}
              <View style={{ gap: 8 }}>
                <Text className="text-3xl font-bold text-gray-300 text-center">
                  Welcome Back
                </Text>
                <Text className="text-xl text-gray-300 text-center">
                  Sign in to continue
                </Text>
              </View>

              {/* Login Form */}
              <View style={{ gap: scaleSpacing(20) }}>
                {/* Email Input */}
                <View style={{ gap: scaleSpacing(8) }}>
                  <View className="flex-row items-center" style={{ gap: scaleSpacing(4) }}>
                    <Mail color={colors.gray} size={20} />
                    <Text className="text-base font-medium text-gray-300">
                      Email
                    </Text>
                  </View>
                  <TextInput
                    className="w-full p-4 rounded-xl border border-gray-700 bg-gray-800 text-gray-200"
                    placeholder="Enter your email"
                    placeholderTextColor={colors.gray}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="email"
                    style={{
                      fontSize: scaleFontSize(16),
                      color: "#D1D5DB",
                    }}
                  />
                </View>

                {/* Password Input */}
                <View style={{ gap: scaleSpacing(8) }}>
                  <View className="flex-row items-center" style={{ gap: scaleSpacing(4) }}>
                    <Lock color={colors.gray} size={20} />
                    <Text className="text-base font-medium text-gray-300">
                      Password
                    </Text>
                  </View>
                  <TextInput
                    className="w-full p-4 rounded-xl border border-gray-700 bg-gray-800 text-gray-200"
                    placeholder="Enter your password"
                    placeholderTextColor={colors.gray}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    autoCapitalize="none"
                    autoComplete="password"
                    style={{
                      fontSize: scaleFontSize(16),
                      color: "#D1D5DB",
                    }}
                  />
                </View>

                {/* Forgot Password */}
                <TouchableOpacity>
                  <Text
                    className="text-sm text-right"
                    style={{ color: colors.blue }}
                  >
                    Forgot Password?
                  </Text>
                </TouchableOpacity>

                {/* Login Button */}
                <TouchableOpacity
                  onPress={handleLogin}
                  className="w-full p-4 rounded-xl"
                  style={{
                    backgroundColor: colors.blue,
                  }}
                  activeOpacity={0.8}
                >
                  <Text
                    className="text-center text-base font-semibold"
                    style={{ color: colors.white }}
                  >
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </BgWrapper>
  );
};

export default LoginScreen;
