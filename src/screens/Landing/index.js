import React from 'react';
import { View, Text, FlatList, Pressable} from 'react-native';

import Post from '../../components/Post';
import feed from '../../../assets/data/feed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const Landing =(props) => {
    return(
        <View>
            <View style={styles.row}>

                <FontAwesome name="bars" size={20} color="#b33939" />
                
                <Text style={styles.location} numberOfLines= {1}>
                    <FontAwesome name="map-marker" size={16} color="#000" /> 2066 Crist Drive, Los Altos, California
                </Text>

                <Pressable 
                style={styles.map}
                onPress = {() => console.warn('Maps view has been pressed')}
                >       
                    <Text style={{fontSize: 12, color: '#b33939', fontWeight: 'bold'}}>MapView </Text>
                    <FontAwesome name="map" size={12} color="#000" />
                </Pressable>

            </View>

            <View style={styles.row}>
                <Text style={styles.category}>
                    Categories
                </Text>

                <Text style={styles.search}>
                    <FontAwesome name="search" size={16} color="#b33939" />  What are you looking for?
                </Text>

            </View>

            {/* <View> */}
                <FlatList
                    contentContainerStyle={{ paddingBottom: 300 }}
                    data={feed}
                    renderItem = { ({item}) => <Post post={item}/>}
                />
            {/* </View> */}

        </View>
    );
};

export default Landing;