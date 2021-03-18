import React, { Component, useState } from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Select from "@material-ui/core/Select";
import { useQueryWithStore } from "react-admin";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import PomodoroSelect from "./PomodoroSelect"
import GoalSelect from "./GoalSelect"



const Settings = ({ parrentCallback }) => {
    const handleChange = (type, value) => {
        parrentCallback(type, value)
    }


    return <div>
        <PomodoroSelect parrentCallback={handleChange} />
        <GoalSelect parrentCallback={handleChange} />
    </div>
}
export default Settings