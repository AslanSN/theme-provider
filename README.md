# Agnostic Context Comunication

1. Contextos que se comuniquen entre sí independientemente de las capas intermedias

   1. Contexto 1 Externo:

   ```tsx
   App = () => (
    <AppContextProvider>
      <Card />
    </AppContextProvider>
   )
   ```

   2. Capas intermedias

   ```tsx
   Card = () => (
    <div>
      <Button>Soy un Botón</Button>
    </div>
   )
   ```

   3. Contexto 2 Final Interno

   ```tsx
   Button = () => {
    const buttonContext = useContext(ButtonContext)
    return(
     <ButtonThemeProvider mergedWith={AppContext}> // Recepción del contexto Externo AppContext
       <Card />
     </ButtonContextProvider>
   )};
   ```
