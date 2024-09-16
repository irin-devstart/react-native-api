import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { log } from "react-native-reanimated";

export default class PostScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
  componentDidMount = () => {
    this.getData();
  };

  deleteData = (id) => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
      method: "DELETE",
    })
      .catch((error) => console.log(error))
      .finally(() => {
        alert("Data Berhasil Dihapus \nID : " + id);
      });
  };

  getData = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          data: json,
        }).catch((error) => console.log(error));
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={styles.view}>
              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.text}>{item.body}</Text>
              <Text
                style={{textSize: 29, color: 'blue', fontWeight: 'bold', marginLeft:9, textShadowColor: '#000'}}
                onPress={() =>
                  this.props.navigation.navigate("EditPost", {
                    itemId: item.id,
                  })
                }
              >
                {" "}
                Edit Post
              </Text>
              <Text
                style={{textSize: 29, color: 'blue', fontWeight: 'bold', marginLeft:9, textShadowColor: '#000'}}
                onPress={() => this.deleteData(item.id)}
              >
                {" "}
                Hapus Post
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e0e0",
  },
  view: {
    backgroundColor: "#fff",
    borderRadius: 2,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      hight: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
  text: {
    margin: 12,
    fontSize: 10,
  },
});
