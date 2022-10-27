import React from "react";
import { View, TextInput, Button } from "react-native";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const onSignUp = () => {};
  return (
    <View>
      <TextInput placeholder="이름" onChangeText={(name) => setName(name)} />
      <TextInput
        placeholder="이메일"
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder="비밀번호"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <Button onPress={() => onSignUp()} title="로그인" />
    </View>
  );
};

export default Register;
