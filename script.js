
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    /*=============== remove toggle icon and navbar when click =====================*/

/*=============== scroll reveal =====================*/

$('.chart').easyPieChart({
    scaleColor: false,
    lineWidth: 10,
    lineCap: 'butt',
    barColor: '#FF9000',
    trackColor:	"#f5f5f5",
    size: 160,
    animate: 1000
});
