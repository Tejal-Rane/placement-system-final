import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import AddStudent from "./pages/admin/AddStudent";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import HomePage from "./pages/HomePage";
import AdminRoute from "./routes/AdminRoute";
import PublicRoute from "./routes/PublicRoute";
import { setToken, setUser } from "./redux/features/authSlice";
import CreateProfile from "./pages/student/CreateProfile";
import AddNotice from "./pages/admin/AddNotice";
import AddPlacement from "./pages/admin/AddPlacement";
import AllStudentsTable from "./pages/admin/AllStudentsTable";
import AllDrivesTable from "./pages/student/AllDrivesTable";
import ViewProfile from "./pages/ViewProfile";
import Home from "./comment-section/Home";
import Viewdrive from "./pages/student/Viewdrive";
import MainPage from "./pages/MainPage";
import About from "./pages/AboutUs";
import Navbar from "./pages/Navbar";
import Contact from "./pages/Contact";
import Viewnotice from "./pages/Viewnotice";
const App = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alert);

  useEffect(() => {
    console.log(localStorage.getItem("authToken"));
    localStorage.getItem("authToken")
      ? dispatch(setUser(JSON.parse(localStorage.getItem("authToken"))?.user))
      : dispatch(setUser(null));

    localStorage.getItem("authToken")
      ? dispatch(setToken(JSON.parse(localStorage.getItem("authToken"))?.token))
      : dispatch(setToken(""));
  }, []);

  if (!loading) {
    return (
      <>
       

        <Routes>
        <Route
            path="/"
            element={
              <PublicRoute>
              <Navbar/>
                <MainPage/>
              </PublicRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PublicRoute><Layout/>
                <Contact/>
              </PublicRoute>
            }/>
            <Route
            path="/login"
            element={
              <PublicRoute>
              <Navbar/>
                <Login/>
              </PublicRoute>
            }
          />
          
           <Route
            path="/about"
            element={
              <PublicRoute>
              <Navbar/>
                <About/>
              </PublicRoute>
            }
          />
          
          <Route path="/homepage" element={<HomePage />} />
          <Route
            path="/admin/add-student"
            element={
              <AdminRoute>
              <Layout/>
                <AddStudent />
              </AdminRoute>
            }
          />
          <Route path="/view-drive/:id"
          element={
            <PrivateRoute><Layout/>
              <Viewdrive/>
            </PrivateRoute>
          }/>

          <Route
            path="/admin/all-students"
            element={
              <AdminRoute><Layout/>
                <AllStudentsTable />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/add-notice/"
            element={
              <AdminRoute><Layout/>
                <AddNotice />
              </AdminRoute>
            }
            
          />
          <Route
            path="/admin/add-drive/"
            element={
              <AdminRoute><Layout/>
                <AddPlacement />
              </AdminRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                
              <Layout/>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/student/all-drives"
            element={
              <PrivateRoute><Layout/>
                <AllDrivesTable />
              </PrivateRoute>
            }
          />
          <Route
            path="/student/view-profile/:id"
            element={
              <PrivateRoute><Layout/>
                <ViewProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/chat-forum"
            element={
              <PrivateRoute><Layout/>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/create-profile"
            element={
              <PrivateRoute><Layout/>
                <CreateProfile />
              </PrivateRoute>
            }
          />
            <Route
            path="/view-notice"
            element={
              <PrivateRoute><Layout/>
                <Viewnotice />
              </PrivateRoute>
            }
          />
          <Route
            path="/student/update-profile/:id"
            element={
              <PrivateRoute><Layout/>
                <CreateProfile />
              </PrivateRoute>
            }
          />
        </Routes>
      </>
    );
  } else {
    return (
      <>
        <Layout></Layout>
        <h1>Loading...</h1>;
      </>
    );
  }
};

export default App;
