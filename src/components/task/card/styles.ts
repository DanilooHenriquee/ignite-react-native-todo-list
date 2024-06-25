import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        height: 64,
        backgroundColor: '#262626',
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    checkbox: {
        width: 17.45,
        height: 17.45,
    },
    trashIcon: {
        width: 12.48,
        height: 14,
    },
    textContainer: {
        marginHorizontal: 8
    },
    text: {
        color: '#F2F2F2',
        fontFamily: 'Inter_400Regular',
        textAlign: 'justify'
    },
    completedText: {
        color: '#808080',
        textDecorationLine: 'line-through',
    }
})