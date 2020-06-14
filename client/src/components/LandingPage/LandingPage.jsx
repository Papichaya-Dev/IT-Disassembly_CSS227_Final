import React, { Component } from 'react';
import styled from 'styled-components';

const Rectangle = styled.div`
	width: 100%;
	height: 100vh;
	background-color: black;
	background-image: url("https://media.giphy.com/media/bZQvimlS7kuGc/giphy.gif");
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const Maincontainer = styled.p`
	position: absolute;
	top: 50%;
`;
const Nameweb = styled.p`
	font-family: 'IM Fell French Canon SC', serif;
	font-size: 20px;
	color: white;
	margin-top: -360px;
	margin-left: 25px;
	letter-spacing: 0.10rem;
`;
const Rectangle_text = styled.p`
	font-family: 'IM Fell French Canon SC', serif;
	font-size: 20px;
	color: whitesmoke;
	margin-top: 230px;
	margin-left: 180px;
	letter-spacing: 0.10rem;
`;

const Rectangle_text2 = styled.p`
	font-family: 'DM Serif Display', serif;
	font-size: 50px;
	color: white;
	font-weight: 100;
	margin-top: -20px;
	margin-left: 180px;
`;
const Rectangle_text3 = styled.p`
	font-family: 'DM Serif Display', serif;
	font-size: 50px;
	color: white;
	font-weight: 100;
	margin-top: -50px;
	margin-left: 180px;
`;
const Rectangle_text4 = styled.p`
	font-family: 'DM Serif Display', serif;
	font-size: 50px;
	color: white;
	font-weight: 100;
	margin-top: -50px;
	margin-left: 180px;
`;
const Button_login = styled.div`
	font-family: 'DM Serif Display', serif;
	border: 2px solid white;
	padding: 0.2rem;
	color: white;
	width: 150px;
	height: 50px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 300ms ease-in-out;
	margin-left: 750px;
	margin-top: 40px;
	letter-spacing: 0.1rem;
	transition: transform .2s;
	opacity: 0.8;

	&:hover {
		background-color: white;
		color: black;
		cursor: pointer;
	}
`;
const Button_Register = styled.div`
	font-family: 'DM Serif Display', serif;
	border: 2px solid white;
	padding: 0.2rem;
	color: white;
	width: 150px;
	height: 50px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 300ms ease-in-out;
	margin-top: -50px;
	margin-left: 550px;
	opacity: 0.8;
	letter-spacing: 0.1rem;

	&:hover {
		background-color: white;
		color: black;
		cursor: pointer;
	}
`;

class Landing extends Component {
	onClickLogin() {
		console.log('hello');
		this.props.history.push('/login');
	}
	onClickRegister() {
		console.log('hello');
		this.props.history.push('/register');
	}
	render() {
		return (
			<div>
				<Rectangle>
					<Maincontainer>
						<Nameweb>ITD.</Nameweb>
						<Rectangle_text>WELCOME TO ITDISMEMBER</Rectangle_text>
						<Rectangle_text2>ITDismember is community </Rectangle_text2>
						<Rectangle_text3>about people who interest in news , </Rectangle_text3>
						<Rectangle_text4>article ,review about computer.</Rectangle_text4>
						<Button_login onClick={() => this.onClickLogin()}>LOGIN</Button_login>
						<Button_Register onClick={() => this.onClickRegister()}>SIGNUP</Button_Register>
					</Maincontainer>
				</Rectangle>
			</div>
		);
	}
}

export default Landing;