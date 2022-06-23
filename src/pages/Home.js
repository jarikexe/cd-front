import Container from "@mui/material/Container";
import {
    Link
} from "react-router-dom";

const Home = () => {

    return (
        <Container component="main" maxWidth="m" sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Link to='/check'>
                <img style={{maxWidth: '100%'}} src="/home1.jpg" alt="home img"/>
            </Link>
            <img style={{maxWidth: '100%'}} src="/home2.jpg" alt="secound home img"/>
        </Container>
    );
}

export default Home;
