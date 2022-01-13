/**
 * 接口配置
 */
let url = 'api';

const config = {
  // 获取APP状态
  serverStatus: {
    url: url + '/serverStatus',
    method: 'POST',
  },
  // 登录
  login: {
    url: url + '/miniLogin',
    method: 'POST',
  },
  // 微信登录
  loginWx: {
    url: url + '/vxLogin',
    method: 'POST',
  },
  // 微信登录-APP
  appVxLogin: {
    url: url + '/appVxLogin',
    method: 'POST',
  },
  // 微信绑定
  bindWechat: {
    url: url + '/bindWechat',
    method: 'POST',
  },
  // 手机验证码
  mobileCode: {
    url: url + '/loginMobileCode',
    method: 'POST',
  },
  // 手机登录
  mobileLogin: {
    url: url + '/mobileLogin',
    method: 'POST',
  },
  // 上传JPush的注册id
  jPushGetRegId: {
    url: url + '/jPushGetRegId',
    method: 'POST',
  },
  // 调用jssdk
  packageInfo: {
    url: url + '/getPackageInfo',
    method: 'POST',
  },
  // banner数据
  indexBanner: {
    url: url + '/indexBanner',
    method: 'POST',
  },
  // banner数据提交
  bannerPub: {
    url: url + '/',
    method: 'POST',
  },
  // 获取未读的数据
  unread: {
    url: url + '/httpHeartBeat',
    method: 'POST',
  },
  // 用户基础信息
  selfInfo: {
    url: url + '/publishBase',
    method: 'POST',
  },
  // 草稿箱基础信息
  draftInfo: {
    url: url + '/draftInfo',
    method: 'POST',
  },
  // 发布基础信息
  publishInfo: {
    url: url + '/publishInfo',
    method: 'POST',
  },
  // 发布页帖子题目
  tradeTitle: {
    url: url + '/getObjInfo',
    method: 'POST',
  },
  // 发布页上传图片（小程序）
  uploadPostImg: {
    url: url + '/uploadPostImg',
    method: 'POST',
  },
  // 发布页上传图片（公众号）
  uploadPostVxImg: {
    url: url + '/uploadPostVxImg',
    method: 'POST',
  },
  // 发布页上传帖子
  publishPost: {
    url: url + '/publishPost',
    method: 'POST',
  },
  // 卖家定金支付页基础信息
  publishPayBase: {
    url: url + '/publishPostPayBase',
    method: 'POST',
  },
  // 卖家定金支付
  publishPay: {
    url: url + '/publishPostPay',
    method: 'POST',
  },
  // 首页信息
  indexInfo: {
    url: url + '/indexInfo',
    method: 'POST',
  },
  // 详情页信息接口
  tradeDetail: {
    url: url + '/detailBaseInfo',
    method: 'POST',
  },
  // 详情页相关推荐
  tradeRecommend: {
    url: url + '/morePostInfo',
    method: 'POST',
  },
  // 举报
  tradeReport: {
    url: url + '/postReport',
    method: 'POST',
  },
  // 点赞（收藏）帖子
  tradeLike: {
    url: url + '/indexLike',
    method: 'POST',
  },
  // 下架帖子
  tradeLower: {
    url: url + '/adminOperDown',
    method: 'POST',
  },
  // 未关注时触发请求的接口
  attenVx: {
    url: url + '/attenVx',
    method: 'POST',
  },
  // 获取图片信息
  posterImg: {
    url: url + '/getPosterImg',
    method: 'POST',
  },
  // 获取微信海报二维码
  vxQrCode: {
    url: url + '/getVxQrCode',
    method: 'POST',
  },
  // 买家购买
  userBuy: {
    url: url + '/userBuy',
    method: 'POST',
  },
  // 买家付定金页信息
  userPrePayBase: {
    url: url + '/userPrePayBase',
    method: 'POST',
  },
  // 买家支付定金
  userPrePay: {
    url: url + '/userPrePay',
    method: 'POST',
  },
  // 我的卖出
  mySellInfo: {
    url: url + '/mySellInfo',
    method: 'POST',
  },
  // 我的买到
  myBuyInfo: {
    url: url + '/myBuyInfo',
    method: 'POST',
  },
  // 订单详情
  orderDetail: {
    url: url + '/orderDetail',
    method: 'POST',
  },
  // 卖家提醒买家付款
  noticeTailPay: {
    url: url + '/noticeTailPay',
    method: 'POST',
  },
  // 卖家申请延期
  sellerDelay: {
    url: url + '/sellerDelay',
    method: 'POST',
  },
  // 买家操作延期
  userOperDelay: {
    url: url + '/userOperDelay',
    method: 'POST',
  },
  // 买家付尾款页
  userTailPayBase: {
    url: url + '/userTailPayBase',
    method: 'POST',
  },
  // 买家支付尾款
  userTailPay: {
    url: url + '/userTailPay',
    method: 'POST',
  },
  // 买家合并付尾款页
  userPayListBase: {
    url: url + '/userPayListBase',
    method: 'POST',
  },
  // 买家合并支付尾款
  userPayList: {
    url: url + '/userPayList',
    method: 'POST',
  },
  // 买家修改收货地址
  userEditAddr: {
    url: url + '/userEditAddr',
    method: 'POST',
  },
  // 卖家立即发货页
  sellerSendBase: {
    url: url + '/sellerSendBase',
    method: 'POST',
  },
  // 卖家立即发货
  sellerSend: {
    url: url + '/sellerSend',
    method: 'POST',
  },
  // 获取物流信息
  getExpressInfo: {
    url: url + '/getExpressInfo',
    method: 'POST',
  },
  // 买家确认收货
  userConfirmGoods: {
    url: url + '/userConfirmGoods',
    method: 'POST',
  },
  // 卖家申请退款
  sellerRefundApply: {
    url: url + '/sellerApplyRefund',
    method: 'POST',
  },
  // 买家操作退款
  buyerOperRefundApply: {
    url: url + '/buyerOperRefund',
    method: 'POST',
  },
  // 卖家申请退款base - 客服介入
  sellerApplyRefundBase: {
    url: url + '/sellerApplyRefundBase',
    method: 'POST',
  },
  // 卖家申请退款 - 客服介入
  sellerApplyRefund: {
    url: url + '/sellerApplyRefundExt',
    method: 'POST',
  },
  // 买家申请退货
  userApplyRefund: {
    url: url + '/userApplyRefund',
    method: 'POST',
  },
  // 买家退货物流编辑页
  userGoodsReturnBase: {
    url: url + '/userGoodsReturnBase',
    method: 'POST',
  },
  // 买家退货物流编辑提交
  userGoodsReturn: {
    url: url + '/userGoodsReturn',
    method: 'POST',
  },
  // 卖家收到退货后确认退款页
  sellerRefundBase: {
    url: url + '/sellerRefundBase',
    method: 'POST',
  },
  // 卖家确认退款
  sellerRefund: {
    url: url + '/sellerRefund',
    method: 'POST',
  },
  // 买家评论页
  userCommentBase: {
    url: url + '/userCommentBase',
    method: 'POST',
  },
  // 买家评论
  userComment: {
    url: url + '/userComment',
    method: 'POST',
  },
  // 订单取消基础页
  cancelApplyBase: {
    url: url + '/userCancelOrderInfo',
    method: 'POST',
  },
  // 订单取消申请提交
  cancelApplySubmit: {
    url: url + '/userApplyCancel',
    method: 'POST',
  },
  // 订单取消申请操作
  cancelApplyOpera: {
    url: url + '/userOperCancel',
    method: 'POST',
  },
  // 订单取消客服介入
  cancelApplyRefuse: {
    url: url + '/userCancelService',
    method: 'POST',
  },
  // 我的页信息
  myBaseInfo: {
    url: url + '/myBaseInfo',
    method: 'POST',
  },
  // 个人主页
  myMainPage: {
    url: url + '/myMainPage',
    method: 'POST',
  },
  // 我收藏的
  myLIkeInfo: {
    url: url + '/myLIkeInfo',
    method: 'POST',
  },
  // 我的发布信息
  myPubInfo: {
    url: url + '/myPubInfo',
    method: 'POST',
  },
  // 上下架操作
  myPubDown: {
    url: url + '/myPubDown',
    method: 'POST',
  },
  // 编辑交易帖
  myPubEdit: {
    url: url + '/myPubEdit',
    method: 'POST',
  },
  // 交易统计
  statisticsInfo: {
    url: url + '/dataStatistics',
    method: 'POST',
  },
  // 足迹信息
  footInfo: {
    url: url + '/footInfo',
    method: 'POST',
  },
  // 银行卡列表
  cardList: {
    url: url + '/myCardList',
    method: 'POST',
  },
  // 银行卡添加
  cardAdd: {
    url: url + '/addBankCard',
    method: 'POST',
  },
  // 银行卡编辑
  cardEdit: {
    url: url + '/editBankCard',
    method: 'POST',
  },
  // 银行卡删除
  cardDel: {
    url: url + '/delBankCard',
    method: 'POST',
  },
  // 钱包提现-银行卡
  walletBankCommit: {
    url: url + '/walletBankCommit',
    method: 'POST',
  },
  // 钱包页基础信息
  walletBase: {
    url: url + '/walletBase',
    method: 'POST',
  },
  // 钱包页明细
  walletDetail: {
    url: url + '/walletDetail',
    method: 'POST',
  },
  // 定金明细
  depositDetail: {
    url: url + '/depositDetail',
    method: 'POST',
  },
  // 钱包充值
  walletCharge: {
    url: url + '/walletCharge',
    method: 'POST',
  },
  // 钱包提现-微信
  walletWithdraw: {
    url: url + '/walletWithdraw',
    method: 'POST',
  },
  // 获取审核列表
  reflectList: {
    url: url + '/withdrawInfo',
    method: 'POST',
  },
  // 审核详情
  reflectDetail: {
    url: url + '/withdrawDetail',
    method: 'POST',
  },
  // 审核处理
  reflectHandle: {
    url: url + '/operWithdraw',
    method: 'POST',
  },
  // 我的页基础信息
  userInfo: {
    url: url + '/setBase',
    method: 'POST',
  },
  // 获取手机端验证码
  getMobileCode: {
    url: url + '/getMobileCode',
    method: 'POST',
  },
  // 验证手机号
  verifyMobile: {
    url: url + '/verifyMobile',
    method: 'POST',
  },
  // 更新手机号
  updateMobile: {
    url: url + '/updateMobile',
    method: 'POST',
  },
  // 设置支付密码
  walletSetKey: {
    url: url + '/walletSetKey',
    method: 'POST',
  },
  // 地址列表
  addressList: {
    url: url + '/addressList',
    method: 'POST',
  },
  // 设置默认地址
  addressDefault: {
    url: url + '/addressDefault',
    method: 'POST',
  },
  // 省信息
  regionList: {
    url: url + '/regionList',
    method: 'POST',
  },
  // 市信息
  regionCityList: {
    url: url + '/regionCityList',
    method: 'POST',
  },
  // 区信息
  regionAreaList: {
    url: url + '/regionAreaList',
    method: 'POST',
  },
  // 新增地址
  addAddress: {
    url: url + '/addAddress',
    method: 'POST',
  },
  // 修改地址
  editAddress: {
    url: url + '/editAddress',
    method: 'POST',
  },
  // 删除地址
  delAddress: {
    url: url + '/delAddress',
    method: 'POST',
  },
  // 信用分基础页
  creditBase: {
    url: url + '/creditBase',
    method: 'POST',
  },
  // 用户信用分信息
  creditInfo: {
    url: url + '/creditInfo',
    method: 'POST',
  },
  // 信用分增减记录
  creditRecord: {
    url: url + '/creditRecord',
    method: 'POST',
  },
  // 人工认证
  identify: {
    url: url + '/identifyCommit',
    method: 'POST',
  },
  // OCR识别
  ocrIdentify: {
    url: url + '/ocrIdentify',
    method: 'POST',
  },
  // 身份认证
  identifyIDCard: {
    url: url + '/identifyIDCard',
    method: 'POST',
  },
  // 请求活体认证token
  identifyToken: {
    url: url + '/baiduIdentify',
    method: 'POST',
  },
  // 获取人脸认证结果
  getbdIdtyRes: {
    url: url + '/getbdIdtyRes',
    method: 'POST',
  },
  // 反馈
  feedback: {
    url: url + '/myFeedback',
    method: 'POST',
  },
  // 会员：基本信息
  memberInfo: {
    url: url + '/memberInfo',
    method: 'POST',
  },
  // 会员：会员购买
  memberCharge: {
    url: url + '/memberCharge',
    method: 'POST',
  },
  // 会员：道具商城列表
  propList: {
    url: url + '/propList',
    method: 'POST',
  },
  // 会员：道具购买
  propCharge: {
    url: url + '/propCharge',
    method: 'POST',
  },
  // 会员：我的道具列表
  myPropList: {
    url: url + '/myPropList',
    method: 'POST',
  },
  // 会员：蜂鸟使用-帖子列表
  propListTrade: {
    url: url + '/myBirdPostList',
    method: 'POST',
  },
  // 会员：蜂鸟使用-获取字体颜色
  textColor: {
    url: url + '/birdColorList',
    method: 'POST',
  },
  // 会员：蜂鸟使用-使用
  propBirdUser: {
    url: url + '/usePropBird',
    method: 'POST',
  },
  // 会员：我的道具猫头鹰
  propListOwl: {
    url: url + '/myOwlList',
    method: 'POST',
  },
  // 会员：我的道具猫头鹰使用
  propOwlPub: {
    url: url + '/usePropOwl',
    method: 'POST',
  },
  // 会员：我的道具猫头鹰编辑
  propOwlEdit: {
    url: url + '/editMyOwl',
    method: 'POST',
  },
  // 会员：我的道具猫头删除
  propOwlDel: {
    url: url + '/editMyOwl',
    method: 'POST',
  },
  // 管理员：订单管理
  orderManage: {
    url: url + '/orderListInfo',
    method: 'POST',
  },
  // 管理员：订单详情
  orderDetailAdmin: {
    url: url + '/orderListDetail',
    method: 'POST',
  },
  // 管理员：订单关闭
  orderClose: {
    url: url + '/orderListClose',
    method: 'POST',
  },
  // 管理员：物流修改基础页
  logisticsModifyBase: {
    url: url + '/sellerEditExpressBase',
    method: 'POST',
  },
  // 管理员：物流修改
  logisticsModify: {
    url: url + '/sellerEditExpress',
    method: 'POST',
  },
  // 管理员：认证管理
  authManage: {
    url: url + '/identifyListInfo',
    method: 'POST',
  },
  // 管理员：认证详情
  authDetail: {
    url: url + '/identifyListDetail',
    method: 'POST',
  },
  // 管理员：认证处理
  authHandle: {
    url: url + '/operIdentify',
    method: 'POST',
  },
  // 管理员：申请退货列表
  returnList: {
    url: url + '/orderRefundInfo',
    method: 'POST',
  },
  // 管理员：申请退货详情
  returnDetail: {
    url: url + '/orderRefundDetail',
    method: 'POST',
  },
  // 管理员：退货操作
  returnOper: {
    url: url + '/operRefund',
    method: 'POST',
  },
  // 管理员：申请退款列表
  refundList: {
    url: url + '/sellerOrderRefundInfo',
    method: 'POST',
  },
  // 管理员：申请退款详情
  refundDetail: {
    url: url + '/sellerOrderRefundDetail',
    method: 'POST',
  },
  // 管理员：退款操作
  refundOper: {
    url: url + '/adminOperRefund',
    method: 'POST',
  },
  // 二手：发布页基础信息
  secHandPubBase: {
    url: url + '/sechandPubBase',
    method: 'POST',
  },
  // 二手：二手商城发布
  secHandPub: {
    url: url + '/sechandPub',
    method: 'POST',
  },
  // 二手：二手商城首页
  secHandList: {
    url: url + '/sechandList',
    method: 'POST',
  },
  // 二手：详情页基本信息
  secHandDetailBase: {
    url: url + '/sechandDetailBase',
    method: 'POST',
  },
  // 二手：详情页相关推荐
  secHandDetailMore: {
    url: url + '/sechandDetailMore',
    method: 'POST',
  },
  // 二手：二手商城收藏
  secHandLike: {
    url: url + '/sechandLike',
    method: 'POST',
  },
  // 二手：买家购买
  secHandBuy: {
    url: url + '/sechandBuy',
    method: 'POST',
  },
  // 二手：交易人付款页
  shUserPayBase: {
    url: url + '/shUserPayBase',
    method: 'POST',
  },
  // 二手：交易人付款
  shUserPay: {
    url: url + '/shUserPay',
    method: 'POST',
  },
  // 二手：我发布的(二手)
  secHandPubInfo: {
    url: url + '/sechandPubInfo',
    method: 'POST',
  },
  // 二手：下架(二手)
  secHandPubDown: {
    url: url + '/sechandPubDown',
    method: 'POST',
  },
  // 二手：编辑(二手)
  secHandPubEdit: {
    url: url + '/sechandPubEdit',
    method: 'POST',
  },
  // 二手：我的卖出(二手)
  secHandSellInfo: {
    url: url + '/sechandSellInfo',
    method: 'POST',
  },
  // 二手：我的买到(二手)
  secHandBuyInfo: {
    url: url + '/sechandBuyInfo',
    method: 'POST',
  },
  // 二手：我收藏的(二手)
  secHandLikeInfo: {
    url: url + '/SechandLIkeInfo',
    method: 'POST',
  },
  // 二手：订单详情页
  shOrderDetail: {
    url: url + '/shOrderDetail',
    method: 'POST',
  },
  // 二手：查询物流
  shGetExpressInfo: {
    url: url + '/shGetExpressInfo',
    method: 'POST',
  },
  // 二手：卖家立即发货页
  shSellerSendBase: {
    url: url + '/shSellerSendBase',
    method: 'POST',
  },
  // 二手：卖家立即发货提交
  shSellerSend: {
    url: url + '/shSellerSend',
    method: 'POST',
  },
  // 二手：卖家编辑发货页
  shSellerEditExpressBase: {
    url: url + '/shSellerEditExpressBase',
    method: 'POST',
  },
  // 二手：卖家编辑页发货提交
  shSellerEditExpress: {
    url: url + '/shSellerEditExpress',
    method: 'POST',
  },
  // 二手：买家确认收货
  shUserConfirmGoods: {
    url: url + '/shUserConfirmGoods',
    method: 'POST',
  },
  // 二手：买家评论页
  shUserCommentBase: {
    url: url + '/shUserCommentBase',
    method: 'POST',
  },
  // 二手：买家发布评论
  shUserComment: {
    url: url + '/shUserComment',
    method: 'POST',
  },
};

export default config;
