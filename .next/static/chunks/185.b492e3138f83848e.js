"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[185],{

/***/ 3792:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QZ: function() { return /* binding */ WalletAdapterNetwork; },
/* harmony export */   mI: function() { return /* binding */ BaseWalletAdapter; }
/* harmony export */ });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6729);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);


class BaseWalletAdapter extends (eventemitter3__WEBPACK_IMPORTED_MODULE_0___default()) {
}
var WalletAdapterNetwork;
(function (WalletAdapterNetwork) {
    WalletAdapterNetwork["Mainnet"] = "mainnet-beta";
    WalletAdapterNetwork["Testnet"] = "testnet";
    WalletAdapterNetwork["Devnet"] = "devnet";
})(WalletAdapterNetwork || (WalletAdapterNetwork = {}));
//# sourceMappingURL=adapter.js.map

/***/ }),

/***/ 96:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $w: function() { return /* binding */ WalletConnectionError; },
/* harmony export */   IW: function() { return /* binding */ WalletSendTransactionError; },
/* harmony export */   NK: function() { return /* binding */ WalletTimeoutError; },
/* harmony export */   Nx: function() { return /* binding */ WalletPublicKeyError; },
/* harmony export */   OZ: function() { return /* binding */ WalletNotReadyError; },
/* harmony export */   PY: function() { return /* binding */ WalletSignTransactionError; },
/* harmony export */   UG: function() { return /* binding */ WalletDisconnectionError; },
/* harmony export */   Yf: function() { return /* binding */ WalletNotInstalledError; },
/* harmony export */   at: function() { return /* binding */ WalletDisconnectedError; },
/* harmony export */   d2: function() { return /* binding */ WalletWindowBlockedError; },
/* harmony export */   fk: function() { return /* binding */ WalletSignMessageError; },
/* harmony export */   hd: function() { return /* binding */ WalletWindowClosedError; },
/* harmony export */   l5: function() { return /* binding */ WalletNotFoundError; },
/* harmony export */   lj: function() { return /* binding */ WalletError; },
/* harmony export */   oS: function() { return /* binding */ WalletNotConnectedError; }
/* harmony export */ });
/* unused harmony exports WalletAccountError, WalletKeypairError */
class WalletError extends Error {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    constructor(message, error) {
        super(message);
        this.error = error;
    }
}
class WalletNotFoundError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletNotFoundError';
    }
}
class WalletNotInstalledError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletNotInstalledError';
    }
}
class WalletNotReadyError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletNotReadyError';
    }
}
class WalletConnectionError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletConnectionError';
    }
}
class WalletDisconnectedError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletDisconnectedError';
    }
}
class WalletDisconnectionError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletDisconnectionError';
    }
}
class WalletAccountError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletAccountError';
    }
}
class WalletPublicKeyError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletPublicKeyError';
    }
}
class WalletKeypairError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletKeypairError';
    }
}
class WalletNotConnectedError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletNotConnectedError';
    }
}
class WalletSendTransactionError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletSendTransactionError';
    }
}
class WalletSignMessageError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletSignMessageError';
    }
}
class WalletSignTransactionError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletSignTransactionError';
    }
}
class WalletTimeoutError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletTimeoutError';
    }
}
class WalletWindowBlockedError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletWindowBlockedError';
    }
}
class WalletWindowClosedError extends WalletError {
    constructor() {
        super(...arguments);
        this.name = 'WalletWindowClosedError';
    }
}
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ 3367:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ pollUntilReady; }
/* harmony export */ });
/* unused harmony export poll */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function poll(callback, interval, count) {
    if (count > 0) {
        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            const done = yield callback();
            if (!done)
                poll(callback, interval, count - 1);
        }), interval);
    }
}
function pollUntilReady(adapter, pollInterval, pollCount) {
    poll(() => {
        const { ready } = adapter;
        if (ready) {
            if (!adapter.emit('ready')) {
                console.warn(`${adapter.constructor.name} is ready but no listener was registered`);
            }
        }
        return ready;
    }, pollInterval, pollCount);
}
//# sourceMappingURL=poll.js.map

/***/ }),

/***/ 8677:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: function() { return /* binding */ BaseMessageSignerWalletAdapter; }
/* harmony export */ });
/* unused harmony export BaseSignerWalletAdapter */
/* harmony import */ var _adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3792);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


class BaseSignerWalletAdapter extends _adapter__WEBPACK_IMPORTED_MODULE_0__/* .BaseWalletAdapter */ .mI {
    sendTransaction(transaction, connection, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let emit = true;
            try {
                try {
                    transaction.feePayer || (transaction.feePayer = this.publicKey || undefined);
                    transaction.recentBlockhash || (transaction.recentBlockhash = (yield connection.getRecentBlockhash('finalized')).blockhash);
                    const { signers } = options, sendOptions = __rest(options, ["signers"]);
                    (signers === null || signers === void 0 ? void 0 : signers.length) && transaction.partialSign(...signers);
                    transaction = yield this.signTransaction(transaction);
                    const rawTransaction = transaction.serialize();
                    return yield connection.sendRawTransaction(rawTransaction, sendOptions);
                }
                catch (error) {
                    // If the error was thrown by `signTransaction`, rethrow it and don't emit a duplicate event
                    if (error instanceof _errors__WEBPACK_IMPORTED_MODULE_1__/* .WalletError */ .lj) {
                        emit = false;
                        throw error;
                    }
                    throw new _errors__WEBPACK_IMPORTED_MODULE_1__/* .WalletSendTransactionError */ .IW(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                if (emit) {
                    this.emit('error', error);
                }
                throw error;
            }
        });
    }
}
class BaseMessageSignerWalletAdapter extends BaseSignerWalletAdapter {
}
//# sourceMappingURL=signer.js.map

