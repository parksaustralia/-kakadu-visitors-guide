import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import Carousel, {
  Pagination,
  ParallaxImage,
} from "react-native-snap-carousel";

import ubirrSunset from "./../assets/home/ubirr-sunset.jpg";
import twinFalls from "./../assets/home/twin-falls-aerial.jpg";
import weaving from "./../assets/home/weaving.jpg";
import termiteMound from "./../assets/home/termite-mound.jpg";
import barramundi from "./../assets/home/barramundi-fishing.jpg";

interface ImageItem {
  image: ImageSourcePropType;
  caption: string;
}

const images: ImageItem[] = [
  {
    image: ubirrSunset,
    caption: "Ubirr",
  },
  {
    image: twinFalls,
    caption: "Twin Falls",
  },
  {
    image: weaving,
    caption: "Weaving",
  },
  {
    image: termiteMound,
    caption: "Termite mound",
  },
  {
    image: barramundi,
    caption: "Fishing",
  },
];

const screenWidth = Dimensions.get("window").width;

const CarouselCards = function () {
  const carouselRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);

  const renderItem = ({ item }: { item: ImageItem }, parallaxProps: any) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={item.image}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.2}
          {...parallaxProps}
        />
        <Text style={styles.caption} numberOfLines={2}>
          {item.caption}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 60}
        data={images}
        renderItem={renderItem}
        hasParallaxImages={true}
        vertical={false}
        containerCustomStyle={{ flexGrow: 0 }}
        onScrollIndexChanged={(index) => setActiveSlideIndex(index)}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlideIndex}
        carouselRef={carouselRef}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "rgba(0, 0, 0, 0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <CarouselCards />
      <Text>Connect with one of the oldest living cultures on earth</Text>
      <Text>
        “Our land has a big story. Sometimes we tell a little bit at a time.
        Come and hear our stories, see our land. A little bit might stay in your
        hearts. If you want more, you come back.”
      </Text>
      <Text>— Jacob Nayinggul, Manilakarr clan.</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 3,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  caption: {
    fontStyle: "italic",
  },
  page: {
    backgroundColor: "#fff",
    color: "#222",
    flex: 1,
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
