import Link from "next/link"
import './navBar.css'

export default function NavBar(){
    return(
        <div>
            <div className="navBar">
                <div className="navBarLogo">
                    <p>austin.phan</p>
                </div>
                <div className="navBarLinks">
                    <Link className="navBarLink" href="/projectpages">About Me</Link>
                    <Link className="navBarLink" href="/projectpages">Projects</Link>
                    <Link className="navBarLink" href="/projectpages">Experience</Link>
                    <Link className="navBarLink" href="/projectpages">Contact</Link>
                </div>
            </div>
            <div className="navBarSpacer"/>
        </div>

        )
    }