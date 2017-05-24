# Link

Требует подключенного расширения дизайнера разметок UrlProprtyDesignerExtension

Этот каталог содержит пример реализации элемента управления "Link".

## Настройка среды

**Перечень необходимых инструментов:** 
* [Visual Studio](https://www.visualstudio.com)
* [TypeScript](https://www.typescriptlang.org)
* [Web Compiler](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.WebCompiler)

## Сборка и установка

1. Открыть /Samples.sln
2. В Solution Explorer щелкнуть правой кнопкой мыши по файлу Controls > Link > LinkWebExtension > Styles > controls > sample-link.scss, 
и выбрать пункт меню Web Compiler > Re-compile file.
3. Открыть в командной строке каталог LinkWebExtension и скомпилировать TypeScript с помощью команды
"c:\Program Files (x86)\Microsoft SDKs\TypeScript\2.2\tsc.exe" (Путь может отличаться в зависимости от пути установки TypeScript 2.2)
4. Скопировать xml-файл SampleLinkControlDescription.xml из каталога Controls\Link в каталог "Путь к установленному Web-клиент\Plugins"
5. Скопировать каталог \Controls\Link\LinkWebExtension в каталог "Путь к установленному Web-клиент\Site\Content\Extensions"
6. Перезапустить IIS

## Проверка примера

1. Запустить конструктор разметок
2. Скопировать любую разметку
3. Выбрать условия использования этой разметки
4. Открыть разметку и добавить в нее новый элемент управления "Sample link"
5. Задать желаемые параметры элемента управления
6. Сохранить разметку
7. Перезапустить IIS
8. Открыть карточку с этой разметкой
9. Убедиться, что появился новый элемент управления

### Описание контрола SampleLinkControlDescription.xml

Демонстрирует добавление нового контрола без написания расширения для конструктора разметок.
Для этого необходимо описать контрол в xml файле, используя уже подключенные к конструктору свойства и ресурсы.


## Проект LinkWebExtension

Проект-расширение клиентской части Web-клиент. Содержит клиентский скрипт и стили для SampleLink.

## Список изменений

[12.05.2017] Загружена первоначальная версия примера