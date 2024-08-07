import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartShopping, faSignOutAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../CartContext';
import axios from 'axios';

const Header = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const fetchUserProfile = async () => {
            const userId = localStorage.getItem('userId');

            if (!userId) {
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(`https://e-commerce-916t.onrender.com/api/auth/profile/${userId}`, { withCredentials: true });
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user profile', error);
                setUser(null);
                setError('Failed to fetch user profile');
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    const handleLogout = async () => {
        try {
            await axios.post('https://e-commerce-916t.onrender.com/api/auth/logout', {user}, { withCredentials: true });
            setUser(null);
            localStorage.removeItem('userId');
            localStorage.removeItem('token');
            navigate('/');
        } catch (error) {
            console.error('Error logging out', error);
            alert('Failed to log out');
        }
    };

    return (
        <nav className="sticky top-0 z-10 py-6 text-white bg-black">
            <div className="flex items-center justify-between pb-2 mx-5 mt-5 md:mx-0 md:justify-evenly md:mt-2">
                <div>
                    <Link to="/home">
                        <img src="/path-to-your-logo.png" className="mt-5 md:mt-0" alt="LOGO" />
                    </Link>
                </div>
                <ul className="items-center hidden gap-8 md:flex">
                    <li className="font-bold menu"><Link to="/home">Home</Link></li>
                    <li className="font-bold menu"><Link to="/blog">Blog</Link></li>
                    <li className="font-bold menu"><Link to="/contact">Contact</Link></li>
                </ul>
                <ul className="items-center hidden gap-10 md:flex">
                    <Link to="/home#search" aria-label="Search"><FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
                    <Link to="/profile" aria-label="Profile"><FontAwesomeIcon icon={faUser} /></Link>
                    <div className="relative">
                        <Link to="/cart" aria-label="Cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
                        {cart.length > 0 && (
                            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                                {cart.length}
                            </span>
                        )}
                    </div>
                    <button onClick={handleLogout} className="font-bold" aria-label="Logout">
                        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                    </button>
                </ul>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="block md:hidden">
                    <FontAwesomeIcon icon={faBars} className="w-6 h-6 mt-5" />
                </button>
            </div>
            {mobileMenuOpen && (
                <div className="md:hidden">
                    <ul className="flex flex-col items-center gap-4 mt-4">
                        <li className="font-bold menu"><Link to="/home" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                        <li className="font-bold menu"><Link to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link></li>
                        <li className="font-bold menu"><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
                        <li className="font-bold menu"><Link to="/profile" onClick={() => setMobileMenuOpen(false)}>Profile</Link></li>
                        <li className="font-bold menu"><Link to="/cart" onClick={() => setMobileMenuOpen(false)}>Cart</Link></li>
                        <li className="font-bold menu">
                            <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }}>
                                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                            </button>
                        </li>
                    </ul>
                </div>
            )}
            {loading && <p className="text-center text-white">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
        </nav>
    );
};

export default Header;
