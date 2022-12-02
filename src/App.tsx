import React from 'react';
import Login from "./components/login/Login";
import {ThemeProvider} from "@mui/material";
import themes from "./styles/themes";

const App = () => {
    return (
        <ThemeProvider theme={themes}>
                <Login/>
        </ThemeProvider>
    );
};

export default App;