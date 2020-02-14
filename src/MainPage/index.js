import React, { Component } from "react"
import Navbar from "../Navbar"
import HomeSection from "../HomeSection"
import IntroSection from "../IntroSection"
import EducationSection from "../EducationSection"
import ExperienceSection from "../ExperienceSection"
import ContactSection from "../ContactSection"
import SkillSection from "../SkillSection"
import "./style.scss"
import { ENG } from "../constants"
import {
    HOME_SECTION,
    INTRO_SECTION,
    EDUCATION_SECTION,
    EXPERIENCE_SECTION,
    CONTACT_SECTION,
    SKILL_SECTION
} from "../constants"

class MainPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            language: ENG
        }

        this.homeRef = React.createRef()
        this.introRef = React.createRef()
        this.eduRef = React.createRef()
        this.expRef = React.createRef()
        this.contactRef = React.createRef()
        this.skillRef = React.createRef()
    }

    switchLanguage = language => {
        this.setState({ language: language })
    }

    sectionRef(section) {
        switch (section) {
            case HOME_SECTION:
                return this.homeRef
            case INTRO_SECTION:
                return this.introRef
            case EDUCATION_SECTION:
                return this.eduRef
            case EXPERIENCE_SECTION:
                return this.expRef
            case CONTACT_SECTION:
                return this.contactRef
            case SKILL_SECTION:
                return this.skillRef

            default:
                return this.homeRef
        }
    }

    scrollToRef = section => {
        const ref = this.sectionRef(section)
        ref.current.scrollIntoView({ behavior: "smooth" })
    }

    render() {
        return (
            <div>
                <Navbar
                    language={this.state.language}
                    switchLanguage={this.switchLanguage}
                    scrollToRef={this.scrollToRef}
                />
                <div className="container">
                    <section id="home" ref={this.homeRef}>
                        <HomeSection language={this.state.language} />
                    </section>
                    <section id="intro" ref={this.introRef}>
                        <IntroSection language={this.state.language} />
                    </section>
                    <section id="education" ref={this.eduRef}>
                        <EducationSection language={this.state.language} />
                    </section>
                    <section id="experience" ref={this.expRef}>
                        <ExperienceSection language={this.state.language} />
                    </section>
                    <section id="skill" ref={this.skillRef}>
                        <SkillSection language={this.state.language} />
                    </section>
                    <section id="project"></section>
                    <section id="contact" ref={this.contactRef}>
                        <ContactSection />
                    </section>
                </div>
            </div>
        )
    }
}

export default MainPage
