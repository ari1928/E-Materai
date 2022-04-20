import React, { Component } from 'react'
import ButtonDropdown from 'src/components/ButtonDropdown'
import DashboardTogle from './DashboardTogle'

export default class Dashbord extends Component {
    render() {
        return (
            <>
                <div className="pb-10">
                    <ButtonDropdown />
                </div>
                <div className="block">
                    <DashboardTogle />
                </div>
            </>
        )
    }
}
