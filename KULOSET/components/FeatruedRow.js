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
          genre="니트"
          address="123 main"
          short_description="This is a sex"
        />
        <ClothCard
          id={123}
          imgUrl="https://www.leekorea.co.kr/web/product/medium/202210/b44fb09c52b4604a04660b97b634f963.jpg"
          title="니트"
          rating={4.5}
          genre="니트"
          address="123 main"
          short_description="This is a sex"
        />
        <ClothCard
          id={123}
          imgUrl="https://www.leekorea.co.kr/web/product/medium/202210/b44fb09c52b4604a04660b97b634f963.jpg"
          title="니트"
          rating={4.5}
          genre="니트"
          address="123 main"
          short_description="This is a sex"
        />
        <ClothCard
          id={123}
          imgUrl="https://www.leekorea.co.kr/web/product/medium/202210/b44fb09c52b4604a04660b97b634f963.jpg"
          title="니트"
          rating={4.5}
          genre="니트"
          address="123 main"
          short_description="This is a sex"
        />
        <ClothCard
          id={123}
          imgUrl="https://www.leekorea.co.kr/web/product/medium/202210/b44fb09c52b4604a04660b97b634f963.jpg"
          title="니트"
          rating={4.5}
          genre="니트"
          address="123 main"
          short_description="This is a sex"
        />
      </ScrollView>
    </View>
  );
};

export default FeatruedRow;
