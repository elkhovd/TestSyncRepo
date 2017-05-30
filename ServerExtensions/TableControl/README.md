# TableControl

Этот пример содержит серверное расширение для отображения данных из связанных карточек в табличном контроле. 
В разметку карточки "Документ УД/Исходящий" добавляется таблица контрагентов, в колонках которой автоматически показываются e-mail и телефон выбранной в строке организации, загружаемые с сервера отдельным запросом.

## Настройка среды

**Перечень необходимых инструментов:** 
* [Visual Studio](https://www.visualstudio.com)
* [TypeScript](https://www.typescriptlang.org)

## Сборка

1. Открыть /Samples.sln
2. Собрать проект ServerExtensions > TableControl > TableControlServerExtension
3. Открыть в командной строке каталог ServerExtensions\TableControl\TableControlServerExtension\Content\LayoutTableControl и скомпилировать TypeScript с помощью команды
"c:\Program Files (x86)\Microsoft SDKs\TypeScript\2.2\tsc.exe" (Путь может отличаться в зависимости от пути установки TypeScript 2.2)
4. В Solution Explorer щелкнуть правой кнопкой мыши по файлу ServerExtensions > TableControl> TableControlServerExtension > Content > Styles > SampleDocument.scss, 
и выбрать пункт меню Web Compiler > Re-compile file.
5. Скопировать каталог ServerExtensions\TableControl\TableControlServerExtension\Content\LayoutTableControl в каталог "Путь к установленному Web-клиент\Site\Content"
6. Скопировать содержимое каталога \bin\WebClientBin в каталог "Путь к установленному Web-клиент\Site\Bin"
7. В конфигурационном файле Web-клиент Web.config в секции Docsvision > Platform > Extensions добавить строку:

	 <Extension TypeName="TableControlServerExtension.LayoutWebClientExtension, TableControlServerExtension" Target="WebClient"/>
	 
8. Перезапустить IIS

## Проверка примера

1. Запустить конструктор разметок
2. Скопировать разметку просмотра исходящего документа
3. Выбрать условия использования этой разметки
4. Открыть разметку и добавить в нее элемент управления "Таблица" и 3 столбца. Для таблицы в поле Источник данных (Data Source) секцию Partners Receivers.
5. В первый столбец поместить элемент управления Подразделение котрагента (Partner's department), задать имя samplePartnersDepartment. Значение Поле данных (Data Field) выбрать Partner company.
6. Во второй столбец поместить элемент управления Метка (Label), задать имя sampleDepartmentEmail
7. В третий столбец поместить элемент управления Метка (Label), задать имя sampleDepartmentPhone
8. На событие On card opened элемента root задать функцию sampleDocumentViewCardOpened 
9. Сохранить разметку
10. Перезапустить IIS
11. Открыть карточку с этой разметкой
12. Убедиться, что появился новый элемент управления 

## Проект TableControlServerExtension

Проект-расширение для Web-клиент. Содержит бизнес-логику и скрипт для отображения данных из связанных карточек в табличном контроле.
Демонстрирует расширение функционала с помощью добавления новых сервисов, контроллеров.
Реализован контроллер SamplePartnersController с методом GetPartnersInfo, который вызывает сервис ISamplePartnersService,
 для получения информации о контрагентах:  Phone, Email, Name.

В клиентском скрипте реализована функция sampleDocumentViewCardOpened, которая вызывается на событие On card opened.
Она отправляет запрос на сервер WebClient.samplePartnersController.GetPartnersInfo и заполняет таблицу вернувшимися данными.

## Список изменений

[12.05.2017] Загружена первоначальная версия примера
