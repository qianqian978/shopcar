// var css = require("../css/index.css");
import css from '../css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
// import Toast from './components/Toast';

var slide = {
    init: function(){
        var swiper = new Swiper('.book-slider', {
            pagination: {
                el: '.swiper-pagination'
            },
            loop: true,
            autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: false
            }
        });
    }
}

$(function(){
    slide.init();
});

window.pageData={
    bookInfo:{
        carNum:1,
        bookName:"时运变迁",
        bookPrice:"20.00",
        coverImg:"src/images/cover/cover01.png",
    }
}

var BookBox = React.createClass({
    getInitialState:function(){
        var data=JSON.parse(localStorage.getItem('cps_item'))||"";
        return {
            carInfo:{
                carNum: data.carNum,
                bookName: data.bookName,
                bookPrice: data.bookPrice,
                coverImg: data.coverImg, 
            },    
            showList: false,                  
            bookTab: [
                {
                    tabId: 0,
                    tabName: '电子书',
                    price: '￥20.00'
                },
                {
                    tabId: 1,
                    tabName: '精装书',
                    price: '￥50.00'
                }
            ],
            currentIndex: 0,
            toast:{
                show: false,
                msg: 'success',
                last: 3000
            },
        }
    },
    changePrice:function(id){
        this.setState({
            currentIndex: id,
            bookPrice: this.state.bookTab[id].price
        })
    },
    bookInfo:function(){
        return(
            <section className="book-info">
                <div className="book-name">时运变迁</div>
                <div className="book-author">[美]保罗·沃尔克</div>
                <div className="book-type">
                    <a href="javascript:;" onClick={this.changePrice.bind(null,0)} className={this.state.currentIndex===0?"book-typeitem type-active":"book-typeitem"}>
                        {this.state.bookTab[0].tabName}
                    </a>
                    <a href="javascript:;" onClick={this.changePrice.bind(null,1)} className={this.state.currentIndex===1?"book-typeitem type-active":"book-typeitem"}>
                        {this.state.bookTab[1].tabName}
                    </a>
                </div>
                <div className="book-price">
                    {this.state.bookPrice}
                </div>
            </section>
        )
    },
    bookSection:function(){
        return(
            <div><section className="book-section">
                <div className="main-title">图书简介</div>
                <div className="main-text" data-long="美国战后经济地位的奠基人之一“最伟大的联储主席”沃尔克，和日本前大藏省国际金融局长行天丰雄，携手回顾世界货币体系的演变历程。曾经的艰难抉择，误判和教训，各自对未来做出的判断和展望；这些无疑是当下中国读者最佳的向导，而且无可替代美国战后经济地位的奠基人之一“最伟大的联储主席”沃尔克，和日本前大藏省国际金融局长行天丰雄，携手回顾世界货币体系的演变历程。曾经的艰难抉择，误判和教训，各自对未来做出的判断和展望；这些无疑是当下中国读者最佳的向导，而且无可替代" data-short="美国战后经济地位的奠基人之一“最伟大的联储主席”沃尔克，和日本前大藏省国际金融局长行天丰雄，携手回顾世界货币体系的演变历程。曾经的艰难抉择，误判和教训，各自对未来做出的判断和展望；这些无疑是当下中国读者最佳的向导，而且无可替代...">
                    <span className="innerText">美国战后经济地位的奠基人之一“最伟大的联储主席”沃尔克，和日本前大藏省国际金融局长行天丰雄，携手回顾世界货币体系的演变历程。曾经的艰难抉择，误判和教训，各自对未来做出的判断和展望；这些无疑是当下中国读者最佳的向导，而且无可替代...</span><a href="javascript:;" className="text-more">展开</a>
                </div>
            </section>
            <section className="book-section">
                <div className="main-title">媒体推荐</div>
                <div className="main-text" data-long="与旧版相比，新版增加了沃尔克对08年世界金融危机的解读，以及行天丰雄根据日元发展历史，为中国和人民币的走向所提出的诚恳建议，尤其具有参考与旧版相比，新版增加了沃尔克对08年世界金融危机的解读，以及行天丰雄根据日元发展历史，为中国和人民币的走向所提出的诚恳建议，尤其具有参考" data-short="与旧版相比，新版增加了沃尔克对08年世界金融危机的解读，以及行天丰雄根据日元发展历史，为中国和人民币的走向所提出的诚恳建议，尤其具有参考...">
                    <span className="innerText">与旧版相比，新版增加了沃尔克对08年世界金融危机的解读，以及行天丰雄根据日元发展历史，为中国和人民币的走向所提出的诚恳建议，尤其具有参考...</span><a href="javascript:;" className="text-more">展开</a>
                </div>
            </section></div>
        )
    },
    toastFun:function(show,msg,last){
        var self=this;
        clearInterval(self.timmer);  
        this.setState({
            toast:{
                show: show,
                msg: msg,
                last: last
            }
        })
        self.timmer=setTimeout(function(){
            self.setState({
                toast:{
                    show:false,
                    msg: msg,
                    last: last
                }
            });
        }.bind(this),self.state.toast.last);
    },
    addShelf:function(){     
        this.toastFun(true,'加入书架成功',5000);   
    },
    addCar:function(){
        var self = this;
        if(localStorage.getItem('cps_item')!=null||localStorage.getItem('cps_item')!=undefined){           
            self.toastFun(true,'已存在购物车',5000);
        }else{
            self.setState({
                carInfo:{
                    carNum: pageData.bookInfo.carNum,
                    bookName: pageData.bookInfo.bookName,
                    bookPrice: pageData.bookInfo.bookPrice,
                    coverImg: pageData.bookInfo.coverImg,
                },   
            })
            localStorage.setItem('cps_item',JSON.stringify(pageData.bookInfo));
            self.toastFun(true,'加入购物车成功',5000); 
        }  
    },
    delCar:function(){
        this.setState({
            carInfo:{
                carNum: 0,
                bookName: '',
                bookPrice: '',
                coverImg: '',
            },   
        })
        localStorage.clear('cps_item');        
    },
    showList:function(){
        this.setState({
            showList: true
        })
    },
    hideList:function(){
        this.setState({
            showList: false
        })
    },
    bookBtnline:function(){
        return(
          <div><section className="book-btnline">
            <div className="book-car">
                <p className="book-car-wrap" onClick={this.showList}>
                    <img src="src/images/source/title_icon_shoppingcart.png" className="book-car-img" alt="购物车" />
                    {this.state.carInfo.carNum?<span className="book-car-num">{this.state.carInfo.carNum}</span>:null}
                </p>
                <p className="book-btn-middle">
                    <a href="javascript:;" className="add-shelf" onClick={this.addShelf}>加入书架</a>
                </p>
                <a href="javaddsheascript:;" className="add-car j_addcar" onClick={this.addCar}>加购物车</a>
            </div>
            {this.state.toast.show?<div className="cmr-toast">{this.state.toast.msg}</div>:null}          
          </section>
          {this.state.showList?<section className="car-list">
                <div className="car-list-mask" onClick={this.hideList}></div>
                <ul className="car-list-wrap">
                {this.state.carInfo.carNum?
                    <li className="car-item">
                        <div className="item-left">
                            <img src={this.state.carInfo.coverImg} alt="" />
                        </div>
                        <div className="item-middle">
                            <p className="item-name">{this.state.carInfo.bookName}</p>
                            <p className="item-price">
                                <span>￥</span>{this.state.carInfo.bookPrice}
                            </p>
                        </div>
                        <div className="item-right">
                            <a href="javascript:;" className="item-del" onClick={this.delCar}>删除</a>
                        </div>
                        <div className="item-close"></div>
                    </li>:
                    <li className="car-item kong">您的购物车空空如也<div className="item-close"></div></li>
                }
                    
                </ul>
            </section>:null}</div>
        )
    },
    render:function(){	
        return ( 
            <div>
                {this.bookInfo()}
                {this.bookSection()}
                {this.bookBtnline()}  
            </div>
        )
    }
});

ReactDOM.render( 
    <BookBox/>, 
    document.getElementById('book')
)