/***/ }),

/***/ 6487:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: function() { return /* binding */ WalletProvider; }
});

// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/errors.js
var errors = __webpack_require__(96);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/errors.js

class WalletNotSelectedError extends errors/* WalletError */.lj {
    constructor() {
        super(...arguments);
        this.name = 'WalletNotSelectedError';
    }
}
//# sourceMappingURL=errors.js.map
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useLocalStorage.js

function useLocalStorage(key, defaultState) {
    const [value, setValue] = (0,react.useState)(() => {
        if (typeof localStorage === 'undefined')
            return defaultState;
        const value = localStorage.getItem(key);
        try {
            return value ? JSON.parse(value) : defaultState;
        }
        catch (error) {
            console.warn(error);
            return defaultState;
        }
    });
    const setLocalStorage = (0,react.useCallback)((newValue) => {
        if (newValue === value)
            return;
        setValue(newValue);
        if (newValue === null) {
            localStorage.removeItem(key);
        }
        else {
            try {
                localStorage.setItem(key, JSON.stringify(newValue));
            }
            catch (error) {
                console.error(error);
            }
        }
    }, [value, setValue, key]);
    return [value, setLocalStorage];
}
//# sourceMappingURL=useLocalStorage.js.map
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useWallet.js
var useWallet = __webpack_require__(3940);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react/lib/WalletProvider.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const initialState = {
    wallet: null,
    adapter: null,
    ready: false,
    publicKey: null,
    connected: false,
};
const WalletProvider = ({ children, wallets, autoConnect = false, onError: _onError = (error) => console.error(error), localStorageKey = 'walletName', }) => {
    const [name, setName] = useLocalStorage(localStorageKey, null);
    const [{ wallet, adapter, ready, publicKey, connected }, setState] = (0,react.useState)(initialState);
    const [connecting, setConnecting] = (0,react.useState)(false);
    const [disconnecting, setDisconnecting] = (0,react.useState)(false);
    const isConnecting = (0,react.useRef)(false);
    const isDisconnecting = (0,react.useRef)(false);
    const isUnloading = (0,react.useRef)(false);
    // Map of wallet names to wallets
    const walletsByName = (0,react.useMemo)(() => wallets.reduce((walletsByName, wallet) => {
        walletsByName[wallet.name] = wallet;
        return walletsByName;
    }, {}), [wallets]);
    // When the selected wallet changes, initialize the state
    (0,react.useEffect)(() => {
        const wallet = (name && walletsByName[name]) || null;
        const adapter = wallet && wallet.adapter();
        if (adapter) {
            const { ready, publicKey, connected } = adapter;
            setState({ wallet, adapter, connected, publicKey, ready });
        }
        else {
            setState(initialState);
        }
    }, [name, walletsByName, setState]);
    // If autoConnect is enabled, try to connect when the adapter changes and is ready
    (0,react.useEffect)(() => {
        if (isConnecting.current || connecting || connected || !autoConnect || !adapter || !ready)
            return;
        (function () {
            return __awaiter(this, void 0, void 0, function* () {
                isConnecting.current = true;
                setConnecting(true);
                try {
                    yield adapter.connect();
                }
                catch (error) {
                    // Clear the selected wallet
                    setName(null);
                    // Don't throw error, but onError will still be called
                }
                finally {
                    setConnecting(false);
                    isConnecting.current = false;
                }
            });
        })();
    }, [isConnecting, connecting, connected, autoConnect, adapter, ready, setConnecting, setName]);
    // If the window is closing or reloading, ignore disconnect and error events from the adapter
    (0,react.useEffect)(() => {
        function listener() {
            isUnloading.current = true;
        }
        window.addEventListener('beforeunload', listener);
        return () => window.removeEventListener('beforeunload', listener);
    }, [isUnloading]);
    // Select a wallet by name
    const select = (0,react.useCallback)((newName) => __awaiter(void 0, void 0, void 0, function* () {
        if (name === newName)
            return;
        if (adapter)
            yield adapter.disconnect();
        setName(newName);
    }), [name, adapter, setName]);
    // Handle the adapter's ready event
    const onReady = (0,react.useCallback)(() => setState((state) => (Object.assign(Object.assign({}, state), { ready: true }))), [setState]);
    // Handle the adapter's connect event
    const onConnect = (0,react.useCallback)(() => {
        if (!adapter)
            return;
        const { connected, publicKey, ready } = adapter;
        setState((state) => (Object.assign(Object.assign({}, state), { connected,
            publicKey,
            ready })));
    }, [adapter, setState]);
    // Handle the adapter's disconnect event
    const onDisconnect = (0,react.useCallback)(() => {
        // Clear the selected wallet unless the window is unloading
        if (!isUnloading.current)
            setName(null);
    }, [isUnloading, setName]);
    // Handle the adapter's error event, and local errors
    const onError = (0,react.useCallback)((error) => {
        // Call the provided error handler unless the window is unloading
        if (!isUnloading.current)
            _onError(error);
        return error;
    }, [isUnloading, _onError]);
    // Connect the adapter to the wallet
    const connect = (0,react.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        if (isConnecting.current || connecting || disconnecting || connected)
            return;
        if (!wallet || !adapter)
            throw onError(new WalletNotSelectedError());
        if (!ready) {
            // Clear the selected wallet
            setName(null);
            if (typeof window !== 'undefined') {
                window.open(wallet.url, '_blank');
            }
            throw onError(new errors/* WalletNotReadyError */.OZ());
        }
        isConnecting.current = true;
        setConnecting(true);
        try {
            yield adapter.connect();
        }
        catch (error) {
            // Clear the selected wallet
            setName(null);
            // Rethrow the error, and onError will also be called
            throw error;
        }
        finally {
            setConnecting(false);
            isConnecting.current = false;
        }
    }), [isConnecting, connecting, disconnecting, connected, wallet, adapter, onError, ready, setConnecting, setName]);
    // Disconnect the adapter from the wallet
    const disconnect = (0,react.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        if (isDisconnecting.current || disconnecting)
            return;
        if (!adapter)
            return setName(null);
        isDisconnecting.current = true;
        setDisconnecting(true);
        try {
            yield adapter.disconnect();
        }
        catch (error) {
            // Clear the selected wallet
            setName(null);
            // Rethrow the error, and onError will also be called
            throw error;
        }
        finally {
            setDisconnecting(false);
            isDisconnecting.current = false;
        }
    }), [isDisconnecting, disconnecting, adapter, setDisconnecting, setName]);
    // Send a transaction using the provided connection
    const sendTransaction = (0,react.useCallback)((transaction, connection, options) => __awaiter(void 0, void 0, void 0, function* () {
        if (!adapter)
            throw onError(new WalletNotSelectedError());
        if (!connected)
            throw onError(new errors/* WalletNotConnectedError */.oS());
        return yield adapter.sendTransaction(transaction, connection, options);
    }), [adapter, onError, connected]);
    // Sign a transaction if the wallet supports it
    const signTransaction = (0,react.useMemo)(() => adapter && 'signTransaction' in adapter
        ? (transaction) => __awaiter(void 0, void 0, void 0, function* () {
            if (!connected)
                throw onError(new errors/* WalletNotConnectedError */.oS());
            return yield adapter.signTransaction(transaction);
        })
        : undefined, [adapter, onError, connected]);
    // Sign multiple transactions if the wallet supports it
    const signAllTransactions = (0,react.useMemo)(() => adapter && 'signAllTransactions' in adapter
        ? (transactions) => __awaiter(void 0, void 0, void 0, function* () {
            if (!connected)
                throw onError(new errors/* WalletNotConnectedError */.oS());
            return yield adapter.signAllTransactions(transactions);
        })
        : undefined, [adapter, onError, connected]);
    // Sign an arbitrary message if the wallet supports it
    const signMessage = (0,react.useMemo)(() => adapter && 'signMessage' in adapter
        ? (message) => __awaiter(void 0, void 0, void 0, function* () {
            if (!connected)
                throw onError(new errors/* WalletNotConnectedError */.oS());
            return yield adapter.signMessage(message);
        })
        : undefined, [adapter, onError, connected]);
    // Setup and teardown event listeners when the adapter changes
    (0,react.useEffect)(() => {
        if (adapter) {
            adapter.on('ready', onReady);
            adapter.on('connect', onConnect);
            adapter.on('disconnect', onDisconnect);
            adapter.on('error', onError);
            return () => {
                adapter.off('ready', onReady);
                adapter.off('connect', onConnect);
                adapter.off('disconnect', onDisconnect);
                adapter.off('error', onError);
            };
        }
    }, [adapter, onReady, onConnect, onDisconnect, onError]);
    return (react.createElement(useWallet/* WalletContext */.z.Provider, { value: {
            wallets,
            autoConnect,
            wallet,
            adapter,
            publicKey,
            ready,
            connected,
            connecting,
            disconnecting,
            select,
            connect,
            disconnect,
            sendTransaction,
            signTransaction,
            signAllTransactions,
            signMessage,
        } }, children));
};
//# sourceMappingURL=WalletProvider.js.map

