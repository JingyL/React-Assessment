### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a front-end framework
- What is Babel?
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers 

- What is JSX?
JSX is like HTML embedded in JavaScript

- How is a Component created in React?
We use Class or Function to create components

- What are some difference between state and props?
Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.

- What does "downward data flow" refer to in React?
Downward data flow is the idea that parent components pass data down to their children via props. 

- What is a controlled component?
A controlled component is a component that renders form elements and controls them by keeping the form data in the component's state.

- What is an uncontrolled component?
An uncontrolled component is a component that renders form elements, where the form element's data is handled by the DOM (default DOM behavior).

- What is the purpose of the `key` prop when rendering a list of components?
React uses the key prop create a relationship between the component and the DOM element. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
An index would be unique but it would not be stable since the array can mutate and indices can shift around.

- Describe useEffect.  What use cases is it used for in React components?
By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). 

- When would you use a ref? When wouldn't you use one?
Accessing an underlying DOM element
Setting up / clearing timers

- What is a custom hook in React? When would you want to write one?
Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. You can make hooks to abstract logic,
handle repeated tasks and generate your own JSX.