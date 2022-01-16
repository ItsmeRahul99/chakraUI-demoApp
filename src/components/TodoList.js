import {
    Badge,
    HStack,
    IconButton,
    Spacer,
    StackDivider,
    Text,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaTrash } from "react-icons/fa";

function TodoList({ todos, deleteTodo }) {

    if (!todos.length) {
        return (
            <Badge colorScheme='red' p='4' borderRadius='xl' m='20px !important'>
                No, Todos..!
            </Badge>
        )
    }

    return (
        <VStack
            divider={<StackDivider />}
            borderColor="gray.100"
            borderWidth="2px"
            p="4"
            borderRadius="lg"
            w='100%'
            alignItems='stretch'
            maxW={{ base: '90vw', sm: '80vw', md: '50vw', xl: '40vw' }}
        >
            {todos.map((todo) => (
                <HStack key={todo.id} >
                    <Text>{todo.body}</Text>
                    <Spacer />
                    <IconButton icon={<FaTrash />} isRound onClick={() => deleteTodo(todo.id)} />
                </HStack>
            ))}
        </VStack>
    );
}

export default TodoList;
