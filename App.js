import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.bigContainer1}>

        <View style={styles.midContainer1}>
          <View style={styles.container1}></View>
          <View style={styles.container2}></View>
          <View style={styles.container3}></View>
        </View>

        <View style={styles.midContainer2}>
          <View style={styles.container4}></View>
          <View style={styles.container5}></View>
        </View>

      </View> 

      <View style={styles.bigContainer2}>
      </View> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  bigContainer1: {
    flexDirection: 'row',
    flex:1,
  },
  bigContainer2: {
    flex: 1,
    backgroundColor: "grey"
  },
  midContainer1: {
    flex: 1,
    flexDirection: 'column',
  },
  midContainer2: {
    flex: 1,
    flexDirection: 'row'
  },
  container1: {
    flex: 5,
    backgroundColor: "purple",
  },
  container2: {
    flex: 2,
    backgroundColor: "yellow",
  },
  container3: {
    flex: 2,
    backgroundColor: "pink",
  },
  container4 : {
    flex: 3,
    backgroundColor: "red",
  },
  container5: {
    flex: 1,
    backgroundColor: "blue"
  }
  }
);