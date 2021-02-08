import React, { useState, useEffect, useRef } from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Divider, Input, Image } from 'react-native-elements'
import styles from '../Styles/MyStyle';

import { Feather } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';

import CameraScreen from '../Pages/CameraScreen';
import * as ImagePicker from 'expo-image-picker';


export default function AddNote(props) {
    const { category,updateCat } = props.route.params;
    //const { source } = props.route.params;

    const [sourceCamera, setsourceCamera] = useState('');
    const [imageUri, setimageUri] = useState('');

    const [showCamera, setshowCamera] = useState(false);//open cmera screen
    const [picFromGalery, setpicFromGalery] = useState(false);// print image from galery

    const [newHeader, setnewHeader] = useState('');
    const [newDescription, setnewDescription] = useState('');

    const btnInputNewNote = () => {
        //console.log(newHeader)
        if (newHeader !== '') {
            let flag = false;
            category.notes.map(note => {
                if (note.header === newHeader)
                    flag = true;
            })
            if (flag) {
                setnewHeader('');
                alert("You have already this header note, please input another name");
            }
            if (newDescription === '' && !flag) {
                flag = true;
                alert("Please Input Description");
            }


            if (!flag) {
                let newNote = '';
                imageUri !== '' ?
                    newNote = {
                        header: newHeader,
                        description: newDescription,
                        image: imageUri
                    }
                    : newNote = {
                        header: newHeader,
                        description: newDescription,
                        image: sourceCamera
                    }
                console.log(newNote)
                category.notes = [...category.notes, newNote];
                alert("note added")
                updateCat(category);
               props.navigation.navigate('NotesCategory',{category});
            }
        }
        else {
            alert("Please Input New Header");
        }
    }

    const btnOpenGalery = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
        });

        //console.log(result);

        if (!result.cancelled) {
            //console.log(result.uri);
            setimageUri(result.uri);
            setshowCamera(false);
            setpicFromGalery(true);
            setsourceCamera('');
            //not printed
            //console.log("LOG URI PIC from Galery:", imageUri);
        }
    };

    function getSourceCamera(uri) {
        setsourceCamera(uri);
        setpicFromGalery(false);
        setimageUri('');

    }
    return (
        <ImageBackground source={require('../assets/wallpaper.png')} style={styles.imgBG}>
            <View style={styles.header}>
                <Text style={styles.appHeader}>New Note</Text>

                <Divider style={{ backgroundColor: 'black', height: 1 }} />
            </View>
            <View style={styles.body}>
                <Input placeholder='Enter Header' onChangeText={(newHeader) => setnewHeader(newHeader)} />
                <Input placeholder='Enter Description' onChangeText={(newDescription) => setnewDescription(newDescription)} />

                <View style={styles.btnsOpenOrClose}>

                    {showCamera ?
                        <TouchableOpacity onPress={() => setshowCamera(false)}>
                            <Feather name="x" size={50} color="white" />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => { setshowCamera(true); setpicFromGalery(false) }}>
                            <Feather name="camera" size={50} color="white" />
                        </TouchableOpacity>
                    }
                    <TouchableOpacity onPress={() => btnOpenGalery()}>
                        <Feather name="image" size={50} color="white" />
                    </TouchableOpacity>
                </View>
                {showCamera ? <CameraScreen getUri={getSourceCamera} /> : <View />}
                {picFromGalery ?
                    <View style={styles.imageView}>
                        <Image source={{ uri: imageUri }} style={styles.imageInNewNote} />
                    </View> : <View />}
            </View>
            <Button title="Add Note" style={styles.btnAddNote} onPress={btnInputNewNote} />
        </ImageBackground>
    )
}
