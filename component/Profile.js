import React from 'react'
import { Image, Text, View, Dimensions, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {

    const navigation = useNavigation()
    return (

        <SafeAreaView>

            <View style={{
                height: '100%',
                width: '100%',
            }}>
                <View>
                    <View style={{
                        height: 200,
                        width: '100%'
                    }}>
                        <Image source={require('./../images/space.jpg')} style={{ height: '100%', width: '100%' }} />
                    </View>
                    <View style={{
                        height: '100%',
                        width: '100%',
                    }}>

                        <View style={{
                            height: '18%',
                            width: '100%',
                            position: 'relative',
                        }}>
                            <View style={{
                                position: 'absolute',
                                left: '25%',
                                top: '-50%',
                                gap: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Image source={require('./../images/profile.jpeg')} style={{
                                    height: 150,
                                    width: 150,
                                    borderRadius: 75,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }} />
                                <View style={{
                                    gap: 8,
                                }}>
                                    <Text style={{ textAlign: 'center', color: 'black' }}>Shreyas Bansode</Text>
                                    <View style={{
                                        height: 30,
                                        backgroundColor: '#d7eaf8',
                                        justifyContent: 'center',
                                        borderRadius: 10,
                                        paddingLeft: 10,
                                        paddingRight: 10
                                    }}>
                                        <Text style={{ textAlign: 'center', color: 'black' }}>shreyashbansode1@gmai.com</Text>
                                    </View>
                                </View>
                            </View>

                        </View>

                        <View style={{
                            height: '100%',
                            width: '100%',
                        }}>
                            <TouchableOpacity style={{
                                height: 50,
                                width: '100%',
                                borderBottomWidth: 0.3,
                                borderBottomColor: 'black',

                            }}>
                                <View style={{
                                    height: "100%",
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginLeft: 10

                                }}>
                                    <View style={{
                                        width: '15%',
                                        marginLeft: 10
                                    }}>
                                        <MaterialIcons name='favorite-border' size={20} />
                                    </View>
                                    <View
                                        style={{
                                            width: '15%',
                                            marginLeft: 10
                                        }}
                                    >
                                        <Text style={{ color: 'black' }}>
                                            Favorate
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                height: 50,
                                width: '100%',
                                borderBottomWidth: 0.3,
                                borderBottomColor: 'black',



                            }} onPress={() => navigation.navigate('order')}>
                                <View style={{
                                    height: "100%",
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginLeft: 10
                                }}>
                                    <View style={{
                                        width: '15%',
                                        marginLeft: 10
                                    }}>
                                        <FontAwesome5 name='shuttle-van' size={20} />
                                    </View>

                                    <View style={{
                                        width: '15%',
                                        marginLeft: 10
                                    }}>
                                        <Text style={{ color: 'black' }}>
                                            orders
                                        </Text>

                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                height: 50,
                                width: '100%',
                                borderBottomWidth: 0.3,
                                borderBottomColor: 'black',

                            }} onPress={() => navigation.navigate('cart')}>
                                <View style={{
                                    height: "100%",
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginLeft: 10
                                }}>

                                    <View style={{
                                        width: '15%',
                                        marginLeft: 10
                                    }}>
                                        <AntDesign name='shoppingcart' size={20} />
                                    </View>

                                    <View style={{
                                        width: '15%',
                                        marginLeft: 10
                                    }}>
                                        <Text style={{ color: 'black' }}>
                                            Cart
                                        </Text>

                                    </View>
                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                height: 50,
                                width: '100%',
                                borderBottomWidth: 0.3,
                                borderBottomColor: 'black',


                            }}>
                                <View style={{
                                    height: "100%",
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginLeft: 10
                                }}>
                                    <View style={{
                                        width: '15%',
                                        marginLeft: 10
                                    }}>
                                        <MaterialIcons name='restart-alt' size={20} />
                                    </View>
                                    <View style={{
                                        width: '15%',
                                        marginLeft: 10
                                    }}>
                                        <Text style={{ color: 'black' }}>
                                            Clear
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                height: 50,
                                width: '100%',
                                borderBottomWidth: 0.3,
                                borderBottomColor: 'black',

                            }} onPress={() => navigation.navigate('login')}>
                                <View style={{
                                    height: "100%",
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginLeft: 10
                                }}>
                                    <View style={{
                                        width: '15%',
                                        marginLeft: 10
                                    }}>
                                        <AntDesign name='logout' />
                                    </View>
                                    <Text style={{ color: 'black' }}>
                                        Log out
                                    </Text>
                                </View>
                            </TouchableOpacity>

                        </View>


                    </View>

                </View>
            </View>
        </SafeAreaView >
    )
}




export default Profile