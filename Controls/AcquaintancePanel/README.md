# Acquaintance panel

Этот пример содержит элемент управления "Панель отправки на ознакомление", который демонстрирует запуск бизнес-процесса из карточки документа и создание кастомной боковой панели.

## Настройка среды

**Перечень необходимых инструментов:** 
* [Visual Studio](https://www.visualstudio.com)
* [TypeScript](https://www.typescriptlang.org)
* [Web Compiler](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.WebCompiler)

## Сборка

1. Открыть /Samples.sln
2. Собрать проект Controls > AcquaintancePanel > AcquaintancePanelDesignerExtension
3. Собрать проект Controls > AcquaintancePanel > AcquaintancePanelServerExtension
4. В Solution Explorer щелкнуть правой кнопкой мыши по файлу Controls > AcquaintancePanel > AcquaintancePanelServerExtension > Content > AcquaintancePanel > Styles > controls > acquaintance-panel.scss, 
и выбрать пункт меню Web Compiler > Re-compile file.
5. Скопировать содержимое каталога \bin\Plugins в каталог "Путь к установленному Web-клиент\Plugins"
6. Скопировать содержимое каталога \bin\WebClientBin (AcquaintancePanelServerExtension.dll) в каталог "Путь к установленному Web-клиент\Site\Bin"
7. Скопировать xml-файл AcquaintancePanel.xml из каталога Controls\AcquaintancePanel\AcquaintancePanelDesignerExtension\xml в каталог "Путь к установленному Web-клиент\Plugins"
8. Скопировать каталог Controls\AcquaintancePanel\AcquaintancePanelServerExtension\Content\AcquaintancePanel в каталог "Путь к установленному Web-клиент\Site\Content"
9. В конфигурационном файле Web-клиент Web.config в секции Docsvision > Platform > Extensions добавить строку:
	 <Extension TypeName="AcquaintancePanelServerExtension.LayoutWebClientExtension, AcquaintancePanelServerExtension" Target="WebClient"/>
10. Перезапустить IIS

## Проверка примера

1. Запустить конструктор разметок
2. Скопировать любую разметку просмотра
3. Выбрать условия использования этой разметки
4. Открыть разметку и добавить в нее новый элемент управления "Пример боковой панели"
5. Задать желаемые параметры элемента управления(для корректной работы задать editOperation = "Send for acquaintance" или "Отправка на ознакомление")
6. Сохранить разметку
7. Перезапустить IIS
8. Открыть карточку с этой разметкой
9. Убедиться, что появился новый элемент управления (кнопка, при нажатии на которую появляется боковая панель)
10. Заполнить необходимые поля и нажать "Отправить на ознакомление". 
11. Должен запуститься бизнесс-процесс и указанным сотрудникам придет задание на ознакомление со ссылкой на документ.

## Проект AcquaintancePanelDesignerExtension

Проект-расширение для конструктора разметок. Содержит описание элемента управления "Пример боковой панели" для WebLayoutsDesigner.
Демонстрирует использование описания контрола в формате xml, задание ему стандартных свойств, реализованных в  WebLayoutsDesigner и
добавление кастомного свойства, используя класс PropretyDescription. 

## Проект AcquaintancePanelServerExtension

Проект-расширение для Web-клиент. Содержит бизнес-логику и реализацию элемента управления на клиенте. 
Демонстрирует расширение функционала с помощью добавления новых сервисов, моделей, контроллеров.
Реализован контроллер LayoutBusinessProcessController с методом SendToAcquaintance, который вызывает сервис ILayoutBPService,
 для отправки документа на ознакомление. В контроллере захардкожен идентификатор бизнес-процесса. 
Для старта этого бизнес-процесса необходимо передать в качестве параметров "Ознакомителей" ("Performers"), "Документ" ("Document") и дату "Ознакомиться до" ("EndDate").
Клиентский контрол представляет собой кнопку, при нажатии на которую появляется боковая панель. 
Боковая панель включает в себя стандартные контролы Web-клиент - MultipleEmployees (для задания списка сотрудников, которым придет задание на ознакомление)
 и DateTimePicker (дата "Ознакомиться до"). При нажатии на кнопку "Отправить на ознакомление" спроисходит валидация параметров и с помощью объекта requestManager 
 отправляется запрос на сервер. 


## Список изменений

[12.05.2017] Загружена первоначальная версия примера