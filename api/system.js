export default({$axios}, inject) => {

    // 获取指定位置的广告信息
    inject('getAdvertList', position => $axios.$get(`/system/api/v1/advert/show/${position}`))

}