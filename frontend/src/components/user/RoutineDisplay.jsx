export default function RoutineDisplay() {
  return (
    <div
      id="routine-suggestion"
      className="flex flex-col items-center self-stretch"
    >
      <div className="my-4 self-stretch rounded-lg border p-4 shadow-md">
        <h3 className="text-xl font-bold">턱걸이</h3>
        <p>3세트, 8-12회</p>
      </div>
      <div className="my-4 self-stretch rounded-lg border p-4 shadow-md">
        <h3 className="text-xl font-bold">스쿼트</h3>
        <p>4세트, 10-15회, 50kg</p>
      </div>
      <div className="my-4 self-stretch rounded-lg border p-4 shadow-md">
        <h3 className="text-xl font-bold">벤치 프레스</h3>
        <p>4세트, 8-12회, 40kg</p>
      </div>
    </div>
  );
}
