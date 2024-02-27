import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function SiteNameHeader() {
    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#ffffff', boxShadow: '0px 3px 28px 0px #00000014' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <span className='primary-font yellow-font'>HACKER</span>
                    <span className='primary-font black-font'>NEWS</span>
                    <span className='primary-font yellow-font'>.</span>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default SiteNameHeader;
