'use client'
import React, { useEffect, useState } from 'react';
import LoginSignup from '@/components/LoginSignup';
import MyAccount from '@/components/MyAccount';
import { auth } from '../firebaseConfig'; 
import { onAuthStateChanged, User } from 'firebase/auth';

const AccountPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); 
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user ? <MyAccount user={user} /> : <LoginSignup />}
    </div>
  );
}

export default AccountPage;
