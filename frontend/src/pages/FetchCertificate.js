import React, {Component, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from 'prop-types';
import withRouter from "react-router-dom/es/withRouter";



class FetchCertificate extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = (certId) => {
        this.props.history.push({
            pathname: '/certificates/search',
            search: "?" + new URLSearchParams({certId: certId}).toString()
        })
    }

    render() {

        return (
            <section className="mb-2">
                <div className='container-fluid overflow-hidden'>
                    <div className='container'>
                        <div className={'col-md-12'}>
                            <div className={'row'}>
                                <h4 className="text-capitalize text-center font-weight-bold mb-2 pt-4 wow fadeIn"
                                    data-wow-delay=".2s">
                                    Verify your Certificates </h4>
                                <hr className="mb-2"/>
                                <FormInput handleSubmit={this.handleSubmit}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

function FormInput(props) {

    const [certId, setCertId] = useState('');
    return (
        <div>
            <div className="col-6">
                <TextField
                    required
                    fullWidth
                    name="certId"
                    label="Certificate Id:"
                    placeholder="NHC2XTX0XX"
                    value={certId}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setCertId(e.target.value)}
                />
            </div>
            <div className="row mt-2">
                <div className={"col-md-5"}>
                    <Button type={"submit"}
                            variant="contained"
                            color="primary"
                            onClick={(e) => {
                                e.preventDefault();
                                props.handleSubmit(certId);
                            }}
                    >
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
}


export default withRouter(FetchCertificate);


