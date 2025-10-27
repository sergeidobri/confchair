import { type NavigateFunction, type NavigateOptions } from 'react-router-dom';

let navigate: NavigateFunction | null = null;

export const setNavigate = (nav: NavigateFunction) => {
  navigate = nav;
};

export const navigateTo = (to: string, options?: NavigateOptions) => {
  if (navigate) {
    navigate(to, options);
  } else {
    console.warn('Navigation not initialized. Falling back to window.location');
    window.location.href = to;
  }
};