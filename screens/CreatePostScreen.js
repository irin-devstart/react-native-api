import React, { Component } from "react";
import { Text, View, TextInput, Button, StyleSheet, Alert } from "react-native";

export default class CreatePostScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      response: [],
      isInsert: false,
    };
  }

   postData  = async () => {
      if (this.state.title ==="" && this.state.body ==="") {
          alert("Data Tidak Boleh Kosong")
      } else {
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url, {
          method: "POST",
          body: JSON.stringify({
            title: this.state.title,
            body: this.state.body,
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => this.setState({ response: json, isInsert: true }))
          .catch((error) => console.error(error))
          .finally(() => {
            alert("Data Berasil Di Tambah \nDengan ID: " + this.state.response.id)
          });
          
      }
      await console.log(this.state.response);
      
  };

  

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 20 }}> Create Post Screen</Text>

          <TextInput
            style={styles.textTitle}
            placeholder="Title!"
            onChangeText={(text) => this.setState({
                title: text
            })}
          />

          <TextInput
            style={styles.textBody}
            multiline={true}
            numberOfLines={4}
            placeholder="Content"
            onChangeText={(text) => this.setState({
                body: text
            })}
          />

       
            <View style={{alignItems: "flex-end", marginRight: 14}}>
            <Button title="Simpan Data" onPress={()=> this.postData()} />
            </View>

             
            {
                this.state.isInsert ?  (
                  <View>
                  <Text> {this.state.response.title}</Text>
                  <Text> {this.state.response.body}</Text>
                  </View>
                )  
                       
            
                  
               : null
            
            }

          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textTitle: {
    borderRadius: 5,
    margin: 10,
    padding: 10,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    textAlignVertical: "top",
  },
  textBody: {
    borderRadius: 5,
    margin: 10,
    padding: 10,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    textAlignVertical: "top",
  },
});
