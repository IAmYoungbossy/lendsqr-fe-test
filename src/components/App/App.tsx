import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import DashboardLayout, {
  HomeLayout,
} from "../../Layouts/Layouts";
import UserPage from "../../pages/UserPage";
import LoginPage from "../../pages/LoginPage";
import Dashboard from "../../pages/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<HomeLayout />}
    >
      <Route
        index
        element={<LoginPage />}
      />
      <Route
        path="dashboard"
        element={<DashboardLayout />}
      >
        <Route
          index
          element={<Dashboard />}
        />
        <Route
          path="user/:id"
          element={<UserPage />}
        />
      </Route>
    </Route>
  )
);

const App = () => (
  <div className="App">
    <RouterProvider router={router} />
  </div>
);

export default App;
