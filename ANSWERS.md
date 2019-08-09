# Answers

- [ ] What are the required parts of class components?

Really, the only essential ingredient is a `render` method. Even a `constructor` isn't strictly necessary.

- [ ] Name at least three lifecycle methods?
    - `render`
    - `componentDidMount`
    - `componentDidUpdate`

- [ ] Why are forms used so often in web applications and software?

Getting well-formed information from users who aren't willing or able to write JSON (or XML or EDN or whatever your preferred format is) manually is a very common need. If the information you need is extremely simple, just use a button. But if it's complicated and has requirements and formatting and options to be validated, forms are the best way.

- [ ] What advantages are there by using a forms library like Formik?

The default functionality that browsers use for forms is tedious to integrate into React's system of handling state, so Formik takes care of a lot of that tedium for us.

- [ ] Why do we write tests for our apps?

Because JS doesn't have the decency to have a solid type-checking system to check for erroneous behaviors, mostly. But there are lots of situations where you may want to make sure that lots of specific behaviors work properly without going through all of them manually, especially when the tests become very numerous.