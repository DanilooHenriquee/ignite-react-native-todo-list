import { useEffect, useState } from 'react'
import { Text, View, Image, Alert, FlatList } from 'react-native'

import { styles } from './styles'

import logo from '../../assets/logo.png'
import clipboard from '../../assets/clipboard.png'

import { Input } from '../../components/Input'
import { Card } from '../../components/task/card'

export type TaskProps = {
    name: string
    completed: boolean
}

export function Home() {
    const [createdTask, setCreatedTask] = useState(0)
    const [completedTask, setCompletedTask] = useState(0)
    const [tasks, setTasks] = useState<TaskProps[]>([])

    function addTask(taskName: string) {
        if (tasks.find(task => task.name == taskName))
            return Alert.alert('Task already exists!')

        taskName = taskName.trim()

        if (!taskName)
            return

        setCreatedTask(prevState => prevState + 1)

        setTasks(prevState => [...prevState, {
            name: taskName,
            completed: false
        }])
    }

    function removeTask(task: TaskProps) {
        setCreatedTask(prevState => prevState - 1)

        if (task.completed)
            setCompletedTask(prevState => prevState - 1)

        const result = tasks.filter(item => item.name !== task.name)

        setTasks(result)
    }

    function toggleStatus(task: TaskProps) {
        const result = tasks.map(item => (item.name === task.name) ? task : item)

        const value = task.completed ? 1 : -1

        setCompletedTask(prevState => prevState + value)

        setTasks(result)
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
                    keyExtractor={(item) => item.name}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => 
                        <Card
                            task={item}
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