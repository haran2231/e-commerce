// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     useEffect(() => {
//         // Check session or token validity
//         const checkAuth = async () => {
//             try {
//                 await axios.get('https://e-commerce-916t.onrender.com/api/auth/check', { withCredentials: true });
//                 setIsAuthenticated(true);
//             } catch (error) {
//                 setIsAuthenticated(false);
//             }
//         };
//         checkAuth();
//     }, []);

//     return (
//         <AuthContext.Provider value={{ isAuthenticated }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthContext;
