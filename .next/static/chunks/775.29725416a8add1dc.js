"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[775],{

/***/ 9775:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientWalletProvider: function() { return /* binding */ ClientWalletProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6487);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2257);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2578);
/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9598);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8714);





Promise.all(/* import() */[__webpack_require__.e(230), __webpack_require__.e(841)]).then(__webpack_require__.t.bind(__webpack_require__, 7841, 23));
function ClientWalletProvider(props) {
    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_3__/* .getPhantomWallet */ .y)(),
            (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__/* .getSolflareWallet */ .I)(),
            // getTorusWallet({
            //   options: {
            //     // TODO: Get your own tor.us wallet client Id
            //     clientId:
            //       "BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ",
            //   },
            // }),
            // getLedgerWallet(),
            // getSolongWallet(),
            // getMathWallet(),
            (0,_solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_5__/* .getSolletWallet */ .D)()
        ], []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__/* .WalletProvider */ .n, {
        wallets: wallets,
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__/* .WalletModalProvider */ .sR, {
            ...props
        })
    });
}
/* harmony default export */ __webpack_exports__["default"] = (ClientWalletProvider);


/***/ })

}]);