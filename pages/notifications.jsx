import { Avatar } from '@/components/Avatar'
import Card from '@/components/Card'
import Layout from '@/components/Layout'
import React from 'react'
import Link from 'next/link'
const Notification = () => {
    return (
        <Layout>
            <h1 className='text-6xl mb-4 text-gray-300'>Notifications</h1>
            <Card noPadding={true}>
                <div className='flex gap-1 items-center mb-5 borer-b border-b-gray-100 p-4'>
                    <Avatar />
                    <div>
                        Stuart Broad liked
                        <Link href={'/profile'} className='text-socialBlue ml-1 mr-1 font-bold hover:underline'>
                            your  photo
                        </Link>
                    </div>
                </div>
                <div className='flex gap-1 items-center mb-5 borer-b border-b-gray-100 p-4 font-bold'>
                    <Avatar />
                    <div>
                        Stuart Broad liked
                        <Link href={'/profile'} className='text-socialBlue ml-1 mr-1 hover:underline font-bold'>
                            your  photo
                        </Link>
                    </div>
                </div>
                <div className='flex gap-1 items-center mb-5 borer-b border-b-gray-100 p-4 font-bold'>
                    <Avatar />
                    <div>
                        Stuart Broad liked
                        <Link href={'/profile'} className='text-socialBlue ml-1 mr-1 hover:underline'>
                            your  photo
                        </Link>
                    </div>
                </div>

            </Card>
        </Layout >
    )
}

export default Notification