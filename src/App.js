import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Components/Error";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import UserContext from "../utils/UserContext";
import { useState, useEffect } from "react";

// Lazy loading components for better performance
const About = lazy(() => import("./Components/About"));
const Contact = lazy(() => import("./Components/Contact"));
const Grocery = lazy(() => import("./Components/Grocery"));
const RestaurantMenu = lazy(() => import("./Components/RestaurantMenu"));
const Cart = lazy(() => import("./Components/Cart"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "SnackStack User",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
], {
  basename: process.env.NODE_ENV === 'production' ? '/SnackStack' : '/'
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
