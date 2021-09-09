import React from 'react';
import { View, Text, Image, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import styles from './styles';

const Post =(props) => {

    const post = props.post;
    return(

        // -- conatiner
        <View style ={styles.container}>

            {/* --profile picture */}
            <Image style={styles.image}
            source = {{uri: post.image}}/>

            {/* --notify button */}
            <Pressable 
            style={styles.notify}
            onPress = {() => console.warn('notification button has been pressed')}
            >
                    <FontAwesome name="bell" size={12} color="#fff" />
            </Pressable>

            {/* --Details about the rediwala */}
            <View style={styles.details}>
                
                {/* --Name and Rating */}
                <View style={styles.row}>
                    <Text style={styles.name}>{post.name}</Text>

                    <Text style={styles.rating}>
                        {post.rating.toFixed(1)} <FontAwesome name="star" size={12} color="#fff" />
                    </Text>
                </View>

                {/* --Category of prodcut */}
                <Text style={styles.category}>{post.product}</Text>

                {/* --Mobile/Immobile with the distance from the user */}
                <View style={styles.row}>
                    <Text style={styles.mobile}>{post.mobile?"Mobile":"Immobile"}</Text>

                    <Text style={styles.distance}>{post.distance.toFixed(1)} km <FontAwesome5 name="walking" size={12} color="#fff" />
                    </Text>
                </View>

            </View>
        
        </View>
    );
};

export default Post;