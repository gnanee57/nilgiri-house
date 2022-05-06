import React, {useState} from "react";
import {Loading} from "../LoadingPage";
import {CardText} from "reactstrap";
import moment from "moment";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function SearchHouse(props) {

    const [rollNum, setRollNum] = useState('');
    const [rollNo, setRollNo] = useState('');

    const resetForm = () => {
        setRollNum('');
    }

    const StudentDetails = () => {
        if (props.studentDetailsLoading) {
            return (
                <Loading />
            );
        } else if (props.studentDetailsErrMess || props.studentDetails[0] === undefined) {
            return (<div></div>);
        } else {
            return (
                <CardText style={{
                    justifyContent: 'center',
                    fontFamily: 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'medium',
                    fontWeight: 'bold'
                }}>
                    Your House & Group Details are: <br/>
                    Roll No : {props.studentDetails[0].studentId} <br/>
                    Group Id: {props.studentDetails[0].groupId} <br/>
                    House Name: {props.studentDetails[0].house} <br/>
                    Added in : {moment(props.studentDetails[0].termAdded,'DD-MM-YYYY').format('MMMM YYYY')}
                </CardText>
            );
        }
    }

    const TraceDetails = () => {
        if (props.studentDetails === null && rollNo.length === 10) { return (<div></div>) }
        else if(props.studentDetails !== null && rollNo.length === 10) {
            return (
                <CardText style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'small',
                    fontWeight: 'bold'
                }}>
                    Click on search to view your House & Group
                </CardText>
            );
        }
        else {
            return (
                <CardText style={{
                    justifyContent: 'center',
                    fontFamily : 'Trebuchet MS',
                    fontStyle: 'italic',
                    fontSize: 'small',
                    fontWeight: 'bold'
                }}>
                    Enter Valid Roll No. 2XfX00XXXX
                </CardText>
            );
        }
    }

    return (
        <section className="mb-2">
            <div className='container-fluid overflow-hidden grey lighten-4'>
                <div className='container'>
                    <div className={'col-md-12'}>
                        <div className={'row'}>
                            <h4 className="pink-text text-capitalize text-center font-weight-bold mb-2 pt-4 wow fadeIn"
                                data-wow-delay=".2s">
                                Know your House & Group</h4>
                            <hr className="mb-2" />
                            <div className={'col-md-4'}>
                                <form  noValidate autoComplete="off" onSubmit={(e) => {
                                    e.preventDefault();
                                    props.handleSearch(rollNum);
                                    resetForm();
                                }}
                                >
                                    <div  className="col-6">
                                        <TextField
                                            required
                                            fullWidth
                                            name="rollNum"
                                            label="Roll No:"
                                            placeholder="Enter your Roll No:"
                                            value={rollNum}
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            onChange={(e) => {
                                                setRollNum(e.target.value);
                                                setRollNo(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="row mt-2">
                                        <div className={"col-md-5"}>
                                            <Button  type={"submit"} variant="contained" color="primary">
                                                Search
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                                <div className="mt-3 mb-3">
                                    <TraceDetails />
                                </div>
                            </div>
                            <div className={'col-md-4 align-self-center'}>
                                <StudentDetails />
                            </div>
                            <div className={'col-md-4 align-self-center d-none d-md-block'} style={{marginLeft: "auto"}}>
                                <img src={'https://static.thenounproject.com/png/140350-200.png'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}