import React, { Component } from "react"
import dictionary from "./assets/dictionary"
import "./style.scss"
import {
    HOME_SECTION,
    INTRO_SECTION,
    EDUCATION_SECTION,
    EXPERIENCE_SECTION,
    CONTACT_SECTION
} from "../constants"
import { ENG, CH } from "../constants"

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            openSideBar: false
        }
    }

    getText = key => {
        return dictionary[this.props.language][key]
    }

    toggleSideBar = () => {
        this.setState(
            prevState => ({
                openSideBar: !prevState.openSideBar
            }),
            console.log(this.state.openSideBar)
        )
    }

    get sidebarHidden() {
        return this.state.openSideBar ? "" : "hidden"
    }

    optionClass = lang => {
        return this.props.language === lang ? "active option" : "option"
    }

    render() {
        return (
            <div className="navbar">
                <div className="language-switch">
                    <span
                        className={this.optionClass(CH)}
                        onClick={() => this.props.switchLanguage(CH)}
                    >
                        繁體中文{" "}
                    </span>
                    |
                    <span
                        className={this.optionClass(ENG)}
                        onClick={() => this.props.switchLanguage(ENG)}
                    >
                        {" "}
                        English
                    </span>
                </div>
                <div className="navicon" onClick={this.toggleSideBar}>
                    <span className="hamburger" />
                    <span className="hamburger" />
                    <span className="hamburger" />
                </div>
                <div className={`sidebar ${this.sidebarHidden}`}>
                    <div
                        className={`sidebar-cross ${this.sidebarHidden}`}
                        onClick={this.toggleSideBar}
                    />
                    <div
                        className="nav-item"
                        onClick={() => this.props.scrollToRef(HOME_SECTION)}
                    >
                        {this.getText("HOME")}
                    </div>
                    <div
                        className="nav-item"
                        onClick={() => this.props.scrollToRef(INTRO_SECTION)}
                    >
                        {this.getText("INTRO")}
                    </div>
                    <div
                        className="nav-item"
                        onClick={() =>
                            this.props.scrollToRef(EDUCATION_SECTION)
                        }
                    >
                        {this.getText("EDUCATION")}
                    </div>
                    <div
                        className="nav-item"
                        onClick={() =>
                            this.props.scrollToRef(EXPERIENCE_SECTION)
                        }
                    >
                        {this.getText("EXPERIENCE")}
                    </div>
                    <div
                        className="nav-item"
                        onClick={() => this.props.scrollToRef(CONTACT_SECTION)}
                    >
                        {this.getText("CONTACT")}
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
