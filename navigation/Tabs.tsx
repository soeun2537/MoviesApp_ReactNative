import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import TV from "../screens/TV";
import Search from "../screens/Search";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          marignTop: -5,
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="film-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="TV"
        component={TV}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="tv-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="search" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
