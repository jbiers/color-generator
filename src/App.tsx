import { Header } from "./components/Header"
import { ColorGenerator } from "./components/ColorGenerator"
import { GlobalStyle } from "./styles/global"
import { ColorList } from "./components/ColorList";
import { useState } from "react";
import { Footer } from "./components/Footer";

export function App() {
  const [colors, setColors] = useState(JSON.parse(localStorage.getItem('colors') as string))

  return (
    <>
      <Header />
      <ColorGenerator colors={colors} setColors={setColors} />
      <ColorList colors={colors} setColors={setColors} />
      <Footer />

      <GlobalStyle />
    </>
  );
}
