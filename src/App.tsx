import { Header } from "./components/Header"
import { ColorGenerator } from "./components/ColorGenerator"
import { GlobalStyle } from "./styles/global"
import { ColorList } from "./components/ColorList";

export function App() {
  return (
    <>
      <Header />
      <ColorGenerator />
      <ColorList />

      <GlobalStyle />
    </>
  );
}
