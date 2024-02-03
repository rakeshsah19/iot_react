import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Players from "../player/players";
import Favroutes from "../favroutes/favroutes";
import Library from "../library/Library"
import Tranding from "../tranding/Tranding";
// import feed from "./feed";
import Feed from "../feed/feed";
import "../screens/home/home.css";

export default function Home() {
    return (

        <
        Router >
        <
        div className = "main-body" >
        <
        Routes >
        <
        Route path = "/"
        element = { < Library / > }
        /> <
        Route path = "/feed"
        element = { < Feed / > }
        /> <
        Route path = "/player"
        element = { < Players / > }
        /> <
        Route path = "/Tranding"
        element = { < Tranding / > }
        /> <
        Route path = "/favroutes"
        element = { < Favroutes / > }
        /> <
        /Routes> <
        /div> <
        /Router> 


    )
}