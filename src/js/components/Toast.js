/**
 * React toast插件
 *
 **@author chenpansong
 *
 **@props
    -data : {Object} (必选属性前面带＊，非必选项目请备注默认值)
       -show : {Boolean} | false |是否自动展示
       -*msg : {String} | "提交成功" |弹窗提示内容,默认为空
       -last: {Number} | 3000 |单位毫秒，默认3000
 *
 **@return
   -method {Function} (对外暴露的方法)
       -show (msg,last) | 让toast展示出来
 *
 **@example
   <Toast data={{show:false,msg:"提交成功",last:3000}} />
**/

require('./toast.scss');
import React from 'react';
import ReactDOM from 'react-dom';

var Toast = React.createClass({
    defaultlast:3000,
	getInitialState: function() {
        var data=this.props.data?this.props.data:{};
        return {
            last:data.last||this.defaultlast,
            show:data.show?"show":"",
            msg:data.msg?data.msg:""
        };
	},
    /**
    @ method  show | 让toast展示出来
    @ *param {String} | msg | toast提示内容
    @ param {String} | last | toast持续的时间
    **/
    show:function(msg,last){
        var self=this;
        last=last||self.defaultlast;
        clearInterval(self.timmer);
        self.setState({show:"show",msg:msg,last:last});
        self.hide();
    },
    hide:function(){
        var self=this;
        self.timmer=setTimeout(function(){
            self.setState({show:false});
        }.bind(this),self.state.last);
    },
    componentDidMount:function(){
        this.hide();
    },
	render: function() {
		return (
            <div key="cmr-toast" className={"cmr-toast "+(this.state.show?"show":"")}>
				{this.state.msg}
			</div>
		);
	}

});

module.exports = Toast;
