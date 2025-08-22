import React from "react";
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen(props: any) {
  const router = useRouter();
  
  return (
    <SafeAreaView 
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}>
      <ScrollView  
        style={{
          flex: 1,
          backgroundColor: "#242642",
        }}
        contentContainerStyle={{
          paddingBottom: 20,
        }}>
        <TouchableOpacity 
          onPress={() => router.back()}
          activeOpacity={0.7}
          style={{
            alignSelf: 'flex-start', 
            marginTop: 58,
            marginBottom: 19,
            marginLeft: 16,
          }}>
          <LinearGradient 
            start={{x:0, y:0}}
            end={{x:0, y:1}}
            colors={["#000000", "#D05701"]}
            style={{
              paddingVertical: 3,
              paddingHorizontal: 31,
              borderRadius: 10,
              alignItems: 'center', 
            }}>
            <Text 
              style={{
                color: "#C1C1C1",
                fontSize: 32,
                fontWeight: "bold",
              }}>
              {"Назад"}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text 
          style={{
            color: "#FFFFFF",
            fontSize: 16,
            marginBottom: 20,
            marginHorizontal: 13,
            lineHeight: 22,
            textAlign: "justify",
          }}>
          {"В целом Юто — жизнерадостный человек, который искренне заботится о своих товарищах. Он также очень вежливый и дружелюбный, даже несмотря на то, что Иссей поначалу его недолюбливал. Как рыцарь, он горд, благороден, обладает чувством собственного достоинства и чести, подобающими рыцарю, и ему нравится сражаться с такими же мечниками, как Карламине.\n\nПоначалу он испытывал глубокую ненависть к Святым мечам и их владельцам. Но благодаря усилиям членов Клуба оккультных исследований в третьем томе и душам его погибших друзей, которые стали жертвами проекта «Святой меч», он смог преодолеть жажду мести и стал более терпимо относиться к Святым мечам.\n\nЮто считает Иссея своим лучшим другом, но в то же время испытывает к нему чувство соперничества и мечтает однажды сразиться с ним по-честному. В то же время он искренне беспокоится о его благополучии, желая отомстить за Иссея после его смерти в 11-м томе, и сдерживает себя только потому, что пообещал защищать девушек из клуба вместо него.\n\nЮто очень предан Риас как её рыцарь и называет себя «Мечом Риас Гремори», а также считает её своей старшей сестрой. Он без колебаний присоединился к команде Риас на Кубке Азазеля, даже несмотря на то, что в итоге ему, возможно, придётся сразиться с Иссеем. Он воспринял это как шанс положить конец их соперничеству и поклялся не сдерживаться в бою с ним.\n\nКак заметил Иссей в четвёртом томе, Юто сам по себе удивительно похотлив."}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}