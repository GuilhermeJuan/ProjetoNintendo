import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from './styles';
import imgConsole1 from '../../assets/ps4.jpg';
import imgConsole2 from '../../assets/ps5.jpg';


export default function TelaConsole() {
const Navigation = useNavigation();
 return (
  <ScrollView style={ styles.container}>
  <View style={ styles.box }>
    <Image source={ imgConsole1 } style={ styles.img } />
    <Text style={ styles.titulo }>PLAYSTATION 4</Text>
    <Text style={ styles.subtitulo }>Desempenho de última geração no menor Xbox de todos os tempos.</Text>
    <Text style={ styles.paragrafo }>O Series S é pra quem busca jogos de nova geração gastando pouco. é o console mais barato da nova geração. Ele é o equilibrio entre gráfico e performance</Text>
  </View>
  
  <View style={ styles.box }>
  <Image source={ imgConsole2 } style={ styles.img } />
    <Text style={ styles.titulo }>PLAYSTATION 5</Text>
    <Text style={ styles.subtitulo }>O PlayStation 5 é o mais novo modelo lançado pela sony.</Text>
    <Text style={ styles.paragrafo }>O PlayStation 5 (PS5) é o novo console que chega sete anos após o lançamento do seu antecessor PlayStation 4 (PS4). O videogame chega ao Brasil no dia 19 de novembro pelo preço de R$ 4.499, na versão digital, e R$ 4.999, na edição com leitor Blu-Ray Ultra HD. Suas especificações foram divulgadas em março de 2020 durante uma transmissão online no PlayStation Blog, com comando de Mark Cerny, arquiteto-chefe responsável do aparelho. No streaming ao vivo, a marca divulgou a ficha técnica do concorrente do Xbox Series X. O destaque é a CPU AMD Zen 2, de 3,5 GHz, e o SSD personalizado de 825 GB superrápido que, de acordo com a fabricante, pode torná-lo o videogame "mais rápido do mundo". O processador gráfico de 10,28 Teraflops, em 2,23 GHz, indica uma capacidade de geração de poder visual menor do que seu principal concorrente da Microsoft, que vem equipado com 12 TFLOPs. Outra característica que chama a atenção é o Tempest Engine, sistema de áudio 3D que promete fidelidade e qualidade de som com alto nível de detalhes. </Text>
  </View>
</ScrollView>
  );
}