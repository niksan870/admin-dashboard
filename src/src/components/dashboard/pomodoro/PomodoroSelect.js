import React, { Component, useState } from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Select from "@material-ui/core/Select";
import { useQueryWithStore } from "react-admin";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";


const PomodoroSelect = ({ parrentCallback }) => {
    const { data, loading, error } = useQueryWithStore({
        type: 'getList',
        resource: 'pomodoros',
        payload: { pagination: { page: 1, perPage: 10 }, sort: { field: "a-z", order: "ABC" }, filter: {} }
    });



    return <Grid container spacing={1}>
        <Grid item xs={6}>
            <Container style={{ textAlign: "center" }}>
                <FormControl style={{ minWidth: 240 }}>
                    <InputLabel id="select-a-goal">
                        Choose a pomodoro setting
                    </InputLabel>
                    <Select
                        label="Choose a pomodoro setting"
                        name="pomodoro"
                        id="pomodoro"
                        onChange={(e) => {
                            parrentCallback("pomodoros", e.target.value)
                        }}
                        className="form-control"
                        id="select-a-goal"

                    >
                        {data != null
                            ? data.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option.title}
                                </MenuItem>
                            ))
                            : null}
                    </Select>
                </FormControl>
            </Container>
        </Grid>
    </Grid>
}
export default PomodoroSelect