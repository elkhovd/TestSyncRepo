﻿using Docsvision.Platform.Tools.LayoutEditor.Infrostructure;
using System;
using System.Collections.Generic;
using Docsvision.Platform.Tools.LayoutEditor.ObjectModel.Descriptions;
using Docsvision.Platform.Tools.LayoutEditor.Extensibility;
using System.Resources;
using Docsvision.Platform.Tools.LayoutEditor.Helpers;
using Docsvision.Platform;
using CheckBoxDesignerExtension.Editors;
using DocsVision.Platform.WebClient.Helpers;

namespace CheckBoxDesignerExtension.Extension
{
    /// <summary>
    /// Represents sample layout editor extension
    /// </summary>
    class SampleWebLayoutsDesignerExtension : WebLayoutsDesignerExtension
    {
        IAllowedOperationsStorage allowedOperationsStorage;

        /// <summary>
        /// Creates a new instance of <see cref="SampleWebLayoutsDesignerExtension"/>
        /// </summary>
        /// <param name="provider">service provider</param>
        public SampleWebLayoutsDesignerExtension(IServiceProvider provider)
            : base(provider)
        {
        }

        /// <summary>
        /// Возвращает <see cref="IAllowedOperationsStorage"/>
        /// </summary>
        protected IAllowedOperationsStorage AllowedOperationsStorage
        {
            get
            {
                return this.allowedOperationsStorage ?? (this.allowedOperationsStorage = ServiceUtil.GetService<IAllowedOperationsStorage>(serviceProvider));
            }
        }

        // Возвращает словарь ключ/описание свойства, которые будут использоваться в пользовательских контролах
        protected override Dictionary<string, PropertyDescription> GetPropertyDescriptions()
        {
            return new Dictionary<string, PropertyDescription>
            {
                { Constants.SampleCheckBox.DefaultValue, GetDefaultValuePropertyDescription() }
            };
        }

        // Возвращает описание пользовательских контролов
        // описание контрола PartnerLink выполнено альтернативным способом и содержится в каталоге xml
        protected override List<ControlTypeDescription> GetControlTypeDescriptions()
        {
            return new List<ControlTypeDescription>
            {
                this.GetSampleCheckBoxDescription()
            };
        }

        // Возвращает ResourceManager этого расширения (расширяет словарь локализации конструктора разметок, не путать с окном Localization конструктора разметок)
        protected override List<ResourceManager> GetResourceManagers()
        {
            return new List<ResourceManager>
            {
                Resources.ResourceManager
            };
        }

        // Возвращает описание свойства 
        private PropertyDescription GetDefaultValuePropertyDescription()
        {
            return new PropertyDescription
            {
                Type = typeof(bool), // Тип свойства
                Name = Constants.SampleCheckBox.DefaultValue, // Наименование поля, которое будет приходить в разметке контрола
                Category = PropertyCategoryConstants.BehaviorCategory, // Категория свойства, в которой будет отображаться свойство в конструкторе разметок
                DisplayName = Resources.ControlTypes_DefaultValueProperty // Отображаемое наименование свойства в конструкторе разметок
            };
        }

        // Возвращает описание контрола SampleCheckBox
        private ControlTypeDescription GetSampleCheckBoxDescription()
        {
            var standardCssClass = PropertyFactory.GetStandardCssClassProperty(); // Получаем свойство StandardCssClass
            standardCssClass.DefaultValue = "sample-checkbox"; // Изменяем значение по умолчанию 

            var dataFieldProperty = PropertyFactory.GetDataFieldProperty();
            dataFieldProperty.Editor = typeof(BooleanMetadataEditor);

            // Создаем описание контрола, который будет доступен по имени PartnerCheckBox
            var partnerCheckBox = new ControlTypeDescription(Constants.SampleCheckBox.ClassName)
            {
                DisplayName = Resources.ControlTypes_SampleCheckBox, // Отображаемое наименование контрола в окне конструктора разметок
                PropertyDescriptions =  // Содержит перечень свойств, которыми обладает контрол
                {
                    PropertyFactory.GetNameProperty(), // Наименование экземпляра контрола
                    PropertyFactory.GetTipProperty(),  // Текст подсказки при наведении на контрол
                    PropertyFactory.GetLabelTextProperty(), // Текст метки
                    PropertyFactory.GetVisibilityProperty(), // Видимость контрола
                    PropertyFactory.GetCustomCssClassesProperty(), // Пользовательские css классы
                    PropertyFactory.GetTabStopProperty(), // Переход по tab
                    standardCssClass, // Базовый css класс контрола

                    // Блок свойств Binding
                    PropertyFactory.GetDataSourceProperty(), // Источник данных (отображается только в конструкторе)
                    dataFieldProperty,  // Поле данных (отображается только в конструкторе)
                    PropertyFactory.GetBindingProperty(),    // Свойство binding (не отображается в конструкторе)
                    PropertyFactory.GetEditOperationProperty(), // Режим редактирования (отображается только в конструкторе)                    

                    PropertyFactory.Create(Constants.SampleCheckBox.DefaultValue), // Свойство DefaultValue (было добавлено ранее этим расширением)

                    PropertyFactory.CreateEvent(Constants.SampleCheckBox.EventChecked, "ControlTypes_EventCheckedProperty"), // Событие EventChecked, отображаемое наименование свойства содержится в файле ресурсов по ключу ControlTypes_EventCheckedProperty 
                    PropertyFactory.CreateEvent(Constants.SampleCheckBox.EventUnchecked, "ControlTypes_EventUncheckedProperty") // Событие EventUnchecked
                },
               // GetAllowedOperations = AllowedOperationsStorage.GetAllowedOperations(Constants.AllowedOperations.AllowCreateInEditLayoutsOnly) // Указывает, что контрол доступен только в разметках редактирования
            };

            return partnerCheckBox;
        }
    }
}
