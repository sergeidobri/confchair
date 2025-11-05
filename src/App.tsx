import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { Routes, Route, useNavigate } from 'react-router';
import { LoginPage } from './pages/auth/LoginPage/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage/RegisterPage';
import { ProtectedRoute } from './components/layout/ProtectedRoute';
import { useEffect } from 'react';
import { setNavigate } from './api/apiClient';
import ConfirmEmailSentPage from './pages/auth/ConfirmEmailSentPage/ConfirmEmailSentPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmEmailPage from './pages/auth/ConfirmEmailPage/ConfirmEmailPage';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);

  return (
    <>
      <Header />
      <main>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
          <Route path="/auth/confirm-email-sent" element={<ConfirmEmailSentPage />} />
          <Route
            path="/auth/recover"
            element={
              <ProtectedRoute>
                <main>Заглушка</main>
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/auth/confirm-email" element={<ConfirmEmailPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
