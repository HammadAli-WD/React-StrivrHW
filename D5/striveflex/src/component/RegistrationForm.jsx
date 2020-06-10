import React, { Component } from 'react'
import {Container} from 'react-bootstrap'

export default class RegistrationForm extends Component {
    /* handleSubmit = () => {
        event.preventDefault();
        submitEvent();
      }; */
    render() {
        return (
            <Container className="text-center">
                <h1 className="text-white">Netflix Registration Form</h1>
                <h4>Please submit the following form for registration</h4>
                
                <div className="row text-white">
                    <div className="col col-md-6 offset-md-3">
                    <form onsubmit="handleSubmit()">
                        
                        <div className="form-group mt-5">
                        <label for="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            pattern=".{2,}"
                            placeholder="Input here name with at least 2 Chars"
                            Required
                        />
                        </div>
                        <div className="form-group">
                        <label for="Surname">Surname</label>
                        <input
                            type="text"
                            pattern=".{3,}"
                            className="form-control"
                            id="Surname"
                            placeholder="Input here Surname with at least 3 Chars"
                            Required
                        />
                        </div>
                        <div className="form-group">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Input here the email"
                            Required
                        />
                        </div>
                        <div className="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            pattern="(?=.*\d)(?=.*[a-z]).{8,}"
                            className="form-control"
                            id="password"
                            placeholder="Input here the password"
                            Required
                        />
                        </div>
                        <div className="form-group">
                        <label for="month">Year of Birth</label>
                        <input
                            type="month"
                            name="start"
                            className="form-control"
                            min="1910-01"
                            id="start"
                            value="2020-06"
                            placeholder="Input here Year of Birth"
                        />
                        </div>
                        <div className="form-group">
                        <label for="adr">Street Address</label>
                        <input
                            type="text"
                            name="address"
                            className="form-control"
                            id="adr"
                            placeholder="542 W. 15th Street"
                            Required
                        />
                        </div>
                        <div className="form-group">
                        <label for="city">City </label>
                        <input
                            type="text"
                            name="city"
                            className="form-control"
                            id="city"
                            placeholder="New York"
                            Required
                        />
                        </div>
                        <div className="form-group">
                        <label for="zip">Postal Code</label>
                        <input
                            type="text"
                            name="zip"
                            pattern=".{5,}"
                            className="form-control"
                            id="zip"
                            placeholder="Input here the Postal Code"
                            Required
                        />
                        </div>
                        <div className="form-group">
                        <label for="ccnum">Credit card</label>
                        <input
                            type="text"
                            id="ccnum"
                            name="cardnumber"
                            placeholder="1111-2222-3333-4444"
                            className="form-control"
                        />
                        </div>
                        <div className="form-group">
                        <button className="btn btn-primary mt-4" type="submit">
                            Submit
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
            </Container>
        )
    }
}

