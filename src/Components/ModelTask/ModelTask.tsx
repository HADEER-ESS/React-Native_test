import React, { useState } from 'react'
import { FlatList, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Todo from '../../Class/TodoClass';
import { TodoItem } from '../../Types/TodoItem';
import categoryData from '../../Data/CategoryData';
import CategoryCard from '../categoryCard/CategoryCard';

const ModelTask = (props:{openModelState:boolean , closeModelFun:React.Dispatch<React.SetStateAction<boolean>>, tasksState : (item : TodoItem)=>void}) => {
    const [taskItem , setTaskItem] = useState<string>('')
    const [taskType , setTaskType] = useState<string>('')
    let [errorMessage , setErrorMessage] = useState<string>("")
    let todo = new Todo(taskType , taskItem)

    const handleModelTask = () : void => {
        if(taskItem.length == 0){
            setErrorMessage ("Please Add a task")
        }else{
           setTaskItem("sdf") 
        }
        
        // props.closeModelFun(false)
        // props.tasksState(todo.getTodoItem())
        // setTaskItem('')
        // setTaskType('')
        // console.log("TODO " , todo.getTodoItem());
        
    }

  return (
    <Modal
            visible={props.openModelState}
            animationType="slide"
            transparent={true}
        >
            <TouchableOpacity onPress={()=>props.closeModelFun(false)} style={{flex:1 ,justifyContent:'center', alignItems:'center', backgroundColor:'#0000000f'}}>
                <View style={{padding:16, borderRadius:11, width:'80%' , height:'50%', alignItems:'center', backgroundColor:'#ffffff'}}>
                    <TextInput
            placeholder='Enter Todo'
            testID='Task_input'
            value={taskItem}
            style={{width:'100%',borderRadius:7 , borderColor:"#d6d6d6" , paddingHorizontal:11, alignSelf:'center', borderWidth:1}}
            onChangeText={txt => setTaskItem(txt)}
        />
        <FlatList
         data={categoryData}
         horizontal
         renderItem={({item}) => <CategoryCard selectedItem={taskType} getTaskType={setTaskType} category={item}/>}
         keyExtractor={item => item.color}
        />

        <TouchableOpacity testID='add_btn' style={{borderRadius:10, marginVertical:16, backgroundColor:'#e6e6', alignItems:'center', width:70, paddingVertical:11, alignSelf:'center'}} onPress={handleModelTask}>
            <Text style={{color:'#ffffff', fontSize:15, fontWeight:'500'}}>Add</Text>
        </TouchableOpacity>

            <Text testID='Invalid_text_task'>{errorMessage}</Text>
        
                </View>
            </TouchableOpacity>
        </Modal>
  )
}

export default ModelTask