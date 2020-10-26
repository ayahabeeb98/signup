import React, { Component } from "react";
//
import Grid from 'react-css-grid'
// import { faGoogle , faTwitter , faLinkedIn , faGithub} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Vector from '../../img/Vector.svg';
import eyeSlash from '../../img/eyeSlash.svg';
import google from '../../img/google.png';
import twitter from '../../img/twitter.png';
import linkedIn from '../../img/linkedIn.png';
import github from '../../img/github.png';


class Form extends Component{
    state = {
        isAgree: true,
        isInformed:false,
        email: "",
        password: "",
        isPassShow:false,
    };

    handleInputChange = e => {
        // const target = e.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const email = target.email;
        //
        // this.setState({
        //     [email]: value
        // });
    };


    handleSubmit = event => {
        alert('Welcome');
        event.preventDefault();
    };

    passwordVisibility =()=>{
        const {isPassShow} = this.state;
        this.setState({isPassShow : !isPassShow})
    };

    render() {
        const {isPassShow} = this.state;
        return (
        <>
            <h2 className={'text-center mainHeader'}>Join the game!</h2>
            <p className={'text-center subHeader'}>Go inside the best gamers social network!</p>
            <Grid width={20}>
                <div className={'socialWrapper'}>
                    <div className="socialIcon">
                        <img src={google} alt=""/>
                    </div>
                    <div className="socialIcon">
                        <img src={twitter} alt=""/>
                    </div>
                    <div className="socialIcon">
                        <img src={linkedIn} alt=""/>
                    </div>
                    <div className="socialIcon">
                        <img src={github} alt=""/>
                    </div>
                </div>
            </Grid>

            <p className={'divider'}>Or</p>
            <form onSubmit={this.handleSubmit}>
                <label className={'formGroup'}>
                    Your email
                    <input
                        className={'mb'}
                        placeholder={'Write your email'}
                        type="email"
                        name={'email'}
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                </label>

                <label className={'formGroup'}>
                    Choose a password
                    <input
                        placeholder={'•••••••••'}
                        type={(isPassShow) ? "text" : "password"}
                        name={'password'}
                        value={this.state.password}
                        onChange={this.handleInputChange} />
                </label>
                <img src={`${isPassShow ? {eyeSlash} : {Vector}}`} alt=" " onClick={this.passwordVisibility} />

                <label className={'formGroup--custom'}>
                    <input
                        name="isAgree"
                        type="checkbox"
                        checked={this.state.isAgree}
                        onChange={this.handleInputChange} />
                    I agree to <a href='#'>terms & conditions</a>

                </label>
                <label className={'formGroup--custom'}>
                    <input
                        name="isInformed"
                        type="checkbox"
                        checked={this.state.isInformed}
                        onChange={this.handleInputChange} />
                    I’d like being informed about latest news and tips

                </label>

                <div className={'formGroup--custom'}>
                    <input type="submit" value="Sign up for free" />

                </div>
                <p className={'text-center last-p'}>Do you already have an account? <a href='#'>Log in </a></p>
            </form>
        </>
    )}
}

export default Form;

