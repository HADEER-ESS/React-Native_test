import React from 'react'
import taskCategory from '../../Types/TaskCategory'
import { Text, TouchableOpacity, View } from 'react-native'

const CategoryCard = (props : {selectedItem:string, category : taskCategory , getTaskType:React.Dispatch<React.SetStateAction<any>>}) => {
  return (
    <TouchableOpacity onPress={()=>{
      props.getTaskType(props?.category?.type)
      }} style={{flexDirection:'row', marginTop:16 ,height:"15%", alignItems:'center', paddingHorizontal:4,marginHorizontal:4 ,  backgroundColor: props.category.type == props.selectedItem ? "#DFF5FF" : "transparent" , borderRadius:14}}>
        <View style={{backgroundColor:props?.category?.color , width:16, height:16, borderRadius:20}}></View>
        <Text style={{color:'#000000', paddingHorizontal:3}}>{props?.category?.type}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard