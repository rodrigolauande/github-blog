
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { IPost } from "../Blog/Home";
import { PostContent } from "./components/PostContent";
import { PostHeader } from "./components/PostHeader";
import { PostConteiner } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { Spinner } from "../../components/spinner";

export function Post() {

    const [postData, setPostData] = useState<IPost>({} as IPost)
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams()

    const getPostDetails = useCallback(async () => {
        try {
          setIsLoading(true);
    
          const response = await api.get(
            `/repos/rodrigolauande/blog-posts-projetoGitHubBlog/issues/${id}`
          );
    
          setPostData(response.data);
        } finally {
          setIsLoading(false);
        }
      }, [postData]);

    useEffect(() => {
        getPostDetails()
    }, []);

    if (isLoading) {
      <PostConteiner>
        <Spinner/>
      </PostConteiner>
    } else {
    return(
        <PostConteiner>
            <PostHeader postData={postData} isLoading={isLoading}/>
            <PostContent content={postData.body}/>
        </PostConteiner>
    )
}
}