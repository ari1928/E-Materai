// import React, { Component } from 'react'
// import {
//     TableContainer,
//     Table,
//     TableHeader,
//     TableBody,
//     TableRow,
//     TableCell,
//     Pagination,
//     TableFooter,
//     Dropdown,
//     DropdownItem,
//     Input,
// } from '@windmill/react-ui'
// import { connect } from 'react-redux'
// import moment from 'moment';
// import { ClipLoader } from 'react-spinners';
// import Swal from 'sweetalert2'

// const mapStateToProps = (state) => {
//     return {
//         getAllCallHistory: state.ServiceCall.getAllCallHistory,
//         errorAllCallHistory: state.ServiceCall.errorAllCallHistory,
//         btnDropDown: state.ReduxState.btnDropDown,
//     };
// };

// class CallHistoryTable extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             dropDown: false,
//             NamePageDropdown: 10,
//             page: 1,
//             DataRes: [],
//             resultsPerPage: 10,
//             totalResults: "",
//             response: [],
//             Search: false,
//         };
//     }
//     showPageChange(show) {
//         if (show === "All") {
//             // const dataPage = this.state.response.slice((1 - 1) * this.props.getAllCallHistory.length, 1 * this.props.getAllCallHistory.length)
//             const dataPage = this.state.response.slice((1 - 1) * this.props.getAllCallHistory.length, 1 * this.props.getAllCallHistory.length)
//             this.setState({ DataRes: dataPage, resultsPerPage: this.props.getAllCallHistory.length, dropDown: false, NamePageDropdown: "All", page: 1 })
//         } else {
//             const dataPage = this.state.response.slice((1 - 1) * show, 1 * show)
//             this.setState({ DataRes: dataPage, resultsPerPage: show, dropDown: false, NamePageDropdown: show, page: 1 })
//         }
//     }
//     search(e) {
//         try {
//             if (this.props.errorAllCallHistory === false) {
//                 const row = e.target.value.toLowerCase()
//                 const data = this.props.getAllCallHistory
//                 const search = data.filter((data) =>
//                     data.reqSessionId.toString().toLowerCase().indexOf(row) > -1 ||
//                     data.reqCallFrom.toString().toLowerCase().indexOf(row) > -1 ||
//                     data.reqCallTo.toString().toLowerCase().indexOf(row) > -1 ||
//                     data.resFunction.toString().toLowerCase().indexOf(row) > -1 ||
//                     data.resCallUsing.toString().toLowerCase().indexOf(row) > -1 ||
//                     data.resTtsToPlay.toString().toLowerCase().indexOf(row) > -1 ||
//                     data.resLanguage.toString().toLowerCase().indexOf(row) > -1 ||
//                     moment(data.reqCreated).format("YYYY-MM-DD HH:mm:ss").toString().toLowerCase().indexOf(row) > -1
//                 )
//                 if (row === "") {
//                     const dataPage = this.state.response.slice((this.state.page - 1) * this.state.resultsPerPage, this.state.page * this.state.resultsPerPage)
//                     this.setState({ DataRes: dataPage, Search: false })
//                 } else {
//                     this.setState({ DataRes: search, Search: true })
//                 }
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if (this.props.getAllCallHistory !== false) {
//             const dataPage = this.props.getAllCallHistory.slice((this.state.page - 1) * this.state.resultsPerPage, this.state.page * this.state.resultsPerPage)
//             if (prevProps.getAllCallHistory !== this.props.getAllCallHistory) {
//                 this.setState({ DataRes: dataPage, totalResults: this.props.getAllCallHistory.length, response: this.props.getAllCallHistory })
//             }
//         }

//     }
//     onPageChange(p) {
//         const dataPage = this.state.response.slice((p - 1) * this.state.resultsPerPage, p * this.state.resultsPerPage)
//         this.setState({ DataRes: dataPage, page: p })
//     }

//     TtsLenght(data) {
//         Swal.fire({
//             text: data,
//             icon: 'info',
//         })
//     }

//     render() {
//         const isDropDown = this.state.dropDown
//         const CallHis = this.state.DataRes
//         return (
//             <>
//                 <div className="pt-4">
//                     <div className="w-1/3 float-right ">
//                         <Input className="mb-3" placeholder="Search..." onChange={this.search.bind(this)} maxLength="100" />
//                     </div>
//                 </div>
//                 <TableContainer  >
//                     <Table className="w-full whitespace-nowrap">
//                         <TableHeader style={{ backgroundColor: "#343a40" }} className="text-center ">
//                             <TableRow className="text-white border-2" >
//                                 <TableCell rowSpan="2" className="border-2">id</TableCell>
//                                 <TableCell colSpan="3">Request</TableCell>
//                                 <TableCell colSpan="5" className="border-l-2">Response</TableCell>
//                                 <TableCell rowSpan="2" className="border-2">Date</TableCell>
//                             </TableRow>
//                             <TableRow className="text-white border-b-2">
//                                 <TableCell>Session Id</TableCell>
//                                 <TableCell>Call From</TableCell>
//                                 <TableCell>Call TO</TableCell>
//                                 <TableCell className="border-l-2">Function</TableCell>
//                                 <TableCell>Call To</TableCell>
//                                 <TableCell>Call Using</TableCell>
//                                 <TableCell>Tts To Play</TableCell>
//                                 <TableCell>Language</TableCell>
//                             </TableRow>
//                         </TableHeader>
//                         <TableBody >
//                             {CallHis.length !== 0 ? (
//                                 CallHis.map((data, index) => {
//                                     // console.log(data.reqCallTo.length ? data.reqCallTo : '-')
//                                     return (
//                                         <TableRow key={index}
//                                             className={(index % 2 !== 0 ?
//                                                 "bg-gray-100 dark:text-purple-300" :
//                                                 "bg-white dark:text-purple-300") +
//                                                 " dark:hover:bg-gray-500 dark:bg-gray-800 hover:bg-cool-gray-200 "}
//                                         >
//                                             <TableCell className="text-center">{data.index}</TableCell>
//                                             <TableCell className="text-center">{data.reqSessionId}</TableCell>
//                                             <TableCell className="text-center">{data.reqCallFrom}</TableCell>
//                                             <TableCell className="text-center">{data.reqCallTo ? data.reqCallTo : '-'}</TableCell>
//                                             <TableCell className="text-center">{data.resFunction}</TableCell>
//                                             <TableCell className="text-center">{data.resCallTo}</TableCell>
//                                             <TableCell className="text-center">{data.resCallUsing}</TableCell>
//                                             {data.resTtsToPlay.length >= 50 ? (
//                                                 <TableCell
//                                                     className="cursor-pointer hover:text-blue-500 text-yellow-300"
//                                                     onClick={() => this.TtsLenght(data.resTtsToPlay)}
//                                                 >
//                                                     {data.resTtsToPlay.slice(0, 50) + ' ...'}
//                                                 </TableCell>
//                                             ) : (
//                                                 <TableCell>
//                                                     {data.resTtsToPlay}
//                                                 </TableCell>
//                                             )
//                                             }

//                                             <TableCell className="text-center">{data.resLanguage}</TableCell>
//                                             <TableCell className="text-center">{moment(new Date(data.reqCreated)).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
//                                         </TableRow>
//                                     )
//                                 })
//                             ) : (
//                                 <TableRow>
//                                     <TableCell colSpan="10" className="text-center">
//                                         {this.props.errorAllCallHistory ? (
//                                             <>
//                                                 <h1 className="text-red-500">{this.props.errorAllCallHistory}</h1>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 {this.state.Search ? (
//                                                     <>
//                                                         <h1>Data Not Found</h1>
//                                                     </>
//                                                 ) : (
//                                                     <>
//                                                         Loading ...
//                                                         <ClipLoader size={15} color={"dark:text-purple-300"} />
//                                                     </>
//                                                 )
//                                                 }
//                                             </>
//                                         )
//                                         }
//                                     </TableCell>
//                                 </TableRow>
//                             )}
//                         </TableBody>
//                     </Table>
//                     {/* </div> */}
//                     <TableFooter className="relative">
//                         <Pagination
//                             totalResults={this.state.totalResults}
//                             resultsPerPage={this.state.resultsPerPage}
//                             onChange={this.onPageChange.bind(this)}
//                             label="Table navigation" />
//                     </TableFooter>

//                 </TableContainer>
//                 <div className="relative">
//                     <button
//                         className="bg-gray-500 text-white cursor-pointer text-sm font-bold px-6 h-10 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-auto  ease-linear transition-all duration-150"
//                         onClick={(() => this.setState({ dropDown: !isDropDown }))}
//                     >
//                         {this.state.NamePageDropdown}
//                         <i className={(isDropDown) ? "ml-2 fas fa-angle-down" : "ml-2 fas fa-angle-up"} />
//                     </button>
//                     <Dropdown
//                         className="top-auto bottom-auto left-auto  w-60-px"
//                         isOpen={isDropDown}
//                         onClose={(() => this.setState({ dropDown: false }))}
//                     >
//                         <DropdownItem onClick={(() => this.showPageChange(10))}>
//                             10
//                         </DropdownItem>
//                         <DropdownItem onClick={(() => this.showPageChange(25))}>
//                             25
//                         </DropdownItem>
//                         <DropdownItem onClick={(() => this.showPageChange(50))}>
//                             50
//                         </DropdownItem>
//                         {/* <DropdownItem onClick={(() => this.showPageChange(100))} >
//                             100
//                         </DropdownItem>
//                         <DropdownItem onClick={(() => this.showPageChange("All"))}>
//                             All
//                         </DropdownItem> */}
//                     </Dropdown>
//                 </div>


//             </>
//         )
//     }
// }

// export default connect(mapStateToProps, null)(CallHistoryTable)