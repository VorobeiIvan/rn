import { ActivityIndicator } from "react-native";

import useRobotoFonts from "./hooks/useFonts";
import RegistrationScreen from "./screens/RegistrationScreen";

export default function App() {
  const fontsLoaded = useRobotoFonts();

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return <RegistrationScreen />;
}
