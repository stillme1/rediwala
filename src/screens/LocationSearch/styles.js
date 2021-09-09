import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        paddingHorizontal: '5%',
    },
    
    search: {
        width: '80%',
        marginHorizontal: '5%',
    },
    current: {
        padding: '5%',
        paddingVertical: '3%',
        borderBottomWidth: 5,
        borderColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center'

    },
    currentText: {
        padding: '5%',
    },

    row1: {
        marginVertical: 15,
        paddingBottom: 5,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        width: '90%',
        alignSelf: 'center',
    }
});

export default styles;