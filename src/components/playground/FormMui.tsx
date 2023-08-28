import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material"

const FormMui = () => {
  return (
    <Container maxWidth="sm">
      <Typography>Nombre</Typography>
      <TextField
        id="outlined-basic"
        label="Ingresa tu nombre"
        variant="outlined"
      />
      <Typography>Contraseña</Typography>
      <TextField
        id="outlined-basic"
        label="Ingresa tu contraseña"
        variant="outlined"
      />

      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Recordar mi contraseña"
        />
      </FormGroup>
      <Button variant="contained">Iniciar</Button>
    </Container>
  )
}
export default FormMui
