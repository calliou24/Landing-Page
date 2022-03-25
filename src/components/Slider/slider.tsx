import { motion } from 'framer-motion';
import styles from './slider.module.css';
import { testimonials } from './Data/data';
import Button from '../Button/button';

function Slider() {
	return (
		<div className={styles.sliderCont}>
			<h3 className={styles.title}>What they've said</h3>
			<motion.ul
				drag="x"
				dragConstraints={{
					left: -500,
					right: 500
				}}
				className={styles.slider}
			>
				{testimonials.map(({ id, img, name, content }) => (
					<motion.li whileTap={{ scale: 1.1, zIndex: 1000 }} className={styles.testimonial} key={id}>
						<img className={styles.profileImg} src={img} alt={name} />
						<div>
							<p className={styles.testimonialName}>{name}</p>
							<p className={styles.text}>{content}</p>
						</div>
					</motion.li>
				))}
			</motion.ul>
			<div className={styles.buttonCont}>
				<Button />
			</div>
		</div>
	);
}

export default Slider;
