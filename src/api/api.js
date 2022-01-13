/**
 * 接口文件
 */
import httpServer from './http.js';
import config from './config.js';

global.api = {
  // 获取APP状态
  postServerStatus(params) {
    return httpServer(config.serverStatus, params);
  },
  // 登录
  login(params) {
    return httpServer(config.login, params);
  },
  // 微信登录
  loginWx(params) {
    return httpServer(config.loginWx, params);
  },
  // 微信登录-APP
  postAppVxLogin(params) {
    return httpServer(config.appVxLogin, params);
  },
  // 微信绑定
  postBindWechat(params) {
    return httpServer(config.bindWechat, params);
  },
  // 手机验证码
  postMobileCode(params) {
    return httpServer(config.mobileCode, params);
  },
  // 手机登录
  postMobileLogin(params) {
    return httpServer(config.mobileLogin, params);
  },
  // 上传JPush的注册id
  postJPushGetRegId(params, header) {
    return httpServer(config.jPushGetRegId, params, header);
  },
  // 调用jssdk
  postPackageInfo(params, header) {
    return httpServer(config.packageInfo, params, header);
  },
  // banner数据获取
  postBannerBase(params, header) {
    return httpServer(config.indexBanner, params, header);
  },
  // banner数据提交
  postBannerPub(params, header) {
    return httpServer(config.bannerPub, params, header);
  },
  // 获取未读的数据
  postUnread(params, header) {
    return httpServer(config.unread, params, header);
  },
  // 用户基础信息
  postSelfInfo(params, header) {
    return httpServer(config.selfInfo, params, header);
  },
  // 草稿箱基础信息
  postDraftInfo(params, header) {
    return httpServer(config.draftInfo, params, header);
  },
  // 发布基础信息
  postPublishInfo(params, header) {
    return httpServer(config.publishInfo, params, header);
  },
  // 发布页帖子题目
  postTradeTitle(params, header) {
    return httpServer(config.tradeTitle, params, header);
  },
  // 发布页上传图片（小程序）
  postPublishImg(params, header) {
    return httpServer(config.uploadPostImg, params, header, false, true);
  },
  // 发布页上传图片（公众号）
  postPublishImgVx(params, header) {
    return httpServer(config.uploadPostVxImg, params, header);
  },
  // 发布页上传帖子
  postPublishTrade(params, header) {
    return httpServer(config.publishPost, params, header);
  },
  // 卖家定金支付页基础信息
  postPublishPayBase(params, header) {
    return httpServer(config.publishPayBase, params, header);
  },
  // 卖家定金支付
  postPublishPay(params, header) {
    return httpServer(config.publishPay, params, header);
  },
  // 首页信息
  postIndexInfo(params, header) {
    return httpServer(config.indexInfo, params, header);
  },
  // 详情页信息接口
  postTradeDetail(params, header) {
    return httpServer(config.tradeDetail, params, header);
  },
  // 详情页相关推荐
  postTradeRecommend(params, header) {
    return httpServer(config.tradeRecommend, params, header);
  },
  // 举报
  postTradeReport(params, header) {
    return httpServer(config.tradeReport, params, header);
  },
  // 点赞（收藏）帖子
  postTradeLike(params, header) {
    return httpServer(config.tradeLike, params, header);
  },
  // 下架帖子
  postTradeLower(params, header) {
    return httpServer(config.tradeLower, params, header);
  },
  // 未关注时触发请求的接口
  postAttenVx(params, header) {
    return httpServer(config.attenVx, params, header);
  },
  // 获取图片信息
  postPosterImg(params, header) {
    return httpServer(config.posterImg, params, header, true);
  },
  // 获取微信海报二维码
  postVxQrCode(params, header) {
    return httpServer(config.vxQrCode, params, header, true);
  },
  // 买家购买
  postUserBuy(params, header) {
    return httpServer(config.userBuy, params, header);
  },
  // 买家付定金页信息
  postUserPrePayBase(params, header) {
    return httpServer(config.userPrePayBase, params, header);
  },
  // 买家支付定金
  postUserPrePay(params, header) {
    return httpServer(config.userPrePay, params, header);
  },
  // 我的卖出
  postSellerList(params, header) {
    return httpServer(config.mySellInfo, params, header);
  },
  // 我的买到
  postBuyList(params, header) {
    return httpServer(config.myBuyInfo, params, header);
  },
  // 订单详情
  postOrderDetail(params, header) {
    return httpServer(config.orderDetail, params, header);
  },
  // 卖家提醒买家付款
  postNoticeTailPay(params, header) {
    return httpServer(config.noticeTailPay, params, header);
  },
  // 卖家申请延期
  postSellerDelay(params, header) {
    return httpServer(config.sellerDelay, params, header);
  },
  // 买家操作延期
  postUserOperaDelay(params, header) {
    return httpServer(config.userOperDelay, params, header);
  },
  // 买家付尾款页
  postUserTailPayBase(params, header) {
    return httpServer(config.userTailPayBase, params, header);
  },
  // 买家支付尾款
  postUserTailPay(params, header) {
    return httpServer(config.userTailPay, params, header);
  },
  // 买家合并付尾款页
  postUserPayListBase(params, header) {
    return httpServer(config.userPayListBase, params, header);
  },
  // 买家合并支付尾款
  postUserPayList(params, header) {
    return httpServer(config.userPayList, params, header);
  },
  // 买家修改收货地址
  postUserEditAddr(params, header) {
    return httpServer(config.userEditAddr, params, header);
  },
  // 卖家立即发货页
  postSellerSendBase(params, header) {
    return httpServer(config.sellerSendBase, params, header);
  },
  // 卖家立即发货
  postSellerSend(params, header) {
    return httpServer(config.sellerSend, params, header);
  },
  // 获取物流信息
  postExpressInfo(params, header) {
    return httpServer(config.getExpressInfo, params, header);
  },
  // 买家确认收货
  postUserConfirmGoods(params, header) {
    return httpServer(config.userConfirmGoods, params, header);
  },
  // 卖家申请退款
  postSellerRefundApply(params, header) {
    return httpServer(config.sellerRefundApply, params, header);
  },
  // 买家操作退款
  postBuyerOperaRefundApply(params, header) {
    return httpServer(config.buyerOperRefundApply, params, header);
  },
  // 卖家申请退款base - 客服介入
  postSellerApplyRefundBase(params, header) {
    return httpServer(config.sellerApplyRefundBase, params, header);
  },
  // 卖家申请退款 - 客服介入
  postSellerApplyRefund(params, header) {
    return httpServer(config.sellerApplyRefund, params, header);
  },
  // 买家申请退货
  postUserApplyRefund(params, header) {
    return httpServer(config.userApplyRefund, params, header);
  },
  // 买家退货物流编辑页
  postUserGoodsReturnBase(params, header) {
    return httpServer(config.userGoodsReturnBase, params, header);
  },
  // 买家退货物流编辑提交
  postUserGoodsReturn(params, header) {
    return httpServer(config.userGoodsReturn, params, header);
  },
  // 卖家收到退货后确认退款页
  postSellerRefundBase(params, header) {
    return httpServer(config.sellerRefundBase, params, header);
  },
  // 卖家确认退货
  postSellerRefund(params, header) {
    return httpServer(config.sellerRefund, params, header);
  },
  // 买家评论页
  postUserCommentBase(params, header) {
    return httpServer(config.userCommentBase, params, header);
  },
  // 买家评论
  postUserComment(params, header) {
    return httpServer(config.userComment, params, header);
  },
  // 订单取消基础页
  postCancelApplyBase(params, header) {
    return httpServer(config.cancelApplyBase, params, header);
  },
  // 订单取消申请提交
  postCancelApplySubmit(params, header) {
    return httpServer(config.cancelApplySubmit, params, header);
  },
  // 订单取消申请操作
  postCancelApplyOpera(params, header) {
    return httpServer(config.cancelApplyOpera, params, header);
  },
  // 订单取消客服介入
  postCancelApplyRefuse(params, header) {
    return httpServer(config.cancelApplyRefuse, params, header);
  },
  // 我的页信息
  postBaseInfo(params, header) {
    return httpServer(config.myBaseInfo, params, header);
  },
  // 个人主页
  postMainPage(params, header) {
    return httpServer(config.myMainPage, params, header);
  },
  // 我收藏的
  postLikeInfo(params, header) {
    return httpServer(config.myLIkeInfo, params, header);
  },
  // 我的发布信息
  postPubInfo(params, header) {
    return httpServer(config.myPubInfo, params, header);
  },
  // 上下架操作
  postPubDown(params, header) {
    return httpServer(config.myPubDown, params, header);
  },
  // 编辑交易帖
  postPubEdit(params, header) {
    return httpServer(config.myPubEdit, params, header);
  },
  // 交易统计
  postStatisticsInfo(params, header) {
    return httpServer(config.statisticsInfo, params, header);
  },
  // 足迹信息
  postFootInfo(params, header) {
    return httpServer(config.footInfo, params, header);
  },
  // 银行卡列表
  postCardList(params, header) {
    return httpServer(config.cardList, params, header);
  },
  // 银行卡添加
  postCardAdd(params, header) {
    return httpServer(config.cardAdd, params, header);
  },
  // 银行卡编辑
  postCardEdit(params, header) {
    return httpServer(config.cardEdit, params, header);
  },
  // 银行卡删除
  postCardDel(params, header) {
    return httpServer(config.cardDel, params, header);
  },
  // 钱包提现-银行卡
  postWalletBankCommit(params, header) {
    return httpServer(config.walletBankCommit, params, header);
  },
  // 钱包页基础信息
  postWalletBase(params, header) {
    return httpServer(config.walletBase, params, header);
  },
  // 钱包页明细
  postWalletDetail(params, header) {
    return httpServer(config.walletDetail, params, header);
  },
  // 定金明细
  postDepositDetail(params, header) {
    return httpServer(config.depositDetail, params, header);
  },
  // 钱包充值
  postWalletCharge(params, header) {
    return httpServer(config.walletCharge, params, header);
  },
  // 钱包提现-微信
  postWalletWithdraw(params, header) {
    return httpServer(config.walletWithdraw, params, header);
  },
  // 获取审核列表
  postReflectList(params, header) {
    return httpServer(config.reflectList, params, header);
  },
  // 审核详情
  postReflectDetail(params, header) {
    return httpServer(config.reflectDetail, params, header);
  },
  // 审核处理
  postReflectHandle(params, header) {
    return httpServer(config.reflectHandle, params, header);
  },
  // 我的页基础信息
  postUserInfo(params, header) {
    return httpServer(config.userInfo, params, header);
  },
  // 获取手机端验证码
  getMobileCode(params, header) {
    return httpServer(config.getMobileCode, params, header);
  },
  // 验证手机号
  postVerifyMobile(params, header) {
    return httpServer(config.verifyMobile, params, header);
  },
  // 更新手机号
  postUpdateMobile(params, header) {
    return httpServer(config.updateMobile, params, header);
  },
  // 设置支付密码
  postWalletSetKey(params, header) {
    return httpServer(config.walletSetKey, params, header);
  },
  // 地址列表
  postAddressList(params, header) {
    return httpServer(config.addressList, params, header);
  },
  // 设置默认地址
  postAddressDefault(params, header) {
    return httpServer(config.addressDefault, params, header);
  },
  // 省信息
  postRegionList(params, header) {
    return httpServer(config.regionList, params, header);
  },
  // 市信息
  postRegionCityList(params, header) {
    return httpServer(config.regionCityList, params, header);
  },
  // 区信息
  postRegionAreaList(params, header) {
    return httpServer(config.regionAreaList, params, header);
  },
  // 新增地址
  postAddAddress(params, header) {
    return httpServer(config.addAddress, params, header);
  },
  // 修改地址
  postEditAddress(params, header) {
    return httpServer(config.editAddress, params, header);
  },
  // 删除地址
  postDelAddress(params, header) {
    return httpServer(config.delAddress, params, header);
  },
  // 信用分基础页
  postCreditBase(params, header) {
    return httpServer(config.creditBase, params, header);
  },
  // 用户信用分信息
  postCreditInfo(params, header) {
    return httpServer(config.creditInfo, params, header);
  },
  // 信用分增减记录
  postCreditRecord(params, header) {
    return httpServer(config.creditRecord, params, header);
  },
  // 人工认证
  postIdentify(params, header) {
    return httpServer(config.identify, params, header);
  },
  // OCR识别
  postOcrIdentify(params, header) {
    return httpServer(config.ocrIdentify, params, header);
  },
  // 身份认证
  postIdentifyIDCard(params, header) {
    return httpServer(config.identifyIDCard, params, header);
  },
  // 请求活体认证token
  postIdentifyToken(params, header) {
    return httpServer(config.identifyToken, params, header);
  },
  // 获取人脸认证结果
  postIdentifyResult(params, header) {
    return httpServer(config.getbdIdtyRes, params, header);
  },
  // 反馈
  postFeedback(params, header) {
    return httpServer(config.feedback, params, header);
  },
  // 会员：基本信息
  postMemberInfo(params, header) {
    return httpServer(config.memberInfo, params, header);
  },
  // 会员：会员购买
  postMemberCharge(params, header) {
    return httpServer(config.memberCharge, params, header);
  },
  // 会员：道具商城列表
  postPropList(params, header) {
    return httpServer(config.propList, params, header);
  },
  // 会员：道具购买
  postPropCharge(params, header) {
    return httpServer(config.propCharge, params, header);
  },
  // 会员：我的道具列表
  postPropListMy(params, header) {
    return httpServer(config.myPropList, params, header);
  },
  // 会员：蜂鸟使用-帖子列表
  postPropListTrade(params, header) {
    return httpServer(config.propListTrade, params, header);
  },
  // 会员：蜂鸟使用-获取字体颜色
  postTextColor(params, header) {
    return httpServer(config.textColor, params, header);
  },
  // 会员：蜂鸟使用-使用
  postPropBirdUser(params, header) {
    return httpServer(config.propBirdUser, params, header);
  },
  // 会员：我的道具猫头鹰
  postPropListOwl(params, header) {
    return httpServer(config.propListOwl, params, header);
  },
  // 会员：我的道具猫头鹰使用
  postPropOwlPub(params, header) {
    return httpServer(config.propOwlPub, params, header);
  },
  // 会员：我的道具猫头鹰编辑
  postPropOwlEdit(params, header) {
    return httpServer(config.propOwlEdit, params, header);
  },
  // 会员：我的道具猫头删除
  postPropOwlDel(params, header) {
    return httpServer(config.propOwlDel, params, header);
  },
  // 管理员：订单管理
  postOrderManage(params, header) {
    return httpServer(config.orderManage, params, header);
  },
  // 管理员：订单详情
  postOrderDetailAdmin(params, header) {
    return httpServer(config.orderDetailAdmin, params, header);
  },
  // 管理员：订单关闭
  postOrderClose(params, header) {
    return httpServer(config.orderClose, params, header);
  },
  // 管理员：物流重新编辑基础页
  postLogisticsModifyBase(params, header) {
    return httpServer(config.logisticsModifyBase, params, header);
  },
  // 管理员：物流重新编辑
  postLogisticsModify(params, header) {
    return httpServer(config.logisticsModify, params, header);
  },
  // 管理员：认证管理
  postAuthManage(params, header) {
    return httpServer(config.authManage, params, header);
  },
  // 管理员：认证详情
  postAuthDetail(params, header) {
    return httpServer(config.authDetail, params, header);
  },
  // 管理员：认证处理
  postAuthHandle(params, header) {
    return httpServer(config.authHandle, params, header);
  },
  // 管理员：申请退货列表
  postReturnList(params, header) {
    return httpServer(config.returnList, params, header);
  },
  // 管理员：申请退货详情
  postReturnDetail(params, header) {
    return httpServer(config.returnDetail, params, header);
  },
  // 管理员：退货操作
  postReturnOpera(params, header) {
    return httpServer(config.returnOper, params, header);
  },
  // 管理员：申请退款列表
  postRefundList(params, header) {
    return httpServer(config.refundList, params, header);
  },
  // 管理员：申请退款详情
  postRefundDetail(params, header) {
    return httpServer(config.refundDetail, params, header);
  },
  // 管理员：退款操作
  postRefundOpera(params, header) {
    return httpServer(config.refundOper, params, header);
  },
  // 二手：发布页基础信息
  postSecHandPubBase(params, header) {
    return httpServer(config.secHandPubBase, params, header);
  },
  // 二手：二手商城发布
  postSecHandPub(params, header) {
    return httpServer(config.secHandPub, params, header);
  },
  // 二手：二手商城首页
  postSecHandList(params, header) {
    return httpServer(config.secHandList, params, header);
  },
  // 二手：详情页基本信息
  postSecHandDetailBase(params, header) {
    return httpServer(config.secHandDetailBase, params, header);
  },
  // 二手：详情页相关推荐
  postSecHandDetailMore(params, header) {
    return httpServer(config.secHandDetailMore, params, header);
  },
  // 二手：二手商城收藏
  postSecHandLike(params, header) {
    return httpServer(config.secHandLike, params, header);
  },
  // 二手：买家购买
  postSecHandBuy(params, header) {
    return httpServer(config.secHandBuy, params, header);
  },
  // 二手：交易人付款页
  postSecHandUserPayBase(params, header) {
    return httpServer(config.shUserPayBase, params, header);
  },
  // 二手：交易人付款
  postSecHandUserPay(params, header) {
    return httpServer(config.shUserPay, params, header);
  },
  // 二手：我发布的(二手)
  postShPubInfo(params, header) {
    return httpServer(config.secHandPubInfo, params, header);
  },
  // 二手：下架(二手)
  postShPubDown(params, header) {
    return httpServer(config.secHandPubDown, params, header);
  },
  // 二手：编辑(二手)
  postShPubEdit(params, header) {
    return httpServer(config.secHandPubEdit, params, header);
  },
  // 二手：我的卖出(二手)
  postShSellInfo(params, header) {
    return httpServer(config.secHandSellInfo, params, header);
  },
  // 二手：我的买到(二手)
  postShBuyInfo(params, header) {
    return httpServer(config.secHandBuyInfo, params, header);
  },
  // 二手：我收藏的(二手)
  postShLikeInfo(params, header) {
    return httpServer(config.secHandLikeInfo, params, header);
  },
  // 二手：订单详情页
  postShOrderDetail(params, header) {
    return httpServer(config.shOrderDetail, params, header);
  },
  // 二手：查询物流
  postShExpressInfo(params, header) {
    return httpServer(config.shGetExpressInfo, params, header);
  },
  // 二手：卖家立即发货页
  postShSellerSendBase(params, header) {
    return httpServer(config.shSellerSendBase, params, header);
  },
  // 二手：卖家立即发货提交
  postShSellerSend(params, header) {
    return httpServer(config.shSellerSend, params, header);
  },
  // 二手：卖家编辑发货页
  postShEditExpressBase(params, header) {
    return httpServer(config.shSellerEditExpressBase, params, header);
  },
  // 二手：卖家编辑页发货提交
  postShEditExpress(params, header) {
    return httpServer(config.shSellerEditExpress, params, header);
  },
  // 二手：买家确认收货
  postShUserConfirmGoods(params, header) {
    return httpServer(config.shUserConfirmGoods, params, header);
  },
  // 二手：买家评论页
  postShUserCommentBase(params, header) {
    return httpServer(config.shUserCommentBase, params, header);
  },
  // 二手：买家发布评论
  postShUserComment(params, header) {
    return httpServer(config.shUserComment, params, header);
  },
};

// export default api;
