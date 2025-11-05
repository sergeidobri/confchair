import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { Routes, Route, useNavigate } from "react-router";
import { LoginPage } from "./pages/auth/LoginPage/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage/RegisterPage";
import { ProtectedRoute } from "./components/layout/ProtectedRoute";
import { useEffect } from 'react';
import { setNavigate } from './api/apiClient';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <main>Заглушка</main>
              </ProtectedRoute>
            }
          />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route
            path="/auth/recover"
            element={
              <ProtectedRoute>
                <main>Заглушка</main>
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
