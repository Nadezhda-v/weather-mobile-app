import { HomeIcon, SearchIcon, SettingIcon } from '@/assets/icons';
import { useTheme } from '@/shared/styles/theme';
import { Colors } from '@/shared/styles/tokens';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.primaryColor,
        tabBarInactiveTintColor: theme.text,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor: theme.text,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{ tabBarIcon: ({ color }) => <HomeIcon color={color} /> }}
      />
      <Tabs.Screen
        name='search'
        options={{ tabBarIcon: ({ color }) => <SearchIcon color={color} /> }}
      />
      <Tabs.Screen
        name='settings'
        options={{ tabBarIcon: ({ color }) => <SettingIcon color={color} /> }}
      />
    </Tabs>
  );
}
