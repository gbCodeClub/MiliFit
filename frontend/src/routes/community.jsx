import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { FaThumbsUp, FaComment, FaEye } from "react-icons/fa"; // Import icons

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const Route = createFileRoute("/community")({
  component: RouteComponent,
});

function RouteComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts] = useState([
    {
      id: 1,
      title: "First Post",
      likes: 10,
      comments: 2,
      views: 100,
      preview: "This is the first post",
    },
    {
      id: 2,
      title: "Second Post",
      likes: 20,
      comments: 4,
      views: 200,
      preview: "This is the second post",
    },
    {
      id: 3,
      title: "Third Post",
      likes: 30,
      comments: 6,
      views: 300,
      preview: "This is the third post",
    },
  ]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <Card>
        <CardHeader>
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </CardHeader>
        <CardContent>
          <ul>
            {filteredPosts.map((post) => (
              <li
                key={post.id}
                className="my-4 self-stretch rounded-lg border p-4 shadow-md"
              >
                <Link to="/posts/$postId" params={{ postId: post.id }}>
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <p>{post.preview}</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <FaThumbsUp /> {post.likes} <FaComment /> {post.comments}{" "}
                    <FaEye /> {post.views}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
