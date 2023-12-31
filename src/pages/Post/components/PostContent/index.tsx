/* eslint-disable @typescript-eslint/no-unused-vars */
import { PostingConteiner } from "./styles";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface PostContentProps {
    content: string;
}

export function PostContent( {content}: PostContentProps) {
    return(
        <PostingConteiner>
            <ReactMarkdown 
                children={content}
                components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline && match ? (
                        <SyntaxHighlighter
                          children={String(children).replace(/\n$/, "")}
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          style={dracula as any}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                        />
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                  />
        </PostingConteiner>
    )
}