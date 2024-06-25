import { useState } from 'react'
import { Text, View, Image, Alert, FlatList } from 'react-native'

import { styles } from './styles'

import logo from '../../assets/logo.png'
import clipboard from '../../assets/clipboard.png'

import { Input } from '../../components/Input'
import { Card } from '../../components/task/card'

export function Home() {
    const [createdTask, setCreatedTask] = useState(0)
    const [completedTask, setCompletedTask] = useState(0)
    const [tasks, setTasks] = useState<string[]>([])

    function addTask(taskName: string) {
        if (tasks.includes(taskName))
            return Alert.alert('Task already exists!')

        setCreatedTask(prevState => prevState + 1)

        setTasks(prevState => [...prevState, taskName])
    }

    function removeTask(taskName: string) {
        setCreatedTask(prevState => prevState - 1)

        const result = tasks.filter(task => task !== taskName)

        setTasks(result)
    }

    function toggleStatus(status: boolean) {

        console.log("Status: ", status)

        if (status)
            setCompletedTask(prevState => prevState + 1)
        else
            setCompletedTask(prevState => prevState - 1)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.logo}/>
            </View>
            <View style={styles.main}>
                <Input onPress={addTask} />

                <View style={styles.taskInformation}>
                    <View style={styles.taskTitle}>
                        <View>
                            <Text style={[styles.taskStatus, styles.taskCreated]}>Created</Text>
                        </View>
                        <View style={styles.taskCountContainer}>
                            <Text style={styles.taskCount}>{createdTask}</Text>
                        </View>
                    </View>
                    <View style={styles.taskTitle}>
                        <View>
                            <Text style={[styles.taskStatus, styles.taskCompleted]}>Completed</Text>
                        </View>
                        <View style={styles.taskCountContainer}>
                            <Text style={styles.taskCount}>{completedTask}</Text>
                        </View>
                    </View>
                </View>

                <FlatList 
                    data={tasks}
                    keyExtractor={item => item}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => 
                        <Card
                            text={item}
                            removeButton={() => removeTask(item)}
                            toggleStatusButton={toggleStatus}
                        />
                    }
                    ListEmptyComponent={() => (
                        <View style={styles.containerNoTask}>
                            <Image source={clipboard} style={styles.clipboard}/>
                            <Text style={[styles.textNoTask,styles.textNoTaskFirst]}>
                                You don't have tasks registered yet
                            </Text>
                            <Text style={styles.textNoTask}>
                                Create tasks and organize your to-do items
                            </Text>
                        </View>
                    )}
                />

            </View>
        </View>
    )
}

// Sera que da para forçar o teclado dark?