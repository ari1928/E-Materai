import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@windmill/react-ui'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form';
import { FieldFormInputNumber, FieldFormInputSelect } from 'src/ReduxFrom/FIeldFromInput';
import NumberMaskingValidation from 'src/ReduxFormValidation/NumberMaskingValidation';
import { BeatLoader, ClipLoader } from 'react-spinners';
import { DeleteReduxIdServiceNumberMasking } from 'src/api/Actions/Service-Number-Masking/ServiceNumberMasking';


const mapStateToProps = (state) => {
    return {
        formUpdate: state.ReduxState.formUpdate,
        loading: state.ReduxState.loading,
        showModal: state.ReduxState.showModal,
        getAllNumberVirtual: state.ServiceNumberVirtual.getAllNumberVirtual,
        getIdNumberMasking: state.ServiceNumberMasking.getIdNumberMasking,
        initialValues: {
            NumberFrom: state.ReduxState.NumberFrom,
            NumberTo: state.ReduxState.NumberTo,
            NumberMaskingFrom: state.ServiceNumberMasking.getIdNumberMasking.virtualNumberA,
            NumberMaskingTo: state.ServiceNumberMasking.getIdNumberMasking.virtualNumberB,
        }
    };
};

class NumberMaskingModalForm extends Component {
    Cancel() {
        this.props.dispatch(reset('formNumberMaskingModalForm'))
        this.props.dispatch({ type: 'set', showModal: false, formUpdate: false, NumberFrom: false, NumberTo: false })
        this.props.dispatch(DeleteReduxIdServiceNumberMasking())
    }
    componentDidUpdate() {
        if (this.props.getIdNumberMasking !== false) {
            const numberFrom = this.props.getIdNumberMasking.numberA.slice(3, 20)
            const numberTo = this.props.getIdNumberMasking.numberB.slice(3, 20)
            this.props.dispatch({ type: 'set', NumberFrom: numberFrom, NumberTo: numberTo })
        }
    }

    render() {
        const { showModal, getAllNumberVirtual, loading, formUpdate } = this.props
        const { handleSubmit } = this.props;
        // console.log(this.props.getIdNumberMasking.numberA.slice(2, 20))
        return (
            <>
                {/* <Modal isOpen={showModal}  */}
                <Modal isOpen={showModal} onClose={this.Cancel.bind(this)}
                >
                    <form onSubmit={handleSubmit}>
                        <ModalHeader>
                            {formUpdate ?
                                "Edit Number Masking" :
                                "Create Number Masking"
                            }
                        </ModalHeader>
                        <hr className="my-4 min-w-full" />
                        <ModalBody>
                            <div className="relative mb-3 ">
                                <Field
                                    name="NumberFrom"
                                    label="Number A"
                                    type="tel"
                                    maxLength="15"
                                    autoComplete="off"
                                    component={FieldFormInputNumber}
                                    placeholder="eg : 82XXXXXXX"
                                />
                                <div className="absolute top-7 mr-5">(+62)</div>
                            </div>
                            <div className="relative mb-3 ">
                                <Field
                                    name="NumberMaskingFrom"
                                    label="Number Masking A"
                                    component={FieldFormInputSelect}
                                >
                                    <option value="">Select Number Masking A</option>
                                    {getAllNumberVirtual && getAllNumberVirtual.map((data, index) => (
                                        <option value={data.virtualNumber} key={index} >{data.virtualNumber}</option>
                                    ))
                                    }
                                </Field>
                            </div>
                            <div className="relative mb-3 ">
                                <Field
                                    name="NumberTo"
                                    label="Number B"
                                    type="tel"
                                    maxLength="15"
                                    autoComplete="off"
                                    component={FieldFormInputNumber}
                                    placeholder="eg : 82XXXXXXX"
                                />
                                <div className="absolute top-7 mr-5">(+62)</div>
                            </div>
                            <div className="relative mb-3 ">
                                <Field
                                    name="NumberMaskingTo"
                                    label="Number Masking B"
                                    component={FieldFormInputSelect}
                                >
                                    <option value="">Select Number Masking B</option>
                                    {getAllNumberVirtual && getAllNumberVirtual.map((data, index) => (
                                        <option value={data.virtualNumber} key={index} >{data.virtualNumber}</option>

                                    ))
                                    }
                                </Field>
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
NumberMaskingModalForm = reduxForm({
    form: "formNumberMaskingModalForm",
    validate: NumberMaskingValidation,
    enableReinitialize: true,
})(NumberMaskingModalForm);
export default connect(mapStateToProps, null)(NumberMaskingModalForm)