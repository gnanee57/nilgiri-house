import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {MenuItem} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {postGrievance} from "../redux/ActionCreators";
import {useDispatch} from "react-redux";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            width: '50ch',
            justifyContent: "center",
        },
    },
    textField: {
        width: 200,
    },
}));


export default function GrievanceForm() {

    React.useEffect(() => {
        document.title = 'Nilgiri Grievance Redressal';
    }, []);

    const dispatch = useDispatch();

    const [studentName, setStudentName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [type, setType] = useState('');
    const [grievance, setGrievance] = useState('');
    const [anyAssistance, setAnyAssistance] = useState(false);



    const resetForm = () => {
        setStudentName('');
        setStudentId('');
        setType('');
        setGrievance('');
        setAnyAssistance(false);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        dispatch(postGrievance(studentName, studentId, type, grievance, anyAssistance));
        resetForm();
    }

    const classes = useStyles();
    return (
        <div>

            <div className="container-fluid">
                <div className="row m-5">
                    <div className="col-12 col-md-6" style={{ justifyContent: 'center'}}>
                        <h4 style={{ justifyContent: 'center', fontFamily : 'Trebuchet MS', fontStyle: 'normal',
                            textTransform: 'capitalize', fontSize: 'xx-large', fontWeight: 'bold', marginBottom: '25px'}}>
                            Nilgiri House :: Grievance Form
                        </h4>
                        <p className="text-center mx-auto grey-text" data-wow-delay="0.2s">
                            Healing takes place when grievances are given ample and patient space to be acknowledged,
                            when there is transparency and honesty, when everybody is given the chance to be heard,
                            when nobody is excluded, when people can accept the energy of the conflict and
                            use it as a major opportunity for growth.</p>
                        <form  noValidate autoComplete="off" onSubmit={handleSubmit} >
                            <div  className="col-10 mb-2">
                                <TextField
                                    required
                                    fullWidth
                                    name="studentName"
                                    label="Enter your Name"
                                    placeholder="Name"
                                    value={studentName}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(e) => setStudentName(e.target.value)}
                                />
                            </div>
                            <div  className="col-10 mb-2">
                                <TextField
                                    required
                                    fullWidth
                                    name="studentId"
                                    label="Enter your Roll No."
                                    placeholder="2Xfx00xxxx"
                                    value={studentId}
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(e) => setStudentId(e.target.value)}
                                />
                            </div>
                            <div className={classes.root}>
                                <TextField
                                    required
                                    data-shrink = {false}
                                    name="type"
                                    select
                                    label="Choose Grievance Type:"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <MenuItem value={''}></MenuItem>
                                    <MenuItem value={'Complaint'}>Complaint</MenuItem>
                                    <MenuItem value={'Suggestion'}>Suggestion</MenuItem>
                                    <MenuItem value={'Others'}>Others</MenuItem>
                                </TextField>
                            </div>
                            <div className="col-10 mb-2 mt-2">
                                <TextField
                                    required
                                    fullWidth
                                    name="grievance"
                                    label="Mention your Grievance:"
                                    multiline
                                    value={grievance}
                                    onChange={(e) => setGrievance(e.target.value)}
                                    rows={4}
                                    placeholder="Explain..."
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div className={classes.root}>
                                <TextField
                                    required
                                    data-shrink = {false}
                                    name="anyAssistance"
                                    select
                                    label="Do you need assistance from Nilgiri House Council?"
                                    value={anyAssistance}
                                    onChange={(e) => setAnyAssistance(e.target.value)}
                                >
                                    <MenuItem value={true}>Yes</MenuItem>
                                    <MenuItem value={false}>No</MenuItem>
                                </TextField>
                            </div>
                            <div className="row mt-3">
                                <div className={"col-md-5"}>
                                    <Button  type={"submit"} variant="contained" color="primary">
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-md-6 mt-5 d-none d-lg-block">
                        <img height="500px" width="550px" src={'https://www.privilege.com/lib/img/drawings/complaints-mobile.png'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}