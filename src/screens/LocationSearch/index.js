import React, {useState} from 'react';
import { View, Text, TextInput, FlatList} from 'react-native';

import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import searchResults from '../../../assets/data/search';

const LocationSearch=(props) => {
    const [inputText , setInputText] = useState('');
    return(
        <View>
            <View style={styles.row}>

                <FontAwesome name="arrow-left" size={20} color="#b33939" />
                <TextInput
                    style={styles.search}
                    placeholder="Search for street name or landmark"
                    value ={inputText}
                    onChangeText ={setInputText}
                />
            </View>
            <View style={styles.current}>
                <FontAwesome name="crosshairs" size={20} color="#b33939" />
                <View style={styles.currentText}>
                    <Text style={{fontSize: 16, fontWeight: 'bold' , color: '#b33939'}}>Current Location</Text>
                    <Text style={{color: '#b33939'}}>Use GPS</Text>
                </View>

            </View>

            <FlatList
                data={searchResults}
                renderItem= {({item}) => (
                    <View style={styles.row1}>
                        <FontAwesome name="map-marker" size={20} color="#b33939" />
                        <Text style={{color: '#555'}} numberOfLines= {1}>     {item.description}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default LocationSearch;