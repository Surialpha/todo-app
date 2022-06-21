import { useTodoContext } from "../../hooks/UseTodoContext";
import "./ToDoSearch.scss";

function ToDoSearch() {
  const { searchValue, setSearchValue } = useTodoContext();

  const onSearchValueChange = (
    e: React.ChangeEvent<HTMLInputElement> | any
  ): void => {
    const value = e.target.value;
    if (!/\s{2,}/g.test(value)) {
      setSearchValue(value.trimStart());
    } else if (e.nativeEvent.inputType === "deleteContentBackward") {
      setSearchValue(value);
    }
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
