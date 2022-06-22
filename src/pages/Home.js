import Container from "@mui/material/Container";
import {
    Link
} from "react-router-dom";

const Home = () => {

    return (
        <Container component="main" maxWidth="xs" sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Link to='/check'>
                <img src="/home1.jpg" alt="home img"/>
            </Link>
            <img src="/home2.jpg" alt="secound home img"/>
        </Container>
    );
}

export default Home;
