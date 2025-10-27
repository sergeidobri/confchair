import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { setNavigate } from "./utils/navigate";
import { useEffect } from "react";
import { LoginPage } from "./pages/auth/LoginPage/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage/RegisterPage";
import { ProtectedRoute } from "./components/layout/ProtectedRoute";

function App() {
  let navigate = useNavigate();

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
