export default({$axios}, inject) => {

    // 查询技术频道列表接口
    inject('getCategoryList', () => $axios.$get('/category/api/v1/category/list'))
    
    // 获取所有正常状态的分类及标签
    inject('getCategoryAndLabel', () => $axios.$get(`/category/api/v1/category/label/list`))
}