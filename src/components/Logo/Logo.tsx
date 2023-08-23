import Typography from '@mui/material/Typography'
import logo from 'assets/logo.png'

type Props = {}

const Logo = (props: Props) => {
    return (
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img
                src={logo}
                alt="Fake-shop logo"
                style={{ width: 200, height: 200 }}
            />
        </Typography>
    )
}

export default Logo
