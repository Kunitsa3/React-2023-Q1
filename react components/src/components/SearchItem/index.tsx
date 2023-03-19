import { ChangeEvent, FC } from 'react';
import './style.css';

interface SearchItemProps {
  onUpdateSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  searchString: string;
}

const SearchItem: FC<SearchItemProps> = ({ onUpdateSearch, searchString }) => {
  return (
    <div className="search-item-wrapper">
      <input
        className="search-item-input"
        placeholder="Search for books"
        value={searchString}
        onChange={onUpdateSearch}
      />
    </div>
  );
};

export default SearchItem;
