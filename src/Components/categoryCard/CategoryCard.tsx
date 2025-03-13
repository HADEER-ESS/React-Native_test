import React from 'react'
import taskCategory from '../../Types/TaskCategory'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CategoryCard = (props: { selectedItem: string, category: taskCategory, getTaskType: (value: string) => void }) => {
  return (
    <TouchableOpacity onPress={() => {
      props.getTaskType(props?.category?.type)
    }}
      testID='task_category_click'
      style={[style.cardCategoryContainer, { backgroundColor: props.category.type == props.selectedItem ? "#DFF5FF" : "transparent" }]}
    >

      <View style={[style.viewTextStyle, { backgroundColor: props?.category?.color }]}></View>

      <Text style={style.textStyle}>{props?.category?.type}</Text>

    </TouchableOpacity>
  )
}

export default CategoryCard

const style = StyleSheet.create({
  cardCategoryContainer: {
    flexDirection: 'row',
    marginTop: 16,
    height: "15%",
    alignItems: 'center',
    paddingHorizontal: 4,
    marginHorizontal: 4,
    borderRadius: 14
  },
  viewTextStyle: {
    width: 16,
    height: 16,
    borderRadius: 20
  },
  textStyle: {
    color: '#000000',
    paddingHorizontal: 3
  }
})