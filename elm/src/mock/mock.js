import Mock from 'mockjs';

const data = [{
    id: 1,
    img: "http://pic22.nipic.com/20120714/9622064_105642209176_2.jpg",
    tit: "程建业",
    price: 168,
    km: 650
}, {
    id: 2,
    img: "http://t8.baidu.com/it/u=3660968530,985748925&fm=191&app=48&wm=1,17,90,45,20,7&wmo=0,0&n=0&g=0n&f=JPEG?sec=1853310920&t=9b4f100f0eedfe853fad24a58a4e1ad7",
    tit: "齐炳昌",
    price: 188,
    km: 150
}, {
    id: 3,
    img: "http://pic3.nipic.com/20090527/1242397_102231006_2.jpg",
    tit: "王璐伟",
    price: 268,
    km: 440
}]

Mock.mock('/homeList', () => {
    return data
})
Mock.mock('/detail', (options) => {
    const id = JSON.parse(options.body)
    const newData = data.filter((item) => {
        if (item.id == id.id) {
            return item
        }
    })
    return newData
})