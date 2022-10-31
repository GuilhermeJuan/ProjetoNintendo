import React from 'react';
import { ImageBackground, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import imgFundo from '../../assets/ps pass.jpg'



export default function TelaNuvem() {
const Navigation = useNavigation();
 return (
  <ImageBackground source={ imgFundo } style={ styles.container }>
  <Text style={ styles.titulo }>PlayStation Plus Video Pass</Text>
  <Text style={ styles.subtitulo }>Serviço de streaming de jogos</Text>
  <Text style={ styles.paragrafo }>Mais novo lançamento da Sony para salvar seus jogos.</Text>
  <Text style={ styles.paragrafo }>Desktop, Notebook, console ou até mesmo celular pode se tornar um PlayStation.</Text>
  <Text style={ styles.paragrafo }>Através de uma assinatura você terá um PlayStation virtual sempre que precisar.</Text>
  <Image source={ imgFundo } style={ styles.img } />
</ImageBackground>
  );
}