import React from 'react';
import { ScrollView, View, Text, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from './styles';

import imgJogoPK from '../../assets/ninSuperMarioWorld.PNG';
import imgJogoSMW from '../../assets/ninPokemon.png';
import imgJogoTheLegendofZelda from '../../assets/ninZeldas.jpg';


export default function TelaJogos() {
const Navigation = useNavigation();
 return (
  <ScrollView>
  <View style={ styles.container }>
    <Text style={ styles.titulo }>Tantos jogos disponíveis</Text>
    <Text style={ styles.descricao }>Os principais jogos estão aqui. Veja abaixo três exemplos de grande sucesso.</Text>

    <View style={ styles.boxJogo }>
      <ImageBackground source={ imgJogoSMW} style={ styles.card }>
        <Text style={ styles.cardTitulo }>Pokémon Scarlet e Violet </Text>
      </ImageBackground>

      <Text style={ styles.paragrafo }>Pokémon Scarlet e Pokémon Violet são dois jogos eletrônicos de RPG desenvolvidos pela Game Freak e publicados pela Nintendo e The Pokémon Company. Pokémon Scarlet & Violet é uma mistura de heranças de Legends: Arceus e Sword & Shield, sendo a primeira dupla da série principal a apresentar um mapa em mundo aberto – ou seja, sem cidades interligadas ou necessidade de HMs e itens específicos para avançar.  </Text>
    </View>
    
    <View style={ styles.boxJogo }>
      <ImageBackground source={ imgJogoPK } style={ styles.card }>
        <Text style={ styles.cardTitulo }>Super Mario™ 3D World</Text>
      </ImageBackground>

      <Text style={ styles.paragrafo }>Salte e escale por dezenas de fases coloridas! Multiplique a diversão juntando-se ou competindo contra amigos localmente* ou online** para alcançar o objetivo de cada fase. Trabalhem juntos para explorar e descobrir itens colecionáveis ou competir pela coroa ganhando a maior pontuação, criando um frenesi amistoso! Mario (e seus amigos) podem usar uma variedade de itens power-up como o Super Bell, que concede habilidades de gato, como escalar e arranhar. Aproveite as vantagens extras para completar as fases e conquistar a coroa!</Text>
    </View>
    
    <View style={ styles.boxJogo }>
      <ImageBackground source={ imgJogoTheLegendofZelda } style={ styles.card }>
        <Text style={ styles.cardTitulo }>The Legend of Zelda™: Breath of the Wild</Text>
      </ImageBackground>

      <Text style={ styles.paragrafo }>Esqueça tudo que você sabe sobre os jogos da série The Legend of Zelda. Entre em um mundo de descobertas, exploração e aventura em The Legend of Zelda: Breath of the Wild, o novo jogo da famosa série que veio para romper barreiras. Viaje pelos vastos campos, florestas e montanhas enquanto descobre o que aconteceu com o reino de Hyrule nesta deslumbrante aventura a céu aberto. E agora no Nintendo Switch, a sua jornada tem mais liberdade do que nunca. Leve o seu console para qualquer lugar e viva aventuras na pele de Link da maneira que quiser.</Text>
    </View>
  </View>
</ScrollView>
  );
}