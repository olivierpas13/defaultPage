import { Header } from './components/header/headerStyles';
import Navbar from './components/navbar/Navbar';
// import './App.css'

const App = () => {
  return (
    <>
    <Header>
      <Navbar/>
    </Header>
    <main>
      <section>
        Main section
      </section>
    </main>
    <footer>
    footer content
    <ul>
      <li>Twitter</li>
      <li>IG</li>
      <li>Facebook</li>
    </ul>
    </footer>
    </>
  );
};

export default App;
