import './style.css';
import { books } from '../../helpers/data';
import Book, { BookProps } from '../../components/Book';
import { ChangeEvent, Component } from 'react';
import SearchItem from '../../components/SearchItem';

export function searchEmp(bookInformation: BookProps[], searchString: string) {
  if (searchString.length === 0) {
    return bookInformation;
  }

  return bookInformation.filter((element) => {
    return (
      element.name.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ||
      element.author.toLowerCase().indexOf(searchString.toLowerCase()) > -1 ||
      element.description.toLowerCase().indexOf(searchString.toLowerCase()) > -1
    );
  });
}

class MainPage extends Component {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      searchString: localStorage.getItem('search') || '',
    };

    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.storeInLocalStorage = this.storeInLocalStorage.bind(this);
  }

  state = { searchString: '' };

  storeInLocalStorage() {
    localStorage.setItem('search', this.state.searchString);
  }

  componentDidMount() {
    this.setState({ searchString: localStorage.getItem('search') || '' });
    window.addEventListener('beforeunload', this.storeInLocalStorage);
  }

  componentWillUnmount() {
    this.storeInLocalStorage();
    window.removeEventListener('beforeunload', this.storeInLocalStorage); // remove the event handler for normal unmounting
  }

  onUpdateSearch(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ searchString: e.target.value });
  }

  render() {
    const { searchString } = this.state;

    const visibleBooksInformation = searchEmp(books, searchString);

    return (
      <div className="container">
        <SearchItem onUpdateSearch={this.onUpdateSearch} searchString={searchString} />
        {visibleBooksInformation.map((element) => (
          <Book
            name={element.name}
            author={element.author}
            description={element.description}
            pictureLink={element.pictureLink}
            key={element.id}
          />
        ))}
      </div>
    );
  }
}

export default MainPage;
