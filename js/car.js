$(function(){
    
    // 1.全选/全不选 功能
    // 就是把全选按钮（checkall）的状态赋值给三个小按钮的（j-checkbox）和另一个全选按钮
    // 事件使用change()
    $('.checkall').change(function(){
        $('.j-checkbox,.checkall').prop('checked',$(this).prop('checked'))
        console.log($(this).prop('checked'));
    })
    
    // 三个小按钮的选中状态如果是true，两个全选按钮就变成选中状态
    $('.j-checkbox').change(function(){
        if($('.j-checkbox:checked').length ===  $('.j-checkbox').length){
            $('.checkall').prop('checked',true)
        }else{
            $('.checkall').prop('checked',false)
        }
        console.log($('.j-checkbox:checked').length);
        // 背景
        if($(this).prop('checked')){
            $(this).parents('.cart-item').addClass('check-cart-item')
        }else{
            $(this).parents('.cart-item').removeClass('check-cart-item')
        }
    })

    // 增减功能
    $('.increment').click(function(){
        var n  = $(this).siblings('.itxt').val()
        n++;
        $(this).siblings('.itxt').val(n)
    })
    
    $('.decrement').click(function(){
        var n  = $(this).siblings('.itxt').val()
        if(n == 1){
            return false;   //代码里面碰到return false 后面的代码不再执行
        }
        n--;
        $(this).siblings('.itxt').val(n)
    })

    // 商品小计功能
    $('.increment,.decrement').click(function(){
        // 所有的获取从this开始
        // substr("1")   截取字符串，从第1个字符后面截取
        var price = $(this).parents('.p-num').siblings('.p-price').text()
        // console.log($(this).parents());
        price = price.substr(1)
        // console.log(price);
        var num = $(this).siblings('.itxt').val()
        // console.log(num);
        var sum = price * num;
        sum = sum.toFixed(2)    //toFixed(2)    小数点后保留两位
        $(this).parents('.p-num').siblings('.p-sum').text('￥'+sum)
        getSum()
        
    })
    //商品小计功能之直接修改
    $('.itxt').change(function(){
        var price = $(this).parents('.p-num').siblings('.p-price').text()
        price = price.substr(1)
        
        var num = $(this).val()
        
        var sum = price * num;
        sum = sum.toFixed(2)    //toFixed(2)    小数点后保留两位
        $(this).parents('.p-num').siblings('.p-sum').text('￥'+sum)
        getSum()
    })
    getSum()
    // 总计和总额功能
    function getSum(){
        var count = 0;  //总件数
        var money = 0;  //总额

        $('.itxt').each(function(i,ele){
            count += parseInt($(ele).val())
        })
        $('.amount-sum em').text(count)

        $('.p-sum').each(function(i,ele){
            money += parseFloat($(ele).html().substr(1))
           
        })
        money = money.toFixed(2)
        console.log(money);
        $('.price-sum em').html('￥'+money)
    }

    // 删除商品模块

    // 商品后面的删除按钮
    $('.p-action a').click(function(){
        $(this).parents('.cart-item').remove()
        getSum()
    })
    // 删除选中的模块
    $('.remove-batch').click(function(){
        $('.j-checkbox:checked').parents('.cart-item').remove()
        getSum()
    })
    // 清空购物车
    $('.clear-all').click(function(){
        $('.cart-item').remove()
        getSum()
    })

    // 选中添加背景功能
    $('.checkall').change(function(){
        $('.j-checkbox,.checkall').prop('checked',$(this).prop('checked'))
        if($(this).prop('checked')){
            $('.cart-item').addClass('check-cart-item')
        }else{
            $('.cart-item').removeClass('check-cart-item')
        }
    })
})