import { createTheme, Toolbar } from "@mui/material"
import { Outlet } from "react-router-dom"
import Header from "./Header"

const theme = createTheme();
const pageStyle = {
  background:'#f9f9f9',
  width:"100%",
  padding:theme.spacing(3),
  fontFamily:theme.typography.fontFamily,
  
}


const Layout = () => {

  return (
    <>
<Header/>
    <main style={pageStyle}>
        <Toolbar/>
        <Outlet/>
    </main>
    </>
  )
}

export default Layout