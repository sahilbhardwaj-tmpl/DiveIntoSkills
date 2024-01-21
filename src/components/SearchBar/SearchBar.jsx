import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./SearchBarStyles.css";
import { FaSearch } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResultDialog, setShowResultDialog] = useState(false);
  const handleResultItemClick = () => {
    setShowResultDialog(false);
  };
  useEffect(() => {
    setIsLoading(true);
    const delay = setTimeout(() => {
      if (searchTerm.trim()) {
        fetchData(searchTerm);
      } else {
        setSearchResults([]);
      }
    }, 1000);

    return () => clearTimeout(delay);
  }, [searchTerm]);

  const fetchData = async (query) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://diveintoskill.onrender.com/similar/${query}`
      );
      setSearchResults(response.data);
      console.log("no data");
    } catch (error) {
      toast.error("No result found");
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
      setShowResultDialog(true);
    }
  };
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          className="search-bar-input"
          type="text"
          placeholder="Type to search . . . . ."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="search-icon">
          {
            <FaSearch
              className="fa"
              style={{ width: "40px", height: "30px", color: "yellow" }}
            />
          }
        </span>
      </div>
      {searchTerm != "" && (
        <div
          className="result-dialog-box"
          style={{
            textAlign: "center",
            display: showResultDialog ? "block" : "none",
          }}
        >
          {isLoading ? (
            <ClipLoader color="#FCEE21" loading={true} size={60} />
          ) : searchResults.length === 0 ? (
            <p className="No-result-found">No result found</p>
          ) : (
            <ul className="search-result-ul">
              {searchResults.map((result) => (
                <li key={result.id}>
                  <Link
                    to={`/SinglePost/${result.id}`}
                    onClick={handleResultItemClick}
                  >
                    {result.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
