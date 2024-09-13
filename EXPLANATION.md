## My approach
- I started by installing and running the status quo, before setting up the GitHub Repository, documenting the original state.
- I am trying to get the basic functionality done, to then refactor & improve
- now that Header, Menu and Footer are functional and the basic styling is working, I start refactoring App.js, by extracting the smaller components (Select and ProductGrid/Products)
- to extract the filter and sort logic from the App, I create a Redux productsSlice to manage the state and its permutations
- to make buttons more manageable and looking alike, I extracted them into an atom
- to make the code base better maintainable and extendable, I added test cases for the productSclice, where all the logic is happening

## Challenges
- the pictures are not loading because of CORS, I chose to copy them locally, for the purpose of this demonstration
- the App.css wasn't loaded and I was getting crazy over the styles not being applied
- without design it's hard to tell, what exactly is expected from the styling perspective

## Trade-offs (/TODOS)
- using some style library like tailwind would make the whole styles more maintainable
- for now there's a lot of atoms that could get extracted
- the product cards look a bit sad (fast fix: display color as color square or circle or similar)
- currently there is no routing
- the css is not scoped -> I should have taken more time to plan this in advance
- 