import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import JwtToken from 'src/hash/JwtToken';
import NumberVirtual from './NumberVirtual/NumberVirtual';
import TtsToPlay from './TtsToPlay/TtsToPlay';


const decode = JwtToken(sessionStorage.getItem("access_token") || localStorage.getItem('access_token'))
class configuration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberVirtual: true,
            ttsToPlay: false,
        };
    }

    render() {
        const { numberVirtual, ttsToPlay } = this.state
        return (
            <>
                {decode.role === 'owner' ? (
                    <>
                        <ul className="flex border-b pt-4">
                            <li
                                className={(numberVirtual ? "-mb-px " : " cursor-pointer ") + " mr-1"}>
                                <div
                                    disabled={true}
                                    className={(numberVirtual ? "border-l border-t border-r rounded-t text-gray-700  " : "text-blue-500 dark:text-white dark:hover:text-blue-800 hover:text-blue-800 ") + " bg-white dark:bg-gray-500 inline-block py-2 px-4 font-semibold"}
                                    onClick={() => this.setState({ numberVirtual: true, ttsToPlay: false })}
                                >
                                    Number Virtual
                                </div>
                            </li>
                            <li className={(ttsToPlay ? "-mb-px " : " cursor-pointer ") + " mr-1 "}>
                                <div
                                    className={(ttsToPlay ? "border-l border-t border-r rounded-t " : "text-blue-500 dark:text-white dark:hover:text-blue-800 hover:text-blue-800 ") + " bg-white dark:bg-gray-500 inline-block py-2 px-4 font-semibold"}
                                    //  className={"bg-white inline-block py-2 px-4  hover:text-blue-800 text-blue-500 font-semibold"}
                                    onClick={() => this.setState({ numberVirtual: false, ttsToPlay: true })}
                                >
                                    Tts To Play
                                </div>
                            </li>
                        </ul>

                        {numberVirtual === true && (
                            <NumberVirtual />
                        )}
                        {ttsToPlay === true && (
                            <div className="pt-4">
                                <TtsToPlay />
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <Redirect to="/" />
                    </>
                )}
            </>
        )
    }
}

export default configuration