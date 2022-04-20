import React, { Component } from 'react'

class DashboardTogle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        };
    }
    handleChange() {
        this.setState({ isChecked: !this.state.isChecked})
    }
    render() {
        return (
            <>
                <div className="relative inline-block w-11 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" name="toggle" id="toggle"
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        checked={this.state.isChecked}
                        onChange={this.handleChange.bind(this)}
                    />
                    <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
                <label htmlFor="toggle" className="text-xs text-gray-700">Toggle me.</label>
            </>
        )
    }
}
export default DashboardTogle