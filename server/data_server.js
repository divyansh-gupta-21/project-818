require('dotenv').config()

const express = require('express');
const cors = require('cors');

const app = express();
const jwt = require("jsonwebtoken");


app.use(cors({ origin: true }))
//app.use((req, res, next) => {res.header('Access-Control-Allow-Credentials', true);next()})
app.use(express.json())

const videos = [
        {
            title: "TenZ kills WARDELL with Sherrif",
            thumbnail: "https://preview.redd.it/2tytskci7r551.jpg?width=1920&format=pjpg&auto=webp&s=339d0c7da785b75cc25c458a94e90824d755fab5",
            category: {
                name: 'Valorant'
            },
            views: "2.9K",
            uploaded: "2 hours ago",
            channel: {
                name: 'Valorant - Hypemeter',
                icon: "https://yt3.ggpht.com/Jmpbd-i2uGxd9PkITUwKwh8XVVCDUUbCvymbgt89iJvl8icKor1lIxbdZWLj9Btl5VsRPAWp=s68-c-k-c0x00ffffff-no-rj"
            },
            tags: ["English"]
        },
        {
            title: "Code Switch | Episode 2",
            thumbnail: "https://media.npr.org/assets/img/2020/11/30/pd_showoftheyear_16-9_partner_us_wide-4e9d71adacc87ba6dbbd6b7178c9e5a4549ca0b2.jpg?s=1400",
            category: {
                name: 'Podcasts'
            },
            views: "2.9K",
            uploaded: "2 hours ago",
            channel: {
                name: 'Apple - Podcasts',
                icon: "http://assets.stickpng.com/images/5f675af73b3c2a0004655703.png"
            },
            tags: ["English"]
        },
        {
            title: "Valorant | Immortal today?",
            thumbnail: "https://i.ytimg.com/vi/72pnzbEqPXA/maxresdefault.jpg",
            category: {
                name: 'Valorant'
            },
            views: "2.9K",
            uploaded: "2 hours ago",
            channel: {
                name: 'Meow16K',
                icon: "https://yt3.ggpht.com/ytc/AAUvwniJZ1RchVYlQM2sJKwUcBt2n3825IUq_V5RcHiKkLc=s176-c-k-c0x00ffffff-no-rj-mo"
            },
            tags: ["English"]
        },
        {
            title: "Valorant live stream India Weekend chills !insta",
            thumbnail: "https://i.ytimg.com/vi/-Xua0YQlJDY/hq720_live.jpg?sqp=CJip_oQG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXGXrNfS2Je8NOl--4qglN1BaZJQ",
            category: {
                name: 'Valorant'
            },
            views: "2.9K",
            uploaded: "2 hours ago",
            channel: {
                name: 'TbOne',
                icon: "https://yt3.ggpht.com/ytc/AAUvwngsEXd-hLgfssjsxnxdtjlptDBpZL-TwY4pw0RYWg=s68-c-k-c0x00ffffff-no-rj"
            },
            tags: ["English"]
        },
        {
            title: "Gamers For India Fundraiser For Covid19 Relief With MPL Esports",
            thumbnail: "https://i.ytimg.com/vi/4J1kOOw49OY/hq720_live.jpg?sqp=CLSl_4QG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDLf76gXQfDh-QjcF9nFySBDTlfdw",
            category: {
                name: 'Valorant'
            },
            views: "2.9K",
            uploaded: "2 hours ago",
            channel: {
                name: 'MortaL',
                icon: "https://yt3.ggpht.com/ytc/AAUvwni3siNFc3ycXfpIqDB4fhcxqDnL4sO03LJCT-coNA=s68-c-k-c0x00ffffff-no-rj"
            },
            tags: ["English"]
        },
        {
            title: "Live Valorant India #TM CC",
            thumbnail: "https://i.ytimg.com/vi/haWSJbq6IJY/hq720_live.jpg?sqp=CLis_4QG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3CJTw-iBAooV87n0O59GqV-iDKQ",
            category: {
                name: 'Valorant'
            },
            views: "2.9K",
            uploaded: "2 hours ago",
            channel: {
                name: 'fa2',
                icon: "https://yt3.ggpht.com/ytc/AAUvwngVKqbCp3Vom1O6fac-cHIBBz-CKfjpBEEWFeARzQ=s68-c-k-c0x00ffffff-no-rj"
            },
            tags: ["English"]
        },
        {
            title: "Valorant live stream India Weekend chills !insta",
            thumbnail: "https://i.ytimg.com/vi/f5tuDmoGltA/hqdefault_live.jpg?sqp=CLis_4QG-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgDTw4hio1wKTemzFhjAcivjGulw",
            category: {
                name: 'Apex Legends'
            },
            views: "2.9K",
            uploaded: "2 hours ago",
            channel: {
                name: 'GAMING WITH REMAG',
                icon: "https://yt3.ggpht.com/ytc/AAUvwnhL-DSA3QiiWmInjsLpTgdcWDkciiYKgWfzYy8-=s68-c-k-c0x00ffffff-no-rj"
            },
            tags: ["English"]
        },

        {
            title: "Valorant live stream India Weekend chills !insta",
            thumbnail: "https://i.ytimg.com/vi/V88_2CTLAAI/hq720_live.jpg?sqp=CLis_4QG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfLsJ8dZ0Mhai6lgr_yA8EqeA0yQ",
            category: {
                name: 'Valorant'
            },
            views: "2.9K",
            uploaded: "2 hours ago",
            channel: {
                name: 'Soul Zeref',
                icon: "https://yt3.ggpht.com/ytc/AAUvwngWD6bFnmWhYloSPWxGlp6dqBnaL2dL5hYy7Y6ZWA=s68-c-k-c0x00ffffff-no-rj"
            },
            tags: ["English"]
        },

    ]

app.get('/feed', (req, res) => {
    res.json(videos)
})

  

app.listen('5000');