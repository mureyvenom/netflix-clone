import React, { useEffect } from "react";
import { StyleSheet, Image, View, SafeAreaView } from "react-native";
import { NavigationEvents } from "react-navigation";

const IndexScreen = ({ navigation }) => {
  const nextPage = () => {
    setTimeout(() => {
      navigation.navigate("welcomeFlow");
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavigationEvents onWillFocus={nextPage} />
      <Image source={require("../../assets/images/whitelogo.png")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#67325E",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IndexScreen;
