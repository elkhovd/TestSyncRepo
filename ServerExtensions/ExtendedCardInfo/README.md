# ExtendedCardInfo

Этот пример разработки и подключения собственного серверного расширения для чтения значения полей, загруженных и не загруженных на страницу.

## Настройка среды

**Перечень необходимых инструментов:** 
* [Visual Studio](https://www.visualstudio.com)
* [TypeScript](https://www.typescriptlang.org)

## Сборка

1. Открыть /Samples.sln
2. Собрать проект ServerExtensions > ExtendedCardInfo > ExtendedCardInfoServerExtension
3. Открыть в командной строке каталог ExtendedCardInfoWebExtension и скомпилировать TypeScript с помощью команды
"c:\Program Files (x86)\Microsoft SDKs\TypeScript\2.2\tsc.exe" (Путь может отличаться в зависимости от пути установки TypeScript 2.2)
4. Скопировать содержимое каталога \bin\WebClientBin в каталог "Путь к установленному Web-клиент\Site\Bin"
5. В конфигурационном файле Web-клиент Web.config в секции Docsvision > Platform > Extensions добавить строку:
	 <Extension TypeName="ExtendedCardInfoServerExtension.LayoutWebClientExtension, ExtendedCardInfoServerExtension" Target="WebClient"/>
6. Скопировать каталог \ServerExtensions\ExtendedCardInfo\ExtendedCardInfoWebExtension в каталог "Путь к установленному Web-клиент\Site\Content\Extensions"
7. Перезапустить IIS

## Проверка примера

1. Запустить конструктор разметок
2. Скопировать любую разметку просмотра
3. Выбрать условия использования этой разметки
4. Открыть разметку и для контрола RegDate(для разных видов карточки может варьироваться название (RegistrationDate)) на событие onChanged 
привязать функцию extendedCardCheckDates 
5. Сохранить разметку
6. Перезапустить IIS
7. Открыть карточку с этой разметкой
8. Убедиться, что при изменении даты появляется сообщение.
9. Должен открыться исходящий документ, с заданными аттрибутами.

## Проект ExtendedCardInfoServerExtension

Проект-расширение для Web-клиент. Содержит бизнес-логику для чтения значения полей, загруженных и не загруженных на страницу.
Демонстрирует расширение функционала с помощью добавления новых сервисов, контроллеров.
Реализован контроллер ExtendedCardController с методом Get, который вызывает сервис IExtendedCardService,
 для чтения не загружаемых на страницу полей документа:  
	CreateDate 
    ChangeDate
    Description
    BarCode

## Проект ExtendedCardInfoWebExtension

Проект-расширение клиентской части Web-клиент. Содержит клиентский скрипт функции extendedCardCheckDates, которая вызывается на событие onChanged контрола RegDate.
С помощью requestManager.get отправляем запрос на сервер для получения расширенной модели IExtendedCardModel и сравниваем поля.

## Список изменений

[12.05.2017] Загружена первоначальная версия примера

