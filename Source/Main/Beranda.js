import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {useState} from "react";

function Beranda({ navigation }) {
    const [berangkat,setBerangkat] = useState('');
    const [tujuan,setTujuan] = useState('');
    const [tanggal,setTanggal] = useState('');

    const register = () =>{
        navigation.navigate('Pencarian',{
            berangkat: berangkat,
            tujuan: tujuan,
            tanggal, tanggal,
        })
    }

    return (

        <View style={Style.body}>
            <Text style={Style.title}>Raven.id</Text>
            <Text style={Style.Label}>Lokasi Keberangkatan</Text>
            <View style={Style.box}>
                <TextInput style={Style.TextInput}
                    placeholder="Masukkan Lokasi Keberangkatan"
                    onChangeText={(text)=>setBerangkat(text)}
                />
            </View>

            <Text style={Style.Label}>Lokasi Tujuan</Text>
            <View style={Style.box}>
                <TextInput style={Style.TextInput}
                    placeholder="Masukkan Lokasi Tujuan"
                    onChangeText={(text)=>setTujuan(text)}
                />
            </View>

            <Text style={Style.Label}>Tanggal Keberangakatan</Text>
            <View style={Style.box}>
                <TextInput style={Style.TextInput}
                    placeholder="Masukkan Tanggal Keberangakatan"
                    onChangeText={(text)=>setTanggal(text)}
                />
            </View>
            
            <View style={Style.box2}>
                <TouchableOpacity style={Style.tombol} onPress={register}>
                    <Text style={Style.texttombol}>Cari Jadwal</Text>
                </TouchableOpacity>
            </View>

            <View style={Style.box2}>
                <Text style={Style.credit}>Copyright RIAN DIKA ERLANGGA-119140222</Text>
            </View>
        </View>
    );
}

const Style = StyleSheet.create({
    body: {
        backgroundColor: 'lightgreen',
        borderRadius: 5,
        padding: 20,
        margin: 10,
        elevation: 1,
        width: '95%',
        position: 'absolute',
    },

    Label: {
        fontSize: 20,
        color: '#000',
        fontWeight: '700',
        textAlign: 'left',
        paddingLeft: 10,
    },
    
    title:{
        fontSize: 36,
        color: 'black',
        fontWeight: '700',
        textAlign: 'center',
        paddingLeft: 10,
        paddingBottom : 20,
    },
    TextInput: {
        flex: 1,
        paddingLeft: 5,
    },

    tanggal: {
        color: '#ffffff',
        fontSize: 20,
        paddingBottom: 12,
        paddingTop: 20,
    },

    box: {   
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: 'black',
        height: 60,
        borderRadius: 5,
        margin: 10,
    },

    tujuan: {
        color: '#ffffff',
        fontSize: 20,
        paddingBottom: 12,
        paddingTop: 20,
    },

    input: {
        width: '90%',
        height: '5%',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        borderRadius: 9,
        marginBottom: 10,
        position: 'relative',
        fontSize: 12,
    },
    tombol: {
        backgroundColor: 'orange',
        borderRadius: 5,
        padding: 10,
        width: '70%',
    },

    box2: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    credit: {
		zIndex: 1,
		textAlign: 'center',
		color: '#000'
	},
    texttombol: {
        textAlign: 'center',
        color: '#000',
        fontSize: 20,
        fontWeight: '700',
    },
   
});

export default Beranda