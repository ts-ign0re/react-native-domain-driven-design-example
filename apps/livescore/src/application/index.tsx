import { Provider } from 'react-redux';
import { Presenter } from "../presenter";
import { store, persistedStore } from './store';
import { PersistGate } from 'redux-persist/integration/react'
import { LoadingIndicator } from "../presenter/components/loading-indicator";

export const Application = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingIndicator />} persistor={persistedStore}>
        <Presenter />
      </PersistGate>
    </Provider>
  );
}