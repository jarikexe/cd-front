import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

const Success = () => {
    let navigate = useNavigate();

    return (
        <Container component="main" maxWidth="xs" sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <CheckCircleOutlineIcon color="primary" sx={{ fontSize: 100 }} />
            <div color="primary" >Activated</div>

            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}

                onClick={() => navigate('/')}
            >
                Do another one
            </Button>
        </Container>
    );
}

export default Success;
