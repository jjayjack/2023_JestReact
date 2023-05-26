# React Testing Library & JEST

## About

Within this application, JEST testing within React application reviewed.

## Table of Content

[Testing Steps](#testing-steps)

[Testing Library](#testing-library)

[Resources](#resources-for-testing)

[React](#getting-started-with-create-react-app)

---

### **Testing Steps**

1. Pick out one component to test all by itself

2. Make a test file for the component if one does not exist

3. Decide what the important parts of the component are

4. Write a test to make sure each part works as expected

-   Step 1: Render the component

    -   render()

-   Step 2: Manipulate the component or find an element in it

    -   screen

-   Step 3: Make an assertion -- make sure component is acting the way we expect

    -   expect()

5. Run tests at the command line

---

### **Testing Library: Query**

<!-- prettier-ignore -->
| Manipulate the component      | or | Find an Element     |
| :---        |    :----:   |          ---: |
| screen.getByRole( ) | screen.findAllByDisplayValue( ) | screen.queryAllByRole( ) |
| screen.queryByRole( )   | screen.findByRole( )        | screen.queryByLabelText( )      |
| screen.findAllByTitle( )   | screen.findByTitle( )        | screen.getByLabelText( )    |
| screen.logTestingPlaygroundURL( )   |         |     |

 <!-- prettier-ignore-end -->

<!-- prettier-ignore -->
| Start of Function Name      | Examples| 
| :---        |    :---   |
| getBy | getByRole, getByText | 
| getAllBy   | getAllByText, getByDisplayValue | 
| queryBy     | queryByDisplay, queryByTitle |
| queryAllBy   | queryAllByTitle, queryAllByText        | 
| findBy   | findByRole, findByText  |   
| findAllBy | findAllByText, findAllByDisplayValue |

 <!-- prettier-ignore-end -->

These names included the following:

1.  Whether the function will return an element or an array of elements.
2.  What happens if the function finds 0, 1, or > 1 of the targeted element
3.  Whether the function runs instantly (synchronously) or looks for an element over a span of time

---

**Looking for a Single Element?**

 <!-- prettier-ignore -->

| Name    | 0 Matches | 1 Match | > 1 Match |                     Notes                      |
| :------ | :-------: | :-----: | :-------: | :--------------------------------------------: |
| getBy   |   Throw   | Element |   Throw   |                                                |
| queryBy |   null    | Element |   Throw   |                                                |
| findBy  |   Throw   | Element |   Throw   | Looks for an Element over the span of 1 second |

<!-- prettier-ignore-end -->

**Looking for Multiple Element?**

 <!-- prettier-ignore -->

| Name       | 0 Matches |  1 Match  | > 1 Match |                     Notes                      |
| :--------- | :-------: | :-------: | :-------: | :--------------------------------------------: |
| getAllBy   |   Throw   | []Element | []Element |                                                |
| queryAllBy |    [ ]    | []Element | []Element |                                                |
| findAllBy  |   Throw   | []Element | []Element | Looks for an Element over the span of 1 second |

 <!-- prettier-ignore-end -->

**When to use each**

 <!-- prettier-ignore -->

| Goal of test                           | Use                 |
| :------------------------------------- | :------------------ |
| Prove an element exists                | getBy, getAllBy     |
| Prove an element does not exist        | queryBy, queryAllBy |
| Make sure an element eventually exists | findBy, findAllBy   |

 <!-- prettier-ignore-end -->

---

**Querying for Elements with Different Criteria**

React Testing Library provides many different query functions. Each begins with a name like `getBy`, `findBy`, etc. The names also have common endings. The different name endings indicate how the query for an element will be performed.

 <!-- prettier-ignore -->

| End of Function Name | Search Criteria                                                    |
| :------------------- | :----------------------------------------------------------------- |
| ByRole               | Finds elements based on their implicit or explicit ARIA role       |
| ByLabelText          | Find form elements based upon the text their paired labels contain |
| ByPlaceHolderText    | Find form elements based upon their placeholder text               |
| ByText               | Find form elements based upon the text they contain                |
| ByDisplayValue       | Find elements based upon their current value                       |
| ByAltText            | Find elements based upon their `alt` attribute                     |
| ByTitle              | Find elements based upon their `title` attribute                   |
| ByTestId             | Find elements based upon their `data-testid` attribute             |

 <!-- prettier-ignore-end -->

**When to Use Each**

Always prefer using query function ending with `ByRole`. Only use others if `ByRole` is not an option.

[**ARIA Roles Defined**](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

-   ARIA Roles clarify the purpose of an HTML element

-   Traditionally used by screen readers

    -   Softwares to help people understand the content on the screen

-   Many HTML elements have an 'implicit', or automatically assigned, role

-   Elements can be manually assigned a role. Even trained engineers do this incorrectly.

[**Finding the Role: Testing Playground URL**](https://testing-playground.com/)

-   Sometimes finding elements by role just does not work well

-   Tip: Do not obsess over getting the 'right' query

-   Two 'escape hatches'

    -   Ways to find elements when the preferred 'role' approach does not work

        1: `data-testid` (Preferred)

        2: `container.querySelector()`

**Testing Library: User Event**

<!-- prettier-ignore -->
| User Events      |  |      |
| :---        |    :----:   |          ---: |
| user.click(element)| &rarr; | Simulates clicking on the provided element |
| user.keyboard('asdf')   |&rarr;        | Simulates typing 'asdf'  |
| user.keyboard('{Enter}')   | &rarr;        | Simulates pressing the ENTER key  |

 <!-- prettier-ignore-end -->

### **Matchers**

Matchers help make sure that avalue is what we expect it to be.

A project generated by Create React App has access to all the matchers included in Jest, as well as matchers defined in the @testing-library/jest-dom package.

[**Jest Matchers**](https://jestjs.io/docs/using-matchers)

Testing just about anything

<!-- prettier-ignore -->
| Matchers from Jest      |  |      |
| :---        |    :----:   |          ---: |
| expect(['a','b']).toHaveLength(2)| &rarr; | Make sure the value is an array with a particular length |
| expect(5).toEqual(5)   |&rarr;        | Validates the value equals another value  |
| expect(['a','b','c']).toContain('b)   | &rarr;        | Makes sure an array contains a value, or make sure a string contains another string    |
| expect(fn).toThrow()   | &rarr;        | Makes sure a function throws an error when called    |
| expect(mock).toHaveBeenCalled()   | &rarr;        | Makes sure a mock function has been called    |

 <!-- prettier-ignore-end -->

[**React Testing Library Matchers**](https://github.com/testing-library/jest-dom#custom-matchers)

<!-- prettier-ignore -->
| Matchers from React Testing Library      |  |      |
| :---        |    :----:   |          ---: |
| expect(element).toBeInTheDocument()| &rarr; | Make sure element is present on the page |
| expect(element).toBeEnabled()   |&rarr;        | Makes sure an element (like an input) is not disabled |
| expect(element).toHaveClass()   | &rarr;        | Makes sure an element has a class name    |
| expect(element).toHaveTextContent()   | &rarr;        | Makes sure an element has some particular text    |
| expect(element).toHaveValue()   | &rarr;        | Makes sure an input, select, or textarea has a value    |

 <!-- prettier-ignore-end -->

[**Custom Matchers**]

[**Router Testing**]

<!-- prettier-ignore -->
|Router |Uses|Notes|
| :--- |    :----:   | :--- |
| BrowserRouter| Stores current URL in the address bar | |
| HashRouter | Stores current URL in the # part of the address bar | |
| MemoryRouter | Stores current URL in memory | Many blog posts recommend using this for testing purposes. |

<!-- prettier-ignore-end -->

_act() Warnings_

-   Frustrating because you need to understand 3-4 different topics to understand the warning

-   Will occur frequently if you're doing data fetching in useEffect

-   Functions that _automatically_ call 'act' for you. This is the preferred way of using 'act' when using React-Testing-Library

    -   screen.findBy
    -   screen.findAllBy
    -   waitFor
    -   user.keyboard
    -   user.click

**Important Items**

1. Unexpected state updates in tests are bad

2. The act function defines a window in time where state updates can (and should) occur

3. React Testing Library uses 'act' behind the scenes for you

4. To solve act warnings, you should use a `findBy`. **Usually** you do not want to follow the advice of the warning

**Options for Solving Act Warnings**

1. Use a `findBy` or `findAllBy` to detect when the component has finished its data fetching
2. Use an `act` to control when the data-fetching request gets resolved.
3. Use a module to avoid rendering the troublesome component
4. Use an `act` with a `pause`

```
1:
await screen.findByRole('img', {name: 'Python'});

2:

3:
jest.mock('../tree/FileIcon.js', () => { return () => { return 'File Icon Component' }; });

4:
const pause = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 100);
	});
};

await act(async () => {
		await pause();
	})

```

---

**Mock Functions**

-   In English, 'mock' can mean 'not real'

-   Fake function that does NOT do anything

-   Records whenever it gets called, and the arguments it was called with

-   Used very often when we need to make sure a component calls a callback

---

### **Resources for Testing**

1. @testing-library/react

Uses ReactDOM to render a component for testing

2. @testing-library/user-event

Helps simulate user input like typing and clicking

3. @testing-library/dom

Helps find elements that are rendered by components

4. jest

Runs tests, reports results

Finds all files in the src folder that:

-   End with .spec.js

-   End with .test.js

-   Are placed in a folder called `__test__`

5. jsdom

Simulates a browser when running in a Node environment

---

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

###### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

###### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

###### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

###### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

###### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

###### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

###### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

###### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

###### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

###### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting##npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting##npm-run-build-fails-to-minify)
