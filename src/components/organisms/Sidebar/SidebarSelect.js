import React from 'react';
import styles from './styles.module.scss'

const SidebarSelect = ({ selectItems, handleSelected, defaultValue }) => (
	<select className={styles.sidebarSelect} onChange={handleSelected} defaultValue={defaultValue}>
		{
			selectItems.map((item, index) => (
				<option key={index} value={item}>
					{item}
				</option>	
			))
		}
	</select>
);

export default SidebarSelect;