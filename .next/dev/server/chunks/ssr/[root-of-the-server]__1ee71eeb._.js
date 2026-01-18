module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Projects/keith-vaz-portfolio/config/auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Admin configuration - your GitHub username
__turbopack_context__.s([
    "ADMIN_USERNAME",
    ()=>ADMIN_USERNAME,
    "GITHUB_CLIENT_ID",
    ()=>GITHUB_CLIENT_ID,
    "GITHUB_OAUTH_SCOPES",
    ()=>GITHUB_OAUTH_SCOPES
]);
const ADMIN_USERNAME = 'bamboozledkitty';
const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || '';
// Warn if Client ID is not configured
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const GITHUB_OAUTH_SCOPES = 'user:email repo';
}),
"[project]/Projects/keith-vaz-portfolio/lib/auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAuthState",
    ()=>clearAuthState,
    "fetchGitHubUser",
    ()=>fetchGitHubUser,
    "generateState",
    ()=>generateState,
    "getAuthState",
    ()=>getAuthState,
    "getGitHubOAuthUrl",
    ()=>getGitHubOAuthUrl,
    "requestAccessToken",
    ()=>requestAccessToken,
    "saveAuthState",
    ()=>saveAuthState,
    "verifyState",
    ()=>verifyState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$config$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/config/auth.ts [app-ssr] (ecmascript)");
;
const TOKEN_KEY = 'github_oauth_token';
const USER_KEY = 'github_user';
const getAuthState = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            isAuthenticated: false,
            isAdmin: false,
            user: null,
            token: null
        };
    }
    //TURBOPACK unreachable
    ;
    const token = undefined;
    const userJson = undefined;
    let user;
};
const getGitHubOAuthUrl = (redirectUri)=>{
    const params = new URLSearchParams({
        client_id: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$config$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GITHUB_CLIENT_ID"],
        redirect_uri: redirectUri,
        scope: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$config$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GITHUB_OAUTH_SCOPES"],
        state: generateState()
    });
    return `https://github.com/login/oauth/authorize?${params.toString()}`;
};
const generateState = ()=>{
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    const state = Array.from(array, (byte)=>byte.toString(16).padStart(2, '0')).join('');
    sessionStorage.setItem('oauth_state', state);
    return state;
};
const verifyState = (state)=>{
    const storedState = sessionStorage.getItem('oauth_state');
    sessionStorage.removeItem('oauth_state');
    return state === storedState;
};
const fetchGitHubUser = async (token)=>{
    const response = await fetch('https://api.github.com/user', {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/vnd.github.v3+json'
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch GitHub user');
    }
    return response.json();
};
const saveAuthState = (token, user)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
const clearAuthState = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
};
// Cloudflare Worker URL for token exchange
// Hardcoded as fallback since .env.local is not available in GitHub Actions builds
const WORKER_URL = process.env.NEXT_PUBLIC_CLOUDFLARE_WORKER_URL || 'https://portfolio-auth.keith-klv.workers.dev';
const requestAccessToken = async (code, state)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code,
            state
        })
    });
    if (!response.ok) {
        const error = await response.json().catch(()=>({
                error: 'Unknown error'
            }));
        throw new Error(error.error || 'Failed to exchange token');
    }
    const data = await response.json();
    if (!data.access_token) {
        throw new Error('No access token received');
    }
    return data.access_token;
};
}),
"[project]/Projects/keith-vaz-portfolio/contexts/AuthContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/keith-vaz-portfolio/lib/auth.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const AuthProvider = ({ children })=>{
    const [authState, setAuthState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthState"])());
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Verify token validity on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const verifyToken = async ()=>{
            const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthState"])();
            if (state.token && state.user) {
                try {
                    // Verify token is still valid
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchGitHubUser"])(state.token);
                } catch (error) {
                    // Token is invalid, clear auth state
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAuthState"])();
                    setAuthState((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthState"])());
                }
            }
            setIsLoading(false);
        };
        verifyToken();
    }, []);
    const setAuth = (token, user)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveAuthState"])(token, user);
        setAuthState((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthState"])());
    };
    const logout = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAuthState"])();
        setAuthState((0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthState"])());
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            isAuthenticated: authState.isAuthenticated,
            isAdmin: authState.isAdmin,
            user: authState.user,
            token: authState.token,
            setAuth,
            logout,
            isLoading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Projects/keith-vaz-portfolio/contexts/AuthContext.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useAuth = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$keith$2d$vaz$2d$portfolio$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};
}),
"[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Projects/keith-vaz-portfolio/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1ee71eeb._.js.map