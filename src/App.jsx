import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Home from "./components/Home/Home";
import AuthPage from "./components/AuthPage/AuthPage";
import SearchPage from "./components/SearchPage/SearchPage";
import ResultPage from "./components/ResultPage/ResultPage";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route to='/' element={<MainLayout />}>
          <Route index={true} element={<Home />} />
          <Route path='auth' element={<AuthPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='result' element={<ResultPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
