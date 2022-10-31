import React from 'react';
import { ScrollView, View, Text, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from './styles';

import imgJogoForza from '../../assets/jogo-3.png';
import imgJogoCyber from '../../assets/jogo-2.png';
import imgJogoHalo from '../../assets/jogo-4.png';


export default function TelaJogos() {
const Navigation = useNavigation();
 return (
  <ScrollView>
  <View style={ styles.container }>
    <Text style={ styles.titulo }>Jogos em 4k</Text>
    <Text style={ styles.descricao }>Os principais jogos estão aqui. Veja abaixo três exemplos de grande sucesso.</Text>

    <View style={ styles.boxJogo }>
      <ImageBackground source={ imgJogoForza } style={ styles.card }>
        <Text style={ styles.cardTitulo }>Forza Horizon 5</Text>
      </ImageBackground>

      <Text style={ styles.paragrafo }>Forza Horizon 5 é um jogo de corrida. É o quinto jogo da série Forza Horizon e o décimo segundo título principal da franquia Forza. O jogo se passa em uma representação ficcional do México. </Text>
    </View>
    
    <View style={ styles.boxJogo }>
      <ImageBackground source={ imgJogoCyber } style={ styles.card }>
        <Text style={ styles.cardTitulo }>Cyberpunk 2077</Text>
      </ImageBackground>

      <Text style={ styles.paragrafo }>Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD Projekt.</Text>
    </View>
    
    <View style={ styles.boxJogo }>
      <ImageBackground source={ imgJogoHalo } style={ styles.card }>
        <Text style={ styles.cardTitulo }>Halo 5</Text>
      </ImageBackground>

      <Text style={ styles.paragrafo }>Halo 5: Guardians é um jogo de tiro em primeira pessoa, parte da franquia Halo e sequência de Halo 4.</Text>
    </View>
  </View>
</ScrollView>
  );
}