import { FC } from 'react';
import './style.css';

export interface BookProps {
  name: string;
  pictureLink: string;
  author: string;
  description: string;
  id?: string;
}

const Book: FC<BookProps> = ({ name, pictureLink, author, description }) => {
  return (
    <div className="book-item-full-wrapper">
      <div className="book-picture-wrapper">
        <img className="book-picture" alt="Ничего не получилось :(" src={pictureLink} />
      </div>
      <div className="book-information-wrapper">
        <p className="book-title">{name}</p>
        <p className="book-author">{author}</p>
        <p className="book-description">{description}</p>
      </div>
    </div>
  );
};

export default Book;
