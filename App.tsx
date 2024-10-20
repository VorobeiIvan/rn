import { ActivityIndicator } from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen/RegistrationScreen";
import useRobotoFonts from "./utils/useFonts";

export default function App() {
  const fontsLoaded = useRobotoFonts();

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <>
      <RegistrationScreen />
    </>
  );
}
