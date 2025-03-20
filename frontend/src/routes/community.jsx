import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FaRegComment } from "react-icons/fa";
import { LuThumbsUp } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export const Route = createFileRoute("/community")({
  component: RouteComponent,
});

function RouteComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts] = useState([
    {
      id: 1,
      title: "First Post",
      likeCount: 10,
      replyCount: 2,
      viewCount: 100,
      contentPreview: "This is the first post preview...",
    },
    {
      id: 2,
      title: "Second Post",
      likeCount: 20,
      replyCount: 4,
      viewCount: 200,
      contentPreview: "This is the second post preview...",
    },
    {
      id: 3,
      title: "Third Post",
      likeCount: 30,
      replyCount: 6,
      viewCount: 300,
      contentPreview: "This is the third post preview...",
    },
  ]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="flex grow flex-col items-center">
      <Card className="my-4 w-2/3 grow">
        <CardHeader>
          <Input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </CardHeader>
        <CardContent>
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="my-4 self-stretch rounded-lg border p-4 shadow-md"
            >
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p>
                {post.contentPreview}
                <br />
              </p>
              <p className="flex items-center space-x-2">
                <span className="flex items-center">
                  <LuThumbsUp className="mr-1" /> {post.likeCount}
                </span>
                <span className="flex items-center">
                  <FaRegComment className="mr-1" /> {post.replyCount}
                </span>
                <span className="flex items-center">
                  <MdOutlineRemoveRedEye className="mr-1" /> {post.viewCount}
                </span>
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
