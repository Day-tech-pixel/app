import React, {useState} from "react";
import {Ionicons} from "@expo/vector-icons";
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Alert,
  TouchableWithoutFeedbackBase,
} from "react-native";


export default function App() {
const [usuario, setusuario] = useState("");
const [senha, setsenha] = useState("");
const [mostrarsenha, setMostrarsenha] = useState(false);

function entrar() {
  if (!usuario.trim() || !senha.trim()) {
    Alert.alert("Atenção!", "Por favor, preencha todos os campos.");
    return;
  }
  Alert.alert("Sucesso!", "Login realizado com sucesso!");
  return;
}

  return (
    <ImageBackground
      source={require("./assets/login_wallpaper.jpg")}
      style={styles.background}
      resizeMode="cover"

    >

    <StatusBar barStyle="light-content"
    backgroundColor="#020817"
    />

    <View style={styles.container}>

      {/* Formulário de Login */}
    <View style={styles.formulario}>

      {/*Usuário */}
   <TextInput
  style={styles.input}
  placeholder="Usuário"
  placeholderTextColor="#666"
  value={usuario}
  onChangeText={setusuario}
  autoCapitalize="none"
/>

      {/*Senha */}

     <View style={styles.senhaContainer}>
  <TextInput
    style={styles.inputSenha}
    placeholder="Senha"
    placeholderTextColor="#666"
    value={senha}
    onChangeText={setsenha}
    secureTextEntry={!mostrarsenha}
  />

  <TouchableOpacity
    style={styles.iconeOlho}
    onPress={() => setMostrarsenha(!mostrarsenha)}
  >
    <Ionicons
      name={mostrarsenha ? "eye-off" : "eye"}
      size={24}
      color="#555"
    />
  </TouchableOpacity>
</View>

      {/* Entrar*/}
      <TouchableOpacity
      style={styles.botao}
      onPress={entrar}
        activeOpacity={0.8}>
          <Text style={styles.textobotao}>Entrar</Text>
      </TouchableOpacity>

    {/* Termos*/}
    <TouchableOpacity>
    <Text style={styles.link}>Termos e Políticas</Text>
    </TouchableOpacity>

    {/* Cadastro */}
    <TouchableOpacity>
      <Text style={styles.link}>Cadastro</Text>
    </TouchableOpacity>

    {/* Versão */}
    <View style={styles.versao}>
    <Text style={styles.textoVersao}>v 5.7.0</Text>
  </View>

  
  </View>
  
  </View>

</ImageBackground>

  );
}

{/* Estilização do APP */}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#020817",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    alignItems: "center",
  },

  formulario: {
   position: "absolute",
   //ajuste essa posição para subir/descer
    //essa posição é relativa a tela do celular
    top: "40%",
    width: "86%",
    alignItems: "center",
  },

  input: {
  width: "100%",
  height: 58,
  backgroundColor: "#cfcfcf",
  borderRadius: 10,
  paddingHorizontal: 20,
  color: "#222",
  fontSize: 17,
  marginBottom: 12,
},
senhaContainer: {
  width: "100%",
  height: 58,
  backgroundColor: "#cfcfcf",
  borderRadius: 10,
  paddingHorizontal: 20,
  color: "#222",
  fontSize: 17,
  marginBottom: 12,
},

  inputSenha:{
    width: "100%",
    height: 58,
    backgroundColor: "#cfcfcf",
    borderRadius: 10,
    paddingleft: 20,
    paddingRight: 55,
    color: "#ffffff",
    fontSize: 17,
  },

  iconeOlho: {
  position: "absolute",
  right: 15,
  top: 0,
  height: 58,
  width: 40,
  justifyContent: "center",
  alignItems: "center",
   backgroundColor: "#cfcfcf"
},

  botao: {
    width: "50%",
    height: 58,
    backgroundColor:  "#1814ff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 42,
    shadowColor: "#0066ff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 12,
  },

  textobotao: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  
  link: {
    color: "#c9e5ff",
    fontSize: 16,
    textDecorationLine: "underline",
    marginBottom: 12,
  },
  
  versao: {
   borderWidth: 1,
    borderColor:  "rgba(100, 180, 255, 0.65)",
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginTop: 0,
  },
  
  textoVersao: {
    color: "#c9e5ff",
    fontSize: 14,
  },
});
