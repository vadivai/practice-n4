import { Container, Header, SearchForm, Section, Text } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectTodos } from '../../redux/selectors';
import { TodoList } from 'components/TodoList/TodoList';
import { fetchAllTodos } from '../../redux/operations';
import { useEffect } from 'react';
import { setFilter } from '../../redux/filterSlice';

export const App = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <input
            type="text"
            value={filter}
            onChange={e => dispatch(setFilter(e.target.value))}
          />
          <SearchForm />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
