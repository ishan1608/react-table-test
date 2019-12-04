import React from "react";
import {setConfig} from "react-hot-loader";
import {hot} from "react-hot-loader/root";
import ReactTable from "react-table";


setConfig({
    pureRender: true, // RHL will not change render method
});

class ReactTableSimpleTableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [], // No data initially
        };
    }

    componentDidMount() {
        // Fetching data
        fetch('/api/data/posts')
            .then(response => response.json())
            .then(posts => {
                this.setState({
                    data: posts,
                });
            });
    }

    render() {
        console.log('%c ReactTableSimpleTableComponent.render()', 'color: green');

        return (
            <div>
                <ReactTable
                    data={this.state.data}
                    columns={[
                        {
                            Header: "ID",
                            accessor: "id",
                            id: "id",
                        },
                        {
                            Header: "User ID",
                            accessor: "userId"
                        },
                        {
                            Header: "Title",
                            accessor: 'title',
                        },
                        {
                            Header: "Body",
                            accessor: 'body',
                        },
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
