import React, { Component } from 'react';
import '../containers/App.css';
import {API} from '../../api.js';

const DEFAULT_QUERY = 'redux';

export default class adminpage extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            text: "Initial text",
            hits: [],
        };
    }
    componentDidMount(){
    this.setState({hits: API.hits})
    }



    delete(hit) {
        const newState = this.state.hits.slice();
        if (newState.indexOf(hit) > -1) {
            newState.splice(newState.indexOf(hit), 1);
            this.setState({hits: newState});
        }
        return fetch(hit, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then((json) => {
            })
        .catch(error => error);
    }

    render() {
        const {hits} = this.state;
        return (
            <div>
                {this.state.text}
                {hits.map(hit =>
                    <div key={hit.objectID}>
                        <table class="table table-hover">
                            <tbody>
                            <tr class="table-active">
                                <td><a href={hit.url}>{hit.title}</a></td>
                                <td><btn onClick={this.delete.bind(this, hit)} class="badge badge-pill badge-danger">Delete</btn></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                )
                }
            </div>


        );
    }
}