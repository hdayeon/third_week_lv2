import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import reportWebVitals from "./reportWebVitals";  -> **CRA엔 있고 여긴 없던 코드
import store from './redux/config/configStore.js'
import { Provider } from 'react-redux'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
    <App />
  </Provider>
);

// **웹 애플리케이션의 성능 측정을 시작하는 함수
// reportWebVitals();

