import Box from '@mui/material/Box';


const Page1 = () => {

    return (
        <Box sx={{maxHeight: "427px", height:'100vh', overflow: "hidden", position: "relative"}}>
            <iframe scrolling="no" style={{marginTop: "20px", transform: "scale(1.1)", position: "absolute"}} width="100%" height="100%" src="https://mamentor.co.kr/keyword#keywords" title='test'></iframe>
        </Box>
    );
}

export default Page1;
