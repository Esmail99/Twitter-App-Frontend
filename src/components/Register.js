import React from 'react'

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            registerUsername: '',
            registerEmail: '',
            registerPassword: '',
            usernameTaken: false,
            emailTaken: false
        }
    }

    onUsernameChange = (event) => {
        this.setState({ registerUsername: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ registerEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ registerPassword: event.target.value })
    }

    onSigninClick = () => {
        this.props.changeRoute('signin');
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/register',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              username: this.state.registerUsername,
              email: this.state.registerEmail,
              password: this.state.registerPassword
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.username === 1){
                this.setState({ emailTaken: false})
                this.setState({ usernameTaken: true})
            }
            else if(data.email === 1) {
                this.setState({ usernameTaken: false})
                this.setState({ emailTaken: true})
            }
            else if(data._id){
                this.props.changeRoute('signin');
            }
        })
    }

    render(){
        return(
            <div>
                <main className="pa4 black-80">
                    <form className="measure center" onSubmit={this.onFormSubmit}>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6">Username</label>
                            <input 
                                onChange={this.onUsernameChange}
                                className="pa2 input-reset ba bg-transparent w-70" 
                                type="name" 
                                name="username" 
                                minLength="3"
                                maxLength="15"
                                required
                            />
                            {
                                this.state.usernameTaken ? <p className='red'>USERNAME ALREADY TAKEN!</p> : null
                            }
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6">Email</label>
                            <input 
                                onChange={this.onEmailChange}
                                className="pa2 input-reset ba bg-transparent w-75" 
                                type="email" 
                                name="email-address" 
                                required
                            />
                            {
                                this.state.emailTaken ? <p className='red'>EMAIL ALREADY TAKEN!</p> : null
                            }
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6">Password</label>
                            <input 
                                onChange={this.onPasswordChange}
                                className="pa2 input-reset ba bg-transparent w-75" 
                                type="password" 
                                name="password" 
                                minLength="6"
                                required
                            />
                        </div>
                        </fieldset>
                        <div>
                        <   input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                        </div>
                        <div className="lh-copy mt3">Already have an accout?
                            <span 
                                onClick={this.onSigninClick}
                                className="f6 link blue dim underline pointer ml1"> 
                                Signin
                            </span>
                        </div>
                    </form>
                </main>
            </div>
        );
    }
}


export default Register;