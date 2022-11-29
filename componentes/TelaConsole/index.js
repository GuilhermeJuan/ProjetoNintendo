import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import styles from './styles';
import imgConsole1 from '../../assets/NS.jpg';
import imgConsole2 from '../../assets/NSO.jpg';
import imgConsole3 from '../../assets/NSL.jpg';


export default function TelaConsole() {
const Navigation = useNavigation();
 return (
  <ScrollView style={ styles.container}>
  <View style={ styles.box }>
    <Image source={ imgConsole1 } style={ styles.img } />
    <Text style={ styles.titulo }>NINTENDO SWITCH</Text>
    <Text style={ styles.subtitulo }>Nintendo Switch é um antigo modelo da Nintendo.</Text>
    <Text style={ styles.paragrafo }>O Nintendo Switch é o console mais recente da Nintendo lançado internacionalmente em 2017. Em 2019, a empresa anunciou sua versão mais simples, o Nintendo Switch Lite, por um preço mais barato e com controles fixos. Entretanto, modelo mais avançado se tornou sucesso de vendas e caminha para superar os números do Wii. O Nintendo Switch é um console versátil por possuir três modos diferentes de jogo: o portátil, semiportátil e o modo TV. Para jogar no modo TV é necessário encaixar o console na base e conectá-lo na televisão por meio de um cabo HDMI. Para isso, os controles Joy-Con precisam ser desconectados do console e podem ser utilizados para jogar sozinho ou separadamente em jogos multiplayer.

Já para ativar o modo semiportátil é preciso destacar os controles da base e apoiar o console em uma superfície plana. Assim, a base com a tela se transforma em uma espécie de "mini-TV" e os controles podem ser usados em jogos multiplayer. Para voltar ao modo portátil, que é o mais usado, basta conectar os controles Joy-Con novamente.</Text>
   </View>
  
  <View style={ styles.box }>
  <Image source={ imgConsole2 } style={ styles.img } />
    <Text style={ styles.titulo }>NINTENDO SWITCH OLED</Text>
    <Text style={ styles.subtitulo }>Nintendo Switch OLED é o mais novo modelo </Text>
    <Text style={ styles.paragrafo }>O novo console Nintendo Switch OLED é a versão atualizada e com mais tecnologia do console híbrido. A grande diferença dele é a sua nova tela OLED, agora de 7 polegadas com uma nitidez e brilho superiores ao encontrado no Switch original. Com um painel OLED, as cores são muito mais definidas, principalmente os pretos e brancos que ficam muito mais nítidos, melhorando os contornos nos jogos e toda a qualidade da imagem. Além dessa melhoria, o console conta agora com 64 GB de memória interna (enquanto o original tinha apenas 32 GB). Outro upgrade, muito exigido pelos fãs, é a entrada LAN na Dock de carregamento. Na versão anterior, era preciso adquirir um adaptador caso quisesse conectar o videogame à internet via cabo. A bateria continua semelhante à do Switch Padrão, com duração estimada entre 4,5 horas e 9 horas de uso. Por fim, o Nintendo Switch OLED tem uma base ajustável muito mais firme e regulável, oferecendo diversos ângulos de descanso para o console. </Text>
  </View>

  <View style={ styles.box }>
  <Image source={ imgConsole3 } style={ styles.img } />
    <Text style={ styles.titulo }>NINTENDO SWITCH Lite</Text>
    <Text style={ styles.subtitulo }>O console Nintendo Switch Lite foi projetado especificamente para o jogo portátil - então você pode se divertir com seus jogos favoritos onde quer que esteja.</Text>
    <Text style={ styles.paragrafo }>O Nintendo Switch Lite é um videogame portátil compatível com os mesmos jogos do Nintendo Switch tradicional. A versão Lite, porém, não possui várias funções presentes na edição "normal", como a transmissão de gameplay para a TV ou a oferta de controles de movimento Joy-Con. Apesar disso, o Switch Lite promete compensar essas desvantagens graças ao preço mais barato e tamanho menor, além de também ser mais leve do que o modelo padrão. Na prática, o hardware do Nintendo Switch Lite é o mesmo do Nintendo Switch tradicional, porém o design do videogame é diferente. Os controles e a tela do Switch Lite fazem parte da mesma unidade, enquanto no Switch comum os controles "Joy-Con" nas laterais podem ser removidos. Para fins de comparação, a versão padrão do Nintendo Switch tem uma tela de 6,2 polegadas, mede 102 mm x 239 mm x 13,9 mm e pesa 398 gramas. Já o Switch Lite tem uma tela de 5,5 polegadas, medidas de 91,1 mm x 208 mm x 13,9 mm e peso de 275 gramas </Text>
  </View>
</ScrollView>
  );
}