import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react'

interface SignupProps {
  onSelectTab: (tab: string) => void;
}

const Signup = ({onSelectTab}:SignupProps) => {
 
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      mt: -1,
      border: "1px solid #F0F0F3",
      borderRadius: "15px",
      height: "35px",
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
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Sarabun, sans-serif",
          color: "#0056A2",
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Sign Up
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
          Name
        </Typography>
        <TextField
          sx={{ ...textFieldStyles}}
          fullWidth
          variant="outlined"
          margin="normal"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value.trim())}
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
        <Typography variant="body2" sx={{ color: " #0F3B7A" }}>
          Confirm Password
        </Typography>
        <TextField
          fullWidth
          sx={{
            ...textFieldStyles
          }}
          type={showPassword ? "text" : "password"}
          variant="outlined"
          margin="normal"
          value={confirmPassword}
          placeholder="Confirm your password"
          onChange={(e) => setConfirmPassword(e.target.value)}
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
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginY: "8px",
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
            Sign Up
          </Button>
          <Typography
            variant={"body2"}
            sx={{ marginTop: "10px", color: "#333333" }}
          >
            Already got an account? {" "}
            <Typography
            onClick={() => {onSelectTab("login")}}
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
              Sign in
            </Typography>
          </Typography>
        </Box>
      </form>
    </Box>
  );
}

export default Signup