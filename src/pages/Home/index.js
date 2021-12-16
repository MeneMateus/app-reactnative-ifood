import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ButtonContainer,
  Image,
} from "./style";
import {Text} from 'react-native'

import banner from "../../assets/img/splash.png";
import Button from "../../components/Button";

export default function Home({ navigation }) {
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text>Pedir comida nunca foi tão fácil</Text>
          <Image source={banner} />
          <Text>Permitir localização</Text>
          <Text>Para descobrir restaurantes que entregam em sua região</Text>
        </View>
        <ButtonContainer>
        <Button text='PULAR' onPress={()=>{navigation.navigate('Main')}}/>
        <Button text ="ENTRAR" theme="primary"/>
      </ButtonContainer>
      </SafeAreaView>
    </>
  );
}
