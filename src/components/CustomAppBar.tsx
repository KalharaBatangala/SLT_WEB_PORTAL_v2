import { AppBar, Avatar, Box, Container, FormControl, IconButton, MenuItem, Select, SelectChangeEvent, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import userImage from "../../src/assets/Images/user-profile.png";
import { AccountDetails } from "../types/types";
import fetchAccountDetails from "../services/fetchAccountDetails";
import useStore from "../services/useAppStore";

const CustomAppBar = () => {
  const { fetchServiceDetails,setSelectedTelephone } = useStore();
  const [account, setAccount] = useState(""); // Selected account
  const [open, setOpen] = useState(false); // Dropdown open/close state
  const [accounts,setAccounts] = useState<AccountDetails[]>([])

  const handleChange = (event: SelectChangeEvent) => {
    setAccount(event.target.value);
    fetchServiceDetails(event.target.value);
    setSelectedTelephone(event.target.value);
    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const accountData = await fetchAccountDetails();
      if (accountData && accountData.length > 0) {
        setAccounts(accountData);
        setSelectedTelephone(accountData[0].telephoneno);
        setAccount(accountData[0].telephoneno);
        fetchServiceDetails(accountData[0].telephoneno)
      }
    };
    fetchData();
  }, []);

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
            <img src="src/assets/images/SLTMobitel_Logo.svg 2.png" alt="Logo" style={{ height: "8vh", minHeight: "50px" }} />
          </Box>

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "end", alignItems: "center" }}>
            <FormControl
              sx={{
                mr: 4,
                width: "14vw",
                minWidth: "200px",
                color: "#00256A",
                "&.MuiOutlinedInput-root": {
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
                renderValue={(selected) => (selected ? selected : "Select Account")}
                onChange={handleChange}
                displayEmpty
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                sx={{
                  color: "#00256A",
                  fontWeight: 600,
                  fontFamily: "Poppins",
                }}
              >
                {accounts.length > 0 ? (
                  accounts.map((acc, index) => (
                    <MenuItem key={index} value={acc.telephoneno}>
                      {acc.telephoneno} {/* Display the telephone number here */}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem value="">No Accounts Available</MenuItem>
                )}
              </Select>
            </FormControl>
            <IconButton sx={{ p: 0 }}>
              <Avatar sx={{ height: "50px", width: "auto" }} alt="User Avatar" src={userImage} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default CustomAppBar;
