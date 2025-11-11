import { usersApi } from "@api/users/api";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

// export const useLoadUser = () => {
//   const token = useAuthStore((state) => state.accessToken);
//   const user = useAuthStore((state) => state.user);

//   const setUser = useAuthStore((state) => state.setUser);

//   useEffect(() => {
//     if (!user && token) {
//       usersApi
//         .getUser()
//         .then((userData) => {
//           setUser(userData);
//         })
//         .catch((err) => {
//           console.error('Failed to load user', err);
//         });
//     }
//   }, [user, setUser]);
// };

let isFetchingUser = false;

export const useLoadUser = () => {
  // const token = useAuthStore((state) => state.accessToken); 
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (user) return;

    if (isFetchingUser) {
      return;
    }

    isFetchingUser = true;

    usersApi
      .getUser()
      .then((userData) => {
        setUser(userData);
      })
      .catch((err) => {
        console.error('Failed to load user', err);
      })
      .finally(() => {
        isFetchingUser = false;
      });
  }, [user, setUser]);
};