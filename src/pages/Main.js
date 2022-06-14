import {useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CONFIG from './../config.js'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}

            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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

const Main = () => {
    const [errorMsg, setErrorMsg] = useState('');
    let navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        try {
            const createdUrl = await axios.post(`${CONFIG.protocol}://${CONFIG.host}/api/url`, {
                url: data.get('url'),
                code: data.get('code'),
            })
            if(createdUrl.status === 201) {
                navigate('/success');
            }
        } catch (error) {
            console.log(error);
            setErrorMsg(error.response.data.error)
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="l">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/*<Box>*/}
                        <img src="/lg.png" alt="logo"/>
                    {/*</Box>*/}
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="url"
                                    label="URL"
                                    name="url"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="code"
                                    label="CODE"
                                    id="code"
                                />
                            </Grid>
                        </Grid>
                        {errorMsg && <Alert sx={{mt: 3}} severity="error">{errorMsg}</Alert>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Confirm
                        </Button>

                    </Box>
                    <img src="/info.png" alt="logo"/>

                </Box>

                <Copyright sx={{mt: 5}}/>
            </Container>
        </ThemeProvider>
    );
}

export default Main;
