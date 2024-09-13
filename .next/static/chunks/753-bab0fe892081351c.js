(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[753],{

/***/ 5753:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  IG: function() { return /* reexport */ CandyMachineMintView; },
  Hr: function() { return /* reexport */ GalleryView; },
  ug: function() { return /* reexport */ HomeView; },
  mV: function() { return /* reexport */ SolanaTweeterView; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useWallet.js
var useWallet = __webpack_require__(3940);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react-ui/lib/index.js + 11 modules
var lib = __webpack_require__(8714);
;// CONCATENATED MODULE: ./src/components/Loader.tsx

const Loader = (param)=>{
    let { text = "Loading...", noText = false } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col justify-center items-center text-xl font-light",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                className: "animate-spin h-8 w-8 text-white",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "white",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                        className: "opacity-5",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    })
                ]
            }),
            " ",
            !noText ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "opacity-50 mt-4",
                children: text
            }) : null
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/SolanaLogo.tsx

const SolanaLogo = ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "46",
        height: "35",
        xmlns: "http://www.w3.org/2000/svg",
        className: "inline",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        x1: "90.737%",
                        y1: "34.776%",
                        x2: "35.509%",
                        y2: "55.415%",
                        id: "a",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#00FFA3",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#DC1FFF",
                                offset: "100%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        x1: "66.588%",
                        y1: "43.8%",
                        x2: "11.36%",
                        y2: "64.439%",
                        id: "b",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#00FFA3",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#DC1FFF",
                                offset: "100%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        x1: "78.586%",
                        y1: "39.317%",
                        x2: "23.358%",
                        y2: "59.956%",
                        id: "c",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#00FFA3",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#DC1FFF",
                                offset: "100%"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                fillRule: "nonzero",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "M7.256 26.713c.27-.27.64-.427 1.033-.427h35.64a.73.73 0 0 1 .517 1.247l-7.04 7.04c-.27.27-.64.427-1.034.427H.732a.73.73 0 0 1-.516-1.246l7.04-7.04Z",
                        fill: "url(#a)",
                        transform: "translate(.98)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "M7.256.427C7.536.157 7.907 0 8.289 0h35.64a.73.73 0 0 1 .517 1.246l-7.04 7.04c-.27.27-.64.428-1.034.428H.732a.73.73 0 0 1-.516-1.247l7.04-7.04Z",
                        fill: "url(#b)",
                        transform: "translate(.98)"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "M37.405 13.486c-.27-.27-.64-.427-1.033-.427H.732a.73.73 0 0 0-.516 1.246l7.04 7.04c.27.27.64.428 1.033.428h35.64a.73.73 0 0 0 .517-1.247l-7.04-7.04Z",
                        fill: "url(#c)",
                        transform: "translate(.98)"
                    })
                ]
            })
        ]
    });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/SelectAndConnectWalletButton.tsx




const SelectAndConnectWalletButton = (param)=>{
    let { onUseWalletClick } = param;
    const { setVisible } = (0,lib/* useWalletModal */.hB)();
    const { wallet, connect, connecting, publicKey } = (0,useWallet/* useWallet */.O)();
    (0,react.useEffect)(()=>{
        if (!publicKey && wallet) {
            try {
                connect();
            } catch (error) {
                console.log("Error connecting to the wallet: ", error.message);
            }
        }
    }, [
        wallet
    ]);
    const handleWalletClick = ()=>{
        try {
            if (!wallet) {
                setVisible(true);
            } else {
                connect();
            }
            onUseWalletClick();
        } catch (error) {
            console.log("Error connecting to the wallet: ", error.message);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        className: "btn btn-primary btn-lg",
        onClick: handleWalletClick,
        disabled: connecting,
        children: publicKey ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: "Use Wallet Address"
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: "Connect Wallet"
        })
    });
};

;// CONCATENATED MODULE: ./src/components/index.tsx




// EXTERNAL MODULE: ./src/views/HomeView/index.module.css
var index_module = __webpack_require__(4283);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./src/views/HomeView/index.tsx






