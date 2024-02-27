import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Footer() {
    return (
        <AppBar position="sticky" sx={{ top: 'auto', bottom: 0, backgroundColor: '#FBC91B', boxShadow: '0px -3px 28px 0px #00000014', height: '99px' }}>
            <Toolbar sx={{ justifyContent: 'center', height: '99px' }}>
                <Typography variant="h6" component="div" sx={{ color: '#000000' }}>
                    <span className='primary-font black-font'>HACKERNEWS.</span>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
