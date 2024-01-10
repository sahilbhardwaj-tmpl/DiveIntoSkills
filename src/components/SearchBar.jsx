import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './SearchBarStyles.css'
function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const delay = setTimeout(() => {
            if (searchTerm.trim()) {
                fetchData(searchTerm);
            } else {
                setSearchResults([]);
            }
        }, 3000);

        return () => clearTimeout(delay);
    }, [searchTerm]);

    const fetchData = async (query) => {
        try {
            setIsLoading(true);
            const response = await axios.get(`${query}`);
            setSearchResults(response.data);
        } catch (error) {
            toast.error('Enter a valid string');
            console.error('Error fetching data:', error);

        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className='search-bar-container'>
            <div>
                <input
                    type="text"
                    placeholder="Type a letter..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className='search-button'>Search</button>
            </div>
            {searchResults.length > 0 && (
                <div className="result-dialog-box">
                    {isLoading?<h1>Loading</h1>:''}
                    <ul>
                        {searchResults.map((result) => (
                            <li key={result.id}>{result.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SearchBar
