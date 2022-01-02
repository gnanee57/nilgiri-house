import React, {Component} from 'react';
import {Loading} from "./LoadingComponent";



class VerifyCertificates extends Component {

    url = window.location.href;

    certId = this.url.split('=')[1];

    render() {

        this.props.handleCertSearch(this.certId);

        if (this.props.certificatesLoading) {
            return (
                <Loading/>
            );
        } else if (this.props.certificatesErrMess || this.props.certificates === undefined) {
            return (
                <h4>{this.props.certificatesErrMess}</h4>
            );
        } else {
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
                                    <iframe src={this.props.certificates.map(certificate => certificate["cert_download_url"])}
                                            style={{marginLeft : "auto",
                                                marginRight: "auto"
                                            }}
                                            width="450" height="550" allow="autoplay" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
   }
}


export default VerifyCertificates;


