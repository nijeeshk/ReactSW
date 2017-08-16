import React from 'react';
import TopList from './topList';
import fetchListApi from '../api/apiHandler';
import Loader from './loader';

class App extends React.Component {

    state = {
        fetchingList: true,
        list: [],
        options: {
            request: 'top100in2weeks'
        },
    }

    componentWillMount() {
        this.fetchList();
    }

    setOptions = ({ options }) => {
        this.setState({ options }, () => this.fetchList());
    }

    fetchList = () => {
        const { options } = this.state;
        this.setState({ fetchingList: true }, () => {
            fetchListApi(options)
                .then((list) => {
                    this.setState({ list, fetchingList: false })
                })
                .catch(error => console.log('listFetchError:::', error));
        })
    }

    render() {
        const { fetchingList, list } = this.state;
        return (
            <div className="app">
                { fetchingList && <Loader /> }
                <div className="header">ReactSW</div>
                <TopList list={list} />
            </div>
        );
    }
}

export default App;
