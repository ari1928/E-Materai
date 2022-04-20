
// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// // import { ToastContainer } from 'react-toastify'
// import { GetAllCallHitory } from 'src/api/Actions/Service-Log/ServiceLog'
// import CallHistoryTable from './CallHistoryTable'

// const mapStateToProps = (state) => {
//     return {
//         getAllCallHistory: state.ServiceCall.getAllCallHistory,
//         errorAllCallHistory: state.ServiceCall.errorAllCallHistory,
//     };
// };
// class CallHistory extends Component {
//     componentDidMount() {
//         this.props.dispatch(GetAllCallHitory())
//     }
//     render() {
//         return (
//             <>
//              {/* <ToastContainer position="top-right" /> */}
//                 {/* <div className="py-4 px-4 text-gray-500 dark:text-gray-400 "> */}
//                     {/* <button onClick={() => this.props.dispatch(GetAllCallHitory())}
//                         className="bg-blue-500 text-white cursor-pointer text-sm font-bold  px-4 py-2 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 ">
//                         <i className="fas fa-sync mr-1" />
//                         Refresh
//                     </button> */}
//                     <CallHistoryTable />
//                 {/* </div> */}
//             </>
//         )
//     }
// }

// export default connect(mapStateToProps, null)(CallHistory)