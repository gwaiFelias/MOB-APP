import { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <Image source={{ uri: 'https://i.pinimg.com/736x/33/e6/69/33e669401f60f7b105c8470adc4888b5.jpg' }} style={styles.image} />

      {/* Name Input */}
      <TextInput
        placeholder="GWYNETH FELIAS"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      {/* Greeting */}
      <Text style={styles.text}>
        {name ? `Hello, ${name}!` : 'GWYNETH FELIAS'}
      </Text>

      {/* Counter */}
      <Text style={styles.text}>Counter: {count}</Text>
      <View style={styles.buttonRow}>
        <Button title="-" onPress={() => setCount(count + 1)} />
        <Button title="+" onPress={() => setCount(count - 1)} />
        <Button title="RESET" onPress={() => setCount(0)} />
      </View>

      {/* Dynamic Messages */}
      {count > 5 && <Text style={styles.message}>Wow, that’s a big number!</Text>}
      {count < 0 && <Text style={styles.message}>Careful, it’s negative!</Text>}
      {count === 0 && <Text style={styles.message}>Counter is reset.</Text>}
    </View>
  );
}

// Change made: Added name input, greeting, counter, dynamic messages. Date: 05/19/2026
const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', justifyContent:'center', padding:20 },
  image: { width:120, height:120, borderRadius:60, marginBottom:20 },
  input: { borderWidth:1, width:'80%', padding:10, marginBottom:10, textAlign:'center' },
  text: { fontSize:16, marginVertical:5 },
  buttonRow: { flexDirection:'row', justifyContent:'space-around', width:'60%', marginTop:10 },
  message: { fontSize:14, color:'#555', marginTop:8 },
});
