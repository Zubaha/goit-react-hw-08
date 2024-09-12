import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { setFilterValue } from "../../redux/filters/slice";

function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleInputChange = (event) => {
    const name = event.target.value.trim();
    dispatch(setFilterValue(name));
  };
  return (
    <div className={css.wrapper}>
      <p className={css.title}>Find contacts by name</p>
      <input
        type="text"
        name="searchName"
        className={css.input}
        value={filterValue}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBox;
