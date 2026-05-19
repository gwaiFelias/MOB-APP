import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/150' }}
        style={styles.photo}
      />
      <TextInput
        placeholder="Type your name..."
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Text style={styles.name}>
        {name ? `Hello, ${name}!` : 'Your name will appear here'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#f5f5f5' },
  photo: { width:120, height:120, borderRadius:60, marginBottom:20 },
  input: { width:200, borderWidth:1, borderColor:'#ccc', borderRadius:8, padding:10, marginBottom:20, backgroundColor:'#fff', textAlign:'center' },
  name: { fontSize:22, fontWeight:'bold', marginTop:12 },
});
