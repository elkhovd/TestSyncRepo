using Docsvision.Platform.Web.Services.Specialized;
using Docsvision.WebClient.Extensibility;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Reflection;
using System.Resources;
using System.Web.Mvc;
using DocsVision.BackOffice.WebClient.Services;
using DocsVision.ApprovalDesigner.CardLib.CardDefs;

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


        #region WebClientExtension Overrides

        protected override Dictionary<Guid, Func<ICardFactory>> GetCardFactories()
        {
            return new Dictionary<Guid, Func<ICardFactory>>
            {
                {CardApprovalStage.ID , () => new  ApprovalStageCardFactory() }
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

        #endregion
    }
}