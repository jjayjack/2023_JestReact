import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepositoriesListItem from './RepositoriesListItem';

function renderComponent() {
	const mockedRepository = {
		full_name: 'RepoMocked',
		language: 'Python',
		description:
			'Pariatur exercitation excepteur officia minim proident minim sit magna commodo commodo cillum',
		owner: 'John Doe',
		name: 'Amet quis aute labor',
		html_url: 'https://github.com/lorem_testing'
	};
	render(
		<MemoryRouter>
			<RepositoriesListItem repository={mockedRepository} />
		</MemoryRouter>
	);
}
test('shows a link to the GitHub homepage for this repo', async () => {
	renderComponent();
	await screen.findByRole('img', {name: 'Python'});
});

const pause = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 100);
	});
};
