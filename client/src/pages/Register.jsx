import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { startRegister } from "../actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      startRegister({
        email: data.get("email"),
        password: data.get("password"),
        name: data.get("name"),
        username: data.get("username"),
      })
    );
    navigate('/')
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "60%",
        margin: "0px auto",
      }}
    >
      <Avatar
        sx={{ marginTop: 10, marginBottom: 5, bgcolor: "secondary.main" }}
      >
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Registro
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="name"
              required
              fullWidth
              id="name"
              label="Nombre"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="username"
              label="Nombre de Usuario"
              name="username"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Iniciar Sesion
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item >
            <Link to='/login' style={{fontFamily: 'Roboto'}}>
              Ya estas registrado? Inicia Sesion aqui!
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
