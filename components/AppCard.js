import * as React from 'react';
import { Avatar, IconButton, Card, Title, Paragraph } from 'react-native-paper';
import { View,StyleSheet, TouchableOpacity,Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';


import colors from '../config/colors';



export default function AppCard({ title, experience, description, hours }) {

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

    return (
        <View style={{ paddingTop: 100, marginHorizontal: 15 }}>
            <Card style={styles.card}>
                <Card.Title title={title} subtitle={experience} left={LeftContent} />
                <Card.Content>
                    <Paragraph style={{ marginBottom: 10 }}>{description}</Paragraph>
                    <Text>Hours:{hours}</Text>
                </Card.Content>
                <Card.Actions style={styles.actions}>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity>
                            <IconButton
                                icon={({ size, color }) => <MaterialCommunityIcons name='apple-keyboard-caps' size={size} color={color} />}
                            />
                            <Text style={{ marginTop: -5 }}>Apply</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <IconButton
                                icon={({ size, color }) => <MaterialCommunityIcons name='message-text' size={size} color={color} />}
                            />
                            <Text style={{ marginTop: -5 }}>Message</Text>
                        </TouchableOpacity>
                    </View>
                </Card.Actions>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
     card:{
         borderRadius:15,
         backgroundColor:colors.white,
         marginBottom:20, 
     },

     buttonsContainer:{
        flexDirection:'row'
     },

     texts:{
        paddingRight:20
     },

     actions:{
        justifyContent: 'space-evenly',
        borderTopColor: colors.medium,
        borderTopWidth:1,
        marginHorizontal:6,
        marginTop:10,
        paddingTop:1
        
     }
})

{/* <AppCard 
          title="Posting"
          experience="Senior Associate"
          description="Something about law work here in this box"
          hours="4"/> */}