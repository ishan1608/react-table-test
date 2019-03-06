import React from "react";
import {setConfig} from "react-hot-loader";
import {hot} from "react-hot-loader/root";
import ReactTable from "react-table";

import {makeData} from "../utils";


setConfig({
    pureRender: true, // RHL will not change render method
});

class ReactTableSimpleTableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: makeData()
        };
    }

    render() {
        console.log('%c ReactTableSimpleTableComponent.render()', 'color: green');

        return (
            <div>
                <ReactTable
                    data={this.state.data}
                    columns={[
                        {
                            Header: "Name",
                            columns: [
                                {
                                    Header: "First Name",
                                    accessor: "firstName"
                                },
                                {
                                    Header: "Last Name",
                                    id: "lastName",
                                    accessor: d => d.lastName
                                }
                            ]
                        },
                        {
                            Header: "Info",
                            columns: [
                                {
                                    Header: "Age",
                                    accessor: "age"
                                },
                                {
                                    Header: "Status",
                                    accessor: "status"
                                }
                            ]
                        },
                        {
                            Header: 'Stats',
                            columns: [
                                {
                                    Header: "Visits",
                                    accessor: "visits"
                                }
                            ]
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </div>
        );
    }

    componentWillUnmount() {
        console.log('%c ReactTableSimpleTableComponent.componentWillUnmount()', 'color: red');
    }

}

export default hot(ReactTableSimpleTableComponent);
