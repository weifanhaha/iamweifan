import React, { Component } from "react"
import dictionary from "./assets/dictionary"
import "./style.scss"

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
            (prevState, props) => ({
                openSideBar: !prevState.openSideBar
            }),
            console.log(this.state.openSideBar)
        )
    }

    get sidebarHidden() {
        return this.state.openSideBar ? "" : "hidden"
    }

    render() {
        return (
            <div className="navbar">
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
                    <div className="nav-item">{this.getText("HOME")}</div>
                    <div className="nav-item">{this.getText("EDUCATION")}</div>
                    <div className="nav-item">{this.getText("EXPERIENCE")}</div>
                    <div className="nav-item">{this.getText("CONTACT")}</div>
                    <div className="nav-item">Contact</div>
                    <div className="nav-item">Contact</div>
                    <div className="nav-item">Contact</div>
                    <div className="nav-item">Contact</div>
                    <div className="nav-item">Contact</div>
                    <div className="nav-item">Contact</div>
                    <div className="nav-item">Contact</div>
                    <div className="nav-item">Contact</div>
                    <div className="nav-item">Contact</div>
                    <div className="nav-item">Contact</div>
                </div>
            </div>
        )
    }
}

export default Navbar
