import React, { Component } from 'react'
import axios from 'axios'

class Registration extends Component {
     state = {
        credentials: {
            email: '',
            password: '',
            stylist: false
        }
    }

     handleChange = e => {
        
        this.setState({ 
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value 
            }
        })
        console.log(this.state.credentials)
    }

    handleChanges = e => {

        this.setState({

        })
    }


    onSubmit = (e) => {      
        e.preventDefault()
        // console.log()
        console.log('submit',this.state.credentials)
        //post here
        axios.post('https://bw-hair-care-be.herokuapp.com/api/auth/register', this.state.credentials)
            .then(res=>{ 
                localStorage.setItem('token', res.token)
                this.props.history.push("/Mainpage");
            })
            .catch(err => console.log(err))
        
    }
    render() {
        return (
            <div>
                {/* <h2>test</h2> */}
                <form onSubmit={this.onSubmit}>
                    <legend>Registration</legend>
                    <div>
                        <label>Email</label>
                        <input 
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={this.state.credentials.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input 
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                        />
                        <label>New Stylist</label>
                        <input 
                            type='checkbox' 
                            name='stylist'
                            value={this.state.credentials.stylist}
                            // onChange={}
                        />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
export default Registration