import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import TaskItem from '../Components/TaskItem'
import styles from './TodoScreenStyle.d'
import ModelTask from '../Components/ModelTask/ModelTask'
import Todo from '../Class/TodoClass'

const TodoMainScreen = () => {

    const [openModel, setOpenModel] = useState<boolean>(false)
    const todoService = Todo.getInstance()

    return (
        <View style={{ padding: 16 }}>
            <ModelTask openModelState={openModel} closeModelFun={() => setOpenModel(false)} />
            <View style={styles.MainScreenTitle}>
                <Text style={styles.greetingTestStyle}>Welcome Back</Text>
                <TouchableOpacity onPress={() => setOpenModel(true)} style={styles.plusButtonContainer}>
                    <Text style={styles.plusTextStyle}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={todoService.getTodoItem()}
                style={{ marginTop: 15 }}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({ item }) => <TaskItem todoProp={item} />}
            />
        </View>
    )
}

export default TodoMainScreen
