import * as React from "react";
import "./Navbar.scss";
import { changeTheme, selectedTheme } from "./ThemeContext";

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

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
                    <input type="radio" name="theme" id="radio-earth" defaultChecked/>
                    <label htmlFor="radio-earth">
                        <li id="earth" onClick={() => {
                            changeTheme("earth")
                        }}></li>
                    </label>
                    <input type="radio" name="theme" id="radio-dark" />
                    <label htmlFor="radio-dark">
                        <li id="dark" onClick={() => {
                            changeTheme("dark")
                        }}></li>
                    </label>
                    <input type="radio" name="theme" id="radio-light" />
                    <label htmlFor="radio-light">
                        <li id="light" onClick={() => {
                            changeTheme("light")
                        }}></li>
                    </label>
                    <input type="radio" name="theme" id="radio-banana" />
                    <label htmlFor="radio-banana">
                        <li id="banana" onClick={() => {
                            changeTheme("banana")
                        }}></li>
                    </label>
                    <input type="radio" name="theme" id="radio-red" />
                    <label htmlFor="radio-red">
                        <li id="red" onClick={() => {
                            changeTheme("red")
                        }}></li>
                    </label>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;