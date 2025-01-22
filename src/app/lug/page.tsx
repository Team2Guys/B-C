'use client'
import React, { useEffect } from 'react'
import { category_wise_paths } from 'data/urls';
import { usePathname, useRouter } from 'next/navigation';
import NotFound from "app/not-found";








function page() {
    
    const pathname = usePathname();
    const router = useRouter()
    const redirected_handler = () => {
 
    
        const redirected_path = category_wise_paths.find((value) => value.path === pathname)
        if (redirected_path) {
            router.push(redirected_path.redirected_url);
    
        }
    }
    
    
    useEffect(() => {
        redirected_handler()
    }, [pathname]);
    
    return (
        <div>page</div>
    )
}

export default page