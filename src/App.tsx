import { Header } from "./components/Header"
import { ColorGenerator } from "./components/ColorGenerator"
import { GlobalStyle } from "./styles/global"
import { ColorList } from "./components/ColorList";

export function App() {
  const colors = localStorage.getItem('colors') === null ? null : JSON.parse(localStorage.getItem('colors') as string)

  return (
    <>
      <Header />
      <ColorGenerator />
      <ColorList colors={colors} />

      <GlobalStyle />
    </>
  );
}
