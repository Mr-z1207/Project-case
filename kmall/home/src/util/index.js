module.exports = {
    validate:function(value,type){
        //非空验证
        if(type == 'require'){
            return !!value
        }
        //用户名格式验证
        if(type == 'username'){
            return /^[a-z][a-z0-9_]{2,5}$/.test(value)
        }
        //密码格式验证
        if(type == 'password'){
            return /^\w{3,6}$/.test(value)
        }
        //电话号码格式验证
        if(type == 'phone'){
            return /^1[3589]\d{9}$/.test(value)
        }
        //邮箱格式验证
        if(type == 'email'){
            return /^\w+@\w+\.\w{2,6}$/.test(value)
        }                          
    },
    goLogin:function(){
        window.location.href = '/user-login.html?redirect='+encodeURIComponent(window.location.href)
    },
    showErrorMsg:function(msg){
        alert(msg)
    },
    showSuccessMsg:function(msg){
        alert(msg)
    },
}