import PropTypes from 'prop-types';
import { Form, Input, Btn, SearchIcon } from './Search.styled';

export default function Search({ defValue, onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    onSubmit(form.search.value.trim());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="search"
        type="text"
        defaultValue={defValue}
        autoComplete="off"
        placeholder="Search movies"
      />
      <Btn type="submit">
        <SearchIcon />
      </Btn>
    </Form>
  );
}

Search.propTypes = {
  defValue: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
