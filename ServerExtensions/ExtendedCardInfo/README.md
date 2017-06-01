# ExtendedCardInfo

Этот пример разработки и подключения собственного серверного расширения для чтения значения полей, загруженных и не загруженных на страницу.

## Настройка среды

**Перечень необходимых инструментов:** 
* [Visual Studio](https://www.visualstudio.com)
* [TypeScript](https://www.typescriptlang.org)
* Включенные в **Visual Studio** опции  [NuGet Package Restore](https://docs.microsoft.com/en-us/nuget/consume-packages/package-restore#enabling-and-disabling-package-restore)

## Сборка

1. Открыть /Samples.sln
2. Собрать проект ServerExtensions > ExtendedCardInfo > ExtendedCardInfoServerExtension
3. Скопировать каталог SamplesOutput\Site\Bin\ExtendedCardInfoServerExtension в каталог "Путь к установленному Web-клиент\Site\Bin"
4. Скопировать каталог SamplesOutput\Site\Content\Extensions\ExtendedCardInfo в каталог "Путь к установленному Web-клиент\Site\Content\Extensions"
5. В конфигурационном файле Web-клиент Web.config в секции Docsvision > Platform > Extensions добавить строку:
```xml
	 <Extension TypeName="ExtendedCardInfoServerExtension.LayoutWebClientExtension, ExtendedCardInfoServerExtension" Target="WebClient"/>
```
6. Перезапустить IIS

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
9. Должен открыться исходящий документ с заданными атрибутами.

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

