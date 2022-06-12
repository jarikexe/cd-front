import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import axios from "axios";
import {useEffect, useState} from "react";
import CONFIG from '../config'
import {DataGrid} from '@mui/x-data-grid';
import {useNavigate} from "react-router-dom";

const columnsUrls = [
    {field: 'url', headerName: 'URL', width: 200},
    {field: 'code', headerName: 'CODE', width: 500},
    {field: 'ip', headerName: 'IP', width: 200},
    {field: 'date', headerName: 'DATE', width: 200},
]

const columnsCodes = [
    {field: 'code', headerName: 'CODE', width: 500},
    {field: 'valid', valueGetter: ({value}) => value ? 'Valid' : 'Used', headerName: 'STATUS', width: 500},
    {field: 'date', headerName: 'DATE', width: 200},
]

const Admin = () => {
    const [urls, setUrls] = useState([]);
    const [codes, setCodes] = useState([]);
    const [amountOfCodes, setAmountOfCodes] = useState(0)
    const [open, setOpen] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        axios.post(`${CONFIG.protocol}://${CONFIG.host}/api/login`, {jwt: localStorage.getItem('jwt')}).then(response => {
            console.log(response.status);
            if (response.status !== 200) navigate('/');
        }).catch(error => {
            console.log(error);
            navigate('/')
        })

        axios.get(`${CONFIG.protocol}://${CONFIG.host}/api/url`).then(response => {
            setUrls(response.data);
        }).catch(error => {

        })

        axios.get(`${CONFIG.protocol}://${CONFIG.host}/api/code`).then(response => {
            setCodes(response.data);
        }).catch(error => {

        })
    }, []);

    const handleOpenToster = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const addMoreCodes = () => {
        axios.post(`${CONFIG.protocol}://${CONFIG.host}/api/code`, {amount: amountOfCodes}).then(response => {
            axios.get(`${CONFIG.protocol}://${CONFIG.host}/api/code`).then(response => {
                setCodes(response.data);
                handleOpenToster();
            }).catch(error => {

            })
        });
    }

    return (
        <Container component="main" maxWidth="m" sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 8
        }}>
            <AppBar position="fixed">
                <Toolbar>Admin Panel</Toolbar>
            </AppBar>
            {
                urls?.length > 0 &&
                <Box style={{height: 600, width: '100%'}} sx={{
                    marginTop: 4,
                }}>
                    URLs
                    <DataGrid
                        rows={urls || []}
                        columns={columnsUrls}
                        pageSize={20}
                        getRowId={(row) => row._id}
                        rowsPerPageOptions={[20]}
                        initialState={{
                            sorting: {
                                sortModel: [{field: 'date', sort: 'desc'}],
                            },
                        }}
                    />
                </Box>
            }

            {
                codes?.length > 0 &&
                <Box style={{height: 600, width: '100%'}} sx={{
                    marginTop: 8,
                }}>
                    Codes
                    <DataGrid
                        rows={codes || []}
                        columns={columnsCodes}
                        pageSize={20}
                        getRowId={(row) => row._id}
                        rowsPerPageOptions={[20]}
                        initialState={{
                            sorting: {
                                sortModel: [{field: 'date', sort: 'desc'}],
                            },
                        }}
                    />
                </Box>
            }

            <Box sx={{
                marginTop: 8,
                width: '100%'
            }}>
                <h3>Generate more codes</h3>
                <Box sx={{
                    display: 'flex',
                    verticalAlign: 'center',

                }}>
                    <TextField id="outlined-basic" label="Amount of codes"
                               onChange={(e) => setAmountOfCodes(e.target.value)} type='number' variant="outlined"/>
                    <Button sx={{ml: 2}} variant="contained" size="large"
                            onClick={() => addMoreCodes()}>Generate</Button>
                </Box>

            </Box>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}
                      anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                    New codes was created
                </Alert>
            </Snackbar>

        </Container>
    );
}

export default Admin;
