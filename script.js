// 严肃文学研究小组 - 基础交互功能

document.addEventListener('DOMContentLoaded', function() {
    // 移除搜索按钮的alert提示，保留基本功能
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault(); // 防止默认行为
            // 可以在这里添加实际的搜索功能
            console.log('搜索按钮被点击');
        });
    }
    
    // 移除书籍卡片点击的alert提示
    const bookCards = document.querySelectorAll('.book-card');
    bookCards.forEach(card => {
        // 可以保留点击效果但不显示alert
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            // 这里可以添加其他功能，如跳转到书籍详情页
            console.log('书籍卡片被点击');
        });
    });
    
    // 移除入门指南书单项点击的alert提示
    const bookItems = document.querySelectorAll('.book-item');
    bookItems.forEach(item => {
        // 可以保留点击效果但不显示alert
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            // 这里可以添加其他功能，如展开书籍详情
            console.log('书单项被点击');
        });
    });
    
    // 为行动按钮添加点击效果
    const actionBtns = document.querySelectorAll('.action-btn');
    actionBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // 如果是外部链接，不阻止默认行为
            if (this.getAttribute('href')) {
                return;
            }
            e.preventDefault();
            // 这里可以添加其他功能
            console.log('行动按钮被点击');
        });
    });
    
    // 添加简单的滚动效果
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const elements = document.querySelectorAll('.book-card, .guide-section');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    });
    
    // 初始化元素样式
    const initElements = document.querySelectorAll('.book-card, .guide-section');
    initElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // 触发初始滚动事件以显示元素
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 100);
    
    // 优化图片加载
    const phoneImg = document.querySelector('.phone-container img');
    if (phoneImg) {
        const phoneContainer = document.querySelector('.phone-container');
        phoneContainer.classList.add('loading');
        
        // 创建图片预加载
        const preloadImg = new Image();
        preloadImg.src = phoneImg.src;
        
        preloadImg.onload = function() {
            phoneContainer.classList.remove('loading');
            phoneImg.style.opacity = '1';
            phoneImg.style.transition = 'opacity 0.5s ease';
        };
        
        preloadImg.onerror = function() {
            phoneContainer.classList.remove('loading');
            phoneImg.alt = '图片加载失败';
            console.error('图片加载失败，请检查1.jpg文件是否存在');
        };
    }
});