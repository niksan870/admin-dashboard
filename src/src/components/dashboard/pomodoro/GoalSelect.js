import React, { Component, useState } from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Select from "@material-ui/core/Select";
import { useQueryWithStore } from "react-admin";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import { setGoals } from '../../../actions/setGoals';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const GoalsSelect = ({ parrentCallback }) => {

    const { data, loading, error } = useQueryWithStore({
        type: 'getList',
        resource: 'goals',
        payload: { pagination: { page: 1, perPage: 10 }, sort: { field: "a-z", order: "ABC" }, filter: {} }
    });


    return <Grid container spacing={1}>
        <Grid item xs={6}>
            <Container style={{ textAlign: "center" }}>
                <FormControl style={{ minWidth: 240 }}>
                    <InputLabel id="select-a-goal">
                        Choose a goal setting
                    </InputLabel>
                    <Select
                        label="Choose a pomodoro setting"
                        name="pomodoro"
                        id="pomodoro"
                        onChange={(e) => {
                            parrentCallback("goals", e.target.value)
                        }}
                        className="form-control"
                        id="select-a-goal"
                    >
                        {data != null
                            ? data.map((option, index) => (
                                <MenuItem key={index} value={option}>
                                    {option.name}
                                </MenuItem>
                            ))
                            : null}
                    </Select>
                </FormControl>
            </Container>
        </Grid>
    </Grid>
}


GoalsSelect.propTypes = {
    setGoals: PropTypes.func
};

export default connect(null, { setGoals })(GoalsSelect);