const HomeView = (param)=>{
    let {} = param;
    const { publicKey } = (0,useWallet/* useWallet */.O)();
    const onClick = ()=>{};
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "container mx-auto max-w-6xl p-8 2xl:px-0",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (index_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                className: "btn btn-square btn-ghost",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-4xl",
                                    children: "\uD83D\uDCAD"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-1 px-2 mx-2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-lg font-bold",
                                children: "SolFeed"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(lib/* WalletMultiButton */.aD, {
                                className: "btn btn-ghost"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-center pt-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "hero min-h-16 py-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-center hero-content",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "max-w-lg",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                            className: "mb-5 text-5xl font-bold",
                                            children: [
                                                "Hello SolFeeders ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(SolanaLogo, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "mb-5",
                                            children: "SolFeed is a decentralized social media platform built on the Solana blockchain, providing users with a fast, secure and censorship-resistant way to share their thoughts, ideas and media with others in the Solana community."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "mb-5",
                                            children: "Sollana wallet adapter is connected and ready to use."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            children: publicKey ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                children: [
                                                    "Your address: ",
                                                    publicKey.toBase58()
                                                ]
                                            }) : null
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "max-w-4xl mx-auto",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                className: "leading-10",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                        href: "/tweeter",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            className: "mb-5 text-4xl font-bold hover:underline",
                                            children: "\uD83D\uDCAD SolFeed!"
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./node_modules/@nfteyez/sol-rayz-react/dist/index.js
var dist = __webpack_require__(7452);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useConnection.js
var useConnection = __webpack_require__(9118);
// EXTERNAL MODULE: ./node_modules/swr/dist/index.mjs
var swr_dist = __webpack_require__(8100);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/EyeOffIcon.js
var EyeOffIcon = __webpack_require__(6361);
;// CONCATENATED MODULE: ./src/utils/fetcher.tsx
const fetcher = async (url)=>{
    const res = await fetch(url);
    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
        const error = new Error("An error occurred while fetching the data.");
        // Attach extra info to the error object.
        const info = await res.json();
        error.status = res.status;
        console.warn(url, "\nAn error occured while fetching:\n", info);
        throw error;
    }
    return res.json();
};

;// CONCATENATED MODULE: ./src/views/GalleryView/NftCard.tsx





const NftCard = (param)=>{
    let { details, onSelect, onTokenDetailsFetched = ()=>{} } = param;
    const [fallbackImage, setFallbackImage] = (0,react.useState)(false);
    var _details_data;
    const { name, uri } = (_details_data = details === null || details === void 0 ? void 0 : details.data) !== null && _details_data !== void 0 ? _details_data : {};
    const { data, error } = (0,swr_dist/* default */.ZP)(// uri || url ? getMetaUrl(details) : null,
    uri, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
    // console.log("data", data);
    (0,react.useEffect)(()=>{
        if (!error && !!data) {
            onTokenDetailsFetched(data);
        }
    }, [
        data,
        error
    ]);
    const onImageError = ()=>setFallbackImage(true);
    const { image } = data !== null && data !== void 0 ? data : {};
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "card bordered max-w-xs compact rounded-md",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("figure", {
                className: "min-h-16 animation-pulse-color",
                children: !fallbackImage || !error ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: image,
                    onError: onImageError,
                    className: "bg-gray-800 object-cover"
                }) : // Fallback when preview isn't available
                // This could be broken image, video, or audio
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "w-auto h-48 flex items-center justify-center bg-gray-900 bg-opacity-40",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EyeOffIcon/* default */.Z, {
                        className: "h-16 w-16 text-white-500"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "card-body",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                    className: "card-title text-sm text-left",
                    children: name
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/views/GalleryView/index.module.css
var GalleryView_index_module = __webpack_require__(7279);
var GalleryView_index_module_default = /*#__PURE__*/__webpack_require__.n(GalleryView_index_module);
;// CONCATENATED MODULE: ./src/views/GalleryView/index.tsx










const walletPublicKey = "3EqUrFrjgABCWAnqMYjZ36GcktiwDtFdkNYwY6C6cDzy";
const GalleryView = (param)=>{
    let {} = param;
    const { connection } = (0,useConnection/* useConnection */.R)();
    const [walletToParsePublicKey, setWalletToParsePublicKey] = (0,react.useState)(walletPublicKey);
    const { publicKey } = (0,useWallet/* useWallet */.O)();
    const { nfts, isLoading, error } = (0,dist/* useWalletNfts */.R)({
        publicAddress: walletToParsePublicKey,
        connection
    });
    console.log("nfts", nfts);
    const onChange = (e)=>{
        const { value } = e.target;
        setWalletToParsePublicKey(value.trim());
    };
    const onUseWalletClick = ()=>{
        if (publicKey) {
            setWalletToParsePublicKey(publicKey === null || publicKey === void 0 ? void 0 : publicKey.toBase58());
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "container mx-auto max-w-6xl p-8 2xl:px-0",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (GalleryView_index_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                className: "btn btn-square btn-ghost",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-4xl",
                                    children: "\uD83C\uDFDE"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-1 px-2 mx-2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm breadcrumbs",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "text-xl",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    children: "Home"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "opacity-40",
                                                children: "NFT Gallery"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(lib/* WalletMultiButton */.aD, {
                                className: "btn btn-ghost"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "text-center pt-2",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "hero min-h-16 p-0 pt-10",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "text-center hero-content w-full",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                        className: "mb-5 text-5xl",
                                        children: [
                                            "NFT Gallery on Solana ",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SolanaLogo, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "w-full min-w-full",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                className: "mb-5",
                                                children: [
                                                    "Here is very basic example of NFT Gallery. It parses mainnet. ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                                    "And uses",
                                                    " ",
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                        href: "https://www.npmjs.com/package/@nfteyez/sol-rayz-react",
                                                        target: "_blank",
                                                        className: "link font-bold",
                                                        rel: "noreferrer",
                                                        children: "@nfteyez/sol-rayz-react"
                                                    }),
                                                    " ",
                                                    "package to fetch NFTs for specific wallet."
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "form-control mt-8",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                                        className: "input-group input-group-vertical input-group-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                children: "Search"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                className: "flex space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                                                        type: "text",
                                                                        placeholder: "Enter Wallet Address",
                                                                        className: "w-full input input-bordered input-lg",
                                                                        value: walletToParsePublicKey,
                                                                        onChange: onChange,
                                                                        style: {
                                                                            borderRadius: "0 0 var(--rounded-btn,.5rem) var(--rounded-btn,.5rem)"
                                                                        }
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectAndConnectWalletButton, {
                                                                        onUseWalletClick: onUseWalletClick
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "my-10",
                                        children: [
                                            error ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                                        children: "Error Occures"
                                                    }),
                                                    error === null || error === void 0 ? void 0 : error.message
                                                ]
                                            }) : null,
                                            !error && isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Loader, {})
                                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(NftList, {
                                                nfts: nfts,
                                                error: error
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
};
const NftList = (param)=>{
    let { nfts, error } = param;
    if (error) {
        return null;
    }
    if (!(nfts === null || nfts === void 0 ? void 0 : nfts.length)) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "text-center text-2xl pt-16",
            children: "No NFTs found in this wallet"
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "grid grid-cols-2 md:grid-cols-4 gap-4 items-start",
        children: nfts === null || nfts === void 0 ? void 0 : nfts.map((nft)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(NftCard, {
                details: nft,
                onSelect: ()=>{}
            }, nft.mint))
    });
};

// EXTERNAL MODULE: ./node_modules/@project-serum/anchor/dist/browser/index.js
var browser = __webpack_require__(4758);
// EXTERNAL MODULE: ./node_modules/react-countdown/dist/index.es.js
var index_es = __webpack_require__(8130);
// EXTERNAL MODULE: ./node_modules/react-alert/dist/esm/react-alert.js + 11 modules
var react_alert = __webpack_require__(406);
// EXTERNAL MODULE: ./node_modules/@solana/web3.js/lib/index.browser.esm.js + 20 modules
var index_browser_esm = __webpack_require__(7480);
// EXTERNAL MODULE: ./node_modules/@solana/wallet-adapter-react/lib/useAnchorWallet.js
var useAnchorWallet = __webpack_require__(1052);
// EXTERNAL MODULE: ./node_modules/@solana/spl-token/lib/index.browser.esm.js
var lib_index_browser_esm = __webpack_require__(3029);
;// CONCATENATED MODULE: ./src/views/CandyMachineMintView/candy-machine.ts
/* provided dependency */ var Buffer = __webpack_require__(8764)["Buffer"];


const CANDY_MACHINE_PROGRAM = new browser/* web3.PublicKey */.rV.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ");
const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new browser/* web3.PublicKey */.rV.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
const TOKEN_METADATA_PROGRAM_ID = new browser/* web3.PublicKey */.rV.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");
const awaitTransactionSignatureConfirmation = async function(txid, timeout, connection) {
    let commitment = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "recent", queryStatus = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
    let done = false;
    let status = {
        slot: 0,
        confirmations: 0,
        err: null
    };
    let subId = 0;
    status = await new Promise(async (resolve, reject)=>{
        setTimeout(()=>{
            if (done) {
                return;
            }
            done = true;
            console.log("Rejecting for timeout...");
            reject({
                timeout: true
            });
        }, timeout);
        try {
            subId = connection.onSignature(txid, (result, context)=>{
                done = true;
                status = {
                    err: result.err,
                    slot: context.slot,
                    confirmations: 0
                };
                if (result.err) {
                    console.log("Rejected via websocket", result.err);
                    reject(status);
                } else {
                    console.log("Resolved via websocket", result);
                    resolve(status);
                }
            }, commitment);
        } catch (e) {
            done = true;
            console.error("WS error in setup", txid, e);
        }
        while(!done && queryStatus){
            // eslint-disable-next-line no-loop-func
            (async ()=>{
                try {
                    const signatureStatuses = await connection.getSignatureStatuses([
                        txid
                    ]);
                    status = signatureStatuses && signatureStatuses.value[0];
                    if (!done) {
                        if (!status) {
                            console.log("REST null result for", txid, status);
                        } else if (status.err) {
                            console.log("REST error for", txid, status);
                            done = true;
                            reject(status.err);
                        } else if (!status.confirmations) {
                            console.log("REST no confirmations for", txid, status);
                        } else {
                            console.log("REST confirmation for", txid, status);
                            done = true;
                            resolve(status);
                        }
                    }
                } catch (e) {
                    if (!done) {
                        console.log("REST connection error: txid", txid, e);
                    }
                }
            })();
            await sleep(2000);
        }
    });
    //@ts-ignore
    if (connection._signatureSubscriptions[subId]) {
        connection.removeSignatureListener(subId);
    }
    done = true;
    console.log("Returning status", status);
    return status;
};
/* export */ const createAssociatedTokenAccountInstruction = (associatedTokenAddress, payer, walletAddress, splTokenMintAddress)=>{
    const keys = [
        {
            pubkey: payer,
            isSigner: true,
            isWritable: true
        },
        {
            pubkey: associatedTokenAddress,
            isSigner: false,
            isWritable: true
        },
        {
            pubkey: walletAddress,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: splTokenMintAddress,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: browser/* web3.SystemProgram */.rV.SystemProgram.programId,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: lib_index_browser_esm/* TOKEN_PROGRAM_ID */.H_,
            isSigner: false,
            isWritable: false
        },
        {
            pubkey: browser/* web3.SYSVAR_RENT_PUBKEY */.rV.SYSVAR_RENT_PUBKEY,
            isSigner: false,
            isWritable: false
        }
    ];
    return new browser/* web3.TransactionInstruction */.rV.TransactionInstruction({
        keys,
        programId: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
        data: Buffer.from([])
    });
};
const getCandyMachineState = async (anchorWallet, candyMachineId, connection)=>{
    const provider = new browser/* Provider */.zt(connection, anchorWallet, {
        preflightCommitment: "recent"
    });
    const idl = await browser/* Program */.$r.fetchIdl(CANDY_MACHINE_PROGRAM, provider);
    // Handle failed fetchIdl
    // if (!idl) {
    //   return {};
    // }
    const program = new browser/* Program */.$r(idl, CANDY_MACHINE_PROGRAM, provider);
    const candyMachine = {
        id: candyMachineId,
        connection,
        program
    };
    const state = await program.account.candyMachine.fetch(candyMachineId);
    console.log("state", state);
    const itemsAvailable = state.data.itemsAvailable.toNumber();
    const itemsRedeemed = state.itemsRedeemed.toNumber();
    const price = state.data.price.toNumber();
    const itemsRemaining = itemsAvailable - itemsRedeemed;
    let goLiveDate = state.data.goLiveDate.toNumber();
    goLiveDate = new Date(goLiveDate * 1000);
    return {
        candyMachine,
        itemsAvailable,
        itemsRedeemed,
        itemsRemaining,
        goLiveDate,
        price
    };
};
const getMasterEdition = async (mint)=>{
    return (await browser/* web3.PublicKey */.rV.PublicKey.findProgramAddress([
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
        Buffer.from("edition")
    ], TOKEN_METADATA_PROGRAM_ID))[0];
};
const getMetadata = async (mint)=>{
    return (await browser/* web3.PublicKey */.rV.PublicKey.findProgramAddress([
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer()
    ], TOKEN_METADATA_PROGRAM_ID))[0];
};
const getTokenWallet = async (wallet, mint)=>{
    return (await browser/* web3.PublicKey */.rV.PublicKey.findProgramAddress([
        wallet.toBuffer(),
        lib_index_browser_esm/* TOKEN_PROGRAM_ID */.H_.toBuffer(),
        mint.toBuffer()
    ], SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID))[0];
};
const mintOneToken = async (candyMachine, config, payer, treasury)=>{
    const mint = browser/* web3.Keypair */.rV.Keypair.generate();
    const token = await getTokenWallet(payer, mint.publicKey);
    const { connection, program } = candyMachine;
    const metadata = await getMetadata(mint.publicKey);
    const masterEdition = await getMasterEdition(mint.publicKey);
    const rent = await connection.getMinimumBalanceForRentExemption(lib_index_browser_esm/* MintLayout */.qT.span);
    return await program.rpc.mintNft({
        accounts: {
            config,
            candyMachine: candyMachine.id,
            payer: payer,
            wallet: treasury,
            mint: mint.publicKey,
            metadata,
            masterEdition,
            mintAuthority: payer,
            updateAuthority: payer,
            tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
            tokenProgram: lib_index_browser_esm/* TOKEN_PROGRAM_ID */.H_,
            systemProgram: browser/* web3.SystemProgram */.rV.SystemProgram.programId,
            rent: browser/* web3.SYSVAR_RENT_PUBKEY */.rV.SYSVAR_RENT_PUBKEY,
            clock: browser/* web3.SYSVAR_CLOCK_PUBKEY */.rV.SYSVAR_CLOCK_PUBKEY
        },
        signers: [
            mint
        ],
        instructions: [
            browser/* web3.SystemProgram */.rV.SystemProgram.createAccount({
                fromPubkey: payer,
                newAccountPubkey: mint.publicKey,
                space: lib_index_browser_esm/* MintLayout */.qT.span,
                lamports: rent,
                programId: lib_index_browser_esm/* TOKEN_PROGRAM_ID */.H_
            }),
            lib_index_browser_esm/* Token */.WU.createInitMintInstruction(lib_index_browser_esm/* TOKEN_PROGRAM_ID */.H_, mint.publicKey, 0, payer, payer),
            createAssociatedTokenAccountInstruction(token, payer, payer, mint.publicKey),
            lib_index_browser_esm/* Token */.WU.createMintToInstruction(lib_index_browser_esm/* TOKEN_PROGRAM_ID */.H_, mint.publicKey, token, payer, [], 1)
        ]
    });
};
const shortenAddress = function(address) {
    let chars = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4;
    return "".concat(address.slice(0, chars), "...").concat(address.slice(-chars));
};
const sleep = (ms)=>{
    return new Promise((resolve)=>setTimeout(resolve, ms));
};

;// CONCATENATED MODULE: ./src/views/CandyMachineMintView/MintSection.tsx









const MintSection = (props)=>{
    const alert = (0,react_alert/* useAlert */.VY)();
    const { connection } = (0,useConnection/* useConnection */.R)();
    const [counter, setCounter] = (0,react.useState)({
        itemsAvailable: 0,
        itemsRemaining: 0
    });
    const [price, setPrice] = (0,react.useState)();
    const [balance, setBalance] = (0,react.useState)();
    const [isActive, setIsActive] = (0,react.useState)(false); // true when countdown completes
    const [isSoldOut, setIsSoldOut] = (0,react.useState)(false); // true when items remaining is zero
    const [isMinting, setIsMinting] = (0,react.useState)(false); // true when user got to press MINT
    const [startDate, setStartDate] = (0,react.useState)(new Date(props.startDate));
    const wallet = (0,useAnchorWallet/* useAnchorWallet */.z)();
    const [candyMachine, setCandyMachine] = (0,react.useState)();
    const onMint = async ()=>{
        try {
            setIsMinting(true);
            alert.show("Mint has been started!");
            if (wallet && (candyMachine === null || candyMachine === void 0 ? void 0 : candyMachine.program)) {
                const mintTxId = await mintOneToken(candyMachine, props.config, wallet.publicKey, props.treasury);
                alert.show("Confirming transaction...");
                const status = await awaitTransactionSignatureConfirmation(mintTxId, props.txTimeout, connection, "singleGossip", false);
                if (!(status === null || status === void 0 ? void 0 : status.err)) {
                    alert.success("Congratulations! Mint succeeded!");
                } else {
                    alert.error("Mint failed! Please try again!");
                }
            }
        } catch (error) {
            // TODO: blech:
            let message = error.msg || "Minting failed! Please try again!";
            if (!error.msg) {
                if (error.message.indexOf("0x138")) {} else if (error.message.indexOf("0x137")) {
                    message = "SOLD OUT!";
                } else if (error.message.indexOf("0x135")) {
                    message = "Insufficient funds to mint. Please fund your wallet.";
                }
            } else {
                if (error.code === 311) {
                    message = "SOLD OUT!";
                    setIsSoldOut(true);
                } else if (error.code === 312) {
                    message = "Minting period hasn't started yet.";
                }
            }
            alert.error(message);
        } finally{
            if (wallet) {
                const balance = await connection.getBalance(wallet.publicKey);
                setBalance(balance / index_browser_esm.LAMPORTS_PER_SOL);
            }
            setIsMinting(false);
        }
    };
    (0,react.useEffect)(()=>{
        (async ()=>{
            if (wallet) {
                const balance = await connection.getBalance(wallet.publicKey);
                setBalance(balance / index_browser_esm.LAMPORTS_PER_SOL);
            }
        })();
    }, [
        wallet,
        connection
    ]);
    (0,react.useEffect)(()=>{
        (async ()=>{
            if (!wallet) return;
            try {
                const { candyMachine, goLiveDate, itemsRemaining, itemsAvailable, price } = await getCandyMachineState(wallet, props.candyMachineId, connection);
                setIsSoldOut(itemsRemaining === 0);
                setStartDate(goLiveDate);
                setCandyMachine(candyMachine);
                setCounter({
                    itemsRemaining,
                    itemsAvailable
                });
                setPrice(price / index_browser_esm.LAMPORTS_PER_SOL);
            } catch (error) {
                console.error(error);
                alert.error("Error fetching CandyMachine. Check browser console for the details.");
            }
        })();
    }, [
        wallet,
        props.candyMachineId,
        connection
    ]);
    console.log("startDate", startDate);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "grid grid-cols-1 gap-4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        wallet && /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                            children: [
                                "Balance: ◎",
                                (balance || 0).toLocaleString()
                            ]
                        }),
                        (counter === null || counter === void 0 ? void 0 : counter.itemsAvailable) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                counter === null || counter === void 0 ? void 0 : counter.itemsRemaining,
                                " of ",
                                counter === null || counter === void 0 ? void 0 : counter.itemsAvailable,
                                " Available"
                            ]
                        }) : null
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: !wallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectAndConnectWalletButton, {
                        onUseWalletClick: ()=>{}
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        disabled: isSoldOut || isMinting || !isActive,
                        onClick: onMint,
                        className: "btn btn-primary btn-wide btn-lg",
                        children: isSoldOut ? "SOLD OUT" : isActive ? isMinting ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Loader, {
                            noText: true
                        }) : "MINT for ◎".concat(price) : /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* default */.ZP, {
                            date: startDate,
                            onMount: (param)=>{
                                let { completed } = param;
                                return completed && setIsActive(true);
                            },
                            onComplete: ()=>setIsActive(true),
                            renderer: renderCounter
                        })
                    })
                })
            ]
        })
    });
};
const renderCounter = (param)=>{
    let { days, hours, minutes, seconds, completed } = param;
    if (!seconds) return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: "Loading..."
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        children: [
            hours,
            " hours, ",
            minutes,
            " minutes, ",
            seconds,
            " seconds"
        ]
    });
};

