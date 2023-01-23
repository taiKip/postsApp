import { ThemeProvider } from "@emotion/react";
import { pink, purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import AddNewPost from "./features/posts/AddNewPost";
import PostList from "./features/posts/PostList";

const theme = createTheme({
  palette:{
    primary:{
      main:'#fefefe'
    },
    secondary:purple
  },
  typography:{
    fontFamily: 'Quicksand',
    fontWeightLight:400,
    fontWeightRegular:500,
    fontWeightMedium:600,
    fontWeightBold:700
  },
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          borderRadius:8,
        }
      }
    }
  }

})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostList />} />
          <Route path="post">
            <Route index element={<AddNewPost />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
