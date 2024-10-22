import {
  AppBar,
  Container,
  Toolbar,
  Box,
  IconButton,
  Avatar,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import iconDownArrow from "../../src/assets/Images/icondownarrow.png";
import userImage from "../../src/assets/Images/user-profile.png";
import React, { useState } from "react";

const CustomAppBar = () => {
  const CustomSelectIcon = ({ open }: { open: boolean }) => (
    <Box sx={{ mr: 1, mt: 1, cursor: "pointer", transition: "transform 0.3s" }}>
      <img
        onClick={handleToggleDropdown}
        src={iconDownArrow}
        alt="down arrow"
        style={{
          width: "1em",
          height: "1em",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
        }}
      />
    </Box>
  );

  const [account, setAccount] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAccount(event.target.value);
    setOpen(false);
  };

  const handleToggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        padding: 0.5,
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <img
              src="src/assets/images/SLTMobitel_Logo.svg 2.png"
              alt="Logo"
              style={{ height: "8vh", minHeight: "50px" }}
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <FormControl
              sx={{
                mr: 4,
                width: "14vw",
                minWidth: "200px",
                color: "#00256A",
                "& .MuiOutlinedInput-root": {
                  height: "5vh",
                  minHeight: "30px",
                  borderRadius: "8px",
                  paddingBottom: 0.75,
                  "& fieldset": {
                    border: "3px solid #00256A",
                    borderColor: "#00256A",
                  },
                  "&:hover fieldset": {
                    borderColor: "#00256A",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#00256A",
                    borderWidth: 3,
                  },
                  "& legend": {
                    display: "none",
                  },
                },
              }}
            >
              <Select
                labelId="select-account-label"
                id="select-account"
                value={account}
                renderValue={(selected) => {
                  return selected ? selected : "Select Account";
                }}
                IconComponent={() => <CustomSelectIcon open={open} />}
                onChange={handleChange}
                displayEmpty
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                sx={{
                  color: "#00256A",
                  fontWeight: 600,
                  fontFamily: "Poppins",
                  "& .MuiSelect-icon": {
                    color: "#00256A",
                  },
                }}
              >
                <MenuItem value="account1">Account 1</MenuItem>
                <MenuItem value="account2">Account 2</MenuItem>
                <MenuItem value="account3">Account 3</MenuItem>
              </Select>
            </FormControl>
            <IconButton sx={{ p: 0 }}>
              <Avatar sx={{height:"50px", width:"auto"}} alt="User Avatar" src={userImage} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default CustomAppBar;
