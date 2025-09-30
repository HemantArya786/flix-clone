// HeadBar.jsx
import { useLocation } from "react-router-dom";

export default function HeadBar() {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/shows":
        return "TV Shows";
      case "/movies":
        return "Movies";
      case "/games":
        return "Games";
      case "/new-and-popular":
        return "New & Popular";
      case "/my-list":
        return "My List";
      case "/browse-by-language":
        return "Browse by Languages";
      default:
        return "";
    }
  };

  const title = getPageTitle();

  if (!title) return null; // Agar title empty hai toh kuch bhi mat dikhana

  return (
    <div className=" py-4 bg-black text-white flex items-center justify-between">
      <h1 className="text-3xl font-bold">{title}</h1>

      {/* Right side (Optional buttons jaise Genre, Grid/List toggle) */}
      {location.pathname === "/shows" && (
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 border border-gray-500 rounded">
            Genres
          </button>
          <div className="flex space-x-2">
            <button className="border border-gray-500 px-3 py-2">≡</button>
            <button className="border border-gray-500 px-3 py-2">▦</button>
          </div>
        </div>
      )}
    </div>
  );
}
