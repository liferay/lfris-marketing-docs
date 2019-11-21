import React from 'react';

const SidebarSelect = ({ selectItems, handleSelect }) => (
	<select onChange={handleSelect}>
		{
			selectItems.map((item, index) => (
				<option key={index} value={item.name}>{item.name}</option>	
			))
		}
	</select>
);

export default SidebarSelect;