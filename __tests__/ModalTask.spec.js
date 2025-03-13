import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native"
import ModelTask from "../src/Components/ModelTask/ModelTask";
import Todo from "../src/Class/TodoClass";
import { act } from "react-test-renderer";




describe("Test ModalTask Component", () => {

    test("Default Model Task rendering", () => {

        const root = render(<ModelTask />);

        // getAllByPlaceholderText("Enter Todo")
        expect(root).toMatchSnapshot()

    })

    test('when user enter only one required field, it display error', () => {

        const closeModelFun = jest.fn()

        const { getByTestId } = render(<ModelTask closeModelFun={closeModelFun} />)



        const input = getByTestId("Task_input")

        const button = getByTestId("add_btn")
        const errorText = getByTestId("Invalid_text_task")

        //simulate user type in textInput
        fireEvent.changeText(input, "New Task")

        expect(input.props.value).toBe("New Task")


        //Simulate button press
        fireEvent.press(button)

        expect(errorText).toBeTruthy()


    })

    test('when user enter the task type and task title and press on the btn to update the task array', () => {
        const closeModelFun = jest.fn()
        const addTaskToClass = jest.spyOn(Todo.prototype, 'pushToArray')

        const { getByTestId } = render(<ModelTask closeModelFun={closeModelFun} />)

        const input = getByTestId("Task_input")
        const button = getByTestId("add_btn")

        //Actions
        fireEvent.changeText(input, "add task")
        //update the taskItem state
        expect(input.props.value).toBe("add task")

        //update the taskType state manually


        fireEvent.press(button)
        expect(closeModelFun).toHaveBeenCalledWith(false)
        expect(addTaskToClass).toHaveBeenCalled()
    })
})

