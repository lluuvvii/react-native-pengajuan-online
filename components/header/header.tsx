import { Image, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <Image
            source={require('../../assets/images/tuban-logo.png')}
            style={styles.logo}
          />
          <View>
            <Text style={styles.title}>
              SISTEM INFORMASI DOKUMEN ONLINE KEPENDUDUKAN
            </Text>
            <Text style={styles.subtitle}>KABUPATEN TUBAN</Text>
          </View>
        </View>

        <View style={styles.rightSection}>
          <Avatar.Icon size={36} icon="account" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#1a3a8f", 
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1
  },
  leftSection: {
    width: "90%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1
  },
  logo: {
    width: 45,
    height: 55,
    resizeMode: "contain",
    marginRight: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 10,
    color: "#fff",
  },
  rightSection: {
    width: "10%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1
  },
  username: {
    color: "#fff",
    marginLeft: 6,
    fontSize: 12,
    fontWeight: "600",
  },
});
