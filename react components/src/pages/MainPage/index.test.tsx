import MainPage, { searchEmp } from '.';
import each from 'jest-each';
import { render, screen } from '@testing-library/react';
import { books } from '../../helpers/data';

describe('MainPage', () => {
  each([
    ['', 'e514929d-211d-4ddb-bcaa-128ae3b801d2'],
    ['Зыгарь', '3c2beb64-7add-490a-ba6a-4950dcf64f3b'],
    ['Исследование', '856b1864-ebf4-4cfa-8de7-d0380ba2e0ba'],
    ['Форрест', 'cf10b621-66b1-454f-aecc-fc7db1d78d0e'],
  ]).test('searchEmp returns books filtered by %s', (searchString, expected) => {
    expect(searchEmp(books, searchString)[0].id).toEqual(expected);
  });

  test('main page should render search bar', () => {
    render(<MainPage />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
