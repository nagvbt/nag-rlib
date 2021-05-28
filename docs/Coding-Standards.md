# Coding Standards

## 1. Unit Testing and Code Coverage

### React Testing Library

This Project uses react-testing-library for unit testing refer https://testing-library.com/docs/react-testing-library/intro/
Code Coverage will be measured by writing the tests for the components.

* Use command `yarn test:dev` to know the test coverage
* One can view the detailed test coverage report from the `/coverage/lcov-report/index.html`

Other Libraries that are used are described below.

**a. Add React Testing Library** [Refer](https://github.com/testing-library/react-testing-library)

It is a very lightweight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices.

**b. Add DOM Testing Library** [Refer](https://github.com/testing-library/dom-testing-library#readme)

The DOM Testing Library is a very light-weight solution for testing DOM nodes.

**c. Add Jest-Dom** [Refer](https://github.com/testing-library/jest-dom#readme)

The @testing-library/jest-dom library provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.

**d. Add user-event** [Refer](https://github.com/testing-library/user-event)

user-event tries to simulate the real events that would happen in the browser as the user interacts with it. For example userEvent.click(checkbox) would change the state of the checkbox.
