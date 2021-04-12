import React from 'react';

function Footer() {
	return (
		<footer
			style={{
				fontSize: '0.9rem',
				fontStyle: 'italic'
			}}
		>
			<a href="https://www.flickr.com/photos/33772123@N03/4905262313">
				ghost station
			</a>
			<span>
				{' '}
				by{' '}
				<a href="https://www.flickr.com/photos/33772123@N03">
					Matthias Rhomberg
				</a>
			</span>{' '}
			is licensed under{' '}
			<a
				href="https://creativecommons.org/licenses/by/2.0/?ref=ccsearch&atype=html"
				style={{marginRight: '5px'}}
			>
				CC BY 2.0
			</a>
			<a
				href="https://creativecommons.org/licenses/by/2.0/?ref=ccsearch&atype=html"
				target="_blank"
				rel="noopener noreferrer"
				style={{
					display: 'inline-block',
					whiteSpace: 'none',
					marginTop: '2px',
					marginLeft: '3px',
					height: '22px'
				}}
			>
				<img
					style={{
						height: 'inherit',
						marginRight: '3px',
						display: 'inline-block'
					}}
					src={process.env.PUBLIC_URL + '/assets/cc_icon_white_x2.png'}
					alt=""
				/>
				<img
					style={{
						height: 'inherit',
						marginRight: '3px',
						display: 'inline-block'
					}}
					src={
						process.env.PUBLIC_URL +
						'/assets/attribution_icon_white_x2.png'
					}
					alt=""
				/>
			</a>
		</footer>
	);
}

export default Footer;
