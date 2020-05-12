import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import PersonRow from './PersonRow';
import PersonForm from './PersonForm';

class PeopleTable extends React.Component {

    state = {
        people: [],
        firstName: '',
        lastName: '',
        age: ''
    }

    setFirstName = e => {
        this.setState({ firstName: e.target.value })
    }

    setLastName = e => {
        this.setState({ lastName: e.target.value })
    }

    setAge = e => {
        this.setState({ age: e.target.value })
    }

    addPerson = e => {
        let peopleCopy = [...this.state.people];
        let person = { firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age }
        peopleCopy.push(person);
        this.setState({ people: peopleCopy, firstName: '', lastName: '', age: '' });
    }

    clearTable = () => {
        this.setState({ people: [], firstName: '', lastName: '', age: '' });
    }

    render() {
        return (
            <div className="container">
                <PersonForm
                    state={this.state}
                    setFirstName={this.setFirstName}
                    setLastName={this.setLastName}
                    setAge={this.setAge}
                    addPerson={this.addPerson}
                    clearTable={this.clearTable}
                />

                <table className="table table-hover table-striped table-bordered" style={{ marginTop: 40 }}>
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Age</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.people.map((person, i) => <PersonRow person={person} index={i} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PeopleTable;