import React, { useEffect } from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from "./components/TopBar";
import { ProSidebarProvider } from "react-pro-sidebar";
import SideBar from "./components/SideBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import BonusPage from "./pages/BonusPage";

const App = () => {
    const [theme, setMode] = useMode()
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/bonus');
    }, [navigate])


    return (
        <ColorModeContext.Provider value={setMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <ProSidebarProvider>
                        <SideBar />
                    </ProSidebarProvider>
                    <main className={'content'}>
                        <TopBar />
                        <Routes>
                            <Route path={'bonus'} element={<BonusPage />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}


export default App;
