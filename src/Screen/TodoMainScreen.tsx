import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import TaskItem from '../Components/TaskItem'
import { TodoItem } from '../Types/TodoItem'
import styles from './TodoScreenStyle.d'
import ModelTask from '../Components/ModelTask/ModelTask'

const TodoMainScreen = () => {
    
    const [tasksArray , setTasksArray] = useState<TodoItem[]>([])
    const [openModel , setOpenModel] = useState<boolean>(false)

    const pushToState = (item : TodoItem) : void => {
        setTasksArray([...tasksArray , item])
    }

  return (
    <View style={{padding:16}}>
        <ModelTask tasksState={(item)=>pushToState(item)} openModelState={openModel} closeModelFun={()=>setOpenModel(false)} />
        <View style={styles.MainScreenTitle}>
            <Text style={styles.greetingTestStyle}>Welcome Back</Text>
            <TouchableOpacity onPress={()=>setOpenModel(true)} style={styles.plusButtonContainer}>
                <Text style={styles.plusTextStyle}>+</Text>
            </TouchableOpacity>
        </View>
        <FlatList
            data={tasksArray}
            style={{marginTop:15}}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({item}) => <TaskItem todoProp={item}/>}
        />
    </View>
  )
}

export default TodoMainScreen
