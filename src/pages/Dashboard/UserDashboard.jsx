import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const UserDashboard = () => {
  const initialData = {
    todo: [
      { id: "1", content: "Task 1" },
      { id: "2", content: "Task 2" },
    ],
    doing: [
      { id: "3", content: "Task 3" },
      { id: "4", content: "Task 4" },
    ],
    done: [{ id: "5", content: "Task 5" }],
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const source = result.source.droppableId;
    const destination = result.destination.droppableId;

    if (source === destination) {
      const column = [...initialData[source]];
      const items = reorder(
        column,
        result.source.index,
        result.destination.index
      );
      initialData[source] = items;
    } else {
      const sourceColumn = [...initialData[source]];
      const destColumn = [...initialData[destination]];
      const [removed] = sourceColumn.splice(result.source.index, 1);
      destColumn.splice(result.destination.index, 0, removed);
      initialData[source] = sourceColumn;
      initialData[destination] = destColumn;
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 md:gap-6 p-10">
        <div className="col-span-3">
          <div className="my-2 gap-3 flex justify-center">
            <button className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 ">
              Add New Task
              <svg
                className="flex-shrink-0 w-4 h-4"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <Droppable droppableId="todo">
          {(provided) => (
            <div
              className="xl:min-h-[80vh] border-2 border-white p-4"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h1 className=" font-semibold flex  items-center  gap-2 tracking-widest md:tracking-[.2em] text-[#828fa3]">
                <div className="rounded-full w-4 h-4 bg-red-500 "></div>Todo (4)
              </h1>

              <div className="flex flex-col gap-5 mt-10">
                {initialData.todo.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        className="card w-full bg-base-100 shadow-sm rounded-sm"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <div className="card-body">
                          <h2 className="card-title">{task.content}</h2>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>

        <Droppable droppableId="doing">
          {(provided) => (
            <div
              className="xl:min-h-[80vh] border-2 border-white p-4"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h1 className=" font-semibold flex  items-center  gap-2 tracking-widest md:tracking-[.2em] text-[#828fa3]">
                <div className="rounded-full w-4 h-4 bg-yellow-500 "></div>Doing
                (6)
              </h1>
              <div className="flex flex-col gap-5 mt-10">
                {initialData.doing.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        className="card w-full bg-base-100 shadow-sm rounded-sm"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <div className="card-body">
                          <h2 className="card-title">{task.content}</h2>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>

        <Droppable droppableId="done">
          {(provided) => (
            <div
              className="xl:min-h-[80vh] border-2 border-white p-4"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h1 className=" font-semibold flex  items-center  gap-2 tracking-widest md:tracking-[.2em] text-[#828fa3]">
                <div className="rounded-full w-4 h-4 bg-blue-500 "></div>Done
                (7)
              </h1>

              <div className="flex flex-col gap-5 mt-10">
                {initialData.done.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        className="card w-full bg-base-100 shadow-sm rounded-sm"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <div className="card-body">
                          <h2 className="card-title">{task.content}</h2>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default UserDashboard;
