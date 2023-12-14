import React, { useState } from 'react'
import { Text, View, SafeAreaView, TextInput, Dimensions, Image, ScrollView } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const Search = () => {

    const data = [

        {
            id: 1,
            name: 'Kids bunk Bed  ',
            price: 500,
            detail: 'type : kids bund Bed',
            image: require('./../images/fn1.jpg'),
        }
        ,
        {
            id: 2,
            name: 'Sofa',
            price: 1500,
            detail: 'type : sofa lorem see ',
            image: require('./../images/fn1.jpg'),
        }
        ,
        {
            id: 3,
            name: 'Wardrobe ',
            price: 500,
            detail: 'type :  storing clothes',
            image: require('./../images/fn1.jpg'),
        },
        {
            id: 4,
            name: 'kids bunk Bed  ',
            price: 500,
            detail: 'type : kids bund Bed',
            image: require('./../images/fn1.jpg'),
        }

    ]


    const [searchValue, setSearchValue] = useState()

    console.log(searchValue)

    const filterData = data.filter((row) => {
        if (searchValue == undefined) {
            return row
        }
        else {
            const filter = row.name.toLowerCase().includes(searchValue.toLowerCase());
            return filter
        }
    })


    return (

        <SafeAreaView >
            <View style={{
                flex: 1,
                width: '100%',
            }}>
                <View style={{
                    height: 60,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{
                        height: 40,
                        width: '90%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: '#d7eaf8',
                        borderRadius: 10,
                        paddingLeft: 10,
                        paddingRight: 10
                    }}>
                        <TextInput placeholder='search' onChangeText={(text) => setSearchValue(text)} value={searchValue} style={{ width: '80%' }} />
                        <EvilIcons name='search' size={20} />
                    </View>

                </View>
                <View style={{
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                    alignItems: "center",
                    gap: 20,

                }}>



                    {
                        filterData?.map((row, index) => {

                            return (
                                <>

                                    <View style={{
                                        height: 100,
                                        width: '90%',
                                        backgroundColor: 'white',
                                        borderRadius: 10,
                                        flexDirection: 'row',
                                        justifyContent: 'space-around'
                                    }} key={index}>
                                        <View style={{
                                            height: 100,
                                            width: 100,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            <Image source={row.image} style={{ height: 70, width: 100, borderRadius: 10 }} />
                                        </View>
                                        <View style={{
                                            gap: 10,
                                            margin: 10,
                                            flexDirection: 'column',
                                            justifyContent: 'center'
                                        }}>
                                            <Text style={{
                                                fontSize: 20,
                                                fontWeight: 'bold',

                                            }}>{row.name}</Text>
                                            <Text style={{
                                                color: 'black'
                                            }}>{row.detail}</Text>
                                            <Text style={{ color: 'black' }}>${row.price}</Text>
                                        </View>
                                    </View>


                                </>
                            )
                        })
                    }

                </View>
            </View>
        </SafeAreaView>
    )
}

export default Search