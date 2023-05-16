import "./App.css";
import { ThemeProvider } from "./ThemeProvider/ThemeProvider";
import { Button } from "./Components/Button/Button";
import { Card } from "./Components/Card/Card";
function App() {
  return (
    <>
      <ThemeProvider>
        <Card />
        <Button>Button</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
