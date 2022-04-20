// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { DeleteReduxDataServiceNumberVirtual, GetAllNumberVirtual, PostCreateNumberVirtual, PutUpdateNumberVirtual } from 'src/api/Actions/Service-Number-Virtual/ServiceNumberVirtual';
// import NumberVirtualModal from './NumberVirtualModal'
// import NumberVirtualTable from './NumberVirtualTable'
// import Swal from 'sweetalert2'

// const mapStateToProps = (state) => {
//     return {
//         formUpdate: state.ReduxState.formUpdate,
//         loading: state.ReduxState.loading,
//         showModal: state.ReduxState.showModal,
//         getAllNumberVirtual: state.ServiceNumberVirtual.getAllNumberVirtual,
//         getIdNumberVirtual: state.ServiceNumberVirtual.getIdNumberVirtual,
//         errorIdNumberVirtual: state.ServiceNumberVirtual.errorIdNumberVirtual,
//         errorAllNumberVirtual: state.ServiceNumberVirtual.errorAllNumberVirtual,
//         postCreateNumberVirtual: state.ServiceNumberVirtual.postCreateNumberVirtual,
//         errorCreateNumberVirtual: state.ServiceNumberVirtual.errorCreateNumberVirtual,
//         putUpdateNumberVirtual: state.ServiceNumberVirtual.putUpdateNumberVirtual,
//         errorUpdateNumberVirtual: state.ServiceNumberVirtual.errorUpdateNumberVirtual,
//         deleteNumberVirtual: state.ServiceNumberVirtual.deleteNumberVirtual,
//         errorDeleteNumberVirtual: state.ServiceNumberVirtual.errorDeleteNumberVirtual,
//     };
// };
// class NumberVirtual extends Component {
//     handleSubmit(data) {
//         const VirtualVumber = "+62" + data.numberVirtual
//         const dataReq = {
//             virtualNumber: VirtualVumber
//         }
//         if (this.props.formUpdate !== false) {
//             this.props.dispatch(PutUpdateNumberVirtual(this.props.getIdNumberVirtual.id, dataReq))
//         } else {
//             this.props.dispatch(PostCreateNumberVirtual(dataReq))
//         }
//         this.props.dispatch({ type: 'set', loading: true })
//         data.numberVirtual = ""
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if (this.props.postCreateNumberVirtual !== false) {
//             Swal.fire({
//                 title: 'Create Number Virtual Success',
//                 icon: 'success',
//             })
//             this.props.dispatch(DeleteReduxDataServiceNumberVirtual())
//             this.props.dispatch(GetAllNumberVirtual())
//             this.props.dispatch({ type: 'set', showModal: false, formUpdate: false, loading: false })
//         }
//         if (this.props.errorCreateNumberVirtual !== false) {
//             this.props.dispatch(DeleteReduxDataServiceNumberVirtual())
//             this.props.dispatch(GetAllNumberVirtual())
//             this.props.dispatch({ type: 'set', showModal: false, formUpdate: false, loading: false })
//         }
//         if (this.props.putUpdateNumberVirtual !== false) {
//             Swal.fire({
//                 title: 'Update Number Virtual Success',
//                 icon: 'success',
//             })
//             this.props.dispatch(DeleteReduxDataServiceNumberVirtual())
//             this.props.dispatch(GetAllNumberVirtual())
//             this.props.dispatch({ type: 'set', showModal: false, formUpdate: false, loading: false})
//         }
//         if (this.props.errorUpdateNumberVirtual !== false) {
//             this.props.dispatch(DeleteReduxDataServiceNumberVirtual())
//             this.props.dispatch(GetAllNumberVirtual())
//             this.props.dispatch({ type: 'set', showModal: false, formUpdate: false, loading: false})
//         }
//         if (this.props.deleteNumberVirtual !== false) {
//             Swal.fire(
//                 'Deleted!',
//                 'Number Virtual has been deleted.',
//                 'success'
//             )
//             this.props.dispatch(DeleteReduxDataServiceNumberVirtual())
//             this.props.dispatch(GetAllNumberVirtual())
//         }
//         if (this.props.errorDeleteNumberVirtual !== false) {
//             this.props.dispatch(DeleteReduxDataServiceNumberVirtual())
//             this.props.dispatch(GetAllNumberVirtual())
//         }
//     }
//     render() {
//         return (
//             <>
//                 <NumberVirtualTable />
//                 <NumberVirtualModal
//                     onSubmit={(data) => this.handleSubmit(data)} />
//             </>
//         )
//     }
// }
// export default connect(mapStateToProps, null)(NumberVirtual)