import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker,} from '@material-ui/pickers';
import {Grid, MenuItem,} from "@material-ui/core";
import * as PropTypes from "prop-types";
import Button from "@material-ui/core/Button";


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

const modelObject = {
    eventName: '',
    eventDescription: '',
    tag: '',
    hostName: '',
    hostEmail: '',
    anyCoHost: false,
    coHostName: '',
    coHostEmail: '',
    noParticipants: '',
    maxParticipants: '',
    mode: '',
    selectedDate: new Date(),
    startTime: new Date().getTime(),
    endTime: new Date().getTime(),
    support: '',
}


export default function EventRegistration() {

    const [values, setValues] = useState(modelObject);


    const resetForm = () => {
        setValues(modelObject);
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);
        resetForm();
    }

    const classes = useStyles();

    return (
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
                            id="eventName"
                            label="Name of the Event"
                            placeholder="Enter the event name"
                            value={values.eventName}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => setValues({ eventName: e.target.value})}
                        />
                    </div>
                    <div className="col-6">
                        <TextField
                            required
                            fullWidth
                            id="eventDescription"
                            label="Event Description"
                            multiline
                            value={values.eventDescription}
                            onChange={(e) => setValues({ eventDescription: e.target.value})}
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
                            id="tag"
                            select
                            label="Choose event Tag:"
                            value={values.tag}
                            onChange={(e) => setValues({ tag: e.target.value})}
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
                                id="hostName"
                                label="Host Name"
                                value={values.hostName}
                                onChange={(e) => setValues({ hostName: e.target.value})}
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
                                id="hostEmail"
                                label="Host Email"
                                value={values.hostEmail}
                                onChange={(e) => setValues({ hostEmail: e.target.value})}
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
                            id="anyCoHost"
                            select
                            label="Another Host?[Max - 2]"
                            value={values.anyCoHost}
                            onChange={(e) => setValues({ anyCoHost: e.target.value})}
                        >
                            <MenuItem value={true}>Yes</MenuItem>
                            <MenuItem value={false}>No</MenuItem>
                        </TextField>
                    </div>
                    <div  className="row">
                        <div className="col-3">
                            <TextField
                                disabled={!(values.anyCoHost)}
                                required
                                fullWidth
                                id="coHostName"
                                label="Co-Host Name"
                                value={values.coHostName}
                                onChange={(e) => setValues({ coHostName: e.target.value})}
                                placeholder="Enter Name of the Co-Host"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div className="col-3">
                            <TextField
                                disabled={!(values.anyCoHost)}
                                required
                                fullWidth
                                id="coHostEmail"
                                label="Co-Host Email"
                                value={values.coHostEmail}
                                onChange={(e) => setValues({coHostEmail: e.target.value})}
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
                                id="noParticipants"
                                label="No. of Expected Participants"
                                type="number"
                                value={values.noParticipants}
                                onChange={(e) => setValues({ noParticipants: e.target.value})}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div className="col-md-3">
                            <TextField
                                required
                                id="maxParticipants"
                                label="Participant Handling Limit"
                                type="number"
                                value={values.maxParticipants}
                                onChange={(e) => setValues({ maxParticipants: e.target.value})}
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
                                        id="mode"
                                        select
                                        label="Mode of Event:"
                                        value={values.mode}
                                        onChange={(e) => setValues({ mode: e.target.value})}
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
                                        id="date-picker-inline"
                                        label="Preferred Date"
                                        value={values.selectedDate}
                                        onChange={(e) => setValues({ selectedDate: e.target.value})}
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
                                        id="time-picker"
                                        label="Preferred Start Time"
                                        value={values.startTime}
                                        onChange={(e) => setValues({startTime: e.target.value})}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <KeyboardTimePicker
                                        required
                                        margin="normal"
                                        id="time-picker"
                                        label="Preferred End Time"
                                        value={values.endTime}
                                        onChange={(e) => setValues({ endTime: e.target.value})}
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
                            id="eventDescription"
                            label="Any kind of additional support required from the NHC? If yes, please explain."
                            multiline
                            value={values.support}
                            onChange={(e) => setValues({ support: e.target.value})}
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
    );
}