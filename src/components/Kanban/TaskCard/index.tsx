import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Box, Text, Flex } from "@chakra-ui/react";

type TaskCardProps = {
  id: string;
  index: number;
  content: string;
};

const TaskCard: React.FC<TaskCardProps> = ({ content, id, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <Box
          width="100%"
          bg="white"
          p={1}
          rounded={2}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Flex alignItems="center">
            <Text
              mr={4}
              flex={1}
              fontSize="sm"
              wordBreak="break-all"
              whiteSpace="normal"
              color="gray.900"
            >
              {content}
            </Text>

            <span>=</span>
          </Flex>
        </Box>
      )}
    </Draggable>
  );
};

export default TaskCard;
