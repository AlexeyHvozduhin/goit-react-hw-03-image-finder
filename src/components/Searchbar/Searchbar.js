export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(event.target.childNodes[1].value);
  };

  return (
    <header className="searchbar" onSubmit={handleSubmit}>
      <form className="searchform">
        <button type="submit" className="button SearchForm-button">
          <span className="button-label SearchForm-button-label">Search</span>
        </button>

        <input
          className="input SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
