import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "react-native";

import theme from "./src/theme";
import { Groups } from "@/screens/Groups";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor="transparent"
      />
      <Groups />
    </ThemeProvider>
  );
}
