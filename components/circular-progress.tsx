import { colors } from "@/constants/color-config";
import { Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { scaleFontSize } from "@/utils/responsive";

export const CircularProgress = ({
  percentage,
  size = 56,
  strokeWidth = 4,
  color = colors.green,
}: {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const center = size / 2;

  return (
    <View style={{ width: size, height: size }}>
      <Svg width={size} height={size}>
        {/* Background circle */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={colors.lightGray}
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress circle */}
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${center} ${center})`}
        />
      </Svg>
      <View
        style={{
          position: "absolute",
          width: size,
          height: size,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text className="font-semibold text-white" style={{ fontSize: scaleFontSize(14) }}>
          {Math.round(percentage)}%
        </Text>
      </View>
    </View>
  );
};
