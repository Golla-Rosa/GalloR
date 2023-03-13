import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Menu from './ui/organisms/Menu'
import Post from './ui/organisms/Post'
import Posts, { TPost } from './ui/organisms/Posts'
import Navbar from './ui/organisms/Navbar'
import FullPost from './ui/organisms/FullPost'
import Container from './ui/molecules/Container'

function App() {
  const [openedPost, setOpenedPost] = useState<never | TPost>();
  const setOpenedPostEvent = ({ post }) => {
    setOpenedPost(post)
  }
  return (
    <div>
      <div style={{ height: "95vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div>
          <Navbar openedPost={openedPost}></Navbar>
          <Menu headers={[
            { name: "", action: {} },
            { name: "", action: {} },
            { name: "", action: {} },
            { name: "", action: {} },
            { name: "", action: {} },
            { name: "", action: {} },
          ]}></Menu>

          <Menu headers={[
            { name: "Who am I", action: {} },
            { name: "My works", action: {} },
            { name: "Thoughts", action: {} },
          ]}></Menu>
        </div>
        <Container size={"100%"} display="flex">

          {openedPost?.id === undefined &&

            <Posts selectPostEvent={setOpenedPostEvent} />
          }
          {openedPost &&

            <FullPost redirect={() => setOpenedPostEvent({post: undefined})} disposition="full" id={openedPost.id} title={openedPost.title} description={''} image={''}></FullPost>
          }
        </Container>
      </div>
    </div>
  )
}

export default App
