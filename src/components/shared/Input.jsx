import { TextField } from "@mui/material";

const Input = (prpos) => {
  return (
    <TextField
      margin="normal"
      InputLabelProps={{ style: { color: "white" } }}
      name={prpos.name}
      label={prpos.label}
      type={prpos.type}
      InputProps={{
        style: {
          width: "400px",
          borderRadius: 10,
          fontSize: 20,
          color: "white",
        },
      }}
    />
  );
};

export default Input;
