import React, {useState} from 'react'
import './Search.css'
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';
import { Grid, TextField, Button } from "@mui/material";
// import IconButton from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fc8019',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const InputAdornment = styled('div')`
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const StyledInputElement = styled('input')(
  ({ theme }) => `
  height: 35px;
  width: 460px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 2.5;
  padding: 12px;
  border-radius: 0px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};


  &:focus {
    border-color: #fc8019;
    outline: none;
  }
`,
);

const Search = () => {
    return <div className='search_area'>
        <Grid container>
        <Grid item>
            <InputUnstyled 
            components={{ Input: StyledInputElement }}
            placeholder="Enter your delivery location"/>
        </Grid>

        <Grid item alignItems="stretch" style={{ display: "flex" }}>
            <ThemeProvider theme={theme}>
                <Button style={{width: '140px', borderRadius: '0px', fontWeight: '600', fontSize: '1.05rem', color: "#fff"}} 
                color="primary" variant="contained" disableElevation>FIND FOOD
                </Button>
            </ThemeProvider>
        </Grid>
      </Grid>

    </div>
};

export default Search;