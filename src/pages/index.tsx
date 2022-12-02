import * as React from "react";
import type { HeadFC } from "gatsby";
import Navbar from "../components/navbar/Navbar";
import LandingPage from "../components/landingPage/LandingPage";
import Introduction from "../components/introduction/Introduction";
import { selectedTheme } from "../components/navbar/ThemeContext";

const IndexPage = () => {
  return (
    <main>
      <selectedTheme.Provider value={{
        theme: "earth"
      }}>
        <Navbar/>
        <LandingPage/>
        <Introduction/>
      </selectedTheme.Provider>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Welcome | Adarsh Pandey - Developer | Student</title>
