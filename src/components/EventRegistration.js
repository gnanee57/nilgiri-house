import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker,} from '@material-ui/pickers';
import {Grid, MenuItem,} from "@material-ui/core";
import * as PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import register from "../nilgiri_register.jpg";
import {Jumbotron} from "reactstrap";
import useWindowSize from "./useWindowSize";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            width: '25ch',
            justifyContent: "center",
        },

    },
    textField: {
        width: 200,
    },
}));

let formData;

export default function EventRegistration() {

    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [tag, setTag] = useState('');
    const [hostName, setHostName] = useState('');
    const [hostEmail, setHostEmail] = useState('');
    const [anyCoHost, setAnyCoHost] = useState(false);
    const [coHostName, setCoHostName] = useState('');
    const [coHostEmail, setCoHostEmail] = useState('');
    const [noParticipants, setNoParticipants] = useState('');
    const [maxParticipants, setMaxParticipants] = useState('');
    const [mode, setMode] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [support, setSupport] = useState('');



    const resetForm = () => {
        setEventName('');
        setEventDescription('');
        setTag('');
        setHostName('');
        setHostEmail('');
        setAnyCoHost(false);
        setCoHostName('');
        setCoHostEmail('');
        setNoParticipants('');
        setMaxParticipants('');
        setMode('');
        setSelectedDate(new Date());
        setStartTime(new Date());
        setEndTime(new Date());
        setSupport('');
    }

    const handleSubmit = async e => {
        e.preventDefault();
        /*for (let i = 0; i < e.target.length; i++) {
            if (e.target[i].name != '') {
                formData[e.target[i].name] = e.target[i].value

            }
        }
        console.log(formData)*/
        try {
            const response = await fetch('https://v1.nocodeapi.com/nilgiriwebad/google_sheets/yTirTveSAIcHfgHB?tabId=eventRegistration', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify([[eventName, eventDescription, tag, hostName, hostEmail,
                        anyCoHost, coHostName, coHostEmail, noParticipants, maxParticipants, mode, selectedDate,
                        startTime, endTime, support, new Date().toLocaleString()]])
                }
            );
            await response.json()
        } catch (err) {
            console.log(err);
        }
        resetForm();
    }

    const classes = useStyles();
    const size = useWindowSize();
    return (
        <>
            <Jumbotron>
                <img src={register} width={size.width - 17} height="440" />
            </Jumbotron>

        <div className="container">
            <div className="row mt-5 ">
                <div className="col-12 ">
                    <h3>Event Registration</h3>
                </div>
                <form  noValidate autoComplete="off" onSubmit={handleSubmit} >
                    <div  className="col-6">
                        <TextField
                            required
                            fullWidth
                            name="eventName"
                            label="Name of the Event"
                            placeholder="Enter the event name"
                            value={eventName}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => setEventName(e.target.value)}
                        />
                    </div>
                    <div className="col-6">
                        <TextField
                            required
                            fullWidth
                            name="eventDescription"
                            label="Event Description"
                            multiline
                            value={eventDescription}
                            onChange={(e) => setEventDescription(e.target.value)}
                            rows={4}
                            placeholder="Tell us about the event..."
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div className={classes.root}>
                        <TextField
                            required
                            data-shrink = {false}
                            name="tag"
                            select
                            label="Choose event Tag:"
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}
                        >
                            <MenuItem value={''}></MenuItem>
                            <MenuItem value={'anime'}>ANIME</MenuItem>
                            <MenuItem value={'astronomy'}>ASTRONOMY</MenuItem>
                            <MenuItem value={'chess'}>CHESS</MenuItem>
                            <MenuItem value={'civil services'}>CIVIL SERVICES</MenuItem>
                            <MenuItem value={'coding'}>CODING</MenuItem>
                            <MenuItem value={'e-sports'}>E-SPORTS</MenuItem>
                            <MenuItem value={'gaming'}>GAMING</MenuItem>
                            <MenuItem value={'drama'}>DRAMA</MenuItem>
                            <MenuItem value={'dance'}>DANCE</MenuItem>
                            <MenuItem value={'laughter'}>LAUGHTER</MenuItem>
                            <MenuItem value={'literary'}>LITERARY</MenuItem>
                            <MenuItem value={'music'}>MUSIC</MenuItem>
                            <MenuItem value={'movie'}>MOVIE</MenuItem>
                            <MenuItem value={'oratory'}>ORATORY</MenuItem>
                            <MenuItem value={'quiz'}>QUIZ</MenuItem>
                            <MenuItem value={'social eng.'}>SOCIAL ENGINEERING</MenuItem>
                            <MenuItem value={'sports'}>SPORTS</MenuItem>
                            <MenuItem value={'word games'}>WORD GAMES</MenuItem>
                        </TextField>
                    </div>
                    <div  className="row">
                        <div className="col-3">
                            <TextField
                                required
                                fullWidth
                                name="hostName"
                                label="Host Name"
                                value={hostName}
                                onChange={(e) => setHostName(e.target.value)}
                                placeholder="Enter Name of the Host"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div  className="col-3">
                            <TextField
                                required
                                fullWidth
                                name="hostEmail"
                                label="Host Email"
                                value={hostEmail}
                                onChange={(e) => setHostEmail(e.target.value)}
                                placeholder="Enter Host Email:"
                                helperText="Enter Student Email"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                    </div>
                    <div className={classes.root}>
                        <TextField
                            required
                            data-shrink = {false}
                            name="anyCoHost"
                            select
                            label="Another Host?[Max - 2]"
                            value={anyCoHost}
                            onChange={(e) => setAnyCoHost(e.target.value)}
                        >
                            <MenuItem value={true}>Yes</MenuItem>
                            <MenuItem value={false}>No</MenuItem>
                        </TextField>
                    </div>
                    <div  className="row">
                        <div className="col-3">
                            <TextField
                                disabled={!(anyCoHost)}
                                required
                                fullWidth
                                name="coHostName"
                                label="Co-Host Name"
                                value={coHostName}
                                onChange={(e) => setCoHostName(e.target.value)}
                                placeholder="Enter Name of the Co-Host"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div className="col-3">
                            <TextField
                                disabled={!(anyCoHost)}
                                required
                                fullWidth
                                name="coHostEmail"
                                label="Co-Host Email"
                                value={coHostEmail}
                                onChange={(e) => setCoHostEmail(e.target.value)}
                                placeholder="Enter Co-Host Email:"
                                helperText="Enter Student Email"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <TextField
                                required
                                name="noParticipants"
                                label="No. of Expected Participants"
                                type="number"
                                value={noParticipants}
                                onChange={(e) => setNoParticipants(e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div className="col-md-3">
                            <TextField
                                required
                                name="maxParticipants"
                                label="Participant Handling Limit"
                                type="number"
                                value={maxParticipants}
                                onChange={(e) => setMaxParticipants(e.target.value)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className={classes.root}>
                                    <TextField
                                        required
                                        data-shrink = {false}
                                        name="mode"
                                        select
                                        label="Mode of Event:"
                                        value={mode}
                                        onChange={(e) => setMode(e.target.value)}
                                    >
                                        <MenuItem value={''}></MenuItem>
                                        <MenuItem value={'gmeeet'}>GMEET</MenuItem>
                                        <MenuItem value={'zoom'}>Zoom</MenuItem>
                                        <MenuItem value={'others'}>Others</MenuItem>
                                    </TextField>
                                </div>
                                <div className='col-md-12'>
                                <MuiPickersUtilsProvider utils={MomentUtils}>
                                    <KeyboardDatePicker
                                        required
                                        autoOk={true}
                                        showTodayButton={true}
                                        variant="inline"
                                        format="DD-MM-YYYY"
                                        margin="normal"
                                        name="selectedDate"
                                        label="Preferred Date"
                                        value={selectedDate}
                                        onChange={setSelectedDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider></div>
                            </div>
                        </div>
                        <div className='row'>
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <div className="col-md-3">
                                    <KeyboardTimePicker
                                        required
                                        margin="normal"
                                        name="startTime"
                                        label="Preferred Start Time"
                                        value={startTime}
                                        onChange={setStartTime}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <KeyboardTimePicker
                                        required
                                        margin="normal"
                                        name="endTime"
                                        label="Preferred End Time"
                                        value={endTime}
                                        onChange={setEndTime}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                    />
                                </div>
                            </MuiPickersUtilsProvider>
                        </div>
                    </div>
                    <div className="col-6">
                        <TextField
                            fullWidth
                            name="eventDescription"
                            label="Any kind of additional support required from the NHC? If yes, please explain."
                            multiline
                            value={support}
                            onChange={(e) => setSupport(e.target.value)}
                            rows={4}
                            placeholder=""
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                    <div className="row mt-2">
                        <div className={"col-md-3"}>
                            <Button  type={"submit"} variant="contained" color="primary">
                                Submit
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}