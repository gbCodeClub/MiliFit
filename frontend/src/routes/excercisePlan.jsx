import { createFileRoute } from "@tanstack/react-router";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import RoutineDisplay from "@/components/user/RoutineDisplay";

export const Route = createFileRoute("/excercisePlan")({
  component: RouteComponent,
});

function RouteComponent() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="flex flex-row items-center justify-evenly">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />
      <RoutineDisplay className="w-3/4" displayLink={false} />
    </div>
  );
}
