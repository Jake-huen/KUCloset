import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useLayoutEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  UserIcon,
  ChevronDownIcon,
  ServerStackIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeatruedRow";
import Weather from "../components/Weather";
import AddRow from "../components/AddRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center space-x-2 px-4">
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2019/01/15/00/16/dresser-3933262_960_720.png",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xr">
            오늘의 코디를 시작하세요!!
          </Text>
          <Text className="font-bold text-3xl">KULOSET</Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-300 p-3">
          <MagnifyingGlassIcon />
          <TextInput
            placeholder="오늘의 옷을 검색해주세요"
            keyboardType="default"
          />
        </View>
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />

        <Weather />

        <FeaturedRow
          id="123"
          title="어제입은 옷들"
          description="오늘은 다른 옷을 입어보는 것도 좋을 것 같아요!"
        />

        <AddRow
          id="1234"
          title="옷 선택 화면으로 이동"
          description="내 옷장에 있는 옷들을 선택해봐요!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
