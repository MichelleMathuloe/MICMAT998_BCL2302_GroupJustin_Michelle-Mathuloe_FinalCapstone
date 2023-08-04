
import React from 'react';
import saveFavoriteToDatabase from './supabase'

const User = () => {
  const [favorites, setFavorites] = React.useState([]);
  const [newFavorite, setNewFavorite] = React.useState('');
  const [sortingType, setSortingType] = React.useState('name'); 
  const [sortingOrder, setSortingOrder] = React.useState('ascending'); 


  const handleAddFavorite = () => {
    if (newFavorite.trim() === '') return;

    if (!favorites.some((fav) => fav.name === newFavorite)) {
      const newFav = {
        name: newFavorite,
        date: new Date().toISOString(),
      };

      setFavorites([...favorites, newFav]);
      saveFavoriteToDatabase(newFav);

      setNewFavorite('');
    }
  };

  const handleRemoveFavorite = (favorite) => {
    const updatedFavorites = favorites.filter((item) => item.name !== favorite.name);
    setFavorites(updatedFavorites);
  };

  const handleSortingTypeChange = (e) => {
    setSortingType(e.target.value);
  };

  const handleSortingOrderChange = (e) => {
    setSortingOrder(e.target.value);
  };

  const handleLoggingToSupabase = () => {
    window.location.href = 'https://app.supabase.com/sign-in';
  };

  const formatDate = (date) => {

    const parsedDate = new Date(date);
    const year = parsedDate.getFullYear();
    const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
    const day = String(parsedDate.getDate()).padStart(2, '0');
    const hours = String(parsedDate.getHours()).padStart(2, '0');
    const minutes = String(parsedDate.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const sortedFavorites = favorites.slice().sort((a, b) => {
    if (sortingType === 'name') {
      if (sortingOrder === 'ascending') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    } else {
      if (sortingOrder === 'ascending') {
        return a.date.localeCompare(b.date);
      } else {
        return b.date.localeCompare(a.date);
      }
    }
  });

  return (
    <div className='epi-fave'>
      <h2 className="h2-fave">User Favorites</h2>
      <div className="add-fave">
        <input
          type="text"
          className="input-fave"
          value={newFavorite}
          onChange={(e) => setNewFavorite(e.target.value)}
          placeholder="Enter favorite item"
        />
        <button onClick={handleAddFavorite} className="btn-fave">
          Add Favorite
        </button>

      </div>

      <div>
        <label htmlFor="sortingBy"> Sort by: </label>
        <select
          id="sortingBy"
          name="sortingBy"
          value={sortingType}
          onChange={handleSortingTypeChange}
        >
          <option value="name">Name</option>
          <option value="date">Date</option>
        </select>

        <label htmlFor="sortingOrder"> Order: </label>
        <select
          id="sortingOrder"
          name="sortingOrder"
          value={sortingOrder}
          onChange={handleSortingOrderChange}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>

      <ul className="ul-fave">
        {sortedFavorites.map((favorite, index) => (
          <li key={index} className="li-fave">
            {favorite.name} (Added on {formatDate(favorite.date)}){' '}
            <button onClick={() => handleRemoveFavorite(favorite)} className="btn-fave">
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className='auth'>
        <button onClick={handleLoggingToSupabase} className='check-fave'>Favorites</button>
      </div>

    </div>
  );
};

export default User;