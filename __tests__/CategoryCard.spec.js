import "react-native";
import React from "react";
import CategoryCard from "../src/Components/categoryCard/CategoryCard";
import { fireEvent, render } from "@testing-library/react-native";


describe("<CategoryCard />", () => {
    test("Display the component", () => {

        let item = {
            type: "Urgent",
            color: 'red'
        }

        let taskType = "Important"

        let addTaskFun = jest.fn()

        const tree = render(<CategoryCard category={item} getTaskType={addTaskFun} selectedItem={taskType} />)


        //toMatchInlineSnapshot cause this error ==> Jest: Inline Snapshots are not supported when using Prettier 3.0.0 or above
        //need to downgrade Prettier till fix this issue in upgrade

        expect(tree).toMatchSnapshot()
    })

    test("item Clicked and select one task category", () => {
        let addTaskFun = jest.fn()
        let item = {
            type: "Urgent",
            color: 'red'
        }

        const { getByTestId } = render(<CategoryCard category={item} getTaskType={addTaskFun} />)

        const pressable = getByTestId('task_category_click')

        fireEvent.press(pressable)
        expect(addTaskFun).toHaveBeenCalled()

    })
})

