import { createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    primary: {
      light: '#babca2',
      main: '#789c8a',
      dark: '588c7e'
    },
    secondary: {
      light: '#f6c193',
      main: '#eda376',
      dark: '#e99469'
    },
    error: { main: '#bc5952' },
    warning: { main: '#e99469' },
    info: { main: '#ecd189' },
    success: { main: '#acbc8a' }
  }
})

export default theme