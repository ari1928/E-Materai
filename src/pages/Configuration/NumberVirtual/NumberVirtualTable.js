import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    TableContainer,
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableCell,
    TableFooter,
    Pagination,
    Dropdown,
    DropdownItem,
    Input,
    Button,
} from '@windmill/react-ui'
import Swal from 'sweetalert2'
import { ClipLoader, } from 'react-spinners';
import { DeleteNumberVirtual, GetAllNumberVirtual, GetIdNumberVirtual } from 'src/api/Actions/Service-Number-Virtual/ServiceNumberVirtual';

const mapStateToProps = (state) => {
    return {
        formUpdate: state.ReduxState.formUpdate,
        loading: state.ReduxState.loading,
        showModal: state.ReduxState.showModal,
        getAllNumberVirtual: state.ServiceNumberVirtual.getAllNumberVirtual,
        errorAllNumberVirtual: state.ServiceNumberVirtual.errorAllNumberVirtual,
        getIdNumberVirtual: state.ServiceNumberVirtual.getIdNumberVirtual,
        errorIdNumberVirtual: state.ServiceNumberVirtual.errorIdNumberVirtual,
    };
};
class NumberVirtualTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDown: false,
            NamePageDropdown: 10,
            page: 1,
            DataRes: [],
            resultsPerPage: 10,
            totalResults: "",
            response: [],
            Search: false,
        };
    }
    componentDidMount() {
        this.props.dispatch(GetAllNumberVirtual())
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.getAllNumberVirtual !== false) {
            const dataPage = this.props.getAllNumberVirtual.slice((this.state.page - 1) * this.state.resultsPerPage, this.state.page * this.state.resultsPerPage)
            if (prevProps.getAllNumberVirtual !== this.props.getAllNumberVirtual) {
                this.setState({ DataRes: dataPage, totalResults: this.props.getAllNumberVirtual.length, response: this.props.getAllNumberVirtual })
            }
        }
    }
    onPageChange(p) {
        // this.props.dispatch(DeleteReduxDataServiceNumberVirtual())
        const dataPage = this.state.response.slice((p - 1) * this.state.resultsPerPage, p * this.state.resultsPerPage)
        this.setState({ DataRes: dataPage, page: p })
        // this.props.dispatch(getAllNumberVirtual())
    }
    HandleClickEdit(id) {
        this.props.dispatch({ type: 'set', showModal: true, formUpdate: true })
        this.props.dispatch(GetIdNumberVirtual(id))
    }
    HandleClickDelete(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.props.dispatch(DeleteNumberVirtual(id))
                this.setState({ DataRes: [], response: [] })
            }
        })
    }
    // ======== Pagination  ======== //
    showPageChange(show) {
        if (show === "All") {
            const dataPage = this.state.response.slice((1 - 1) * this.props.getAllNumberVirtual.length, 1 * this.props.getAllNumberVirtual.length)
            this.setState({ DataRes: dataPage, resultsPerPage: this.props.getAllNumberVirtual.length, dropDown: false, NamePageDropdown: "All" })
        } else {
            const dataPage = this.state.response.slice((1 - 1) * show, 1 * show)
            this.setState({ DataRes: dataPage, resultsPerPage: show, dropDown: false, NamePageDropdown: show })
        }
    }
    // ======== Search Egine ======== //
    search(e) {
        try {
            if (this.props.errorAllNumberVirtual === false) {
                const row = e.target.value.toLowerCase()
                const data = this.props.getAllNumberVirtual
                const search = data.filter((data) =>
                    data.virtualNumber.toString().toLowerCase().indexOf(row) > -1 
                )
                if (row === "") {
                    const dataPage = this.state.response.slice((this.state.page - 1) * this.state.resultsPerPage, this.state.page * this.state.resultsPerPage)
                    this.setState({ DataRes: dataPage, Search: false })
                } else {
                    this.setState({ DataRes: search, Search: true })
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        const isDropDown = this.state.dropDown
        const numberVirtual = this.state.DataRes
        return (
            <>

                <div className="pt-4">
                    <div className="absolute">
                        <Button onClick={() => this.props.dispatch({ type: 'set', showModal: true })}>
                            <i className="fas fa-plus mr-2" />
                            Create Number Virtual
                        </Button>
                    </div>
                    <div className="w-1/3 float-right ">
                        <Input className="mb-3" placeholder="Search..." onChange={this.search.bind(this)} maxLength="100" />
                    </div>
                </div>
                <TableContainer>
                    <Table>
                        <TableHeader>
                            <TableRow style={{ backgroundColor: "#343a40" }} className="text-white text-center">
                                <TableCell>Id</TableCell>
                                <TableCell>Number Virtual</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {numberVirtual.length !== 0 ? (
                                numberVirtual.map((data, index) => {
                                    return (
                                        <TableRow key={index}
                                            className={(index % 2 !== 0 ?
                                                "bg-gray-100 dark:text-purple-300" :
                                                "bg-white dark:text-purple-300") +
                                                " dark:hover:bg-gray-500 dark:bg-gray-800 hover:bg-cool-gray-200 text-center"}
                                        >
                                            <TableCell>
                                                {data.index}
                                            </TableCell>
                                            <TableCell>
                                                {data.virtualNumber}
                                            </TableCell>
                                            <TableCell >
                                                <button
                                                    className="bg-yellow-300 text-white cursor-pointer text-sm font-bold  px-4 py-1 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 "
                                                    onClick={() => this.HandleClickEdit(data.id)}
                                                >
                                                    <i className="fas fa-edit mr-1" />
                                                    Edit
                                                </button>
                                                <button
                                                    className="bg-red-500 text-white cursor-pointer text-sm font-bold  px-4 py-1 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 "
                                                    // className="bg-red-500 text-white cursor-pointer text-sm font-bold uppercase px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-auto h-1/5  ease-linear transition-all duration-150"
                                                    onClick={() => this.HandleClickDelete(data.id)}
                                                >
                                                    <i className="fas fa-trash-alt mr-1" />
                                                    Delete
                                                </button>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            ) : (
                                <TableRow>
                                    <TableCell colSpan="6" className="text-center">
                                        {this.props.errorAllNumberVirtual ? (
                                            <>
                                                <h1 className="text-red-500">{this.props.errorAllNumberVirtual}</h1>
                                            </>
                                        ) : (
                                            <>
                                                {this.state.Search ? (
                                                    <>
                                                        <h1>Data Not Found</h1>
                                                    </>
                                                ) : (
                                                    <>

                                                        Loading ...
                                                        <ClipLoader size={15} color={"dark:text-purple-300"} />
                                                    </>
                                                )
                                                }
                                            </>
                                        )
                                        }
                                    </TableCell>
                                </TableRow>
                            )
                            }
                        </TableBody>
                    </Table>
                    <TableFooter className="relative">
                        <Pagination
                            totalResults={this.state.totalResults}
                            resultsPerPage={this.state.resultsPerPage}
                            onChange={this.onPageChange.bind(this)}
                            label="Table Pagination" />
                        {/* Button Drobdown Pagination */}

                    </TableFooter>
                </TableContainer>
                <div className="relative">
                    <button
                        className="bg-gray-500 text-white cursor-pointer text-sm font-bold px-6 h-10 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-auto  ease-linear transition-all duration-150"
                        onClick={(() => this.setState({ dropDown: !isDropDown }))}
                    >
                        {this.state.NamePageDropdown}
                        <i className={(isDropDown) ? "ml-2 fas fa-angle-down" : "ml-2 fas fa-angle-up"} />
                    </button>
                    <Dropdown
                        className="top-auto bottom-auto left-auto  w-60-px"
                        isOpen={isDropDown}
                        onClose={(() => this.setState({ dropDown: false }))}
                    >
                        <DropdownItem onClick={(() => this.showPageChange(10))}>
                            10
                        </DropdownItem>
                        <DropdownItem onClick={(() => this.showPageChange(25))}>
                            25
                        </DropdownItem>
                        <DropdownItem onClick={(() => this.showPageChange(50))}>
                            50
                        </DropdownItem>
                        {/* <DropdownItem onClick={(() => this.showPageChange(100))} >
                            100
                        </DropdownItem>
                        <DropdownItem onClick={(() => this.showPageChange("All"))}>
                            All
                        </DropdownItem> */}
                    </Dropdown>
                </div>
            </>
        )
    }
}
export default connect(mapStateToProps, null)(NumberVirtualTable)