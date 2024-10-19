import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../services/Auth";

interface LoginProps {
  onSelectTab: (tab: string) => void;
}

const Login = ({onSelectTab}:LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
    const result = await userLogin(event, email, password);
    // Navigate if the login was successful
    if (result.success) {
      navigate("/home");
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      mt: -1,
      border: "1px solid #F0F0F3",
      borderRadius: "15px",
      height: "40px",
      transition: "all 0.3s ease",
      "&:hover": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
        borderColor: "#0F3B7A",
      },
      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
        borderColor: "#0F3B7A",
      },
      "& .MuiOutlinedInput-input::placeholder": {
        fontSize: "14px",
        color: "#999999",
      },
    },
  };
  return (
    <Box
      sx={{paddingTop:"30px", display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Poppins, sans-serif",
          color: "#0056A2",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Typography variant="body2" sx={{ color: " #0F3B7A" }}>
          Email
        </Typography>
        <TextField
          sx={{ ...textFieldStyles}}
          fullWidth
          variant="outlined"
          margin="normal"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value.trim())}
          required
        />
        <Typography variant="body2" sx={{ color: " #0F3B7A" }}>
          Password
        </Typography>
        <TextField
          fullWidth
          sx={{
            ...textFieldStyles
          }}
          type={showPassword ? "text" : "password"}
          variant="outlined"
          margin="normal"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={togglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "end", marginTop: "" }}>
          <Typography variant="body2" sx={{ color: "#1B3360" }}>
            Forgot Password?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginY: "24px",
          }}
        >
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              borderRadius: 15,
              height: "40px",
              textTransform: "capitalize",
            }}
          >
            Log In
          </Button>
          <Typography
            variant={"body2"}
            sx={{ marginTop: "24px", color: "#333333" }}
          >
            Don't have an account?{" "}
            <Typography
              onClick={() => onSelectTab("signup")}
              component="span"
              sx={{
                color: "#0056A2",
                textDecoration: "underline",
                transition: "0.3s",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Sign up
            </Typography>
          </Typography>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
