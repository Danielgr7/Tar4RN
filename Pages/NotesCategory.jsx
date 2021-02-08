import React, { useState, useEffect } from 'react'
import { Text, View, ImageBackground, SafeAreaView, ScrollView,TouchableOpacity } from 'react-native'
import styles from '../Styles/MyStyle';
import { Card, Button } from 'react-native-elements'
import { Feather as IconAperture } from '@expo/vector-icons';

export default function CCNotesCategory(props) {
    //const { categories } = props.route.params;
    console.log("Test222222")
    console.log(props.route.params)
    const { category, updateCat } = props.route.params;
 
    //only for render --- not to use for original state
    //const [notes, setNotes] = useState(category.notes);
    const [load, setLoad] = useState(false);
    const deleteNote = (noteInCard) => {
        let newNotes = [];
        category.notes.map(note => {
            if (note.header !== noteInCard.header) {
                newNotes.push(note);
            }
        })
        category.notes = newNotes;
        updateCat(category);
       // setNotes(newNotes);       
       load ? setLoad(false) : setLoad(true)
    }

    let notesCards = category.notes.map((noteInCard, key) => {
        return <Card key={key} >
            <Card.Title>{noteInCard.header}</Card.Title>
            <Card.Divider />
            <Text style={{ marginBottom: 10 }}>Description: {noteInCard.description}</Text>
            <Card.Image source={{ uri: noteInCard.image }}/>
            <View>
                <TouchableOpacity style={styles.btnDeleteNote} onPress={() => deleteNote(noteInCard)}>
                    <IconAperture name="trash-2" size={20} color="black"/>
                </TouchableOpacity>
            </View>
        </Card>
    });

    const btnAddNote = () => {
        props.navigation.navigate('AddNote', { category,updateCat });
    }

    return (
        <ImageBackground source={require('../assets/wallpaper.png')} style={styles.imgBG}>
            <SafeAreaView style={styles.container}>
                <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false} style={styles.scrollView}>
                    <Button title='Add Note' onPress={btnAddNote} />
                    {notesCards}
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    )
}
