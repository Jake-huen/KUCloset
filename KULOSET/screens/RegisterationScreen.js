import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";

import COLORS from "../assets/colors/colors";
import Button from "../components/Button";
import Input from "../components/Input";
import Loader from "../components/Loader";

const RegistrationScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const [inputs, setInputs] = useState({
    email: "",
    fullname: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("유효한 이메일을 입력해주세요!", "email");
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError("이름을 입력해주세요!", "fullname");
      isValid = false;
    }

    if (!inputs.password) {
      handleError("비밀번호를 입력해주세요!", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError("5글자 이상을 입력해주세요!", "password");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem("userData", JSON.stringify(inputs));
        navigation.navigate("Login");
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}
      >
        <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: "bold" }}>
          회원가입
        </Text>
        <Text style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}>
          회원가입을 위해서 정보를 입력해주세요.
        </Text>
        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={(text) => handleOnchange(text, "email")}
            onFocus={() => handleError(null, "email")}
            iconName="email-outline"
            label="Email"
            placeholder="사용자 님의 이메일을 입력해주세요"
            error={errors.email}
          />

          <Input
            onChangeText={(text) => handleOnchange(text, "fullname")}
            onFocus={() => handleError(null, "fullname")}
            iconName="account-outline"
            label="이름"
            placeholder="사용자 님의 이름을 입력해주세요!"
            error={errors.fullname}
          />

          <Input
            onChangeText={(text) => handleOnchange(text, "password")}
            onFocus={() => handleError(null, "password")}
            iconName="lock-outline"
            label="비밀번호"
            placeholder="사용하실 비밀번호를 5글자 이상으로 입력해주세요!"
            error={errors.password}
            password
          />
          <Button title="회원가입" onPress={validate} />
          <Text
            onPress={() => navigation.navigate("Login")}
            style={{
              color: COLORS.black,
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            이미 계정이 있습니까? (바로 로그인 하러가요!)
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
