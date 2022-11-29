import { View, Text, useNavigation } from "react-native";
import React from "react";
import { useLayoutEffect } from "react";

const CodyScreen = () => {
  const navigation = useNavigation();
  const {
    params: { title, imgUrl },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View>
      <Text>CodyScreen</Text>
    </View>
  );
};

export default CodyScreen;
