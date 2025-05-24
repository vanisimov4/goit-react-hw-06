import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);
  const handleChangeSearch = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor={id}>Find contacts by name</label>
      <input type="text" id={id} onChange={handleChangeSearch} />
    </div>
  );
};

export default SearchBox;
