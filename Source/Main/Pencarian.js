import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
//ba=bandara awal,bt=bandara tujuan
var ba = ['Lampung', 'Jakarta', 'Lampung', 'Lampung'];
var bt = ['Osaka', 'Tokyo', 'Jakarta', 'Arab'];
var Jadwal = ['15 Maret 2022', '26 Mei 2022', '18 April 2022', '11 Mei 2022'];
var maskapai = ['Singaudara', 'Garuda', 'Citilink', 'NAM Air'];

export default function Pencarian() {
    const route = useRoute();

    if ((route.params.berangkat == ba[0]) && (route.params.tujuan == bt[0]) && (route.params.tanggal == Jadwal[0])) {
        return (
            <View style={Style.box}>
                <Text>Maskapai  :
                    <Text style={Style.maskapai}>  {maskapai[0]}</Text>
                </Text>
                <Text>Jadwal      :
                    <Text style={Style.waktu}>  {Jadwal[0]}</Text>
                </Text>
                <Text style={Style.bandara}>{route.params.berangkat}    menuju    {bt[0]}</Text>
            </View>
        )
    }

    else if ((route.params.berangkat == ba[1]) && (route.params.tujuan == bt[1]) && (route.params.tanggal == Jadwal[1])) {
        return (
            <View style={Style.box}>
                <Text>Maskapai  :
                    <Text style={Style.maskapai}>  {maskapai[1]}</Text>
                </Text>
                <Text>Jadwal      :
                    <Text style={Style.waktu}>  {Jadwal[1]}</Text>
                </Text>
                <Text style={Style.bandara}>{route.params.berangkat}    menuju    {bt[1]}</Text>
            </View>
        )
    }

    else if ((route.params.berangkat == ba[2]) && (route.params.tujuan == bt[2]) && (route.params.tanggal == Jadwal[2])) {
        return (
            <View style={Style.box}>
                <Text>Maskapai  :
                    <Text style={Style.maskapai}>  {maskapai[2]}</Text>
                </Text>
                <Text>Jadwal      :
                    <Text style={Style.waktu}>  {Jadwal[2]}</Text>
                </Text>
                <Text style={Style.bandara}>{route.params.berangkat}    menuju    {bt[2]}</Text>
            </View>
        )
    }

    else if ((route.params.berangkat == ba[3]) && (route.params.tujuan == bt[3]) && (route.params.tanggal == Jadwal[3])) {
        return (
            <View style={Style.box}>
            <Text>Maskapai  :
                <Text style={Style.maskapai}>  {maskapai[3]}</Text>
            </Text>
            <Text>Jadwal      :
                <Text style={Style.waktu}>  {Jadwal[3]}</Text>
            </Text>
            <Text style={Style.bandara}>{route.params.berangkat}    menuju    {bt[3]}</Text>
        </View>
        )
    }

    else {
        return (
            <View style={Style.tkketemu}>
                <View style={Style.box}>
                    <Text style={Style.title}>Pencarian Tidak ditemukan!!!!!Berikut penerbangan yang tersedia</Text>
                </View>
                <View style={Style.box}>
                    <Text>Maskapai  :
                        <Text style={Style.maskapai}>  {maskapai[0]} </Text>
                    </Text>
                    <Text>Jadwal      :
                        <Text style={Style.waktu}>  {Jadwal[0]}</Text>
                    </Text>
                    <Text style={Style.bandara}>{ba[0]}                menuju             {bt[0]}</Text>
                </View>
                <View style={Style.box}>
                    <Text>Maskapai  :
                        <Text style={Style.maskapai}>  {maskapai[1]}</Text>
                    </Text>
                    <Text>Jadwal      :
                        <Text style={Style.waktu}>  {Jadwal[1]}</Text>
                    </Text>
                    <Text style={Style.bandara}>{ba[1]}                menuju             {bt[1]}</Text>
                </View>
                <View style={Style.box}>
                    <Text>Maskapai  :
                        <Text style={Style.maskapai}>  {maskapai[2]}</Text>
                        </Text>
                    <Text>Jadwal      :
                        <Text style={Style.waktu}>  {Jadwal[2]}</Text>
                    </Text>
                    <Text style={Style.bandara}>{ba[2]}                menuju             {bt[2]}</Text>
                </View>
                    
                <View style={Style.box}>
                    <Text>Maskapai  :
                        <Text style={Style.maskapai}>  {maskapai[3]}</Text>
                        </Text>
                    <Text>Jadwal      :
                        <Text style={Style.waktu}>  {Jadwal[3]}</Text>
                    </Text>
                    <Text style={Style.bandara}>{ba[3]}                menuju             {bt[3]}</Text>
                </View>
                  
                </View>
        )
    }
}

const Style = StyleSheet.create({
    box: {
        backgroundColor: 'lightgreen',
        padding: 15,
        width: '90%',
        borderRadius: 9,
        elevation: 100,
        position: 'relative',
        textAlign: 'center',
        margin: 10,
        justifyContent: 'center',
        left: 7,
    },
    title:{
        textAlign: 'center',
        fontSize: 20,
    },

    waktu: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },

    maskapai: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
    },
    tkketemu: {
        textAlign: 'center',
        justifyContent: 'center',
    },
    bandara: {
        fontWeight: 'bold',
        fontSize: 16,
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        
    }
  
})