import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import AppContent from '../pomodoro/AppContent';
import Settings from "../settings/Settings"
import { ContinuousColorLegend } from 'react-vis';
import { useState, useEffect, useContext } from 'react';
import { DataProviderContext, Loading, Error } from 'react-admin';
import { connect } from 'react-redux';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

function SimpleTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(1);
    const [pomodoros, setPomodoros] = useState(null);
    const [goals, setGoals] = useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        // props.updatePage(newValue, newValue);
    };

    const setTabState = (type, value) => {
        if (type == "goals") {
            if (pomodoros) {
                setValue(0);
            }
            setGoals(value)
        }
        if (type == "pomodoros") {
            if (goals) {
                setValue(0);
            }
            setPomodoros(value)
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Main" {...a11yProps(0)} />
                    <Tab label="Settings" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <AppContent pomodoros={pomodoros} goals={goals} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Settings parrentCallback={setTabState} />
            </TabPanel>
        </div>
    );
}


SimpleTabs.propTypes = {
    disabled: PropTypes.bool,
    record: PropTypes.object,
};

export default connect(null, {})(SimpleTabs);