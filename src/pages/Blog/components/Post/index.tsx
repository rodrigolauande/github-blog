import { relativeDateFormatter } from "../../../../utils/formatted";
import { IPost } from "../../Home";
import { PostContainer } from "./styles";
import moment from 'moment';
import 'moment/dist/locale/pt-br';

moment.locale('pt-br')

interface PostProps {
    post: IPost;
  }

export function Posting({ post }: PostProps) {

    const formattedDate = relativeDateFormatter(post.created_at);
    
    return(
        <PostContainer to={`/post/${post.number}`}>
        <div>
          <strong>{post.title}</strong>
          <span>{formattedDate}</span>
        </div>
        <p>{post.body}</p>
        </PostContainer>
    )
}