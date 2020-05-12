import React from 'react';

class PersonForm extends React.Component {

    render() {
        return (
            <div className="container" style={{ marginTop: 40 }}>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" className="form-control" placeholder="First Name" onChange={this.props.setFirstName} value={this.props.state.firstName} />
                    </div>
                    <div className="col-md-3">
                        <input type="text" className="form-control" placeholder="Last Name" onChange={this.props.setLastName} value={this.props.state.lastName} />
                    </div>
                    <div className="col-md-2">
                        <input type="text" className="form-control" placeholder="Age" onChange={this.props.setAge} value={this.props.state.age} />
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary btn-block" onClick={this.props.addPerson}>Add Person</button>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-danger btn-block" onClick={this.props.clearTable}>Clear Table</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default PersonForm;