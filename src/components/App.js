import React, {useState, useEffect} from 'react';

import Form from './Form';
import StationsList from './StationsList';
import Footer from './Footer';
import './App.css';

function App() {
	const [request, setRequest] = useState('');
	const [prevRequest, setPrevRequest] = useState('');
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [cities, setCities] = useState([]);

	useEffect(() => {
		if (request === '') {
			return;
		}
		if (request === prevRequest) {
			return;
		}
		fetch(
			`https://ressources.data.sncf.com/api/records/1.0/search/?dataset=liste-des-gares&q=${request}&lang=fr`
		)
			.then(response => {
				return response.json();
			})
			.then(
				data => {
					setCities(data.records);
					setIsLoading(false);
					setError(false);
					setPrevRequest(request);
				},
				error => {
					setIsLoading(false);
					setError(true);
					setCities([]);
				}
			);
	}, [request, prevRequest]);

	if (isLoading === false && error === null) {
		return (
			<div
				style={{
					backgroundImage: `url(${
						process.env.PUBLIC_URL + '/assets/ghost-station.jpg'
					})`
				}}
				id="app"
			>
				<main>
					<Form
						search={city => {
							setRequest(city);
							setIsLoading(true);
						}}
					/>
				</main>
				<Footer />
			</div>
		);
	}

	if (isLoading === true && request === prevRequest) {
		window.location.reload();
	}

	if (isLoading === true && request !== prevRequest) {
		return (
			<div
				style={{
					backgroundImage: `url(${
						process.env.PUBLIC_URL + '/assets/ghost-station.jpg'
					})`
				}}
				id="app"
			>
				<main>
					<Form
						search={city => {
							setRequest(city);
							setIsLoading(true);
						}}
					/>
					<p>Recherche en cours...</p>
				</main>
				<Footer />
			</div>
		);
	}

	if (isLoading === false && error === true) {
		return (
			<div
				style={{
					backgroundImage: `url(${
						process.env.PUBLIC_URL + '/assets/ghost-station.jpg'
					})`
				}}
				id="app"
			>
				<main>
					<Form
						search={city => {
							setRequest(city);
							setIsLoading(true);
						}}
					/>
					<p>Erreur : service non disponible</p>
					<button onClick={() => window.location.reload()}>
						Rafraîchir
					</button>
				</main>
				<Footer />
			</div>
		);
	}

	if (isLoading === false && error === false && cities.length === 0) {
		return (
			<div
				style={{
					backgroundImage: `url(${
						process.env.PUBLIC_URL + '/assets/ghost-station.jpg'
					})`
				}}
				id="app"
			>
				<main>
					<Form
						search={city => {
							setRequest(city);
							setIsLoading(true);
						}}
					/>
					<p>
						Aucune gare n'a été trouvée dans la ville que vous recherchez.
					</p>
					<button onClick={() => window.location.reload()}>
						Rafraîchir
					</button>
				</main>
				<Footer />
			</div>
		);
	}

	if (isLoading === false && error === false && cities.length > 0) {
		return (
			<div
				style={{
					backgroundImage: `url(${
						process.env.PUBLIC_URL + '/assets/ghost-station.jpg'
					})`
				}}
				id="app"
			>
				<main>
					<Form
						search={city => {
							setRequest(city);
							setIsLoading(true);
						}}
					/>
					<StationsList cities={cities} />
					<button onClick={() => window.location.reload()}>
						Rafraîchir
					</button>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;
