import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  BookmarkIcon,
  KeyIcon,
  StarIcon,
} from "react-native-heroicons/outline";

const ClothCard = ({
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
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text>
            <Text className="text-gray-500"> {genre}</Text>
          </Text>
        </View>
      </View>

      <View className="flex-row items-center space-x-1">
        <BookmarkIcon color="gray" opacity={0.4} size={22} />
        <Text className="text-xs text-gray-500">저장하기</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ClothCard;
