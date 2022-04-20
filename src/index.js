import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import reducers from "./Reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
// import { SidebarProvider } from './context/SidebarContext';

import ThemedSuspense from './components/ThemedSuspense'
import { Windmill } from '@windmill/react-ui'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    {/* <SidebarProvider> */}
    <Suspense fallback={<ThemedSuspense />}>
      <Windmill usePreferences>
        <App />
      </Windmill>
    </Suspense>
    {/* </SidebarProvider> */}
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
