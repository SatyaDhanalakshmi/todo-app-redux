import Todos from './Todo/Todos.jsx';

import {Provider} from 'react-redux';
import store from './Todo/store.jsx'
function App() {
 return(
  <>
   <Provider store={store}>
      <Todos/>
   </Provider>
    
   
  </>
 )
 
}

export default App
