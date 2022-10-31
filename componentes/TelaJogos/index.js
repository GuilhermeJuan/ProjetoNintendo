import React from 'react';
import { ScrollView, View, Text, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from './styles';

import imgJogoCOD from '../../assets/spiderman.jpg';
import imgJogoSpiderMan from '../../assets/cod.jpg';
import imgJogoTheLastOfUs from '../../assets/tlu.jpg';


export default function TelaJogos() {
const Navigation = useNavigation();
 return (
  <ScrollView>
  <View style={ styles.container }>
    <Text style={ styles.titulo }>Jogos em 4k</Text>
    <Text style={ styles.descricao }>Os principais jogos estão aqui. Veja abaixo três exemplos de grande sucesso.</Text>

    <View style={ styles.boxJogo }>
      <ImageBackground source={ imgJogoSpiderMan } style={ styles.card }>
        <Text style={ styles.cardTitulo }>Marvel's Spider-Man: Miles Morales </Text>
      </ImageBackground>

      <Text style={ styles.paragrafo }>Na mais nova aventura do universo de Marvel's Spider-Man, o adolescente Miles Morales está se adaptando a um novo lar enquanto segue os passos de seu mentor, Peter Parker, como novo Spider-Man. </Text>
    </View>
    
    <View style={ styles.boxJogo }>
      <ImageBackground source={ imgJogoCOD } style={ styles.card }>
        <Text style={ styles.cardTitulo }>Call of Duty: Modern Warfare</Text>
      </ImageBackground>

      <Text style={ styles.paragrafo }>O Call of Duty: Modern Warfare® II coloca os jogadores dentro de um conflito global sem precedentes que conta com o retorno dos Operadores icônicos da Força-Tarefa 141.</Text>
    </View>
    
    <View style={ styles.boxJogo }>
      <ImageBackground source={ imgJogoTheLastOfUs } style={ styles.card }>
        <Text style={ styles.cardTitulo }>The Last of Us: part 1</Text>
      </ImageBackground>

      <Text style={ styles.paragrafo }>Conheça a história emocionante e os personagens inesquecíveis de The Last of Us, vencedor de mais de 200 prêmios de Jogo do Ano.</Text>
    </View>
  </View>
</ScrollView>
  );
}