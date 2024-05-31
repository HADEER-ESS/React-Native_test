import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native"
import ModelTask from "../src/Components/ModelTask/ModelTask";

//Mock ToDo class
class TODO {
    constructor(title, desc) {
        TODO.id = 1
        this.title = title
        this.desc = desc
    }

    getTodoItem() {
        return { id: TODO.id, title: this.title, desc: this.desc }
    }
}



describe("Test ModalTask Component", () => {

    test("Default Model Task rendering", () => {

        const root = render(<ModelTask />);

        // getAllByPlaceholderText("Enter Todo")
        expect(root).toMatchSnapshot()

    })

    test('updates state and displays input text when user types and presses button', () => {

        const closeModelFun = jest.fn()

        const tasksState = jest.fn()

        const { getByTestId } = render(<ModelTask closeModelFun={closeModelFun} tasksState={tasksState} />)


        const input = getByTestId("Task_input")

        const button = getByTestId("add_btn")

        //simulate user type in textInput
        fireEvent.changeText(input, "New Task")

        expect(input.props.value).toBe("New Task")


        //Simulate button press
        fireEvent.press(button)

        expect(closeModelFun).toHaveBeenCalledWith(false);
        expect(tasksState).toHaveBeenCalledWith({ id: 1, title: '', description: 'New Task' });

    })

    test('displays error message when taskItem is empty and button is pressed', () => {

        const closeModelFun = jest.fn()

        const tasksState = jest.fn()

        const { getByTestId } = render(<ModelTask closeModelFun={closeModelFun} tasksState={tasksState} />)

        const button = getByTestId("add_btn")

        fireEvent.press(button);

        expect(getByTestId("Invalid_text_task")).toHaveTextContent("Please Add a task")

        expect(closeModelFun).not.toHaveBeenCalled()

        expect(tasksState).not.toHaveBeenCalled()
    })
})

