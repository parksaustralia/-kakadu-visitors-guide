import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatListProps,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import ubirrSunset from "./../assets/home/ubirr-sunset.jpg";
import twinFalls from "./../assets/home/twin-falls-aerial.jpg";
import weaving from "./../assets/home/weaving.jpg";
import termiteMound from "./../assets/home/termite-mound.jpg";
import barramundi from "./../assets/home/barramundi-fishing.jpg";

const images = [ubirrSunset, twinFalls, weaving, termiteMound, barramundi];

const SLIDER_WIDTH = Dimensions.get("window").width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ index }: { index: number }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={images[index]} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    // borderRadius: 8,
    width: ITEM_WIDTH,
    paddingTop: 20,
    paddingBottom: 40,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.29,
    // shadowRadius: 4.65,
    // elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

const CarouselCards = () => {
  const isCarousel = React.useRef<Carousel<any>>(null);
  const [index, setIndex] = React.useState(0);

  return (
    <View>
      <Carousel
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        // useScrollView={true}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={index}
        carouselRef={
          isCarousel.current as React.Component<FlatListProps<any>, {}, any>
        }
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
    <View style={pageStyles.container}>
      <CarouselCards />
      <Text>Connect with one of the oldest living cultures on earth</Text>
      <Text>
        “Our land has a big story. Sometimes we tell a little bit at a time.
        Come and hear our stories, see our land. A little bit might stay in your
        hearts. If you want more, you come back.”
      </Text>
      <Text>— Jacob Nayinggul, Manilakarr clan.</Text>
      <StatusBar style="auto" />
      {/* <Button title="Go to Plan" onPress={() => navigation.navigate("Plan")} /> */}
    </View>
  );
}

const pageStyles = StyleSheet.create({
  container: {
    // alignItems: "top",
    backgroundColor: "#fff",
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
