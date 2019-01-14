
var vasyaMessages = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',

    'Molestiae sed provident dignissimos, rerum a laboriosam eos incidunt sequi quas, earum animi necessitatibus tempore laborum' +
    'aperiam mollitia cum, nemo nihil hic!',

    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae sed provident' +
    'dignissimos, rerum a laboriosam eos incidunt sequi quas, earum animi necessitatibus tempore laborum' +
    'aperiam mollitia cum, nemo nihil hic!'
];

var forVasyaMessages = [
    'dfghyjuiopi[o]tyyutyhf',
    'dsafgfhtuyjgfjyuifjkiogukljopilk'
];


var yanaMessages = [
    'Hi!',
    'How are you?',
    'What do you do?'
];

var forYanaMessages = [
    'Hello',
    'I\'m good'
];

var nastyaMessages = [
    'Формальный язык описания внешнего вида документа, написанного с использованием языка разметки. ',
    'Формальный язык описания внешнего вида документа, написанного с использованием языка разметки. ',
    'Формальный язык описания внешнего вида документа, написанного с использованием языка разметки. '
];

var forNastyaMessages = [
    'Данная статья пригодится новичкам в веб-программировании.',
    'Данная статья пригодится новичкам в веб-программировании.'
];


var dimaMessages = [
    'Тогда, для доступа к его «стилевым» свойствам, можно использовать такой код (не пытайтесь использовать, вырвано из контекста!):',
    'Тогда, для доступа к его «стилевым» свойствам, можно использовать такой код (не пытайтесь использовать, вырвано из контекста!):',
    'Тогда, для доступа к его «стилевым» свойствам, можно использовать такой код (не пытайтесь использовать, вырвано из контекста!):',
    'Тогда, для доступа к его «стилевым» свойствам, можно использовать такой код (не пытайтесь использовать, вырвано из контекста!):',
    'Тогда, для доступа к его «стилевым» свойствам, можно использовать такой код (не пытайтесь использовать, вырвано из контекста!):'
];

var forDimaMessages = [
    'Далее начинается пусть небольшая, но магия.',
    'Далее начинается пусть небольшая, но магия.',
    'Далее начинается пусть небольшая, но магия.',
    'Далее начинается пусть небольшая, но магия.'
];

var egorMessages = [
    'Поэтому, имена свойств требуется «причесать» (нормализовать) для использования в коде. ',
    'Поэтому, имена свойств требуется «причесать» (нормализовать) для использования в коде. ',
    'Поэтому, имена свойств требуется «причесать» (нормализовать) для использования в коде. ',
    'Поэтому, имена свойств требуется «причесать» (нормализовать) для использования в коде. '
];

var forEgorMessages = [
    'Вот так! Всё очень просто. ',
    'Вот так! Всё очень просто. ',
    'Вот так! Всё очень просто. '
];

var katyaMessages = [
    'Свойство style представляет глобальный атрибут style HTML-элемента. ',
    'Свойство style представляет глобальный атрибут style HTML-элемента. ',
    'Свойство style представляет глобальный атрибут style HTML-элемента. ',
    'Свойство style представляет глобальный атрибут style HTML-элемента. ',
    'Свойство style представляет глобальный атрибут style HTML-элемента. '
];

var forKatyaMessages = [
    'Для изменения или добавления новых стилей к HTML-элементу нужно воспользоваться свойством, имя которого будет совпадать с именем CSS свойства, значение которого вы хотите изменить. ',
    'Для изменения или добавления новых стилей к HTML-элементу нужно воспользоваться свойством, имя которого будет совпадать с именем CSS свойства, значение которого вы хотите изменить. ',
    'Для изменения или добавления новых стилей к HTML-элементу нужно воспользоваться свойством, имя которого будет совпадать с именем CSS свойства, значение которого вы хотите изменить. ',
    'Для изменения или добавления новых стилей к HTML-элементу нужно воспользоваться свойством, имя которого будет совпадать с именем CSS свойства, значение которого вы хотите изменить. '
];


$('.left-menu-block1').click(function () {

   var imgPath="images/2bvztCERoOc.jpg";

    document.getElementById("chat-ico").setAttribute("src", imgPath);
    document.getElementById("chat-name").innerText = "Vasya";
    document.getElementById("chat").innerHTML='';

    AddMessage(imgPath, forVasyaMessages, vasyaMessages);

});


$('.left-menu-block2').click(function () {

    var imgPath="images/6IPc2VYVPyE.jpg";

    document.getElementById("chat-ico").setAttribute("src", imgPath);
    document.getElementById("chat-name").innerText = "Yana";
    document.getElementById("chat").innerHTML='';

    AddMessage(imgPath, forYanaMessages, yanaMessages);
});


$('.left-menu-block3').click(function () {

    var imgPath="images/137fab8f012d269078a5bafb6b438b54e109dd6dv2_hq.jpg";

    document.getElementById("chat-ico").setAttribute("src", imgPath);
    document.getElementById("chat-name").innerText = "Nastya";
    document.getElementById("chat").innerHTML='';

    AddMessage(imgPath, forNastyaMessages, nastyaMessages);
});

$('.left-menu-block4').click(function () {

    var imgPath="images/pbcHrmKbYTY.jpg";

    document.getElementById("chat-ico").setAttribute("src", imgPath);
    document.getElementById("chat-name").innerText = "Dima";
    document.getElementById("chat").innerHTML='';

    AddMessage(imgPath, forDimaMessages, dimaMessages);
});

$('.left-menu-block5').click(function () {

    var imgPath="images/UPN5qMQGHoM.jpg";

    document.getElementById("chat-ico").setAttribute("src", imgPath);
    document.getElementById("chat-name").innerText = "Egor";
    document.getElementById("chat").innerHTML='';

    AddMessage(imgPath, forEgorMessages, egorMessages);
});

$('.left-menu-block6').click(function () {

    var imgPath="images/WwJS0i54t2I.jpg";

    document.getElementById("chat-ico").setAttribute("src", imgPath);
    document.getElementById("chat-name").innerText = "Katya";
    document.getElementById("chat").innerHTML='';

    AddMessage(imgPath, forKatyaMessages, katyaMessages);
});

function AddMessage(imgPath, senderMsg, reciverMsg){

    var nrow = 1;

    for (var x = 0; x < reciverMsg.length; x++) {

        var newElement = document.createElement("img");
        newElement.style.gridRow = nrow;
        newElement.setAttribute("id", "reciver-message-ico");
        newElement.setAttribute("src", imgPath);
        document.getElementById("chat").appendChild(newElement);

        newElement = document.createElement("div");
        newElement.setAttribute("id", "reciver-message");
        newElement.style.gridRow = nrow;
        newElement.innerText = reciverMsg[x];
        document.getElementById("chat").appendChild(newElement);

        if (senderMsg[x] != undefined) {

            var newElement = document.createElement("img");
            newElement.setAttribute("id", "sender-message-ico");
            newElement.style.gridRow = nrow + 1;
            newElement.setAttribute("src", "images/4RWLxkY52VA.jpg");
            document.getElementById("chat").appendChild(newElement);

            newElement = document.createElement("div");
            newElement.setAttribute("id", "sender-message");
            newElement.style.gridRow = nrow + 1;
            newElement.innerText = senderMsg[x];
            document.getElementById("chat").appendChild(newElement);
        }

        nrow += 2;
    }
}