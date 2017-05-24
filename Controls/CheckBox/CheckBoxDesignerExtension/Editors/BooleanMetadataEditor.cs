﻿using Docsvision.Platform.Tools.LayoutEditor.Editors;
using DocsVision.Platform.Data.Metadata.CardModel;
using System.Windows;
using Xceed.Wpf.Toolkit.PropertyGrid;
using Xceed.Wpf.Toolkit.PropertyGrid.Editors;

namespace CheckBoxDesignerExtension.Editors
{
    class BooleanMetadataEditor : ITypeEditor
    {
        public FrameworkElement ResolveEditor(PropertyItem propertyItem)
        {
            var editor = new FieldMetadataEditor();
            editor.FieldFilter = (field) => { return field.FieldType == FieldType.Bool; };
            return editor.ResolveEditor(propertyItem);
        }
    }
}
