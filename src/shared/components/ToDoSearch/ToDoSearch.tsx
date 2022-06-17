import { useTodoContext } from "../../hooks/UseTodoContext";
import "./ToDoSearch.scss";

function ToDoSearch() {
  const { searchValue, setSearchValue } = useTodoContext();

  const onSearchValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchValue(e.target.value);
    console.log("searchValue", searchValue);
  };

  return (
    <input
      type="text"
      onChange={onSearchValueChange}
      value={searchValue}
      placeholder="Type to search a ToDo item &#8981;"
    />
  );
}

export { ToDoSearch };
