# CheckBox

Этот каталог содержит пример реализации элемента управления "CheckBox".

## Настройка среды

**Перечень необходимых инструментов:** 
* [Visual Studio](https://www.visualstudio.com)
* [TypeScript](https://www.typescriptlang.org)
* [Web Compiler](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.WebCompiler)

## Сборка и установка

1. Открыть /Samples.sln
2. Собрать проект Controls > CheckBox > CheckBoxDesignerExtension
3. В Solution Explorer щелкнуть правой кнопкой мыши по файлу Controls > CheckBox > CheckBoxWebExtension > Styles > controls > sample-checkbox.scss, 
и выбрать пункт меню Web Compiler > Re-compile file.
4. Открыть в командной строке каталог CheckBoxWebExtension и скомпилировать TypeScript с помощью команды
"c:\Program Files (x86)\Microsoft SDKs\TypeScript\2.2\tsc.exe" (Путь может отличаться в зависимости от пути установки TypeScript 2.2)
5. Скопировать содержимое каталога \bin\Plugins в каталог "Путь к установленному Web-клиент\Plugins"
6. Скопировать каталог \Controls\CheckBox\CheckBoxWebExtension в каталог "Путь к установленному Web-клиент\Site\Content\Extensions"
7. Перезапустить IIS

## Проверка примера

1. Запустить конструктор разметок
2. Скопировать любую разметку для карточки вида "Служебная записка"
3. Выбрать условия использования этой разметки
4. Открыть разметку и добавить в нее новый элемент управления "Пример флага"
5. Задать желаемые параметры элемента управления
6. Сохранить разметку
7. Перезапустить IIS
8. Открыть карточку с этой разметкой
9. Убедиться, что появился новый элемент управления

## Проект CheckBoxDesignerExtension

Проект-расширение для конструктора разметок. Содержит описание элемента управления "Пример флага" для WebLayoutsDesigner.
Демонстрирует описание и подключение нового контрола, используя класс ControlTypeDescription, 
задание ему стандартных свойств, реализованных в  WebLayoutsDesigner (см. PropertyFactory.GetNameProperty()) и
добавление кастомного свойства, используя класс PropretyDescription (см. свойство DefaultValue). 
Для свойства Поле секции (источник данных), реализован редактор, фильтрующий поля по типу boolean. (класс BooleanMetadataEditor)

## Проект CheckBoxWebExtension

Проект-расширение клиентской части Web-клиент. Содержит клиентский скрипт и стили для CheckBox.

## Список изменений

[12.05.2017] Загружена первоначальная версия примера