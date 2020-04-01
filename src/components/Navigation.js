import React from 'react';

class Navigation extends React.Component{

    render(){
        return(
            <div>
                {
                this.props.isSignedin
            ?   <nav className="dt w-100 border-box pa3 ph5-ns bg-black-80 white">
                    <p className="dtc v-mid mid-gray link w-25" title="Home">
                        <img 
                            onClick={() => this.props.changeRoute('homeSignedin')}
                            src={require("./logo.png")} 
                            className="dib dim w2 h3 br-100 pointer w3 h3 bg-blue ml2" 
                            alt="Site Name" 
                        />
                    </p>
                    <div className="dtc v-mid w-75 tr">
                        <p 
                            onClick={() => this.props.changeRoute('profile')}
                            className="link dim f3-ns dib pointer mr2" 
                            title="Contact">
                            Hi, {this.props.userInfo.username}
                        </p>
                        <p 
                            onClick={() => this.props.changeRoute('signout')}
                            className="link dim f3-ns dib pointer mr2 ml4" 
                            title="Contact">
                            Signout
                        </p>
                    </div>
                </nav>
            :   <nav className="dt w-100 border-box pa3 ph5-ns bg-black-80 white">
                    <p className="dtc v-mid mid-gray link w-25" title="Home">
                        <img 
                            onClick={() => this.props.changeRoute('homeDefault')}
                            src={require("./logo.png")} 
                            className="dib dim w2 h3 br-100 pointer w3 h3 bg-blue ml2" 
                            alt="Site Name" 
                        />
                    </p>   
                    <div className="dtc v-mid w-75 tr">
                        <p 
                            onClick={() => this.props.changeRoute('signin')}
                            className="link dim f3-ns dib mr3 mr4-ns pointer" 
                            title="Store">
                            Signin
                        </p>
                        <p 
                            onClick={() => this.props.changeRoute('register')}
                            className="link dim f3-ns dib pointer mr2" 
                            title="Contact">
                            Register
                        </p>
                    </div>
                </nav>
                }
            </div>
        );
    }
}

export default Navigation;