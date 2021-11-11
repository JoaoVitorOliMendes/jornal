import logo from './logo.svg';
import './sass/App.scss';
import Jornal from './components/Jornal';
import { SidenavComponent } from './components/Sidenav/index';

function App() {
  return (
    <div>
      <SidenavComponent />
      <Jornal />
    </div>
  );
}

export default App; 
