import React from 'react'

 class Registration extends React.Component {
     state = {
        username: '',
        email: '',
        password: ''
     }

     handleChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value, 
        })
    }


    onSubmit(e){
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div>
                {/* <h2>test</h2> */}
                <form>
                    <legend>Registration</legend>
                    <div>
                        <label>UserName</label>
                        <input 
                            type='text'
                            name='username'
                            placeholder='Username'
                            value={this.state.username}
                            onChange={this.handleChange}
                        />                      
                    </div>
                    <div>
                        <label>Email</label>
                        <input 
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input 
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.onSub}>Submit</button>
                </form>
            </div>
        )
    }
}
export default Registration