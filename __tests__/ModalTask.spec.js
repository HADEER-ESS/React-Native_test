import React from "react";
import {render , fireEvent} from "@testing-library/react-native"
import ModelTask from "../src/Components/ModelTask/ModelTask";



describe("Test ModalTask Component" , () => {

    test("Default Model Task rendering" , () => {

    const {getAllByPlaceholderText} = render(<ModelTask/>);

    getAllByPlaceholderText("Enter Todo")

})

test("Show empty input error" , () => {

    const {getByTestId , getByText} = render(<ModelTask/>);

    fireEvent.press(getByTestId("add_btn")) 

    getByText("Please Add a task")

})


test("Check button clicked and text input change" , () => {

    const { getByTestId , queryAllByText} = render(<ModelTask/>);

    fireEvent.changeText(getByTestId("Task_input") , "sdf");
    
    fireEvent.press(getByTestId("add_btn"));

    expect(queryAllByText("Please Add a task").length).toBe(0)

})
})

