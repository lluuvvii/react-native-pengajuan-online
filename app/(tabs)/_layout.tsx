import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="kematian"
        options={{
          title: 'Kematian',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="grave-stone" color={color} />,
        }}
      />
      <Tabs.Screen
        name="kelahiran"
        options={{
          title: 'Kelahiran',
          tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="baby" color={color} />,
        }}
      />
      <Tabs.Screen
        name="updateKK"
        options={{
          title: 'Update KK',
          tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="file-pen" color={color} />,
        }}
      />
    </Tabs>
  );
}
