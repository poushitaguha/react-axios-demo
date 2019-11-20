import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            port: ''
        }
    }

    onChangeHostName = e => {
        this.setState({
            name: e.target.value
        });
    }

    onChangePortName = e => {
        this.setState({
            port: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const serverport = {
            name: this.state.name,
            port: this.state.port
        }
        axios.post('http://localhost:4000/serverport/add', serverport)
            .then(res => console.log(res.data));

        console.log(`Name is ${this.state.name} and Port is ${this.state.port}`);
        this.setState({
            name: '',
            port: ''
        });
    }

    render() {
        return (
            <div style={{ marginTop: 50 }}>
                <h3>Add New Server</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Host Name: </label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeHostName} />
                    </div>
                    <div className="form-group">
                        <label>Add Server Port: </label>
                        <input type="text" className="form-control" value={this.state.port} onChange={this.onChangePortName} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Node server" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );

    }
}

