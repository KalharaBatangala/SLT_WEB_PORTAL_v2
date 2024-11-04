import { AppBar, Avatar, Box, Container, FormControl, IconButton, MenuItem, Select, SelectChangeEvent, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import iconDownArrow from "../../src/assets/Images/icondownarrow.png";
import userImage from "../../src/assets/Images/profile.jpg";
import fetchAccountDetails from "../services/fetchAccountDetails";
import useStore from "../services/useAppStore";
import { AccountDetails } from "../types/types";


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

  const { fetchServiceDetails,setSelectedTelephone } = useStore();
  const [account, setAccount] = useState(""); // Selected account
  const [open, setOpen] = useState(false); // Dropdown open/close state
  const [accounts,setAccounts] = useState<AccountDetails[]>([])

  const handleToggleDropdown = () => {
    setOpen((prev) => !prev);
  };

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
                mr: 3,
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
                  "& .Mui-focused fieldset": {
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
            <IconButton sx={{ p: 0,mb:0.5 }}>
              <Avatar sx={{ height: "45px", width: "auto" }} alt="User Avatar" src={userImage} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default CustomAppBar;
