import React from 'react';

const SidebarSelect = ({ selectItems, handleSelect }) => (
	<select onChange={handleSelect}>
		{
			selectItems.map((item, index) => (
				<option key={index} value={index}>{item.name}</option>	
			))
		}
	</select>
);

export default SidebarSelect;