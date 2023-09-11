import { useCallback, useEffect, useState } from "react";
import { Spinner } from "../../components/spinner";
import { api } from "../../lib/axios";
import { Posting } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/Search";
import { HomeContainer, HomerContent } from "./styles";

export interface IPost {
    title: string;
    body: string;
    created_at: string;
    number: number;
    html_url: string;
    comments: number;
    user: {
      login: string;
    };
  }

export function Home() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getPosts = useCallback(
      async (query: string = "") => {
        try {
          setIsLoading(true);
          const response = await api.get(
            `/search/issues?q=${query}%20repo:rodrigolauande/blog-posts-projetoGitHubBlog`
          );
  
          setPosts(response.data.items);
        } finally {
          setIsLoading(false);
        }
      },
      [posts]
    );
      
    useEffect(() => {
      getPosts();
    }, []);


    if (isLoading) {
        <HomeContainer>
          <Spinner/>
        </HomeContainer>
    } else {
      return(
        <HomeContainer>
            <Profile/>
            <SearchInput getPosts={getPosts} postsLength={posts.length}/>
        <HomerContent>
          {posts.map((post) => (
            <Posting key={post.number} post={post} />
          ))}
        </HomerContent>
        </HomeContainer>
      )
    }     
}