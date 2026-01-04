import ProfileScreen from "@/app/(tabs)/profile";
import HomeScreen from "@/app/index";
import MatchesScreen from "@/app/matches";
import TasksScreen from "@/app/tasks";
import { colors } from "@/constants/color-config";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ClipboardList } from "lucide-react-native";
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.lightGray,
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size} />
          ),
          tabBarActiveTintColor: colors.blue,
        }}
      />

      <Tab.Screen
        name="Tasks"
        component={TasksScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ClipboardList color={color} size={size} />
          ),
          tabBarActiveTintColor: colors.blue, 
        }}
      />
      <Tab.Screen
        name="Matches"
        component={MatchesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="football-ball"
              color={color}
              size={size}
            />
          ),
          tabBarActiveTintColor: colors.blue,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" color={color} size={21} />
          ),
          tabBarActiveTintColor: colors.blue,
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
