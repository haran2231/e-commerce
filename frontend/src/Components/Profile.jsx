import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        mobile: '',
        gender: '',
        address: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // Retrieve userId from local storage
    const userId = localStorage.getItem('userId'); // Ensure 'userId' is the correct key

    useEffect(() => {
        fetchUserProfile();
    }, [navigate, userId]);

    const fetchUserProfile = async () => {
        try {
            if (!userId) {
                throw new Error('User ID not found');
            }
            const response = await axios.get(`http://localhost:5000/api/auth/profile/${userId}`, { withCredentials: true });
            setUser(response.data);
            setFormData({
                name: response.data.username || '',
                email: response.data.email || '',
                mobile: response.data.mobile || '',
                gender: response.data.gender || '',
                address: response.data.address || ''
            });
            setLoading(false);
        } catch (error) {
            console.error('Error fetching user profile', error);
            if (error.response && error.response.status === 401) {
                navigate('/login'); // Redirect to login if the user is not authenticated
            } else {
                setError('Failed to load profile. Please try again.');
            }
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/api/auth/profile/${userId}`, formData, { withCredentials: true });
            alert('Profile updated successfully!');
            fetchUserProfile();
        } catch (error) {
            console.error('Error updating profile', error);
            alert('Failed to update profile. Please try again.');
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <>
            <Header />
            <div className="container p-4 mx-auto">
                <h1 className="mb-4 text-2xl font-bold">Profile</h1>
                {user ? (
                    <div>
                        <h2 className="mb-4 text-xl font-semibold">User Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <p><strong>Name:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Mobile:</strong> {user.mobile}</p>
                            <p><strong>Gender:</strong> {user.gender}</p>
                            <p><strong>Address:</strong> {user.address}</p>
                        </div>

                        <h2 className="mt-8 mb-4 text-xl font-semibold">Edit Profile</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block mb-1 text-sm font-medium" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium" htmlFor="mobile">Mobile</label>
                                <input
                                    type="text"
                                    id="mobile"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium" htmlFor="gender">Gender</label>
                                <select
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium" htmlFor="address">Address</label>
                                <textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 text-white transition bg-black rounded hover:bg-gray-800"
                            >
                                Save Changes
                            </button>
                        </form>
                    </div>
                ) : (
                    <p>No user data available.</p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Profile;
