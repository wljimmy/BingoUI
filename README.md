# BingoUI
Bingo Studio H5 Admin User Interface (JS/JQ/H5/CSS3)

JQuery3.0 required
##规划

1. 主要结构
    1. 文件结构
        1. admin.html
            - h5文件，用于构建页面
        2. BUI.css
            - BingoUI的样式文件，css3
        3. BUI.js
            - BingoUI的脚本文件，用于处理相应和常用功能
    2. 页面结构 
        1. 固定预制组件
            - 读取蒙版 `#BUI_LoadingMask`
            - 登录蒙版 `#BUI_LoginMask`
                - 登录框 `#BUI_LoginBox`
                    - 标题框 `#BUI_LoginBox_Title`
                    - 用户名 `#BUI_LoginBox_UserName`
                    - 密码 `#BUI_LoginBox_PWD`
                    - 提示框 `#BUI_LoginBox_MSG`
            - 主要内容容器 `#BUI_MainContainer`
                - 顶部标题栏`#BUI_Banner`
                    - logo框`#BUI_Banner_LogoBox`
                    - 状态提示栏`#BUI_Banner_SysStatusBar`
                    - 用户状态栏``
                - 菜单栏`#BUI_Menu`
                    - 菜单栏控制按钮`#BUI_Menu_Control`
                    - 菜单列表`#BUI_Menu_List`
                        - 首级菜单`.BUI_Menu_BaseMenu`
                            - 内容`ul+li`
                                - 子菜单`.BUI_Menu_SubMenu`
                - 内容区`#BUI_Content`
                    - 容器`.BUI_Content_Container`
                    - 表格`.BUI_Content_Table`
                    - 输入组件 Input
                        - 数字输入 Number
                        - 文本输入 text
                        - 密码输入 Password
                        - 选择框 Select
                        - 单选框 Check-box
                        - 复选框 Radio
                        - 按钮 Button
                            - 提交 Submit/OK
                            - 清除 Clear
                            - 重置 Reset
                            - 普通 Button
             
        2. 活动组件
            - 蒙版
            - 警告窗口
            - 信息窗口
2. 色彩及式样
    1. 基本颜色
        - 基础色:
            `#DD6C1D`
            `#A5663A`
            `#8F4109`
            `#EE9353`
            `#EEAB7C`
        - 辅助色:
            `#DD981D`
            `#A57F3A`
            `#8F6009`
            `#EEB653`
            `#EEC57C`
        - 辅助色:
            `#1F4A92`
            `#2D456E`
            `#0A2A5F`
            `#527EC9`
            `#7292C9`
        - 互补色:
            `#128A7A`
            `#24685F`
            `#065A4E`
            `#44C5B3`
            `#67C5B8`
3. 互动功能
4. 测试用样板