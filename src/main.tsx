import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme.ts'
import { PhaseProvider } from './libs/context/usePhase.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PhaseProvider>
        <App />
      </PhaseProvider>
    </ThemeProvider>
  </React.StrictMode>
);
