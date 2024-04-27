import Layout from '@/components/Layout'
import { PostCard } from '@/components/PostCard'
import React from 'react'

const Saved = () => {
    return (
        <Layout>
            <h1 className='text-6xl mb-4 text-gray-300'>Your saved Post</h1>
            <PostCard />
            <PostCard />

        </Layout>
    )
}

export default Saved