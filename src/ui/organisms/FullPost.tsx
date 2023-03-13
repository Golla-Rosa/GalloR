import React, { useEffect, useState } from 'react'
import { getPost } from '../../services/notionService';
import { PostsProps, TPost } from './Posts';
import Text from '../molecules/Text';
import Card from '../molecules/Card';
import Container from '../molecules/Container';
function FullPost({ id, title, description, image, redirect }: TPost) {
    const [postContent, setPostContent] = useState([]);

    const fetchData = async () => {
        // get the data from the api
        const { data } = await getPost({ id });
        setPostContent(

            data.results.map((r) => {
                return {
                    type: r.type,
                    text: r[r.type]["rich_text"]
                }
            }),
        )
        // convert the data to json
        // const json = await response.json();

        // set state with the result
        // setData(json);
    }
    useEffect(() => {
        fetchData();
    },)
    return (
        <Container display="flex" size={"100%"} direction="column" justifyContent="start" title={''}>
            <Card justifyContent={"start"} animation={false} size="90vh" onClick={() => { }} title={''}>
                <Text type={'title'} >
                    <button onClick={redirect}>{`<-`}</button>
                    {title}

                </Text>
                <div style={{ marginTop: "1em", height: "56vh", overflow: "scroll" }}>
                    {postContent?.map((p) => { console.log(p); return <Text type={p.type} >{p.text[0]?.plain_text}</Text> })}
                </div>
            </Card>
        </Container>
    )
}

export default FullPost