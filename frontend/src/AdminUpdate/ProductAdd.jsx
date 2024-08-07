import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductAdd = () => {
    const [inputs, setInputs] = useState([
        { label: 'Product Name', type: 'text', name: 'productName', className: '' },
        { label: 'Product Image', type: 'file', name: 'productImage', className: '' },
        { label: 'Price', type: 'number', name: 'price', className: '' },
        { label: 'Color', type: 'text', name: 'color', className: '' },
        { label: 'Category', type: 'text', name: 'category', className: '' }
    ]);

    const [data, setData] = useState({});
    const [products, setProducts] = useState([]);
    const [editProduct, setEditProduct] = useState(null);

    const baseUrl = 'http://localhost:5000';

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
            setData(prevData => ({ ...prevData, [name]: files[0] }));
        } else {
            setData(prevData => ({ ...prevData, [name]: value }));
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let key in data) {
            formData.append(key, data[key]);
        }

        try {
            if (editProduct) {
                // Update product
                await axios.put(`${baseUrl}/api/products/${editProduct}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                setEditProduct(null);
            } else {
                // Add new product
                await axios.post(`${baseUrl}/api/products`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            }
            console.log('Product saved successfully');
            fetchProducts(); // Refresh product list
            setData({}); // Clear form data
        } catch (error) {
            console.error('There was an error!', error);
        }
    }

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${baseUrl}/api/products`);
            setProducts(response.data);
        } catch (error) {
            console.error('There was an error fetching products!', error);
        }
    }

    const handleEdit = async (id) => {
        console.log(id);
        try {
            const response = await axios.get(`${baseUrl}/api/products/${id}`);
            setData(response.data);
            setEditProduct(id);
        } catch (error) {
            console.error('There was an error fetching product!', error);
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${baseUrl}/api/products/${id}`);
            console.log('Product deleted successfully');
            fetchProducts(); // Refresh product list
        } catch (error) {
            console.error('There was an error!', error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className='flex flex-col items-center justify-center gap-12'>
            <div className='flex justify-between w-full gap-10 px-10 py-5 bg-slate-300'>
                <h1 className='text-3xl font-semibold'>Admin Page</h1>
                <button className='px-4 py-2 text-white bg-black'>Logout</button>
            </div>
            {/* form */}
            <form onSubmit={handleSubmit} className="flex flex-col p-4 space-y-2 bg-gray-100 rounded-md">
                <h1 className='text-2xl font-semibold text-center'>{editProduct ? 'Edit Product' : 'Add Product'}</h1>
                {inputs.map((item, index) => (
                    <input
                        key={index}
                        type={item.type}
                        name={item.name}
                        placeholder={item.label}
                        value={item.type === 'file' ? undefined : data[item.name] || ''}
                        className={`p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${item.className}`}
                        onChange={handleChange}
                    />
                ))}
                <button type="submit" className='px-4 py-2 text-white bg-black rounded-md'>{editProduct ? 'Update Product' : 'Add Product'}</button>
            </form>

            {/* list */}
            <div className="flex flex-col w-3/5 p-4 space-y-2 bg-gray-100 rounded-md">
                <h1 className='text-3xl font-semibold'>List of items</h1>
                <ul>
                    {products.map((product, index) => (
                        <li key={product._id} className='flex items-center gap-3 mt-2'>
                            <p className='flex-1'>{index + 1}. {product.productName}</p>
                            <button className='px-4 py-2 text-white bg-black' onClick={() => handleEdit(product._id)}>Edit</button>
                            <button className='px-4 py-2 text-white bg-black' onClick={() => handleDelete(product._id)}>Delete</button>
                        </li>
                    ))}

                </ul>
            </div>
            <div className='w-full px-10 py-5 text-center bg-slate-300'>
                <h1 className='text-xl font-semibold'>copy rights @@@</h1>
            </div>
        </div>
    );
};

export default ProductAdd;
