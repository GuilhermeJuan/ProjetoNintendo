import React from 'react';
import { View, Pressable, ScrollView, Image, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from './styles'

import imgPass from '../../assets/ninPass.png';
import imgFundo from '../../assets/NinLogo2.png';
import imgJogo from '../../assets/ninJogos.jpg';
import imgConsoles from '../../assets/ninConsoles.jpg'

export default function TelaInicial() {
const Navigation = useNavigation();
 return (
    <View style={ styles.container }>
    <Image source={ imgFundo } style={ styles.img } />
    <Text style={ styles.titulo }>Nintendo</Text>
    <Text style={ styles.descricao }>A Nintendo Co., Ltd. é uma desenvolvedora e publicadora japonesa de jogos eletrônicos e consoles sediada em Quioto. Foi fundada em setembro de 1889 pelo artesão Fusajiro Yamauchi e originalmente era uma fabricante de cartas de baralho tradicionais japonesas.</Text>

    <Pressable
      onPress={ () => { Navigation.navigate("Consoles") } }
      style={styles.card}
    >
      <Image source={ imgConsoles } style={ styles.cardImg } />
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
      <Image source={ imgPass } style={ styles.cardImg } />
      <Text style={ styles.cardTexto }>Nintendo Switch Online</Text>
    </Pressable>
  </View>
)
}