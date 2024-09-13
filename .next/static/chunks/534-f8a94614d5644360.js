"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[534],{

/***/ 6729:
/***/ (function(module) {



var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ 8714:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  sR: function() { return /* reexport */ WalletModalProvider; },
  aD: function() { return /* reexport */ WalletMultiButton; },
  hB: function() { return /* reexport */ useWalletModal; }
});

// UNUSED EXPORTS: WalletConnectButton, WalletDisconnectButton, WalletIcon, WalletModal, WalletModalButton, WalletModalContext

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/useWalletModal.js

const WalletModalContext = (0,react.createContext)({});
function useWalletModal() {
    return (0,react.useContext)(WalletModalContext);
}
//# sourceMappingURL=useWalletModal.js.map
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useWallet.js
var lib_useWallet = __webpack_require__(3940);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/Button.js

const Button_Button = (props) => {
    const justifyContent = props.endIcon || props.startIcon ? 'space-between' : 'center';
    return (react.createElement("button", { className: `wallet-adapter-button ${props.className || ''}`, disabled: props.disabled, onClick: props.onClick, style: Object.assign({ justifyContent }, props.style), tabIndex: props.tabIndex || 0, type: "button" },
        props.startIcon && react.createElement("i", { className: "wallet-adapter-button-start-icon" }, props.startIcon),
        props.children,
        props.endIcon && react.createElement("i", { className: "wallet-adapter-button-end-icon" }, props.endIcon)));
};
//# sourceMappingURL=Button.js.map
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletIcon.js
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

