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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-10">
        <Droppable droppableId="todo">
          {(provided) => (
            <div
              className="xl:min-h-[90vh]"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h1 className="text-center text-2xl font-semibold">Todo</h1>
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
              className="xl:min-h-[90vh]"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h1 className="text-center text-2xl font-semibold">Doing</h1>
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
              className="xl:min-h-[90vh]"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <h1 className="text-center text-2xl font-semibold">Done</h1>
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
