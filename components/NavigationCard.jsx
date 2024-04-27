import React from 'react'
import Card from './Card';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
const NavigationCard = () => {
    const router = useRouter();
    const { asPath: pathname } = router;
    console.log(router)
    const activeElementsClasses = "flex md:gap-3 my-1 md:py-3 text-sm md:text-md text-white md:-mx-8 px-6 md:px-8 rounded-md bg-socialBlue shadow-md shadow-gray-300";
    const nonActiveElementsClasses = "flex md:gap-3 gap-1 py-2 my-2 hover:bg-blue-500 text-sm md:text-md hover:hover:bg-opacity-20 -mx-4 md:px-4  px-6 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-200";
    const supabase = useSupabaseClient()
    async function logout() {
        await supabase.auth.signOut();
    }
    return (
        <div>
            <Card noPadding={true}>
                <div className='px-6 py-2 flex md:block shadow-md shadow-gray-500 md:shadow-none justify-between'>
                    <h2 className="text-gray-500 font-bold hidden md:block mb-3">Navigation</h2>
                    <Link href="/" className={pathname === '/' ? activeElementsClasses : nonActiveElementsClasses}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

                        <span className='hidden md:block'>
                            Home
                        </span>
                    </Link>
                    <Link href="/profile/friends" className={pathname === '/profile/friends' ? activeElementsClasses : nonActiveElementsClasses}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                        <span className='hidden md:block'>

                            Friends
                        </span></Link>
                    <Link href="/saved" className={pathname === '/saved' ? activeElementsClasses : nonActiveElementsClasses}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                        <span className='hidden md:block'>

                            Saved Posts</span></Link>
                    <Link href="/notifications" className={pathname === '/notifications' ? activeElementsClasses : nonActiveElementsClasses}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                        <span className='hidden md:block'>

                            Notifications</span></Link>
                    <button onClick={logout} className='md:w-full -my-2'>
                        <span className={nonActiveElementsClasses}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                            </svg>
                            <span className='hidden md:block'>
                                Logout
                            </span>
                        </span>
                    </button>
                </div>
            </Card >

        </div >
    )
}
export default NavigationCard;