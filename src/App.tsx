import "./App.css";
import { Button } from "@aslanstaub/demo-app.button";
import { Card } from "@aslanstaub/demo-app.card";
import { ThemeProvider } from "./ThemeProvider/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <>
          <Button>BUTTON DE BIT</Button>
          <Card />
          <button style={{background: "--primary-color"}}>Cualquiera</button>
        </>
      </ThemeProvider>
    </>
  );
}

export default App;
