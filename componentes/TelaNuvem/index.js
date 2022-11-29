import React from 'react';
import { ImageBackground, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import imgFundo from '../../assets/ninFundoo2.jpg'



export default function TelaNuvem() {
const Navigation = useNavigation();
 return (
  <ImageBackground source={ imgFundo } style={ styles.container }>
    <Text style={ styles.titulo }>Nintendo Switch Online é um serviço online por assinatura da Nintendo para o console de jogos Nintendo Switch.</Text>
    <Text style={ styles.subtitulo }>Serviço de streaming de jogos</Text>
    <Text style={ styles.paragrafo }>Leve sua experiência de jogo a outro nível com uma assinatura!</Text>
    <Text style={ styles.paragrafo }>Há mais de 100 jogos em ambas as listas no total. Isso efetivamente transforma seu Nintendo Switch em um NES Classic Mini ou SNES Classic Mini. Quem paga a mais pelo Pacote de Expansão também tem acesso aos jogos clássicos N64 e Sega Mega Drive / Genesis.</Text>
    <Text style={ styles.paragrafo }>Através de uma assinatura você terá mais jogos, mais funcionalidades e mais diversão</Text>
    <Image source={ imgFundo } style={ styles.img } />
</ImageBackground>
  );
}