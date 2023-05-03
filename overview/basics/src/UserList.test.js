import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

//Step 1: Render the component & any props
function renderComponent() {
	const users = [
		{ name: 'Jane', email: 'Jane@email.com' },
		{ name: 'Mark', email: 'Mark@email.com' }
	];
	render(<UserList users={users} />);
	return {
		users
	};
}

test('it renders one row per user', () => {
	//Step 1: Render the component & any props
	renderComponent();

	//Step 2: Manipulate the component or find an element in it
	const rows = within(screen.getByTestId('users')).getAllByRole('row');

	//Step 3: Make an assertion - make sure component is acting the way we expect
	expect(rows).toHaveLength(2);
});

test('it renders email and name of each user', () => {
	const { users } = renderComponent();

	for (let user of users) {
		const name = screen.getByRole('cell', { name: user.name });
		const email = screen.getByRole('cell', { name: user.email });

		expect(name).toBeInTheDocument();
		expect(email).toBeInTheDocument();
	}
});