const WalletIcon_WalletIcon = (_a) => {
    var { wallet } = _a, props = __rest(_a, ["wallet"]);
    return wallet && react.createElement("img", Object.assign({ src: wallet.icon, alt: `${wallet.name} icon` }, props));
};
//# sourceMappingURL=WalletIcon.js.map
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletConnectButton.js
var WalletConnectButton_rest = (undefined && undefined.__rest) || function (s, e) {
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




const WalletConnectButton = (_a) => {
    var { children, disabled, onClick } = _a, props = WalletConnectButton_rest(_a, ["children", "disabled", "onClick"]);
    const { wallet, connect, connecting, connected } = (0,lib_useWallet/* useWallet */.O)();
    const handleClick = (0,react.useCallback)((event) => {
        if (onClick)
            onClick(event);
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        if (!event.defaultPrevented)
            connect().catch(() => { });
    }, [onClick, connect]);
    const content = (0,react.useMemo)(() => {
        if (children)
            return children;
        if (connecting)
            return 'Connecting ...';
        if (connected)
            return 'Connected';
        if (wallet)
            return 'Connect';
        return 'Connect Wallet';
    }, [children, connecting, connected, wallet]);
    return (react.createElement(Button_Button, Object.assign({ className: "wallet-adapter-button-trigger", disabled: disabled || !wallet || connecting || connected, startIcon: wallet ? react.createElement(WalletIcon_WalletIcon, { wallet: wallet }) : undefined, onClick: handleClick }, props), content));
};
//# sourceMappingURL=WalletConnectButton.js.map
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/Collapse.js

const Collapse = ({ id, children, expanded = false }) => {
    const ref = (0,react.useRef)(null);
    const instant = (0,react.useRef)(true);
    const transition = 'height 250ms ease-out';
    const openCollapse = () => {
        const node = ref.current;
        if (!node)
            return;
        requestAnimationFrame(() => {
            node.style.height = node.scrollHeight + 'px';
        });
    };
    const closeCollapse = () => {
        const node = ref.current;
        if (!node)
            return;
        requestAnimationFrame(() => {
            node.style.height = node.offsetHeight + 'px';
            node.style.overflow = 'hidden';
            requestAnimationFrame(() => {
                node.style.height = '0';
            });
        });
    };
    (0,react.useLayoutEffect)(() => {
        if (expanded) {
            openCollapse();
        }
        else {
            closeCollapse();
        }
    }, [expanded]);
    (0,react.useLayoutEffect)(() => {
        const node = ref.current;
        if (!node)
            return;
        function handleComplete() {
            if (!node)
                return;
            node.style.overflow = expanded ? 'initial' : 'hidden';
            if (expanded) {
                node.style.height = 'auto';
            }
        }
        function handleTransitionEnd(event) {
            if (node && event.target === node && event.propertyName === 'height') {
                handleComplete();
            }
        }
        if (instant.current) {
            handleComplete();
            instant.current = false;
        }
        node.addEventListener('transitionend', handleTransitionEnd);
        return () => node.removeEventListener('transitionend', handleTransitionEnd);
    }, [expanded]);
    return (react.createElement("div", { children: children, className: "wallet-adapter-collapse", id: id, ref: ref, role: "region", style: { height: 0, transition: instant.current ? undefined : transition } }));
};
//# sourceMappingURL=Collapse.js.map
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletListItem.js



const WalletListItem = ({ handleClick, tabIndex, wallet }) => {
    return (react.createElement("li", null,
        react.createElement(Button_Button, { onClick: handleClick, endIcon: react.createElement(WalletIcon_WalletIcon, { wallet: wallet }), tabIndex: tabIndex }, wallet.name)));
};
//# sourceMappingURL=WalletListItem.js.map
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletModal.js







const WalletModal = ({ className = '', logo, featuredWallets = 3, container = 'body', }) => {
    const ref = (0,react.useRef)(null);
    const { wallets, select } = (0,lib_useWallet/* useWallet */.O)();
    const { setVisible } = useWalletModal();
    const [expanded, setExpanded] = (0,react.useState)(false);
    const [fadeIn, setFadeIn] = (0,react.useState)(false);
    const [portal, setPortal] = (0,react.useState)(null);
    const [featured, more] = (0,react.useMemo)(() => [wallets.slice(0, featuredWallets), wallets.slice(featuredWallets)], [wallets, featuredWallets]);
    const hideModal = (0,react.useCallback)(() => {
        setFadeIn(false);
        setTimeout(() => setVisible(false), 150);
    }, [setFadeIn, setVisible]);
    const handleClose = (0,react.useCallback)((event) => {
        event.preventDefault();
        hideModal();
    }, [hideModal]);
    const handleWalletClick = (0,react.useCallback)((event, walletName) => {
        select(walletName);
        handleClose(event);
    }, [select, handleClose]);
    const handleCollapseClick = (0,react.useCallback)(() => setExpanded(!expanded), [setExpanded, expanded]);
    const handleTabKey = (0,react.useCallback)((event) => {
        const node = ref.current;
        if (!node)
            return;
        // here we query all focusable elements
        const focusableElements = node.querySelectorAll('button');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey) {
            // if going backward by pressing tab and firstElement is active, shift focus to last focusable element
            if (document.activeElement === firstElement) {
                lastElement.focus();
                event.preventDefault();
            }
        }
        else {
            // if going forward by pressing tab and lastElement is active, shift focus to first focusable element
            if (document.activeElement === lastElement) {
                firstElement.focus();
                event.preventDefault();
            }
        }
    }, [ref]);
    (0,react.useLayoutEffect)(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                hideModal();
            }
            else if (event.key === 'Tab') {
                handleTabKey(event);
            }
        };
        // Get original overflow
        const { overflow } = window.getComputedStyle(document.body);
        // Hack to enable fade in animation after mount
        setTimeout(() => setFadeIn(true), 0);
        // Prevent scrolling on mount
        document.body.style.overflow = 'hidden';
        // Listen for keydown events
        window.addEventListener('keydown', handleKeyDown, false);
        return () => {
            // Re-enable scrolling when component unmounts
            document.body.style.overflow = overflow;
            window.removeEventListener('keydown', handleKeyDown, false);
        };
    }, [hideModal, handleTabKey]);
    (0,react.useLayoutEffect)(() => setPortal(document.querySelector(container)), [setPortal, container]);
    return (portal &&
        (0,react_dom.createPortal)(react.createElement("div", { "aria-labelledby": "wallet-adapter-modal-title", "aria-modal": "true", className: `wallet-adapter-modal ${fadeIn && 'wallet-adapter-modal-fade-in'} ${className}`, ref: ref, role: "dialog" },
            react.createElement("div", { className: "wallet-adapter-modal-container" },
                react.createElement("div", { className: `wallet-adapter-modal-wrapper ${!logo && 'wallet-adapter-modal-wrapper-no-logo'}` },
                    logo && (react.createElement("div", { className: "wallet-adapter-modal-logo-wrapper" }, typeof logo === 'string' ? (react.createElement("img", { alt: "logo", className: "wallet-adapter-modal-logo", src: logo })) : (logo))),
                    react.createElement("h1", { className: "wallet-adapter-modal-title", id: "wallet-adapter-modal-title" }, "Connect Wallet"),
                    react.createElement("button", { onClick: handleClose, className: "wallet-adapter-modal-button-close" },
                        react.createElement("svg", { width: "14", height: "14" },
                            react.createElement("path", { d: "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z" }))),
                    react.createElement("ul", { className: "wallet-adapter-modal-list" }, featured.map((wallet) => (react.createElement(WalletListItem, { key: wallet.name, handleClick: (event) => handleWalletClick(event, wallet.name), wallet: wallet })))),
                    more.length ? (react.createElement(react.Fragment, null,
                        react.createElement(Collapse, { expanded: expanded, id: "wallet-adapter-modal-collapse" },
                            react.createElement("ul", { className: "wallet-adapter-modal-list" }, more.map((wallet) => (react.createElement(WalletListItem, { key: wallet.name, handleClick: (event) => handleWalletClick(event, wallet.name), tabIndex: expanded ? 0 : -1, wallet: wallet }))))),
                        react.createElement(Button_Button, { "aria-controls": "wallet-adapter-modal-collapse", "aria-expanded": expanded, className: `wallet-adapter-modal-collapse-button ${expanded && 'wallet-adapter-modal-collapse-button-active'}`, endIcon: react.createElement("svg", { width: "11", height: "6", xmlns: "http://www.w3.org/2000/svg" },
                                react.createElement("path", { d: "m5.938 5.73 4.28-4.126a.915.915 0 0 0 0-1.322 1 1 0 0 0-1.371 0L5.253 3.736 1.659.272a1 1 0 0 0-1.371 0A.93.93 0 0 0 0 .932c0 .246.1.48.288.662l4.28 4.125a.99.99 0 0 0 1.37.01z" })), onClick: handleCollapseClick },
                            expanded ? 'Less' : 'More',
                            " options"))) : null)),
            react.createElement("div", { className: "wallet-adapter-modal-overlay", onMouseDown: handleClose })), portal));
};
//# sourceMappingURL=WalletModal.js.map
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletModalButton.js
var WalletModalButton_rest = (undefined && undefined.__rest) || function (s, e) {
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



const WalletModalButton = (_a) => {
    var { children = 'Select Wallet', onClick } = _a, props = WalletModalButton_rest(_a, ["children", "onClick"]);
    const { visible, setVisible } = useWalletModal();
    const handleClick = (0,react.useCallback)((event) => {
        if (onClick)
            onClick(event);
        if (!event.defaultPrevented)
            setVisible(!visible);
    }, [onClick, setVisible, visible]);
    return (react.createElement(Button_Button, Object.assign({ className: "wallet-adapter-button-trigger", onClick: handleClick }, props), children));
};
//# sourceMappingURL=WalletModalButton.js.map
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletModalProvider.js
var WalletModalProvider_rest = (undefined && undefined.__rest) || function (s, e) {
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



const WalletModalProvider = (_a) => {
    var { children } = _a, props = WalletModalProvider_rest(_a, ["children"]);
    const [visible, setVisible] = (0,react.useState)(false);
    return (react.createElement(WalletModalContext.Provider, { value: {
            visible,
            setVisible,
        } },
        children,
        visible && react.createElement(WalletModal, Object.assign({}, props))));
};
//# sourceMappingURL=WalletModalProvider.js.map
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletDisconnectButton.js
var WalletDisconnectButton_rest = (undefined && undefined.__rest) || function (s, e) {
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




const WalletDisconnectButton = (_a) => {
    var { children, disabled, onClick } = _a, props = WalletDisconnectButton_rest(_a, ["children", "disabled", "onClick"]);
    const { wallet, disconnect, disconnecting } = useWallet();
    const handleClick = useCallback((event) => {
        if (onClick)
            onClick(event);
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        if (!event.defaultPrevented)
            disconnect().catch(() => { });
    }, [onClick, disconnect]);
    const content = useMemo(() => {
        if (children)
            return children;
        if (disconnecting)
            return 'Disconnecting ...';
        if (wallet)
            return 'Disconnect';
        return 'Disconnect Wallet';
    }, [children, disconnecting, wallet]);
    return (React.createElement(Button, Object.assign({ className: "wallet-adapter-button-trigger", disabled: disabled || !wallet, startIcon: wallet ? React.createElement(WalletIcon, { wallet: wallet }) : undefined, onClick: handleClick }, props), content));
};
//# sourceMappingURL=WalletDisconnectButton.js.map
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/WalletMultiButton.js
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var WalletMultiButton_rest = (undefined && undefined.__rest) || function (s, e) {
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







const WalletMultiButton = (_a) => {
    var { children } = _a, props = WalletMultiButton_rest(_a, ["children"]);
    const { publicKey, wallet, disconnect } = (0,lib_useWallet/* useWallet */.O)();
    const { setVisible } = useWalletModal();
    const [copied, setCopied] = (0,react.useState)(false);
    const [active, setActive] = (0,react.useState)(false);
    const ref = (0,react.useRef)(null);
    const base58 = (0,react.useMemo)(() => publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58(), [publicKey]);
    const content = (0,react.useMemo)(() => {
        if (children)
            return children;
        if (!wallet || !base58)
            return null;
        return base58.slice(0, 4) + '..' + base58.slice(-4);
    }, [children, wallet, base58]);
    const copyAddress = (0,react.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        if (base58) {
            yield navigator.clipboard.writeText(base58);
            setCopied(true);
            setTimeout(() => setCopied(false), 400);
        }
    }), [base58]);
    const openDropdown = (0,react.useCallback)(() => setActive(true), [setActive]);
    const closeDropdown = (0,react.useCallback)(() => setActive(false), [setActive]);
    const openModal = (0,react.useCallback)(() => {
        setVisible(true);
        closeDropdown();
    }, [setVisible, closeDropdown]);
    (0,react.useEffect)(() => {
        const listener = (event) => {
            const node = ref.current;
            // Do nothing if clicking dropdown or its descendants
            if (!node || node.contains(event.target))
                return;
            closeDropdown();
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, closeDropdown]);
    if (!wallet)
        return react.createElement(WalletModalButton, Object.assign({}, props), children);
    if (!base58)
        return react.createElement(WalletConnectButton, Object.assign({}, props), children);
    return (react.createElement("div", { className: "wallet-adapter-dropdown" },
        react.createElement(Button_Button, Object.assign({ "aria-expanded": active, className: "wallet-adapter-button-trigger", style: Object.assign({ pointerEvents: active ? 'none' : 'auto' }, props.style), onClick: openDropdown, startIcon: react.createElement(WalletIcon_WalletIcon, { wallet: wallet }) }, props), content),
        react.createElement("ul", { "aria-label": "dropdown-list", className: `wallet-adapter-dropdown-list ${active && 'wallet-adapter-dropdown-list-active'}`, ref: ref, role: "menu" },
            react.createElement("li", { onClick: copyAddress, className: "wallet-adapter-dropdown-list-item", role: "menuitem" }, copied ? 'Copied' : 'Copy address'),
            react.createElement("li", { onClick: openModal, className: "wallet-adapter-dropdown-list-item", role: "menuitem" }, "Connect a different wallet"),
            react.createElement("li", { onClick: disconnect, className: "wallet-adapter-dropdown-list-item", role: "menuitem" }, "Disconnect"))));
};
//# sourceMappingURL=WalletMultiButton.js.map
;// CONCATENATED MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/index.js








//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3940:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: function() { return /* binding */ useWallet; },
/* harmony export */   z: function() { return /* binding */ WalletContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

const WalletContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
function useWallet() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(WalletContext);
}
//# sourceMappingURL=useWallet.js.map

/***/ })

}]);