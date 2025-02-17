import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Tooltip } from "@mui/material";
// import Box from '@mui/material/Box';
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
//import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { CreateAccount } from './controllers/Authentication';


function SignUpPage() {

    const navigate = useNavigate();

    // backend values
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    //user "facing" values
    const [showPassword, setShowPassword] = useState(false);
    const [emailHelperText, setEmailHelperText] = useState(" ");
    const [pwdHelperText, setPwdHelperText] = useState(" ");
    const [conPwdHelperText, setConPwdHelperText] = useState(" ");
    const [emailHelperStatus, setEmailHelperStatus] = useState("basic");
    const [pwdHelperStatus, setPwdHelperStatus] = useState("basic");
    const [conPwdHelperStatus, setConPwdHelperStatus] = useState("basic");

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleCreateAccount = () => {
        // check email here

        // ceck password here
        if (!(confirmPassword === enteredPassword)) {
            setPwdHelperStatus("error");
            setConPwdHelperStatus("error");
            let errorMessage = "Passwords do not match";
            setPwdHelperText(errorMessage);
            setConPwdHelperText(errorMessage);
            return;
        }

        console.log(`email: ${enteredEmail} \n password: ${enteredPassword}`)
        const result = CreateAccount(enteredEmail, enteredPassword);
        if (result === "") {
            alert(`result was: ${result} and succeeded`)
            navigate(-1);
        }
        else {
            // handle error message
            alert(`result was: ${result} and failed`)
        }
    };

    return (
        <Grid
            container="true"
            spacing={0}
            alignItems="center"
            justifycontent="center"
            sx={{ minHeight: '100vh' }}
        >
            <Grid
                xs={4}
                alignSelf="flex-start"
                justifycontent="flex-end"
                sx={{ height: '5vh' }}
                fullwidth="true"
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
            <Grid item="true" xs={4} sx={{ minWidth: 250, mv: "5%" }}>
                <Card variant="outlined" fullwidth="true">
                    <CardContent container="true" justifycontent="center" sx={{ borderRadius: 0, p: '5%', pt: '10%' }}>
                        <Typography item="true" variant="h5" noWrap align="center">
                            CREATE AN ACCOUNT
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ borderRadius: 0, pb: '15%' }}>
                        <Grid direction="column" sx={{ px: '10%' }}>
                            <FormGroup>
                                <FormControl fullwidth="true" sx={{ m: 1 }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-username"
                                        aria-describedby="outlined-username-helper-text"
                                        label="Email"
                                        value={enteredEmail}
                                        onChange={(event) => {
                                            setEnteredEmail(event.target.value);
                                            setEmailHelperStatus("basic");
                                            setEmailHelperText(" ");
                                        }}
                                    />
                                    <Typography color={emailHelperStatus} sx={{ ml: "4%" }}>{emailHelperText}</Typography>
                                </FormControl>
                                <FormControl fullwidth="true" sx={{ m: 1 }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        label="Password"
                                        value={enteredPassword}
                                        onChange={(event) => {
                                            setEnteredPassword(event.target.value);
                                            setConPwdHelperStatus("basic");
                                            setPwdHelperStatus("basic");
                                            setPwdHelperText(" ");
                                            setConPwdHelperText(" ");
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
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </Tooltip>
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                    <Typography color={pwdHelperStatus} sx={{ ml: "4%" }}>{pwdHelperText}</Typography>
                                </FormControl>
                                <FormControl fullwidth="true" sx={{ m: 1 }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        label="Confirm password"
                                        value={confirmPassword}
                                        onChange={(event) => {
                                            setConfirmPassword(event.target.value);
                                            setConPwdHelperStatus("basic");
                                            setPwdHelperStatus("basic");
                                            setPwdHelperText(" ");
                                            setConPwdHelperText(" ");
                                        }}
                                    />
                                    <Typography color={conPwdHelperStatus} sx={{ ml: "4%" }}>{conPwdHelperText}</Typography>
                                </FormControl>
                            </FormGroup>
                            <Grid container="true" direction="column" sx={{ pl: '3%', py: '5%' }}>
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
    );
}

export default SignUpPage;