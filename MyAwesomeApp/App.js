import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Image
          style={styles.img}
          source={{
            uri: "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg",
          }}
        />
        <Text style={styles.baseText}>Fajri Alhusaini</Text>
        <Text>JAHRA</Text>
        <View style={styles.deatiles}>
          <View>
            <Text style={styles.deatilesText}>8k</Text>
            <Text style={styles.deatilesText2}> FOLLOW</Text>
          </View>
          <View>
            <Text style={styles.deatilesText}>803k</Text>
            <Text style={styles.deatilesText2}> LIKE</Text>
          </View>
          <View>
            <Text style={styles.deatilesText}>1.3K</Text>
            <Text style={styles.deatilesText2}> PHOTO</Text>
          </View>
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#96AED0",
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: 250,
    height: 250,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    // borderRadius: 10,
    // padding: 10,
  },
  img: {
    width: 60,
    height: 60,
    marginBottom: 10,
    borderRadius: 30,
  },
  baseText: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    marginBottom: 5,
  },
  deatiles: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 15,
  },
  deatilesText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    alignItems: "center",
  },
  deatilesText2: {
    fontSize: 12,
    color: "gray",
    fontWeight: "normal",
    textAlign: "center",
    alignItems: "center",
  },
});
