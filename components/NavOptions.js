import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { ArrowRightOutlined } from '@ant-design/icons';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    
    },

    {
        id: "456",
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "EatScreen",
    
    },

    
]

const NavOptions = () => {
  return (
    <FlatList
    keyExtractor={(item)=> item.id}
    data={data}
    horizontal
    renderItem={({item})=>(
        <TouchableOpacity 
        style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
            <View>

                <Image 
                style={{width: 120, height: 120, resizeMode: "contain"}}
                source={{uri: item.image}}
                />

                <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>

                <ArrowRightOutlined style={tw`p-2 bg-black rounded-full w-5 mt-4 text-white`} />
            </View>
        </TouchableOpacity>
    )}
    />
  )
}

export default NavOptions