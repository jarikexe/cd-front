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
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
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

const pages = [{title: '홈', path: '/',outside: false}, {title: '범인 검색하기', path: '/check',outside: false}, {title: '사이트 조회하기', path: '/scam',outside: false}, {title: '코드 발급받기', path: 'https://open.kakao.com/o/sn2R5ome', outside: true}];

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