/***/ }),

/***/ 2257:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: function() { return /* binding */ getPhantomWallet; }
});

// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/signer.js
var signer = __webpack_require__(8677);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/errors.js
var errors = __webpack_require__(96);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/poll.js
var poll = __webpack_require__(3367);
// EXTERNAL MODULE: ./node_modules/@solana/web3.js/lib/index.browser.esm.js + 20 modules
var index_browser_esm = __webpack_require__(7480);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-phantom/lib/adapter.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class PhantomWalletAdapter extends signer/* BaseMessageSignerWalletAdapter */.e {
    constructor(config = {}) {
        super();
        this._disconnected = () => {
            const wallet = this._wallet;
            if (wallet) {
                wallet.off('disconnect', this._disconnected);
                this._wallet = null;
                this._publicKey = null;
                this.emit('error', new errors/* WalletDisconnectedError */.at());
                this.emit('disconnect');
            }
        };
        this._connecting = false;
        this._wallet = null;
        this._publicKey = null;
        if (!this.ready)
            (0,poll/* pollUntilReady */._)(this, config.pollInterval || 1000, config.pollCount || 3);
    }
    get publicKey() {
        return this._publicKey;
    }
    get ready() {
        var _a;
        return typeof window !== 'undefined' && !!((_a = window.solana) === null || _a === void 0 ? void 0 : _a.isPhantom);
    }
    get connecting() {
        return this._connecting;
    }
    get connected() {
        var _a;
        return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected);
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.connected || this.connecting)
                    return;
                this._connecting = true;
                const wallet = typeof window !== 'undefined' && window.solana;
                if (!wallet)
                    throw new errors/* WalletNotFoundError */.l5();
                if (!wallet.isPhantom)
                    throw new errors/* WalletNotInstalledError */.Yf();
                if (!wallet.isConnected) {
                    // HACK: Phantom doesn't reject or emit an event if the popup is closed
                    const handleDisconnect = wallet._handleDisconnect;
                    try {
                        yield new Promise((resolve, reject) => {
                            const connect = () => {
                                wallet.off('connect', connect);
                                resolve();
                            };
                            wallet._handleDisconnect = (...args) => {
                                wallet.off('connect', connect);
                                reject(new errors/* WalletWindowClosedError */.hd());
                                return handleDisconnect.apply(wallet, args);
                            };
                            wallet.on('connect', connect);
                            wallet.connect().catch((reason) => {
                                wallet.off('connect', connect);
                                reject(reason);
                            });
                        });
                    }
                    catch (error) {
                        if (error instanceof errors/* WalletError */.lj)
                            throw error;
                        throw new errors/* WalletConnectionError */.$w(error === null || error === void 0 ? void 0 : error.message, error);
                    }
                    finally {
                        wallet._handleDisconnect = handleDisconnect;
                    }
                }
                if (!wallet.publicKey)
                    throw new errors/* WalletConnectionError */.$w();
                let publicKey;
                try {
                    publicKey = new index_browser_esm.PublicKey(wallet.publicKey.toBytes());
                }
                catch (error) {
                    throw new errors/* WalletPublicKeyError */.Nx(error === null || error === void 0 ? void 0 : error.message, error);
                }
                wallet.on('disconnect', this._disconnected);
                this._wallet = wallet;
                this._publicKey = publicKey;
                this.emit('connect');
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
            finally {
                this._connecting = false;
            }
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            const wallet = this._wallet;
            if (wallet) {
                wallet.off('disconnect', this._disconnected);
                this._wallet = null;
                this._publicKey = null;
                try {
                    yield wallet.disconnect();
                }
                catch (error) {
                    this.emit('error', new errors/* WalletDisconnectionError */.UG(error === null || error === void 0 ? void 0 : error.message, error));
                }
            }
            this.emit('disconnect');
        });
    }
    signTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new errors/* WalletNotConnectedError */.oS();
                try {
                    return (yield wallet.signTransaction(transaction)) || transaction;
                }
                catch (error) {
                    throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
    signAllTransactions(transactions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new errors/* WalletNotConnectedError */.oS();
                try {
                    return (yield wallet.signAllTransactions(transactions)) || transactions;
                }
                catch (error) {
                    throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
    signMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new errors/* WalletNotConnectedError */.oS();
                try {
                    const { signature } = yield wallet.signMessage(message);
                    return Uint8Array.from(signature);
                }
                catch (error) {
                    throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
}
//# sourceMappingURL=adapter.js.map
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/types.js
var types = __webpack_require__(8984);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/phantom.js


const getPhantomWallet = (config = {}) => ({
    name: types/* WalletName */.w.Phantom,
    url: 'https://phantom.app',
    icon: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjM0IiB3aWR0aD0iMzQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iLjUiIHgyPSIuNSIgeTE9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM1MzRiYjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1NTFiZjkiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9Ii41IiB4Mj0iLjUiIHkxPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii44MiIvPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgZmlsbD0idXJsKCNhKSIgcj0iMTciLz48cGF0aCBkPSJtMjkuMTcwMiAxNy4yMDcxaC0yLjk5NjljMC02LjEwNzQtNC45NjgzLTExLjA1ODE3LTExLjA5NzUtMTEuMDU4MTctNi4wNTMyNSAwLTEwLjk3NDYzIDQuODI5NTctMTEuMDk1MDggMTAuODMyMzctLjEyNDYxIDYuMjA1IDUuNzE3NTIgMTEuNTkzMiAxMS45NDUzOCAxMS41OTMyaC43ODM0YzUuNDkwNiAwIDEyLjg0OTctNC4yODI5IDEzLjk5OTUtOS41MDEzLjIxMjMtLjk2MTktLjU1MDItMS44NjYxLTEuNTM4OC0xLjg2NjF6bS0xOC41NDc5LjI3MjFjMCAuODE2Ny0uNjcwMzggMS40ODQ3LTEuNDkwMDEgMS40ODQ3LS44MTk2NCAwLTEuNDg5OTgtLjY2ODMtMS40ODk5OC0xLjQ4NDd2LTIuNDAxOWMwLS44MTY3LjY3MDM0LTEuNDg0NyAxLjQ4OTk4LTEuNDg0Ny44MTk2MyAwIDEuNDkwMDEuNjY4IDEuNDkwMDEgMS40ODQ3em01LjE3MzggMGMwIC44MTY3LS42NzAzIDEuNDg0Ny0xLjQ4OTkgMS40ODQ3LS44MTk3IDAtMS40OS0uNjY4My0xLjQ5LTEuNDg0N3YtMi40MDE5YzAtLjgxNjcuNjcwNi0xLjQ4NDcgMS40OS0xLjQ4NDcuODE5NiAwIDEuNDg5OS42NjggMS40ODk5IDEuNDg0N3oiIGZpbGw9InVybCgjYikiLz48L3N2Zz4K',
    adapter: () => new PhantomWalletAdapter(config),
});
//# sourceMappingURL=phantom.js.map

/***/ }),

/***/ 2578:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  I: function() { return /* binding */ getSolflareWallet; }
});

// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/signer.js
var signer = __webpack_require__(8677);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/errors.js
var errors = __webpack_require__(96);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/poll.js
var poll = __webpack_require__(3367);
// EXTERNAL MODULE: ./node_modules/@solana/web3.js/lib/index.browser.esm.js + 20 modules
var index_browser_esm = __webpack_require__(7480);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-solflare/lib/adapter.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class SolflareWalletAdapter extends signer/* BaseMessageSignerWalletAdapter */.e {
    constructor(config = {}) {
        super();
        this._disconnected = () => {
            const wallet = this._wallet;
            if (wallet) {
                wallet.off('disconnect', this._disconnected);
                this._wallet = null;
                this._publicKey = null;
                this.emit('error', new errors/* WalletDisconnectedError */.at());
                this.emit('disconnect');
            }
        };
        this._connecting = false;
        this._wallet = null;
        this._publicKey = null;
        if (!this.ready)
            (0,poll/* pollUntilReady */._)(this, config.pollInterval || 1000, config.pollCount || 3);
    }
    get publicKey() {
        return this._publicKey;
    }
    get ready() {
        var _a;
        return typeof window !== 'undefined' && !!((_a = window.solflare) === null || _a === void 0 ? void 0 : _a.isSolflare);
    }
    get connecting() {
        return this._connecting;
    }
    get connected() {
        var _a;
        return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected);
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.connected || this.connecting)
                    return;
                this._connecting = true;
                const wallet = typeof window !== 'undefined' && window.solflare;
                if (!wallet)
                    throw new errors/* WalletNotFoundError */.l5();
                if (!wallet.isSolflare)
                    throw new errors/* WalletNotInstalledError */.Yf();
                if (!wallet.isConnected) {
                    try {
                        yield wallet.connect();
                    }
                    catch (error) {
                        throw new errors/* WalletConnectionError */.$w(error === null || error === void 0 ? void 0 : error.message, error);
                    }
                }
                // HACK: Solflare doesn't reject its promise if the popup is closed
                if (!wallet.publicKey)
                    throw new errors/* WalletConnectionError */.$w();
                let publicKey;
                try {
                    publicKey = new index_browser_esm.PublicKey(wallet.publicKey.toBytes());
                }
                catch (error) {
                    throw new errors/* WalletPublicKeyError */.Nx(error === null || error === void 0 ? void 0 : error.message, error);
                }
                wallet.on('disconnect', this._disconnected);
                this._wallet = wallet;
                this._publicKey = publicKey;
                this.emit('connect');
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
            finally {
                this._connecting = false;
            }
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            const wallet = this._wallet;
            if (wallet) {
                wallet.off('disconnect', this._disconnected);
                this._wallet = null;
                this._publicKey = null;
                try {
                    yield wallet.disconnect();
                }
                catch (error) {
                    this.emit('error', new errors/* WalletDisconnectionError */.UG(error === null || error === void 0 ? void 0 : error.message, error));
                }
            }
            this.emit('disconnect');
        });
    }
    signTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new errors/* WalletNotConnectedError */.oS();
                try {
                    return (yield wallet.signTransaction(transaction)) || transaction;
                }
                catch (error) {
                    throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
    signAllTransactions(transactions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new errors/* WalletNotConnectedError */.oS();
                try {
                    return (yield wallet.signAllTransactions(transactions)) || transactions;
                }
                catch (error) {
                    throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
    signMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new errors/* WalletNotConnectedError */.oS();
                try {
                    const { signature } = yield wallet.signMessage(message, 'utf8');
                    return Uint8Array.from(signature);
                }
                catch (error) {
                    throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
}
//# sourceMappingURL=adapter.js.map
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/types.js
var types = __webpack_require__(8984);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/solflare.js


const getSolflareWallet = (config = {}) => ({
    name: types/* WalletName */.w.Solflare,
    url: 'https://solflare.com',
    icon: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+',
    adapter: () => new SolflareWalletAdapter(config),
});
//# sourceMappingURL=solflare.js.map

/***/ }),

/***/ 9598:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: function() { return /* binding */ getSolletWallet; }
});

