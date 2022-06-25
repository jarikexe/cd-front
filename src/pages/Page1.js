import Box from '@mui/material/Box';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import Container from "@mui/material/Container";


const Page1 = () => {

    return (
        <Box sx={{maxHeight: "450px", height: '100vh', overflow: "hidden", position: "relative"}}>
            {window.innerWidth > 1200 ?
                <iframe scrolling="no" style={{marginTop: "43px", transform: "scale(1.2)", position: "absolute"}}
                        width="100%" height="100%" src="https://mamentor.co.kr/keyword#keywords" title='test'></iframe>
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
            }
        </Box>
    );
}

export default Page1;
