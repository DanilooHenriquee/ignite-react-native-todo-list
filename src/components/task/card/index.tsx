import { useState } from 'react'
import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'

import { styles } from './styles'

import trash from '../../../assets/trash.png'
import checked from '../../../assets/checked.png'
import unchecked from '../../../assets/unchecked.png'

type CardProps = {
    text: string
    removeButton: () => void
    toggleStatusButton: (status: boolean) => void
}

export function Card({ text, removeButton, toggleStatusButton }: CardProps) {

    const [isCompleted, setIsCompleted] = useState(false)

    function handleToggleStatusButton() {
        setIsCompleted(prevState => {
            toggleStatusButton(!prevState)
            return !prevState
        })
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
                    {text}
                </Text>
            </ScrollView>
            <TouchableOpacity onPress={handleRemoveButton}>
                <Image source={trash} style={styles.trashIcon}/>
            </TouchableOpacity>
        </View>
    )
}