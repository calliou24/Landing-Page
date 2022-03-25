import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import styles from './footer.module.css';

// Form Toast
import 'react-toastify/dist/ReactToastify.css';

// Social Media Icons
import { Logo } from './icons/logo';
import { Facebook, Youtube, Twitter, Pinterest, Instagram } from './icons/icons';

function Card() {
	return (
		<div className={styles.card}>
			<div className={styles.cardContent}>
				<h3 className={styles.cardTitle}>
					Simplify how your team
					<br />
					works today.
				</h3>
				<button className={styles.buttonGetStarted}>Get Started</button>
			</div>
		</div>
	);
}

function Form() {
	const [ inputValue, setInputValue ] = useState('');
	const [ validEmail, setValidEmail ] = useState(false);

	const handdleSubmit = (e: any) => {
		e.preventDefault();
		if (validEmail) return toast('Thank You ⭐❤️');
	};

	useEffect(
		() => {
			console.log(validEmail);
			const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (emailRegex.test(inputValue)) return setValidEmail(true);
			return setValidEmail(false);
		},
		[ inputValue ]
	);

	return (
		<div className={styles.formCont}>
			<form onSubmit={(e) => handdleSubmit(e)} className={styles.form}>
				<input
					placeholder="Enter Your Email"
					onChange={(e) => setInputValue(e.target.value)}
					className={styles.input}
					type="text"
				/>
				<button className={styles.buttonSubmit} type="submit">
					Go
				</button>
			</form>
			{inputValue.length > 1 ? (
				<span id={validEmail ? styles.validEmail : styles.invalidEmail} className={styles.validationText}>
					{validEmail ? 'Valid Email' : 'Invalid Email'}
				</span>
			) : (
				''
			)}
			<ToastContainer />
			<span className={styles.copyright}>Copyright 2020, All Rights Reserved</span>
		</div>
	);
}

function Footer() {
	const socialMediaIcons = [ <Facebook />, <Youtube />, <Twitter />, <Pinterest />, <Instagram /> ];

	return (
		<footer className={styles.footerCont}>
			<Card />
			<div className={styles.footer}>
				<div className={styles.frsCont}>
					<Logo />
					<div className={styles.mediaCont}>
						{socialMediaIcons.map((e) => <div className={styles.iconCont}>{e}</div>)}
					</div>
				</div>
				<div className={styles.scdCont}>
					<ul className={styles.list}>
						<li className={styles.item}>Home</li>
						<li className={styles.item}>Pricing</li>
						<li className={styles.item}>Products</li>
						<li className={styles.item}>About Us</li>
					</ul>
					<ul className={styles.list}>
						<li className={styles.item}>Careers</li>
						<li className={styles.item}>Community</li>
						<li className={styles.item}>Privacy Policy</li>
					</ul>
				</div>
				<div className={styles.thrCont}>
					<Form />
				</div>
			</div>
		</footer>
	);
}

export default Footer;
