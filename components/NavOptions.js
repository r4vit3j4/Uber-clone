import { Image, Text, View } from "react-native";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "HomeScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          disabled={!origin}
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 shadow-md rounded-md ${
            !origin && "opacity-20"
          }`}
        >
          <View>
            <Image
              source={{
                uri: item.image,
              }}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
          </View>
          <Text style={tw`mt-2 text-lg font-bold`}>{item.title}</Text>
          <Icon
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            type="antdesign"
            name="arrowright"
            color="white"
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
