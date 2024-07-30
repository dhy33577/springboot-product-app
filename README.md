# 商品管理系统帮助文档

## 项目概述

该项目是一个简单的商品管理系统，允许用户添加、查看、编辑和删除商品信息。前端使用 HTML、CSS 和 JavaScript 构建，后端使用 Spring Boot 和 Java 构建，数据库使用 MySQL 存储商品数据。

## 主要使用技术

- **前端**：
  - HTML：构建页面结构。
  - CSS：用于页面的样式设计，包含深色配色和动画效果。
  - JavaScript：实现前端逻辑，包括与后端 API 的交互。
- **后端**：
  - Spring Boot：用于构建 RESTful API 服务。
  - Java：后端的主要编程语言。
  - MySQL：数据库用于存储商品数据。
- **构建工具**：
  - Maven：用于管理项目依赖和构建项目。

## 实现功能

### 1. 添加商品

用户可以通过填写分类、型号、价格、库存和描述信息，然后点击“添加商品”按钮，将商品信息添加到数据库中。

### 2. 查看商品

页面下方的表格会显示所有商品的信息，包括 ID、分类、型号、价格、库存和描述。每次页面加载时，都会从后端获取最新的商品数据并显示在表格中。

### 3. 编辑商品

在表格中，每个商品行都有一个“编辑”按钮。点击该按钮后，商品信息会填充到上方的输入框中，用户可以修改信息并点击“保存修改”按钮保存更改。

### 4. 删除商品

在表格中，每个商品行都有一个“删除”按钮。点击该按钮后，相应的商品会从数据库中删除，并且表格会更新以反映这一变化。

## 演示截图

[![](C:\Users\DHY\Desktop\屏幕截图 2024-07-31 014635.png)](https://github.com/dhy33577/springboot-product-app/blob/main/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202024-07-31%20014635.png)
