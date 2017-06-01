# CreateCard

Этот пример содержит создание карточки скриптом с заполнением аттрибутов.

## Настройка среды

**Перечень необходимых инструментов:** 
* [Visual Studio](https://www.visualstudio.com)
* [TypeScript](https://www.typescriptlang.org)
* Включенные в **Visual Studio** опции  [NuGet Package Restore](https://docs.microsoft.com/en-us/nuget/consume-packages/package-restore#enabling-and-disabling-package-restore)

## Сборка

1. Открыть /Samples.sln
2. Собрать проект ServerExtensions > CreateCard > CreateCardServerExtension
3. Скопировать каталог SamplesOutput\Site\Content\Extensions\LayoutCreateCard в каталог "Путь к установленному Web-клиент\Site\Content"
4. Скопировать каталог SamplesOutput\Site\Bin\CreateCardServerExtension в каталог "Путь к установленному Web-клиент\Site\Bin"
5. В конфигурационном файле Web-клиент Web.config в секции Docsvision > Platform > Extensions добавить строку:
```xml
	 <Extension TypeName="CreateCardServerExtension.LayoutWebClientExtension, CreateCardServerExtension" Target="WebClient"/>
```
6. Перезапустить IIS

## Проверка примера

1. Запустить конструктор разметок
2. Скопировать любую разметку просмотра
3. Выбрать условия использования этой разметки
4. Открыть разметку и добавить в нее элемент управления "Кнопка"
5. На событие onClick задать функцию createOutgoingDocument 
6. Сохранить разметку
7. Перезапустить IIS
8. Открыть карточку с этой разметкой
9. Убедиться, что появился новый элемент управления (кнопка, при нажатии на которую создается исходящий документ)
10. Должен открыться исходящий документ, с заданными аттрибутами.

## Проект CreateCardServerExtension

Проект-расширение для Web-клиент. Содержит бизнес-логику и скрипт для созадния новой карточки. 
Демонстрирует расширение функционала с помощью добавления новых сервисов, контроллеров.
Реализован контроллер SampleDocumentController с методом CreateOutgoingDocument, который вызывает сервис ISampleDocumentService,
 для создания исходящего документа и заполнения его полей:  
- Исходящий.Дата создания = текущая дата
- Исходящий.Регистратор = текущий пользователь
- Исходящий.Автор = текущий пользователь
- Исходящий.Организация-Контрагет = Входящий.Организация-Отправитель
- Исходящий.Название = "В ответ на " + <Входящий.Исходящий номер>
- В ссылки Исходящего и исходного Входящего добавить ссылку друг на друга (тип "ответ" - "в ответ на")

При нажатии на кнопку с помощью объекта requestManager отправляется запрос на сервер. Пользователю отображается созданная карточка Исходящего в режиме просмотра.

