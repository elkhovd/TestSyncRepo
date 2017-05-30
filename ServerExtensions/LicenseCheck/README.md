# LicenseCheck

Этот пример содержит проверку наличия дополнительной опции лицензионного ключа.

## Настройка среды

**Перечень необходимых инструментов:** 
* [Visual Studio](https://www.visualstudio.com)
* [TypeScript](https://www.typescriptlang.org)

## Сборка

1. Открыть /Samples.sln
3. Собрать проект ServerExtensions > LicenseCheck > LicenseCheckServerExtension
4. Открыть в командной строке каталог ServerExtensions\LicenseCheck\LicenseCheckServerExtension\Content\LicenseCheck и скомпилировать TypeScript с помощью команды
"c:\Program Files (x86)\Microsoft SDKs\TypeScript\2.2\tsc.exe" (Путь может отличаться в зависимости от пути установки TypeScript 2.2)
7. Скопировать каталог ServerExtensions\LicenseCheck\LicenseCheckServerExtension\Content\LicenseCheck в каталог "Путь к установленному Web-клиент\Site\Content"
5. Скопировать содержимое каталога \bin\WebClientBin в каталог "Путь к установленному Web-клиент\Site\Bin"
8. В конфигурационном файле Web-клиент Web.config в секции Docsvision > Platform > Extensions добавить строку:

	 <Extension TypeName="LicenseCheckServerExtension.LayoutWebClientExtension, LicenseCheckServerExtension" Target="WebClient"/>
	 
7. Перезапустить IIS

## Проверка примера

1. Запустить конструктор разметок
2. Скопировать любую разметку просмотра
3. Выбрать условия использования этой разметки
4. Открыть разметку и добавить в нее элемент управления "Кнопка"
5. На событие onClick задать функцию checkLicenseFeature 
6. Сохранить разметку
7. Перезапустить IIS
8. Открыть карточку с этой разметкой
9. Убедиться, что появился новый элемент управления (кнопка)
10. Нажать на кнопку. Должно появиться сообщение с результатом проверки

## Проект LicenseCheckServerExtension

Проект-расширение для Web-клиент. Содержит бизнес-логику и скрипт для проверки наличия допольнительной опции лицензионного ключа.
В данном примере это опция Docsvision Card Builder.
Демонстрирует расширение функционала с помощью добавления новых сервисов, контроллеров.
Реализован контроллер LicenseCheckController с методом CheckFeature, который вызывает сервис ILicenseCheckService

При нажатии на кнопку с помощью объекта requestManager отправляется запрос на сервер. Пользователю отображается сообщение о наличии или отсутствии опции.


## Список изменений

[12.05.2017] Загружена первоначальная версия примера

