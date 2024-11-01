import React, { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { signOut } from '../app/authService';
import { toast } from 'react-toastify';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../app/firebaseConfig';


interface Product {
  quantity: number;
  size: string;
}

interface Order {
  id: string;
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  subtotal: number;
  trackingId: string;
  products: Record<string, Product>;
}

interface MyAccountProps {
  user: User;
}

const MyAccount: React.FC<MyAccountProps> = ({ user }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      toast.error('Failed to logout!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersQuery = collection(db, "orders", user.uid, "userOrders")
        const querySnapshot = await getDocs(ordersQuery);
        
        const userOrders: Order[] = [];
        querySnapshot.forEach((doc) => {
          userOrders.push({ id: doc.id, ...doc.data() } as Order); 
        });
        
        setOrders(userOrders);
      } catch (error) {
        toast.error('Failed to fetch orders!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchOrders();
    }
  }, [user]);

  return (
    <div className="bg-[#f2ece9] p-8">
      <div className='flex flex-col items-center'>
        <h1 className="text-center text-2xl font-bold pt-6">MY ACCOUNT</h1>
        <button onClick={handleSignOut}>
          <p className="font-bold text-xs pt-6">LOGOUT</p>
        </button>
      </div>
      <div className='flex'>
        <div className="flex flex-col items-center mt-10 w-full md:w-1/2">
          <div className="text-xl font-bold mb-4">MY ORDERS</div>
          {loading ? (
            <p>Loading orders...</p>
          ) : orders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            <ul className="w-full">
              {orders.map(order => (
                <li key={order.id} className="mb-4 bg-white p-4 rounded shadow-md">
                  <h2 className="font-bold">Tracking ID: {order.trackingId}</h2>
                  <p><strong>Name:</strong> {order.name}</p>
                  <p><strong>Email:</strong> {order.email}</p>
                  <p><strong>Address:</strong> {order.address}</p>
                  <p><strong>Phone Number:</strong> {order.phoneNumber}</p>
                  <p><strong>Subtotal:</strong> ${order.subtotal.toFixed(2)}</p>
                  <h3 className="font-semibold">Products:</h3>
                  <ul>
                    {Object.entries(order.products).map(([productKey, product]) => (
                      <li key={productKey}>
                        {productKey}: Quantity {(product as Product).quantity}, Size {(product as Product).size}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-col items-center mt-10 w-full md:w-1/2">
          <div className="text-xl font-bold mb-4">USER DETAILS</div>
          <div className="w-full md:w-1/2 bg-white p-6 rounded shadow-md text-black">
            <p><strong>Name:</strong> {user.displayName || 'Not Provided'}</p>
            <p><strong>Email:</strong> {user.email || 'Not Provided'}</p>
            <p><strong>UID:</strong> {user.uid}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
