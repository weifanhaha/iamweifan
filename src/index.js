import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
// import App from "./App"
import MainPage from "./MainPage"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(<MainPage />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

/*
Todos
1. Add scroll in Home Section
V 2. Add language switcher
3. css of education / experience section
4. project, skill section
*/
