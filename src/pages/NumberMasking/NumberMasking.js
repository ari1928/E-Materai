
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { ToastContainer } from 'react-toastify'
import { DeleteReduxDataServiceNumberMasking, GetAllNumberMasking, PostCreateNumberMasking, PutUpdateNumberMasking } from 'src/api/Actions/Service-Number-Masking/ServiceNumberMasking'
import { GetAllNumberVirtual } from 'src/api/Actions/Service-Number-Virtual/ServiceNumberVirtual'
import NumberMaskingModalForm from './NumberMaskingModalForm'
import NumberMaskingTable from './NumberMaskingTable'
import Swal from 'sweetalert2'


const mapStateToProps = (state) => {
    return {
        showModal: state.ReduxState.showModal,
        formUpdate: state.ReduxState.formUpdate,
        getIdNumberMasking: state.ServiceNumberMasking.getIdNumberMasking,
        errorIdNumberMasking: state.ServiceNumberMasking.errorIdNumberMasking,
        getAllNumberMasking: state.ServiceNumberMasking.getAllNumberMasking,
        errorAllNumberMasking: state.ServiceNumberMasking.errorAllNumberMasking,
        postCreateNumberMasking: state.ServiceNumberMasking.postCreateNumberMasking,
        errorCreateNumberMasking: state.ServiceNumberMasking.errorCreateNumberMasking,
        putUpdateNumberMasking: state.ServiceNumberMasking.putUpdateNumberMasking,
        errorUpdateNumberMasking: state.ServiceNumberMasking.errorUpdateNumberMasking,
        deleteNumberMasking: state.ServiceNumberMasking.deleteNumberMasking,
        errorDeleteNumberMasking: state.ServiceNumberMasking.errorDeleteNumberMasking,
    };
};

class NumberMasking extends Component {
    componentDidMount() {
        this.props.dispatch(GetAllNumberVirtual())
        this.props.dispatch(GetAllNumberMasking())
    }
    handleSubmit(data) {
        const NumberFrom = "+62" + data.NumberFrom
        const NumberTo = "+62" + data.NumberTo

        const dataReq = {
            numberA: NumberFrom,
            numberB: NumberTo,
            virtualNumberA: data.NumberMaskingFrom,
            virtualNumberB: data.NumberMaskingTo
        }
        if (this.props.formUpdate !== false) {
            this.props.dispatch(PutUpdateNumberMasking(this.props.getIdNumberMasking.id, dataReq))
        } else {
            this.props.dispatch(PostCreateNumberMasking(dataReq))
        }
        this.props.dispatch({ type: 'set', loading: true })
        data.NumberFrom = ""
        data.NumberTo = ""
        data.NumberMaskingFrom = ""
        data.NumberMaskingTo = ""
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.postCreateNumberMasking !== false) {
            Swal.fire({
                title: 'Create Number Masking Success',
                icon: 'success',
            })
            this.props.dispatch(DeleteReduxDataServiceNumberMasking())
            this.props.dispatch(GetAllNumberMasking())
            this.props.dispatch({ type: 'set', showModal: false, formUpdate: false, loading: false })
        }
        if (this.props.errorCreateNumberMasking !== false) {
            this.props.dispatch(DeleteReduxDataServiceNumberMasking())
            this.props.dispatch(GetAllNumberMasking())
            this.props.dispatch({ type: 'set', showModal: false, formUpdate: false, loading: false })
        }
        if (this.props.putUpdateNumberMasking !== false) {
            Swal.fire({
                title: 'Update Number Masking Success',
                icon: 'success',
            })
            this.props.dispatch(DeleteReduxDataServiceNumberMasking())
            this.props.dispatch(GetAllNumberMasking())
            this.props.dispatch({ type: 'set', showModal: false, formUpdate: false, loading: false, NumberFrom: false, NumberTo: false })
        }
        if (this.props.errorUpdateNumberMasking !== false) {
            this.props.dispatch(DeleteReduxDataServiceNumberMasking())
            this.props.dispatch(GetAllNumberMasking())
            this.props.dispatch({ type: 'set', showModal: false, formUpdate: false, loading: false, NumberFrom: false, NumberTo: false })
        }
        if (this.props.deleteNumberMasking !== false) {
            Swal.fire(
                'Deleted!',
                'Number Masking has been deleted.',
                'success'
            )
            this.props.dispatch(DeleteReduxDataServiceNumberMasking())
            this.props.dispatch(GetAllNumberMasking())
        }
        if (this.props.errorDeleteNumberMasking !== false) {
            this.props.dispatch(DeleteReduxDataServiceNumberMasking())
            this.props.dispatch(GetAllNumberMasking())
        }
    }
    componentWillUnmount() {
        this.props.dispatch({ type: 'set', showModal: false, formUpdate: false, loading: false })
    }
    render() {
        return (
            <>
                {/* <ToastContainer position="top-right" /> */}
                {/* <div className="py-4  text-gray-500 dark:text-gray-400 "> */}
                   
                    <NumberMaskingTable />
                    <NumberMaskingModalForm
                        onSubmit={(data) => this.handleSubmit(data)} />
                {/* </div> */}
            </>
        )
    }
}
export default connect(mapStateToProps, null)(NumberMasking)