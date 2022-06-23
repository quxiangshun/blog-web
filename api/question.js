export default ({$axios}, inject) => {
    // 热门回答
    inject('getHotList', page => $axios.$post('/question/api/v1/question/search/hot', page) )

    // 最新回答
    inject('getNewList', page => $axios.$post('/question/api/v1/question/search/new', page) )

    // 等待回答
    inject('getWaitList', page => $axios.$post('/question/api/v1/question/search/wait', page) )

    // 查询问题详情 
    inject('getQuestionById', id => $axios.$get(`/question/api/v1/question/${id}`))

    // 更新浏览数
    inject('updateQuestionViewCount', id => $axios.$put(`/question/api/v1/question/viewCount/${id}`))

     // 通过问题id查询回复数据接口
     inject('getReplayByQuestionById', questionId => $axios.$get(`/question/api/v1/replay/list/${questionId}`))

    // 更新点赞数
    inject('updateQuestionThumb', (questionId,count)  => $axios.$put(`/question/question/thumb/${questionId}/${count}`))
    
    // 新增问题回答内容
    inject('addReplay', data  => $axios.$post(`/question/replay`, data))
    
    // 删除回答内容, id 是回答内容的id
    inject('deleteReplayById', id  => $axios.$delete(`/question/replay/${id}`))

    // 新增问题
    inject('addQuestion', data  => $axios.$post(`/question/question`, data))

    // 修改问题
    inject('updateQuestion', data  => $axios.$put(`/question/question`, data))

    // 通过标签id查询问题列表
    inject('getQuestionList', query  => $axios.$post(`/question/api/v1/question/search`, query))

}