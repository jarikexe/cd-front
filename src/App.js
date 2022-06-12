import {useEffect} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import {createTheme, ThemeProvider} from '@mui/material/styles';
import Main from './pages/Main'
import Success from './pages/Success'
import Login from './pages/Login'
import Admin from './pages/Admin'


const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#01C73C',
        },
        secondary: {
            main: '#f50057',
        },
    }
});

export default function App() {

    useEffect(() => {
        document.title = 'Code check app';
    }, [])


    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/success" element={<Success/>} />
                    <Route path="/admin" element={<Login/>} />
                    <Route path="/admin/dashboard" element={<Admin/>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}
