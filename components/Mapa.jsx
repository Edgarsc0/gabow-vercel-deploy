import React from 'react'
import Head from 'next/head'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import styles from '../styles/Mapas.module.scss'

const data = [
    {
        id: 1,
        name: "CECyT 9",
        lat: 19.453541614839263,
        lon: -99.1755475346185,
    },
    {
        id: 2,
        name: "Town Center",
        lat: 19.50353658790755,
        lon: -99.20293583642929,
    }
];

const icon = new Icon({
    iconUrl: '/marker.svg',
    iconSize: [30, 30]
})

const Mapa = () => {


    let center = [19.472819274952897, -99.14333273147834];

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin="" />
            </Head>
            <div className={styles.container2}>
            <input className={styles.buscador} type="search" placeholder='Buscar'/>

            </div>
            <div className={styles.container}>
                <MapContainer center={center} zoom={11}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {data.map((item) => (
                        <Marker key={item.id} position={[item.lat, item.lon]} icon={icon}>
                            <Popup>
                                {item.name} <br />
                                <a href="/Edificio">Ir a</a>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </>
    )
}

export default Mapa