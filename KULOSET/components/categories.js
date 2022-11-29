import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      <CategoryCard
        imgUrl="https://t1.daumcdn.net/cfile/tistory/9997044D5BF15FF807"
        title="미니멀 룩"
      />
      <CategoryCard
        imgUrl="https://image.msscdn.net/images/goods_img/20210722/2037637/2037637_4_500.jpg?t=20220311101804"
        title="이지 캐주얼 룩"
      />
      <CategoryCard
        imgUrl="https://mblogthumb-phinf.pstatic.net/MjAxOTEwMDdfMjI1/MDAxNTcwNDMyNDYwMDY5.KZRDMPbvNuKYN0Qkw57HT7rWT6J0fkG1d_DoiKokY2sg.WuW64A98i8sLB4jK1U0lFxahLrvUXsYYJI85hgeWT2kg.JPEG.gimdh0930/100.jpg?type=w800"
        title="아메카지"
      />
      <CategoryCard
        imgUrl="https://image.msscdn.net/images/goods_img/20210924/2144044/2144044_1_500.jpg?t=20210924100143"
        title="후드티"
      />
      <CategoryCard
        imgUrl="https://static.goldengoose.com/image/upload/w_auto,c_scale,f_auto,q_auto/v1652977110/Style/ECOMM/GMP00596.P000621-50100"
        title="청바지"
      />
      <CategoryCard
        imgUrl="https://image.msscdn.net/images/goods_img/20181123/912314/912314_6_500.jpg?t=20201102163153"
        title="패딩"
      />
      <CategoryCard
        imgUrl="https://www.prada.com/content/dam/pradabkg_products/U/UC4/UC456M/11BAF0480/UC456M_11BA_F0480_S_222_SLF.jpg/jcr:content/renditions/cq5dam.web.hebebed.800.800.jpg"
        title="코트"
      />
    </ScrollView>
  );
};

export default Categories;
