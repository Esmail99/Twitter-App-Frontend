import React from 'react'

class Signin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            signinEmail: '',
            signinPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ signinEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signinPassword: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:5000/signin',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signinEmail,
                password: this.state.signinPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user._id){
                this.props.loadUser(user)
                this.props.changeRoute('homeSignedin');
            }
        })
    }

    onRegisterClick = () => {
        this.props.changeRoute('register');
    }

    render() {
        return(
            <div>
                <main className="pa4 black-80">
                    <form className="measure center" onSubmit={this.onFormSubmit}>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                                onChange={this.onEmailChange}
                                className="pa2 input-reset ba bg-transparent w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address" 
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                                onChange={this.onPasswordChange}
                                className="b pa2 input-reset ba bg-transparent w-100" 
                                type="password" 
                                name="password"  
                                id="password" 
                                // required
                            />
                        </div>
                        </fieldset>
                        <div>
                            <input 
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Sign in" 
                                // required
                            />
                        </div>
                        <div className="lh-copy mt3">
                            Don't have an account yet ? 
                            <span 
                                onClick={this.onRegisterClick}
                                href="#0" 
                                className="f6 link blue underline dim ml1 pointer"> 
                                Register Now
                            </span>
                        </div>
                    </form>
                </main>
            </div>
        );
    }
}


export default Signin;