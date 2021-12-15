import React from 'react';

import './Filters.css';

class Filters extends React.Component<any> {
    state: any;
    constructor(props: any) {
        super(props);
        this.state = {selected: 'Search by city'}
    }
    onSearch(event: any, property: string) {
        this.props.search(event.target.value, property);
    }
    onSelected(event: any) {
        event.preventDefault();
        this.setState({ selected: event.target.innerText});
        this.props.onSelected(event.target.innerText);
    }
    render() {
        return (
            <div className="filters">
                <div className="search">
                    <p>Search by name:</p>
                    <input type="text" value={this.props.searchTerm}
                        onChange={(event) => this.onSearch(event, 'name')}></input>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">{this.state.selected}</button>
                    <div className="dropdown-content">
                        {this.props.cities.map((el: string, i: number) => {
                            return (<div key={i}>
                                <a onClick={(event) => this.onSelected(event)}
                                className="dropdown-element">{el}</a>
                            </div>)
                        })}
                    </div>
                </div>
                <div className="search">
                    <p>Search by cluster name:</p>
                    <input type="text" value={this.props.searchTerm}
                        onChange={(event) => this.onSearch(event, 'cluster')}></input>
                </div>
            </div>
        );
    }
}

export default Filters;