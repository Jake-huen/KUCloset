import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { HashtagIcon, KeyIcon, StarIcon } from "react-native-heroicons/outline";

const WeatherCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-36 w-48 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <Text className="text-xs text-gray-500">
            <Text className="text-gray-500">{genre}</Text>
          </Text>
        </View>
      </View>

      <View className="flex-row items-center space-x-1">
        <HashtagIcon color="gray" opacity={0.4} size={22} />
        <Text className="text-xs text-gray-500">{short_description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default WeatherCard;
