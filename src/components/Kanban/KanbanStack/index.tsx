import React, { useState } from "react";
import { HStack } from "@chakra-ui/react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

import KanbanCard from "components/Kanban/KanbanCard";
import { initialData } from "data/initial-data";

const KanbanStack: React.FC = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result: DropResult): void => {
    //akan kita bahas di part selanhutnya
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <HStack
        mt="40px"
        p={4}
        spacing={8}
        top={0}
        right={0}
        bottom={0}
        left={0}
        userSelect="none"
        whiteSpace="nowrap"
        overflowX="auto"
        overflowY="hidden"
        position="absolute"
        alignItems="flex-start"
      >
        <KanbanCard title="KanbanCard1" id="task-1" tasks={[]} />
        <KanbanCard title="KanbanCard2" id="task-2" tasks={[]} />
        <KanbanCard title="KanbanCard3" id="task-3" tasks={[]} />
      </HStack>
    </DragDropContext>
  );
};

export default KanbanStack;
