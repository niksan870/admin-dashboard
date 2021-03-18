import React, { Component, useState } from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Select from "@material-ui/core/Select";
import App from "./App";
import axios from "axios";
import { Query, Loading, Error, showNotification, GET_LIST, useQueryWithStore } from "react-admin";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { BASE_API_AUTH_URL, BASE_API_URL } from "../../../../constants";
import PomodoroSelect from "../settings/PomodoroSelect"
import GoalSelect from "./GoalSelect"


const AppContent = props => {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [additionalSettings, setAdditionalSettings] = useState(false);
  const [musicList, setMusicList] = useState(null);
  const [musicURL, setMusicURL] = useState("test");
  // const [pomodoros, setPomodoros] = useState(null);
  // const [goals, setGoals] = useState(null);

  return (
    <div>
      {props.pomodoros != undefined && props.goals != undefined ?
        <div >
          <CardHeader
            title="Make your day more productive"
            style={{ textAlign: "center" }}
          />
          <Grid container spacing={3}>

            {additionalSettings != false ? (
              <PomodoroSelect />
            ) : null}

            <Grid
              item
              xs={12}
              id="dashboard"
              style={{ textAlign: "center" }}
            >
              <App
                defaultBreakLength={props.pomodoros.break_time}
                defaultSessionLength={props.pomodoros.work_time}
              />
            </Grid>
          </Grid>
        </div> : <Loading />}
    </div>
  );
}

export default AppContent