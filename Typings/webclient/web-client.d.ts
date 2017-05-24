/// <reference path="jquery.d.ts" />
/// <reference path="jquery.cookie.d.ts" />
/// <reference path="jquery.validation.d.ts" />
/// <reference path="jquery-validation-unobtrusive.d.ts" />
/// <reference path="sammyjs.d.ts" />
/// <reference path="extenders.d.ts" />
declare namespace WebClient {
    class CardInfoModel {
        CadId: string;
        Timestamp: string;
    }
}
declare namespace WebClient {
    enum CardType {
        Document = 0,
        Task = 1,
        GroupTask = 2,
        Unknown = 4,
    }
}
declare namespace WebClient {
    class DateTimeFormat {
        Date: string;
        Time: string;
        readonly DateTime: string;
    }
}
declare namespace WebClient {
    enum DeviceType {
        Desktop = 0,
        Smartphone = 1,
        Tablet = 2,
    }
}
declare namespace WebClient {
    class EncryptedInfo {
        private thumbprint;
        private attirbutes;
        private signedFiles;
        constructor(thumbprint: string);
        readonly Thumbprint: string;
        readonly Attirbutes: Array<EncryptedAttribute>;
        SignedFiles: any;
    }
    class EncryptedAttribute {
        private name;
        private value;
        private oid;
        constructor(oid: string, value: string);
        readonly Oid: string;
        readonly Name: string;
        readonly Value: string;
    }
}
declare namespace WebClient {
    enum ErrorNotificationType {
        Success = 0,
        Warning = 1,
        Error = 2,
    }
}
declare namespace WebClient {
    enum FolderStyles {
        None = 0,
        FolderView = 1,
        FolderCard = 2,
        FolderURL = 4,
        FolderDigest = 8,
        All = 15,
    }
}
declare namespace WebClient {
    class FolderUnreadRequest {
        Id: string;
        Type: string;
        Count: string;
        SearchId: string;
    }
}
declare namespace WebClient {
    class FolderViewRequestViewModel {
        private folderId;
        private folderUri;
        private queryId;
        private viewid;
        private searchId;
        private sourceType;
        private viewSourceId;
        private folderType;
        private searchContextOption;
        private fullTextFilter;
        private querySearchId;
        hasSearchParametrs: boolean;
        parameters: any;
        PageNumber: string;
        SortedColumnName: string;
        IsDescending: string;
        oldStoreId: string;
        RefreshView: boolean;
        constructor();
        readonly FolderType: NavigatorFolderType;
        FolderId: string;
        ViewId: string;
        SearchContextOption: string;
        FullTextFilter: string;
        ViewSourceId: string;
        QuerySearchId: string;
        SearchId: string;
        GetFolderData(element: HTMLElement): void;
    }
}
declare namespace WebClient {
    class GroupTaskCardUpdateModel {
        TaskGroupId: string;
        PerformerId: string;
        Name: string;
        Description: string;
        StartDate: string;
        EndDate: string;
        ControlDate: string;
        Duration: string;
        ExecutionType: string;
        OnControl: boolean;
        ControllerId: string;
        ControlHour: string;
        RequiresAcceptance: boolean;
        IsNew: boolean;
        Timestamp: string;
        KindId: string;
        IsStartTask: boolean;
        ParentCardKey: ParentCardKey;
        DocumentsId: Array<string>;
        PerformerSettingUpdateModels: Array<PerformerSettingUpdateModel>;
    }
    class ParentCardKey {
        CardId: string;
        CardTypeId: string;
    }
    class PerformerSettingUpdateModel {
        PerformerId: string;
        StartDate: string;
        EndDate: string;
        Duration: string;
        Description: string;
    }
}
declare namespace WebClient {
    interface IFileSignInteractionModel {
        documentId: string;
        getTimestamp: () => number;
        setTimestamp: (timestamp: number) => void;
        getFiles: () => IFileSignInfo[];
        signButton: HTMLElement;
        viewSignButton: HTMLElement;
        beforeSignCallback: () => JQueryDeferred<any>;
        beforeViewSignCallback: () => JQueryDeferred<any>;
        afterSignCallback: Function;
        afterViewSignCallback: Function;
    }
}
declare namespace WebClient {
    interface IFileSignInfo {
        fileId: string;
        versionId: string;
        fileCardId: string;
    }
}
declare namespace WebClient {
    class ModalWindowParams {
        modalType: ModalWindowType;
        modalClassName: string;
        content: string;
        contentClassName: string;
        headerText: string;
        buttonsClassName: string;
        buttonsReverse: boolean;
        buttonOkClassName: string;
        buttonOkShow: boolean;
        buttonOkText: string;
        buttonOkFunction: Function;
        buttonCancelClassName: string;
        buttonCancelShow: boolean;
        buttonCancelText: string;
        buttonCancelFunction: Function;
        buttons: Array<ModalButton>;
        replaceDefaultButtons: boolean;
        beforeShowCallback: Function;
        afterShowCallback: Function;
        beforeCloseCallback: Function;
        closingCallback: () => JQueryDeferred<any>;
        afterCloseCallback: Function;
    }
    class ModalButton {
        buttonClassName: string;
        buttonShow: boolean;
        buttonText: string;
        buttonFunction: Function;
        constructor(text: string, callback: Function, className?: string, visible?: boolean);
        Visible: boolean;
        Text: string;
        CssClassName: string;
        Callback: Function;
        static DefaultButtonOK(text: string, callback: Function): ModalButton;
        static DefaultButtonCancel(text: string, callback: Function): ModalButton;
    }
}
declare namespace WebClient {
    enum ModalWindowType {
        Info = 0,
        Warning = 1,
        Error = 2,
        Default = 3,
    }
}
declare namespace WebClient {
    class NavigatorFolderRequest {
        private folderId;
        private folderType;
        constructor(id: string, folderType: NavigatorFolderType);
        readonly FolderId: string;
        readonly FolderType: NavigatorFolderType;
    }
}
declare namespace WebClient {
    enum NavigatorFolderType {
        UserFolder = 0,
        ServiceFolder = 1,
    }
}
declare namespace WebClient {
    enum RequestReadyStateType {
        Unitialized = 0,
        Loading = 1,
        Loaded = 2,
        Interactive = 3,
        Complete = 4,
    }
}
declare namespace WebClient {
    enum SearchContextOption {
        None = -1,
        CurrentFolder = 0,
        CurrentFolderAndSubFolders = 1,
        SearchInSearchResults = 2,
        EveryWhere = 3,
    }
}
declare namespace WebClient {
    enum SourceFolderType {
        Generic = 0,
        Folder = 1,
        VirtualFolder = 2,
    }
}
declare namespace WebClient {
    class StorageSetting {
        Name: string;
        Value: any;
    }
}
declare namespace WebClient {
    enum TaskExecutionType {
        Serial = 0,
        Parallel = 1,
    }
}
declare namespace WebClient {
    class ViewFilterSetting {
        private id;
        currentPage: number;
        sortingColumn: string;
        sortIsDesc: boolean;
        constructor();
    }
}
declare namespace WebClient {
    class Constants {
        static DeviceTypePrefixName: string;
        static HeaderWrapperElementId: string;
        static HeaderFolderNameElementId: string;
        static CompanyLogoElementId: string;
        static SidebarButtonCloseId: string;
        static SidebarButtonPinnId: string;
        static SidebarButtonOpen: string;
        static SidebarElementId: string;
        static SidebarButtonSwitchViewId: string;
        static FilePreviewElementId: string;
        static FileLinkClassName: string;
        static CommandsElementId: string;
        static SearchPanelId: string;
        static SearchInputId: string;
        static SearchTextInputId: string;
        static SearchClearButtonId: string;
        static SearchMobileContainerId: string;
        static SearchButtonId: string;
        static SearchDropdownId: string;
        static FoldersContainerId: string;
        static FoldersContainerCalssName: string;
        static UsersFoldersContainerElementId: string;
        static UsersFoldersContainerClassName: string;
        static FolderItemWrapperClassName: string;
        static FolderPanelElementId: string;
        static FolderPanelClassName: string;
        static ResourcesGlobalContainterId: string;
        static ProgressBarElementId: string;
        static ProgressBarSpinnerElementId: string;
        static HeaderAddItemButton: string;
        static HeaderBackButton: string;
        static GridContainerId: string;
        static GridTableId: string;
        static GridDefaultPageSize: number;
        static MobileGridDefaultSize: number;
        static GridFilterDivId: string;
        static GridFilterContainerId: string;
        static SelectViewsContainerId: string;
        static SelectViewsBtnId: string;
        static SelectViewsListId: string;
        static NavigatorButtonsClass: string;
        static NavigatorPanelBtnTitleClass: string;
        static UserMenuId: string;
        static UserMenuButtonId: string;
        static UserMenuAboutButtonId: string;
        static UserMenuExitButtonId: string;
        static UserMenuChangeUserButtonId: string;
        static DashboardMoreFolderId: string;
        static DashboardLastFoldersId: string;
        static DashboardRecentCardsId: string;
        static MobileSizeBorder: number;
        static GuidEmpty: string;
        static NewDigestId: string;
        static SearchResultsFolder: string;
        static SizeInKBytes: number;
        static SizeInMBytes: number;
        static SizeInGBytes: number;
        static DocumentCard: string;
        static TaskCard: string;
    }
}
declare namespace WebClient {
    class Sidebar {
        private model;
        private content;
        private btnPinn;
        private btnOpen;
        private linkSwitchView;
        private isPinned;
        private isClosed;
        private canResize;
        private maxResizeWidth;
        private minResizeWidth;
        private deviceType;
        private isBusy;
        private traceProvider;
        constructor();
        readonly IsClosed: boolean;
        readonly CanResize: boolean;
        IsPinned: boolean;
        DeviceType: DeviceType;
        readonly Model: HTMLElement;
        readonly MinResizeWidth: number;
        readonly MaxResizeWidth: number;
        close(): void;
        open(): void;
        SaveSettings(): void;
        LoadSettings(): void;
        private SwitchView();
        private Initialize();
        private AddHideOnDocumentClickEvent();
        private toogle(element, hide?, isInline?);
        ResetSettings(): void;
        private AddSidebarClick();
        AddFoldresEvent(e: Event): void;
        private ServiceFolderClick(element);
        ReInitialize(): void;
    }
}
interface ActiveXObject {
    new (s: string): any;
}
declare var ActiveXObject: ActiveXObject;
declare namespace WebClient {
    class Helpers {
        constructor();
        static GetTarget(event: Event): HTMLElement;
        static GetDateSeparator(): string;
        static HideCaption(): void;
        static ShowCaption(): void;
        static SetCaption(element: HTMLElement): void;
        static SetCaptionColor(element: HTMLElement): void;
        static GetFolderElement(folderId: string): HTMLElement;
        static GetKindNameFromFullString(string: string): string;
        static GetFileExtension(fileName: string): string;
        static SetNumericControl(control: HTMLElement, callback?: Function): void;
        static InsertAfter(newElement: any, targetElement: any): void;
        static CapitalizeFirstLatter(str: string): string;
        private toogle(element, hide?, isInline?);
        static RunScripts(element: HTMLElement): void;
        private static RunScriptsHelper(element);
        static DisplayFileSize(fileSize: number): string;
        static CheckCardModified(cardId: string, timestamp: string, callback?: Function): void;
        static CheckCardLocked(cardId: string, callback: Function): void;
        static CheckKindCreatable(cardTypeId: string, cardKindId: string, callback: Function): void;
        static ShowFilePreview(url: any, title: any, delCommentUrl?: string, editCommentUrl?: string): void;
        static ShowFilePreviewEx(previewContent: any, title: any, delCommentUrl?: string, editCommentUrl?: string): void;
        static ValidateForm(form: HTMLFormElement): boolean;
        static FindParentElement(element: HTMLElement, parentClassName: string): HTMLElement;
        static SupressEvents(e: Event): void;
        static FloatToCultureStr(num: number, precision?: number): string;
        static ParseFloatCultureStr(str: string): number;
        private static LegacyValidation(field);
        static Base64Encode(arrayBuffer: any): string;
        static Base64ArrayBuffer(arrayBuffer: any): string;
        static IsEdge(): boolean;
        static SetTooltip(element: HTMLElement): void;
        static SetTooltipFor(element: HTMLElement, text: string, extraOptions?: Object): void;
        static DestroyTooltips(element: HTMLElement): void;
        static ClearTips(): void;
        static LocationReload(): void;
        static GetCurrentDeviceType(): DeviceType;
        static GetOriginalDeviceType(): DeviceType;
        static GetIEVersion(): {};
        static CallCancelableIf(callback: Function, ...args: any[]): JQueryDeferred<any>;
        static CallIf(callback: Function, ...args: any[]): any;
        static WhenAll(deferreds: JQueryDeferred<any>[]): JQueryDeferred<any>;
    }
    class Animate {
        static SetEndCallback(htmlElement: HTMLElement, func: any): void;
    }
    class LocalStorage {
        static SupportsLocalStorage(): boolean;
        static SaveData(id: string, obj: any): boolean;
        static LoadData(id: string): any;
    }
    class SessionStorage {
        static SupportsSessionStorage(): boolean;
        static SaveData(id: string, obj: any): boolean;
        static LoadData(id: string): any;
    }
    class ErrorHelper {
        static ThrowIfElementNotFound(htmlElement: HTMLElement): void;
        static ThrowIfElementIdNotFound(elementWithId: string): void;
        static ThrowIfNull(request: XMLHttpRequest): void;
        static RequestNotSupported(): void;
        static RequestError(errorText: string): void;
        static CertificateNotFound(errorText: string): void;
    }
    class ResourcesHelper {
        static ResourcesContainerName: string;
        static GetGlobalResource(resourceName: string): string;
        static SetGlobalResource(resourceName: string, resourceValue: any): void;
        static GetResource(container: HTMLElement, resourceName: string): string;
    }
    class ProgressOverlay {
        private progressOverlay;
        private overlayTimeout;
        private static OverlayElementId;
        Timeout: number;
        ShowOverlay(): void;
        HideOverlay(): void;
        private DestroyOverlay();
        private GetOrCreteateOverlay();
    }
    type RequestCustomCompleteCallback = (request: XMLHttpRequest, callerCallback: Function) => void;
    enum LoadingBarValues {
        Zero = 0,
        OneFourth = 25,
        Half = 50,
        AfterHalf = 60,
        ThreeFourth = 75,
        Full = 100,
    }
    class Request {
        private static LoadingBarElementId;
        private static LoadingBarWrapperElementId;
        static ContentTypeForm: string;
        private isAsync;
        private responseType;
        private contentType;
        private dataType;
        private isShowOverlay;
        private isShowLoadingBar;
        private customErrorCallback;
        private customCompleteCallback;
        private progressOverlay;
        private isForm;
        private noCache;
        constructor();
        IsAsync: boolean;
        NoCache: boolean;
        ContentType: string;
        CustomErrorCallback: Function;
        CustomCompleteCallback: RequestCustomCompleteCallback;
        ResponseType: string;
        IsShowOverlay: boolean;
        IsShowLoadingBar: boolean;
        ShowLoadingBar: boolean;
        private SetLoadingBar(value);
        DataType: string;
        PostData(url: string, requestData: any, callback: Function): void;
        PostDataEx(url: string, requestData: any): Promise<any>;
        GetData(url: string, requestData: any, callback: Function): void;
        private ProcessRequest(url, requestData, callback, method);
        private ProcessRequestEx(url, requestData, method);
        private static ParseError(httpRequest, customErrorCallback, customCriticalErrorCallback?);
        private static GetRequestInstance();
    }
    class UnreadCount {
        private static UpdateDelay;
        private static AutoUpdateInterval;
        private updateFoldersLoopTimerId;
        private updateFoldersTimeoutTimer;
        private updateFoldersTimerId;
        private isProcessing;
        constructor();
        private Initialize();
        private GetRequestsForSend();
        private ProcessResponse(response);
        private UpdateFolders();
    }
    class TabsHelper {
        static AddTabEvents(tabElement: HTMLElement): void;
    }
    class CardCommandButtonsHelper {
        static AddRefreshButtonEvents(selectorQuery: string): void;
        static AddEditButtonEvents(selectorQuery: string, widgetId?: string): void;
        static AddDeleteButtonEvents(selectorQuery: string, widgetId?: string): void;
    }
    class DateTimeHelper {
        static GetLocaleFormat(locale: string): DateTimeFormat;
    }
    class EventHelper {
        static Change(element: HTMLElement): void;
        static WindowResize(): void;
    }
}
declare namespace WebClient {
    class Grid {
        private targetElement;
        private rootElement;
        private tableHeader;
        private tableBody;
        private gridFooter;
        private isMobileBuilt;
        private isDesktopBuilt;
        private htmlBuilder;
        private model;
        options: GridOptions;
        private readonly IsMobileBuilt;
        private readonly IsDesktopBuilt;
        constructor(element: HTMLElement, model: any, options: GridOptions, htmlBuilder: IGridHtmlBuilder);
        private initialize();
        private refreshLayoutToMakeIEBugsRunAway(mainTable);
        private buildSwitcher(compact, wrap);
        rebuildIfNeeded(): void;
        applyFilters(): void;
    }
}
declare namespace WebClient {
    class App {
        private locale;
        private aggregatorUpdateDelay;
        private aggregatorAutoUpdateInterval;
        private keepAlivePollingInterval;
        private fullTextSearchEnabled;
        private deviceType;
        private defaultDeviceType;
        private installedCSP;
        private sidebar;
        private searchPanel;
        private sammyHelper;
        private navBar;
        private request;
        private addItemModal;
        private folders;
        private folderSettings;
        private folderViews;
        private userfolders;
        private unreadCounts;
        private canPromise;
        private static isIE10;
        private static routeTimestampVal;
        private static isMobileSafary;
        private traceProvider;
        static Instance: App;
        constructor();
        CurrentFolderUri: string;
        LastSearchRequest: string;
        UserMenu: UserMenu;
        readonly Sidebar: Sidebar;
        readonly FolderViews: FolderViews;
        readonly SearchPanel: SearchPanel;
        readonly NavBar: NavBar;
        readonly CompanyLogo: HTMLElement;
        readonly FullTextSearchEnabled: boolean;
        readonly SammyHelper: SammyHelper;
        readonly UserFolders: UsersFolders;
        readonly UnreadCounts: UnreadCount;
        readonly DeviceType: DeviceType;
        readonly DefaultDeviceType: DeviceType;
        readonly FolderSettings: FolderSettings;
        InstalledCSP: boolean;
        static readonly IsIE10: boolean;
        static readonly RouteTimestamp: number;
        static UpdateRouteTimestamp(): void;
        static readonly IsMobileSafary: boolean;
        initialize(): void;
        GoToDashBoard(refresh?: boolean): void;
        HideLogo(): void;
        ShowLogo(): void;
        ResetSettings(): void;
        private AddBackButtonEventClick(buttonId);
        private DetectBrowsers();
    }
}
declare namespace WebClient {
    class ApplicationInfo {
        constructor();
    }
}
declare namespace WebClient {
    class CommentVersionDialog {
        private dialog;
        private dialogParams;
        private url;
        private postFormUrl;
        private deleteUrl;
        private callbacks;
        private addCommentsEnabled;
        private onClosedCallback;
        private fileComment;
        private traceProvider;
        constructor();
        FormActionUrl: string;
        DeleteUrl: string;
        AddCommentsEnabled: boolean;
        OnClosedCallback: (dialog: CommentVersionDialog) => void;
        readonly CommentsChanged: boolean;
        private Initialize();
        ShowDialog(item: Element): void;
        ShowDialogEx(isPreview: string, cardId: string, fileCardId: string, timestamp: string, versionId: string, callbacks?: IFileCommentCallbacks): void;
        private SaveButtonEventHandler(dialog);
        private EnableAddComment(enable);
    }
}
declare namespace WebClient {
    enum SignatureItemType {
        MainFileSignaturePartType = 0,
        MainFileWithContentSignaturePartType = 1,
        DocumentFieldsSignaturePartType = 2,
    }
    class Crypto {
        static LabelOIDAttirbute: string;
        static ProviderName: string;
        static ProviderType: string;
        static CAPICOM_CERT_INFO_TYPE_SUBJECT_SIMPLE_NAME: number;
        static CAPICOM_CERT_INFO_TYPE_ISSUER_SIMPLE_NAME: number;
        static CAPICOM_CURRENT_USER_STORE: number;
        static CAPICOM_MY_STORE: string;
        static CAPICOM_STORE_OPEN_MAXIMUM_ALLOWED: number;
        static CAPICOM_CERTIFICATE_FIND_SUBJECT_NAME: number;
        static CAPICOM_CERTIFICATE_FIND_SHA1_HASH: number;
        static CADESCOM_BASE64_TO_BINARY: number;
        static CADESCOM_CADES_BES: number;
        static CADESCOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_NAME: number;
        static CAPICOM_AUTHENTICATED_ATTRIBUTE_DOCUMENT_DESCRIPTION: number;
        static CADESCOM_ATTRIBUTE_OTHER: number;
        private static CertListContainerPrefix;
        private widgetId;
        private widget;
        private certListElement;
        private static async_code_included;
        private static async_Promise;
        private static async_resolve;
        constructor();
        static include_async_code(): void;
        static GetCertificateByThumbprint(thumbprint: any): any;
        static GetCertificateInfoByThumbprint(thumbprint: any): any;
        private static GetCertificateByThumbprint_NPAPI(thumbprint);
        static CheckForPlugIn(): any;
        static SignFilesWithCertificate(encryptedInfo: EncryptedInfo, files: NodeListOf<Element>): Promise<any>;
        static SignFilesWithCertificateEx(encryptedInfo: EncryptedInfo, files: IFileSignInfo[]): Promise<any>;
        static SignData(encryptedInfo: EncryptedInfo, dataToSign: any): any;
        private static Verify(sSignedMessage, dataToVerify);
        static GetCertsList(): Promise<any>;
        private static GetCertsList_NPAPI();
        private static CheckForPlugIn_NPAPI();
        private static GetBlobInBase64(fileId);
        static VerifySign(signHash: any, fileId: any): Promise<{}>;
        static GetPluginInfo(): any;
        static SetPluginInfo_NAPI(): void;
        private static SignData_NPAPI(encryptedInfo, dataToSign);
    }
}
declare namespace WebClient {
    class Dashboard {
        static AddLinkClickEvents(): void;
        static AddMoreButtonEventHandler(): void;
        static LoadLastUserFolders(): void;
        static SaveLastUserFolder(folderId: string, folderName: string): void;
        static RemoveFromLastUserFolder(folderId: string): void;
        private static GetUserSettings();
        static GetUnreadCountersFromSession(): void;
    }
}
declare namespace WebClient {
    class FileComment {
        private fileCommentContainer;
        private buttonsContainer;
        private errorSpan;
        private url;
        private traceProvider;
        private callbacks;
        private commentsChanged;
        private commentEditArea;
        constructor(root: HTMLElement, buttonsContainer: HTMLElement, headerTitle: string, callbacks?: IFileCommentCallbacks);
        private Init();
        SetPostUrl(value: string): void;
        SetDeleteUrl(value: string): void;
        readonly CommentsChanged: boolean;
        SaveComment(): void;
        private readonly RequestData;
        private readonly TextArea;
        EditMode: boolean;
        private Refresh(requestData);
        private InitItemEventHandlers(container);
        private EditCommentEventHandler(item);
        private GetRemoveData(item);
        private RemoveCommentEventHandler(item, requestData);
        private ScrollToButton();
    }
}
declare namespace WebClient {
    class FilePreview {
        private static PageButtonCssClass;
        private static APagesCssClass;
        private static InputPagesCssClass;
        private static PageViewId;
        private static CommentsContainerCssClass;
        private filePreviewContainer;
        private url;
        private urlPage;
        private pageIndex;
        private pageCount;
        private fileComment;
        private traceProvider;
        constructor(rootId: string, url: string, pageIndex: number, pageCount: number, urlPage?: string);
        Init(): void;
        private addScaleParameterToPageUrl(url);
        private PageButtonEventClick(item);
        private PageLinkEventClick(item);
        private PageInputEventsInit(item);
        private LoadPage();
        private PageViewLoadEventHandler(pageView);
    }
}
declare namespace WebClient {
    class FileSign {
        private static SignAllButton;
        private static SignLogButton;
        private filePanel;
        private crypto;
        private traceProvider;
        private interactionModel;
        constructor(filePanel: Element, interactionModel?: IFileSignInteractionModel);
        private Initialize();
        ShowSignDialog(item: HTMLElement, url: any, requestData: any): void;
        private AddSelectedSignatureRowEventHandler(rows, context);
        private ProcessSigns(dialog);
        private ShowSignLogDialog(item);
        private GetDialogParams(item);
        private ShowDialog(dialogParams, response);
        protected SignData(selectedThumbprint: string, dialog: ModalWindow): Promise<any>;
        private static AttachSign(dialog, encryptedInfo, interactionModel?);
        static ShowSignWarningDialog(okFunction: Function): void;
    }
}
declare module WebClient {
    class FolderPanel {
        private static FolderTitleElementId;
        private static FolderPanelWrapperElementId;
        private static FolderPanelHeaderElementId;
        private static BackButtonElementId;
        static FolderItemClassName: string;
        private parentFolder;
        private folderPanel;
        private isOpened;
        private traceProvider;
        constructor();
        Show: boolean;
        Expand(element: Element): void;
        Close(): void;
        private ReparentFolders(items, targetContainer);
        private AddBackEventClick();
    }
}
declare namespace WebClient {
    class Folders {
        static SetSelectedFolder(folder: HTMLElement): void;
        static SetCurrentSelectedFolder(folder: HTMLElement): void;
        static ExpandFolder(element: HTMLElement): void;
        static AddServiceFolderEventClick(elements: NodeListOf<Element>): void;
        static ExpandAllFoldersTo(folderElem: HTMLElement): void;
        private static ToggleServiceFolder(element);
        private static ExpandServiceFolder(element);
        private static ExpandUserFolder(element);
        static GetFolderType(element: HTMLElement): NavigatorFolderType;
        static ClearSelectedFolders(): void;
        static SaveFolderSettings(folderId: any, settingName: any, value: any): void;
        static LoadFolderSetting(folderId: any, settingName: any): any;
        static GetViewsListForFolder(folderId: string): JSON;
    }
}
declare module WebClient {
    class FolderSettings {
        private static FolderSettingsElementId;
        private static FolderSettingsContainerElementId;
        private static AttachFolderElementId;
        private static DetachFolderElementId;
        private static ResotoreFolderElementId;
        private static BackButtonElementId;
        private static SaveButtonElementId;
        static SettingButtonElementId: string;
        private static SettingMenuClassName;
        private isSettginsMode;
        private isDeletedMode;
        private isRestoreMode;
        private traceProvider;
        private isIE10;
        private rowContent;
        constructor();
        private Initialize();
        private ShowSettings();
        CheckIsDeletedMode(): boolean;
        IsDeletedMode: boolean;
        RefreshSize(): void;
        private AddDetachButtonClick();
        private AddAttachUserFolderButtonEventClick();
        private MarkAsDeletedFolder(e);
        private AddFolderSelectedButtonClick(items);
        private AddSaveButtonClick();
        private AddBackButtonClick();
        private DetachFolders(container, items);
        private AddSettingButtonClick();
        private SettingsMenuHideEventHandler();
        private SettingsMenuHide(e);
        private RestoreFolderSettingsEventHandler();
        private ReInitialize();
    }
}
declare namespace WebClient {
    class FolderViews {
        private selectViewBtnId;
        private viewsContainerId;
        private selectViewListId;
        private folderId;
        private viewSourceId;
        private searchId;
        private currentViewId;
        private currentViewName;
        private views;
        private isListOpened;
        private traceProvider;
        private readonly SelectViewBtn;
        private readonly SelectViewList;
        private readonly SelectViewContainer;
        constructor(viewsContainerId: string, selectViewsBtnId: string, selectViewListId: string);
        readonly HasViews: boolean;
        Build(folderId: string, viewSourceId: string, searchId: string, currentViewId?: string, currentViewName?: string): void;
        Destroy(): void;
        private Initialize();
        private BuildViewsList();
        SetCurrentView(currentView: string): void;
        private selectView(element);
        private LoadView(viewRequestData);
        private checkExternalClick(e);
    }
}
declare namespace WebClient {
    interface IFileCommentCallbacks {
        beforeAddCallback: (commentText: string) => JQueryDeferred<any>;
        beforeDeleteCallback: (commentId: string) => JQueryDeferred<any>;
        afterAddCallback: (commentText: string) => void;
        afterDeleteCallback: (commentId: string) => void;
    }
}
declare namespace WebClient {
    class ModalWindow {
        private traceProvider;
        private params;
        private overlay;
        private modal;
        private modalHeader;
        private modalContent;
        private modalOkButton;
        private modalCancelButton;
        private modalCloseButton;
        private buttonsDiv;
        private content;
        private isOpened;
        constructor(params: ModalWindowParams);
        readonly IsOpened: boolean;
        readonly ModalElement: HTMLElement;
        readonly ModalContentElement: HTMLElement;
        readonly OkButtonElement: HTMLElement;
        readonly CancelButtonElement: HTMLElement;
        Show(): void;
        Hide(whithCallbacks?: boolean): void;
        HideOverlay(): void;
        private Initialize();
        private CreateOverlay();
        private CreateModal();
        private CreateModalContent();
        private CreateModalCloseButton();
        private CreateModalHeader();
        private CreateModalButtonsDiv();
        private CreateModalOkButton();
        private CreateModalButton(btn);
        private CreateModalCancelButton();
        private Destroy();
        static ShowErorDialog(message: string): void;
        static ShowConfirmDialog(message: string, yesButton?: Function, cancelButton?: Function): void;
        static ShowInformationDialog(message: string, headerText?: string): void;
        static ShowWarningDialog(message: string, headerText?: string, okButton?: Function, cancelButton?: Function): void;
    }
}
interface String {
    format: (...codes: any[]) => string;
    contains: (substr: string) => boolean;
}
interface Array<T> {
    equals: (array: any) => boolean;
    containsArrayElement: (element: T) => number;
}
declare function UploadFile(formName: Element, filesContainer: string, onSuccess: Function, onFileAdded: Function, dropZoneId: string): void;
declare function CreateTaskIntervalManager(): TaskIntervalManager;
declare function CreateTaskInterval(): TaskInterval;
declare function CheckForPlugIn_Async(): Promise<any>;
declare function GetCertsList_Async(): any;
declare function GetCertificateByThumbprint_Async(thumbprint: any): any;
declare function SignData_Async(certThumbprint: any, dataToSign: any): any;
declare function Verify_Async(sSignedMessage: any, dataToVerify: any): any;
declare function SetPluginInfo_Async(): void;
declare var cadesplugin: any;
declare var iNoBounce: any;
declare function HackTouch(): any;
declare namespace WebClient {
    class NavBar {
        private TabsMobileContainerId;
        private NavBarId;
        private NavBarButtonsId;
        private mode;
        private modeLock;
        SetMode(navBarMode: NavBarMode): void;
        GetMode(): NavBarMode;
        readonly ModeLocked: string;
        LockMode(lockComment: string): void;
        ReleaseModeLock(): void;
        AddMobileTabs(tabsElement: HTMLElement): void;
        HideBackButton(): void;
        ShowBackButton(): void;
        OnDashboardLoad(): void;
        OnGoToRoute(): void;
    }
}
declare namespace WebClient {
    enum NavBarMode {
        NavButtons = 0,
        SearchMobile = 1,
        TabsMobile = 2,
        SelectView = 3,
    }
}
declare namespace WebClient {
    class NewCardDialog {
        static AddNewItemEventClick(buttonId: string): void;
        private static GetItemKindsEventClick(button, parentModal);
        private static GetRoute(cardType, href, kindId, folderId, createInFolder, isLayoutAvailable, isTemplate);
    }
}
declare namespace WebClient {
    class SammyHelper {
        private sammy;
        private requestData;
        private searchPanel;
        private traceProvider;
        private static MainContentElementId;
        private static MainContentElementDefaultClasses;
        private mainContentChangingListeners;
        constructor(searchPanel: SearchPanel);
        goTo(route: string, refresh?: boolean, callback?: Function): void;
        GetLocation(): string;
        goToRoute(context: any): void;
        private ListCards(folderId, folderUri, folderElement);
        goToDashboard(context: any): void;
        refresh(callback?: Function): Sammy.Application;
        LoadContent(url: string, requestData: any, contentElement: HTMLElement, showOverlay?: boolean, callback?: Function): void;
        LoadMainContent(url: string, requestData: any, showOverlay?: boolean, callback?: Function): void;
        LoadContnentFromRoute(cardId: any): void;
        SetMainContentElement(elem: HTMLElement, doneCallback: Function, newContentCssClass?: string): void;
        SetMainContentHtml(html: string, doneCallback: Function, newContentCssClass?: string): void;
        PrepareMainContentChange(): JQueryDeferred<any>;
        AddMainContentChangingListener(listener: () => JQueryDeferred<any>): void;
        RemoveMainContentChangingListener(listener: () => JQueryDeferred<any>): void;
        AddMainContentEventListener(eventType: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
        RemoveMainContentEventListener(eventType: string, listener?: EventListenerOrEventListenerObject, useCapture?: boolean): void;
        private LoadData(url, requestData, showOverlay, callback);
        private SetContent(contentElement, html);
        private OnMainContentChanging();
        private ClearAndGetMainContent();
        LoadCardContent(uri: string): void;
        SetTopPanelCardStyle(cardTypeWeb: any): void;
        private ClearFromFolderView();
        private Initialize();
    }
}
declare namespace WebClient {
    class SearchPanel {
        private isNotOpened;
        private fullTextSearchEnabled;
        private dropdown;
        private isMobile;
        private timer;
        private traceProvider;
        private hidden;
        private prevNavBarMode;
        constructor();
        SearchStoreId: string;
        DeviceType: DeviceType;
        IsDashboard: boolean;
        IsSearchResults: boolean;
        readonly Dropdown: SearchDropdown;
        readonly IsNotOpened: boolean;
        readonly FullTextSearchEnabled: boolean;
        Hide(): void;
        Show(): void;
        SearchText: string;
        Search(refresh?: boolean): void;
        Clear(): void;
        Rebuild(): void;
        private OnExpaned();
        private OnClosed();
        private readonly SearchButton;
        readonly SearchInput: HTMLElement;
        readonly SearchTextInput: HTMLInputElement;
        private readonly SearchClearButton;
        private Initialize();
        private onSearchAreaSelected(oldVal, newVal);
        private AddSearchInputClickEvent();
        private AddSearchInputMissClickEvent();
        private AddSearchButtonClickEvent();
        private readonly Expanded;
        private Toggle();
        private UpdateCaption();
        private AddClearButtonClickEvent();
        private AddOnTextInputEvent();
        private ToggleClearButton();
        private CheckFullTextSearchAvailability();
    }
}
declare namespace WebClient {
    class SearchParametrsDialog {
        private static DialogElementId;
        private folderViewRequestViewModel;
        private dialog;
        private dialogParams;
        private url;
        private traceProvider;
        constructor(folderViewRequestViewModel: FolderViewRequestViewModel);
        ShowDialog(): Promise<any>;
        private clearBtnClickHandler();
        private afterShowCallback(dialog);
        private SaveParamsInStorage(dialog);
        private LoadParamsFromStorage();
        private GetQueryParameters2(dialog);
        private GetQueryParameters();
    }
}
declare namespace WebClient {
    class SelectCertificateDialog {
        private selectedThumbprint;
        private okButtonFunction;
        private dialogParamsContainer;
        private isSimpleSign;
        private defaultPersonalThumbprint;
        private url;
        private traceProvider;
        constructor(url: string, dialogParamsContainer: HTMLElement);
        ShowDialog(requestData?: any): void;
        readonly SelectedThumbprint: string;
        readonly IsSimpleSign: boolean;
        OkDialogButton: Function;
        ShowSelectCertificateDialog(container: HTMLElement): void;
        private readonly DefaultPersonalThumbprint;
        private GetDialogParams();
        private SetSelectedCertificateDisplayName(element, certificate);
        private SetSingInfoMessage(container, message);
        private FillTableRow(certificate);
        private GetSelectCertificateDialogParams(widget);
        private CheckPersonalCertificate();
        private AddRowHandlers(dialog);
    }
}
declare module WebClient {
    class TraceProvider {
        private static GetTraceSetting();
        static Enabled: boolean;
        private static traceObjects;
        private GetLoggableFunction(func, name);
        AddToTrace(namespaceObject: any): void;
        private static GetClassName(obj);
    }
}
declare namespace WebClient {
    class TrackCardChanges {
        private webClientHub;
        private traceProvider;
        constructor();
        Initialize(): void;
        GetLinkedCardIds(): Array<string>;
        GetMainCardId(): string;
        RefreshPage(): void;
        GetCurrentEmployee(): string;
        private SignalREnabled();
    }
}
declare namespace WebClient {
    class UserMenu {
        private userMenu;
        private userMenuButton;
        private aboutButtons;
        private exitButtons;
        private traceProvider;
        private hideHandler;
        constructor();
        Show(): void;
        UserModal: ModalWindow;
        private Initialize();
        private CloseMenu();
        private onRouteChanges();
        private AddUserMenuButtonEventClick();
        private AddAboutButtonEventClick();
        private AddExitButtonEventClick();
        private AddSidebarUserMenuEventClick();
    }
}
declare module WebClient {
    class UsersFolders {
        private static UserFoldersElementId;
        private static ExpandClassName;
        private static CollapseClassName;
        private static OpenedClassName;
        private static ClosedClassName;
        private selectedFolder;
        private folderPanel;
        private logHelper;
        constructor();
        SelectFolder(element: HTMLElement): void;
        ExpandFolder(folderItem: HTMLElement, onlyExpand?: boolean): void;
        private GetSubFolders(folderId);
        private CollapseFolder(element);
        private Initialize();
        MarkAsDeletedFolder(folderItem: Element): void;
        ReloadUserFolders(): void;
        OpenMyFolder(): void;
        private SelectedFolder;
        private AddMyFolderButtonEventClick();
        UserFolderNameClick(element: HTMLElement, ev: MouseEvent): void;
        readonly FolderPanel: FolderPanel;
        Refresh(): void;
        OpenFoldersAsWebPage(folderUrl: string, headerText: string): void;
    }
}
declare namespace WebClient {
    enum ColumnType {
        Int = 0,
        String = 1,
        Double = 2,
        DateTime = 3,
        Image = 4,
        Boolean = 5,
        Html = 6,
    }
}
declare namespace WebClient {
    enum FormFactor {
        Desktop = 1,
        Mobile = 2,
    }
}
declare namespace WebClient {
    class GridOptions {
        tableClass: string;
        wrapRow: boolean;
        currentPage: number;
        enablePaging: boolean;
        enableSorting: boolean;
        enableGrouping: boolean;
        enableFiltering: boolean;
        enableItemDetails: boolean;
        enableMobileFormat: boolean;
        isMobileFormat: boolean;
        currentMobilePage: number;
        urlGetItemsList: string;
        urlGetItemDetails: string;
        cardSourceId: string;
        folderId: string;
        searchFilter: string;
        filter: any;
        folderHeader: string;
    }
}
declare namespace WebClient {
    interface IGridHtmlBuilder {
        model: any;
        buildTableBody(options: GridOptions, tableBodyContainer: HTMLElement, model: any, callback?: (model: any) => void): void;
        buildTableHeader(options: GridOptions, tableHeaderContainer: HTMLElement, model: any, callback?: (model: any) => void): void;
        buildGridFooter(options: GridOptions, gridFooterContainer: HTMLElement, model: any, callback?: (model: any) => void): void;
        buildFilters(options: GridOptions, model: any): void;
        buildMobileGrid(options: GridOptions, model: any, rootElement: HTMLElement): void;
        applyGridFilter(): void;
    }
}
declare namespace WebClient {
    class MainCardGridHtmlBuilder implements IGridHtmlBuilder {
        private folderId;
        private viewId;
        private allowRowResize;
        private pageSize;
        private dateMinWidth;
        model: any;
        private tableHeaderContainer;
        private tableBodyContainer;
        private gridFooterContainer;
        private mobileGridContainer;
        private rootElement;
        private options;
        private selectedCards;
        private colspanValue;
        private groupColumnList;
        private employeeId;
        private cardShowLink;
        filters: any;
        static RowDefaultHeight: string;
        static DefaultForeColor: string;
        static DefaultBackColor: string;
        private traceProvider;
        constructor(filters: any);
        buildMobileGrid(options: GridOptions, model: any, rootElement: HTMLElement): void;
        private AddDisclosureEvent(arrow, content);
        private AddShowCardMobileEvent(rowEl);
        private destroyMobileGrid();
        private destroyGrid();
        private buildMobilePaging();
        private destroyMobilePaging();
        private AddLoadMoreClick(element);
        private AddPage(model);
        buildTableHeader(options: GridOptions, tableHeaderContainer: HTMLElement, model: any, callback?: (model: any) => void): void;
        buildTableBody(options: GridOptions, tableBodyContainer: HTMLElement, model: any, callback?: (model: any) => void): void;
        buildGridFooter(options: GridOptions, gridFooterContainer: HTMLElement, model: any, callback?: (model: any) => void): void;
        static destroyFilters(): void;
        buildFilters(options: GridOptions, model: any): void;
        private checkExternalClick(e);
        private updateFilters(element, title);
        applyGridFilter(): void;
        private getDateMinWidth();
        private initHeaderCell(cell);
        private getDataFromServer(params, callback, isMobile?);
        private desktopCallback(model);
        private getSelectedFiltersData();
        private getValueByKey(gridItem, key, itemType?);
        private getSortedModel(model, sortingColumnName, isDescending, columnType?);
        private divide(values, groupingColumnName, columnType);
        private getGroups(group, columnNames, columns, level?);
        private buildGroupingBody(body, groups, colspanValue, visibleStringGroupIDs?, groupId?, groupLevelIndent?, groupNamesChain?, isOpen?, groupStorage?);
        private initGroupingElement(element);
        private dotDotDotInit();
        private iniItemSelector(element, itemID);
        private buildPageNavigator(pageCount, currentPage, itemCount);
        private initPageLink(element);
        private activateOneStep(element, isNext);
        private activateCounter(element, pageCount);
        private getPage(pageNumber);
        private getSortingColumn();
        private saveGridState();
        private initRowClick(cardID, element);
        private getPreviewInfoFromServer(id);
    }
}
declare namespace WebClient {
    class AgreementSidebar {
        private static TemplateContentClassName;
        private static AgreementBtnClassName;
        private static CancelBtnClassName;
        private static TemplateSelectClassName;
        private traceProvider;
        private callbacks;
        private agreementStarted;
        SelectingCallbackFunc: (employeeData: IEmployeeItemData) => JQueryDeferred<any>;
        SelectedCallbackFunc: (employeeData: IEmployeeItemData) => void;
        DeletingCallbackFunc: (employeeId: string) => JQueryDeferred<any>;
        DeletedCallbackFunc: (employeeId: string) => void;
        private static SecondStepId;
        private static TemplateSpanId;
        private static SubmitBtnId;
        private rootElement;
        private agreementBtn;
        private templateSelect;
        private templateSpan;
        private sidebarElement;
        private templateContent;
        private submitBtn;
        private sidebar;
        private readonly SelectedTemplate;
        constructor(root: HTMLElement, callbacks?: IAgreementSidebarCallbacks);
        OpenSidebar(): void;
        private Init();
        private LoadTemplateContent();
        private ShowCreateBtn();
        private ParseAgreementParams(formData);
        private SubmitForm();
        private ValidateControls();
    }
}
declare namespace WebClient {
    class DocumentPanel {
        private static FileSettingsCssClass;
        private static FileLinkCssClass;
        private static DocumentUnLinkCssClass;
        private static FileIconCssClass;
        private static AdditionalFileCssClass;
        private static FileOperationCssClass;
        private static VersionCommentCssClass;
        private documentPanel;
        private currentSettings;
        private traceProvider;
        constructor(documentPanelId: string);
        private Initialize();
        private readonly GetDocumentItems;
        private FileOperationWithoutDialog(item);
        private AddFileCommentEventHandler(item);
        private SettingEventHandler(documentItem);
        private DetachDocumentFromTask(documentItem);
        private ShowFileSettingsEventClick(item);
        private ShowFileSettings(item, show?);
        private WrapperEventHandler();
        private SuppressEvents(e);
        private PreviewFileEventHandler(item);
    }
}
declare namespace WebClient {
    class FilePanel {
        private static FileVersionCssClass;
        private static FileSettingsCssClass;
        private static CommandExpandCssClass;
        private static CommandBarCssClass;
        private static FileDeleteOperationCssClass;
        private static FileOperationCssClass;
        private static FileLinkCssClass;
        private static VersionCommentCssClass;
        private static FileOpenCssClass;
        private fileSign;
        private filePanel;
        private selectedElement;
        private currentCommandBar;
        private currentSettings;
        private traceProvider;
        constructor(filePanelId: string);
        private Initialize();
        private PreviewFileEventHandler(item);
        private VersionEventHandler(fileItem);
        private SettingEventHandler(fileItem);
        private ToggleCommandBar(selectedCommandBar?);
        private ClearAllAnimation(commands);
        private CommandExpandEventHandler(item);
        private readonly GetFileItems;
        private SelectEventClick(item);
        private ShowVersions(item, show?);
        private RestoreVersionsExpandedInfo();
        private StoreVersionsExpandedInfo(item, show, append);
        private ResetVersionsExpandedInfo();
        private GetVersionsExpandedInfo();
        private SaveVersionsExpandedInfo(data);
        private GetLocalStorageId();
        private ShowFileSettingsEventClick(item);
        private ShowFileSettings(item, show?);
        private DeleteFileEventHandler(item);
        private FileOperationWithoutDialog(item);
        private AddFileCommentEventHandler(item);
        private WrapperEventHandler();
        private OpenEventHandler(item);
        private SuppressEvents(e);
    }
}
declare namespace WebClient {
    class FolderTree {
        static DefaultContainerClassName: string;
        protected TreeContainerClassName: string;
        protected url: string;
        protected ExpandFolderFunction: Function;
        protected OpenFolderFunction: Function;
        protected AfterFolderSelect: Function;
        protected ExludeSearchParamFoldes: boolean;
        private lastSelectedFolder;
        constructor();
        protected SelectTreeFolder(element: HTMLElement, expand: boolean): void;
        protected UnselectTreeFolder(element: HTMLElement): void;
        protected TreeFolderSelected(element: HTMLElement): Boolean;
        protected ExpandFolder(element: HTMLElement): void;
        protected LoadData(requestData: any, callback: Function): void;
        protected ClearSelectedFolders(): void;
        protected GetSelectedFolders(): NodeListOf<Element>;
        protected GetAllVisibleFolders(): NodeListOf<Element>;
        protected AddExpandFolderButtonEventClick(elements: NodeListOf<Element>): void;
        protected AddOpenFolderButtonEventClick(elements: NodeListOf<Element>): void;
    }
}
declare namespace WebClient {
    interface IAgreementSidebarCallbacks {
        approvingPathChanging: (newAgreementTemplateId: string, newAgreementTemplateDisplayName: string) => JQueryDeferred<any>;
        approverAdding: (selectingEmployeeData: IEmployeeItemData) => JQueryDeferred<any>;
        approverDeleting: (deletingEmployeeId: string) => JQueryDeferred<any>;
        approvingStartCancelling: () => JQueryDeferred<any>;
        approvingStarting: (params: IAgreementParams) => JQueryDeferred<any>;
        approvingPanelOpening: () => JQueryDeferred<any>;
        approvingPathChanged: (agreementTemplateId: string, agreementTemplateDisplayName: string) => void;
        approverAdded: (addedEmployeeId: IEmployeeItemData) => void;
        approverDeleted: (deletedEmployeeId: string) => void;
        approvingStartCancelled: () => void;
        approvingPanelOpened: () => void;
    }
}
declare namespace WebClient {
    class LinkControl {
        private linkControl;
        private static DeleteLinkCssClass;
        private static AddExistingCardCssClass;
        private static AddNewFileCssClass;
        private static AddNewCardCssClass;
        private static SelectCardDlgClass;
        private static SelectCardDlgWidth;
        private static FileLinkCssClass;
        private cardId;
        private isReportMode;
        private selectCardModal;
        private traceProvider;
        BeforeAddNewCardFunc: Function;
        BeforeAddExistedCardFunc: Function;
        static CommandExpandCssClass: string;
        constructor(rootElementId: string);
        IsReportMode: boolean;
        AddFileLink(documentIds: any): void;
        private Init();
        private InitAttachFileLink();
        private CommandAddExistingCard(item);
        private CommandAddNewCard(item);
        protected GetLayoutCardCreateLink(cardId: string, timestamp: string, cardTypeId: string, kindId: string): string;
        private AttachLink(url, formData, onSuccess);
        private CommandDeleteLink(item);
        private DeleteLink(url);
        private RefreshLinks(response?);
        private CommandExpandEventHandler(item);
        private PreviewFileEventHandler(item);
    }
    class FolderTreeElement extends FolderTree {
        constructor();
        AfterOpenFolderFunction: Function;
        private AddOpenOverride(elements);
        LoadTreeToContainer(container: HTMLElement): void;
    }
}
declare namespace WebClient {
    class RightSidebar {
        rootElement: HTMLElement;
        private closeButton;
        private content;
        private overlay;
        private useOverlay;
        private destroyOnClose;
        private title;
        private onCloseCallback;
        private onClosingCallback;
        constructor(title?: string);
        OnCloseCallback: Function;
        OnClosingCallback: () => JQueryDeferred<any>;
        UseOverlay: boolean;
        DestroyOnClose: boolean;
        Content: string;
        readonly IsOpened: boolean;
        AppendToContent(element: HTMLElement): void;
        SetClassName(className: string): void;
        Open(callback?: Function): void;
        Close(): void;
        private Initialize();
    }
}
declare namespace WebClient {
    class SearchDropdown {
        private dropdown;
        private optionList;
        private options;
        private selectedText;
        private selectedElement;
        private selectedValue;
        private callback;
        private DROP_DOWN_ICO;
        constructor(dropdown: HTMLElement, callback: (oldVal?: SearchContextOption, newVal?: SearchContextOption) => void);
        UpdateDropDownVisibility(): void;
        ShowOptions(selectedOption: string, displayOptions?: Array<SearchContextOption>): void;
        Hide(): void;
        readonly SearchContext: string;
        readonly Element: HTMLElement;
        private Initialize();
        private Show();
        private AddDropdownMissClickEvent();
        private AddDropdownClickEvent();
        private AddOptionListClickEvent();
        private UpdateSelectedOption();
    }
}
declare namespace WebClient {
    class SelectCardLinkDialog {
        private selectCardModal;
        private container;
        private searchInput;
        private searchTimer;
        private sourceCardId;
        private selectedFolder;
        private loader;
        private nextPageLoader;
        private cardsScrollContainer;
        private cardsTableItemsContainer;
        private allowedCardTypesField;
        private wrapRows;
        private sortingColumnName;
        private sortDescending;
        private searchMode;
        private currentPageNumber;
        private lastQueryTimestamp;
        private columnHeaders;
        private modalClosed;
        constructor();
        allowedCardTypes: string[];
        ShowDialog(sourceCardId: string, allowedLinkTypes: string[], okCallback: (window: ModalWindow) => void, shownCallback?: (window: ModalWindow) => void): void;
        private InitDialog();
        private LoadShortcutsFromServer(url, data);
        private UpdateShortcuts(resetPageIndex);
        private InitCardRow(item);
        private ButtonOkEnabled;
        private LoadFolder(folder, resetPageIndex);
        private ClearShortucts();
        private SetSorting(colName, descending, loadRows?);
        private SetRowWrapMode(wrap, compactRowsSwitch, wrapRowsSwitch);
        private OnSearchInputKeyDown(ev);
        private onCardsScroll(ev);
        private SendSearchRequest(resetPageIndex);
    }
}
declare namespace WebClient {
    class SelectFolderModalDialog extends FolderTree {
        private static DialogContainerClassName;
        private static SubfolderCheckContainerClassName;
        private folderSettings;
        private subFolderCheckElement;
        private dialog;
        constructor();
        ShowDialog(folderSettings: FolderSettings): void;
        private AttachFolder();
        protected ClearSelectedFolders(): void;
        private setCheckSubFolder(value);
    }
}
declare namespace WebClient {
    type DocumentKindSelectedCallback = (window: ModalWindow, cardTypeId: string, kindId: string, layoutAvailable: boolean) => void;
    class SelectNewDocumentDialog {
        private createDocumentModal;
        private container;
        private selectedNode;
        private dialogOkButton;
        private ExpadedToggleMarkerClass;
        private CollapsedToggleMarkerClass;
        constructor();
        readonly SelectedKindId: string;
        readonly SelectedCardTypeId: string;
        readonly SelectedKindLayoutAvailable: boolean;
        ShowDialog(title: string, okCallback: DocumentKindSelectedCallback, shownCallback?: (window: ModalWindow) => void): void;
        private InitDialog();
        private onOkButtonClick(callback);
        private selectNode(node);
    }
}
declare namespace WebClient {
    class SelectUserFolderModalDialog extends FolderTree {
        private dialog;
        private rootElement;
        private input;
        private button;
        private clearBtn;
        constructor(element: HTMLElement);
        private Initialize();
        ShowDialog(): void;
        private SelectFolder();
        private UpdateFolder();
        private AddExpandOverride(elements);
        private AddOpenOverride(elements);
        private AddShowDialogButtonEventClick();
        private AddClearButtonEventClick();
    }
}
declare namespace WebClient {
    interface IAgreementParams {
        agreementTemplateId: string;
        approvalKind: string;
        stages: IAgreementStage[];
    }
}
declare namespace WebClient {
    interface IAgreementStage {
        stageId: string;
        fieldId: string;
        participants: string[];
    }
}
declare namespace WebClient {
    interface IControl {
        rootElement: HTMLElement;
        ID(value?: string): string;
        isInit: boolean;
        Init(onComplete?: () => void): void;
        Destroy(): void;
    }
}
declare namespace WebClient {
    interface IEmployeeItemData {
        Id: string;
        FullName: string;
        FirstName: string;
        MiddleName: string;
        LastName: string;
        IsMyself: boolean;
        Position: string;
    }
}
declare namespace WebClient {
    interface ILabelControl extends IControl {
        Text(value?: string): string;
        HTML(value?: string): string;
    }
}
declare namespace WebClient {
    interface ILabelTextareaControl extends IControl {
        Label: ILabelControl;
        Textarea: ITextareaControl;
    }
}
declare namespace WebClient {
    interface ILabelTextControl extends IControl {
        Label: ILabelControl;
        Text: ITextControl;
    }
}
declare namespace WebClient {
    interface ITextareaControl extends IControl {
        OnTextChange: Function;
        OnKeyPress: Function;
        Text(value?: string): string;
    }
}
declare namespace WebClient {
    interface ITextControl extends IControl {
        OnTextChange: Function;
        Text(value?: string): string;
    }
}
declare namespace WebClient {
    class AutoCompleteItem {
        constructor(label: string, value: string, isFav: boolean, data: IEmployeeItemData);
        label: string;
        value: string;
        isFavorite: boolean;
        data: IEmployeeItemData;
    }
}
declare namespace WebClient {
    class Control implements IControl {
        rootElement: HTMLElement;
        isInit: boolean;
        ID(value?: string): string;
        constructor(root: HTMLElement);
        Init(onComplete?: () => void): void;
        Destroy(): void;
    }
}
declare namespace WebClient {
    class BooleanControl extends Control {
        selectElement: HTMLSelectElement;
        constructor(root: HTMLElement, value?: boolean);
        Value(value?: boolean): string;
        Init(onComplete?: () => void): void;
        OnValueChange: Function;
    }
}
declare namespace WebClient {
    class ControlFactory {
        static CreateTextControl(root: HTMLElement, value?: string): any;
        static CreateLabelTextareaControl(root: HTMLElement, labelText?: string, textValue?: string): any;
        static CreateLabelTextControl(root: HTMLElement, labelText?: string, textValue?: string): any;
        static CreateRadioListControl(root: HTMLElement, selectedValue?: string): any;
        static CreateHiddenControl(root: HTMLElement, value?: string): any;
        static CreateBooleanControl(root: HTMLElement, value?: boolean): any;
        static CreateNumericControl(root: HTMLElement, value?: string): any;
        static CreateDatepickerControl(root: HTMLElement, time: string, minDate?: Date, maxDate?: Date): DatepickerControl;
        static CreateSelectControl(root: HTMLElement, value: string): any;
        static CreateDecisionControl(root: HTMLElement): any;
        static CreateDropdownControl(root: HTMLElement, disabled?: string): WebClient.DropdownControl;
        static CreateEmployeeSelectControl(root: HTMLElement): WebClient.EmployeeAutoComplete;
        static CreateBaseUniversalSelectControl(root: HTMLElement): WebClient.UniversalAutoComplete;
        static CreateDateRangeControl(root: HTMLElement): WebClient.DateRangeControl;
        static CreateDisclosureControl(root: HTMLElement): WebClient.DisclosureHeader;
        static GetFromData(root: HTMLElement): any;
    }
}
declare namespace WebClient {
    enum ControlType {
        Text = 0,
        Label = 1,
        LabelText = 2,
        Textarea = 3,
        LabeledTextarea = 4,
        Hidden = 5,
        Boolean = 6,
        Select = 7,
        Numeric = 8,
        DateTime = 9,
        LabeledText = 10,
        Radio = 11,
        RadioList = 12,
        EmployeeSelect = 13,
        BaseUniversalSelect = 14,
    }
}
declare namespace WebClient {
    class DatepickerControl extends Control {
        private hiddenInput;
        private dateInput;
        private timeInput;
        private dateTimeBox;
        private clearButton;
        private currentTime;
        private dateTimeFormat;
        private minDate;
        private maxDate;
        constructor(root: HTMLElement, time: string, minDate?: Date, maxDate?: Date);
        Update(time: Date): void;
        Clear(): void;
        SetMinMaxDate(minDate?: Date, maxDate?: Date): void;
        Disable(): void;
        private Initialize();
        readonly Value: Date;
        private CheckDateTime();
        private GetDateAttribute(element, name);
        private ClearBtnShow();
        private ClearBtnHide();
    }
}
declare namespace WebClient {
    class DateRangeControl extends Control {
        private currentZeroDuration;
        private startDateControl;
        private endDateControl;
        private durationControl;
        constructor(root: HTMLElement);
        IntervalManager: TaskIntervalManager;
        OnChangeCallback: Function;
        readonly Duration: number;
        readonly StartDate: Date;
        readonly EndDate: Date;
        UpdateView(intervalManager: TaskIntervalManager): void;
        private Initialize();
        private DateRangeCreateTasksIntervalManager();
    }
}
declare namespace WebClient {
    class DecisionControl extends Control {
        private buttons;
        private moreButton;
        private moreButtonInnerText;
        private sidebar;
        private taskDecision;
        constructor(root: HTMLElement);
        private Initialize();
        protected InitiDecision(): void;
        protected TaskDecision: Cards.TaskDecision;
        private AddMoreButton();
    }
}
declare namespace WebClient {
    class DisclosureHeader extends Control {
        private id;
        private arrow;
        private content;
        constructor(root: HTMLElement);
        Init(): void;
        private AddHeaderClickFunction();
    }
}
declare namespace WebClient {
    class DropdownControl extends Control {
        private optionList;
        private options;
        private selectedText;
        private selectedElement;
        private selectedValue;
        private isDisabled;
        private DATA_VALUE;
        SelectingItemCallback: (value: string, name: string) => JQueryDeferred<any>;
        SelectItemCallback: (value: string, name: string) => void;
        constructor(root: HTMLElement, disabled: string);
        ShowOptions(selectedOption: string, displayOptions?: Array<SearchContextOption>): void;
        Hide(): void;
        Show(): void;
        readonly SelectedValue: string;
        readonly SelectedOption: HTMLElement;
        readonly Element: HTMLElement;
        private Initialize();
        private AddDropdownMissClickEvent();
        private AddDropdownClickEvent();
        private AddOptionListClickEvent();
        private UpdateSelectedOption();
        private SetSelectedText();
    }
}
declare namespace WebClient {
    class EmployeeAutoComplete extends WebClient.Control {
        inputElement: HTMLInputElement;
        hiddenElement: HTMLInputElement;
        hiddenLabel: HTMLElement;
        private selectedItemsContainer;
        selectedItemsList: HTMLElement;
        private allBtn;
        private MoreBtn;
        private DirectoryBtn;
        private ErrorSpan;
        private labelElement;
        private itemCount;
        private favoriteStorage;
        private useStorage;
        private hasMore;
        private kindId;
        private allowMultiple;
        private selectCallback;
        private deleteItemCallback;
        private filter;
        private showAllItemsIfNoResultsOnNextLoad;
        private noResultsOnLastLoad;
        private isSelected;
        private OnSelectValidation;
        private employeeInfo;
        private dropDownMinWidth;
        constructor(root: HTMLElement);
        SelectCallback: (employeeData: IEmployeeItemData) => void;
        SelectingCallback: (employeeData: IEmployeeItemData) => JQueryDeferred<any>;
        FocusoutCallback: Function;
        DeletingItemCallback: (employeeId: string) => JQueryDeferred<any>;
        DeleteItemCallback: (employeeId: string) => void;
        SetFilter(filter: string[]): void;
        readonly AllowMultiple: boolean;
        KindId: string;
        readonly Value: string;
        getEmloyeeInfo(id: string): any;
        private needValidate;
        readonly NeedValidate: boolean;
        private readonly LastMenu;
        private FavoriteEmployees;
        private CloseAutoComplete();
        private onItemsLoaded(event, ui);
        Init(): void;
        private hasAdditionalValidate;
        SetFocus(): void;
        DisableOnKeyUpValidation(): void;
        Validate(throwError?: boolean): boolean;
        ResetValidationError(): void;
        private DeleteItem(deleteBtn);
        private AddToFavorite(item);
        private LoadAll(useStorage, directoryBtn?);
        private GetEmployeesList(term);
        private arrayUnique(array);
        private GetEmployeeFromServer(term, limitCount);
    }
}
declare namespace WebClient {
    class HiddenControl extends Control {
        textInput: HTMLInputElement;
        constructor(root: HTMLElement, value?: string);
        Text(value?: string): string;
        Init(onComplete?: () => void): void;
    }
}
declare namespace WebClient {
    class LabelControl extends Control implements ILabelControl {
        constructor(root: HTMLElement, value?: string);
        Text(value?: string): string;
        HTML(value?: string): string;
    }
}
declare namespace WebClient {
    class LabelTextareaControl extends Control implements ILabelTextareaControl {
        Label: ILabelControl;
        Textarea: ITextareaControl;
        private r;
        constructor(root: HTMLElement, labelText?: string, textValue?: string);
        Init(onComplete?: () => void): void;
    }
}
declare namespace WebClient {
    class LabelTextControl extends Control implements ILabelTextControl {
        Label: ILabelControl;
        Text: ITextControl;
        constructor(root: HTMLElement, labelText?: string, textValue?: string);
        Init(onComplete?: () => void): void;
    }
}
declare namespace WebClient {
    class LinkedTaskControl extends Control {
        private plusButton;
        private aside;
        constructor(root: HTMLElement);
        private Initialize();
    }
}
declare namespace WebClient {
    class NumericControl extends Control {
        textInput: HTMLInputElement;
        constructor(root: HTMLElement, value?: string);
        Text(value?: string): string;
        Init(onComplete?: () => void): void;
        OnTextChange: Function;
        SetNumericControl(control: HTMLElement, callback?: Function): void;
    }
}
declare namespace WebClient {
    class RadioListControl extends Control {
        radioControls: NodeListOf<Element>;
        constructor(root: HTMLElement, selectedValue?: string);
        Value(value?: string): string;
        private SetValue(value);
        private GetValue();
    }
}
declare namespace WebClient {
    class SelectControl extends Control {
        selectElement: HTMLSelectElement;
        constructor(root: HTMLElement, value?: string);
        Value(value?: string): string;
        Init(onComplete?: () => void): void;
        OnValueChange: Function;
    }
}
declare namespace WebClient {
    class TextareaControl extends Control implements ITextareaControl {
        textInput: HTMLInputElement;
        constructor(root: HTMLElement, value?: string);
        Text(value?: string): string;
        Init(onComplete?: () => void): void;
        OnTextChange: Function;
        OnKeyPress: Function;
    }
}
declare namespace WebClient {
    class TextControl extends Control implements ITextControl {
        textInput: HTMLInputElement;
        constructor(root: HTMLElement, value?: string);
        Text(value?: string): string;
        Init(onComplete?: () => void): void;
        OnTextChange: Function;
    }
}
declare namespace WebClient {
    class UniversalAutoComplete extends WebClient.Control {
        inputElement: HTMLInputElement;
        hiddenElement: HTMLInputElement;
        hiddenLabel: HTMLElement;
        private selectedItemsContainer;
        selectedItemsList: HTMLElement;
        private allBtn;
        private MoreBtn;
        private DirectoryBtn;
        private ErrorSpan;
        private labelElement;
        private itemCount;
        private favoriteStorage;
        private useStorage;
        private hasMore;
        private itemTypeId;
        private allowMultiple;
        private selectCallback;
        private deleteItemCallback;
        private filter;
        private noResults;
        private OnSelectValidation;
        constructor(root: HTMLElement);
        SelectCallback: Function;
        SetFilter(filter: string[]): void;
        readonly AllowMultiple: boolean;
        ItemTypeId: string;
        readonly Value: string;
        private needValidate;
        readonly NeedValidate: boolean;
        private readonly LastMenu;
        private FavoriteItems;
        Init(): void;
        private hasAdditionalValidate;
        DisableOnKeyUpValidation(): void;
        Validate(throwError?: boolean): boolean;
        private DeleteItem(deleteBtn);
        private AddToFavorite(item);
        private LoadAll(useStorage, directoryBtn?);
        private GetItemsList(term);
        private arrayUnique(array);
        private GetItemsFromServer(term, limitCount);
    }
}
declare namespace WebClient.Cards {
    class DocumentCardCreate {
        private form;
        private selectFolderElement;
        private selectFolderClearBtn;
        private saveButtonElement;
        private cancelButtonElement;
        private url;
        private isLink;
        private useHardLink;
        private linkIsReport;
        private parentTaskId;
        constructor(formName: HTMLFormElement, saveButtonElement: HTMLElement, url: string);
        readonly IsLink: boolean;
        AttachLink(data: any): void;
        private CreateLinkParamInfo(cardId, timetamp, linkTypeId);
        private RedirectAfterAttachLink();
        Save(): void;
        private Initialize();
        private SendRequest(form);
        private CheckFolder(form, callback);
    }
}
declare namespace WebClient.Cards {
    class DocumentCardView {
        private widget;
        constructor(widgetElementSelector: string);
        readonly Widget: HTMLElement;
        private Intialize();
    }
}
declare namespace WebClient.Cards {
    class DocumentGridPreview {
        private widget;
        constructor(widgetElementName: string);
        private Initialize();
    }
}
declare namespace WebClient.Cards {
    class TaskCardCreate {
        protected form: HTMLFormElement;
        protected url: string;
        protected parentCardId: HTMLInputElement;
        protected controllerForm: HTMLElement;
        protected saving: boolean;
        private saveButtonElement;
        private submiteButtonElement;
        private cancelButtonElement;
        private controllerCheckBox;
        private acceptanceCheckBox;
        private addFileCheckBox;
        private sendTaskInput;
        private uploadFilePanel;
        private documentsBlock;
        private performerControl;
        private controllerControl;
        private dropDownContainer;
        private dropdownControl;
        protected traceProvider: TraceProvider;
        constructor(formName: HTMLFormElement);
        static DisableButtons(): void;
        static EnableButtons(): void;
        static AddDocumentId(documentPanel: string, documentId: string): void;
        Save(): void;
        protected Initialize(): void;
        protected SendRequest(form: any): void;
        protected readonly ControllerCheckBox: HTMLInputElement;
        protected readonly AcceptanceCheckBox: HTMLInputElement;
        protected readonly ControllerControl: EmployeeAutoComplete;
    }
}
declare namespace WebClient.Cards {
    class TaskCardView {
        private static DelegateListClassName;
        private static ReportPanelClassName;
        private static ShowCommentsButtonId;
        private static CommentFormId;
        private static TaskCommentsId;
        private static TaskCommentCountId;
        private widget;
        private widgetId;
        private commentForm;
        private reportPanel;
        constructor(widgetId: string);
        private Initialize();
        private ShowDelegateList(element);
        private SaveComment();
        private RefreshComments(response);
        private readonly CommentsContainer;
        private readonly CommentData;
        readonly CardInfo: CardInfoModel;
        private InitializeCommentsPanel();
        private AnimateCommentButtons(needShow);
        private EditComment(item);
        private DeleteComment(item);
        EditCommentMode: boolean;
        private ExpandCommentsEventHandler();
    }
    class TaskReportPanel {
        private static ReportContainerClassName;
        private static ReportTextClassName;
        private static DropZoneWithReportContentClassName;
        private static DropZoneWithFilesClassName;
        private static CommandExpandCssClass;
        private static FileLinkCssClass;
        private panel;
        private widget;
        private reportContainer;
        private commandBtn;
        private reportText;
        private dropZoneWithFiles;
        private dropZoneWithReportContent;
        private linkControl;
        private reportForm;
        private traceProvider;
        constructor(widget: TaskCardView, element: Element);
        private Initialize();
        private SaveTextReport();
        private SaveReportButton(button, refresh?, isAsync?);
        private CancelReportButton(button);
        private GetTextReportData();
        private readonly ReportInput;
        private ShowReportInput();
        private CommandExpandEventHandler(item);
        private PreviewFileEventHandler(item);
    }
    class TaskDecision {
        static WidgetClassName: string;
        private static DecisionSelector;
        private selectedDecisionItem;
        private reverseBtn;
        private widget;
        constructor(widgetId: string, needReverseBtn?: boolean);
        private Initialize();
        protected RunDecision(item: HTMLElement): void;
        protected ShowPanel(response: any): void;
        private SubmitForm(form, panel);
        protected SendFormData(form: HTMLFormElement, panel: RightSidebar): void;
        protected ExcecuteDecision(url: string, needShowDialog: boolean): void;
        protected readonly SelectedDecision: HTMLElement;
        protected readonly Widget: HTMLElement;
    }
}
declare namespace WebClient.Cards {
    class GroupTaskCardCreate extends TaskCardCreate {
        private dateRange;
        private executionType;
        private localResourses;
        private performersTable;
        private dateTimeFormat;
        private onControlDate;
        private responsePerformer;
        private employeeAutocomplete;
        private changePerformerControls;
        private allowResponsiveAcceptance;
        private allowAcceptance;
        private controlHour;
        constructor(formName: HTMLFormElement);
        Save(): void;
        private ValidateAndSend(validated, acceptanceInerrupt, $form);
        private ShowAcceptanceNotAllowedDlg(acceptanceInerrupt);
        protected Initialize(): void;
        protected SendRequest(form: any): void;
        private UpdateIntervalManager(tasksIntervalsManager);
        private UpdateIntervalsView(tasksIntervalsManager);
        private fixHelper(e, ui);
        private CompareTaskIntervals(a, b);
        private GetExistingPerformers(except?);
        private ChangeExecutionTypeEventHandler();
        private EditTaskIntervalEventHandler();
        private UpdateTaskInterval(changeDateInfo, currentTaskInterval, startDateControl, endDateControl, durationControl, rootElement);
        private EditTaskDescriptionEventHandler();
        private RemovePerformerEventHandler();
        private MoveUpPerformerEventHandler();
        private MoveDownPerformerEventHandler();
        private ChangePerformerEventHandler();
        private ChangePerformerResponseEventHandler();
        private CreateGroupTaskModelFromView();
    }
}
declare namespace WebClient.Cards {
    class TaskGroupCardView extends TaskCardView {
        constructor(widgetId: string);
    }
}
declare namespace WebClient.Cards {
    class UnknownGridPreview {
        private widget;
        constructor(widgetElementName: string);
        private Initialize();
    }
}
declare namespace WebClient.Approval {
    class ApprovaDecisionControl extends WebClient.DecisionControl {
        protected InitiDecision(): void;
    }
}
declare namespace Approval {
    class ApprovalFilePanel {
        private static FileLinkCssClass;
        private static FileSettingsCssClass;
        private static FileItemCssClass;
        private static FileVersionCssClass;
        private static VersionSettingsCssClass;
        private static SettingMenuCssClass;
        private static VersionSettingMenuCssClass;
        private static CopyToFinalCmdCssClass;
        private static DeleteFileVersionCssClass;
        private static VersionCommentCssClass;
        private static MenuVersionCommentCssClass;
        private filePanel;
        private currentSettings;
        private selectedElement;
        constructor(filePanelId: string);
        private Initialize();
        private readonly GetFileItems;
        private readonly GetFileVersions;
        private SelectEventClick(item);
        private SettingEventHandler(fileItem);
        private UpdatePanel();
        private VersionEventHandler(fileItem);
        private ShowVersions(item, show?);
        private DeleteFileVersionEventHandler(item);
        private AddCopyToFinalEventHandler(item);
        private VersionsSettingsEventHandlers(versionItem);
        private ShowSettingsEventClick(item);
        private ShowSettings(item, show?);
        private PreviewFileEventHandler(item);
        private AddFileCommentEventHandler(item);
        private SuppressEvents(e);
        private WrapperEventHandler();
    }
}
declare namespace Approval {
    class ApprovalHistory {
        private rootElement;
        private selectedCycleNumber;
        private tabElement;
        private cycleUl;
        private elementId;
        constructor(elementId: string);
        private SetSelectedCycleNumber();
        private buildCyclePaginator(cycleUl, current);
        private createCycleLi(text, cycleNumber, cycleUl, isActive);
        private AttachEventHandlers();
        private LoadCycle();
        private SetActiveCycle(currentCycleNumber);
    }
}
declare namespace WebClient.Cards {
    class ApprovalHistoryCycle {
        private rootElement;
        private static FileLinkCssClass;
        private static ApprovalStageItemCssClass;
        private static DecisionInfoCssClass;
        constructor(root: HTMLElement);
        private Initialize();
        private InitGetFullInfo();
        private InitStageItem(item);
        private ShowFullStageInfo(item);
        private InitComments();
        private InitCommentButton(item);
        private ShowCommentDialog(item);
        private InitializeCommentDialogContent(clone, item);
        private PreviewFileEventHandler(item);
    }
}
declare namespace WebClient {
    class ApprovalPanel {
        private static CommandButtonsSelector;
        private rootElement;
        constructor(root: HTMLElement);
        private Init();
    }
}
declare namespace WebClient.Approval {
    class ApprovalTaskDecision extends WebClient.Cards.TaskDecision {
        protected ExcecuteDecision(url: string, needShowDialog: boolean): void;
        private SignData(url, taskId, timestamp, comment, decisionId, encryptedInfo, isSimpleSign, callBack);
        protected SendFormData(form: HTMLFormElement, panel: RightSidebar): void;
        private ShowSelectCertificateDialog(url, taskId, timestamp, comment, decisionId, callback?);
    }
}
declare namespace Approval {
    class ApprovalTaskPreviewDocuments {
        private static FileSettingsCssClass;
        private static FileLinkCssClass;
        private static DocumentUnLinkCssClass;
        private static FileIconCssClass;
        private static AdditionalFileCssClass;
        private static FileOperationCssClass;
        private static VersionCommentCssClass;
        private documentPanel;
        private currentSettings;
        private traceProvider;
        constructor(documentPanelId: string);
        private Initialize();
        private PreviewFileEventHandler(item);
    }
}
declare namespace Approval.Cards {
    class ApprovalTaskView {
        private widget;
        private widgetId;
        private decision;
        constructor(widgetId: string);
        private Initialize();
    }
}
