import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Tooltip } from "@mui/material";
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/Card';
import CardActions from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup'
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { CreateAccount } from './controllers/Authentication';


function SignUpPage() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = React.useState(false);
    const [enteredEmail, setEnteredEmail] = React.useState("");
    const [enteredPassword, setEnteredPassword] = React.useState("");

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleCreateAccount = () => {
        // check email here
        // ceck password here
        console.log(`email: ${enteredEmail} \n password: ${enteredPassword}`)
        const result = CreateAccount(enteredEmail, enteredPassword);
        if (result === null) {
            alert(`result was: ${result} and succeeded`)
            navigate(-1);
        }
        else {
            // handle error message
            alert(`result was: ${result} and failed`)
        }
    };

    return (
        <>

            <Grid
                xs={4}
                alignSelf="flex-start"
                justifyContent="flex-end"
                sx={{ height: '5vh' }}
                fullWidth
            >
                <Button
                    startIcon={<ArrowBackIosIcon />}
                    variant="text"
                    sx={{ ml: "5%", mt: "2.5%" }}
                    onClick={() => { navigate(-1) }}
                >
                    Back
                </Button>
            </Grid>
            <Grid
                container
                spacing={0}
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: '95vh' }}
            >
                <Grid item xs={4} sx={{ minWidth: 250 }}>
                    <Card variant="outlined" fullWidth>
                        <CardContent container justifyContent="center" sx={{ borderRadius: 0, p: '5%', pt: '10%' }}>
                            <Typography item variant="h5" noWrap align="center">
                                CREATE AN ACCOUNT
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ borderRadius: 0, pb: '15%' }}>
                            <Grid direction="column" sx={{ px: '10%' }}>
                                <FormGroup>
                                    <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-username"
                                            aria-describedby="outlined-username-helper-text"
                                            label="Email"
                                            value={enteredEmail}
                                            onChange={(event) => {
                                                setEnteredEmail(event.target.value);
                                            }}
                                        />
                                    </FormControl>
                                    <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            label="Password"
                                            value={enteredPassword}
                                            onChange={(event) => {
                                                setEnteredPassword(event.target.value);
                                            }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        <Tooltip arrow title={`Make Password ${showPassword ? "Hidden" : "Visible"}`}>
                                                            {showPassword ? <VisibilityOff tooltip="Hide Password" /> : <Visibility />}
                                                        </Tooltip>
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </FormGroup>
                                <Grid container direction="column" sx={{ pl: '3%', py: '5%' }}>
                                    <FormControlLabel control={<Checkbox />} label="Keep me signed in"></FormControlLabel>
                                    <Link to="/reset-password">Forgot your password?</Link>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        sx={{ my: '5%' }}
                                        onClick={handleCreateAccount}
                                    >
                                        Create Account
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default SignUpPage;