import React from 'react';

import './Filters.css';

class Filters extends React.Component<any> {
    state: any;
    constructor(props: any) {
        super(props);
        this.state = { searchName: '', selected: 'Search by city', searchCluster: '' }
    }
    onSearch(event: any, property: string) {
        this.props.search(event.target.value, property);
    }
    onSelected(event: any) {
        event.preventDefault();
        this.setState({ selected: event.target.innerText });
        this.props.onSelected(event.target.innerText);
    }

    clearFilters() {
        this.setState({ searchName: '', selected: 'Search by city', searchCluster: '' });
        this.props.clearSearch();
    }
    render() {
        return (
            <div className="filters">
                <div className="search">
                    Search By Name: <br />
                    <input type="text" defaultValue={this.state.searchName}
                        onChange={(event) => this.onSearch(event, 'name')}></input>
                </div>
                <div className="search">
                    Search by cluster name:<br />
                    <input type="text" defaultValue={this.props.searchCluster} ref="searchClusterField"
                        onChange={(event) => this.onSearch(event, 'cluster')}></input>
                </div>
                <br />
                <div className="dropdown">
                    <button className="dropbtn">
                        {this.state.selected}<i className='fa fa-caret'></i>
                    </button>
                    <div className="dropdown-content">
                        {this.props.cities.map((el: string, i: number) => {
                            return (<div key={i}>
                                <a onClick={(event) => this.onSelected(event)}
                                    className="dropdown-element">{el}</a>
                            </div>)
                        })}
                    </div>
                    <button type="button" onClick={() => this.clearFilters()}>Clear Selection</button>
                </div>
            </div>
        );
    }
}

export default Filters;