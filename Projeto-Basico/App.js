import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    //VIEW E EQUIVALENTE A UMA DIV
    <View style={estilos.container}>
      <Text style={estilos.texto}>Que a força esteja com você. </Text>
    </View>
  );// <StatusBar style="auto" />
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9EA1CA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: '#00004f',
  }
});
