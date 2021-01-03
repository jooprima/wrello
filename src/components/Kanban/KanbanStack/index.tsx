import React from "react";
import {  HStack } from "@chakra-ui/react";

import KanbanCard from "components/Kanban/KanbanCard";

const KanbanStack: React.FC = () => {
  return (
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
  );
};

export default KanbanStack;
