import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 10,
        marginVertical: 5,
        paddingBottom: 10,
        borderColor: 'red',
        backgroundColor: '#e6e6e6',
        borderRadius: 20,
    },

    image: {
        width: '100%',
        aspectRatio: 12/5,
        marginBottom: '3%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    details: {
        paddingHorizontal: 15,
        // borderWidth: 1,
        borderColor: 'black',
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 1,
    },
    name: {
        fontSize: 16,
    },
    rating: {
        backgroundColor: 'green',
        padding: 2,
        paddingHorizontal: 10,
        borderRadius: 5,
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold',
    },

    category: {
        color: "#777",
        fontSize: 12,
        fontWeight: 'bold',
    },
    
    mobile: {
        color: '#777',
        fontSize: 12,
    },
    distance: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        backgroundColor: '#999',
        padding: 2,
        paddingHorizontal: 10,
        borderRadius: 5,
    },

    notify: {
        position: 'absolute',
        top: 5,
        right: 10,
        padding: 3,
        borderRadius: 5,
        backgroundColor: '#cd6363'
    }

});

export default styles;