import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";

const Separator = () => (
    <View
      style={{
        marginVertical: 8,
       
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />
  );
export default class HomeScreen extends Component {

  

  render() {
    return (
      <View style={{ flex: 1, margin: 10, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="Create Post"
          onPress={() => this.props.navigation.navigate("CreatePost")}
        />
        <Separator />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("PostDetails")}
        />
      </View>
    );
  }
}
