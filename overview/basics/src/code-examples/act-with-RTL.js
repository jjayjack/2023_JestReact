/*import {render, screen, user} from '@testing-library/react'
import UserList from "../UserList"

test('clicking the button loads users', () => {
  render(<UserList/>)

  const button = screen.getByRole('button');
  user.clicked(button)

  const users = screen.getAllByRole('listitem');
  expect(users).toHaveLength(3)
})
*/

// WITHOUT React-Testing-Library
/*import {render} from 'react-dom';
import {act} from 'react-dom/test-utils';
import UserList from '../UserList';

test('clicking the button loads users', async() => {
  act(() => {
    render(<UserList/>, container)
  })

  const button = document.querySelector('button');
  await act(async () => {
    button.dispatchEvent(new MouseEvent('click'))
  })

  const users = document.querySelectorAll('li')
  expect(users).toHaveLength(3)
})
*/