import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { FavoritesProvider } from './src/context/FavoritesContext';
import { ProfileProvider } from './src/context/ProfileContext';
import { ReadinessProvider } from './src/context/ReadinessContext';
import { colors } from './src/theme';

const navTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: colors.background, primary: colors.primary },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <FavoritesProvider>
        <ProfileProvider>
          <ReadinessProvider>
            <NavigationContainer theme={navTheme}>
              <StatusBar style="light" />
              <AppNavigator />
            </NavigationContainer>
          </ReadinessProvider>
        </ProfileProvider>
      </FavoritesProvider>
    </SafeAreaProvider>
  );
}
