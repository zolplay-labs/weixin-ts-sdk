declare namespace WeixinJsSdk {
  /** **************************************************************************
   * Type definations
   ****************************************************************************/
  type JsApiNames =
    | "onMenuShareTimeline"
    | "onMenuShareAppMessage"
    | "onMenuShareQQ"
    | "onMenuShareWeibo"
    | "onMenuShareQZone"
    | "startRecord"
    | "stopRecord"
    | "onVoiceRecordEnd"
    | "playVoice"
    | "pauseVoice"
    | "stopVoice"
    | "onVoicePlayEnd"
    | "uploadVoice"
    | "downloadVoice"
    | "chooseImage"
    | "previewImage"
    | "uploadImage"
    | "downloadImage"
    | "translateVoice"
    | "getNetworkType"
    | "openLocation"
    | "getLocation"
    | "hideOptionMenu"
    | "showOptionMenu"
    | "hideMenuItems"
    | "showMenuItems"
    | "hideAllNonBaseMenuItem"
    | "showAllNonBaseMenuItem"
    | "closeWindow"
    | "scanQRCode"
    | "chooseWXPay"
    | "openProductSpecificView"
    | "addCard"
    | "chooseCard"
    | "openCard"
    | "checkJsApi"
    | "onRecordEnd"
    | "openWXDeviceLib"
    | "closeWXDeviceLib"
    | "configWXDeviceWiFi"
    | "getWXDeviceInfos"
    | "sendDataToWXDevice"
    | "startScanWXDevice"
    | "stopScanWXDevice"
    | "connectWXDevice"
    | "disconnectWXDevice"
    | "getWXDeviceTicket"
    | "WeixinJSBridgeReady"
    | "onWXDeviceBindStateChange"
    | "onWXDeviceStateChange"
    | "onScanWXDeviceResult"
    | "onReceiveDataFromWXDevice"
    | "onWXDeviceBluetoothStateChange";

  type MenuNames =
    | "menuItem:exposeArticle" // 举报
    | "menuItem:setFont" // 调整字体
    | "menuItem:dayMode" // 日间模式
    | "menuItem:nightMode" // 夜间模式
    | "menuItem:refresh" // 刷新
    | "menuItem:profile" // 查看公众号（已添加）
    | "menuItem:addContact" // 查看公众号（未添加）
    | "menuItem:share:appMessage" // 发送给朋友
    | "menuItem:share:timeline" // 分享到朋友圈
    | "menuItem:share:qq" // 分享到 QQ
    | "menuItem:share:weiboApp" // 分享到 Weibo
    | "menuItem:favorite" // 收藏
    | "menuItem:share:facebook" // 分享到 Facebook
    | "menuItem:share:QZone" // 分享到 QQ 空间
    | "menuItem:editTag" // 编辑标签
    | "menuItem:delete" // 删除
    | "menuItem:copyUrl" // 复制链接
    | "menuItem:originPage" // 原网页
    | "menuItem:readMode" // 阅读模式
    | "menuItem:openWithQQBrowser" // 在QQ浏览器中打开
    | "menuItem:openWithSafari" // 在Safari中打开
    | "menuItem:share:email" // 邮件
    | "menuItem:share:brand"; // 一些特殊公众号

  type ShareAppMessageTypes = "music" | "video" | "link";

  type ImageSizeTypes = "original" | "compressed";

  type ImageSourceTypes = "album" | "camera";

  type LocationTypes = "wgs84" | "gcj02";

  type ScanTypes = "qrCode" | "barCode";

  type ProductSpecificViewTypes = 0 | 1 | 2;

  interface ConfigOption {
    /**
     * @property {Boolean} 是否开启调试模式。
     */
    debug?: boolean;
    /**
     * @requires
     * @property {Boolean} 公众号的唯一标识。
     */
    appId: string;
    /**
     * @requires
     * @property {Boolean} 生成签名的时间戳。
     */
    timestamp: string;
    /**
     * @requires
     * @property {Boolean} 生成签名的随机串。
     */
    nonceStr: string;
    /**
     * @requires
     * @property {Boolean} 签名。
     */
    signature: string;
    /**
     * @requires
     * @property {Boolean} 需要使用的 JS 接口列表。
     */
    jsApiList: JsApiNames[];
  }

  interface GeneralCallbackResult {
    /**
     * @property {String} 错误信息。
     */
    errMsg?: string;
  }

  interface CheckJsApiOption {
    /**
     * @property {Array} 需要检测的 JS 接口列表。
     */
    jsApiList: JsApiNames[];

    success?: (res?: CheckJsApiSuccessCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface CheckJsApiSuccessCallbackResult extends GeneralCallbackResult {
    /**
     * @property {Object} JS 接口字典。
     */
    checkResult: Record<JsApiNames, boolean>;
  }

  interface UpdateAppMessageShareDataOption {
    /**
     * @property {String} 分享标题。
     */
    title: string;
    /**
     * @property {String} 分享描述。
     */
    desc: string;
    /**
     * @property {String} 分享链接。
     */
    link: string;
    /**
     * @property {String} 分享图标。
     */
    imgUrl: string;

    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface UpdateTimelineShareDataOption {
    /**
     * @property {String} 分享标题。
     */
    title: string;
    /**
     * @property {String} 分享链接。
     */
    link: string;
    /**
     * @property {String} 分享图标。
     */
    imgUrl: string;

    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface OnMenuShareTimelineOption {
    /**
     * @property {String} 分享标题。
     */
    title: string;
    /**
     * @property {String} 分享链接。
     */
    link: string;
    /**
     * @property {String} 分享图标。
     */
    imgUrl: string;

    trigger?: (res?: GeneralCallbackResult) => void;
    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface OnMenuShareAppMessageOption {
    /**
     * @property {String} 分享标题。
     */
    title: string;
    /**
     * @property {String} 分享描述。
     */
    desc: string;
    /**
     * @property {String} 分享链接。
     */
    link: string;
    /**
     * @property {String} 分享图标。
     */
    imgUrl: string;
    /**
     * @property {String} 分享类型。
     */
    type?: ShareAppMessageTypes;
    /**
     * @property {String} 分享数据链接。
     */
    dataUrl?: string;

    trigger?: (res?: GeneralCallbackResult) => void;
    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface OnMenuShareQQOption {
    /**
     * @property {String} 分享标题。
     */
    title: string;
    /**
     * @property {String} 分享描述。
     */
    desc: string;
    /**
     * @property {String} 分享链接。
     */
    link: string;
    /**
     * @property {String} 分享图标。
     */
    imgUrl: string;

    trigger?: (res?: GeneralCallbackResult) => void;
    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface OnMenuShareWeiboOption {
    /**
     * @property {String} 分享标题。
     */
    title: string;
    /**
     * @property {String} 分享描述。
     */
    desc: string;
    /**
     * @property {String} 分享链接。
     */
    link: string;
    /**
     * @property {String} 分享图标。
     */
    imgUrl: string;

    trigger?: (res?: GeneralCallbackResult) => void;
    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface OnMenuShareQZoneOption {
    /**
     * @property {String} 分享标题。
     */
    title: string;
    /**
     * @property {String} 分享描述。
     */
    desc: string;
    /**
     * @property {String} 分享链接。
     */
    link: string;
    /**
     * @property {String} 分享图标。
     */
    imgUrl: string;

    trigger?: (res?: GeneralCallbackResult) => void;
    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface ChooseImageOption {
    /**
     * @property {Number} 一次可选择图片数量。
     */
    count?: number;
    /**
     * @property {Array} 指定是原图还是压缩图。
     */
    sizeType?: ImageSizeTypes[];
    /**
     * @property {Array} 指定来源是相册还是相机。
     */
    sourceType?: ImageSourceTypes[];

    cancel?: (res?: GeneralCallbackResult) => void;
    success?: (res?: ChooseImageSuccessCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface ChooseImageSuccessCallbackResult extends GeneralCallbackResult {
    /**
     * @property {Array} 选定照片的本地 ID 列表。
     */
    localIds: string[];
  }

  interface PreviewImageOption {
    /**
     * @property {String} 当前显示图片的链接。
     */
    current: string;
    /**
     * @property {Array} 需要预览的图片链接列表。
     */
    urls: string[];

    cancel?: (res?: GeneralCallbackResult) => void;
    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface UploadImageOption {
    /**
     * @property {String} 需要上传的图片的本地 ID。
     */
    localId: string;
    /**
     * @property {Boolean} 是否显示进度提示。
     */
    isShowProgressTips?: boolean;

    cancel?: (res?: GeneralCallbackResult) => void;
    success?: (res?: UploadImageSuccessCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface UploadImageSuccessCallbackResult extends GeneralCallbackResult {
    /**
     * @property {String} 图片的服务端 ID。
     */
    serverId: string;
  }

  interface DownloadImageOption {
    /**
     * @property {String} 需要下载的图片的服务端 ID。
     */
    serverId: string;
    /**
     * @property {Boolean} 是否显示进度提示。
     */
    isShowProgressTips?: boolean;

    cancel?: (res?: GeneralCallbackResult) => void;
    success?: (res?: DownloadImageSuccessCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface DownloadImageSuccessCallbackResult extends GeneralCallbackResult {
    /**
     * @property {String} 图片的本地 ID。
     */
    localId: string;
  }

  interface GetLocalImgDataOption {
    /**
     * @property {String} 图片的本地 ID。
     */
    localId: string;

    success?: (res?: GetLocalImgDataSuccessCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface GetLocalImgDataSuccessCallbackResult extends GeneralCallbackResult {
    /**
     * @property {String} 图片的 Base64 数据。
     */
    localData: string;
  }

  interface StartRecordOption {
    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface StopRecordOption {
    success?: (res?: StopRecordSuccessCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface StopRecordSuccessCallbackResult extends GeneralCallbackResult {
    /**
     * @property {String} 录音的本地 ID。
     */
    localId: string;
  }

  interface OnVoiceRecordEndOption {
    complete?: (res?: OnVoiceRecordEndCompleteCallbackResult) => void;
  }

  interface OnVoiceRecordEndCompleteCallbackResult
    extends GeneralCallbackResult {
    /**
     * @property {String} 录音的本地 ID。
     */
    localId: string;
  }

  interface PlayVoiceOption {
    /**
     * @property {String} 需要播放的音频的本地 ID。
     */
    localId: string;

    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface PauseVoiceOption {
    /**
     * @property {String} 需要暂停的音频的本地 ID。
     */
    localId: string;

    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface StopVoiceOption {
    /**
     * @property {String} 需要停止的音频的本地 ID。
     */
    localId: string;

    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface OnVoicePlayEndOption {
    complete?: (res?: OnVoicePlayEndSuccessCallbackResult) => void;
  }

  interface OnVoicePlayEndSuccessCallbackResult extends GeneralCallbackResult {
    /**
     * @property {String} 音频的本地 ID。
     */
    localId: string;
  }

  interface UploadVoiceOption {
    /**
     * @property {String} 需要上传的音频的本地 ID。
     */
    localId: string;
    /**
     * @property {Boolean} 是否显示进度提示。
     */
    isShowProgressTips?: boolean;

    success?: (res?: UploadVoiceSuccessCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface UploadVoiceSuccessCallbackResult extends GeneralCallbackResult {
    /**
     * @property {String} 音频的服务端 ID。
     */
    serverId: string;
  }

  interface DownloadVoiceOption {
    /**
     * @property {String} 需要下载的音频的服务端 ID。
     */
    serverId: string;
    /**
     * @property {Boolean} 是否显示进度提示。
     */
    isShowProgressTips?: boolean;

    success?: (res?: DownloadVoiceSuccessCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface DownloadVoiceSuccessCallbackResult extends GeneralCallbackResult {
    /**
     * @property {String} 音频的本地 ID。
     */
    localId: string;
  }

  interface TranslateVoiceOption {
    /**
     * @property {String} 需要上传的音频的本地 ID。
     */
    localId: string;
    /**
     * @property {Boolean} 是否显示进度提示。
     */
    isShowProgressTips?: boolean;

    success?: (res?: TranslateVoiceSuccessCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface TranslateVoiceSuccessCallbackResult extends GeneralCallbackResult {
    /**
     * @property {String} 语音识别的结果。
     */
    translateResult: string;
  }

  interface GetNetworkTypeOption {
    success?: (res?: GetNetworkTypeSuccessCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface GetNetworkTypeSuccessCallbackResult extends GeneralCallbackResult {
    /**
     * @property {String} 网络类型。
     */
    networkType: string;
  }

  interface OpenLocationOption {
    /**
     * @property {Number} 纬度。
     */
    latitude: number;
    /**
     * @property {Number} 经度。
     */
    longitude: number;
    /**
     * @property {String} 位置名。
     */
    name: string;
    /**
     * @property {String} 地址详情说明。
     */
    address: string;
    /**
     * @property {String} 地图缩放级别。
     */
    scale?: number;
    /**
     * @property {String} 在查看位置界面底部显示的超链接。
     */
    infoUrl?: string;

    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface GetLocationOption {
    /**
     * @property {String} 坐标类型。
     */
    type?: LocationTypes;

    success?: (res?: GetLocationSuccessCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface GetLocationSuccessCallbackResult extends GeneralCallbackResult {
    /**
     * @property {Number} 纬度。
     */
    latitude: number;
    /**
     * @property {Number} 经度。
     */
    longitude: number;
    /**
     * @property {Number} 速度（单位：米每秒）。
     */
    speed: number;
    /**
     * @property {Number} 位置精度。
     */
    accuracy: number;
  }

  interface StartSearchBeaconsOption {
    /**
     * @property {String} 摇周边的业务 Ticket。
     */
    ticket: string;

    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface StopSearchBeaconsOption {
    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface OnSearchBeaconsOption {
    complete?: (res?: OnSearchBeaconsCompleteCallbackResult) => void;
  }

  interface OnSearchBeaconsCompleteCallbackResult
    extends GeneralCallbackResult {
    /**
     * @property {Array} 设备列表。
     */
    beacons: Array<{
      /**
       * @property {String} UUID。
       */
      uuid: string;
      /**
       * @property {Number} Major。
       */
      major: number;
      /**
       * @property {Number} Minor。
       */
      minor: number;
      /**
       * @property {String} 距离（单位：米）。
       */
      accuracy: string;
      /**
       * @property {String} 精度。
       */
      proximity: string;
      /**
       * @property {String} 接收信号的强度指示。
       */
      rssi: string;
      /**
       * @property {String} 接收信号时设备的方向。
       */
      heading?: string;
    }>;
  }

  interface HideMenuItemsOption {
    /**
     * @property {Array} 要隐藏的菜单项。
     */
    menuList: MenuNames[];

    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface ShowMenuItemsOption {
    /**
     * @property {Array} 要隐藏的菜单项。
     */
    menuList: MenuNames[];

    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface HideAllNonBaseMenuItemOption {
    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface ShowAllNonBaseMenuItemOption {
    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface ScanQRCodeOption {
    /**
     * @property {Number} 是否直接返回扫描结果。
     */
    needResult?: 0 | 1;
    /**
     * 指定扫二维码还是一维码。
     */
    scanType?: ScanTypes[];

    cancel?: (res?: GeneralCallbackResult) => void;
    success?: (res?: ScanQRCodeSuccessCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface ScanQRCodeSuccessCallbackResult extends GeneralCallbackResult {
    /**
     * @property {String} 扫描结果。
     */
    resultStr?: string;
  }

  interface OpenProductSpecificViewOption {
    /**
     * @property {String} 商品 ID。
     */
    productId: string;
    /**
     * @property {Number} 页面类型。
     */
    viewType?: ProductSpecificViewTypes;
    /**
     * @property {Object} 额外信息。
     */
    extInfo?: any;

    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface ChooseCardOption {
    /**
     * @property {String} 门店 ID。
     */
    shopId: string;
    /**
     * @property {String} 卡券类型。
     */
    cardType: string;
    /**
     * @property {String} 卡券 ID。
     */
    cardId: string;
    /**
     * @property {String} 卡券签名时间戳。
     */
    timestamp: string;
    /**
     * @property {String} 卡券签名随机串。
     */
    nonceStr: string;
    /**
     * @property {String} 签名方式。
     */
    signType: string;
    /**
     * @property {String} 卡券签名。
     */
    cardSign: string;

    success?: (res?: ChooseCardSuccessCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface ChooseCardSuccessCallbackResult extends GeneralCallbackResult {
    /**
     * @property {String} 卡券列表的 JSON 格式字符串。
     */
    cardList: string;
  }

  interface AddCardOption {
    /**
     * @property {Array} 要添加的卡券列表。
     */
    cardList: Array<{
      /**
       * @property {String} 卡券 ID。
       */
      cardId: string;
      /**
       * @property {String} 卡券扩展参数。
       */
      cardExt?: string;
    }>;

    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface OpenCardOption {
    /**
     * @property {Array} 要打开的卡券列表。
     */
    cardList: Array<{
      /**
       * @property {String} 卡券 ID。
       */
      cardId: string;
      /**
       * @property {String} 卡券 Code。
       */
      code: string;
    }>;

    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface ConsumeAndShareCardOption {
    /**
     * @property {String} 卡券 ID。
     */
    cardId?: string;
    /**
     * @property {String} 卡券 Code。
     */
    code?: string;

    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface ChooseWXPayOption {
    /**
     * @property {String} 支付签名时间戳。
     */
    timestamp: string;
    /**
     * @property {String} 支付签名随机串。
     */
    nonceStr: string;
    /**
     * @property {String} 支付参数。
     */
    package: string;
    /**
     * @property {String} 签名方式。
     */
    signType: string;
    /**
     * @property {String} 支付签名。
     */
    paySign: string;

    cancel?: (res?: GeneralCallbackResult) => void;
    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface OpenBusinessViewOption {
    /**
     * @property {String} 跳转类型。
     */
    businessType: string;
    /**
     * @property {String} 页面参数。
     */
    queryString: string;
    /**
     * @property {String} 版本。
     */
    envVersion?: string;

    cancel?: (res?: GeneralCallbackResult) => void;
    success?: (res?: OpenAddressSuccessCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface OpenAddressOption {
    cancel?: (res?: GeneralCallbackResult) => void;
    success?: (res?: OpenAddressSuccessCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface OpenAddressSuccessCallbackResult extends GeneralCallbackResult {
    /**
     * @property {String} 收货人姓名。
     */
    userName: string;
    /**
     * @property {String} 邮编。
     */
    postalCode: string;
    /**
     * @property {String} 国标收货地址第一级地址（省）。
     */
    provinceName: string;
    /**
     * @property {String} 国标收货地址第二级地址（市）。
     */
    cityName: string;
    /**
     * @property {String} 国标收货地址第三级地址（国家）。
     */
    countryName: string;
    /**
     * @property {String} 详细收货地址信息。
     */
    detailInfo: string;
    /**
     * @property {String} 收货地址国家码。
     */
    nationalCode?: string;
    /**
     * @property {String} 收货人手机号码。
     */
    telNumber: string;
  }

  interface LaunchMiniProgramOption {
    /**
     * @property {String} 目标小程序 AppId。
     */
    targetAppId: string;
    /**
     * @property {String} 小程序页面路径。
     */
    path: string;
    /**
     * @property {String} 小程序版本。
     */
    envVersion?: string;

    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface OpenEnterpriseRedPacketOption {
    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface OpenEnterpriseChatOption {
    /**
     * @property {String} 参与会话的企业成员列表，用逗号隔开。
     */
    userIds?: string;
    /**
     * @property {String} 参与会话的外部联系人列表，用逗号隔开。
     */
    externalUserIds?: string;
    /**
     * @property {String} 会话名称。
     */
    groupName?: string;
    /**
     * @property {String} 会话 ID。
     */
    chatId?: string;

    success?: (res?: OpenEnterpriseChatSuccessCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface OpenEnterpriseChatSuccessCallbackResult
    extends GeneralCallbackResult {
    /**
     * @property {String} 会话 ID。
     */
    chatId: string;
  }

  interface MiniProgramNavigateToOption {
    /**
     * @property {String} 需要跳转的页面路径。
     */
    url: string;

    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface MiniProgramNavigateBackOption {
    /**
     * @property {Number} 返回的页面数。
     */
    delta?: number;

    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface MiniProgramSwitchTabOption {
    /**
     * @property {String} 需要跳转的页面路径。
     */
    url: string;

    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface MiniProgramReLaunchOption {
    /**
     * @property {String} 需要跳转的页面路径。
     */
    url: string;

    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface MiniProgramRedirectToOption {
    /**
     * @property {String} 需要跳转的页面路径。
     */
    url: string;

    success?: (res?: GeneralCallbackResult) => void;
    fail?: (res?: GeneralCallbackResult) => void;
    complete?: (res?: GeneralCallbackResult) => void;
  }

  interface MiniProgramPostMessageOption {
    data: any;
  }

  interface MiniProgramGetEnvCallbackResult extends GeneralCallbackResult {
    /**
     * @property {Boolean} 是否在小程序环境下。
     */
    miniprogram?: boolean;
  }

  /** **************************************************************************
   * 配置方法
   ****************************************************************************/

  /**
   * 注入权限验证配置。
   * @param {Object} options 配置项。
   */
  function config(options: ConfigOption): void;

  /**
   * 处理成功的回调方法。
   * @param {Function} callback 回调函数。
   */
  function ready(callback: () => void): void;

  /**
   * 处理失败的回调方法。
   * @param {Function} callback 回调函数。
   */
  function error(callback: (res?: GeneralCallbackResult) => void): void;

  /**
   * 判断当前客户端版本是否支持指定 JS 接口。
   * @param {Object} options 配置项。
   */
  function checkJsApi(options?: CheckJsApiOption): void;

  /**
   * 自定义“分享给朋友”及“分享到 QQ”按钮的分享内容。
   * @param {Object} options 配置项。
   */
  function updateAppMessageShareData(
    options?: UpdateAppMessageShareDataOption
  ): void;

  /**
   * 自定义“分享到朋友圈”及“分享到 QQ 空间”按钮的分享内容。
   * @param {Object} options 配置项。
   */
  function updateTimelineShareData(
    options?: UpdateTimelineShareDataOption
  ): void;

  /**
   * 获取“分享到朋友圈”按钮点击状态及自定义分享内容。
   * @param {Object} options 配置项。
   * @deprecated
   */
  function onMenuShareTimeline(options?: OnMenuShareTimelineOption): void;

  /**
   * 获取“分享给朋友”按钮点击状态及自定义分享内容。
   * @param {Object} options 配置项。
   * @deprecated
   */
  function onMenuShareAppMessage(options?: OnMenuShareAppMessageOption): void;

  /**
   * 获取“分享到 QQ”按钮点击状态及自定义分享内容。
   * @param {Object} options 配置项。
   * @deprecated
   */
  function onMenuShareQQ(options?: OnMenuShareQQOption): void;

  /**
   * 获取“分享到腾讯微博”按钮点击状态及自定义分享内容。
   * @param {Object} options 配置项。
   * @deprecated
   */
  function onMenuShareWeibo(options?: OnMenuShareWeiboOption): void;

  /**
   * 获取“分享到 QQ 空间”按钮点击状态及自定义分享内容。
   * @param {Object} options 配置项。
   * @deprecated
   */
  function onMenuShareQZone(options?: OnMenuShareQZoneOption): void;

  /**
   * 拍照或从手机相册中选图。
   * @param {Object} options 配置项。
   */
  function chooseImage(options?: ChooseImageOption): void;

  /**
   * 预览图片。
   * @param {Object} options 配置项。
   */
  function previewImage(options?: PreviewImageOption): void;

  /**
   * 上传图片。
   * @param {Object} options 配置项。
   */
  function uploadImage(options?: UploadImageOption): void;

  /**
   * 下载图片。
   * @param {Object} options 配置项。
   */
  function downloadImage(options?: DownloadImageOption): void;

  /**
   * 获取本地图片。
   * @param {Object} options 配置项。
   */
  function getLocalImgData(options?: GetLocalImgDataOption): void;

  /**
   * 开始录音。
   * @param {Object} options 配置项。
   */
  function startRecord(options?: StartRecordOption): void;

  /**
   * 停止录音。
   * @param {Object} options 配置项。
   */
  function stopRecord(options?: StopRecordOption): void;

  /**
   * 监听录音自动停止。
   * @param {Object} options 配置项。
   */
  function onVoiceRecordEnd(options?: OnVoiceRecordEndOption): void;

  /**
   * 播放语音。
   * @param {Object} options 配置项。
   */
  function playVoice(options?: PlayVoiceOption): void;

  /**
   * 暂停播放。
   * @param {Object} options 配置项。
   */
  function pauseVoice(options?: PauseVoiceOption): void;

  /**
   * 停止播放接口。
   * @param {Object} options 配置项。
   */
  function stopVoice(options?: StopVoiceOption): void;

  /**
   * 监听语音播放完毕。
   * @param {Object} options 配置项。
   */
  function onVoicePlayEnd(options?: OnVoicePlayEndOption): void;

  /**
   * 上传语音。
   * @param {Object} options 配置项。
   */
  function uploadVoice(options?: UploadVoiceOption): void;

  /**
   * 下载语音。
   * @param {Object} options 配置项。
   */
  function downloadVoice(options?: DownloadVoiceOption): void;

  /**
   * 识别音频并返回识别结果。
   * @param {Object} options 配置项。
   */
  function translateVoice(options?: TranslateVoiceOption): void;

  /**
   * 获取网络状态。
   * @param {Object} options 配置项。
   */
  function getNetworkType(options?: GetNetworkTypeOption): void;

  /**
   * 使用微信内置地图查看位置。
   * @param {Object} options 配置项。
   */
  function openLocation(options?: OpenLocationOption): void;

  /**
   * 获取地理位置。
   * @param {Object} options 配置项。
   */
  function getLocation(options?: GetLocationOption): void;

  /**
   * 开启查找周边 iBeacon 设备。
   * @param {Object} options 配置项。
   */
  function startSearchBeacons(options?: StartSearchBeaconsOption): void;

  /**
   * 关闭查找周边 iBeacon 设备。
   * @param {Object} options 配置项。
   */
  function stopSearchBeacons(options?: StopSearchBeaconsOption): void;

  /**
   * 监听周边 iBeacon 设备。
   * @param {Object} options 配置项。
   */
  function onSearchBeacons(options?: OnSearchBeaconsOption): void;

  /**
   * 关闭当前网页窗口。
   */
  function closeWindow(): void;

  /**
   * 隐藏右上角菜单。
   */
  function hideOptionMenu(): void;

  /**
   * 显示右上角菜单。
   */
  function showOptionMenu(): void;

  /**
   * 批量隐藏功能按钮。
   * @param {Object} options 配置项。
   */
  function hideMenuItems(options?: HideMenuItemsOption): void;

  /**
   * 批量显示功能按钮。
   * @param {Object} options 配置项。
   */
  function showMenuItems(options?: ShowMenuItemsOption): void;

  /**
   * 隐藏所有非基础按钮。
   * @param {Object} options 配置项。
   */
  function hideAllNonBaseMenuItem(options?: HideAllNonBaseMenuItemOption): void;

  /**
   * 显示所有功能按钮。
   * @param {Object} options 配置项。
   */
  function showAllNonBaseMenuItem(options?: ShowAllNonBaseMenuItemOption): void;

  /**
   * 调起微信扫一扫。
   * @param {Object} options 配置项。
   */
  function scanQRCode(options?: ScanQRCodeOption): void;

  /**
   * 跳转微信商品页。
   * @param {Object} options 配置项。
   */
  function openProductSpecificView(
    options?: OpenProductSpecificViewOption
  ): void;

  /**
   * 拉取适用卡券列表并获取用户选择信息。
   * @param {Object} options 配置项。
   */
  function chooseCard(options?: ChooseCardOption): void;

  /**
   * 批量添加卡券。
   * @param {Object} options 配置项。
   */
  function addCard(options?: AddCardOption): void;

  /**
   * 查看微信卡包中的卡券。
   * @param {Object} options 配置项。
   */
  function openCard(options?: OpenCardOption): void;

  /**
   * 使用微信卡包中的卡券。
   * @param {Object} options 配置项。
   */
  function consumeAndShareCard(options?: ConsumeAndShareCardOption): void;

  /**
   * 发起一个微信支付请求。
   * @param {Object} options 配置项。
   */
  function chooseWXPay(options?: ChooseWXPayOption): void;

  /**
   * 调起微信支付分。
   * @param {Object} options 配置项。
   */
  function openBusinessView(options?: OpenBusinessViewOption): void;

  /**
   * 共享收货地址。
   * @param {Object} options 配置项。
   */
  function openAddress(options?: OpenAddressOption): void;

  /**
   * 跳转到小程序。
   * @param {Object} options 配置项。
   */
  function launchMiniProgramOption(options?: LaunchMiniProgramOption): void;

  /**
   * 打开企业微信红包。
   * @param {Object} options 配置项。
   */
  function openEnterpriseRedPacket(
    options?: OpenEnterpriseRedPacketOption
  ): void;

  /**
   * 打开企业微信聊天。
   * @param {Object} options 配置项。
   */
  function openEnterpriseChat(options?: OpenEnterpriseChatOption): void;

  /**
   * 小程序相关接口。
   */
  namespace miniProgram {
    /**
     * 处理成功的回调方法。
     * @param {Object} options 配置项。
     */
    function navigateTo(options?: MiniProgramNavigateToOption): void;

    /**
     * 处理成功的回调方法。
     * @param {Object} options 配置项。
     */
    function navigateBack(options?: MiniProgramNavigateBackOption): void;

    /**
     * 处理成功的回调方法。
     * @param {Object} options 配置项。
     */
    function switchTab(options?: MiniProgramSwitchTabOption): void;

    /**
     * 处理成功的回调方法。
     * @param {Object} options 配置项。
     */
    function reLaunch(options?: MiniProgramReLaunchOption): void;

    /**
     * 处理成功的回调方法。
     * @param {Object} options 配置项。
     */
    function redirectTo(options?: MiniProgramRedirectToOption): void;

    /**
     * 向小程序发送消息。
     * @param {Object} options 配置项。
     */
    function postMessage(options?: MiniProgramPostMessageOption): void;

    /**
     * 获取当前环境 。
     * @param {Function} callback 回调函数。
     */
    function getEnv(
      callback: (res?: MiniProgramGetEnvCallbackResult) => void
    ): void;
  }
}

declare module "@zolplay-labs/weixin-ts-sdk" {
  export = WeixinJsSdk;
}
