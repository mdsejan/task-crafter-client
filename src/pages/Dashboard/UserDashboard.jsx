const UserDashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
      <div className="min-h-[90vh]">
        <h1 className="text-center text-2xl font-semibold">Todo</h1>

        <div className="flex flex-col gap-5 mt-10">
          <div className="card w-full bg-base-100 shadow-sm rounded-sm">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-sm rounded-sm">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[8rem]">
        <h1 className="text-center text-2xl font-semibold">Doing</h1>
        <div className="flex flex-col gap-5 mt-10">
          <div className="card w-full bg-base-100 shadow-sm rounded-sm">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
          <div className="card w-full bg-base-100 shadow-sm rounded-sm">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[8rem]">
        <h1 className="text-center text-2xl font-semibold">Done</h1>

        <div className="flex flex-col gap-5 mt-10">
          <div className="card w-full bg-base-100 shadow-sm rounded-sm">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
