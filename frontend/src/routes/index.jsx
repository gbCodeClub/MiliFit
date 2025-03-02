import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h2 className="py-2 text-center font-[Playfair_Display] text-3xl font-bold italic">
        Built for the army, fit for your body.
      </h2>
      군생활 내내 함께하는 당신만의 Personal Trainer, Milifit. 각종 장점 나열.
      대충 운동하는 사진.
      <Link
        to={"/register"}
        className="bg-darkgreen mt-4 inline-block rounded-lg px-6 py-3 font-bold text-white transition hover:bg-blue-700"
      >
        시작하기
      </Link>
    </div>
  );
}
