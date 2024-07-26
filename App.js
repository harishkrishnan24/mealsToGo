import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Restaurants from "./src/features/restaurants/screens/Restaurants";

export default function App() {
  return (
    <>
      <Restaurants />
      <ExpoStatusBar style="auto" />
    </>
  );
}
