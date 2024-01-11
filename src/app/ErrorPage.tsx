'use client'
import Image from "next/image";
import "./ErrorStyling.css"
import { Button } from "@mui/material";
import Link from "next/link";
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      primary: {
        main: '#E3D026',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#242105',
      },
    },
  });

export default function ErrorPage () {
    //instead of actually writing the website I'm putting a confused travolta meme in here.
    return(
        <div className="errorpagemain">
            <ThemeProvider theme={theme}>
                <Image className="travoltagif" width="426" height="213" src="/phansite/images/confusedtravolta.gif" alt="Confused Travolta Meme"/>
                <h3>Uh oh. Something Went Wrong Here?</h3>
                <p>I literally wrote this page because I was procrastinating making actual pages &#128517;</p>
                <Link href="/"><Button color="primary" size='large' sx={{textTransform: 'none'}} className="Button">Take Me Back</Button></Link>
            </ThemeProvider>
        </div>
    )
}