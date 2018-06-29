# React实例 加入购物车

![image](https://github.com/qianqian978/shopcar/blob/master/src/images/carpic.png)

## Getting Started

### run运行

下载后进入目录npm install；
命令下 gulp server运行
浏览器输入:http://localhost:5000/

### Code

- **toast弹框提示**

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
    }


- **加入购物车并写入缓存**

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
    }

- **删除购物车**

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
    }