// EXTERNAL MODULE: ./node_modules/eventemitter3/index.js
var eventemitter3 = __webpack_require__(6729);
var eventemitter3_default = /*#__PURE__*/__webpack_require__.n(eventemitter3);
// EXTERNAL MODULE: ./node_modules/@solana/web3.js/lib/index.browser.esm.js + 20 modules
var index_browser_esm = __webpack_require__(7480);
// EXTERNAL MODULE: ./node_modules/bs58/index.js
var bs58 = __webpack_require__(7191);
var bs58_default = /*#__PURE__*/__webpack_require__.n(bs58);
;// CONCATENATED MODULE: ./node_modules/@project-serum/sol-wallet-adapter/dist/esm/index.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class Wallet extends (eventemitter3_default()) {
    constructor(provider, _network) {
        super();
        this._network = _network;
        this._publicKey = null;
        this._popup = null;
        this._handlerAdded = false;
        this._nextRequestId = 1;
        this._autoApprove = false;
        this._responsePromises = new Map();
        this.handleMessage = (e) => {
            var _a;
            if ((this._injectedProvider && e.source === window) ||
                (e.origin === ((_a = this._providerUrl) === null || _a === void 0 ? void 0 : _a.origin) && e.source === this._popup)) {
                if (e.data.method === 'connected') {
                    const newPublicKey = new index_browser_esm.PublicKey(e.data.params.publicKey);
                    if (!this._publicKey || !this._publicKey.equals(newPublicKey)) {
                        if (this._publicKey && !this._publicKey.equals(newPublicKey)) {
                            this.handleDisconnect();
                        }
                        this._publicKey = newPublicKey;
                        this._autoApprove = !!e.data.params.autoApprove;
                        this.emit('connect', this._publicKey);
                    }
                }
                else if (e.data.method === 'disconnected') {
                    this.handleDisconnect();
                }
                else if (e.data.result || e.data.error) {
                    const promises = this._responsePromises.get(e.data.id);
                    if (promises) {
                        const [resolve, reject] = promises;
                        if (e.data.result) {
                            resolve(e.data.result);
                        }
                        else {
                            reject(new Error(e.data.error));
                        }
                    }
                }
            }
        };
        this._beforeUnload = () => {
            void this.disconnect();
        };
        if (isInjectedProvider(provider)) {
            this._injectedProvider = provider;
        }
        else if (isString(provider)) {
            this._providerUrl = new URL(provider);
            this._providerUrl.hash = new URLSearchParams({
                origin: window.location.origin,
                network: this._network,
            }).toString();
        }
        else {
            throw new Error('provider parameter must be an injected provider or a URL string.');
        }
    }
    handleConnect() {
        var _a;
        if (!this._handlerAdded) {
            this._handlerAdded = true;
            window.addEventListener('message', this.handleMessage);
            window.addEventListener('beforeunload', this._beforeUnload);
        }
        if (this._injectedProvider) {
            return new Promise((resolve) => {
                void this.sendRequest('connect', {});
                resolve();
            });
        }
        else {
            window.name = 'parent';
            this._popup = window.open((_a = this._providerUrl) === null || _a === void 0 ? void 0 : _a.toString(), '_blank', 'location,resizable,width=460,height=675');
            return new Promise((resolve) => {
                this.once('connect', resolve);
            });
        }
    }
    handleDisconnect() {
        if (this._handlerAdded) {
            this._handlerAdded = false;
            window.removeEventListener('message', this.handleMessage);
            window.removeEventListener('beforeunload', this._beforeUnload);
        }
        if (this._publicKey) {
            this._publicKey = null;
            this.emit('disconnect');
        }
        this._responsePromises.forEach(([, reject], id) => {
            this._responsePromises.delete(id);
            reject(new Error('Wallet disconnected'));
        });
    }
    sendRequest(method, params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (method !== 'connect' && !this.connected) {
                throw new Error('Wallet not connected');
            }
            const requestId = this._nextRequestId;
            ++this._nextRequestId;
            return new Promise((resolve, reject) => {
                var _a, _b, _c, _d;
                this._responsePromises.set(requestId, [resolve, reject]);
                if (this._injectedProvider) {
                    this._injectedProvider.postMessage({
                        jsonrpc: '2.0',
                        id: requestId,
                        method,
                        params: Object.assign({ network: this._network }, params),
                    });
                }
                else {
                    (_a = this._popup) === null || _a === void 0 ? void 0 : _a.postMessage({
                        jsonrpc: '2.0',
                        id: requestId,
                        method,
                        params,
                    }, (_c = (_b = this._providerUrl) === null || _b === void 0 ? void 0 : _b.origin) !== null && _c !== void 0 ? _c : '');
                    if (!this.autoApprove) {
                        (_d = this._popup) === null || _d === void 0 ? void 0 : _d.focus();
                    }
                }
            });
        });
    }
    get publicKey() {
        return this._publicKey;
    }
    get connected() {
        return this._publicKey !== null;
    }
    get autoApprove() {
        return this._autoApprove;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._popup) {
                this._popup.close();
            }
            yield this.handleConnect();
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._injectedProvider) {
                yield this.sendRequest('disconnect', {});
            }
            if (this._popup) {
                this._popup.close();
            }
            this.handleDisconnect();
        });
    }
    sign(data, display) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(data instanceof Uint8Array)) {
                throw new Error('Data must be an instance of Uint8Array');
            }
            const response = (yield this.sendRequest('sign', {
                data,
                display,
            }));
            const signature = bs58_default().decode(response.signature);
            const publicKey = new index_browser_esm.PublicKey(response.publicKey);
            return {
                signature,
                publicKey,
            };
        });
    }
    signTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = (yield this.sendRequest('signTransaction', {
                message: bs58_default().encode(transaction.serializeMessage()),
            }));
            const signature = bs58_default().decode(response.signature);
            const publicKey = new index_browser_esm.PublicKey(response.publicKey);
            transaction.addSignature(publicKey, signature);
            return transaction;
        });
    }
    signAllTransactions(transactions) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = (yield this.sendRequest('signAllTransactions', {
                messages: transactions.map((tx) => bs58_default().encode(tx.serializeMessage())),
            }));
            const signatures = response.signatures.map((s) => bs58_default().decode(s));
            const publicKey = new index_browser_esm.PublicKey(response.publicKey);
            transactions = transactions.map((tx, idx) => {
                tx.addSignature(publicKey, signatures[idx]);
                return tx;
            });
            return transactions;
        });
    }
    diffieHellman(publicKey) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(publicKey instanceof Uint8Array)) {
                throw new Error('Data must be an instance of Uint8Array');
            }
            const response = (yield this.sendRequest('diffieHellman', {
                publicKey,
            }));
            return response;
        });
    }
}
function isString(a) {
    return typeof a === 'string';
}
function isInjectedProvider(a) {
    return (isObject(a) && 'postMessage' in a && typeof a.postMessage === 'function');
}
function isObject(a) {
    return typeof a === 'object' && a !== null;
}
//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/signer.js
var signer = __webpack_require__(8677);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/errors.js
var errors = __webpack_require__(96);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/adapter.js
var adapter = __webpack_require__(3792);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-base/lib/poll.js
var poll = __webpack_require__(3367);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-sollet/lib/adapter.js
var adapter_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class SolletWalletAdapter extends signer/* BaseMessageSignerWalletAdapter */.e {
    constructor(config = {}) {
        super();
        this._disconnected = () => {
            const wallet = this._wallet;
            if (wallet) {
                wallet.off('disconnect', this._disconnected);
                this._wallet = null;
                this.emit('error', new errors/* WalletDisconnectedError */.at());
                this.emit('disconnect');
            }
        };
        this._provider = config.provider || (typeof window === 'undefined' ? undefined : window.sollet);
        this._network = config.network || adapter/* WalletAdapterNetwork */.QZ.Mainnet;
        this._connecting = false;
        this._wallet = null;
        if (!this.ready)
            (0,poll/* pollUntilReady */._)(this, config.pollInterval || 1000, config.pollCount || 3);
    }
    get publicKey() {
        var _a;
        return ((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.publicKey) || null;
    }
    get ready() {
        var _a;
        return (typeof this._provider === 'string' ||
            (typeof window !== 'undefined' && typeof ((_a = window.sollet) === null || _a === void 0 ? void 0 : _a.postMessage) === 'function'));
    }
    get connecting() {
        return this._connecting;
    }
    get connected() {
        var _a;
        return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.connected);
    }
    connect() {
        return adapter_awaiter(this, void 0, void 0, function* () {
            try {
                if (this.connected || this.connecting)
                    return;
                this._connecting = true;
                const provider = this._provider || (typeof window !== 'undefined' && window.sollet);
                if (!provider)
                    throw new errors/* WalletNotFoundError */.l5();
                let wallet;
                try {
                    wallet = new Wallet(provider, this._network);
                    // HACK: sol-wallet-adapter doesn't reject or emit an event if the popup or extension is closed or blocked
                    const handleDisconnect = wallet.handleDisconnect;
                    let timeout;
                    let interval;
                    try {
                        yield new Promise((resolve, reject) => {
                            const connect = () => {
                                if (timeout)
                                    clearTimeout(timeout);
                                wallet.off('connect', connect);
                                resolve();
                            };
                            wallet.handleDisconnect = (...args) => {
                                wallet.off('connect', connect);
                                reject(new errors/* WalletWindowClosedError */.hd());
                                return handleDisconnect.apply(wallet, args);
                            };
                            wallet.on('connect', connect);
                            wallet.connect().catch((reason) => {
                                wallet.off('connect', connect);
                                reject(reason);
                            });
                            if (typeof provider === 'string') {
                                let count = 0;
                                interval = setInterval(() => {
                                    const popup = wallet._popup;
                                    if (popup) {
                                        if (popup.closed)
                                            reject(new errors/* WalletWindowClosedError */.hd());
                                    }
                                    else {
                                        if (count > 50)
                                            reject(new errors/* WalletWindowBlockedError */.d2());
                                    }
                                    count++;
                                }, 100);
                            }
                            else {
                                // HACK: sol-wallet-adapter doesn't reject or emit an event if the extension is closed or ignored
                                timeout = setTimeout(() => reject(new errors/* WalletTimeoutError */.NK()), 10000);
                            }
                        });
                    }
                    finally {
                        wallet.handleDisconnect = handleDisconnect;
                        if (interval)
                            clearInterval(interval);
                    }
                }
                catch (error) {
                    if (error instanceof errors/* WalletError */.lj)
                        throw error;
                    throw new errors/* WalletConnectionError */.$w(error === null || error === void 0 ? void 0 : error.message, error);
                }
                wallet.on('disconnect', this._disconnected);
                this._wallet = wallet;
                this.emit('connect');
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
            finally {
                this._connecting = false;
            }
        });
    }
    disconnect() {
        return adapter_awaiter(this, void 0, void 0, function* () {
            const wallet = this._wallet;
            if (wallet) {
                wallet.off('disconnect', this._disconnected);
                this._wallet = null;
                // HACK: sol-wallet-adapter doesn't reliably fulfill its promise or emit an event on disconnect
                const handleDisconnect = wallet.handleDisconnect;
                try {
                    yield new Promise((resolve, reject) => {
                        const timeout = setTimeout(() => resolve(), 250);
                        wallet.handleDisconnect = (...args) => {
                            clearTimeout(timeout);
                            resolve();
                            // HACK: sol-wallet-adapter rejects with an uncaught promise error
                            wallet._responsePromises = new Map();
                            return handleDisconnect.apply(wallet, args);
                        };
                        wallet.disconnect().then(() => {
                            clearTimeout(timeout);
                            resolve();
                        }, (error) => {
                            clearTimeout(timeout);
                            // HACK: sol-wallet-adapter rejects with an error on disconnect
                            if ((error === null || error === void 0 ? void 0 : error.message) === 'Wallet disconnected') {
                                resolve();
                            }
                            else {
                                reject(error);
                            }
                        });
                    });
                }
                catch (error) {
                    this.emit('error', new errors/* WalletDisconnectionError */.UG(error === null || error === void 0 ? void 0 : error.message, error));
                }
                finally {
                    wallet.handleDisconnect = handleDisconnect;
                }
            }
            this.emit('disconnect');
        });
    }
    signTransaction(transaction) {
        return adapter_awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new errors/* WalletNotConnectedError */.oS();
                try {
                    return (yield wallet.signTransaction(transaction)) || transaction;
                }
                catch (error) {
                    throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
    signAllTransactions(transactions) {
        return adapter_awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new errors/* WalletNotConnectedError */.oS();
                try {
                    return (yield wallet.signAllTransactions(transactions)) || transactions;
                }
                catch (error) {
                    throw new errors/* WalletSignTransactionError */.PY(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
    signMessage(message) {
        return adapter_awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new errors/* WalletNotConnectedError */.oS();
                try {
                    const { signature } = yield wallet.sign(message, 'utf8');
                    return Uint8Array.from(signature);
                }
                catch (error) {
                    throw new errors/* WalletSignMessageError */.fk(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
}
//# sourceMappingURL=adapter.js.map
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/types.js
var types = __webpack_require__(8984);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-wallets/lib/sollet.js
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const getSolletWallet = (_a = {}) => {
    var { provider } = _a, config = __rest(_a, ["provider"]);
    return ({
        name: types/* WalletName */.w.Sollet,
        url: 'https://www.sollet.io',
        icon: 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUzMCIgd2lkdGg9IjUzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtLTEtMWg1MzJ2NTMyaC01MzJ6IiBmaWxsPSJub25lIi8+PGcgZmlsbD0iIzAwZmZhMyI+PHBhdGggZD0ibTg4Ljg4OTM1IDM3Mi45ODIwMWMzLjE5My0zLjE5IDcuNTIyLTQuOTgyIDEyLjAzNS00Ljk4Mmg0MTYuNDYxYzcuNTg2IDAgMTEuMzg0IDkuMTc0IDYuMDE3IDE0LjUzNmwtODIuMjkxIDgyLjIyNmMtMy4xOTMgMy4xOTEtNy41MjIgNC45ODMtMTIuMDM2IDQuOTgzaC00MTYuNDYwMWMtNy41ODY2IDAtMTEuMzg0NS05LjE3NC02LjAxNzgtMTQuNTM3bDgyLjI5MTktODIuMjI2eiIvPjxwYXRoIGQ9Im04OC44ODkzNSA2NS45ODI1YzMuMTkzLTMuMTkwNCA3LjUyMi00Ljk4MjUgMTIuMDM1LTQuOTgyNWg0MTYuNDYxYzcuNTg2IDAgMTEuMzg0IDkuMTczOSA2LjAxNyAxNC41MzYzbC04Mi4yOTEgODIuMjI2N2MtMy4xOTMgMy4xOS03LjUyMiA0Ljk4Mi0xMi4wMzYgNC45ODJoLTQxNi40NjAxYy03LjU4NjYgMC0xMS4zODQ1LTkuMTc0LTYuMDE3OC0xNC41MzZsODIuMjkxOS04Mi4yMjY1eiIvPjxwYXRoIGQ9Im00NDEuMTExMzUgMjE5LjEwOTVjLTMuMTkzLTMuMTktNy41MjItNC45ODItMTIuMDM2LTQuOTgyaC00MTYuNDYwMWMtNy41ODY2IDAtMTEuMzg0NSA5LjE3My02LjAxNzggMTQuNTM2bDgyLjI5MTkgODIuMjI2YzMuMTkzIDMuMTkgNy41MjIgNC45ODMgMTIuMDM1IDQuOTgzaDQxNi40NjFjNy41ODYgMCAxMS4zODQtOS4xNzQgNi4wMTctMTQuNTM3eiIvPjwvZz48L3N2Zz4=',
        adapter: () => new SolletWalletAdapter(Object.assign({ provider: 'https://www.sollet.io' }, config)),
    });
};
//# sourceMappingURL=sollet.js.map

/***/ }),

/***/ 8984:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: function() { return /* binding */ WalletName; }
/* harmony export */ });
var WalletName;
(function (WalletName) {
    WalletName["BitKeep"] = "BitKeep";
    WalletName["Bitpie"] = "Bitpie";
    WalletName["Blocto"] = "Blocto";
    WalletName["Clover"] = "Clover";
    WalletName["Coin98"] = "Coin98";
    WalletName["Coinhub"] = "Coinhub";
    WalletName["Ledger"] = "Ledger";
    WalletName["MathWallet"] = "MathWallet";
    WalletName["Phantom"] = "Phantom";
    WalletName["SafePal"] = "SafePal";
    WalletName["Slope"] = "Slope";
    WalletName["Solflare"] = "Solflare";
    WalletName["SolflareWeb"] = "Solflare (Web)";
    WalletName["Sollet"] = "Sollet";
    WalletName["SolletExtension"] = "Sollet (Extension)";
    WalletName["Solong"] = "Solong";
    WalletName["TokenPocket"] = "TokenPocket";
    WalletName["Torus"] = "Torus";
    // WalletConnect = 'WalletConnect', // not published yet
})(WalletName || (WalletName = {}));
//# sourceMappingURL=types.js.map

/***/ })

}]);