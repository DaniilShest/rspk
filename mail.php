<?php
/* Здесь проверяется существование переменных */
if (isset($_POST['name'])) {$phone = $_POST['name'];}
if (isset($_POST['phone'])) {$name = $_POST['phone'];}
 
/* Сюда впишите свою эл. почту */
$myaddres  = "step_24@mail.ru"; // кому отправляем
 
/* А здесь прописывается текст сообщения, \n - перенос строки */
$mes = "Тема: Заказ обратного звонка!\nТелефон: $phone\nИмя: $name";
 
/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заказ'; //сабж
$email='Заказ обратного звонка'; // от кого
$headers = array(
    'From' => 'фывфыв'
);
$send = mail ($myaddres,$sub,$mes,$headers);
 
ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>


<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>РСПК - раздвижные светопрозрачные конструкции</title>
    <meta name="description"
        content="Изготовление и монтаж раздвижных окон для объектов животноводства, а так же промышленных производственных и складских помещений.">
    <meta name="robots" content="index,follow">
    <meta name="keywords"
        content="Раздвижные окна из алюминиевого профиля (холодная серия), Раздвижные окна из ПВХ профиля (теплая серия), Подъемные секционные ворота, раздвижные окна для МТФ в Казахстане, окна для коровников, купить окна для коровников, заказать окна для коровников, окна для коровников в Казахстане, окна для коровников в Костанае, окна для фермы, купить окна для фермы, заказать окна для фермы, окна для фермы в Казахсане, окна для фермы в Костанае" />
    <link rel="stylesheet" href="style/index.css">
    <link rel="icon" href="./img/icon1.png">
</head>
<body>
<div class="thanks">
        <div class="container">
            <div class="thanks__body">
                <img src="img/thanks.svg" alt="Thanks" class="thanks__img">
                <h1 class="thanks__title">Спасибо! Ваша заявка успешно отправлена.</h1>
            </div>
        </div>
    </div>
</body>
</html>