import { Outlet, useNavigate } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import Header from '@components/layout/Header/Header';
import Footer from '@components/layout/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { setNavigate } from '@utils/navigate';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setNavigate((path: string) => navigate({ to: path }));
  }, [navigate]);
  return (
    <QueryClientProvider client={queryClient}>
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
        <Outlet />
        <TanStackRouterDevtools />
      </main>
      <Footer />
    </QueryClientProvider>
  );
};
