import React, { useEffect, useState } from 'react'
import Post from './Post'
import Card from '../molecules/Card'
import Container from '../molecules/Container'
import { getPosts } from '../../services/notionService'
export type TPost = {
    id: string,
    title: string,
    description: string,
    image: string,

}

export type PostsProps = {
    filters?: any,
    selectPostEvent: ({ post }: any) => {}
}


function Posts({ selectPostEvent }: PostsProps) {
    const [posts, setPosts] = useState<TPost[]>([
        {
            description: "Polymath manifesto Polymath manifesto Polymath manifesto Polymath manifestoPolymath manifestoPolymath manifesto ",
            id: "0",
            title: "Polymath manifesto",
            image: "test"
        },
        {
            description: "Polymath manifesto Polymath manifesto Polymath manifesto Polymath manifestoPolymath manifestoPolymath manifesto ",
            id: "0",
            title: "Style builder",
            image: "test"
        },
        {
            description: "Polymath manifesto Polymath manifesto Polymath manifesto Polymath manifestoPolymath manifestoPolymath manifesto ",
            id: "0",
            title: "Codex",
            image: "test"
        },
        {
            description: "Polymath manifesto Polymath manifesto Polymath manifesto Polymath manifestoPolymath manifestoPolymath manifesto ",
            id: "0",
            title: "Polymath manifesto",
            image: "test"
        },
        {
            description: "Polymath manifesto Polymath manifesto Polymath manifesto Polymath manifestoPolymath manifestoPolymath manifesto ",
            id: "0",
            title: "Polymath manifesto",
            image: "test"
        },
        {
            description: "Polymath manifesto Polymath manifesto Polymath manifesto Polymath manifestoPolymath manifestoPolymath manifesto ",
            id: "0",
            title: "Polymath manifesto",
            image: "test"
        },

        {
            description: "Polymath manifesto Polymath manifesto Polymath manifesto Polymath manifestoPolymath manifestoPolymath manifesto ",
            id: "0",
            title: "Polymath manifesto",
            image: "test"
        },
    ])
    const fetchData = async () => {
        const { data } = await getPosts();
        setPosts(data.map(p => {
            return {
                ...p,
                title: p.title[0]
            }
        }))
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <Container size={"100%"}  justifyContent="center" direction="column" title={''}>
            {
                posts.map((post) => {
                    return <Post disposition={'full'} onClick={() => selectPostEvent({ post: post })} {...post} ></Post>
                })
            }
        </Container>
    )
}

export default Posts