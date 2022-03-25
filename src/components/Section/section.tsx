import styles from './section.module.css';
import Button from '../Button/button';

import illustration from '../../assets/images/illustration-intro.svg';

function Section() {
	const data = [
		{
			id: '01',
			title: 'Track company-wide progress',
			content:
				'See how your day-to-day task fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.'
		},
		{
			id: '02',
			title: 'Advanced built-in reports',
			content:
				'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key strokeholders informed.'
		},
		{
			id: '03',
			title: 'Everything you need in one place',
			content:
				'Stop jumping from one service to another to communicate, store files, track and share documents. Manage offers an all-in-one team productivity solution.'
		}
	];

	return (
		<section className={styles.section}>
			<article className={styles.frArt}>
				<div className={styles.frArtContent}>
					<h1 className={styles.frArtTitle}>Bring everyone together to build better products.</h1>
					<p className={styles.frArtText}>
						Manage makes it simple for software teams to plan day-to-day task while keeping the larger team
						goals in view.
					</p>
					<Button />
				</div>
				<div className={styles.imgCont}>
					<img className={styles.img} src={illustration} alt="illustration" />
				</div>
			</article>
			<article className={styles.scdArt}>
				<div className={styles.scdArtContent}>
					<h2 className={styles.scdArtTitle}>What's different about Manage?</h2>
					<p className={styles.scdArtText}>
						Manage provides all the functionaliity your team needs, without the complexity. Our software is
						tailor-made for modern digital product team.
					</p>
				</div>
				<div className={styles.listCont}>
					<ul className={styles.list}>
						{data.map(({ id, title, content }) => (
							<li className={styles.item} key={id}>
								<div className={styles.titleCont}>
									<span className={styles.id}>{id}</span>
									{title}
								</div>
								<div className={styles.listText}>{content}</div>
							</li>
						))}
					</ul>
				</div>
			</article>
		</section>
	);
}

export default Section;
