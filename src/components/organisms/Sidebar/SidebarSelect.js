import React from 'react';

const SidebarSelect = ({ selectItems, handleSelected }) => (
	<select onChange={handleSelected}>
		{
			selectItems.map((item, index) => (
				<option key={index} value={index}>{item}</option>	
			))
		}
	</select>
);

export default SidebarSelect;