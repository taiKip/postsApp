import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
  createTheme,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { AddCircleOutlineOutlined, Home } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
const menuItems = [
  {
    text: "Home",
    icon: <Home color="secondary"/>,
    path: "/",
  },
  {
    text: "Create Post",
    icon: <AddCircleOutlineOutlined color="secondary"/>,
    path: "/post",
  },
];
const active ={
    background:"#f4f4f4"
}
const Header = () => {
  const theme = createTheme();
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AppBar elevation={0} component="nav">
      <Toolbar sx={{ width: `calc(100vw -)` }}>
        <Typography
          sx={{ flexGrow: 1, fontWeight: theme.typography.fontWeightBold }}
          variant="h5"
        >
          Posts App
        </Typography>
        <List sx={{ display: "flex", flexDirection: "row" }}>
          {menuItems.map((item) => (
            <ListItemButton
              sx={location.pathname === item.path ?active :null}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
