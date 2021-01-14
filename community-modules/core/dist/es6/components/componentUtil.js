/**
 * @ag-grid-community/core - Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components
 * @version v25.0.1
 * @link http://www.ag-grid.com/
 * @license MIT
 */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { Events } from '../events';
import { PropertyKeys } from '../propertyKeys';
import { iterateObject } from '../utils/object';
import { values } from '../utils/generic';
var ComponentUtil = /** @class */ (function () {
    function ComponentUtil() {
    }
    ComponentUtil.getEventCallbacks = function () {
        if (!ComponentUtil.EVENT_CALLBACKS) {
            ComponentUtil.EVENT_CALLBACKS = ComponentUtil.EVENTS.map(function (event) { return ComponentUtil.getCallbackForEvent(event); });
        }
        return ComponentUtil.EVENT_CALLBACKS;
    };
    ComponentUtil.copyAttributesToGridOptions = function (gridOptions, component, skipEventDeprecationCheck) {
        if (skipEventDeprecationCheck === void 0) { skipEventDeprecationCheck = false; }
        // create empty grid options if none were passed
        if (typeof gridOptions !== 'object') {
            gridOptions = {};
        }
        // to allow array style lookup in TypeScript, take type away from 'this' and 'gridOptions'
        var pGridOptions = gridOptions;
        var keyExists = function (key) { return typeof component[key] !== 'undefined'; };
        // add in all the simple properties
        __spreadArrays(ComponentUtil.ARRAY_PROPERTIES, ComponentUtil.STRING_PROPERTIES, ComponentUtil.OBJECT_PROPERTIES, ComponentUtil.FUNCTION_PROPERTIES, ComponentUtil.getEventCallbacks()).filter(keyExists)
            .forEach(function (key) { return pGridOptions[key] = component[key]; });
        ComponentUtil.BOOLEAN_PROPERTIES
            .filter(keyExists)
            .forEach(function (key) { return pGridOptions[key] = ComponentUtil.toBoolean(component[key]); });
        ComponentUtil.NUMBER_PROPERTIES
            .filter(keyExists)
            .forEach(function (key) { return pGridOptions[key] = ComponentUtil.toNumber(component[key]); });
        return gridOptions;
    };
    ComponentUtil.getCallbackForEvent = function (eventName) {
        if (!eventName || eventName.length < 2) {
            return eventName;
        }
        return 'on' + eventName[0].toUpperCase() + eventName.substr(1);
    };
    ComponentUtil.processOnChange = function (changes, gridOptions, api, columnApi) {
        if (!changes) {
            return;
        }
        // to allow array style lookup in TypeScript, take type away from 'this' and 'gridOptions'
        var pGridOptions = gridOptions;
        var keyExists = function (key) { return changes[key]; };
        // check if any change for the simple types, and if so, then just copy in the new value
        __spreadArrays(ComponentUtil.ARRAY_PROPERTIES, ComponentUtil.OBJECT_PROPERTIES, ComponentUtil.STRING_PROPERTIES, ComponentUtil.getEventCallbacks()).filter(keyExists)
            .forEach(function (key) { return pGridOptions[key] = changes[key].currentValue; });
        ComponentUtil.BOOLEAN_PROPERTIES
            .filter(keyExists)
            .forEach(function (key) { return pGridOptions[key] = ComponentUtil.toBoolean(changes[key].currentValue); });
        ComponentUtil.NUMBER_PROPERTIES
            .filter(keyExists)
            .forEach(function (key) { return pGridOptions[key] = ComponentUtil.toNumber(changes[key].currentValue); });
        if (changes.enableCellTextSelection) {
            api.setEnableCellTextSelection(ComponentUtil.toBoolean(changes.enableCellTextSelection.currentValue));
        }
        if (changes.quickFilterText) {
            api.setQuickFilter(changes.quickFilterText.currentValue);
        }
        if (changes.rowData) {
            api.setRowData(changes.rowData.currentValue);
        }
        if (changes.pinnedTopRowData) {
            api.setPinnedTopRowData(changes.pinnedTopRowData.currentValue);
        }
        if (changes.pinnedBottomRowData) {
            api.setPinnedBottomRowData(changes.pinnedBottomRowData.currentValue);
        }
        if (changes.autoGroupColumnDef) {
            api.setAutoGroupColumnDef(changes.autoGroupColumnDef.currentValue, "gridOptionsChanged");
        }
        if (changes.columnDefs) {
            api.setColumnDefs(changes.columnDefs.currentValue, "gridOptionsChanged");
        }
        if (changes.datasource) {
            api.setDatasource(changes.datasource.currentValue);
        }
        if (changes.headerHeight) {
            api.setHeaderHeight(ComponentUtil.toNumber(changes.headerHeight.currentValue));
        }
        if (changes.paginationPageSize) {
            api.paginationSetPageSize(ComponentUtil.toNumber(changes.paginationPageSize.currentValue));
        }
        if (changes.pivotMode) {
            columnApi.setPivotMode(ComponentUtil.toBoolean(changes.pivotMode.currentValue));
        }
        if (changes.groupRemoveSingleChildren) {
            api.setGroupRemoveSingleChildren(ComponentUtil.toBoolean(changes.groupRemoveSingleChildren.currentValue));
        }
        if (changes.suppressRowDrag) {
            api.setSuppressRowDrag(ComponentUtil.toBoolean(changes.suppressRowDrag.currentValue));
        }
        if (changes.suppressMoveWhenRowDragging) {
            api.setSuppressMoveWhenRowDragging(ComponentUtil.toBoolean(changes.suppressMoveWhenRowDragging.currentValue));
        }
        if (changes.suppressRowClickSelection) {
            api.setSuppressRowClickSelection(ComponentUtil.toBoolean(changes.suppressRowClickSelection.currentValue));
        }
        if (changes.suppressClipboardPaste) {
            api.setSuppressClipboardPaste(ComponentUtil.toBoolean(changes.suppressClipboardPaste.currentValue));
        }
        if (changes.sideBar) {
            api.setSideBar(changes.sideBar.currentValue);
        }
        // copy changes into an event for dispatch
        var event = {
            type: Events.EVENT_COMPONENT_STATE_CHANGED,
            api: gridOptions.api,
            columnApi: gridOptions.columnApi
        };
        iterateObject(changes, function (key, value) {
            event[key] = value;
        });
        api.dispatchEvent(event);
    };
    ComponentUtil.toBoolean = function (value) {
        if (typeof value === 'boolean') {
            return value;
        }
        if (typeof value === 'string') {
            // for boolean, compare to empty String to allow attributes appearing with
            // no value to be treated as 'true'
            return value.toUpperCase() === 'TRUE' || value == '';
        }
        return false;
    };
    ComponentUtil.toNumber = function (value) {
        if (typeof value === 'number') {
            return value;
        }
        if (typeof value === 'string') {
            return Number(value);
        }
    };
    // all the events are populated in here AFTER this class (at the bottom of the file).
    ComponentUtil.EVENTS = [];
    ComponentUtil.STRING_PROPERTIES = PropertyKeys.STRING_PROPERTIES;
    ComponentUtil.OBJECT_PROPERTIES = PropertyKeys.OBJECT_PROPERTIES;
    ComponentUtil.ARRAY_PROPERTIES = PropertyKeys.ARRAY_PROPERTIES;
    ComponentUtil.NUMBER_PROPERTIES = PropertyKeys.NUMBER_PROPERTIES;
    ComponentUtil.BOOLEAN_PROPERTIES = PropertyKeys.BOOLEAN_PROPERTIES;
    ComponentUtil.FUNCTION_PROPERTIES = PropertyKeys.FUNCTION_PROPERTIES;
    ComponentUtil.ALL_PROPERTIES = PropertyKeys.ALL_PROPERTIES;
    return ComponentUtil;
}());
export { ComponentUtil };
ComponentUtil.EVENTS = values(Events);
