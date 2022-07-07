import { useEffect } from 'react';
import styles from './Dock.module.css';

const Links = [
	{
		name: "About",
		href: "#main",
		icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
	}, {
		name: "Skills",
		href: "#skills",
		icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
	}, {
		name: "Projects",
		href: "#projects",
		icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
	}
]

export function Dock() {
	return (
		<div className={styles["container"]}>
			<div className={styles['dockContainer']} >
				{
					Links.map(link => (
						<div className={styles['linkParentContainer']} key={link.name}>
							<div className={styles["tooltip"]}>
								<span>{link.name}</span>
							</div>
							<div className={styles["linkContainer"]} >
								<a href={link.href}>
									<span>
										{link.icon}
									</span>
								</a>
							</div>
						</div>
					))
				}
			</div>
		</div>
	)
}
