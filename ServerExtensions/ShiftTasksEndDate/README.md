# ShiftTasksEndDate

Этот пример серверного расширения демонстрирует реализацию связанных изменений данных других карточек.
После сохранении карточки Документа найти все его связанные задания перенести срок исполнения на 3 дня.

## Настройка среды

**Перечень необходимых инструментов:** 
* [Visual Studio](https://www.visualstudio.com)
* [TypeScript](https://www.typescriptlang.org)

## Сборка

1. Открыть /Samples.sln
2. Собрать проект ServerExtensions > ShiftTasksEndDate > ShiftTasksEndDateServerExtension
3. Открыть в командной строке каталог ShiftTasksEndDateWebExtension и скомпилировать TypeScript с помощью команды
"c:\Program Files (x86)\Microsoft SDKs\TypeScript\2.2\tsc.exe" (Путь может отличаться в зависимости от пути установки TypeScript 2.2)
4. Скопировать содержимое каталога \bin\WebClientBin в каталог "Путь к установленному Web-клиент\Site\Bin"
5. В конфигурационном файле Web-клиент Web.config в секции Docsvision > Platform > Extensions добавить строку:
	 <Extension TypeName="ShiftTasksEndDateServerExtension.LayoutWebClientExtension, ShiftTasksEndDateServerExtension" Target="WebClient"/>
6. Скопировать каталог \ServerExtensions\ShiftTasksEndDate\ShiftTasksEndDateWebExtension в каталог "Путь к установленному Web-клиент\Site\Content\Extensions"
7. Перезапустить IIS

## Проверка примера

1. Запустить конструктор разметок
2. Скопировать любую разметку редактирования
3. Выбрать условия использования этой разметки
4. В разметке редактирования на событие OnCardSaved элемента root прикрепляем обработчик с названием shiftTasksEndDate 
5. Сохранить разметку
6. Перезапустить IIS
7. Создать карточку документа
8. Добавить дочерние задания (не группы заданий)
9. Нажать на редактирование карточки, изменить что-нибудь, сохранить
10. Можно заметить, что срок исполнения задний сдвинулся на 3 дня


## Проект ShiftTasksEndDateServerExtension

Проект-расширение для Web-клиент. Содержит бизнес-логику для связанных изменений данных других карточек.
Демонстрирует расширение функционала с помощью добавления новых сервисов, контроллеров.
Реализован контроллер AdvancedDocumentController с методом ShiftTasksEndDate, который вызывает сервис IShiftTasksEndDateService.

## Проект ShiftTasksEndDateWebExtension

Проект-расширение клиентской части Web-клиент. Содержит клиентский скрипт функции shiftTasksEndDate, которая вызывается на событие OnCardSaved.
С помощью requestManager.post отправляем запрос на сервер для изменения даты.

## Список изменений

[12.05.2017] Загружена первоначальная версия примера

