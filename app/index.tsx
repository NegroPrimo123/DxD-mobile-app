import React from "react";
import { SafeAreaView, View, ImageBackground, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

export default function HomeScreen(props: any) {
  const router = useRouter();
  
  return (
    <SafeAreaView 
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}>
      <ImageBackground 
        source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/lIbSV6AXNe/yku5zwde_expires_30_days.png"}} 
        resizeMode="stretch"
        style={{
          flex: 1,
        }}
      >
        <ScrollView  
          style={{
            flex: 1,
          }}
          contentContainerStyle={{
            alignItems: "center",
            paddingBottom: 20,
          }}
        >


          <Image
            source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/lIbSV6AXNe/hx8hqlfx_expires_30_days.png"}} 
            resizeMode="contain"
            style={{
              width: 262,
              height: 130,
              marginBottom: 40,
              marginTop: 20,
            }}
          />
          
          <LinearGradient 
            start={{x:0, y:0}}
            end={{x:0, y:1}}
            colors={["#ED3A3A", "#841111", "#872121"]}
            style={{
              paddingVertical: 11,
              paddingHorizontal: 30,
              borderRadius: 8,
              marginBottom: 20,
            }}
          >
			<Link href='/characters'>
            <Text 
              style={{
                color: "#FFFFFF",
                fontSize: 32,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {"Персонажи"}
            </Text>
			</Link>
          </LinearGradient>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}