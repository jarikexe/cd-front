import {useEffect, useState} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import {createTheme, ThemeProvider} from '@mui/material/styles';
import Success from './pages/Success'
import Login from './pages/Login'
import Admin from './pages/Admin'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Main from "./pages/Main";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";


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

const pages = [{title: '홈', path: '/',outside: false}, {title: 'menu 1', path: '/page1',outside: false}, {title: 'menu2', path: '/page2',outside: false}];

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
                            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'flex'}}}>
                                {pages.map((page) => (
                                     page.outside ?
                                            <a
                                                href={page.path}
                                                key={page.title}
                                            >
                                                <Button
                                                    onClick={handleCloseNavMenu}
                                                    sx={{my: 2, color: 'white', display: 'block'}}
                                                >
                                                    {page.title}
                                                </Button>
                                            </a>
                                            :
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
                    <Route path="/" element={<Main/>}/>
                    <Route path="/success" element={<Success/>}/>
                    <Route path="/page1" element={<Page1/>}/>
                    <Route path="/page2" element={<Page2/>}/>
                    <Route path="/admin" element={<Login/>}/>
                    <Route path="/admin/dashboard" element={<Admin/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}
