import React from "react";
import { 
  SafeAreaView, 
  View, 
  ImageBackground, 
  ScrollView, 
  Image, 
  Text, 
  TouchableOpacity 
} from "react-native";
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient'; 
import { useRouter } from "expo-router"; 

export default function HomeScreen(props: any) {
  const router = useRouter(); 

  return (
    <SafeAreaView 
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}>
      <ImageBackground 
        source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/lIbSV6AXNe/vgablw50_expires_30_days.png"}} 
        resizeMode = {'stretch'}
        style={{
          flex: 1,
        }}
        >
        <ScrollView  
          style={{
            flex: 1,
          }}
          contentContainerStyle={{ paddingBottom: 20 }} 
          >
          <Image
            source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/lIbSV6AXNe/jphhgy3s_expires_30_days.png"}} 
            resizeMode = {"contain"} 
            style={{
              height: 197,
              marginBottom: 19,
              marginHorizontal: 30,
            }}
          />
          <View 
            style={{
              alignItems: "center",
              marginBottom: 49,
            }}>
            <Text 
              style={{
                color: "#CAC8C8",
                fontSize: 40,
                fontWeight: "bold", 
              }}>
              {"Конеко Тодзё"}
            </Text>
          </View>
          
          {/* Кнопка Описание */}
          <TouchableOpacity 
            style={{
              alignItems: "center",
              marginBottom: 31,
            }}
            onPress={() => {/* */}}
            >
            <LinearGradient 
              start={{x:0, y:0}}
              end={{x:0, y:1}}
              colors={["#000000", "#B2B0B0"]}
              style={{
                paddingVertical: 3,
                paddingHorizontal: 61,
                borderRadius: 5, 
              }}>
                <Link href='../dx4/koneko_d1'>
              <Text 
                style={{
                  color: "#C1C1C1",
                  fontSize: 32,
                  fontWeight: "bold",
                }}>
                {"Описание"}
              </Text>
              </Link>
            </LinearGradient>
          </TouchableOpacity>
          
          {/* Кнопка Внешность */}
          <TouchableOpacity 
            style={{
              alignItems: "center",
              marginBottom: 31,
            }}
            onPress={() => {/* */}}
            >
            <LinearGradient 
              start={{x:0, y:0}}
              end={{x:0, y:1}}
              colors={["#000000", "#B2B0B0"]}
              style={{
                paddingVertical: 3,
                paddingHorizontal: 46,
                borderRadius: 5, 
              }}>
                <Link href='../dx4/koneko_d2'>
              <Text 
                style={{
                  color: "#C1C1C1",
                  fontSize: 32,
                  fontWeight: "bold",
                }}>
                {"Внешность"}
              </Text>
              </Link>
            </LinearGradient>
          </TouchableOpacity>
          
          {/* Кнопка Характер */}
          <TouchableOpacity 
            style={{
              alignItems: "center",
              marginBottom: 237,
            }}
            onPress={() => {/* */}}
            >
            <LinearGradient 
              start={{x:0, y:0}}
              end={{x:0, y:1}}
              colors={["#000000", "#B2B0B0"]}
              style={{
                paddingVertical: 3,
                paddingHorizontal: 61,
                borderRadius: 5,
              }}>
                <Link href='../dx4/koneko_d3'>
              <Text 
                style={{
                  color: "#C1C1C1",
                  fontSize: 32,
                  fontWeight: "bold",
                }}>
                {"Характер"}
              </Text>
              </Link>
            </LinearGradient>
          </TouchableOpacity>
          
          {/* Кнопка Назад */}
          <TouchableOpacity 
            style={{
              marginLeft: 29,
              alignSelf: 'flex-start',
            }}
            onPress={() => router.back()}
            >
            <LinearGradient 
              start={{x:0, y:0}}
              end={{x:0, y:1}}
              colors={["#000000", "#B2B0B0"]}
              style={{
                paddingVertical: 3,
                paddingHorizontal: 31,
                borderRadius: 5, 
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
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}