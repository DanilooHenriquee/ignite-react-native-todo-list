import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A'
    },
    header: {
        height: 173,
        backgroundColor: '#0D0D0D',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 110.34,
        height: 32
    },
    main: {
        flex: 1,
        padding: 24,
        marginTop: -52
    },
    taskInformation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32,
        marginBottom: 20
    },
    taskTitle: {
        flexDirection: 'row'
    },
    taskStatus: {
        fontFamily: 'Inter_700Bold',
        fontSize: 14,
    },
    taskCreated: {
        color: '#4EA8DE'
    },
    taskCompleted: {
        color: '#8284FA'
    },
    taskCountContainer: {
        backgroundColor: '#333333',
        marginLeft: 8,
        width: 25,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    taskCount: {
        fontFamily: 'Inter_700Bold',
        fontSize: 12,
        color: '#D9D9D9',
    },
    containerNoTask: {
        borderTopWidth: 1,
        borderTopColor: '#333333',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 48
    },
    clipboard: {
        width: 56,
        height: 56,
        marginBottom: 16
    },
    textNoTask: {
        fontSize: 14,
        color: '#808080',
        fontFamily: 'Inter_400Regular',
    },
    textNoTaskFirst: {
        fontFamily: 'Inter_700Bold',
    }
})