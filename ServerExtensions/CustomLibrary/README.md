# CustomLibrary

Этот пример серверного расширения демонстрирует пример взаимодейстия с пользовательским типом карточки DocsVision.
В библиотеке Sample custom library реализован тип карточки Custom Directory, который представляет из себя справочник
с полем Counter, значение которого получается скриптом и выводится во всплывающем окне.

## Настройка среды

**Перечень необходимых инструментов:** 
* [Visual Studio](https://www.visualstudio.com)
* [TypeScript](https://www.typescriptlang.org)
* [Docsvision 5 Resource Kit](ftp://ftp.docsvision.com/downloadarea/docsvision/Docsvision5.4.2642/ResourceKit.zip)
* [Docsvision 5 DVExplorer Update 9](ftp://ftp.docsvision.com/downloadarea/Docsvision/Docsvision5.4.2642/Update9/DVExplorer_Update9.zip)

## Сборка

1. Открыть /Samples.sln
2. Собрать проекты ServerExtensions > CustomLibrary > CustomLibrary.ObjectModel и CustomLibraryServerExtension
3. Открыть в командной строке каталог \ServerExtensions\CustomLibrary\CustomLibraryServerExtension\Content и скомпилировать TypeScript с помощью команды
"c:\Program Files (x86)\Microsoft SDKs\TypeScript\2.2\tsc.exe" (Путь может отличаться в зависимости от пути установки TypeScript 2.2)
4. Скопировать содержимое каталога \bin\WebClientBin в каталог "Путь к установленному Web-клиент\Site\Bin"
5. В конфигурационном файле Web-клиент Web.config в секции Docsvision > Platform > Extensions добавить строку:
```xml
<Extension TypeName="CustomLibraryServerExtension.LayoutWebClientExtension, CustomLibraryServerExtension" Target="WebClient"/>
```	 
6. Скопировать каталог \ServerExtensions\CustomLibrary\CustomLibraryServerExtension\Content в каталог "Путь к установленному Web-клиент\Site\Content"
7. (Внимание! Перед выполнением следующего шага, рекомендуется сделать резервную копию базы данных DocsVision)
На сервере Docsvision 5 установить Docsvision 5 Resource Kit, установить обновление DVExplorer. С помощью утилиты DVCardManager следует загрузить 
в БД Docsvision библиотеку CustomCardLib из каталога \ServerExtensions\CustomLibrary\CardDefs. Подробное описание процедуры загрузки пользовательской 
библиотеки карточек содержится в документации разработчика Docsvision 5. 
8. С помощью утилиты DVExplorer подключиться к БД, открыть карточку справочника Custom Directory, добавить строку секции MainInfo 
и установить значение 777 в поле Counter. Сохранить изменения. Подробное описание работы с утилитой DVExplorer содержится в документации 
разработчика Docsvision 5. 
9. Перезапустить IIS на сервере Docsvision 5.
10. Перезапустить IIS на сервере Docsvision 5 Web-клиент.

## Проверка примера

1. Запустить конструктор разметок
2. Скопировать любую разметку просмотра
3. Выбрать условия использования этой разметки
4. В разметке просмотра на событие OnCardOpened элемента root указать обработчик с названием getCustomData 
5. Сохранить разметку
6. Перезапустить IIS
7. Создать карточку документа
8. При открытии разметки просмотра появится всплывающее сообщение: 'Custom data: 777'

## Каталог CardDefs

Содержит описание библиотеки Sample custom library, в которой описан тип карточки CustomDirectory - справочник, в 
секции MainInfo которого есть поле Counter. Подробности содержатся в документации разработчика Docsvision 5.

## Проект CustomLibrary.ObjectModel

Проект содержит объектную модель карточки типа CustomDirectory. Подробности содержатся в документации разработчика Docsvision 5.

## Проект CustomLibraryServerExtension

Проект-расширение для Web-клиент. Содержит сервис по работе со справочником CustomDirectory, методы контроллера CustomLibrary 
для взаимодейстия с клиентскими скриптами веб-приложения, а так же клиентский скрипт getCustomData.