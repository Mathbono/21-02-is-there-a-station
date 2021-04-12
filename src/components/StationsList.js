import React from 'react';

function StationsList({cities}) {
	return (
		<ul>
			{cities.length > 1 && <span>{cities.length} gares trouvées !</span>}
			{cities.map(city => (
				<li key={city.recordid}>{city.fields.libelle}</li>
			))}
		</ul>
	);
}

export default StationsList;
