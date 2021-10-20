# skypro_w9_hw1_nodejs

## 1. Злопамятный скрипт  

### Задание:  

Сделайте скрипт, который "помнит" время своего последнего запуска. Пусть он раздраженно выводит в консоль при запуске "Ну ты же уже запускал меня <время> тому назад", после чего заканчивает выполнение.  
Храните время последнего запуска в каком-то файлике. Если данных о последнем запуске нет, пусть скрипт выведет что-нибудь такое же токксичное, вроде "Окей, ты меня запустил. Ты доволен?"  

### Реализация:  

Время последнего запуска хранится в файле log.txt.  
Для вывода промежутка времени использован пакет date-fns.  
Для корректной работы скрипта необходимо установить этот пакет, прогнав команду `npm i`.  

## 2. Дипломатическое окружение  

### Задание:  

Сделайте скрипт, который возьмет язык из переменной командной строки LANG. Пусть он выводит фразу "Пацак должен делать ку два раза" на языке, переданном с помощью этой переменной. Поддержите не менее 3х языков в скрипте. Обозначайте языки двумя буквами, как это обычно принято для кодирования языков - RU, UK (украинский), EN (английский) и так далее 

### Реализация:  

Скрипт берет язык из переменной LANGUAGE, так как переменная LANG уже есть в некоторых консольных приложениях (например, cmder).  
Поддеживаются 8 языков: RU (русский), UK (украинский), EN (английский), ES (испанский), DE (немецкий), FR (французский), IT (итальянский), JA (японский).  
Язык по умолчанию: RU (русский).   

## 3. В среднем по картинке  

### Задание:  

Сделайте скрипт, который будет получать путь к картинке через переменную окружения PIC. Если переменная не задана, скрипт заканчивает выполнение с ошибкой. Если картинка с таким адресом не найдена, также следует завершить выполнение с ошибкой. Если картинка задана и существует, скрипт должен вычислить средний цвет картинки и выдать этот цвет в консоль, после чего завершить выполнение.  
Путь подразумевается на жестком диске, url в интернете поддерживать необязательно.  

### Реализация:  

В скрипте для определения среднего цвета используется модуль fast-average-color-node.  
Для корректной работы скрипта необходимо установить этот модуль, прогнав команду `npm i`.  
Цвет определяется двумя способами: simple (среднее арифметическое) и sqrt (среднее квадратичное).  
Оба результата выводятся в консоль.  

## 4. Лайк API  

### Задание:  

Сделайте апи, которое будет предоставляет три "ручки" (то есть три url, к которым можно обратиться):   
`/like` - позволяет поставить лайк, прибавляет число лайков  
`/dislike` - позволяет поставить дизлайк, снижает число лайков  
`/stats` - отдает информацию о числе лайков  
При обращении к любому другому url отдавайте HTTP статус 404 и любой ответ.  

### Реализация:  

Добавлено еще две ручки:  
`/` - стартовая страница с тремя кнопками-ссылками: Like, Dislike, Statistics, - которые ведут на ручки, указанные в задании.  
`/ping` - страница для проверки связи, возвращает { status: 'ok', message: 'pong' }  

Ручки в задании возвращают { status: 'ok' }; `/stats` также возвращает информацию о числе лайков.  
Число лайков вполне может уйти в минус.  

Остальные ручки возвращают { status: 'error', message: 'Not found' }  

## 5. Самый главный модуль  

### Задание:  

Опубликуйте в npm модуль который будет экспортировать одну функцию, при вызове которой в консоль попадают ваши имя и фамилия. В ответе на эту задачу просто приложите имя модуля.  

### Ответ:

Имя модуля: skypro-name-diana-glazova  
Оно же лежит в файле the-most-important-module.txt  
