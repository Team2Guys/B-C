'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loader from 'components/Loader/Loader';
import Cookies from 'js-cookie';


function ProtectedRoute(WrappedComponent: any) {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

      const token = Cookies.get('2guysAdminToken');
      const superAdmintoken = Cookies.get('superAdminToken');
      let Finaltoken = superAdmintoken ? superAdmintoken : token;

      if (Finaltoken) {
        router.push('/dashboard');
    
      } else {
        setLoading(false);
      }
    }, [router]);

    if (loading) {
      return (
        <div
          style={{
            background: '#FFF',
            zIndex: 1111,
            alignItems: 'center',
            display: 'flex',
            height: '100vh',
            width: '-webkit-fill-available',
            justifyContent: 'center',
          }}
        >
          <Loader color="#fff" />
        </div>
      );
    } else {
      return <WrappedComponent {...props} />;
    }
  };

  return Wrapper;
}

export default ProtectedRoute;
