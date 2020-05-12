import React, { Component } from 'react';
import '../App.css'

class Counter extends Component {
    state = {
        languages : [
            {id: 1, name: 'JavaScript', count: 0},
            {id: 2, name: 'Java', count: 0},
            {id: 2, name: 'Go', count: 0},
            {id: 2, name: 'Swift', count: 0},
            {id: 3, name: 'Python', count: 0}
        ]
     };

     handleIncrement = (counter) => {
        const languages = [...this.state.languages];
        const index = languages.indexOf(counter);
        languages[index] = {...counter}
        languages[index].count++;
        this.setState({languages});
     };

    render() { 
        return (  
            <div className="box">
                    <table>{this.state.languages.map(counter => (
                <tr key={counter.id}>
                <td>{counter.count}</td>
                <td>{counter.name}</td>
                <td><button className="btn btn-sm btn-secondary" onClick={() => this.handleIncrement(counter)}>Vote</button></td>
                </tr>
            ))}
            </table>
            </div>
        );
    }
}
 
export default Counter;