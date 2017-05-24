using Docsvision.Platform.Web.Services.Specialized;
using Docsvision.WebClient.Extensibility;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Reflection;
using System.Resources;
using System.Web.Mvc;

namespace CreateCardDialogServerExtension
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
            get { return Constants.LayoutNamespace; }
        }

        /// <summary>
        /// Get extension version
        /// </summary>
        public override Version ExtensionVersion
        {
            get { return new Version(FileVersionInfo.GetVersionInfo(Assembly.GetExecutingAssembly().Location).FileVersion); }
        }

        protected override WebClientNavigatorExtension GetNavigatorExtension()
        {
            var navigatorExtensionInitInfo = new WebClientNavigatorExtensionInitInfo
            {
                ExtensionName = ExtensionName,
                ExtensionVersion = ExtensionVersion,
                Namespace = Namespace
            };

            var navigatorExtension = new WebClientNavigatorExtension(navigatorExtensionInitInfo);

            var cardTypes = new List<CardTypeWeb>
            {
                // Должен быть указан маршрут для создания карточки.  
                new CardTypeWeb("ApprovalStage", "Stage", "НЕ ИСПОЛЬЗЕТСЯ В ЛК8", new Guid("0DB13C90-21B6-49D8-9070-8144DF97552A"), "НЕ ИСПОЛЬЗУЕТСЯ ВООБЩЕ", "ApprovalStage_CardCreateDisplay",
                    Resources.ResourceManager) { CssClass = "approval-stage"}
            };


            navigatorExtension.CardTypes.AddRange(cardTypes);

            return navigatorExtension;
        }


        #region WebClientExtension Overrides


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

        #endregion
    }
}