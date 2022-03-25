import { useState } from 'react';
import Button from '../Button/button';

import logo from '../../assets/images/logo.svg';
import styles from './nav.module.css';

import { motion } from 'framer-motion';

function Nav() {
	const [ open, setOpen ] = useState(false);
	const items = [ 'Pricing', 'Product', 'About Us', 'Careers', 'Community' ];

	return (
		<nav className={styles.nav}>
			<div className={styles.imgCont}>
				<img className={styles.img} src={logo} alt="logo" />
			</div>
			<ul id={open ? styles.navOpen : styles.navClosed} className={styles.list}>
				{items.map((e) => (
					<li key={e} className={styles.item}>
						{e}
					</li>
				))}
			</ul>
			<div className={styles.buttonCont}>
				<Button />
			</div>
			<div onClick={() => setOpen(!open)} className={styles.hamburger}>
				<div id={open ? styles.bar1 : undefined} className={styles.bar} />
				<div id={open ? styles.bar2 : undefined} className={styles.bar} />
				<div id={open ? styles.bar3 : undefined} className={styles.bar} />
			</div>

			{open && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
					className={styles.modalBg}
				/>
			)}
		</nav>
	);
}

export default Nav;
