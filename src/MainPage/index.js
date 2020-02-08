import React, { Component } from "react"
import Navbar from "../Navbar"
import HomeSection from "../HomeSection"
import IntroSection from "../IntroSection"
import EducationSection from "../EducationSection"
import ExperienceSection from "../ExperienceSection"
import ContactSection from "../ContactSection"
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
                    <section id="intro">
                        <IntroSection language={this.state.language} />
                    </section>
                    <section id="education">
                        <EducationSection language={this.state.language} />
                    </section>
                    <section id="experience">
                        <ExperienceSection language={this.state.language} />
                    </section>
                    <section id="skill"></section>
                    <section id="project"></section>
                    <section id="contact">
                        <ContactSection />
                    </section>
                </div>
            </div>
        )
    }
}

export default MainPage
