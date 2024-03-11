import { useState } from 'react';
import { InputSearch, ButtonSearch } from './SearchBox.styled';

const Form = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query });
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputSearch
        type='text'
        placeholder='Search'
        autoFocus
        value={query}
        onChange={handleSearchParams}
      />
      <ButtonSearch type="submit" disabled={!query}>
        Search
      </ButtonSearch>
      </form>
  );
};

export default Form;
