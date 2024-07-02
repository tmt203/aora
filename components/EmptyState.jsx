import { View, Text, Image } from "react-native";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { router } from "expo-router";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4 ">
      <Image
        source={images.empty}
        resizeMode="contain"
        className="w-[270px] h-[215px] bg-red-100"
      />

      <Text className="text-xl text-center font-psemibold text-white mt-2">{title}</Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>
      
      <CustomButton 
        title="Create video"
        handlePress={() => router.push("/create")}
        containerStyles="my-5"
      />
    </View>
  );
};

export default EmptyState;
