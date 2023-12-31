import { useId } from 'react';
import { useFilters } from '../hooks/useFilters.jsx';

export function Filters() {
  const minPriceFilterId = useId();
  const categoryFilterId = useId();
  const { filters, setFilters } = useFilters();

  const handleMinPriceChange = event => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }));
  };

  const handleCategoryChange = event => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }));
  };

  return (
    <section className='filters-container'>
      <div className='filter'>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleMinPriceChange}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div className='filter'>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          id={categoryFilterId}
          onChange={handleCategoryChange}
        >
          {[
            'All',
            'Home Decoration',
            'Laptops',
            'Smartphones',
            'Fragrances',
            'Skincare',
            'Groceries'
          ].map((category, index) => (
            <option
              key={index}
              value={category.toLowerCase()}
            >
              {category}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
