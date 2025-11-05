import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/auth/LoginPage/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage/RegisterPage";
import { ProtectedRoute } from "./components/layout/ProtectedRoute";
import ConfirmEmailPage from "./pages/auth/ConfirmEmailSentPage/ConfirmEmailSentPage";

function App() {
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
            path="/auth/confirm-email-sent"
            element={<ConfirmEmailPage />}
          />
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
