## About

This [live react app](https://boring-elion-8ade1f.netlify.app/) retrieves exchange rate info from https://exchangeratesapi.io/ and displays a dropdown menu for users to select and view rates for various currencies against 1 USD.

## Approach

I used Test Driven Development (TDD) to develop the app.

Firstly, I thought of the various features required for the app and then I broke down the implementation for each feature into smaller steps.

For example, to implement the feature of having a currency rate displayed by default, I broke down the steps into (1) displaying nothing when data hasn't been retrieved from the API and (2) displaying the first key-value pair by default when data has been retrieved.

Next, I wrote out the test case for each step before working on the code required to implement the step.

## Takeaways

I was discouraged initially when I ran into the confusing “not wrapped in act” errors halfway during the development process. Despite spending a lot of time googling for answers and trying out fixes, the errors persisted.

Working my way around the problem, I thought of leaving out the tests which mocked React's useState hook and just mocking the API. The idea was successful - and I learnt that for nested components (eg. `<CurrencyDropdown/>` in `<App/>`), I need to take care when mocking react hooks (especially useState and maybe useeffect) because the mocks were useful initially but caused problems with testing when the nested component relied on the same hooks.

Subsequently, I grew to appreciate the value of TDD when the tests were able to pick up simple errors that I would have missed otherwise such as assuming that an empty object evaluates to false in the expression below:

```
Object.keys(rates).length !== 0
          ? selectedRate
            ? `${rates[selectedRate]} ${selectedRate}`
            : `${rates[Object.keys(rates)[0]]} ${Object.keys(rates)[0]}`
          : ""}
```
