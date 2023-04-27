$(function () {
  /**
   * ********************************
   * ********************************
   * banner/导航 制作
   */
  //li隐藏
  $('.container_header .header .listson ul li').hide()
  //二维码隐藏
  $('.erweima').hide()
  //遮罩
  $('.container_header .header .nav,.container_header .header .listson').hover(function (e) {
    $('.container_header .header .listson ul li').stop().slideDown('fast')
    $('.container_header .bg').stop().animate({
      'height': '350px',
    }, 200).css('background-image', 'linear-gradient(to bottom, #000000cb, #171717d5, #1d1d1da4, #25252591, #3a3a3a80)')
  }, function (e) {
    $('.container_header .header .listson ul li').stop().slideUp('fast')
    $('.container_header .bg').stop().animate({
      'height': '100px',
    }, 200).css('background-image', 'linear-gradient(to bottom, #000000cb, #171717d0, #262626ad, #37373760, #48484800)')
  })
  //li子显示
  $('.listson li').hover(function (e) {
    $(this).find('a').css('color', '#f5b365')
  }, function (e) {
    $(this).find('a').css('color', '')
  })
  //二维码显示
  $('.phone,.erweima').hover(function () {
    $('.erweima').stop().fadeIn()
  }, function () {
    $('.erweima').stop().fadeOut()
  })
  //登录显示
  $('.userlogin').hover(function (e) {
    $(this).stop().animate({
      'height': '230px',
    }, 200).css({
      'cursor': 'pointer',
      'background-image': 'linear-gradient(to bottom, #000000cb, #141414da, #1d1d1dc4)',
      'transition': 'all .2s'
    })
  }, function (e) {
    $(this).stop().animate({
      'height': '70px',
    }, 100).css({
      'cursor': '',
      'background-image': '',
    })
  })

  //箭头动画添加
  $('.humanMid,.btn-morenews,.href-more,.inner-hover-href,.more-hotprogram,.href-partner').hover(function () {
    // more-arrow
    $(this).find('i.more-arrow').addClass('animated')
  }, function () {
    $(this).find('i.more-arrow').removeClass('animated')
  })


  //滚动 banner变幻
  var scrollTop
  $(window).scroll(function () {
    if ($(document).scrollTop()) {
      $('.banner').animate({
        'height': '360px'
      }, 400).find('.xiangqing').animate({
        'bottom': '30px',
      }, 50)
      $('.banner .bgimg').prop('src', './images/banner/banner5.jfif')
    }
    if ($(document).scrollTop() > $('.container_cont').offset().top) {
      $('.rightnav-qrcodd').css('right', '0')
      $('.sidebar > ul').css('height', '410px')
      $('.sidebar').addClass('showTop')
    } else {
      $('.rightnav-qrcodd').css('right', '')
      $('.sidebar > ul').css('height', '')
      $('.sidebar').removeClass('showTop')
    }
    scrollTop = $(document).scrollTop()

    $('.container_cont .cont').each(function (index) {
      if ($(this).next().is('div')) {
        ($(this).offset().top - 300 <= scrollTop && scrollTop <= $(this).next('div').offset().top - 300) ? $('.sidebar .rightnav-bar-li:eq(' + index + ')').addClass('selected'): $('.sidebar .rightnav-bar-li:eq(' + index + ')').removeClass('selected')
      } else {
        $(this).offset().top - 300 <= scrollTop ? $('.sidebar .rightnav-bar-li:eq(' + index + ')').addClass('selected') : $('.sidebar .rightnav-bar-li:eq(' + index + ')').removeClass('selected')
      }
    })
  })

  /**
   * ********************************
   * ********************************
   * 轮播制作
   */
  var totalWidthLunbo = -$('.lunbo_img').width() * 4
  var newtotalWidthLunbo = totalWidthLunbo.toString() + 'px'
  //定时器制作
  function lunboInterval() {
    if ($('.lunbo_img').css('margin-left') == newtotalWidthLunbo) {
      $('.lunbo_img').stop().animate({
        'margin-left': 0 + 'px',
      })
    } else {
      $('.lunbo_img').stop().animate({
        'margin-left': '-=' + $('.lunbo_img>li').width()
      })
    }
    var index = -parseInt($('.lunbo_img').css('margin-left')) / ($('.lunbo_img').width()) + 1
    if (index == 5) index = 0
    $('.lunbo_spot span').removeClass('actived')
    $('.lunbo_spot span:eq(' + index + ')').addClass('actived')
  }
  var lunboIntervaltime = setInterval(lunboInterval, 1500)
  //移入标题定格
  $('.lunbo_spot span').hover(function (e) {
    clearInterval(lunboIntervaltime)
    $('.lunbo_spot span').removeClass('actived')
    $(this).addClass('actived')
    // console.log($(this).index());
    $('.lunbo_img').stop().animate({
      'margin-left': '-' + $('.lunbo_img>li').width() * $(this).index()
    })
  }, function (e) {
    lunboIntervaltime = setInterval(lunboInterval, 1500);
  })
  //移入图片定格
  $('.lunbo_img li').hover(function (e) {
    clearInterval(lunboIntervaltime)
  }, function (e) {
    lunboIntervaltime = setInterval(lunboInterval, 1500);
  })

  /**
   * ********************************
   * ********************************
   * 新闻制作
   */
  var newsinfo = [{
    title: "收集星光，守护美好!星之守护者周边新品活动闪耀开启!",
    newsitemicon: ['新闻', '赛事', '视频', '视频', '视频', '新闻'],
    iconclass: ['news', 'event', 'video', 'video', 'video', 'news'],
    newsitemcont: ['时空召唤活动开启 首次召唤免费！', '2022 英雄联盟全球总决赛日期与入围名额公布', '群星闪耀，星之守护者2022第一系列皮肤现已上线', '星之守护者MV幕后故事', '不羁之悦 尼菈 精彩展示', '星守女神南波儿，福利再继续'],
    newsitemdate: ['07-22', '07-21', '07-20', '07-18', '07-18', '07-16']
  }, {
    title: "7月22日周免英雄更新公告",
    newsitemicon: ['公告', '公告', '公告', '公告', '公告', '公告'],
    iconclass: ['inform', 'inform', 'inform', 'inform', 'inform', 'inform'],
    newsitemcont: ['2022年7月15日 不停机更新公告', '另一片天空——星之守护者免费任务介绍', '新英雄尼菈与星之守护者现已降临', '12.13版本更新公告：不羁之悦 尼菈降临峡谷，星之守护者部分皮肤同步上线', '12.13云顶之弈版本更新公告', '7月15日周免英雄更新公告'],
    newsitemdate: ['07-15', '07-14', '07-13', '07-13', '07-13', '07-13']
  }, {
    title: "TOP5：Flandre狂怒基因猛兽终觉醒",
    newsitemicon: ['视频', '赛事', '赛事', '视频', '视频', '赛事'],
    iconclass: ['video', 'event', 'event', 'video', 'video', 'event'],
    newsitemcont: ['我是选手：TheShy狂怒基因猛踏掀巨石', 'LPL夏季赛7月22日首发名单，Rookie交手Doinb', '2022 英雄联盟全球总决赛日期与入围名额公布', 'Breathe逐渐掌控话语权，GALA放飞自我不推家', 'TOP5：Wei英勇冲锋圣锤定裁决', 'LPL夏季赛7月20日首发名单，Bin上路对阵Breathe'],
    newsitemdate: ['07-22', '07-21', '07-21', '07-21', '07-21', '07-19']
  }, {
    title: "【版本解读】12.14PBE大改：更加强调对线能力",
    newsitemicon: ['教学', '新闻', '教学', '新闻', '教学', '视频'],
    iconclass: ['tutorial', 'news', 'tutorial', 'news', 'tutorial', 'video'],
    newsitemcont: ['【乱斗研究所】守护者号角为什么是神？', '职业选手怎么玩：qiuqiu辅助阿木木打法攻略', '【乱斗研究所】12.13解析：轮子妈玩法大改，面具伤害可叠加', ' 版本强势英雄推荐No2-希维尔', '【小洛奥】刺客克星冰拳加里奥，压倒性counter！', '一看就会：闪电五连鞭闪亮登场 王者寒千落带你轻松上手尼菈'],
    newsitemdate: ['07-21', '07-21', '07-19', '07-19', '07-15', '07-15']
  }, {
    title: "星河烂漫，奔跃不休—新一代星之守护者皮肤背景故事简析（10）",
    newsitemicon: ['视频', '娱乐', '娱乐', '教学', '娱乐', '娱乐'],
    iconclass: ['video', 'amusement', 'amusement', 'tutorial', 'amusement', 'amusement'],
    newsitemcont: ['【LOL小动画】星之守护者：代表星星消灭你！', '【联盟蜡笔画】可爱的星之守护者头像', '【12.13版本】至臻星之守护者艾克皮肤鉴赏', '星之守护者卡莎隐藏彩蛋！', '联盟趣谈：与装备有关的二三事（3）', '【猫猫同人】星之守护者Q版头像'],
    newsitemdate: ['07-18', '07-16', '07-16', '07-15', '07-12', '07-11']
  }]
  //定义新闻索引变量
  var newsindex
  $('.m-news li.act a').css({
    'font-weight': '700',
    'color': '#1da6ba',
  })
  //激活li时的a的样式变化
  function activeA(el, arg1, arg2) {
    el.find('a').css({
      'font-weight': arg1,
      'color': arg2,
    })
  }

  function hoverType(e) {
    //标题
    $(e).parents('.m-news').find('.part-mid-tab .first a').text(newsinfo[newsindex].title)
    //形式
    $(e).parents('.m-news').find('.part-mid-tab .itemtyle').each((index, item) => {
      $(item).text(newsinfo[newsindex].newsitemicon[index])
        .parents('.newsitem')
        .removeClass('news event video inform tutorial amusement', function (index, item) {
          console.log(index + '---' + item);
        })
        .addClass(newsinfo[newsindex].iconclass[index])
    })
    //内容
    $(e).parents('.m-news').find('.part-mid-tab .itemhref').each((index, item) => {
      $(item).text(newsinfo[newsindex].newsitemcont[index])
    })
    //日期
    $(e).parents('.m-news').find('.part-mid-tab .itemtime').each((index, item) => {
      $(item).text(newsinfo[newsindex].newsitemdate[index])
    })
  }
  $('.m-news .part-top-tab ul >li').hover(function (e) {
    $(this).addClass('act').siblings('li').removeClass('act')
    activeA($(this), "700", "#1da6ba")
    activeA($(this).siblings('li'), "", "")
    newsindex = $(this).index()
    // console.log(newsindex);
    hoverType(this)
  }, function (e) {})
  $('.part-mid-tab li.newsitem').hover(function () {
    var fontcolor = $(this).find('.itemtyle').css('color')
    $(this).find('.itemhref').css('color', fontcolor)
  }, function () {
    $(this).find('.itemhref').css('color', '')
  })

  /**
   * ********************************
   * ********************************
   * 热门活动
   */
  //m-act-list 列表
  var actListArr = [{
    actList: [{
      actListImg: './images/hotActivity/1.jpg',
      actListTitle: '时空召唤',
      actListOvertime: '20天后结束',
      actListP1: '时空召唤',
      actListP2: '首次召唤免费！开启召唤赢珍稀龙的传人',
      actListP3: '2022-07-12 - 2022-08-28'
    }, {
      actListImg: './images/hotActivity/2.jpg',
      actListTitle: '夏日折扣',
      actListOvertime: '22天后结束',
      actListP1: '夏日折扣',
      actListP2: '17款精选皮肤限时半价',
      actListP3: '2022-08-02 - 2022-08-30'
    }, {
      actListImg: './images/hotActivity/3.jpg',
      actListTitle: '星之守护者2022',
      actListOvertime: '8天后结束',
      actListP1: '星之守护者2022',
      actListP2: '五位全新星之守护者闪亮登场 为爱与希望而战！',
      actListP3: '2022-07-15 - 2022-08-16'
    }, {
      actListImg: './images/hotActivity/4.jpg',
      actListTitle: '星之守护者（2022）通行证',
      actListOvertime: '8天后结束',
      actListP1: '星之守护者（2022）通行证',
      actListP2: '解锁通行证赢取星之守护者系列至臻皮肤与丰富好礼',
      actListP3: '2022-07-15 - 2022-08-16'
    }]
  }, {
    actList: [{
      actListImg: './images/hotActivity/5.jpg',
      actListTitle: '星之守护者 周边开售',
      actListOvertime: '7天后结束',
      actListP1: '星之守护者 周边开售',
      actListP2: '星之守护者系列主题周边重磅上市，多款联名定制周边限量发售，购买星之守护者系列周边还可参与抽奖开启多重惊喜好礼，一起来收集星光守护美好吧！',
      actListP3: '2022-07-14 - 2022-08-15'
    }, {
      actListImg: './images/hotActivity/6.jpg',
      actListTitle: '罗技鼠标礼盒 限量抢购中',
      actListOvertime: '7天后结束',
      actListP1: '罗技鼠标礼盒 限量抢购中',
      actListP2: '星之守护者罗技联名礼盒限量回馈，内含罗技鼠标和限量鼠标垫，赠星守定制版收纳箱，售完即止，欲购从速哦~',
      actListP3: '2022-07-14 - 2022-08-15'
    }, {
      actListImg: './images/hotActivity/7.jpg',
      actListTitle: '你的商店',
      actListOvertime: '已结束',
      actListP1: '你的商店',
      actListP2: '解锁你的专属折扣',
      actListP3: '2022-07-04 - '
    }, {
      actListImg: './images/hotActivity/8.jpg',
      actListTitle: '星守璐璐手办 买即赠专属头像',
      actListOvertime: '68天后结束',
      actListP1: '星守璐璐手办 买即赠专属头像',
      actListP2: '充满奇思妙想的魔法少女——星之守护者 璐璐 手办新品开售！现在下单，立即赠送手办专属头像，还有更多星之守护者新品周边，等你来购~',
      actListP3: '2022-07-14 - 2022-10-15'
    }]
  }, {
    actList: [{
      actListImg: './images/hotActivity/9.jpg',
      actListTitle: '夺冠图标表情领取',
      actListOvertime: '长期活动',
      actListP1: '夺冠图标表情领取',
      actListP2: '恭喜RNG勇夺2022季中冠军赛冠军',
      actListP3: '开启时间: 2022-06-24'
    }, {
      actListImg: './images/hotActivity/10.jpg',
      actListTitle: '星守金克丝雕塑 限时预售中！',
      actListOvertime: '长期活动',
      actListP1: '星守金克丝雕塑 限时预售中！',
      actListP2: 'GSAS联名款 星之守护者金克丝 1/7中型雕塑开售啦！现在预定即赠“星之守护者 印记”图标和小白小黑定制徽章，更有多重好礼等你开启！',
      actListP3: '开启时间: 2022-07-21'
    }, {
      actListImg: './images/hotActivity/11.jpg',
      actListTitle: '至臻名品',
      actListOvertime: '长期活动',
      actListP1: '至臻名品',
      actListP2: '查看至臻皮肤收藏里程并分享!',
      actListP3: '开启时间: 2022-07-15'
    }, {
      actListImg: './images/hotActivity/12.jpg',
      actListTitle: '小小英雄：巨龙幼崽来袭',
      actListOvertime: '长期活动',
      actListP1: '小小英雄：巨龙幼崽来袭',
      actListP2: '有什么比一个出身龙族的小小英雄更能驾驭七条巨龙呢？',
      actListP3: '开启时间: 2022-06-09'
    }]
  }]
  $('.part-top-tab li.select a').css({
    'font-weight': '700',
    'color': '#1da6ba',
  });
  // actLi初始化
  function initActLi(actLiIndex) {
    for (i = 0; i < actListArr[actLiIndex].actList.length; i++) {
      let actListNode =
        `<li class="act-item">
        <img src="${actListArr[actLiIndex].actList[i].actListImg}" alt="">
        <p>${actListArr[actLiIndex].actList[i].actListTitle}</p>
        <a class="overtime" href="javascript:void(0)">${actListArr[actLiIndex].actList[i].actListOvertime}</a>
        <div class="innerhover-border">
          <i class="hover-border-1"></i>
          <div class="innerhover-border-inner">
            <h4 class="p1">${actListArr[actLiIndex].actList[i].actListP1}</h4>
            <div class="p2">${actListArr[actLiIndex].actList[i].actListP2}</div>
            <div class="p2">${actListArr[actLiIndex].actList[i].actListP3}</div>
          </div>
        </div>
      </li>`
      $('#actListContainer').append(actListNode)
    }
  }
  //part-top-tab 切换
  var actLiIndex = 0
  initActLi(actLiIndex)
  $('.m-hotactivity .part-top-tab ul > li').hover(function () {
    $(this).addClass('select').siblings('li').removeClass('select')
    activeA($(this), "700", "#1da6ba")
    activeA($(this).siblings('li'), "", "")

    //清空
    if (actLiIndex != $(this).index()) {
      $('#actListContainer').empty()
      console.log(actLiIndex);
      actLiIndex = $(this).index()
      initActLi(actLiIndex)
    }
  }, function () {

  })

  /**
   * ********************************
   * ********************************
   * 新英雄新皮肤
   */
  $('.m-new-champion-one').hover(function (e) {
    $(this).find('.inner-hover').stop().fadeIn('fast')
  }, function (e) {
    $(this).find('.inner-hover').stop().fadeOut('fast')
  })

  /**
   * ********************************
   * ********************************
   * 版本导航
   */
  $('.club-developer').hover(function (e) {
    $(this).find('.innerhover-border').stop().fadeIn('fast')
  }, function (e) {
    $(this).find('.innerhover-border').stop().fadeOut('fast')
  })

  /**
   * ********************************
   * ********************************
   * 更多新皮肤
   */
  $('.m-new-skin-one , .new-version').hover(function () {
    $(this).css({
      'transform': 'scale(1.1)',
      'transition': '.4s'
    })
    $('.m-new-skin-one').css('heihgt', '+=10px')
    $(this).parents('.m-new-championskin').siblings('.m-more-skin').addClass('hasHeight')
  }, function () {
    $(this).css({
      'transform': '',
      'transition': '.4s'
    })
    $(this).parents('.m-new-championskin').siblings('.m-more-skin').removeClass('hasHeight')
  })

  $('.m-more-skin').hover(function () {
    $(this).addClass('hasHeight')
    $('.m-new-skin-one').css({
      'transform': 'scale(1.1)',
      'transition': '.4s'
    })
    $(this).find('.more-skin-item').hover(function () {
      $(this).find('img').css(
        'transform', 'scale(1.1)'
      )
    }, function () {
      $(this).find('img').css({
        'transform': '',
        'transition': '.4s'
      })
    })
  }, function () {
    $('.m-new-skin-one').css('transform', '')
    $(this).removeClass('hasHeight')
  })

  /**
   * ********************************
   * ********************************
   * 内容二 最新视频
   * */
  var videoArr = [{
    videoList: [{
      videiListImg: './images/newVideo/pic1-1.jfif',
      videiListLength: '38:38',
      videiListName: 'LPL夏季赛 UP vs V5_01',
      videiListPlaytimes: '2.4万次播放',
      videiListUpdatetime: '2022-08-07',
    }, {
      videiListImg: './images/newVideo/pic1-2.jpg',
      videiListLength: '01:10',
      videiListName: '不知道为什么，隐约感觉S12总决赛赛冠军会是RNG',
      videiListPlaytimes: '4768次播放',
      videiListUpdatetime: '14小时前',
    }, {
      videiListImg: './images/newVideo/pic1-3.jfif',
      videiListLength: '34:25',
      videiListName: 'LPL夏季赛 JDG vs AL_01',
      videiListPlaytimes: '1.7万次播放',
      videiListUpdatetime: '2022-08-07',
    }, {
      videiListImg: './images/newVideo/pic1-4.jpg',
      videiListLength: '01:57',
      videiListName: '宁王预测世界赛名额：RNG、TES稳进，V5只靠宋义进太难了',
      videiListPlaytimes: '6660次播放',
      videiListUpdatetime: '18小时前',
    }, {
      videiListImg: './images/newVideo/pic1-5.jpg',
      videiListLength: '01:31',
      videiListName: '女警还能这样玩？',
      videiListPlaytimes: '5684次播放',
      videiListUpdatetime: '16小时前',
    }, {
      videiListImg: './images/newVideo/pic1-6.jpg',
      videiListLength: '03:00',
      videiListName: '超治愈！星守主题曲中文特别版《不灭星光》发布',
      videiListPlaytimes: '32.7万次播放',
      videiListUpdatetime: '2022-08-05',
    }, {
      videiListImg: './images/newVideo/pic1-7.jpg',
      videiListLength: '02:31',
      videiListName: 'Gala自信一追三看麻众解说！小虎第一视角真相来了',
      videiListPlaytimes: '3942次播放',
      videiListUpdatetime: '13小时前',
    }, {
      videiListImg: './images/newVideo/pic1-8.png',
      videiListLength: '06:14',
      videiListName: '957看WE14连败直接人麻了：让我上去送他们一把吧！',
      videiListPlaytimes: '3785次播放',
      videiListUpdatetime: '13小时前',
    }]
  }, {
    videoList: [{
      videiListImg: './images/newVideo/pic2-1.jfif',
      videiListLength: '03:38',
      videiListName: '【英雄联盟】乌迪尔英雄主题配乐',
      videiListPlaytimes: '4808次播放',
      videiListUpdatetime: '10小时前',
    }, {
      videiListImg: './images/newVideo/pic2-2.jfif',
      videiListLength: '02:00',
      videiListName: '【英雄联盟】乌迪尔重做玩法预告视频',
      videiListPlaytimes: '2.1万次播放',
      videiListUpdatetime: '2022-08-06',
    }, {
      videiListImg: './images/newVideo/pic2-3.jpg',
      videiListLength: '01:54',
      videiListName: '星之守护者 辛德拉至臻 预览',
      videiListPlaytimes: '1.6万次播放',
      videiListUpdatetime: '2022-07-28',
    }, {
      videiListImg: './images/newVideo/pic2-4.jpg',
      videiListLength: '02:11',
      videiListName: '星之守护者 阿卡丽（传说）预览',
      videiListPlaytimes: '1.2万次播放',
      videiListUpdatetime: '2022-07-28',
    }, {
      videiListImg: './images/newVideo/pic2-5.jpg',
      videiListLength: '01:59',
      videiListName: '星之吞噬者 莫甘娜 预览',
      videiListPlaytimes: '8583次播放',
      videiListUpdatetime: '2022-07-28',
    }, {
      videiListImg: './images/newVideo/pic2-6.jpg',
      videiListLength: '01:38',
      videiListName: '星之守护者 岩雀 预览',
      videiListPlaytimes: '4392次播放',
      videiListUpdatetime: '2022-07-28',
    }, {
      videiListImg: './images/newVideo/pic2-7.jpg',
      videiListLength: '02:13',
      videiListName: '星之守护者 奎因 预览',
      videiListPlaytimes: '3461次播放',
      videiListUpdatetime: '2022-07-28',
    }, {
      videiListImg: './images/newVideo/pic2-8.jpg',
      videiListLength: '01:59',
      videiListName: '星之守护者 芮尔 预览',
      videiListPlaytimes: '4290次播放',
      videiListUpdatetime: '2022-07-28',
    }]
  }, {
    videoList: [{
      videiListImg: './images/newVideo/pic3-1.png',
      videiListLength: '04:43',
      videiListName: '【背景故事】格温被邀请跳舞！福光岛亡灵的狂欢派对？',
      videiListPlaytimes: '1次播放',
      videiListUpdatetime: '8分钟前',
    }, {
      videiListImg: './images/newVideo/pic3-2.jfif',
      videiListLength: '01:09',
      videiListName: 'RNG小虎对战iG第一视角泄露，xun没送GALA五杀公屏道歉：对不起！',
      videiListPlaytimes: '31次播放',
      videiListUpdatetime: '39分钟前',
    }, {
      videiListImg: './images/newVideo/pic3-3.jpg',
      videiListLength: '01:42',
      videiListName: '【若辰滑板鞋】卡莉丝塔爆e卡点',
      videiListPlaytimes: '45次播放',
      videiListUpdatetime: '44分钟前',
    }, {
      videiListImg: './images/newVideo/pic3-4.png',
      videiListLength: '02:39',
      videiListName: '搬砖哥提莫：单纯小德玛把提莫送到无敌！',
      videiListPlaytimes: '125次播放',
      videiListUpdatetime: '1小时前',
    }, {
      videiListImg: './images/newVideo/pic3-5.jpg',
      videiListLength: '01:01',
      videiListName: '从上单转入野区，这个英雄也太霸道了吧！',
      videiListPlaytimes: '133次播放',
      videiListUpdatetime: '2小时前',
    }, {
      videiListImg: './images/newVideo/pic3-6.png',
      videiListLength: '02:06',
      videiListName: '小虎偶遇Faker立马告知Gala，立志好好玩让李哥记住！',
      videiListPlaytimes: '101次播放',
      videiListUpdatetime: '2小时前',
    }, {
      videiListImg: './images/newVideo/pic3-7.jpg',
      videiListLength: '01:27',
      videiListName: '第一用永恩打中单怎么才能超神？这个技能是关键',
      videiListPlaytimes: '293次播放',
      videiListUpdatetime: '2小时前',
    }, {
      videiListImg: './images/newVideo/pic3-8.jfif',
      videiListLength: '00:47',
      videiListName: '大鹌鹑LOL：残血戏命师细节三杀，学会这波上大分',
      videiListPlaytimes: '509次播放',
      videiListUpdatetime: '2小时前',
    }]
  }, {
    videoList: [{
      videiListImg: './images/newVideo/pic4-1.jpg',
      videiListLength: '05:55',
      videiListName: '2022EDG《E言难禁》夏季赛14：深呼吸',
      videiListPlaytimes: '7次播放',
      videiListUpdatetime: '15分钟前',
    }, {
      videiListImg: './images/newVideo/pic4-2.png',
      videiListLength: '01:48',
      videiListName: 'Doinb分析6支战队季后赛形势:BLG无法晋级LNG稳了',
      videiListPlaytimes: '2033次播放',
      videiListUpdatetime: '1小时前',
    }, {
      videiListImg: './images/newVideo/pic4-3.jpg',
      videiListLength: '00:45',
      videiListName: 'RNG的统治力呢？打TT都能五五开',
      videiListPlaytimes: '1006次播放',
      videiListUpdatetime: '2小时前',
    }, {
      videiListImg: './images/newVideo/pic4-4.jpg',
      videiListLength: '05:09',
      videiListName: '昨天比赛，theshy剑姬有多恐怖？10分钟被抓5次照样越塔',
      videiListPlaytimes: '735次播放',
      videiListUpdatetime: '2小时前',
    }, {
      videiListImg: './images/newVideo/pic4-5.png',
      videiListLength: '03:46',
      videiListName: 'TOP5：Bin宗师之威武圣霸天下',
      videiListPlaytimes: '460次播放',
      videiListUpdatetime: '2小时前',
    }, {
      videiListImg: './images/newVideo/pic4-6.jpeg',
      videiListLength: '03:51',
      videiListName: '姿态盛宴猴子被龙龟气闷了：血越打越少是为什么？',
      videiListPlaytimes: '1394次播放',
      videiListUpdatetime: '4小时前',
    }, {
      videiListImg: './images/newVideo/pic4-7.jpg',
      videiListLength: '06:03',
      videiListName: 'gala称2：0战胜TT纯属意料之中，粉丝连忙提醒别膨胀',
      videiListPlaytimes: '703次播放',
      videiListUpdatetime: '4小时前',
    }, {
      videiListImg: './images/newVideo/pic4-8.jpg',
      videiListLength: '00:56',
      videiListName: '宁王谈论LPL最具统治力AD，我不是狗吹，17-18乌兹最强',
      videiListPlaytimes: '1838次播放',
      videiListUpdatetime: '5小时前',
    }]
  }, {
    videoList: [{
      videiListImg: './images/newVideo/pic5-1.jfif',
      videiListLength: '03:16',
      videiListName: '【云顶之弈】弈博云天 海外赛区解析第一期',
      videiListPlaytimes: '9576次播放',
      videiListUpdatetime: '2022-04-29',
    }, {
      videiListImg: './images/newVideo/pic5-2.jfif',
      videiListLength: '',
      videiListName: '云顶之弈双城之战全球总决赛 海外玩家的绝密阵容 第一期',
      videiListPlaytimes: '9731次播放',
      videiListUpdatetime: '2022-04-26',
    }, {
      videiListImg: './images/newVideo/pic5-3.jfif',
      videiListLength: '01:02',
      videiListName: '【云顶之弈】双城之战全球总决赛 赛事预告片',
      videiListPlaytimes: '2606次播放',
      videiListUpdatetime: '2022-04-21',
    }, {
      videiListImg: './images/newVideo/pic5-4.jfif',
      videiListLength: '06:12',
      videiListName: '云顶之弈TOC3选手介绍',
      videiListPlaytimes: '2580次播放',
      videiListUpdatetime: '2022-04-19',
    }, {
      videiListImg: './images/newVideo/pic5-5.jfif',
      videiListLength: '00:31',
      videiListName: '云顶之弈TOC3全国总决赛宣传片',
      videiListPlaytimes: '2370次播放',
      videiListUpdatetime: '2022-04-19',
    }, {
      videiListImg: './images/newVideo/pic5-6.jfif',
      videiListLength: '05:42',
      videiListName: '【教你弈招】5分钟，了解云顶之弈新版本 霓虹之夜',
      videiListPlaytimes: '1.5万次播放',
      videiListUpdatetime: '2022-02-22',
    }, {
      videiListImg: './images/newVideo/pic5-7.jfif',
      videiListLength: '02:25',
      videiListName: '【云顶之弈霓虹之夜】云顶宝典Ⅱ霓虹宝库展示 赛博潮流冲击波',
      videiListPlaytimes: '3685次播放',
      videiListUpdatetime: '2022-02-22',
    }, {
      videiListImg: './images/newVideo/pic5-8.jfif',
      videiListLength: '01:20',
      videiListName: '【云顶之弈】超控行动 | 霓虹之夜上线短片',
      videiListPlaytimes: '36.2万次播放',
      videiListUpdatetime: '2022-02-16',
    }]
  }, {
    videoList: [{
      videiListImg: './images/newVideo/pic6-1.jpg',
      videiListLength: '08:24',
      videiListName: '超神解说：20秒一个R，寒冰射手艾希，27分钟6神装',
      videiListPlaytimes: '270次播放',
      videiListUpdatetime: '4小时前',
    }, {
      videiListImg: './images/newVideo/pic6-2.jpg',
      videiListLength: '06:31',
      videiListName: '高分通天代窒息节奏 15分钟直接碾压！',
      videiListPlaytimes: '1066次播放',
      videiListUpdatetime: '18小时前',
    }, {
      videiListImg: './images/newVideo/pic6-3.jpg',
      videiListLength: '02:28',
      videiListName: '存在感最低的法师，近6年只改动过2次，打辅助都被人嫌弃',
      videiListPlaytimes: '4214次播放',
      videiListUpdatetime: '22小时前',
    }, {
      videiListImg: './images/newVideo/pic6-4.jpg',
      videiListLength: '02:16',
      videiListName: '曾被誉为“暴击克星”的肉装，结果重做后彻底失去了灵魂',
      videiListPlaytimes: '4925次播放',
      videiListUpdatetime: '22小时前',
    }, {
      videiListImg: './images/newVideo/pic6-5.png',
      videiListLength: '08:54',
      videiListName: '先攻蜘蛛的细致教学！',
      videiListPlaytimes: '4885次播放',
      videiListUpdatetime: '2022-08-08',
    }, {
      videiListImg: './images/newVideo/pic6-6.png',
      videiListLength: '00:48',
      videiListName: 'LOL新模式：克隆魔典曝光',
      videiListPlaytimes: '2610次播放',
      videiListUpdatetime: '2022-08-08',
    }, {
      videiListImg: './images/newVideo/pic6-7.png',
      videiListLength: '11:13',
      videiListName: '【一看就会 】版本之子？万场吸血鬼左手带你了解上分密码',
      videiListPlaytimes: '3.6万次播放',
      videiListUpdatetime: '2022-08-07',
    }, {
      videiListImg: './images/newVideo/pic6-8.jpg',
      videiListLength: '01:46',
      videiListName: '【乌迪尔重做】技能与最新强化机制先驱介绍',
      videiListPlaytimes: '8532次播放',
      videiListUpdatetime: '2022-08-07',
    }]
  }]

  // actLi初始化
  function initVideoLi(videoLiIndex) {
    for (i = 0; i < videoArr[videoLiIndex].videoList.length; i++) {
      let videoListNode =
        `<li class="video-item">
      <div class="mask-img">
        <img class="video-cover" src="${videoArr[videoLiIndex].videoList[i].videiListImg}" alt="">
        <span class="btn-play-1">
          <i></i>
          <a href="#"></a>
        </span>
      </div>
      <a href="#" class="video-length">${videoArr[videoLiIndex].videoList[i].videiListLength}</a>
      <p class="name-video">
        <a href="#">${videoArr[videoLiIndex].videoList[i].videiListName}</a>
      </p>
      <a href="#" class="play-times">${videoArr[videoLiIndex].videoList[i].videiListPlaytimes}</a>
      <a href="#" class="update-time">${videoArr[videoLiIndex].videoList[i].videiListUpdatetime}</a>
    </li>`
      $('#flashVideoContainer').append(videoListNode)
    }
  }
  //part-top-tab 切换
  var videoLiIndex = 0
  var newVideoUl

  function showAnimate(el) {
    el.hover(function () {
      $(this).find('.btn-play-1').show().children('i').addClass('animatedRotate360')
      $(this).find('.name-video a').css('color', '#1da6ba')
    }, function () {
      $(this).find('.btn-play-1').hide().children('i').removeClass('animatedRotate360')
      $(this).find('.name-video a').css('color', '')
    })
  }
  initVideoLi(videoLiIndex)
  showAnimate($('#flashVideoContainer li'))
  $('.m-fresh-video .part-top-tab ul > li').hover(function () {
    $(this).addClass('select').siblings('li').removeClass('select')
    activeA($(this), "700", "#1da6ba")
    activeA($(this).siblings('li'), "", "")
    //清空
    if (videoLiIndex != $(this).index()) {
      $('#flashVideoContainer').empty()
      videoLiIndex = $(this).index()
      console.log(videoLiIndex);
      initVideoLi(videoLiIndex)
    }
  }, function () {
    showAnimate($(this).parents('.part-top-tab').next().find('li'))
  })




  /**
   * ********************************
   * ********************************
   * 内容二 热门专辑
   * */
  $('.m-hotprogram .part-top-tab ul > li').hover(function () {
    $(this).addClass('select').siblings('li').removeClass('select')
    activeA($(this), "700", "#1da6ba")
    activeA($(this).siblings('li'), "", "")

    //清空
    // if (actLiIndex != $(this).index()) {
    //   $('#actListContainer').empty()
    //   console.log(actLiIndex);
    //   actLiIndex = $(this).index()
    //   initActLi(actLiIndex)
    // }
  }, function () {

  })

  /**
   * ********************************
   * ********************************
   * 内容三 赛事中心
   * */
  $('.cont3 .part-top-tab ul > li').hover(function () {
    $(this).addClass('select').siblings('li').removeClass('select')
    activeA($(this), "700", "#1da6ba")
    activeA($(this).siblings('li'), "", "")
  }, function () {

  })

  /**
   * ********************************
   * ********************************
   * 内容四 英雄资料
   * */
  var heroArr = [{
    heroImg: './images/heros/Annie.png',
    name: '黑暗之女',
    occupation: ['mage']
  }, {
    heroImg: './images/heros/Olaf.png',
    name: '狂战士',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Galio.png',
    name: '正义巨像',
    occupation: ['tank', 'mage']
  }, {
    heroImg: './images/heros/TwistedFate.png',
    name: '卡牌大师',
    occupation: ['mage']
  }, {
    heroImg: './images/heros/XinZhao.png',
    name: '德邦总管',
    occupation: ['fighter', 'assassin']
  }, {
    heroImg: './images/heros/Urgot.png',
    name: '无畏战车',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Leblanc.png',
    name: '诡术妖姬',
    occupation: ['assassin', 'mage']
  }, {
    heroImg: './images/heros/Vladimir.png',
    name: '猩红收割者',
    occupation: ['mage']
  }, {
    heroImg: './images/heros/FiddleSticks.png',
    name: '远古恐惧',
    occupation: ['mage', 'support']
  }, {
    heroImg: './images/heros/Kayle.png',
    name: '正义天使',
    occupation: ['fighter', 'support']
  }, {
    heroImg: './images/heros/MasterYi.png',
    name: '无极剑圣',
    occupation: ['assassin', 'fighter']
  }, {
    heroImg: './images/heros/Alistar.png',
    name: '牛头酋长',
    occupation: ['tank', 'support']
  }, {
    heroImg: './images/heros/Ryze.png',
    name: '符文法师',
    occupation: ['mage', 'fighter']
  }, {
    heroImg: './images/heros/Sion.png',
    name: '亡灵战神',
    occupation: ['tank', 'fighter']
  }, {
    heroImg: './images/heros/Sivir.png',
    name: '战争女神',
    occupation: ['marksman']
  }, {
    heroImg: './images/heros/Soraka.png',
    name: '众星之子',
    occupation: ['support', 'mage']
  }, {
    heroImg: './images/heros/Teemo.png',
    name: '迅捷斥候',
    occupation: ['marksman', 'assassin']
  }, {
    heroImg: './images/heros/Tristana.png',
    name: '麦林炮手',
    occupation: ['marksman', 'assassin']
  }, {
    heroImg: './images/heros/Warwick.png',
    name: '祖安怒兽',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Nunu.png',
    name: '雪原双子',
    occupation: ['tank', 'fighter']
  }, {
    heroImg: './images/heros/MissFortune.png',
    name: '赏金猎人',
    occupation: ['marksman']
  }, {
    heroImg: './images/heros/Ashe.png',
    name: '寒冰射手',
    occupation: ['marksman', 'support']
  }, {
    heroImg: './images/heros/Tryndamere.png',
    name: '蛮族之王',
    occupation: ['fighter', 'assassin']
  }, {
    heroImg: './images/heros/Jax.png',
    name: '武器大师',
    occupation: ['fighter', 'assassin']
  }, {
    heroImg: './images/heros/Morgana.png"',
    name: '堕落天使',
    occupation: ['mage', 'support']
  }, {
    heroImg: './images/heros/Zilean.png',
    name: '时光守护者',
    occupation: ['support', 'mage']
  }, {
    heroImg: './images/heros/Singed.png',
    name: '炼金术士',
    occupation: ['tank', 'fighter']
  }, {
    heroImg: './images/heros/Evelynn.png',
    name: '痛苦之拥',
    occupation: ['assassin', 'mage']
  }, {
    heroImg: './images/heros/Twitch.png',
    name: '瘟疫之源',
    occupation: ['marksman', 'assassin']
  }, {
    heroImg: './images/heros/Karthus.png',
    name: '死亡颂唱者',
    occupation: ['mage']
  }, {
    heroImg: './images/heros/Chogath.png',
    name: '虚空恐惧',
    occupation: ['tank', 'mage']
  }, {
    heroImg: './images/heros/Amumu.png',
    name: '殇之木乃伊',
    occupation: ['tank', 'mage']
  }, {
    heroImg: './images/heros/Rammus.png',
    name: '披甲龙龟',
    occupation: ['tank', 'fighter']
  }, {
    heroImg: './images/heros/Anivia.png',
    name: '冰晶凤凰',
    occupation: ['mage', 'support']
  }, {
    heroImg: './images/heros/Shaco.png"',
    name: '恶魔小丑',
    occupation: ['assassin']
  }, {
    heroImg: './images/heros/DrMundo.png"',
    name: '祖安狂人',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Sona.png',
    name: '琴瑟仙女',
    occupation: ['support', 'mage']
  }, {
    heroImg: './images/heros/Kassadin.png',
    name: '虚空行者',
    occupation: ['assassin', 'mage']
  }, {
    heroImg: './images/heros/Irelia.png',
    name: '刀锋舞者',
    occupation: ['fighter', 'assassin']
  }, {
    heroImg: './images/heros/Janna.png',
    name: '风暴之怒',
    occupation: ['support', 'mage']
  }, {
    heroImg: './images/heros/Gangplank.png',
    name: '海洋之灾',
    occupation: ['fighter']
  }, {
    heroImg: './images/heros/Corki.png',
    name: '英勇投弹手',
    occupation: ['marksman']
  }, {
    heroImg: './images/heros/Karma.png',
    name: '天启者',
    occupation: ['mage', 'support']
  }, {
    heroImg: './images/heros/Taric.png',
    name: '瓦洛兰之盾',
    occupation: ['support', 'fighter']
  }, {
    heroImg: './images/heros/Veigar.png',
    name: '邪恶小法师',
    occupation: ['mage']
  }, {
    heroImg: './images/heros/Trundle.png',
    name: '巨魔之王',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Swain.png',
    name: '诺克萨斯统领',
    occupation: ['mage', 'fighter']
  }, {
    heroImg: './images/heros/Caitlyn.png"',
    name: '皮城女警',
    occupation: ['marksman']
  }, {
    heroImg: './images/heros/Blitzcrank.png',
    name: '蒸汽机器人',
    occupation: ['tank', 'fighter', 'support']
  }, {
    heroImg: './images/heros/Malphite.png',
    name: '熔岩巨兽',
    occupation: ['tank', 'fighter']
  }, {
    heroImg: './images/heros/Katarina.png"',
    name: '不祥之刃',
    occupation: ['assassin', 'mage']
  }, {
    heroImg: './images/heros/Nocturne.png',
    name: '永恒梦魇',
    occupation: ['assassin', 'fighter']
  }, {
    heroImg: './images/heros/Maokai.png',
    name: '扭曲树精',
    occupation: ['tank', 'mage']
  }, {
    heroImg: './images/heros/Renekton.png',
    name: '荒漠屠夫',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/JarvanIV.png',
    name: '德玛西亚皇子',
    occupation: ['tank', 'fighter']
  }, {
    heroImg: './images/heros/Elise.png"',
    name: '蜘蛛女皇',
    occupation: ['mage', 'fighter']
  }, {
    heroImg: './images/heros/Orianna.png',
    name: '发条魔灵',
    occupation: ['mage', 'support']
  }, {
    heroImg: './images/heros/MonkeyKing.png',
    name: '齐天大圣',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Brand.png',
    name: '复仇焰魂',
    occupation: ['mage']
  }, {
    heroImg: './images/heros/LeeSin.png',
    name: '盲僧',
    occupation: ['fighter', 'assassin']
  }, {
    heroImg: './images/heros/Vayne.png',
    name: '暗夜猎手',
    occupation: ['marksman', 'assassin']
  }, {
    heroImg: './images/heros/Rumble.png',
    name: '机械公敌',
    occupation: ['fighter', 'mage']
  }, {
    heroImg: './images/heros/Cassiopeia.png',
    name: '魔蛇之拥',
    occupation: ['mage']
  }, {
    heroImg: './images/heros/Skarner.png',
    name: '水晶先锋',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Heimerdinger.png',
    name: '大发明家',
    occupation: ['mage', 'support']
  }, {
    heroImg: './images/heros/Nasus.png',
    name: '沙漠死神',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Nidalee.png',
    name: '狂野女猎手',
    occupation: ['assassin', 'mage']
  }, {
    heroImg: './images/heros/Udyr.png',
    name: '兽灵行者',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Poppy.png',
    name: '圣锤之毅',
    occupation: ['tank', 'fighter']
  }, {
    heroImg: './images/heros/Gragas.png',
    name: '酒桶',
    occupation: ['fighter', 'mage']
  }, {
    heroImg: './images/heros/Pantheon.png',
    name: '不屈之枪',
    occupation: ['fighter', 'assassin']
  }, {
    heroImg: './images/heros/Ezreal.png',
    name: '探险家',
    occupation: ['marksman', 'mage']
  }, {
    heroImg: './images/heros/Mordekaiser.png',
    name: '铁铠冥魂',
    occupation: ['fighter']
  }, {
    heroImg: './images/heros/Yorick.png',
    name: '牧魂人',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Akali.png',
    name: '离群之刺',
    occupation: ['assassin']
  }, {
    heroImg: './images/heros/Kennen.png',
    name: '狂暴之心',
    occupation: ['mage', 'marksman']
  }, {
    heroImg: './images/heros/Garen.png',
    name: '德玛西亚之力',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Leona.png',
    name: '曙光女神',
    occupation: ['tank', 'support']
  }, {
    heroImg: './images/heros/Malzahar.png',
    name: '虚空先知',
    occupation: ['mage', 'assassin']
  }, {
    heroImg: './images/heros/Talon.png',
    name: '刀锋之影',
    occupation: ['assassin']
  }, {
    heroImg: './images/heros/Riven.png',
    name: '放逐之刃',
    occupation: ['fighter', 'assassin']
  }, {
    heroImg: './images/heros/KogMaw.png',
    name: '深渊巨口',
    occupation: ['marksman', 'mage']
  }, {
    heroImg: './images/heros/Shen.png',
    name: '暮光之眼',
    occupation: ['tank']
  }, {
    heroImg: './images/heros/Lux.png',
    name: '光辉女郎',
    occupation: ['mage', 'support']
  }, {
    heroImg: './images/heros/Xerath.png',
    name: '远古巫灵',
    occupation: ['mage']
  }, {
    heroImg: './images/heros/Shyvana.png',
    name: '龙血武姬',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Ahri.png"',
    name: '九尾妖狐',
    occupation: ['mage', 'assassin']
  }, {
    heroImg: './images/heros/Graves.png',
    name: '法外狂徒',
    occupation: ['marksman']
  }, {
    heroImg: './images/heros/Fizz.png',
    name: '潮汐海灵',
    occupation: ['assassin', 'fighter']
  }, {
    heroImg: './images/heros/Volibear.png',
    name: '不灭狂雷',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Rengar.png',
    name: '傲之追猎者',
    occupation: ['assassin', 'fighter']
  }, {
    heroImg: './images/heros/Varus.png',
    name: '惩戒之箭',
    occupation: ['marksman', 'mage']
  }, {
    heroImg: './images/heros/Nautilus.png',
    name: '深海泰坦',
    occupation: ['tank', 'support']
  }, {
    heroImg: './images/heros/Viktor.png',
    name: '机械先驱',
    occupation: ['mage']
  }, {
    heroImg: './images/heros/Sejuani.png',
    name: '北地之怒',
    occupation: ['tank', 'fighter']
  }, {
    heroImg: './images/heros/Fiora.png',
    name: '无双剑姬',
    occupation: ['fighter', 'assassin']
  }, {
    heroImg: './images/heros/Ziggs.png"',
    name: '爆破鬼才',
    occupation: ['mage']
  }, {
    heroImg: './images/heros/Lulu.png',
    name: '仙灵女巫',
    occupation: ['support', 'mage']
  }, {
    heroImg: './images/heros/Draven.png',
    name: '荣耀行刑官',
    occupation: ['marksman']
  }, {
    heroImg: './images/heros/Hecarim.png',
    name: '战争之影',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Khazix.png',
    name: '虚空掠夺者',
    occupation: ['assassin']
  }, {
    heroImg: './images/heros/Darius.png',
    name: '诺克萨斯之手',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Jayce.png',
    name: '未来守护者',
    occupation: ['fighter', 'marksman']
  }, {
    heroImg: './images/heros/Lissandra.png',
    name: '冰霜女巫',
    occupation: ['mage']
  }, {
    heroImg: './images/heros/Diana.png"',
    name: '皎月女神',
    occupation: ['fighter', 'mage']
  }, {
    heroImg: './images/heros/Quinn.png',
    name: '德玛西亚之翼',
    occupation: ['marksman', 'assassin']
  }, {
    heroImg: './images/heros/Syndra.png',
    name: '暗黑元首',
    occupation: ['mage']
  }, {
    heroImg: './images/heros/AurelionSol.png',
    name: '铸星龙王',
    occupation: ['mage']
  }, {
    heroImg: './images/heros/Kayn.png',
    name: '影流之镰',
    occupation: ['fighter', 'assassin']
  }, {
    heroImg: './images/heros/Zoe.png',
    name: '暮光星灵',
    occupation: ['mage', 'support']
  }, {
    heroImg: './images/heros/Zyra.png',
    name: '荆棘之兴',
    occupation: ['mage', 'support']
  }, {
    heroImg: './images/heros/Kaisa.png',
    name: '虚空之女',
    occupation: ['marksman']
  }, {
    heroImg: './images/heros/Seraphine.png',
    name: '星籁歌姬',
    occupation: ['mage', 'support']
  }, {
    heroImg: './images/heros/Gnar.png',
    name: '迷失之牙',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Zac.png',
    name: '生化魔人',
    occupation: ['tank', 'fighter']
  }, {
    heroImg: './images/heros/Yasuo.png',
    name: '疾风剑豪',
    occupation: ['fighter', 'assassin']
  }, {
    heroImg: './images/heros/Velkoz.png',
    name: '虚空之眼',
    occupation: ['mage']
  }, {
    heroImg: './images/heros/Taliyah.png',
    name: '岩雀',
    occupation: ['mage', 'support']
  }, {
    heroImg: './images/heros/Camille.png',
    name: '青钢影',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Akshan.png',
    name: '影哨',
    occupation: ['marksman', 'assassin']
  }, {
    heroImg: './images/heros/Belveth.png',
    name: '虚空女皇',
    occupation: ['fighter']
  }, {
    heroImg: './images/heros/Braum.png',
    name: '弗雷尔卓德之心',
    occupation: ['support', 'tank']
  }, {
    heroImg: './images/heros/Jhin.png',
    name: '戏命师',
    occupation: ['marksman', 'mage']
  }, {
    heroImg: './images/heros/Kindred.png',
    name: '永猎双子',
    occupation: ['marksman']
  }, {
    heroImg: './images/heros/Zeri.png',
    name: '祖安花火',
    occupation: ['marksman']
  }, {
    heroImg: './images/heros/Jinx.png',
    name: '暴走萝莉',
    occupation: ['marksman']
  }, {
    heroImg: './images/heros/TahmKench.png',
    name: '河流之王',
    occupation: ['support', 'tank']
  }, {
    heroImg: './images/heros/Viego.png',
    name: '破败之王',
    occupation: ['assassin', 'fighter']
  }, {
    heroImg: './images/heros/Senna.png',
    name: '涤魂圣枪',
    occupation: ['marksman', 'support']
  }, {
    heroImg: './images/heros/Lucian.png',
    name: '圣枪游侠',
    occupation: ['marksman']
  }, {
    heroImg: './images/heros/Zed.png',
    name: '影流之主',
    occupation: ['assassin']
  }, {
    heroImg: './images/heros/Kled.png"',
    name: '暴怒骑士',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Ekko.png',
    name: '时间刺客',
    occupation: ['assassin', 'fighter']
  }, {
    heroImg: './images/heros/Qiyana.png',
    name: '元素女皇',
    occupation: ['assassin', 'fighter']
  }, {
    heroImg: './images/heros/Vi.png',
    name: '皮城执法官',
    occupation: ['fighter', 'assassin']
  }, {
    heroImg: './images/heros/Aatrox.png',
    name: '暗裔剑魔',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Nami.png',
    name: '唤潮鲛姬',
    occupation: ['support', 'mage']
  }, {
    heroImg: './images/heros/Azir.png',
    name: '沙漠皇帝',
    occupation: ['mage', 'marksman']
  }, {
    heroImg: './images/heros/Yuumi.png',
    name: '魔法猫咪',
    occupation: ['support', 'mage']
  }, {
    heroImg: './images/heros/Samira.png',
    name: '沙漠玫瑰',
    occupation: ['marksman']
  }, {
    heroImg: './images/heros/Thresh.png',
    name: '魂锁典狱长',
    occupation: ['support', 'fighter']
  }, {
    heroImg: './images/heros/Illaoi.png',
    name: '海兽祭司',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/RekSai.png',
    name: '虚空遁地兽',
    occupation: ['fighter']
  }, {
    heroImg: './images/heros/Ivern.png',
    name: '翠神',
    occupation: ['support', 'mage']
  }, {
    heroImg: './images/heros/Kalista.png',
    name: '复仇之矛',
    occupation: ['marksman']
  }, {
    heroImg: './images/heros/Bard.png',
    name: '星界游神',
    occupation: ['support', 'mage']
  }, {
    heroImg: './images/heros/Rakan.png',
    name: '幻翎',
    occupation: ['support']
  }, {
    heroImg: './images/heros/Xayah.png',
    name: '逆羽',
    occupation: ['marksman']
  }, {
    heroImg: './images/heros/Ornn.png',
    name: '山隐之焰',
    occupation: ['tank', 'fighter']
  }, {
    heroImg: './images/heros/Sylas.png',
    name: '解脱者',
    occupation: ['mage', 'assassin']
  }, {
    heroImg: './images/heros/Neeko.png',
    name: '万花通灵',
    occupation: ['mage', 'support']
  }, {
    heroImg: './images/heros/Aphelios.png',
    name: '残月之肃',
    occupation: ['marksman']
  }, {
    heroImg: './images/heros/Rell.png',
    name: '镕铁少女',
    occupation: ['tank', 'support']
  }, {
    heroImg: './images/heros/Pyke.png"',
    name: '血港鬼影',
    occupation: ['support', 'assassin']
  }, {
    heroImg: './images/heros/Vex.png',
    name: '愁云使者',
    occupation: ['mage']
  }, {
    heroImg: './images/heros/Yone.png',
    name: '封魔剑魂',
    occupation: ['assassin', 'fighter']
  }, {
    heroImg: './images/heros/Sett.png',
    name: '腕豪',
    occupation: ['fighter', 'tank']
  }, {
    heroImg: './images/heros/Lillia.png',
    name: '含羞蓓蕾',
    occupation: ['fighter', 'mage']
  }, {
    heroImg: './images/heros/Gwen.png',
    name: '灵罗娃娃',
    occupation: ['fighter', 'assassin']
  }, {
    heroImg: './images/heros/Renata.png"',
    name: '炼金男爵',
    occupation: ['support', 'mage']
  }, {
    heroImg: './images/heros/Nilah.png"',
    name: '不羁之悦',
    occupation: ['fighter', 'assassin']
  }]

  function chooseHero(arr) {
    for (i = 0; i < arr.length; i++) {
      var heroLi = `
        <li class="champion-item">
          <img src="${arr[i].heroImg}" alt="">
          <i class="hover-icon"></i>
          <p>${arr[i].name}</p>
          <a href="#" class="herf-mask"></a>
        </li>`
      $('#heroList').append(heroLi)
    }
  }
  $('.cont4 .part-top-tab li').hover(function () {
    $(this).addClass('select1')
    activeA($(this), "700", "#1da6ba")
    activeA($(this).siblings('li'), "", "")
  }, function () {
    $(this).removeClass('select1')
  })

  chooseHero(heroArr)
  $('.cont4 .part-top-tab li').each(function (index, item) {
    $(item).on('click', function () {
      $(this).addClass('select').siblings().removeClass('select')
      //获取职业名称
      var _occupation = $(item).attr('id')
      // 清空内容
      $('#heroList').empty()
      if (_occupation != 'allHero') {
        //匹配职业 find查询 返回新数组
        var newArr = heroArr.filter((item) => {
          return item.occupation.some(newitem => newitem == _occupation)
        })
        chooseHero(newArr)
      } else {
        chooseHero(heroArr)
      }
    })
  })

  //滚动条
  //移入
  console.log($('.m-champion-list-wrapper').offset().top);
  console.log($('.m-champion-list-wrapper').position());


  $('.cont4 .m-champion-list-container').mouseover(function (e) {
    $(this).find('.scrollbar').css({
      'width': '10px'
    })
    $(this).mousedown(function (e) {
      $(this).mousemove(function (e) {
        $('.m-champion-list-wrapper').css({
          'transform': 'translateY(' + e.pageY + ')',
        })
      })
    })
  })
  //移除
  $('.cont4 .m-champion-list-container').mouseout(function (e) {
    $(this).find('.scrollbar').css({
      'width': ''
    })
  })
  $('.cont4 .m-champion-list-container').scroll(function () {
    var num = 0
    num += 10
    $('.m-champion-list-wrapper').css({
      'transform': 'translateY(' + num + 'px)',
    })
  })

  /**
   * ********************************
   * ********************************
   * 内容五 创作馆
   * */
  var fanartArr = [{
    fanartImg: './images/creative_pavilion/img1.jfif',
    fanartName: '画了一只阿狸头像',
    autherName: '白鯊糖',
    zan: '488'
  }, {
    fanartImg: './images/creative_pavilion/img2.jfif',
    fanartName: 'LOL 水墨风',
    autherName: '蛛蜘侠',
    zan: '151'
  }, {
    fanartImg: './images/creative_pavilion/img3.jfif',
    fanartName: '格温',
    autherName: '我满眼浩瀚鑫何',
    zan: '109'
  }, {
    fanartImg: './images/creative_pavilion/img4.jfif',
    fanartName: '黑夜就是我的面纱。',
    autherName: '赛娜King',
    zan: '165'
  }, {
    fanartImg: './images/creative_pavilion/img5.jfif',
    fanartName: 'Jinx&Ekko|金克丝&艾克',
    autherName: '□□疯一样的萝莉',
    zan: '234'
  }, {
    fanartImg: './images/creative_pavilion/img6.jfif',
    fanartName: 'ZED',
    autherName: '□ ',
    zan: '135'
  }, {
    fanartImg: './images/creative_pavilion/img7.jfif',
    fanartName: '猩红之月  辛德拉',
    autherName: '□ ',
    zan: '150'
  }, {
    fanartImg: './images/creative_pavilion/img8.jfif',
    fanartName: '灵魂莲华-阿狸',
    autherName: 'Gaige丶蒂娜',
    zan: '194'
  }]

  for (i = 0; i < fanartArr.length; i++) {
    var fanartList = `
      <li>
        <a href="#">
          <img src="${fanartArr[i].fanartImg}" alt="" class="fanart-img" id="fanart0">
        </a>
        <div class="innerhover-bottom">
          <h4 class="p1">
            <a href="#">${fanartArr[i].fanartName}</a>
          </h4>
          <p class="p2">
            <a href="#" class="a1">
              <img src="./images/photo.jfif" alt="">
              ${fanartArr[i].autherName}
            </a>
            <a href="#" class="a2">
              <i class="icon-666"></i>
              <span class="number">${fanartArr[i].zan}</span>
              <span class="tip">+1</span>
            </a>
          </p>
        </div>
      </li>`
    $('#fanartContainer').append(fanartList)
  }

  /**
   * ********************************
   * ********************************
   * 扫码下载
   * */ 
  var sidebarLiLen = $('.sidebar .rightnav-bar-li').length - 1
  var siderbarLi
  var toTop
  $('.sidebar .rightnav-bar-li:lt(' + sidebarLiLen + ')').on('click', function () {
    $(this).addClass('selected').siblings().removeClass('selected')
    siderbarLi = $(this).index()
    console.log(siderbarLi);
    if (siderbarLi == 0) {
      toTop = $('.container_cont>div:eq(' + siderbarLi + ') .m-hotactivity').offset().top
    } else {
      toTop = $('.container_cont>div:eq(' + siderbarLi + ')').offset().top
    }

    $('html,body').stop().animate({
      scrollTop: toTop + 'px'
    }, 500)
  })
  //置顶
  $('#toTop').click(function () {
    $('html,body').stop().animate({
      scrollTop: '0px'
    }, 500)
  })

})