import React from "react";
import { connect } from "react-redux";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

const Dashboard = ({ user }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Dashboard</Text>
      <Text style={styles.text}>Find A Location</Text>
      <Text style={styles.text}>Search by topic</Text>
      <ul>
        <li>#repair</li>
        <li>#races</li>
        <li>#parks</li>
        <li>#trails</li>
        <li>#parts</li>
        <li>#roadbike</li>
        <li></li>
      </ul>
    </View>
  );
};

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: "bold" },
});

AppRegistry.registerComponent("App", () => Dashboard);
AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root"),
});

const mapStateToProps = (state) => {
  return {
    user: state.userInfo,
  };
};

export default connect(mapStateToProps, {})(Dashboard);
