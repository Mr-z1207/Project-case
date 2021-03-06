require('pages/common/footer')
require('pages/common/logo')

require('./index.css')

var _util = require('util')
var api = require('api')

var formErr = {
    hide: function() {
        $('.error-item')
            .hide()
            .find('.error-msg')
            .text('')
    },
    show: function(msg) {
        $('.error-item')
            .show()
            .find('.error-msg')
            .text(msg)
    }
}


var page = {
	init:function() {
		this.bindEvent()
	},
	bindEvent:function() {
		// console.log('在这里绑定事件')
		var _this = this
		$('[name="username"]').on('blur',function(){
			var username = $(this).val()
			if (!_util.validate(username, 'require')) {
                return;
            }
            if (!_util.validate(username, 'username')) {
                return;
            }
			api.checkUsername({
                data:{
                    username:username,
                },
                success:function(){
                    formErr.hide()
                },
                error:function(msg){
                    formErr.show(msg)
                }
			})
		})
		$('#btn-submit').on('click',function() {
			_this.submit()
		})
		$('input').on('keyup',function(ev) {
			if (ev.keyCode == 13) {
				_this.submit()
			}
		})
	},
	submit:function() {
		// 1、获取数据
		var formData = {
			username:$.trim($('[name="username"]').val()),
			password:$.trim($('[name="password"]').val()),
			repassword: $.trim($('[name="repassword"]').val()),
            phone: $.trim($('[name="phone"]').val()),
            email: $.trim($('[name="email"]').val()),
		}
		// 2、验证数据
		var validateResult = this.validate(formData)
		if (validateResult.state) {
			formErr.hide()
			// 3、提交数据
			api.register({
				data:formData,
				success:(result)=>{
					console.log(result)
				},
				error:(err)=>{
					formErr.show(err)
				}
			})
		}else{
			formErr.show(validateResult.msg)
		}
	},
	validate:function(formData) {
		var result = {
			state:false,
			msg:''
		}
		if (!_util.validate(formData.username, 'require')) {
            result.msg = "用户名不能为空"
            return result
        }
        //用户名格式验证
        if (!_util.validate(formData.username, 'username')) {
            result.msg = "用户名格式不正确"
            return result
        }
        //密码不能为空
        if (!_util.validate(formData.password, 'require')) {
            result.msg = "密码不能为空"
            return result
        }
        //密码格式验证
        if (!_util.validate(formData.password, 'password')) {
            result.msg = "密码格式不正确"
            return result
        }
        //两次密码不一致
        if(formData.password != formData.repassword){
            result.msg = "两次密码不一致"
            return result            
        }
        //电话号码不能为空
        if (!_util.validate(formData.phone, 'require')) {
            result.msg = "电话号码不能为空"
            return result
        }
        //电话号码格式验证
        if (!_util.validate(formData.phone, 'phone')) {
            result.msg = "电话号码格式不正确"
            return result
        }
        //email不能为空
        if (!_util.validate(formData.email, 'require')) {
            result.msg = "email不能为空"
            return result
        }
        //电话号码格式验证
        if (!_util.validate(formData.email, 'email')) {
            result.msg = "email格式不正确"
            return result
        }
        result.state = true
		return result
	},
}

$(function() {
	page.init() //调用
})