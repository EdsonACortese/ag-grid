// Type definitions for @ag-grid-community/core v25.0.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { Context } from "../context/context";
import { ColumnApi } from "../columnController/columnApi";
import { ColumnController } from "../columnController/columnController";
import { HeaderNavigationService } from "../headerRendering/header/headerNavigationService";
import { GridApi } from "../gridApi";
import { GridOptionsWrapper } from "../gridOptionsWrapper";
import { ExpressionService } from "../valueService/expressionService";
import { RowRenderer } from "./rowRenderer";
import { TemplateService } from "../templateService";
import { ValueService } from "../valueService/valueService";
import { EventService } from "../eventService";
import { ColumnAnimationService } from "./columnAnimationService";
import { IRangeController, ISelectionHandleFactory } from "../interfaces/iRangeController";
import { FocusController } from "../focusController";
import { IContextMenuFactory } from "../interfaces/iContextMenuFactory";
import { PopupService } from "../widgets/popupService";
import { ValueFormatterService } from "./valueFormatterService";
import { StylingService } from "../styling/stylingService";
import { ColumnHoverService } from "./columnHoverService";
import { GridPanel } from "../gridPanel/gridPanel";
import { PaginationProxy } from "../pagination/paginationProxy";
import { AnimationFrameService } from "../misc/animationFrameService";
import { UserComponentFactory } from "../components/framework/userComponentFactory";
import { DragAndDropService } from "../dragAndDrop/dragAndDropService";
import { SortController } from "../sortController";
import { FilterManager } from "../filter/filterManager";
import { MaxDivHeightScaler } from "./maxDivHeightScaler";
import { IFrameworkOverrides } from "../interfaces/iFrameworkOverrides";
import { DetailRowCompCache } from "./row/detailRowCompCache";
import { CellPositionUtils } from "../entities/cellPosition";
import { RowPositionUtils } from "../entities/rowPosition";
import { SelectionController } from "../selectionController";
import { RowCssClassCalculator } from "./row/rowCssClassCalculator";
import { IRowModel } from "../interfaces/iRowModel";
import { IClientSideRowModel } from "../interfaces/iClientSideRowModel";
import { IServerSideRowModel } from "../interfaces/iServerSideRowModel";
import { ResizeObserverService } from "../misc/resizeObserverService";
/** Using the IoC has a slight performance consideration, which is no problem most of the
 * time, unless we are trashing objects - which is the case when scrolling and rowComp
 * and cellComp. So for performance reasons, RowComp and CellComp do not get autowired
 * with the IoC. Instead they get passed this object which is all the beans the RowComp
 * and CellComp need. Not autowiring all the cells gives performance improvement. */
export declare class Beans {
    resizeObserverService: ResizeObserverService;
    paginationProxy: PaginationProxy;
    context: Context;
    columnApi: ColumnApi;
    gridApi: GridApi;
    gridOptionsWrapper: GridOptionsWrapper;
    expressionService: ExpressionService;
    rowRenderer: RowRenderer;
    $compile: any;
    templateService: TemplateService;
    valueService: ValueService;
    eventService: EventService;
    columnController: ColumnController;
    headerNavigationService: HeaderNavigationService;
    columnAnimationService: ColumnAnimationService;
    rangeController: IRangeController;
    focusController: FocusController;
    contextMenuFactory: IContextMenuFactory;
    popupService: PopupService;
    valueFormatterService: ValueFormatterService;
    stylingService: StylingService;
    columnHoverService: ColumnHoverService;
    userComponentFactory: UserComponentFactory;
    taskQueue: AnimationFrameService;
    dragAndDropService: DragAndDropService;
    sortController: SortController;
    filterManager: FilterManager;
    maxDivHeightScaler: MaxDivHeightScaler;
    frameworkOverrides: IFrameworkOverrides;
    detailRowCompCache: DetailRowCompCache;
    cellPositionUtils: CellPositionUtils;
    rowPositionUtils: RowPositionUtils;
    selectionController: SelectionController;
    selectionHandleFactory: ISelectionHandleFactory;
    rowCssClassCalculator: RowCssClassCalculator;
    rowModel: IRowModel;
    doingMasterDetail: boolean;
    gridPanel: GridPanel;
    clientSideRowModel: IClientSideRowModel;
    serverSideRowModel: IServerSideRowModel;
    registerGridComp(gridPanel: GridPanel): void;
    private postConstruct;
}
