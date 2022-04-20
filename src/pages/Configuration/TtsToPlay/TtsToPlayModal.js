import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@windmill/react-ui'
import { Field, reduxForm, reset } from 'redux-form';
import { FieldFormInputSpan } from 'src/ReduxFrom/FIeldFromInput';
import { BeatLoader, ClipLoader } from 'react-spinners';
import { DeleteReduxIdServiceTtsToPlay } from 'src/api/Actions/Service-TtsToPlay/ServiceTtsToPlay';
import TtsToPlay from 'src/ReduxFormValidation/TtsToPlay';

const mapStateToProps = (state) => {
    return {
        formUpdate: state.ReduxState.formUpdate,
        loading: state.ReduxState.loading,
        showModal: state.ReduxState.showModal,
        getAllTtsToPlay: state.ServiceTtsToPlay.getAllTtsToPlay,
        errorAllTtsToPlay: state.ServiceTtsToPlay.errorAllTtsToPlay,
        getIdTtsToPlay: state.ServiceTtsToPlay.getIdTtsToPlay,
        errorIdTtsToPlay: state.ServiceTtsToPlay.errorIdTtsToPlay,
        initialValues: {
            ttsToPlay: state.ServiceTtsToPlay.getIdTtsToPlay.textToPlay,
        }
    };
};
class TtsToPlayModal extends Component {
    Cancel() {
        this.props.dispatch(reset('formTtsToPlayModal'))
        this.props.dispatch({ type: 'set', showModal: false, formUpdate: false, NumberVitual: false })
        this.props.dispatch(DeleteReduxIdServiceTtsToPlay())
    }

    render() {
        const { showModal, loading } = this.props
        const { handleSubmit } = this.props;
        return (
            <>
                {/* <Modal isOpen={showModal}  */}
                <Modal isOpen={showModal} onClose={this.Cancel.bind(this)}
                >
                    <form onSubmit={handleSubmit}>
                        <ModalHeader>
                            Edit Tts To Play
                        </ModalHeader>
                        <hr className="my-4 min-w-full" />
                        <ModalBody>
                            <div className="relative mb-3 ">
                                <Field
                                    name="ttsToPlay"
                                    label="Tts To Play"
                                    autoComplete="off"
                                    component={FieldFormInputSpan}
                                    placeholder="Message Tts To Play"
                                />
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button type="Button" size="large" className="w-full sm:w-auto" layout="outline" onClick={this.Cancel.bind(this)}>
                                Cancel
                            </Button>
                            {!loading && (
                                <button
                                    className="w-full sm:w-auto bg-blue-500 text-white text-sm font-bold hover:bg-blue-400 px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit"
                                >
                                    Update
                                </button>
                            )}
                            {loading && (
                                <button
                                    className="w-full sm:w-auto bg-gray-500 cursor-wait text-white text-sm font-bold  px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit"
                                >
                                    Loading
                                    <BeatLoader size={5} color={"#fff"} />
                                    <ClipLoader size={15} color={"#fff"} />
                                </button>
                            )}
                        </ModalFooter>
                    </form>
                </Modal>
            </>
        )
    }
}

TtsToPlayModal = reduxForm({
    form: "formTtsToPlayModal",
    validate: TtsToPlay,
    enableReinitialize: true,
})(TtsToPlayModal);
export default connect(mapStateToProps, null)(TtsToPlayModal)