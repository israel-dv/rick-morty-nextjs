# Rick and Morty 🧪 Next JS ⚛

Project of Rick and Morty build with [NextJS](https://nextjs.org/) using the public GraphQL API from [Rick and morty](https://rickandmortyapi.com/)

# Deployment 🚀

This project was deploy on [Vercel](https://vercel.com), you can check it on this link:  
https://rick-morty-vest-perh4g8en-israel-dv.vercel.app/

## Stack 📚

- NextJS
- Typescript
- TailwindCSS
- GraphQL

## Resources

- [Apollo Client to use GraphQL](apollographql.com/docs/react/)
- [Rick & Morty API](https://rickandmortyapi.com/)

## Settings Project ⚙️

- ESLint
- Prettier

## Run Project Locally 🏃🏻‍♂️

Execute the next commands

```bash
yarn add
...
yarn dev
```

You and see the project on: [localhost:3000](http://localhost:3000/)

# How did I build this project? 🤔

- 🔨 To build this project, I decided to use NextJS for the performance it offers and Tailwind for the ease of use it has to build elements with CSS.
- ⛷ I also decided to use GraphQL because of the speed and efficiency it has when making the API calls, it is faster than REST and above all something that I like a lot is that it allows me to decide what specific data of an API call are what I want.
  I made use of the React Context API, to be able to maintain the active state of the filter that allows searching in Episodes, Locations and Characters. It was easy, maybe not the best way but the most optimal for my needs in this project.
- 🧑🏻‍💻 Create two customHooks, one to facilitate the use of the pager on all pages and the other to keep data stored in the browser session, this hook is not very essential since I decided not to use it in characters and episodes, only in locations, as for a better user experience, but it really doesn't matter much.
- ❌ Finally, create a view called Error, this view only shows an error state, I decided to put it as a view and not as a component, since its function is only to show something static, I don't know if it was the best alternative but I base it on that to decide what a view is. (View! == Page)
