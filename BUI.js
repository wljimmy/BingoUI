/*
 * Copyright (c) 2020. By Bingo Studio
 * Author: Lin Wang (wljimmy@hotmail.com)
 */

//初始化


let BUI = {
    //设立BUI对象，控制BingoUI界面相关控件的基础自动响应
    sys: {
        //系统级及通用函数
        init() {
        },
    }
};


function test() {
    $('#BUI_LoadingMask').hide();
    $('#BUI_LoginMask').hide();
    $('#BUI_MainContainer').hide();
}

$(document).ready(function () {
    BUI.sys.init();
    test();
});