System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "stage": 0,
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "dist/bundle.js": [
      "app.js",
      "npm:react-router@1.0.3.js",
      "npm:react-router@1.0.3/lib/index.js",
      "npm:react-router@1.0.3/lib/match.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.10.js",
      "npm:process@0.11.10/browser.js",
      "npm:react-router@1.0.3/lib/useRoutes.js",
      "npm:react-router@1.0.3/lib/matchRoutes.js",
      "npm:react-router@1.0.3/lib/RouteUtils.js",
      "npm:warning@2.1.0.js",
      "npm:warning@2.1.0/browser.js",
      "npm:react@0.14.9.js",
      "npm:react@0.14.9/react.js",
      "npm:react@0.14.9/lib/React.js",
      "npm:react@0.14.9/lib/deprecated.js",
      "npm:fbjs@0.6.1/lib/warning.js",
      "npm:fbjs@0.6.1/lib/emptyFunction.js",
      "npm:react@0.14.9/lib/Object.assign.js",
      "npm:react@0.14.9/lib/ReactIsomorphic.js",
      "npm:react@0.14.9/lib/onlyChild.js",
      "npm:fbjs@0.6.1/lib/invariant.js",
      "npm:react@0.14.9/lib/ReactElement.js",
      "npm:react@0.14.9/lib/canDefineProperty.js",
      "npm:react@0.14.9/lib/ReactCurrentOwner.js",
      "npm:react@0.14.9/lib/ReactVersion.js",
      "npm:react@0.14.9/lib/ReactPropTypes.js",
      "npm:react@0.14.9/lib/getIteratorFn.js",
      "npm:react@0.14.9/lib/ReactPropTypeLocationNames.js",
      "npm:react@0.14.9/lib/ReactElementValidator.js",
      "npm:react@0.14.9/lib/ReactPropTypeLocations.js",
      "npm:fbjs@0.6.1/lib/keyMirror.js",
      "npm:react@0.14.9/lib/ReactDOMFactories.js",
      "npm:fbjs@0.6.1/lib/mapObject.js",
      "npm:react@0.14.9/lib/ReactClass.js",
      "npm:fbjs@0.6.1/lib/keyOf.js",
      "npm:fbjs@0.6.1/lib/emptyObject.js",
      "npm:react@0.14.9/lib/ReactNoopUpdateQueue.js",
      "npm:react@0.14.9/lib/ReactComponent.js",
      "npm:react@0.14.9/lib/ReactChildren.js",
      "npm:react@0.14.9/lib/traverseAllChildren.js",
      "npm:react@0.14.9/lib/ReactInstanceHandles.js",
      "npm:react@0.14.9/lib/ReactRootIndex.js",
      "npm:react@0.14.9/lib/PooledClass.js",
      "npm:react@0.14.9/lib/ReactDOMServer.js",
      "npm:react@0.14.9/lib/ReactServerRendering.js",
      "npm:react@0.14.9/lib/instantiateReactComponent.js",
      "npm:react@0.14.9/lib/ReactNativeComponent.js",
      "npm:react@0.14.9/lib/ReactEmptyComponent.js",
      "npm:react@0.14.9/lib/ReactReconciler.js",
      "npm:react@0.14.9/lib/ReactRef.js",
      "npm:react@0.14.9/lib/ReactOwner.js",
      "npm:react@0.14.9/lib/ReactEmptyComponentRegistry.js",
      "npm:react@0.14.9/lib/ReactCompositeComponent.js",
      "npm:react@0.14.9/lib/shouldUpdateReactComponent.js",
      "npm:react@0.14.9/lib/ReactUpdateQueue.js",
      "npm:react@0.14.9/lib/ReactUpdates.js",
      "npm:react@0.14.9/lib/Transaction.js",
      "npm:react@0.14.9/lib/ReactPerf.js",
      "npm:react@0.14.9/lib/CallbackQueue.js",
      "npm:react@0.14.9/lib/ReactInstanceMap.js",
      "npm:react@0.14.9/lib/ReactComponentEnvironment.js",
      "npm:react@0.14.9/lib/ReactServerRenderingTransaction.js",
      "npm:react@0.14.9/lib/ReactServerBatchingStrategy.js",
      "npm:react@0.14.9/lib/ReactMarkupChecksum.js",
      "npm:react@0.14.9/lib/adler32.js",
      "npm:react@0.14.9/lib/ReactDefaultBatchingStrategy.js",
      "npm:react@0.14.9/lib/ReactDefaultInjection.js",
      "npm:react@0.14.9/lib/ReactDefaultPerf.js",
      "npm:fbjs@0.6.1/lib/performanceNow.js",
      "npm:fbjs@0.6.1/lib/performance.js",
      "npm:fbjs@0.6.1/lib/ExecutionEnvironment.js",
      "npm:react@0.14.9/lib/ReactMount.js",
      "npm:react@0.14.9/lib/validateDOMNesting.js",
      "npm:react@0.14.9/lib/setInnerHTML.js",
      "npm:fbjs@0.6.1/lib/containsNode.js",
      "npm:fbjs@0.6.1/lib/isTextNode.js",
      "npm:fbjs@0.6.1/lib/isNode.js",
      "npm:react@0.14.9/lib/ReactDOMFeatureFlags.js",
      "npm:react@0.14.9/lib/ReactBrowserEventEmitter.js",
      "npm:react@0.14.9/lib/isEventSupported.js",
      "npm:react@0.14.9/lib/ViewportMetrics.js",
      "npm:react@0.14.9/lib/ReactEventEmitterMixin.js",
      "npm:react@0.14.9/lib/EventPluginHub.js",
      "npm:react@0.14.9/lib/forEachAccumulated.js",
      "npm:react@0.14.9/lib/accumulateInto.js",
      "npm:react@0.14.9/lib/ReactErrorUtils.js",
      "npm:react@0.14.9/lib/EventPluginUtils.js",
      "npm:react@0.14.9/lib/EventConstants.js",
      "npm:react@0.14.9/lib/EventPluginRegistry.js",
      "npm:react@0.14.9/lib/DOMProperty.js",
      "npm:react@0.14.9/lib/ReactDefaultPerfAnalysis.js",
      "npm:react@0.14.9/lib/SVGDOMPropertyConfig.js",
      "npm:react@0.14.9/lib/SimpleEventPlugin.js",
      "npm:react@0.14.9/lib/getEventCharCode.js",
      "npm:react@0.14.9/lib/SyntheticWheelEvent.js",
      "npm:react@0.14.9/lib/SyntheticMouseEvent.js",
      "npm:react@0.14.9/lib/getEventModifierState.js",
      "npm:react@0.14.9/lib/SyntheticUIEvent.js",
      "npm:react@0.14.9/lib/getEventTarget.js",
      "npm:react@0.14.9/lib/SyntheticEvent.js",
      "npm:react@0.14.9/lib/SyntheticTouchEvent.js",
      "npm:react@0.14.9/lib/SyntheticDragEvent.js",
      "npm:react@0.14.9/lib/SyntheticKeyboardEvent.js",
      "npm:react@0.14.9/lib/getEventKey.js",
      "npm:react@0.14.9/lib/SyntheticFocusEvent.js",
      "npm:react@0.14.9/lib/SyntheticClipboardEvent.js",
      "npm:react@0.14.9/lib/EventPropagators.js",
      "npm:fbjs@0.6.1/lib/EventListener.js",
      "npm:react@0.14.9/lib/ServerReactRootIndex.js",
      "npm:react@0.14.9/lib/SelectEventPlugin.js",
      "npm:fbjs@0.6.1/lib/shallowEqual.js",
      "npm:react@0.14.9/lib/isTextInputElement.js",
      "npm:fbjs@0.6.1/lib/getActiveElement.js",
      "npm:react@0.14.9/lib/ReactInputSelection.js",
      "npm:fbjs@0.6.1/lib/focusNode.js",
      "npm:react@0.14.9/lib/ReactDOMSelection.js",
      "npm:react@0.14.9/lib/getTextContentAccessor.js",
      "npm:react@0.14.9/lib/getNodeForCharacterOffset.js",
      "npm:react@0.14.9/lib/ReactReconcileTransaction.js",
      "npm:react@0.14.9/lib/ReactInjection.js",
      "npm:react@0.14.9/lib/ReactEventListener.js",
      "npm:fbjs@0.6.1/lib/getUnboundedScrollPosition.js",
      "npm:react@0.14.9/lib/ReactDOMTextComponent.js",
      "npm:react@0.14.9/lib/setTextContent.js",
      "npm:react@0.14.9/lib/escapeTextContentForBrowser.js",
      "npm:react@0.14.9/lib/ReactComponentBrowserEnvironment.js",
      "npm:react@0.14.9/lib/ReactDOMIDOperations.js",
      "npm:react@0.14.9/lib/DOMPropertyOperations.js",
      "npm:react@0.14.9/lib/quoteAttributeValueForBrowser.js",
      "npm:react@0.14.9/lib/DOMChildrenOperations.js",
      "npm:react@0.14.9/lib/ReactMultiChildUpdateTypes.js",
      "npm:react@0.14.9/lib/Danger.js",
      "npm:fbjs@0.6.1/lib/getMarkupWrap.js",
      "npm:fbjs@0.6.1/lib/createNodesFromMarkup.js",
      "npm:fbjs@0.6.1/lib/createArrayFromMixed.js",
      "npm:fbjs@0.6.1/lib/toArray.js",
      "npm:react@0.14.9/lib/ReactDOMComponent.js",
      "npm:react@0.14.9/lib/ReactMultiChild.js",
      "npm:react@0.14.9/lib/flattenChildren.js",
      "npm:react@0.14.9/lib/ReactChildReconciler.js",
      "npm:react@0.14.9/lib/ReactDOMTextarea.js",
      "npm:react@0.14.9/lib/LinkedValueUtils.js",
      "npm:react@0.14.9/lib/ReactDOMSelect.js",
      "npm:react@0.14.9/lib/ReactDOMOption.js",
      "npm:react@0.14.9/lib/ReactDOMInput.js",
      "npm:react@0.14.9/lib/ReactDOMButton.js",
      "npm:react@0.14.9/lib/CSSPropertyOperations.js",
      "npm:fbjs@0.6.1/lib/memoizeStringOnly.js",
      "npm:fbjs@0.6.1/lib/hyphenateStyleName.js",
      "npm:fbjs@0.6.1/lib/hyphenate.js",
      "npm:react@0.14.9/lib/dangerousStyleValue.js",
      "npm:react@0.14.9/lib/CSSProperty.js",
      "npm:fbjs@0.6.1/lib/camelizeStyleName.js",
      "npm:fbjs@0.6.1/lib/camelize.js",
      "npm:react@0.14.9/lib/AutoFocusUtils.js",
      "npm:react@0.14.9/lib/findDOMNode.js",
      "npm:react@0.14.9/lib/ReactBrowserComponentMixin.js",
      "npm:react@0.14.9/lib/HTMLDOMPropertyConfig.js",
      "npm:react@0.14.9/lib/EnterLeaveEventPlugin.js",
      "npm:react@0.14.9/lib/DefaultEventPluginOrder.js",
      "npm:react@0.14.9/lib/ClientReactRootIndex.js",
      "npm:react@0.14.9/lib/ChangeEventPlugin.js",
      "npm:react@0.14.9/lib/BeforeInputEventPlugin.js",
      "npm:react@0.14.9/lib/SyntheticInputEvent.js",
      "npm:react@0.14.9/lib/SyntheticCompositionEvent.js",
      "npm:react@0.14.9/lib/FallbackCompositionState.js",
      "npm:react@0.14.9/lib/ReactDOM.js",
      "npm:react@0.14.9/lib/renderSubtreeIntoContainer.js",
      "npm:react-router@1.0.3/lib/PatternUtils.js",
      "npm:invariant@2.2.2.js",
      "npm:invariant@2.2.2/browser.js",
      "npm:react-router@1.0.3/lib/AsyncUtils.js",
      "npm:react-router@1.0.3/lib/getComponents.js",
      "npm:react-router@1.0.3/lib/isActive.js",
      "npm:react-router@1.0.3/lib/TransitionUtils.js",
      "npm:react-router@1.0.3/lib/computeChangedRoutes.js",
      "npm:history@1.17.0/lib/useQueries.js",
      "npm:history@1.17.0/lib/deprecate.js",
      "npm:history@1.17.0/lib/parsePath.js",
      "npm:history@1.17.0/lib/extractPath.js",
      "npm:history@1.17.0/lib/runTransitionHook.js",
      "npm:query-string@3.0.3.js",
      "npm:query-string@3.0.3/index.js",
      "npm:strict-uri-encode@1.1.0.js",
      "npm:strict-uri-encode@1.1.0/index.js",
      "npm:history@1.17.0/lib/Actions.js",
      "npm:history@1.17.0/lib/useBasename.js",
      "npm:history@1.17.0/lib/ExecutionEnvironment.js",
      "npm:history@1.17.0/lib/createMemoryHistory.js",
      "npm:history@1.17.0/lib/createHistory.js",
      "npm:history@1.17.0/lib/createLocation.js",
      "npm:history@1.17.0/lib/AsyncUtils.js",
      "npm:deep-equal@1.0.1.js",
      "npm:deep-equal@1.0.1/index.js",
      "npm:deep-equal@1.0.1/lib/is_arguments.js",
      "npm:deep-equal@1.0.1/lib/keys.js",
      "npm:react-router@1.0.3/lib/PropTypes.js",
      "npm:react-router@1.0.3/lib/RoutingContext.js",
      "npm:react-router@1.0.3/lib/getRouteParams.js",
      "npm:react-router@1.0.3/lib/RouteContext.js",
      "npm:react-router@1.0.3/lib/Lifecycle.js",
      "npm:react-router@1.0.3/lib/History.js",
      "npm:react-router@1.0.3/lib/Route.js",
      "npm:react-router@1.0.3/lib/Redirect.js",
      "npm:react-router@1.0.3/lib/IndexRoute.js",
      "npm:react-router@1.0.3/lib/IndexRedirect.js",
      "npm:react-router@1.0.3/lib/IndexLink.js",
      "npm:react-router@1.0.3/lib/Link.js",
      "npm:react-router@1.0.3/lib/Router.js",
      "npm:history@1.17.0/lib/createHashHistory.js",
      "npm:history@1.17.0/lib/createDOMHistory.js",
      "npm:history@1.17.0/lib/DOMUtils.js",
      "npm:history@1.17.0/lib/DOMStateStorage.js",
      "npm:react-dom@0.14.9.js",
      "npm:react-dom@0.14.9/index.js",
      "components/acme_footer/acme-footer.js",
      "npm:babel-runtime@5.8.38/helpers/class-call-check.js",
      "npm:babel-runtime@5.8.38/helpers/create-class.js",
      "npm:babel-runtime@5.8.38/core-js/object/define-property.js",
      "npm:core-js@1.2.7/library/fn/object/define-property.js",
      "npm:core-js@1.2.7/library/modules/$.js",
      "npm:babel-runtime@5.8.38/helpers/inherits.js",
      "npm:babel-runtime@5.8.38/core-js/object/set-prototype-of.js",
      "npm:core-js@1.2.7/library/fn/object/set-prototype-of.js",
      "npm:core-js@1.2.7/library/modules/$.core.js",
      "npm:core-js@1.2.7/library/modules/es6.object.set-prototype-of.js",
      "npm:core-js@1.2.7/library/modules/$.set-proto.js",
      "npm:core-js@1.2.7/library/modules/$.ctx.js",
      "npm:core-js@1.2.7/library/modules/$.a-function.js",
      "npm:core-js@1.2.7/library/modules/$.an-object.js",
      "npm:core-js@1.2.7/library/modules/$.is-object.js",
      "npm:core-js@1.2.7/library/modules/$.export.js",
      "npm:core-js@1.2.7/library/modules/$.global.js",
      "npm:babel-runtime@5.8.38/core-js/object/create.js",
      "npm:core-js@1.2.7/library/fn/object/create.js",
      "npm:babel-runtime@5.8.38/helpers/get.js",
      "npm:babel-runtime@5.8.38/core-js/object/get-own-property-descriptor.js",
      "npm:core-js@1.2.7/library/fn/object/get-own-property-descriptor.js",
      "npm:core-js@1.2.7/library/modules/es6.object.get-own-property-descriptor.js",
      "npm:core-js@1.2.7/library/modules/$.object-sap.js",
      "npm:core-js@1.2.7/library/modules/$.fails.js",
      "npm:core-js@1.2.7/library/modules/$.to-iobject.js",
      "npm:core-js@1.2.7/library/modules/$.defined.js",
      "npm:core-js@1.2.7/library/modules/$.iobject.js",
      "npm:core-js@1.2.7/library/modules/$.cof.js",
      "components/acme_body/acme-body.js",
      "components/acme_body/acme_list_group/acme-list-group.js",
      "npm:react-router-bootstrap@0.19.3.js",
      "npm:react-router-bootstrap@0.19.3/lib/index.js",
      "npm:react-router-bootstrap@0.19.3/lib/LinkContainer.js",
      "npm:react-router-bootstrap@0.19.3/lib/IndexLinkContainer.js",
      "npm:react-bootstrap@0.28.5.js",
      "npm:react-bootstrap@0.28.5/lib/index.js",
      "npm:react-bootstrap@0.28.5/lib/FormControls/index.js",
      "npm:react-bootstrap@0.28.5/lib/FormControls/Static.js",
      "npm:react-prop-types@0.3.2/lib/elementType.js",
      "npm:react-prop-types@0.3.2/lib/common.js",
      "npm:react-bootstrap@0.28.5/lib/utils/childrenValueInputValidation.js",
      "npm:react-prop-types@0.3.2/lib/singlePropFrom.js",
      "npm:babel-runtime@5.8.38/helpers/interop-require-default.js",
      "npm:react-bootstrap@0.28.5/lib/InputBase.js",
      "npm:react-bootstrap@0.28.5/lib/Glyphicon.js",
      "npm:classnames@2.2.5.js",
      "npm:classnames@2.2.5/index.js",
      "npm:babel-runtime@5.8.38/helpers/extends.js",
      "npm:babel-runtime@5.8.38/core-js/object/assign.js",
      "npm:core-js@1.2.7/library/fn/object/assign.js",
      "npm:core-js@1.2.7/library/modules/es6.object.assign.js",
      "npm:core-js@1.2.7/library/modules/$.object-assign.js",
      "npm:core-js@1.2.7/library/modules/$.to-object.js",
      "npm:react-bootstrap@0.28.5/lib/FormGroup.js",
      "npm:babel-runtime@5.8.38/helpers/object-without-properties.js",
      "npm:react-bootstrap@0.28.5/lib/Fade.js",
      "npm:react-prop-types@0.3.2/lib/deprecated.js",
      "npm:react-overlays@0.6.12/lib/Transition.js",
      "npm:dom-helpers@3.2.1/transition/properties.js",
      "npm:dom-helpers@3.2.1/util/inDOM.js",
      "npm:dom-helpers@3.2.1/events/on.js",
      "npm:react-bootstrap@0.28.5/lib/Collapse.js",
      "npm:react-bootstrap@0.28.5/lib/utils/createChainedFunction.js",
      "npm:dom-helpers@2.4.0/style.js",
      "npm:dom-helpers@2.4.0/style/index.js",
      "npm:dom-helpers@2.4.0/style/removeStyle.js",
      "npm:dom-helpers@2.4.0/style/getComputedStyle.js",
      "npm:dom-helpers@2.4.0/util/camelizeStyle.js",
      "npm:dom-helpers@2.4.0/util/camelize.js",
      "npm:dom-helpers@2.4.0/util/babelHelpers.js",
      "npm:dom-helpers@2.4.0/util/hyphenateStyle.js",
      "npm:dom-helpers@2.4.0/util/hyphenate.js",
      "npm:react-bootstrap@0.28.5/lib/Well.js",
      "npm:react-bootstrap@0.28.5/lib/styleMaps.js",
      "npm:babel-runtime@5.8.38/core-js/object/keys.js",
      "npm:core-js@1.2.7/library/fn/object/keys.js",
      "npm:core-js@1.2.7/library/modules/es6.object.keys.js",
      "npm:react-bootstrap@0.28.5/lib/utils/bootstrapUtils.js",
      "npm:react-bootstrap@0.28.5/lib/Tooltip.js",
      "npm:react-prop-types@0.3.2/lib/isRequiredForA11y.js",
      "npm:react-bootstrap@0.28.5/lib/Thumbnail.js",
      "npm:react-bootstrap@0.28.5/lib/SafeAnchor.js",
      "npm:react-bootstrap@0.28.5/lib/Tabs.js",
      "npm:react-bootstrap@0.28.5/lib/utils/ValidComponentChildren.js",
      "npm:keycode@2.1.9.js",
      "npm:keycode@2.1.9/index.js",
      "npm:react-bootstrap@0.28.5/lib/NavItem.js",
      "npm:react-bootstrap@0.28.5/lib/Nav.js",
      "npm:react-prop-types@0.3.2/lib/all.js",
      "npm:react-bootstrap@0.28.5/lib/Col.js",
      "npm:react-bootstrap@0.28.5/lib/Table.js",
      "npm:react-bootstrap@0.28.5/lib/Tab.js",
      "npm:react-bootstrap@0.28.5/lib/utils/TransitionEvents.js",
      "npm:react-bootstrap@0.28.5/lib/SplitButton.js",
      "npm:lodash-compat@3.10.2/object/pick.js",
      "npm:lodash-compat@3.10.2/function/restParam.js",
      "npm:lodash-compat@3.10.2/internal/pickByCallback.js",
      "npm:lodash-compat@3.10.2/internal/baseForIn.js",
      "npm:lodash-compat@3.10.2/object/keysIn.js",
      "npm:lodash-compat@3.10.2/support.js",
      "npm:lodash-compat@3.10.2/lang/isString.js",
      "npm:lodash-compat@3.10.2/internal/isObjectLike.js",
      "npm:lodash-compat@3.10.2/lang/isObject.js",
      "npm:lodash-compat@3.10.2/internal/isLength.js",
      "npm:lodash-compat@3.10.2/internal/isIndex.js",
      "npm:lodash-compat@3.10.2/lang/isFunction.js",
      "npm:lodash-compat@3.10.2/lang/isArray.js",
      "npm:lodash-compat@3.10.2/internal/getNative.js",
      "npm:lodash-compat@3.10.2/lang/isNative.js",
      "npm:lodash-compat@3.10.2/internal/isHostObject.js",
      "npm:lodash-compat@3.10.2/lang/isArguments.js",
      "npm:lodash-compat@3.10.2/internal/isArrayLike.js",
      "npm:lodash-compat@3.10.2/internal/getLength.js",
      "npm:lodash-compat@3.10.2/internal/baseProperty.js",
      "npm:lodash-compat@3.10.2/internal/toObject.js",
      "npm:lodash-compat@3.10.2/internal/arrayEach.js",
      "npm:lodash-compat@3.10.2/internal/baseFor.js",
      "npm:lodash-compat@3.10.2/internal/createBaseFor.js",
      "npm:lodash-compat@3.10.2/internal/pickByArray.js",
      "npm:lodash-compat@3.10.2/internal/bindCallback.js",
      "npm:lodash-compat@3.10.2/utility/identity.js",
      "npm:lodash-compat@3.10.2/internal/baseFlatten.js",
      "npm:lodash-compat@3.10.2/internal/arrayPush.js",
      "npm:lodash-compat@3.10.2/object/omit.js",
      "npm:lodash-compat@3.10.2/internal/baseDifference.js",
      "npm:lodash-compat@3.10.2/internal/createCache.js",
      "npm:lodash-compat@3.10.2/internal/SetCache.js",
      "npm:lodash-compat@3.10.2/internal/cachePush.js",
      "npm:lodash-compat@3.10.2/internal/cacheIndexOf.js",
      "npm:lodash-compat@3.10.2/internal/baseIndexOf.js",
      "npm:lodash-compat@3.10.2/internal/indexOfNaN.js",
      "npm:lodash-compat@3.10.2/internal/arrayMap.js",
      "npm:react-bootstrap@0.28.5/lib/SplitToggle.js",
      "npm:react-bootstrap@0.28.5/lib/DropdownToggle.js",
      "npm:react-bootstrap@0.28.5/lib/Button.js",
      "npm:react-bootstrap@0.28.5/lib/Dropdown.js",
      "npm:react-bootstrap@0.28.5/lib/utils/CustomPropTypes.js",
      "npm:react-bootstrap@0.28.5/lib/utils/childrenToArray.js",
      "npm:react-bootstrap@0.28.5/lib/DropdownMenu.js",
      "npm:react-overlays@0.6.12/lib/RootCloseWrapper.js",
      "npm:react-overlays@0.6.12/lib/utils/ownerDocument.js",
      "npm:dom-helpers@3.2.1/ownerDocument.js",
      "npm:react-overlays@0.6.12/lib/utils/addEventListener.js",
      "npm:dom-helpers@3.2.1/events/off.js",
      "npm:dom-helpers@3.2.1/query/contains.js",
      "npm:react-bootstrap@0.28.5/lib/ButtonGroup.js",
      "npm:uncontrollable@3.3.1.js",
      "npm:uncontrollable@3.3.1/index.js",
      "npm:uncontrollable@3.3.1/createUncontrollable.js",
      "npm:uncontrollable@3.3.1/utils.js",
      "npm:lodash-compat@3.10.2/collection/find.js",
      "npm:lodash-compat@3.10.2/internal/createFind.js",
      "npm:lodash-compat@3.10.2/internal/baseFindIndex.js",
      "npm:lodash-compat@3.10.2/internal/baseFind.js",
      "npm:lodash-compat@3.10.2/internal/baseCallback.js",
      "npm:lodash-compat@3.10.2/utility/property.js",
      "npm:lodash-compat@3.10.2/internal/isKey.js",
      "npm:lodash-compat@3.10.2/internal/basePropertyDeep.js",
      "npm:lodash-compat@3.10.2/internal/toPath.js",
      "npm:lodash-compat@3.10.2/internal/baseToString.js",
      "npm:lodash-compat@3.10.2/internal/baseGet.js",
      "npm:lodash-compat@3.10.2/internal/baseMatchesProperty.js",
      "npm:lodash-compat@3.10.2/array/last.js",
      "npm:lodash-compat@3.10.2/internal/isStrictComparable.js",
      "npm:lodash-compat@3.10.2/internal/baseSlice.js",
      "npm:lodash-compat@3.10.2/internal/baseIsEqual.js",
      "npm:lodash-compat@3.10.2/internal/baseIsEqualDeep.js",
      "npm:lodash-compat@3.10.2/lang/isTypedArray.js",
      "npm:lodash-compat@3.10.2/internal/equalObjects.js",
      "npm:lodash-compat@3.10.2/object/keys.js",
      "npm:lodash-compat@3.10.2/internal/shimKeys.js",
      "npm:lodash-compat@3.10.2/internal/equalByTag.js",
      "npm:lodash-compat@3.10.2/internal/equalArrays.js",
      "npm:lodash-compat@3.10.2/internal/arraySome.js",
      "npm:lodash-compat@3.10.2/internal/baseMatches.js",
      "npm:lodash-compat@3.10.2/internal/getMatchData.js",
      "npm:lodash-compat@3.10.2/object/pairs.js",
      "npm:lodash-compat@3.10.2/internal/baseIsMatch.js",
      "npm:lodash-compat@3.10.2/internal/baseEach.js",
      "npm:lodash-compat@3.10.2/internal/createBaseEach.js",
      "npm:lodash-compat@3.10.2/internal/baseForOwn.js",
      "npm:dom-helpers@2.4.0/query/contains.js",
      "npm:dom-helpers@2.4.0/util/inDOM.js",
      "npm:dom-helpers@2.4.0/activeElement.js",
      "npm:dom-helpers@2.4.0/ownerDocument.js",
      "npm:react-bootstrap@0.28.5/lib/Row.js",
      "npm:react-bootstrap@0.28.5/lib/ResponsiveEmbed.js",
      "npm:react-bootstrap@0.28.5/lib/ProgressBar.js",
      "npm:react-bootstrap@0.28.5/lib/Interpolate.js",
      "npm:react-bootstrap@0.28.5/lib/Popover.js",
      "npm:react-bootstrap@0.28.5/lib/PanelGroup.js",
      "npm:react-bootstrap@0.28.5/lib/Panel.js",
      "npm:react-bootstrap@0.28.5/lib/Pagination.js",
      "npm:react-bootstrap@0.28.5/lib/PaginationButton.js",
      "npm:react-bootstrap@0.28.5/lib/utils/createSelectedEvent.js",
      "npm:react-bootstrap@0.28.5/lib/Pager.js",
      "npm:react-bootstrap@0.28.5/lib/PageItem.js",
      "npm:react-bootstrap@0.28.5/lib/PageHeader.js",
      "npm:react-bootstrap@0.28.5/lib/OverlayTrigger.js",
      "npm:react-bootstrap@0.28.5/lib/Overlay.js",
      "npm:react-overlays@0.6.12/lib/Overlay.js",
      "npm:react-prop-types@0.4.0/lib/elementType.js",
      "npm:react-prop-types@0.4.0/lib/utils/createChainableTypeChecker.js",
      "npm:react-overlays@0.6.12/lib/Position.js",
      "npm:react-overlays@0.6.12/lib/utils/getContainer.js",
      "npm:react-overlays@0.6.12/lib/utils/calculatePosition.js",
      "npm:dom-helpers@3.2.1/query/scrollTop.js",
      "npm:dom-helpers@3.2.1/query/isWindow.js",
      "npm:dom-helpers@3.2.1/query/position.js",
      "npm:dom-helpers@3.2.1/style/index.js",
      "npm:dom-helpers@3.2.1/transition/isTransform.js",
      "npm:dom-helpers@3.2.1/style/removeStyle.js",
      "npm:dom-helpers@3.2.1/style/getComputedStyle.js",
      "npm:dom-helpers@3.2.1/util/camelizeStyle.js",
      "npm:dom-helpers@3.2.1/util/camelize.js",
      "npm:dom-helpers@3.2.1/util/hyphenateStyle.js",
      "npm:dom-helpers@3.2.1/util/hyphenate.js",
      "npm:dom-helpers@3.2.1/query/scrollLeft.js",
      "npm:dom-helpers@3.2.1/query/offsetParent.js",
      "npm:dom-helpers@3.2.1/query/offset.js",
      "npm:react-prop-types@0.4.0/lib/componentOrElement.js",
      "npm:react-overlays@0.6.12/lib/Portal.js",
      "npm:react-bootstrap@0.28.5/lib/NavDropdown.js",
      "npm:react-bootstrap@0.28.5/lib/NavbarBrand.js",
      "npm:react-bootstrap@0.28.5/lib/NavBrand.js",
      "npm:react-bootstrap@0.28.5/lib/utils/deprecationWarning.js",
      "npm:react-bootstrap@0.28.5/lib/Navbar.js",
      "npm:react-bootstrap@0.28.5/lib/NavbarCollapse.js",
      "npm:react-bootstrap@0.28.5/lib/NavbarToggle.js",
      "npm:react-bootstrap@0.28.5/lib/NavbarHeader.js",
      "npm:react-bootstrap@0.28.5/lib/deprecated/Navbar.js",
      "npm:react-bootstrap@0.28.5/lib/Grid.js",
      "npm:react-bootstrap@0.28.5/lib/ModalTitle.js",
      "npm:react-bootstrap@0.28.5/lib/ModalHeader.js",
      "npm:react-bootstrap@0.28.5/lib/ModalFooter.js",
      "npm:react-bootstrap@0.28.5/lib/ModalBody.js",
      "npm:react-bootstrap@0.28.5/lib/Modal.js",
      "npm:react-overlays@0.6.12/lib/utils/isOverflowing.js",
      "npm:react-overlays@0.6.12/lib/Modal.js",
      "npm:dom-helpers@3.2.1/activeElement.js",
      "npm:react-overlays@0.6.12/lib/utils/addFocusListener.js",
      "npm:react-overlays@0.6.12/lib/ModalManager.js",
      "npm:react-overlays@0.6.12/lib/utils/manageAriaHidden.js",
      "npm:dom-helpers@3.2.1/util/scrollbarSize.js",
      "npm:dom-helpers@3.2.1/class.js",
      "npm:dom-helpers@3.2.1/class/index.js",
      "npm:dom-helpers@3.2.1/class/hasClass.js",
      "npm:dom-helpers@3.2.1/class/removeClass.js",
      "npm:dom-helpers@3.2.1/class/addClass.js",
      "npm:dom-helpers@3.2.1/style.js",
      "npm:warning@3.0.0.js",
      "npm:warning@3.0.0/browser.js",
      "npm:react-bootstrap@0.28.5/lib/ModalDialog.js",
      "npm:dom-helpers@2.4.0/events.js",
      "npm:dom-helpers@2.4.0/events/index.js",
      "npm:dom-helpers@2.4.0/events/filter.js",
      "npm:dom-helpers@2.4.0/query/querySelectorAll.js",
      "npm:dom-helpers@2.4.0/events/off.js",
      "npm:dom-helpers@2.4.0/events/on.js",
      "npm:dom-helpers@2.4.0/util/scrollbarSize.js",
      "npm:react-bootstrap@0.28.5/lib/Media.js",
      "npm:react-bootstrap@0.28.5/lib/MediaListItem.js",
      "npm:react-bootstrap@0.28.5/lib/MediaList.js",
      "npm:react-bootstrap@0.28.5/lib/MediaRight.js",
      "npm:react-bootstrap@0.28.5/lib/MediaLeft.js",
      "npm:react-bootstrap@0.28.5/lib/MediaBody.js",
      "npm:react-bootstrap@0.28.5/lib/MediaHeading.js",
      "npm:react-bootstrap@0.28.5/lib/MenuItem.js",
      "npm:react-bootstrap@0.28.5/lib/ListGroupItem.js",
      "npm:react-bootstrap@0.28.5/lib/ListGroup.js",
      "npm:react-bootstrap@0.28.5/lib/Label.js",
      "npm:react-bootstrap@0.28.5/lib/Jumbotron.js",
      "npm:react-bootstrap@0.28.5/lib/Input.js",
      "npm:babel-runtime@5.8.38/helpers/interop-require-wildcard.js",
      "npm:react-bootstrap@0.28.5/lib/Image.js",
      "npm:react-bootstrap@0.28.5/lib/DropdownButton.js",
      "npm:react-bootstrap@0.28.5/lib/CollapsibleNav.js",
      "npm:react-bootstrap@0.28.5/lib/Clearfix.js",
      "npm:react-bootstrap@0.28.5/lib/CarouselItem.js",
      "npm:react-bootstrap@0.28.5/lib/Carousel.js",
      "npm:react-bootstrap@0.28.5/lib/CarouselCaption.js",
      "npm:react-bootstrap@0.28.5/lib/ButtonToolbar.js",
      "npm:react-bootstrap@0.28.5/lib/ButtonInput.js",
      "npm:react-bootstrap@0.28.5/lib/BreadcrumbItem.js",
      "npm:react-bootstrap@0.28.5/lib/Breadcrumb.js",
      "npm:react-bootstrap@0.28.5/lib/Badge.js",
      "npm:react-bootstrap@0.28.5/lib/Alert.js",
      "npm:react-bootstrap@0.28.5/lib/Accordion.js",
      "components/acme_nav_bar/acme-nav-bar.js"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "classnames": "npm:classnames@2.2.5",
    "clean-css": "npm:clean-css@3.4.28",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.35",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "plugin-typescript": "npm:plugin-typescript@7.1.0",
    "react": "npm:react@0.14.9",
    "react-bootstrap": "npm:react-bootstrap@0.28.5",
    "react-dom": "npm:react-dom@0.14.9",
    "react-router": "npm:react-router@1.0.3",
    "react-router-bootstrap": "npm:react-router-bootstrap@0.19.3",
    "scss": "github:dougludlow/plugin-sass@0.1.0",
    "systemjs-hot-reloader": "npm:systemjs-hot-reloader@1.1.0",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "github:dougludlow/plugin-sass@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "reqwest": "github:ded/reqwest@2.0.5",
      "sass.js": "npm:sass.js@0.9.13",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.7"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.1"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:amdefine@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.9.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:browserify-sign@4.0.4": {
      "bn.js": "npm:bn.js@4.11.8",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@5.0.7": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:builtin-status-codes@3.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:cipher-base@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:clean-css@3.4.28": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0"
    },
    "npm:create-hash@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@2.0.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:create-hmac@1.1.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:crypto-browserify@3.11.1": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.4",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.13",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.8",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:elliptic@6.4.0": {
      "bn.js": "npm:bn.js@4.11.8",
      "brorand": "npm:brorand@1.1.0",
      "hash.js": "npm:hash.js@1.1.3",
      "hmac-drbg": "npm:hmac-drbg@1.0.1",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:hash-base@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:hash.js@1.1.3": {
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:history@1.17.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "deep-equal": "npm:deep-equal@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "invariant": "npm:invariant@2.2.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "query-string": "npm:query-string@3.0.3",
      "warning": "npm:warning@2.1.0"
    },
    "npm:hmac-drbg@1.0.1": {
      "hash.js": "npm:hash.js@1.1.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.2": {
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:isarray@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "http-browserify": "npm:stream-http@2.7.2"
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "url": "npm:url@0.11.0"
    },
    "npm:lodash-compat@3.10.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.3.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@3.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.8",
      "brorand": "npm:brorand@1.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@5.1.0": {
      "asn1.js": "npm:asn1.js@4.9.1",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.13",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "ripemd160": "npm:ripemd160@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.8",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.1.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:query-string@3.0.3": {
      "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
    },
    "npm:randombytes@2.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:react-bootstrap@0.28.5": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "classnames": "npm:classnames@2.2.5",
      "dom-helpers": "npm:dom-helpers@2.4.0",
      "invariant": "npm:invariant@2.2.2",
      "keycode": "npm:keycode@2.1.9",
      "lodash-compat": "npm:lodash-compat@3.10.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.9",
      "react-dom": "npm:react-dom@0.14.9",
      "react-overlays": "npm:react-overlays@0.6.12",
      "react-prop-types": "npm:react-prop-types@0.3.2",
      "uncontrollable": "npm:uncontrollable@3.3.1",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-dom@0.14.9": {
      "react": "npm:react@0.14.9"
    },
    "npm:react-overlays@0.6.12": {
      "classnames": "npm:classnames@2.2.5",
      "dom-helpers": "npm:dom-helpers@3.2.1",
      "react": "npm:react@0.14.9",
      "react-dom": "npm:react-dom@0.14.9",
      "react-prop-types": "npm:react-prop-types@0.4.0",
      "warning": "npm:warning@3.0.0"
    },
    "npm:react-prop-types@0.3.2": {
      "warning": "npm:warning@2.1.0"
    },
    "npm:react-prop-types@0.4.0": {
      "react": "npm:react@0.14.9",
      "warning": "npm:warning@3.0.0"
    },
    "npm:react-router-bootstrap@0.19.3": {
      "react": "npm:react@0.14.9",
      "react-router": "npm:react-router@1.0.3"
    },
    "npm:react-router@1.0.3": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "history": "npm:history@1.17.0",
      "invariant": "npm:invariant@2.2.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "warning": "npm:warning@2.1.0"
    },
    "npm:react@0.14.9": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.3.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@1.0.3",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:ripemd160@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "hash-base": "npm:hash-base@2.0.2",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:safe-buffer@5.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:sass.js@0.9.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:stream-http@2.7.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.3",
      "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:string_decoder@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:systemjs-hot-reloader@1.1.0": {
      "systemjs-hmr": "npm:systemjs-hmr@2.0.9"
    },
    "npm:to-arraybuffer@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:uncontrollable@3.3.1": {
      "invariant": "npm:invariant@2.2.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@0.14.9"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:url@0.11.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:warning@2.1.0": {
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:warning@3.0.0": {
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:xtend@4.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    }
  }
});
