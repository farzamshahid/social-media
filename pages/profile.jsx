import Link from 'next/link'
import Card from '@/components/Card'
import Layout from '@/components/Layout'
import React from 'react'
import { Avatar } from '@/components/Avatar'
import { PostCard } from '@/components/PostCard'
import { useRouter } from 'next/router'
import FriendInfo from '@/components/FriendInfo'
const Profile = () => {
    const router = useRouter();
    const { asPath: pathname } = router;
    const isPosts = pathname.includes('posts') || pathname === '/profile'
    const isAbout = pathname.includes('/about')
    const isFriends = pathname.includes('/friends')
    const isPhotos = pathname.includes('/photos')
    const activeClasses = "flex gap-1 items-center md:px-4 py-1 border-socialBlue border-b-4 text-blue-800 "
    const tabClasses = "flex gap-1 items-center border-b-4 border-b-white px-4 py-1"
    return (
        <Layout>
            <Card noPadding={true}>
                <div className='relative rounded-md overflow-hidden'>
                    <div className='h-36 overflow-hidden flex justify-center items-center'>
                        <img src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className='absolute top-24 left-4'>

                        <Avatar size={'lg'} />
                    </div>
                    <div className='pt-0 md:p-4 pb-0'>

                        <div className='ml-28 md:ml-40'>
                            <h1 className=' text-3xl font-bold'>
                                James Anderson
                            </h1>
                            <div className='text-gray-500 leading-4'>Manchester,England</div>
                        </div>
                        <div className="mt-4 md:mt-10 flex gap-0">
                            <Link href={'/profile/posts'} className={isPosts ? activeClasses : tabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                <span className='sm:block hidden'>

                                    Posts
                                </span>                            </Link>
                            <Link href={'/profile/about'} className={isAbout ? activeClasses : tabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                </svg>
                                <span className='sm:block hidden'>
                                    About
                                </span>                            </Link>
                            <Link href={'/profile/friends'} className={isFriends ? activeClasses : tabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                                <span className='sm:block hidden'>

                                    Friends
                                </span>
                            </Link>
                            <Link href={'/profile/photos'} className={isPhotos ? activeClasses : tabClasses}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                                <span className='sm:block hidden'>

                                    Photos                            </span></Link>
                        </div>
                    </div>
                </div>
            </Card>
            {isPosts &&
                (<div>
                    <PostCard />
                </div>
                )}
            {
                isAbout && (
                    <div>
                        <Card>

                            <h2 className='text-3xl mb-2'>
                                About me
                            </h2>
                            <p className='mb-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquam porro sunt dignissimos, provident ab delectus. Fugit officiis fuga doloremque, impedit, repellat sapiente, voluptatibus ducimus veritatis temporibus voluptate incidunt eos?</p>
                            <p className='mb-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquam porro sunt dignissimos, provident ab delectus. Fugit officiis fuga doloremque, impedit, repellat sapiente, voluptatibus ducimus veritatis temporibus voluptate incidunt eos?</p>

                        </Card>
                    </div>
                )
            }
            {
                isFriends &&
                (
                    <div>
                        <Card>
                            <h2 className='text-3xl mb-2'>
                                Friends                       </h2>
                            <div>
                            </div>
                            <div className='border-b p-4 border-gray-100 -mx-4'>
                                <FriendInfo />
                            </div>

                            <div className='border-b p-4 border-gray-100 -mx-4'>
                                <FriendInfo />
                            </div>
                            <div className='border-b p-4 border-gray-100 -mx-4'>
                                <FriendInfo />
                            </div>
                            <div className='border-b p-4 border-gray-100 -mx-4'>
                                <FriendInfo />
                            </div>
                            <div className='border-b p-4 border-gray-100 -mx-4'>
                                <FriendInfo />
                            </div>
                            <div className='border-b p-4 border-gray-100 -mx-4'>
                                <FriendInfo />
                            </div>
                            <div className='border-b p-4 border-gray-100 -mx-4'>
                                <FriendInfo />
                            </div>
                            <div className='border-b p-4 border-gray-100 -mx-4'>
                                <FriendInfo />
                            </div>
                            <div className='border-b p-4 border-gray-100 -mx-4'>
                                <FriendInfo />
                            </div>
                            <div className='border-b p-4 border-gray-100 -mx-4'>
                                <FriendInfo />
                            </div>
                            <div className='border-b p-4 border-gray-100 -mx-4'>
                                <FriendInfo />
                            </div>
                            <div className='border-b p-4 border-gray-100 -mx-4'>
                                <FriendInfo />
                            </div>
                            <div className='border-b p-4 border-gray-100 -mx-4'>
                                <FriendInfo />
                            </div>
                        </Card>

                    </div>
                )
            }
            {isPhotos && (
                <div>
                    <Card>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className='overflow-hidden rounded-md  md:h-48 shadow-md flex items-center '>
                                <img src="https://images.unsplash.com/photo-1585102037613-50fedd9f5b30?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                            <div className='overflow-hidden rounded-md h-48 shadow-md flex items-center '>
                                <img src="https://images.unsplash.com/photo-1565135100432-93aa40444014?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                            <div className='overflow-hidden rounded-md h-48 shadow-md flex items-center '>
                                <img src="https://images.unsplash.com/photo-1568323800788-78f87a78e492?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                            <div className='overflow-hidden rounded-md h-48 shadow-md flex items-center '>
                                <img src="https://images.unsplash.com/photo-1658742758836-a69cdda37f10?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                            <div className='overflow-hidden rounded-md h-48 shadow-md flex items-center '>
                                <img src="https://images.unsplash.com/photo-1598395927056-8d895e701c3b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                            <div className='overflow-hidden rounded-md h-48 shadow-md flex items-center '>
                                <img src="https://images.unsplash.com/photo-1598395927056-8d895e701c3b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>

                        </div>
                    </Card>
                </div>
            )
            }
        </Layout >
    )
}
export default Profile
