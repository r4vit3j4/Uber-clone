import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements/dist/icons/Icon";
import tw from "tailwind-react-native-classnames";

const NavFavourites = () => {
  const data = [
    {
      id: "123",
      icon: "home",
      location: "Home",
      destination: "Code Street, London, UK",
    },
    {
      id: "456",
      icon: "briefcase",
      location: "Work",
      destination: "London Eye, London, UK",
    },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200 h-1`, { height: 0.5 }]} />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          {/* {console.log(item.icon)}; */}
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={item.icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-bold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    ></FlatList>
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
