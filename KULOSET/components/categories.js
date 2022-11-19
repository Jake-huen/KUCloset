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
        imgUrl="http://image.mujikorea.net/goods/31/06/03/56/M5AG302_COL_962_400.jpg"
        title="셔츠"
      />
      <CategoryCard
        imgUrl="https://www.leekorea.co.kr/web/product/medium/202210/b44fb09c52b4604a04660b97b634f963.jpg"
        title="니트"
      />
      <CategoryCard
        imgUrl="https://cdn.pixabay.com/photo/2016/03/31/19/21/clothes-1294933__340.png"
        title="스웨터"
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
        imgUrl="https://image.msscdn.net/images/goods_img/20191002/1175159/1175159_1_500.jpg"
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
