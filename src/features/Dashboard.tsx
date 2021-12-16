import React from 'react';
import Filters from './Filters';
import Grid from './Grid';
import Header from './Header';

import data from '../warehouse.json';
import EditData from './EditData';

class Dashboard extends React.Component {
    state: any;
    constructor(props: any) {
        super(props);
        let cities: any[] = [];
        data.map(ele => {
            if (!cities.find(city => city === ele.city)) {
                cities.push(ele.city);
            }
        });
        this.state = {
            searchTerm: '',
            orgData: data,
            cities: cities,
            openForm: false,
            data: undefined
        };
    }
    search = (term: string, property: string) => {
        this.setState({ searchTerm: term });
        if (term === '') {
            this.setState({ orgData: data });
        }
        else {
            let newData = data.filter((el: any) => el[property].toLowerCase().includes(term));
            this.setState({ orgData: newData });
        }
    };

    clearSearch = () => {
        this.setState({ orgData: data });
    }

    onSelected = (element: string) => {
        let newData = data.filter((el: any) => el.city === element);
        this.setState({ orgData: newData });
    }

    openForm = (item: any) => {
        this.setState({ openForm: true });
        this.setState({ data: item });
    }

    closeForm = () => {
        this.setState({ openForm: false });
        this.setState({ data: undefined });
    }

    submitData = (item: any) => {
        data.forEach((el: any) => {
            if (el.id === item.id) {
                el = item;
            }
        });
        console.log(data);
        this.closeForm();
    }

    render() {
        return (
            <div className="dashboard">
                <Header></Header>
                {
                    !this.state.openForm &&
                    <div className="flex-container">
                        <Filters search={this.search} cities={this.state.cities}
                            onSelected={this.onSelected} clearSearch={this.clearSearch}></Filters>
                        <Grid data={this.state.orgData}
                            openForm={this.openForm}></Grid>
                    </div>
                }
                {
                    this.state.openForm && this.state.data &&
                    <div className="form">
                        <EditData closeForm={this.closeForm}
                            data={this.state.data}
                            submitData={this.submitData}></EditData>
                    </div>
                }
            </div>
        );
    }
}

export default Dashboard;
