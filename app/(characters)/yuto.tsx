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
        source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/lIbSV6AXNe/qix8w4ej_expires_30_days.png"}} 
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
            source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/lIbSV6AXNe/t6oeihd6_expires_30_days.png"}} 
            resizeMode = {"contain"} 
            style={{
              height: 197,
              marginBottom: 20,
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
                color: "#FF6A00",
                fontSize: 40,
                fontWeight: "bold", 
              }}>
              {"Юто Киба"}
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
              colors={["#000000", "#D05701"]}
              style={{
                paddingVertical: 3,
                paddingHorizontal: 61,
                borderRadius: 5,
              }}>
                <Link href='../dx6/yuto_d1'>
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
              colors={["#000000", "#D05701"]}
              style={{
                paddingVertical: 3,
                paddingHorizontal: 51,
                borderRadius: 5, 
              }}>
                <Link href='../dx6/yuto_d2'>
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
              marginBottom: 236,
            }}
            onPress={() => {/* */}}
            >
            <LinearGradient 
              start={{x:0, y:0}}
              end={{x:0, y:1}}
              colors={["#000000", "#D05701"]}
              style={{
                paddingVertical: 3,
                paddingHorizontal: 61,
                borderRadius: 5, 
              }}>
                <Link href='../dx6/yuto_d3'>
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
              marginLeft: 25,
              alignSelf: 'flex-start',
            }}
            onPress={() => router.back()}
            >
            <LinearGradient 
              start={{x:0, y:0}}
              end={{x:0, y:1}}
              colors={["#000000", "#D05701"]}
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