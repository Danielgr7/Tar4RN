import React, { useState, useEffect, useRef } from 'react';
import styles from '../Styles/MyStyle';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Feather as IconAperture } from '@expo/vector-icons';
import { Image } from 'react-native-elements';

export default function CameraScreen(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [showImage, setshowImage] = useState(true);
    const cam = useRef();

    const [imageSource, setimageSource] = useState('');
    const takePicture = async () => {
        try {
            if (cam.current) {
                const option = { quality: 0.3, base64: true, skipProcessing: true }
                const picture = await cam.current.takePictureAsync(option);
                const source = picture.uri;
                //console.log("picture source ----> ", source);
                setimageSource(source);
                props.getUri(source);

                setshowImage(false);

                //internal storge....
                //if (source) { handleSave(source); }
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    //internal stroge picture
    {
        // const handleSave = async (picture: string) => {
        //     const { status } = Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        //     if (status === "granted") {
        //         const assert = await MediaLibrary.createAssetAsync(picture);
        //         await MediaLibrary.createAlbumAsync("OurAlbumApp", assert);
        //         console.log("Daniel");
        //     }
        //     else{
        //         console.log("no premission given");
        //     }
        // }
    }

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <>
            {showImage ? <Camera ref={cam} style={styles.camera} type={type}>
                <View style={styles.cameraButtons}>
                    <View>
                        <TouchableOpacity style={styles.btnTakePhoto} onPress={() => takePicture()}>
                            <IconAperture name="aperture" size={50} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnFlip} onPress={() => {
                            setType(type === Camera.Constants.Type.back ?
                                Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                            );
                        }}>
                            <Text style={styles.textFlip}> Flip </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Camera> : <View style={styles.imageView}>
                    <Image source={{ uri: imageSource }} style={styles.imageInNewNote} />
                </View>


            }

        </>
    )
}
