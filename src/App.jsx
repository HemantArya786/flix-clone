import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import SigninPage from "./pages/SigninPage";
import Navbar from "./components/Navbar.jsx";
import ShowsPage from "./pages/ShowsPage.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";
import GamesPage from "./pages/GamesPage.jsx";
import BrowseByLanguages from "./pages/BrowseByLanguages.jsx";
import MyListPage from "./pages/MyListPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Title from "./components/Title";
import NewAndPopularPage from "./pages/NewAndPopularPage.jsx";


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />

      {/* Page content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/shows" element={<ShowsPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/games" element={<GamesPage />} />
                    <Route path="/new-and-popular" element={<NewAndPopularPage />} />

          <Route path="/browse-by-langauage" element={<BrowseByLanguages />} />
          <Route path="/my-list" element={<MyListPage />} />
          <Route path="*" element={<NotFoundPage />} />
          {/* <Route path="/home" element={<HomePage />} /> */}
          <Route
            path="/home"
            element={
              <>
                <Title text="Home | Netflix" />
                <HomePage />
              </>
            }
          />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
