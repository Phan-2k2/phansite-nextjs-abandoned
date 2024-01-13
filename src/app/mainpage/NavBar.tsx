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
                    <Link className="navBarLink" href="/projectpages">about me</Link>
                    <Link className="navBarLink" href="/projectpages">projects</Link>
                    <Link className="navBarLink" href="/projectpages">experience</Link>
                    <Link className="navBarLink" href="/projectpages">contact</Link>
                </div>
            </div>
            <div className="navBarSpacer"/>
        </div>

        )
    }