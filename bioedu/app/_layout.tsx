import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{headerTitle: "",headerTransparent: true, headerShown: false }} />
        <Stack.Screen name="cadastrarBanco" options={{headerTitle: "",headerTransparent: true, headerShown: false }} />
        <Stack.Screen name="cadastrarfoto" options={{headerTitle: "",headerTransparent: true, headerShown: false }} />
        <Stack.Screen name="historicoData" options={{headerTitle: "",headerTransparent: true, headerShown: false }} />
        <Stack.Screen name="alunos" options={{headerTitle: "",headerTransparent: true, headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerTitle: "",headerTransparent: true, headerShown: false}} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
