import { useState } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'

import { styles } from './styles'

import trash from '../../../assets/trash.png'
import checked from '../../../assets/checked.png'
import unchecked from '../../../assets/unchecked.png'

import { TaskProps } from '../../../screens/Home/index'

type CardProps = {
    task: TaskProps
    removeButton: () => void
    toggleStatusButton: (task: TaskProps) => void
}

export function Card({ task, removeButton, toggleStatusButton }: CardProps) {

    const [isCompleted, setIsCompleted] = useState(false)

    function handleToggleStatusButton() {
        toggleStatusButton({
            name: task.name,
            completed: !isCompleted
        })

        setIsCompleted(prevState => !prevState)

    }

    function handleRemoveButton() {
        console.log('remove task')

        removeButton()
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleToggleStatusButton}>
                <Image source={isCompleted ? checked : unchecked} style={styles.checkbox}/>
            </TouchableOpacity>
            <ScrollView style={styles.textContainer} showsVerticalScrollIndicator={false}>
                <Text style={[styles.text, isCompleted ? styles.completedText : styles.text ]}>
                    {task.name}
                </Text>
            </ScrollView>
            <TouchableOpacity onPress={handleRemoveButton}>
                <Image source={trash} style={styles.trashIcon}/>
            </TouchableOpacity>
        </View>
    )
}