import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ClothCard from "./ClothCard";

const AddRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <View className="pt-4">
        <TouchableOpacity className="bg-white mr-3 shadow">
          <View
            source={{
              uri: "https://image.hanssem.com/hsimg/gds/368/765/765088_A1.jpg?v=20220805134846",
            }}
            className="h-36 w-48 rounded-sm"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddRow;
