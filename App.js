import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import * as Font from "expo-font";
import { Image, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
const loadImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.loadAsync(image);
    }
  });

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    const fonts = loadFonts([Ionicons.font]);
    const images = loadImages([
      require("./hansorae.jpg"),
      "https://d1telmomo28umc.cloudfront.net/media/public/avatars/soeun2537-avatar.jpg",
    ]);
    console.log(images);
    await Promise.all([...fonts, ...images]);
  };

  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  return <Text>Finish Loading!</Text>
}
