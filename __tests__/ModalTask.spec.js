import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native"
import ModelTask from "../src/Components/ModelTask/ModelTask";



describe("Test ModalTask Component", () => {

    test("Default Model Task rendering", () => {

        const { getAllByPlaceholderText } = render(<ModelTask />);

        getAllByPlaceholderText("Enter Todo")

    })

    test("Show empty input error", () => {

        const { getByTestId, getByText } = render(<ModelTask />);

        fireEvent.press(getByTestId("add_btn"))

        getByText("Please Add a task")

    })


    test("Check button clicked and text input change", () => {

        const closeModelFun = jest.fn()

        const tasksState = jest.fn()

        const { getByTestId, queryAllByText } = render(<ModelTask closeModelFun={closeModelFun} tasksState={tasksState} />);

        fireEvent.changeText(getByTestId("Task_input"), "sdf");

        fireEvent.press(getByTestId("add_btn"));

        expect(queryAllByText("Please Add a task").length).toBe(0)

    })

    test("User enter a valid data", async () => {

        const setState = jest.fn();

        jest.spyOn(React, "useState").mockReturnValue(['sdf', setState])

        const closeModelFun = jest.fn()

        const tasksState = jest.fn()

        const { getByTestId } = render(<ModelTask closeModelFun={closeModelFun} tasksState={tasksState} />);


        fireEvent.changeText(getByTestId("Task_input"), "sdf");

        // expect(setState).toContain('sdf')

        fireEvent.press(getByTestId("add_btn"));


        // expect(setState).toHaveBeenCalledWith('')

        expect(closeModelFun).toHaveBeenCalledTimes(1)

        expect(tasksState).toHaveBeenCalled()


    })
})

