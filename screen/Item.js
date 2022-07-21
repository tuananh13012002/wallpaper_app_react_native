import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";

export default function Item({ route }) {
  const saveImage = async (urlImage) => {
    let path = urlImage.split("/");
    const fileName = path[path.length - 1];

    const file = FileSystem.documentDirectory + fileName;
    FileSystem.downloadAsync(urlImage, file)
      .then(({ uri }) => {
        Save(uri);
        console.log(uri);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Save failed !");
      });
  };
  const Save = (uri) => {
    const per = MediaLibrary.requestPermissionsAsync();
    const asset = MediaLibrary.createAssetAsync(uri);
    MediaLibrary.createAlbumAsync("Downloads", asset);
    Alert.alert("Save succesfully");
  };
  const { dataItem } = route.params;
  console.log(dataItem);
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: dataItem }}
        style={{ width: "100%", height: "70%", marginBottom: 50 }}
      ></Image>
      <View style={{ width: "100%", alignItems: "flex-end", padding: 20 }}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={()=>saveImage(dataItem)}
        >
          <Image
            style={{ height: 20, width: 20 }}
            source={{
              uri: "https://img.icons8.com/material-sharp/344/download--v1.png",
            }}
          ></Image>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
