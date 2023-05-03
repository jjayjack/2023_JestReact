[{"content":"import { screen, render } from '@testing-library/react';\nimport { useState } from 'react';\nfunction DataForm() {\n  const [email, setEmail] = useState('email@email.com');\n  return (\n    <form>\n      <h3>Enter Data!</h3>\n      <div data-testid=\"image wrapper\">\n        <img alt=\"data\" src=\"data.jpg\" />\n      </div>\n      <label htmlFor=\"email\">Email</label>\n      <input\n        id=\"email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n      />\n      <label htmlFor=\"color\">Color</label>\n      <input id=\"color\" placeholder=\"Red\" />\n      <button title=\"Click when ready to submit\">Submit</button>\n    </form>\n  );\n}\n\nrender(<DataForm />);","type":"code","id":"jzjly"},{"content":"test('selecting different elements', () => {\n  render(<DataForm />);\n  const elements = [\n    screen.getByRole('button'),\n    screen.getByLabelText('Email'),\n    screen.getByPlaceholderText('Red'),\n    screen.getByText('Enter Data!'),\n    screen.getByDisplayValue('email@email.com'),\n    screen.getByAltText('data'),\n    screen.getByTitle('Click when ready to submit'),\n    screen.getByTestId('image wrapper'),\n  ];\n\n  for (let element of elements) {\n    expect(element).toBeInTheDocument();\n  }\n});","type":"code","id":"x9zj1"}]