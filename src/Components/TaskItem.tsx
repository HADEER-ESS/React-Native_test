import React from 'react'
import { Text, View } from 'react-native'
import { TodoItem } from '../Types/TodoItem'
import categoryData from '../Data/CategoryData';


const TaskItem = (props: { todoProp: TodoItem }): React.JSX.Element => {
  console.log("Props ", props.todoProp);

  return (
    <View style={{ marginVertical: 8, borderRadius: 10, padding: 10, backgroundColor: categoryData.filter(item => item.type == props.todoProp.title)[0].color }}>
      {/* <Text>{props.todoProp.title}</Text> */}
      <Text style={{ fontSize: 19, color: '#ffffff', fontWeight: '900' }}>{`> ${props.todoProp.description}`}</Text>
    </View>
  )
}

export default TaskItem