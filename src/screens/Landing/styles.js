import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 15,
        marginBottom: 5,
    },
    location: {
        borderBottomWidth: 1,
        paddingHorizontal: 3,
        paddingBottom: 3,
        borderRadius: 10,
        borderColor: '#aaa',
        left: 15,
        width: '60%',
        fontSize: 16,
    },
    map: {
        position: 'absolute',
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 3,
        borderRadius: 5,
    },
    
    category: {
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: '#ddd',
        borderRadius: 5,
        alignItems: 'center'
    },

    search: {
        color:'#888',
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: '#ddd',
        borderRadius: 5,
        alignItems: 'center',
        flex: 1,
        width: '100%',
        marginLeft: 10,
    }

});

export default styles;