import Navbar from './components/main/Navbar';
// import './App.css'

const App = () => {
  return (
    <>
    <header>
      <h1>
        <img src="./assets/favicon" alt="" /> Your Page Title
      </h1>
      <Navbar/>
    </header>
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
