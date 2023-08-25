import {
  BrowserRouter, Routes, Route, Outlet, Link,
} from 'react-router-dom';
import AddNewBook from './components/AddNewBook';
import BookCard from './components/BookCard';
import BookList from './components/BookList';
import './App.css';

function Layout() {
  return (
    <main>
      <section className="navSection">
        <h1>Cool Bookstore</h1>
        <ul className="navstyle">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<div>If page not found it goes here</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
