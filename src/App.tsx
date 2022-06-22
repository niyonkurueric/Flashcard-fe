import React from 'react';
import DrawerAppBar from './component/Navbar';
import Dashboard from './page/Dashboard';
import Buttonone from './component/button';
function App() {
  return (
    <div>
     <DrawerAppBar/>
     <Dashboard/>
     <Buttonone/>
    </div>
  );
}
export default App;
