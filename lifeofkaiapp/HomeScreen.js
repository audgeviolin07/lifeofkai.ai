// import React, { useState, useEffect, useRef } from 'react';
// import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import Constants from 'expo-constants';
// import { Camera, CameraType } from 'expo-camera';
// import * as MediaLibrary from 'expo-media-library';
// import { MaterialIcons } from '@expo/vector-icons';
// import Button from './src/components/Button';

// export default function App() {
//   const [hasCameraPermission, setHasCameraPermission] = useState(null);
//   const [image, setImage] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);
//   const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
//   const cameraRef = useRef(null);

//   const logMessage = (message) => {
//     fetch('http://172.20.10.3:3000', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ message }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Message sent successfully');
//       })
//       .catch((error) => {
//         console.error('Error sending message:', error);
//       });
//   };
  
//   // Usage example
//   logMessage('Hello from client!');

//   useEffect(() => {
//     (async () => {
//       MediaLibrary.requestPermissionsAsync();
//       const cameraStatus = await Camera.requestCameraPermissionsAsync();
//       setHasCameraPermission(cameraStatus.status === 'granted');
//     })();
//   }, []);

//   const takePicture = async () => {
//     if (cameraRef) {
//       try {
//         const data = await cameraRef.current.takePictureAsync();
//         console.log(data.uri); // Log the URI for testing purposes
  
//         // Send the URI to the FastAPI server
//         const uri = "http://172.20.10.3:3000";
//         fetch('http://172.20.10.3:3000', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ uri: uri })
//         })
//           .then(response => {
//             if (response.ok) {
//               console.log('URI sent successfully');
//             } else {
//               console.log('Failed to send URI to the server');
//             }
//           })
//           .catch(error => {
//             console.error('Error sending URI:', error);
//           });

  
//         setImage(data.uri);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };
  
//   const savePicture = async () => {
//     if (image) {
//       try {
//         const asset = await MediaLibrary.saveToLibraryAsync(image);
//         const assetInfo = await MediaLibrary.getAssetInfoAsync(asset);
//         const imagePath = assetInfo.localUri;
//         alert('Picture saved! 🎉');
//         setImage(null);
//         console.log('saved successfully');
//         console.log('Image path:', imagePath["uri"]);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };
  

//   if (hasCameraPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {!image ? (
//         <Camera
//           style={styles.camera}
//           type={type}
//           ref={cameraRef}
//           flashMode={flash}
//         >
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               paddingHorizontal: 30,
//             }}
//           >
//             <Button
//               title=""
//               icon="retweet"
//               onPress={() => {
//                 setType(
//                   type === CameraType.back ? CameraType.front : CameraType.back
//                 );
//               }}
//             />
//             <Button
//               onPress={() =>
//                 setFlash(
//                   flash === Camera.Constants.FlashMode.off
//                     ? Camera.Constants.FlashMode.on
//                     : Camera.Constants.FlashMode.off
//                 )
//               }
//               icon="flash"
//               color={flash === Camera.Constants.FlashMode.off ? 'gray' : '#fff'}
//             />
//           </View>
//         </Camera>
//       ) : (
//         <Image source={{ uri: image }} style={styles.camera} />
//       )}

//       <View style={styles.controls}>
//         {image ? (
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               paddingHorizontal: 50,
//             }}
//           >
//             <Button
//               title="Re-take"
//               onPress={() => setImage(null)}
//               icon="retweet"
//             />
//             <Button title="Save" onPress={savePicture} icon="check" />
//           </View>
//         ) : (
//           <Button title="Take a picture" onPress={takePicture} icon="camera" />
//         )}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#000',
//     padding: 8,
//   },
//   controls: {
//     flex: 0.5,
//   },
//   button: {
//     height: 40,
//     borderRadius: 6,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     color: '#E9730F',
//     marginLeft: 10,
//   },
//   camera: {
//     flex: 5,
//     borderRadius: 20,
//   },
//   topControls: {
//     flex: 1,
//   },
// });

import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { MaterialIcons } from '@expo/vector-icons';
import Button from './src/components/Button';

export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  const logMessage = (message) => {
    fetch('http://172.20.10.3:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Message sent successfully');
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  };
  
  // Usage example
  logMessage('Hello from client!');

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        console.log(photo.uri); // Log the URI for testing purposes
    
        const formData = new FormData();
        formData.append('file', {
          uri: photo.uri,
          type: 'image/jpeg', // Adjust the MIME type accordingly if needed
          name: 'upload.jpg' // You might want to dynamically generate this based on the photo details or a timestamp
        });
    
        // Send the image file to the FastAPI server
        fetch('http://172.20.10.3:3000/upload', {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data', // This is important for file uploads
          },
        })
        .then(response => response.json())
        .then(result => {
          console.log('Success:', result);
          setImage(photo.uri); // Set image URI to state if you need to display the image or use it later
        })
        .catch(error => {
          console.error('Error uploading image:', error);
        });
    
      } catch (error) {
        console.log('Error taking picture:', error);
      }
    }
  };
  
  
  const savePicture = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.saveToLibraryAsync(image);
        const assetInfo = await MediaLibrary.getAssetInfoAsync(asset);
        const imagePath = assetInfo.localUri;
        alert('Picture saved! 🎉');
        setImage(null);
        console.log('saved successfully');
        console.log('Image path:', imagePath["uri"]);
      } catch (error) {
        console.log(error);
      }
    }
  };
  

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          ref={cameraRef}
          flashMode={flash}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 30,
            }}
          >
            <Button
              title=""
              icon="retweet"
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            />
            <Button
              onPress={() =>
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                )
              }
              icon="flash"
              color={flash === Camera.Constants.FlashMode.off ? 'gray' : '#fff'}
            />
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}

      <View style={styles.controls}>
        {image ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 50,
            }}
          >
            <Button
              title="Re-take"
              onPress={() => setImage(null)}
              icon="retweet"
            />
            <Button title="Save" onPress={savePicture} icon="check" />
          </View>
        ) : (
          <Button title="Take a picture" onPress={takePicture} icon="camera" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
    padding: 8,
  },
  controls: {
    flex: 0.5,
  },
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#E9730F',
    marginLeft: 10,
  },
  camera: {
    flex: 5,
    borderRadius: 20,
  },
  topControls: {
    flex: 1,
  },
});