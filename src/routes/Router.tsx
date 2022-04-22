import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="about" element={<h1>About</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
