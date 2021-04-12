import React, {useState} from 'react';

function Form({search}) {
	const [city, setCity] = useState('');

	const handleSearch = e => {
		setCity(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		search(city.toLowerCase());
	};

	return (
		<form onSubmit={e => handleSubmit(e)}>
			<label htmlFor="city">
				Y a-t-il une gare dans la ville de / commençant par{' '}
			</label>
			<input
				type="text"
				id="city"
				value={city}
				onChange={e => handleSearch(e)}
			/>
			<input type="submit" value="?" />
		</form>
	);
}

export default Form;
