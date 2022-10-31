import React from 'react';
import { View, Pressable, ScrollView, Image, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from './styles'

import imgXcloud from '../../assets/ps pass.jpg';
import imgFundo from '../../assets/logo.jpg';
import imgJogo from '../../assets/spiderman.jpg'

export default function TelaInicial() {
const Navigation = useNavigation();
 return (
    <View style={ styles.container }>
    <Image source={ imgFundo } style={ styles.img } />
    <Text style={ styles.titulo }>PlayStation</Text>
    <Text style={ styles.descricao }>PlayStation é uma marca de consoles criada pela Sony. Toque nos cards para conhecer.</Text>

    <Pressable
      onPress={ () => { Navigation.navigate("Consoles") } }
      style={styles.card}
    >
      <Image source={ imgConsole } style={ styles.cardImg } />
      <Text style={ styles.cardTexto }>Conheça os consoles</Text>
    </Pressable>

    <Pressable
      onPress={ () => { Navigation.navigate("Jogos") } }
      style={styles.card}
    >
      <Image source={ imgJogo } style={ styles.cardImg } />
      <Text style={ styles.cardTexto }>Conheça os jogos</Text>
    </Pressable>

    <Pressable
      onPress={ () => { Navigation.navigate("Nuvem") } }
      style={styles.card}
    >
      <Image source={ imgXcloud } style={ styles.cardImg } />
      <Text style={ styles.cardTexto }>Conheça o xCloud</Text>
    </Pressable>
  </View>
)
}