import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/posts/$postId")({
  component: PostComponent,
});

function PostComponent() {
  const { postId } = Route.useParams();
  return (
    <div className="flex grow flex-col items-center">
      <Card className="my-8 w-5/6 grow">
        <CardHeader>
          <CardTitle>Post {postId} Title</CardTitle>
          <CardDescription>
            Post Description (Author, date, views)
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col">
          <div id="post-content" className="mb-4 grow-3 text-gray-700">
            <p>Post Content</p>
          </div>
          <div id="post-comments" className="mt-6 grow-1 basis-0">
            <h3 className="mb-2 text-lg font-semibold">Comments</h3>
            <ul className="space-y-2">
              <li className="rounded border bg-gray-100 p-2">Comment 1</li>
              <li className="rounded border bg-gray-100 p-2">Comment 2</li>
              <li className="rounded border bg-gray-100 p-2">Comment 3</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row items-center gap-4">
          <label htmlFor="comment-input">댓글</label>
          <Input id="comment-input" className="grow basis-0" />
          <Button className="grow-0">등록</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
