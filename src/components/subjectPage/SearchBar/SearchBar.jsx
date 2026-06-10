import "./SearchBar.css";

function SearchBar() {
    return (
        <div className="search-bar-container">
            <input
                type="text"
                className="search-input"
                placeholder="🔍 Search chapters or topics..."
            />
        </div>
    );
}

export default SearchBar;