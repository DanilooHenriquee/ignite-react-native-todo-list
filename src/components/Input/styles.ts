import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        height: 52,
        backgroundColor: '#262626',
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        color: '#F2F2F2',
        borderWidth: 1,
        borderColor: '#0D0D0D',
        borderRadius: 6,
        padding: 16,
    },
    inputFocused : {
        borderColor: '#5E60CE',
    },
    button: {
        height: 52,
        width: 52,
        backgroundColor: '#1E6F9F',
        borderWidth: 1,
        borderColor: '#1E6F9F',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 4
    }
})