import { screen, render } from '@testing-library/react';
import RepositoriesSummary from './RepositoriesSummary';


test('displays information about the repository', () => {
  const mockedRepository = {
    language: 'Javascript',
    stargazers_count: 10,
    forks: 905,
    open_issues: 6
  };
	render(<RepositoriesSummary repository={mockedRepository} />);
	//LOOP testing
	for (let key in mockedRepository) {
		const value = mockedRepository[key];
		const element = screen.getByText(new RegExp(`\\b${value}\\b`));

    expect(element).toBeInTheDocument();
	}
});

// test('displays the primary language of the repository', () => {
//   render(<RepositoriesSummary repository={mockedRepository}/>)

//   const language = screen.getByText('Javascript')
//   expect(language).toBeInTheDocument()
// })

// test('displays number of stargazer on the repository', () => {
//   render(<RepositoriesSummary repository={mockedRepository}/>)
//   const stars = screen.getByText(10)
//   expect(stars).toBeInTheDocument();
// })
