export default({$axios}, inject) => {

    // 文章列表分页接口
    inject('getArticleList', query => $axios.$post('/article/api/v1/article/search', query) )

    // 查询文章详情
    inject('getArticleById', id => $axios.$get(`/article/api/v1/article/${id}`))

    // 更新文章浏览数
    inject('updateArticleViewCount', id => $axios.$put(`/article/v1/article/viewCount/${id}`))

    // 更新文章点赞数
    inject('updateArticleThumb', (articleId, count) => $axios.$put(`/article/v1/article/thumb/${articleId}/${count}`))

    // 通过文章id查询评论列表
    inject('getCommentListByArticleId', articleId => $axios.$get(`/article/api/v1/comment/list/${articleId}`))

    // 新增评论
    inject('addComment', data => $axios.$post(`/article/comment`, data))

    // 删除评论
    inject('deleteCommentById', id => $axios.$delete(`/article/comment/${id}`))
    
    // 新增文章
    inject('addArticle', data => $axios.$post(`/article/article`, data))


    // 修改文章
    inject('updateArticle', data => $axios.$put(`/article/article`, data))

}