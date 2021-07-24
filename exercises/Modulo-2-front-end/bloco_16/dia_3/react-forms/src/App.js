
import { Provider } from 'react-redux';
import store from './store';
import Form from './components/form';

function App() {
  return (
    <Provider store={ store }>
      <>
        <Form />
      </>
    </Provider>
  );
}

export default App;
