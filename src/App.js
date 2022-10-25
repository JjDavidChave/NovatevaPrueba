import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography, Stack } from "@mui/material";
import Select from "./Select";
import Button from "@mui/material/Button";
import Atribute from "./Atibute";

function ValidationTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction="row" spacing={2}>
        <Typography variant="h3">Nueva Tabla</Typography>
        <Button variant="contained">Guardar</Button>
      </Stack>
      <div>
        <TextField
          error
          id="outlined-error"
          label="Nombre"
          defaultValue="Person"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Descripcion"
          defaultValue="Tabla usada para x y z"
        />
      </div>
      <div>
        <Typography variant="h3">Atributos</Typography>
      </div>

      <div>
        <Atribute />
      </div>

      <div>
        <Typography variant="h3">Relaciones</Typography>
      </div>

      <div>
        <Select />
      </div>
      <div>
        <Button variant="contained" disableElevation>
          Agregar +
        </Button>
      </div>
    </Box>
  );
}

export default ValidationTextFields;
