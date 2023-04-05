import {FC} from "react"
import styles from '../admin-home.module.scss'
import CountUsers from './CountUsers'
import PopularProject from "./PopularProject";

const Statistics: FC = () => {
	return (
		<div className={styles.statistics}>
			<PopularProject />
			<CountUsers />
		</div>
	)
};

export default Statistics;
