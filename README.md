# Agnostic Context Comunication

1. Web App con una carga elevada de trabajo (500 mil usuarios aprox).
2. Testeable sería lo adecuado
3. Queremos que los Contextos se comuniquen entre sí independientemente de las capas intermedias

   1. Contexto 1 Externo:

   ```tsx
   App = () => (
     <AppContextProvider>
       <Card />
     </AppContextProvider>
   );
   ```

   2. Capas intermedias

   ```tsx
   Card = () => (
     <div>
       <Button>Soy un Botón</Button>
     </div>
   );
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

4. Principalmente lo queremos para manejo de temas. Ser capaces de editar componentes directamente desde el tema a nivel profundo.
