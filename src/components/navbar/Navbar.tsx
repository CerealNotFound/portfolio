import React from "react";
import "./Navbar.scss";
import { changeTheme, selectedTheme } from "./ThemeContext";

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false)

    const clickHandler = (themeValue: string) => {
        changeTheme(themeValue)

        const planet = document.querySelector("#earth-landing-page")

        // removing pre-existing value
        planet?.removeAttribute("class")

        // adding a new value
        planet?.setAttribute("class", themeValue)

        const space = document.querySelector(".landing-page-section")

        //remove pre-existing value
        space?.removeAttribute("id")

        // adding a new value
        space?.setAttribute("id", themeValue)
    }

    return(
        <nav>
            <div id="nav-name">Adarsh Pandey</div>
            <div id="nav-links">
                <a href="#">Who am I ?</a>
                <a href="#">Projects</a>
                <a href="#">Get in touch</a>
            </div>
            <div id="themes-icon" onClick={() => {setIsOpen(!isOpen)}}></div>
            <div id={isOpen ? "overlay" : "null"} onClick={() => {setIsOpen(!isOpen)}}></div>
            <div className={isOpen ? "nav-settings" : "nav-settings hidden"}>
                <div>Settings</div>
                <div style={{color: "#00000090"}}>Theme</div>
                <ul>
                    <div>
                    <input type="radio" name="theme" id="radio-earth" defaultChecked/>
                        <label htmlFor="radio-earth">
                            <li id="earth" onClick={() => {clickHandler("earth")}}></li>
                        </label>
                        <p>Earth</p>
                    </div>
                    <div>
                    <input type="radio" name="theme" id="radio-dark" />
                        <label htmlFor="radio-dark">
                            <li id="dark" onClick={() => {clickHandler("dark")}}></li>
                        </label>
                        <p>Dark</p>
                    </div>
                    <div>
                    <input type="radio" name="theme" id="radio-light" />
                        <label htmlFor="radio-light">
                            <li id="light" onClick={() => {clickHandler("light")}}></li>
                        </label>
                        <p>Light</p>
                    </div>
                    <div>
                    <input type="radio" name="theme" id="radio-banana" />
                        <label htmlFor="radio-banana">
                            <li id="banana" onClick={() => {clickHandler("banana")}}></li>
                        </label>
                        <p>Banana</p>
                    </div>
                    <div>
                    <input type="radio" name="theme" id="radio-red" />
                        <label htmlFor="radio-red">
                            <li id="red" onClick={() => {clickHandler("red")}}></li>
                        </label>
                        <p>Red</p>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;