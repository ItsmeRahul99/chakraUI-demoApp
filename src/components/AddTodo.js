import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import { nanoid } from 'nanoid';
import React, { useState } from 'react'

function AddTodo({ addTodo }) {

    const toast = useToast()

    function handleSubmit(e) {
        e.preventDefault()
        if (!text) {
            toast({
                title: 'No text',
                status: 'error',
                duration: 1000,
                isClosable: true,
            })
            return
        }

        const todo = {
            id: nanoid(),
            body: text,
        }
        addTodo(todo)
        setText('')
    }


    const [text, setText] = useState('')

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt={8}>
                <Input placeholder='Enter text' variant='filled' value={text} onChange={(e) => {
                    setText(e.target.value)
                }} />
                <Button colorScheme='blue' px='8' type='submit'> Add Todo </Button>
            </HStack>
        </form>
    )
}

export default AddTodo