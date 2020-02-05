import React, { Component } from "react"
import Navbar from "../Navbar"
import HomeSection from "../HomeSection"
import IntroSection from "../IntroSection"
import "./style.scss"
import { ENG, CH } from "../constants"

class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // language: ENG
            language: CH
        }
    }

    render() {
        return (
            <div>
                <Navbar language={this.state.language} />
                <div className="container">
                    <section id="home">
                        <HomeSection language={this.state.language} />
                    </section>
                    {/* <div className="content"> */}
                    <section id="intro">
                        <IntroSection language={this.state.language} />
                    </section>
                    <section id="education"></section>
                    <section id="experience"></section>
                    <section id="project"></section>
                    <section id="contact" />
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default MainPage
