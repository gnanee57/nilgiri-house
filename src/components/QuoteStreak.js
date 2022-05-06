import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons";

export function QuoteStreak(props) {
    return (
        <div style={{ height:"500px",
            backgroundImage: "url("+ props.imgUrl +")"}}>
            <div className="flex-center mask rgba-indigo-strong">
                <div className="text-center wow fadeInDownBig" data-wow-delay="0.3s">
                    <h2 className="h2-responsive mb-5" style={{
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: 'floralwhite',
                        fontFamily : 'Trebuchet MS',
                        textTransform: 'capitalize',
                        fontSize : 'xx-large'
                    }}>
                        <FontAwesomeIcon icon={faQuoteLeft} />
                        {props.text}
                        <FontAwesomeIcon icon={faQuoteRight} />
                    </h2>
                    <h5 className="text-center wow fadeInUpBig"
                        data-wow-delay="0.5s"
                        style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            color: 'floralwhite',
                            fontFamily : 'Trebuchet MS',
                            textTransform: 'capitalize',
                            fontSize : 'large',
                            fontStyle : 'italic'
                        }}
                    >~ Erich Fromm</h5>
                </div>
            </div>
        </div>
    );
}