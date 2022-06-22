import {useEffect, useState} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import {createTheme, ThemeProvider} from '@mui/material/styles';
import Home from './pages/Home'
import Success from './pages/Success'
import Login from './pages/Login'
import Admin from './pages/Admin'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb'
import Main from "./pages/Main";
import Scam from "./pages/Scam";


const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#000',
        },
        secondary: {
            main: '#c2c2c2',
        },
    }
});

const pages = [{title: 'Home', path: '/'}, {title: 'Menu1', path: '/check'}, {title: 'Menu2', path: '/scam'}];

export default function App() {

    useEffect(() => {
        document.title = 'Code check app';
    }, [])


    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                sx={{
                                    mr: 2,
                                    display: {xs: 'none', md: 'flex'},
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                LOGO
                            </Typography>

                            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                                {pages.map((page) => (
                                    <Link
                                        to={page.path}
                                        key={page.title}
                                    >
                                        <Button
                                            onClick={handleCloseNavMenu}
                                            sx={{my: 2, color: 'white', display: 'block'}}
                                        >
                                            {page.title}
                                        </Button>
                                    </Link>
                                ))}
                            </Box>

                        </Toolbar>
                    </Container>
                </AppBar>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/success" element={<Success/>}/>
                    <Route path="/check" element={<Main/>}/>
                    <Route path="/scam" element={<Scam/>}/>
                    <Route path="/admin" element={<Login/>}/>
                    <Route path="/admin/dashboard" element={<Admin/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}
