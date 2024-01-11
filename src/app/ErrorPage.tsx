import Image from "next/image";
import "./ErrorStyling.css"
import { Button } from "@mui/material";
import Link from "next/link";

export default function ErrorPage () {
    //instead of actually writing the website I'm putting a confused travolta meme in here.
    return(
        <div className="errorpagemain">
            <img className="travoltagif" src="/images/confusedtravolta.gif" alt="Confused Travolta Meme"/>
            <h3>Uh oh. Something Went Wrong Here?</h3>
            <p>I literally wrote this page because I was procrastinating making actual pages &#128517;</p>
            <Link href="/"><Button className="errorbutton">Take Me Back</Button></Link>
        </div>
    )
}