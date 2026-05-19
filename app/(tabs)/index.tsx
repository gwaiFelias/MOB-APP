import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Profile Photo */}
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/33/e6/69/33e669401f60f7b105c8470adc4888b5.jpg' }} // replace with your own photo link or local asset
        style={styles.photo}
      />

      {/* Name */}
      <Text style={styles.name}>Gwyneth Felias</Text>

      {/* Course */}
      <Text style={styles.course}>MULTIMEDIA</Text>

      {/* Short Bio */}
      <Text style={styles.bio}>
        Somone who believes in the art of being unique
      </Text>
    </View>
  );
}

// Change made: Added photo, name, course, bio. Date: 05/19/2026
const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', justifyContent:'center', backgroundColor:'#f5f5f5', padding:20 },
  photo: { width:120, height:120, borderRadius:60, marginBottom:20 },
  name: { fontSize:22, fontWeight:'bold', marginBottom:8 },
  course: { fontSize:18, color:'#555', marginBottom:12 },
  bio: { fontSize:14, color:'#666', textAlign:'center', paddingHorizontal:20 },
});
// Change made: Added photo, name, course, bio. Date: 05/19/2026