;// CONCATENATED MODULE: ./src/views/CandyMachineMintView/config.ts
const config = {
    CANDY_MACHINE_CONFIG: "6vbr5zpU44G4Ni2S36S6m7bhjMwy4ZiabVG5nJnxWWeK",
    CANDY_MACHINE_ID: "4f2UZyh476EMGeMo12yRmmxYNBHnGhjyvuwQJMBAnKbd",
    CANDY_START_DATE: "1639155600",
    TREASURY_ADDRESS: "CBBUMHRmbVUck99mTCip5sHP16kzGj3QTYB8K3XxwmQx"
};

// EXTERNAL MODULE: ./src/views/CandyMachineMintView/index.module.css
var CandyMachineMintView_index_module = __webpack_require__(3346);
var CandyMachineMintView_index_module_default = /*#__PURE__*/__webpack_require__.n(CandyMachineMintView_index_module);
;// CONCATENATED MODULE: ./src/views/CandyMachineMintView/index.tsx
/* provided dependency */ var process = __webpack_require__(4155);
/**
 * This is template for Candy Machine v.1
 *
 *
 *
 *
 * Most likely you don't need it since Candy Machine is updated to v.2
 * which is differnt from v.1
 *
 *
 *
 *
 *
 *
 *
 */ 







const treasury = new browser/* web3.PublicKey */.rV.PublicKey(config.TREASURY_ADDRESS);
const candyMachineConfig = new browser/* web3.PublicKey */.rV.PublicKey(config.CANDY_MACHINE_CONFIG);
const candyMachineId = new browser/* web3.PublicKey */.rV.PublicKey(config.CANDY_MACHINE_ID);
const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE, 10);
const txTimeout = 30000; // milliseconds (confirm this works for your project)
const CandyMachineMintView = (param)=>{
    let {} = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "container mx-auto max-w-6xl p-8 2xl:px-0",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (CandyMachineMintView_index_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                className: "btn btn-square btn-ghost",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-4xl",
                                    children: "\uD83C\uDF6C"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-1 px-2 mx-2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm breadcrumbs",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "text-xl",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    children: "Home"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "opacity-40",
                                                children: "NFT Mint UI"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(lib/* WalletMultiButton */.aD, {
                                className: "btn btn-ghost"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-center pt-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "hero min-h-16 py-20",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-center hero-content",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "max-w-lg",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                            className: "mb-5 text-5xl",
                                            children: [
                                                "Candy Machine Mint UI ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(SolanaLogo, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                            className: "mb-5",
                                            children: [
                                                "Here is very basic example of minting site. ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                                "It uses",
                                                " ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: "https://github.com/exiled-apes/candy-machine-mint",
                                                    target: "_blank",
                                                    className: "link font-bold",
                                                    rel: "noreferrer",
                                                    children: "exiled-apes/candy-machine-mint"
                                                }),
                                                " ",
                                                "code migrated to be used with Next.JS app."
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            children: "UI connects to DEVNET network."
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MintSection, {
                                candyMachineId: candyMachineId,
                                config: candyMachineConfig,
                                startDate: startDateSeed,
                                treasury: treasury,
                                txTimeout: txTimeout
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "max-w-xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                                    className: "mb-5 mt-16 text-5xl",
                                    children: "Description:"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    children: [
                                        "You can test this Candy Machine mint on Devnet.",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        "Switch to Devnet in ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                            children: "src/pages/_app.tsx"
                                        }),
                                        " file. And run app locally."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    children: [
                                        "Edit ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                            children: "src/views/CandyMachineMintView/config.ts"
                                        }),
                                        " to use your own Candy Machine.",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        " You can read details about variables on",
                                        " ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                            href: "https://github.com/exiled-apes/candy-machine-mint#environment-variables",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "link hover:underline",
                                            children: "exiled-apes/candy-machine-mints Github"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                    children: [
                                        "Always set custom RPC server for the final mint site. ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        "You can do it here: ",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
                                            children: "src/pages/_app.tsx"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                        "Otherwise, Solana can ban your website for overusing RPC server. You dont want it in the middle of your mint \uD83D\uDE33"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/HomeIcon.js
var HomeIcon = __webpack_require__(1782);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/UserIcon.js
var UserIcon = __webpack_require__(5301);
// EXTERNAL MODULE: ./node_modules/lodash.orderby/index.js
var lodash_orderby = __webpack_require__(5316);
var lodash_orderby_default = /*#__PURE__*/__webpack_require__.n(lodash_orderby);
// EXTERNAL MODULE: ./src/views/SolanaTweeterView/index.module.css
var SolanaTweeterView_index_module = __webpack_require__(959);
var SolanaTweeterView_index_module_default = /*#__PURE__*/__webpack_require__.n(SolanaTweeterView_index_module);
// EXTERNAL MODULE: ./node_modules/bs58/index.js
var node_modules_bs58 = __webpack_require__(7191);
;// CONCATENATED MODULE: ./src/views/SolanaTweeterView/Tweet.ts
class Tweet {
    get key() {
        return this.publicKey.toBase58();
    }
    get authorDisplay() {
        const author = this.author.toBase58();
        return author.slice(0, 4) + ".." + author.slice(-4);
    }
    get createdAt() {
        const date = getDate(this.timestamp);
        return date.toLocaleDateString();
    }
    get createdAgo() {
        const date = getDate(this.timestamp);
        return timeSince(date);
    }
    constructor(publicKey, accountData){
        this.publicKey = publicKey;
        this.author = accountData.author;
        this.timestamp = accountData.timestamp.toString();
        this.topic = accountData.topic;
        this.content = accountData.content;
    }
}
// convert unix timestamp to js date object
const getDate = (timestamp)=>{
    const utxDate = parseInt(timestamp);
    const date = new Date(utxDate * 1000);
    return date;
};
function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = seconds / 31536000;
    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}
var aDay = (/* unused pure expression or super */ null && (24 * 60 * 60 * 1000));

;// CONCATENATED MODULE: ./src/views/SolanaTweeterView/tweets.ts
/* provided dependency */ var tweets_Buffer = __webpack_require__(8764)["Buffer"];



const getTweets = async (param)=>{
    let { program, filter = [] } = param;
    const tweetsRaw = await program.account.tweet.all(filter);
    const tweets = tweetsRaw.map((t)=>new Tweet(t.publicKey, t.account));
    return tweets;
};
const authorFilter = (authorBase58PublicKey)=>({
        memcmp: {
            offset: 8,
            bytes: authorBase58PublicKey
        }
    });
const topicFilter = (topic)=>({
        memcmp: {
            offset: 8 + // Discriminator.
            32 + // Author public key.
            8 + // Timestamp.
            4,
            bytes: bs58.encode(tweets_Buffer.from(topic))
        }
    });
const sendTweet = async (param)=>{
    let { wallet, program, topic, content } = param;
    // Generate a new Keypair for our new tweet account.
    const tweet = browser/* web3.Keypair */.rV.Keypair.generate();
    // Send a "SendTweet" instruction with the right data and the right accounts.
    await program.rpc.sendTweet(topic, content, {
        accounts: {
            author: wallet.publicKey,
            tweet: tweet.publicKey,
            systemProgram: browser/* web3.SystemProgram */.rV.SystemProgram.programId
        },
        signers: [
            tweet
        ]
    });
    // Fetch the newly created account from the blockchain may not work
    // new account can be not found because it takes some time to confirm TX.
    // const tweetAccount = await program.account.tweet.fetch(tweet.publicKey);
    // instead we return object with same data
    const newTweetAccount = {
        author: wallet.publicKey,
        timestamp: new browser.BN(new Date().getTime()),
        topic,
        content
    };
    // Wrap the fetched account in a Tweet model so our frontend can display it.
    return new Tweet(tweet.publicKey, newTweetAccount);
};

;// CONCATENATED MODULE: ./src/views/SolanaTweeterView/solana-tweeter-idl.json
var solana_tweeter_idl_namespaceObject = /*#__PURE__*/JSON.parse('{"version":"0.1.0","name":"rust","instructions":[{"name":"sendTweet","accounts":[{"name":"tweet","isMut":true,"isSigner":true},{"name":"author","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[{"name":"topic","type":"string"},{"name":"content","type":"string"}]}],"accounts":[{"name":"Tweet","type":{"kind":"struct","fields":[{"name":"author","type":"publicKey"},{"name":"timestamp","type":"i64"},{"name":"topic","type":"string"},{"name":"content","type":"string"}]}}],"errors":[{"code":6000,"name":"TopicTooLong","msg":"The provided topic should be 50 chars long maximum."},{"code":6001,"name":"ContentTooLong","msg":"The provided content should be 280 chars long max."}],"metadata":{"address":"926GETHcFsLU3vDWQUEnTpWYRYXktK6gCCfzivjFq4pa"}}');
;// CONCATENATED MODULE: ./src/views/SolanaTweeterView/useProgram.ts




const SOLANA_TWITTER_PROGRAM = "926GETHcFsLU3vDWQUEnTpWYRYXktK6gCCfzivjFq4pa";
const programID = new index_browser_esm.PublicKey(SOLANA_TWITTER_PROGRAM);
const useProgram = (param)=>{
    let { connection, wallet } = param;
    const [program, setProgram] = (0,react.useState)();
    (0,react.useEffect)(()=>{
        updateProgram();
    }, [
        connection,
        wallet
    ]);
    const updateProgram = ()=>{
        const provider = new browser/* Provider */.zt(connection, wallet, {
            preflightCommitment: "recent",
            commitment: "processed"
        });
        console.log("provider", provider);
        //   const idl = await anchor.Program.fetchIdl(programID, provider);
        //   console.log("idl", idl);
        const program = new browser/* Program */.$r(solana_tweeter_idl_namespaceObject, programID, provider);
        setProgram(program);
    };
    return {
        program
    };
};

;// CONCATENATED MODULE: ./src/views/SolanaTweeterView/index.tsx













const endpoint = "https://explorer-api.devnet.solana.com";
const connection = new browser/* web3.Connection */.rV.Connection(endpoint);
const SolanaTweeterView = (param)=>{
    let {} = param;
    const [isAirDropped, setIsAirDropped] = (0,react.useState)(false);
    const wallet = (0,useAnchorWallet/* useAnchorWallet */.z)();
    const airdropToWallet = async ()=>{
        if (wallet) {
            setIsAirDropped(false);
            const signature = await connection.requestAirdrop(wallet.publicKey, 1000000000);
            const tx = await connection.confirmTransaction(signature);
            setIsAirDropped(true);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "container mx-auto max-w-6xl p-8 2xl:px-0",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (SolanaTweeterView_index_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                className: "btn btn-square btn-ghost",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: "text-4xl",
                                    children: "\uD83D\uDC26"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-1 px-2 mx-2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-sm breadcrumbs",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "text-xl",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    children: "Home"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: "opacity-40",
                                                children: "SolFeed"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "flex-none",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(lib/* WalletMultiButton */.aD, {
                                className: "btn btn-ghost"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "text-center pt-2",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "hero min-h-16 pt-4",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "text-center hero-content",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "max-w-lg",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                        className: "mb-5 text-5xl",
                                        children: [
                                            "SolFeed ",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SolanaLogo, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "mb-5",
                                        children: "Share your thoughts with the world, connect with other Solana enthusiasts!"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "font-bold mb-5",
                                        children: "Got something to say? Let &apos s hear it! Be heard on SolFeed \uD83D\uDCAB"
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex mb-16",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "mr-4",
                            children: "Need some SOL on test wallet?"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "mr-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                                className: "btn btn-primary normal-case btn-xs",
                                onClick: airdropToWallet,
                                children: "Airdrop 1 SOL"
                            })
                        }),
                        isAirDropped ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "opacity-50",
                            children: "Sent!"
                        }) : null
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: !wallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectAndConnectWalletButton, {
                        onUseWalletClick: ()=>{}
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TwitterScreen, {})
                })
            ]
        })
    });
};
const TwitterScreen = ()=>{
    const wallet = (0,useAnchorWallet/* useAnchorWallet */.z)();
    const [activeTab, setActiveTab] = (0,react.useState)(0);
    const [tweets, setTweets] = (0,react.useState)([]);
    const [profileTweets, setProfileTweets] = (0,react.useState)([]);
    const { program } = useProgram({
        connection,
        wallet
    });
    const [lastUpdatedTime, setLastUpdatedTime] = (0,react.useState)();
    (0,react.useEffect)(()=>{
        fetchTweets();
        fetchProfileTweets();
    }, [
        wallet,
        lastUpdatedTime
    ]);
    const fetchTweets = async ()=>{
        if (wallet && program) {
            try {
                const tweets = await getTweets({
                    program
                });
                setTweets(tweets);
            } catch (error) {
            // set error
            }
        }
    };
    const fetchProfileTweets = async ()=>{
        if (wallet && program) {
            try {
                const tweets = await getTweets({
                    program,
                    // topicFilter('solana'),
                    filter: [
                        authorFilter(wallet === null || wallet === void 0 ? void 0 : wallet.publicKey.toBase58())
                    ]
                });
                setProfileTweets(tweets);
            } catch (error) {
            // set error
            }
        }
    };
    const onTweenSent = (newTweet)=>{
        setTweets((prevState)=>({
                ...prevState,
                newTweet
            }));
    };
    const sortedTweets = lodash_orderby_default()(tweets, [
        "timestamp"
    ], [
        "desc"
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "rounded-lg shadow flex",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "border-r border-gray-500 mr-8",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    className: "menu p-4 overflow-y-auto bg-base-100 text-base-content",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                className: activeTab === 0 ? "active" : "",
                                onClick: ()=>setActiveTab(0),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HomeIcon/* default */.Z, {
                                    className: "h-8 w-8 text-white-500"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                className: activeTab === 1 ? "active" : "",
                                onClick: ()=>setActiveTab(1),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UserIcon/* default */.Z, {
                                    className: "h-8 w-8 text-white-500"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex flex-col items-center justify-center",
                children: activeTab === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-xs",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(NetTweet, {
                            onTweenSent: onTweenSent
                        }),
                        sortedTweets.map((t)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SolanaTweeterView_Tweet, {
                                content: t
                            }, t.key))
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TwitterProfile, {
                    tweets: profileTweets,
                    wallet: wallet
                })
            })
        ]
    });
};
const NetTweet = (param)=>{
    let { onTweenSent } = param;
    const wallet = (0,useAnchorWallet/* useAnchorWallet */.z)();
    const { program } = useProgram({
        connection,
        wallet
    });
    const [content, setContent] = (0,react.useState)("");
    const onContentChange = (e)=>{
        const { value } = e.target;
        if (value) {
            setContent(value);
        }
    };
    const onTweetSendClick = async ()=>{
        if (!content || !program) return;
        const topic = "default";
        const tweet = await sendTweet({
            wallet,
            program,
            topic,
            content
        });
        console.log("added new tweet: ", tweet);
        setContent("");
        onTweenSent(tweet);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mb-8 pb-4 border-b border-gray-500 flex ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "avatar placeholder mr-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "mb-4 rounded-full bg-neutral-focus text-neutral-content w-14 h-14",
                    children: "Me"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "form-control flex-1 mx-2",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
                    className: "textarea h-24 w-full text-2xl",
                    placeholder: "What's happening?",
                    value: content,
                    onChange: onContentChange
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "ml-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    className: "btn btn-primary rounded-full normal-case px-16",
                    onClick: onTweetSendClick,
                    children: "Tweet"
                })
            })
        ]
    });
};
const SolanaTweeterView_Tweet = (param)=>{
    let { content } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "mb-8 border-b border-gray-500 flex",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "avatar placeholder mr-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "mb-4 rounded-full bg-neutral-focus text-neutral-content w-14 h-14",
                    children: content.authorDisplay.slice(0, 2)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex text-sm",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "font-bold",
                                children: content.authorDisplay
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "mx-2 opacity-50",
                                children: "\xb7"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "opacity-50",
                                children: content.createdAgo
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-xl",
                        children: content.content
                    }),
                    content.topic ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-pink-400 my-2",
                        children: [
                            "#",
                            content.topic
                        ]
                    }) : null
                ]
            })
        ]
    });
};
const TwitterProfile = (param)=>{
    let { tweets, wallet } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex-1 text-left width-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: "Profile"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: wallet.publicKey.toString()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "my-8",
                children: [
                    tweets.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-3xl opacity-50 text-center",
                        children: "You have no tweets"
                    }) : null,
                    tweets.map((t)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SolanaTweeterView_Tweet, {
                            content: t
                        }, t.key))
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/views/index.tsx






/***/ }),

/***/ 3346:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 7279:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 4283:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"HomeView_container__TOj8b"};

/***/ }),

/***/ 959:
/***/ (function() {

// extracted by mini-css-extract-plugin

/***/ })

}]);