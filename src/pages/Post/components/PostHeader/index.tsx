import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostContainer, PostDetails } from "./styles";
import { faArrowUpRightFromSquare, faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IPost } from "../../../Blog/Home";
import { Spinner } from "../../../../components/spinner";
import { relativeDateFormatter } from "../../../../utils/formatted";
import { useNavigate } from "react-router-dom";

interface PostHeaderProps {
    postData: IPost
    isLoading: boolean
}
export function PostHeader({postData, isLoading}: PostHeaderProps) {

    const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

    const formattedDate = relativeDateFormatter(postData?.created_at);

    if (isLoading) {
        <PostContainer>
          <Spinner/>
        </PostContainer>
    } else {
      return (
        <PostContainer>

        <PostDetails>
        <header>
            <ul>
            <li onClick={goBack}>{<FontAwesomeIcon icon={faChevronLeft} />}VOLTAR</li>
            <li><a href={postData.html_url}>VER NO GITHUB<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a></li>
            </ul>
        </header>
            <h1>{postData.title}</h1>
        <ul>
            <li><FontAwesomeIcon icon={faGithub}/>{postData.user.login}</li>
            <li><FontAwesomeIcon icon={faCalendar}/>{formattedDate}</li>
            <li><FontAwesomeIcon icon={faComment}/>{postData.comments}</li>
        </ul>
    </PostDetails>
        </PostContainer>
      )
    }  
}