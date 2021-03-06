require('./index.css')

var api = require('api')
var _util = require('util')

var page ={
	init:function() {
		this.loadUsername()
		this.bindEvent()
		return this
	},
	loadUsername:function(){
		api.getUsername({
            success:function(data){
                $('.not-login').hide()
                $('.login').show()
                .find('.username')
                .text(data.username)
            }
		})
	},
    bindEvent:function(){
        $('#logout').on('click',function(){
            api.logout({
                success:function(){
                    window.location.reload()
                },
                error:function(msg){
                    _util.showErrorMsg(msg)
                }
            })
        })
    },
}

module.exports = page.init()