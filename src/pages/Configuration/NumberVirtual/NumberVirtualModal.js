import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@windmill/react-ui'
import { Field, reduxForm, reset } from 'redux-form';
import { FieldFormInputNumber } from 'src/ReduxFrom/FIeldFromInput';
import { BeatLoader, ClipLoader } from 'react-spinners';
import { DeleteReduxIdServiceNumberVirtual } from 'src/api/Actions/Service-Number-Virtual/ServiceNumberVirtual';
import NumberVirtualValidation from 'src/ReduxFormValidation/NumberVirtualValidation';

const mapStateToProps = (state) => {
    return {
        formUpdate: state.ReduxState.formUpdate,
        loading: state.ReduxState.loading,
        showModal: state.ReduxState.showModal,
        getAllNumberVirtual: state.ServiceNumberVirtual.getAllNumberVirtual,
        errorAllNumberVirtual: state.ServiceNumberVirtual.errorAllNumberVirtual,
        getIdNumberVirtual: state.ServiceNumberVirtual.getIdNumberVirtual,
        errorIdNumberVirtual: state.ServiceNumberVirtual.errorIdNumberVirtual,
        initialValues: {
            numberVirtual: state.ReduxState.NumberVitual,
        }
    };
};
class NumberVirtualModal extends Component {
    Cancel() {
        this.props.dispatch(reset('formNumberVirtualModal'))
        this.props.dispatch({ type: 'set', showModal: false, formUpdate: false, NumberVitual: false })
        this.props.dispatch(DeleteReduxIdServiceNumberVirtual())
    }
    componentDidUpdate() {
        if (this.props.getIdNumberVirtual !== false) {
            const numberVitual = this.props.getIdNumberVirtual.virtualNumber.slice(3, 20)
            this.props.dispatch({ type: 'set', NumberVitual: numberVitual })
        }
    }
    render() {
        const { showModal, loading, formUpdate } = this.props
        const { handleSubmit } = this.props;
        return (
            <>
                {/* <Modal isOpen={showModal}  */}
                <Modal isOpen={showModal} onClose={this.Cancel.bind(this)}
                >
                    <form onSubmit={handleSubmit}>
                        <ModalHeader>
                            {formUpdate ?
                                "Edit Number Virtual" :
                                "Create Number Virtual"
                            }
                        </ModalHeader>
                        <hr className="my-4 min-w-full" />
                        <ModalBody>
                            <div className="relative mb-3 ">
                                <Field
                                    name="numberVirtual"
                                    label="Number Virtual"
                                    type="tel"
                                    maxLength="15"
                                    autoComplete="off"
                                    component={FieldFormInputNumber}
                                    placeholder="eg : 82XXXXXXX"
                                />
                                <div className="absolute top-7 mr-5">(+62)</div>
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
                                    {!formUpdate && (
                                        <>
                                            Save
                                        </>
                                    )}
                                    {formUpdate && (
                                        <>
                                            Update
                                        </>
                                    )}
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

NumberVirtualModal = reduxForm({
    form: "formNumberVirtualModal",
    validate: NumberVirtualValidation,
    enableReinitialize: true,
})(NumberVirtualModal);
export default connect(mapStateToProps, null)(NumberVirtualModal)