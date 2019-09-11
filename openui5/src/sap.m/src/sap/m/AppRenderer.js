/*!
 * ${copyright}
 */

sap.ui.define(['./NavContainerRenderer', 'sap/ui/core/Renderer', 'sap/m/library'],
	function(NavContainerRenderer, Renderer, library) {
	"use strict";


	// shortcut for sap.m.BackgroundHelper
	var BackgroundHelper = library.BackgroundHelper;


	/**
	 * App renderer.
	 * @namespace
	 */
	var AppRenderer = {
	};

	var AppRenderer = Renderer.extend(NavContainerRenderer);

	AppRenderer.renderAttributes = function(rm, oControl) {
		BackgroundHelper.addBackgroundColorStyles(rm, oControl.getBackgroundColor(), oControl.getBackgroundImage());
	};

	AppRenderer.renderBeforeContent = function(rm, oControl) {
		BackgroundHelper.renderBackgroundImageTag(rm, oControl, "sapMAppBG",  oControl.getBackgroundImage(), oControl.getBackgroundRepeat(), oControl.getBackgroundOpacity());
	};


	return AppRenderer;

}, /* bExport= */ true);
