import Box from '@mui/material/Box';
import {height} from "@mui/system";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import Container from "@mui/material/Container";


const Page2 = () => {

    return (
        window.innerWidth > 1200 ?

            <Box sx={{height: "1140px", margin: "0 auto", overflow: "hidden", width: "1200px"}}>
                <iframe scrolling='no'
                        style={{transform: 'scale(1.14)', marginTop: "-350px", marginRight: "-100px"}}
                        width="100%" height="100%" src="https://mamentor.co.kr/shopping_ranking#container"
                        title='test'></iframe>

            </Box>
            :

            <Container component="main" maxWidth="xs" sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <ReportGmailerrorredIcon sx={{fontSize: 100, color: 'red'}}/>
                <div color="primary">PC버전에서만 가능합니다!</div>
            </Container>

    );
}

export default Page2;
