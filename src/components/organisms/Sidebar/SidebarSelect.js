import React from 'react';
import styles from './styles.module.scss'

const SidebarSelect = ({ selectItems, handleSelected }) => (
	<select className={styles.sidebarSelect} onChange={handleSelected}>
		{
			selectItems.map((item, index) => (
				<option key={index} value={index}>{item}</option>	
			))
		}
	</select>
);

export default SidebarSelect;