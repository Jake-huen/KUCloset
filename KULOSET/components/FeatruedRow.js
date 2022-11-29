import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ClothCard from "./ClothCard";

const FeatruedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <ClothCard
          id={123}
          imgUrl="https://www.leekorea.co.kr/web/product/medium/202210/b44fb09c52b4604a04660b97b634f963.jpg"
          title="니트"
          rating={4.5}
          genre="LEE 여성 오버핏 니트"
          address="123 main"
          short_description="This is a sex"
        />
        <ClothCard
          id={123}
          imgUrl="https://image.msscdn.net/images/goods_img/20220726/2682090/2682090_1_500.jpg?t=20221005154954"
          title="패딩"
          rating={5.0}
          genre="SPAO 패딩"
          address="123 main"
          short_description="This is a sex"
        />
        <ClothCard
          id={123}
          imgUrl="http://m.firstment.co.kr/web/product/big/202203/e10d0d4f331990014b4ef9f93c2282c5.jpg"
          title="슬랙스"
          rating={3.0}
          genre="무신사 스탠다드 슬랙스"
          address="123 main"
          short_description="This is a sex"
        />
        <ClothCard
          id={123}
          imgUrl="https://image.msscdn.net/images/goods_img/20200312/1348077/1348077_1_500.jpg?t=20200312153508"
          title="양말"
          rating={4.7}
          genre="목 긴 양말"
          address="123 main"
          short_description="This is a sex"
        />
        <ClothCard
          id={123}
          imgUrl="https://assets.burberry.com/is/image/Burberryltd/e0cd264aa8e1d1ce617bb27771a2812fdcd61f2e?$BBY_V2_SL_1x1$&wid=1251&hei=1251"
          title="목도리"
          rating={4.5}
          genre="Burberry 캐시미어 스카프"
          address="123 main"
          short_description="This is a sex"
        />
      </ScrollView>
    </View>
  );
};

export default FeatruedRow;
