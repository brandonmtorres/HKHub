import React from 'react'
import { View, Text,StyleSheet,ScrollView, KeyboardAvoidingView } from 'react-native'
import{Avatar,Card,Divider,Title,Paragraph, IconButton} from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import colors from '../../config/colors';



export default function ProfileScreen() {

    const [text, setText] = React.useState('');
    const [practiceGroup, setPracticeGroup] = React.useState('');
    const [interest, setInterest] = React.useState('');


    return (
        <KeyboardAwareScrollView>

            <View style={styles.container}>
                <View style={styles.avatar}>
                    <Avatar.Icon size={100} icon='account' />
                    <View style={styles.fixedInfoContainer}>
                        <Text style={{ color: 'white', marginTop: 20, fontWeight: 'bold', fontSize: 20, marginBottom: 5 }}>
                            Bo Fewey
                        </Text>
                        <Text style={{ color: 'white', marginBottom: 3, fontSize: 14 }}>
                            Experience Level: Senior Associate
                        </Text>
                        <Text style={{ color: 'white', fontSize: 14 }}>
                            Miami (interests, practice group, bio, subject matter expertise, bar admissin)
                        </Text>
                    </View>
                </View>

                <Card style={styles.card}>
                    <Card.Content>
                        <Title>
                            Subject Matter Expertise
                            <IconButton
                                icon='pencil'
                                color={colors.primary}
                                onPress={() => console.log('Pressed')}
                            />
                        </Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Content>
                        <Title>Biography
                            <IconButton
                                icon='pencil'
                                color={colors.primary}
                                onPress={() => console.log('Pressed')}
                            />
                        </Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
                    <Card.Content>
                        <Title>Interests
                            <IconButton
                                icon='pencil'
                                color={colors.primary}
                                onPress={() => console.log('Pressed')}
                            />
                        </Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
                    <Card.Content>
                        <Title>Bar Admissions
                            <IconButton
                                icon='pencil'
                                color={colors.primary}
                                onPress={() => console.log('Pressed')}
                            />
                        </Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                </Card>
            </View>

        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    
    avatar:{
        flex:1, 
        justifyContent:'center',
        alignItems:'flex-start',
        marginTop: 70,
        marginBottom: 50,
        marginLeft:25
        
    },

    container:{
        backgroundColor:colors.primary,
    },

    card:{
        borderRadius:1
    },

    textbox:{
        marginHorizontal: 10,
        marginTop:10
    }
})

