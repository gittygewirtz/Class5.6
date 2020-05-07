import React from 'react';

class PersonForm extends React.Component {


    render() {
        return (
            <div className="container">
                <div className="row">
                    <input type="text" className="form-control" placeholder="First Name" onChange={} />
                    <input type="text" className="form-control" placeholder="Last Name" onChange={} />
                    <input type="text" className="form-control" placeholder="Age" onChange={} />
                    <button className="btn btn-primary btn-block">Add Person</button>
                </div>
            </div>
            );
    }


}