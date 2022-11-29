import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ClothCard from "./ClothCard";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">이번주 날씨 정보</Text>
      </View>
      <Text className="text-xs text-gray-500 px-4">
        이번주 날씨에 대해서 알려드립니다!
      </Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <WeatherCard
          id={123}
          imgUrl="https://ssl.gstatic.com/onebox/weather/48/snow.png"
          title="2022.11.28 월"
          genre="흐리고 눈"
          address="123 main"
          short_description="패딩과 목도리"
        />
        <WeatherCard
          id={123}
          imgUrl="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
          title="2022.11.29 화"
          genre="맑고 약간 구름"
          address="123 main"
          short_description="밝은 옷과 가디건"
        />
        <WeatherCard
          id={123}
          imgUrl="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
          title="2022.11.30 수"
          genre="맑고 약간 구름"
          address="123 main"
          short_description="밝은 옷과 가디건"
        />
        <WeatherCard
          id={123}
          imgUrl="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
          title="2022.12.01 목"
          genre="맑고 약간 구름"
          address="123 main"
          short_description="밝은 옷과 가디건"
        />
        <WeatherCard
          id={123}
          imgUrl="https://ssl.gstatic.com/onebox/weather/48/snow_s_rain.png"
          title="2022.12.02 금"
          genre="눈과 비"
          address="123 main"
          short_description="우산과 잘 젖지 않는 운동화"
        />
      </ScrollView>
    </View>
  );
};

export default Weather;
