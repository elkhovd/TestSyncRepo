﻿using Docsvision.WebClient.Extensibility;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Reflection;
using System.Resources;
using System.Web.Mvc;
using System.Web.Optimization;
using AcquaintancePanelServerExtension.Controllers;
using AcquaintancePanelServerExtension.Services;

namespace AcquaintancePanelServerExtension
{
    /// <summary>
    /// Defines description of the WebClient extension defined in current assembly
    /// </summary>
    public class LayoutWebClientExtension : WebClientExtension
    {
        /// <summary>
        /// Creates new instance of <see cref="LayoutWebClientExtension" />
        /// </summary>
        /// <param name="serviceProvider">Service provider</param>
        public LayoutWebClientExtension(IServiceProvider serviceProvider)
            : base(serviceProvider)
        {
        }

        /// <summary>
        /// Get extenstion name
        /// </summary>
        public override string ExtensionName
        {
            get { return Assembly.GetAssembly(typeof(LayoutWebClientExtension)).GetName().Name; }
        }

        /// <summary>
        /// Get extension namespace
        /// </summary>
        public override string Namespace
        {
            get { return Constants.Namespace; }
        }

        /// <summary>
        /// Get extension version
        /// </summary>
        public override Version ExtensionVersion
        {
            get { return new Version(FileVersionInfo.GetVersionInfo(Assembly.GetExecutingAssembly().Location).FileVersion); }
        }

        #region WebClientExtension Overrides


        /// <summary>
        /// Gets registered service activators
        /// </summary>
        /// <param name="serviceProvider">service provider</param>
        /// <returns>service type/activator mappings</returns>
        protected override Dictionary<Type, Func<object>> GetServiceActivators(IServiceProvider serviceProvider)
        {
            return new Dictionary<Type, Func<object>>
            {
                  { typeof(ILayoutBPService), () => new LayoutBPService(serviceProvider)}                 
            };
        }

        /// <summary>
        /// Gets registered MVC controller activators
        /// </summary>
        /// <param name="serviceProvider">service provider</param>
        /// <returns>MVC controller type/activator mappings</returns>
        protected override Dictionary<Type, Func<IController>> GetControllerActivators(IServiceProvider serviceProvider)
        {
            return new Dictionary<Type, Func<IController>>
            {
                { typeof(LayoutBusinessProcessController), () => new LayoutBusinessProcessController(serviceProvider) }                
            };
        }

        /// <summary>
        /// Gets resource managers for layout extension
        /// </summary>
        /// <returns></returns>
        protected override List<ResourceManager> GetLayoutExtensionResourceManagers()
        {
            return new List<ResourceManager>
            {
                { Resources.ResourceManager }
            };
        }

        /// <summary>
        /// Gets registered navigator extension
        /// </summary>
        /// <returns>registered navigator extension</returns>
        protected override WebClientNavigatorExtension GetNavigatorExtension()
        {
            var navigatorExtensionInitInfo = new WebClientNavigatorExtensionInitInfo
            {
                Scripts = (ScriptBundle)(new ScriptBundle("~/Content/AcquaintancePanel/Scripts/Bundle")
                .IncludeDirectory("~/Content/AcquaintancePanel/Scripts", "*.js", true)),
                StyleSheets = (StyleBundle)(new StyleBundle("~/Content/AcquaintancePanel/Styles/Bundle")
                .IncludeDirectory("~/Content/AcquaintancePanel/Styles", "*.css", true)),
                ExtensionName = ExtensionName,
                ExtensionVersion = ExtensionVersion
            };

            return new WebClientNavigatorExtension(navigatorExtensionInitInfo);
        }

        #endregion
    }
}