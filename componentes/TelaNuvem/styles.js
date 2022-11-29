import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  titulo: {
    fontSize:26,
    fontWeight: "bold",
    color: '#140718',
    marginBottom: 5,
  },
  subtitulo: {
    color: '#140718',
    fontWeight: "bold",
    fontSize:20,
    marginBottom: 20,
  },
  paragrafo: {
    color: '#140718',
    width: 320,
    fontSize:20,
    marginBottom: 15,
    textAlign: "center"
  },
  img: {
    width: 320,
    height: 180,
    borderRadius: 5
  }
});

export default styles;