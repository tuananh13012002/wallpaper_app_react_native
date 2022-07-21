import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState, useEffect } from "react";

export default function Home({ navigation }) {
  const [duLieu, setDuLieu] = useState([]);
  var url = "https://asmserveranhlvtph18100.herokuapp.com/getAll";
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setDuLieu(data);
      });
  });
  return (
    <View style={styles.container}>
      <ScrollView horizontal={false} style={{ marginTop: 30 }}>
        <ScrollView horizontal={true}>
          <FlatList
            nestedScrollEnabled={true}
            numColumns={2}
            data={duLieu}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Item",{dataItem:item.linkAnh});
                  }}
                  style={{ flex: 1, backgroundColor: "gray" }}
                >
                  <Image
                    style={{
                      width: 170,
                      height: 170,
                      borderRadius: 5,
                      margin: 10,
                    }}
                    source={{uri:item.linkAnh}}
                  ></Image>
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item._id}
          ></FlatList>
        </ScrollView>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
