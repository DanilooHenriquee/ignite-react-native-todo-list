import { Text, TextInput, View, TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { styles } from './styles'
import { useState } from 'react'

type InputProps = {
    onPress: (input: string) => void
}

export function Input({ onPress }: InputProps) {

    const [inputIsFocused, setInputIsFocused] = useState(false)
    const [input, setInput] = useState('')

    function submit() {
        onPress(input)
        setInput('')
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={[styles.input, 
                    inputIsFocused 
                        ? styles.inputFocused 
                        : styles.input,
                ]}
                placeholder='Add a new task'
                placeholderTextColor='#808080'
                onFocus={() => setInputIsFocused(true)}
                onBlur={() => setInputIsFocused(false)}
                onChangeText={setInput}
                value={input}
            />

            <TouchableOpacity style={styles.button} onPress={submit}>
                <Feather name="plus-circle" color="white" size={16} />
            </TouchableOpacity>
        </View>
    )
}