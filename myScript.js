function showSidebar(){
    const sidebar = document.querySelector('.sidebar') //get the sidebar element ans store it in a const variable
    sidebar.style.display = 'flex'
}

function hideSidebar(event) {
    event.preventDefault(); // Зупинка дії за замовчуванням (уникнення прокрутки)
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    document.body.style.overflow = 'auto'; // Повернення можливості прокрутки
}



function scrollToSection(sectionId) { //плавнa прокруткa до розділів сторінки при натисканні на посилання в навігації
    let section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
}  


function showMore(button) {
    var textElement = button.previousElementSibling; // Отримати елемент з текстом
    textElement.style.maxHeight = 'none'; // Змінити висоту, щоб показати весь текст
    button.style.display = 'none'; // Приховати кнопку після натискання
  }
  