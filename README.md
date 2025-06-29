# React Food Delivery App

A modern React application built with Parcel bundler, featuring a food delivery interface with restaurants, menu items, and cart functionality.

## 🚀 Features

- **Restaurant Listing**: Browse through various restaurants
- **Menu Display**: View detailed restaurant menus
- **Shopping Cart**: Add/remove items with Redux state management
- **Responsive Design**: Built with Tailwind CSS
- **Testing**: Unit tests with Jest and React Testing Library
- **Modern Bundling**: Fast development with Parcel
- **GitHub Pages**: Deployed and ready to view

## �️ Tech Stack

- **Frontend**: React 19, React Router Dom
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS, Styled Components
- **Bundler**: Parcel
- **Testing**: Jest, React Testing Library
- **Icons**: React Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd react-food-delivery-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:1234](http://localhost:1234) to view it in the browser.

## 🏗️ Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run test:watch` - Runs tests in watch mode
- `npm run test:coverage` - Runs tests with coverage report
- `npm run deploy` - Builds and deploys to GitHub Pages

## 📁 Project Structure

```
src/
├── Components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Body.js         # Main content area
│   ├── RestaurantCard.js # Restaurant display cards
│   ├── RestaurantMenu.js # Individual restaurant menu
│   ├── Cart.js         # Shopping cart
│   └── __tests__/      # Component tests
├── utils/              # Utility functions and hooks
│   ├── appStore.js     # Redux store configuration
│   ├── cartSlice.js    # Cart state management
│   └── constants.js    # App constants
└── App.js              # Main app component
```

## 🎯 Learning Journey

This project was built as part of a React learning journey, covering:

- Day 1: HTML, JavaScript DOM, React fundamentals
- Day 2: NPM, Parcel bundler, production builds
- Day 3: JSX, functional components, component composition
- Advanced React patterns and state management
- Testing strategies and implementation
- Deployment with GitHub Pages

## 🌐 Live Demo

Visit the live application: [GitHub Pages Deployment](https://yourusername.github.io/react-food-delivery-app/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built during React learning journey
- Inspired by modern food delivery applications
- Thanks to the React community for excellent documentation and resources

---

*Happy coding! 🚀*
- Difference between:
  - `{TitleComponent}`
  - `{<TitleComponent />}`
  - `{<TitleComponent></TitleComponent>}`
- Create `Header Component`:
  - Left: Logo
  - Middle: Search Bar
  - Right: User Icon
  - Add CSS styling

### 🔗 References:

- [Babel](https://babeljs.io)
- [HTML Script Types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type)
- [JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Babel Playground](https://babeljs.io/repl)
- [React Without JSX](https://reactjs.org/docs/react-without-jsx.html)

### ✅ Demo:

- [Header Component Demo](https://header-assignment.netlify.app/)

---

## 🍽️ Day 4 - Building the Baseplate

### 🔧 Food App Layout:

- Build a `Food Ordering App`:
  - Decide app name
  - Create `AppLayout`
  - `Header` with Logo, Nav, Cart
  - `Body` component:
    - `RestaurantList`
    - `RestaurantCard`:
      - Use static data
      - Convert to dynamic via `props`, destructuring
      - Render using `Array.map()`



- [Food App Layout](https://food-app-basic-layout.netlify.app/)

---

## 🧲 Day 5 - Getting Hooked

### 🧠 Theory:

- Export types: `Named`, `Default`, `* as`
- What are `React Hooks`?
- Why `useState` is used?

### 🔧 Coding:

- Clean code structure
- Move components to separate files
- Create a `config.js`
- Try all import/export types
- Add filter button for restaurants
- Use `useState` to control button

---

## 🌍 Day 6 - Journey Through Effects

### 🧠 Theory Assignments:

- What is `Microservice`?
- What is `Monolith`?
- Monolith vs Microservice
- What is `useEffect`?
- What is `Optional Chaining`?
- What is `Shimmer UI`?
- Difference between `JS Expression` vs `JS Statement`
- Explain `Conditional Rendering` (with example)
- What is `CORS`?
- What is `async/await`?
- Why use `await data.json()`?

### 🔧 Coding:

- Play with `useEffect` (log order)
- Try different `dependency arrays`
- Use `debugger` in render/useEffect
- Call real API using fetch
- Handle fetch errors
- Show shimmer UI when loading
- Render UI with API data
- Add search functionality
- Create login/logout button via state

---

## 🧭 Day 7 - Routing the Right Way

### 🧠 Theory:

- How to add images in React (code examples)
- What happens on `console.log(useState())`?
- Behavior of `useEffect` without deps
- What is `SPA`?
- Difference: `Client-side` vs `Server-side` routing

### 🔧 Coding:

- Add shimmer without external library
- Install `react-router-dom`
- Create `appRouter`:
  - `Home`, `About`, `Contact` (nested routes)
- Add `Error page`
- Create dynamic restaurant route (using `params`)
- (Optional): Add Login Page using `Formik`

### 🔗 References:

- [React Router DOM](https://reactrouter.com/en/main)
- [Client Side Routing](https://reactrouter.com/en/main/start/overview)
- [Formik](https://formik.org/)

---

## 🏛️ Day 8 - Going Classy

### 🧠 Theory:

- Lifecycle order in class components
- Use of `componentDidMount`, `componentWillUnmount`
- Why use `super(props)` in constructor?
- Why `useEffect` callback shouldn’t be async?

### 🔧 Coding:

- Build `class-based` parent & child components
  - Pass props
  - Add constructor + state
  - Update state using `this.setState`
  - Handle multiple state vars
  - Log lifecycle methods
- Add `setInterval` in `componentDidMount`
  - Cleanup using `clearInterval`

---

## 📦 App Component Structure

```txt
App
├── Header
│   ├── Logo
│   ├── Nav Items
│   └── Cart
├── Body
│   ├── Search Bar
│   └── Restaurant Container
│       └── Restaurant Card
│           ├── Image
│           ├── Name, Rating, Cuisine
│           └── Delivery Time
└── Footer
    ├── Copyright
    ├── Links
    ├── Address
    └── Contact




## ⚙️ Day 9 - Performance & Splitting

### 🧠 Theory:
- Single Responsibility Principle
- Code Splitting (lazy loading components)
- `React.lazy()` and `<Suspense>`
- Creating Custom Hooks for modular logic :contentReference[oaicite:1]{index=1}

### 🔧 Coding:
- Split large components using `React.lazy()`
- Wrap lazy components with `<Suspense fallback={...}>`
- Create a custom hook, e.g., `useOnlineStatus()`
- Refactor fetch logic into hooks

---

## 🎨 Day 10 - UI Styling Essentials

### 🧠 Theory:
- Styling methods: CSS, SASS/SCSS, styled-components, external UI libs
- Pros & Cons of Tailwind CSS :contentReference[oaicite:2]{index=2}
- Understanding `tailwind.config.js` keys: `content`, `theme`, `plugins` :contentReference[oaicite:3]{index=3}

### 🔧 Coding:
- Install Tailwind CSS
- Build responsive UI using Tailwind
- Use utility-first classes in JSX

---

## 🔄 Day 11 - Data is the New Oil

### 🧠 Theory:
- Higher Order Components (HOC)
- Controlled vs Uncontrolled components
- Lifting state and Prop drilling
- Using Context API for state sharing

### 🔧 Coding:
- Build a HOC for logging or error boundary
- Transform a form component into controlled
- Lift shared state to parent
- Use `React.createContext()` and `useContext()`

---

## 🛒 Day 12 - Building Our Store

### 🧠 Theory:
- Redux Toolkit setup
- `createSlice`, store configuration, React-Redux integration

### 🔧 Coding:
- Install Redux Toolkit & React-Redux
- Create `cartSlice` with actions and reducer
- Wrap app with `<Provider store={store}>`
- Dispatch and select cart state in components

---

## 🧪 Day 13 - Testing Time

### 🧠 Theory:
- Testing strategies: unit, integration, end-to-end
- Using Jest and React Testing Library

### 🔧 Coding:
- Install testing libs (`jest`, `@testing-library/react`)
- Write unit test for a utility function
- Write integration test for a component with interaction

### 📜 Example Test:
```js
import { render, fireEvent } from '@testing-library/react';
import RestaurantCard from '../components/RestaurantCard';

test('renders restaurant info and handles click', () => {
  const res = { name: 'Pizza Place', rating: 4.5 };
  const { getByText } = render(<RestaurantCard data={res} />);
  expect(getByText(/Pizza Place/)).toBeInTheDocument();
});
