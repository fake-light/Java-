var v_saf;!function(){var n=Function.toString,t=[],i=[],o=[].indexOf.bind(t),e=[].push.bind(t),r=[].push.bind(i);function u(n,t){return-1==o(n)&&(e(n),r(`function ${t||n.name||""}() { [native code] }`)),n}Object.defineProperty(Function.prototype,"toString",{enumerable:!1,configurable:!0,writable:!0,value:function(){return"function"==typeof this&&i[o(this)]||n.call(this)}}),u(Function.prototype.toString,"toString"),v_saf=u}();


function _inherits(t, e) {
  t.prototype = Object.create(e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 }
  }), e && Object.setPrototypeOf(t, e) }
Object.defineProperty(Object.prototype, Symbol.toStringTag, {
  get() { return Object.getPrototypeOf(this).constructor.name }, configurable:true,
});
var v_new_toggle = true
Object.freeze(console)//only for javascript-obfuscator anti console debug.
var v_console_logger = console.log
var v_console_log = function(){if (!v_new_toggle){ v_console_logger.apply(this, arguments) }}
var v_random = (function() { var seed = 276951438; return function random() { return seed = (seed * 9301 + 49297) % 233280, (seed / 233280)} })()
var v_new = function(v){var temp=v_new_toggle; v_new_toggle = true; var r = new v; v_new_toggle = temp; return r}


EventTarget = v_saf(function EventTarget(){;})
DOMTokenList = v_saf(function DOMTokenList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
MessageChannel = v_saf(function MessageChannel(){;})
WebKitMutationObserver = v_saf(function WebKitMutationObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
MutationObserver = v_saf(function MutationObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Navigator = v_saf(function Navigator(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };this._plugins = typeof PluginArray=='undefined'?[]:v_new(PluginArray); this._mimeTypes = typeof MimeTypeArray=='undefined'?[]:v_new(MimeTypeArray)})
Storage = v_saf(function Storage(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
NodeList = v_saf(function NodeList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
HTMLCollection = v_saf(function HTMLCollection(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceObserver = v_saf(function PerformanceObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Crypto = v_saf(function Crypto(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this.getRandomValues = function(){
    v_console_log('  [*] Crypto -> getRandomValues[func]')
    var e=arguments[0]; return e.map(function(x, i){return e[i]=v_random()*1073741824});
  }
  this.randomUUID = function(){
    v_console_log('  [*] Crypto -> randomUUID[func]')
    return 1;
    function get2(){return (v_random()*255^0).toString(16).padStart(2,'0')}
    function rpt(func,num){var r=[];for(var i=0;i<num;i++){r.push(func())};return r.join('')}
    return [rpt(get2,4),rpt(get2,2),rpt(get2,2),rpt(get2,2),rpt(get2,6)].join('-')
  }})
TextDecoder = v_saf(function TextDecoder(){;})
Path2D = v_saf(function Path2D(){;})
Event = v_saf(function Event(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Request = v_saf(function Request(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Headers = v_saf(function Headers(){;})
Response = v_saf(function Response(){;})
URLSearchParams = v_saf(function URLSearchParams(){;})
History = v_saf(function History(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
webkitURL = v_saf(function webkitURL(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceEntry = v_saf(function PerformanceEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceObserverEntryList = v_saf(function PerformanceObserverEntryList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
TrustedTypePolicy = v_saf(function TrustedTypePolicy(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
AbortController = v_saf(function AbortController(){;})
CSSStyleDeclaration = v_saf(function CSSStyleDeclaration(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
DOMRectReadOnly = v_saf(function DOMRectReadOnly(){;})
PluginArray = v_saf(function PluginArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].filename="internal-pdf-viewer";this[0].length=2;this[0].name="PDF Viewer";
  this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].filename="internal-pdf-viewer";this[1].length=2;this[1].name="Chrome PDF Viewer";
  this[2]=v_new(Plugin);this[2].description="Portable Document Format";this[2].filename="internal-pdf-viewer";this[2].length=2;this[2].name="Chromium PDF Viewer";
  this[3]=v_new(Plugin);this[3].description="Portable Document Format";this[3].filename="internal-pdf-viewer";this[3].length=2;this[3].name="Microsoft Edge PDF Viewer";
  this[4]=v_new(Plugin);this[4].description="Portable Document Format";this[4].filename="internal-pdf-viewer";this[4].length=2;this[4].name="WebKit built-in PDF";})
Plugin = v_saf(function Plugin(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
CanvasRenderingContext2D = v_saf(function CanvasRenderingContext2D(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
IntersectionObserver = v_saf(function IntersectionObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
IntersectionObserverEntry = v_saf(function IntersectionObserverEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Image = v_saf(function Image(){;return v_new(HTMLImageElement)})
NamedNodeMap = v_saf(function NamedNodeMap(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
CustomElementRegistry = v_saf(function CustomElementRegistry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
StyleSheetList = v_saf(function StyleSheetList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
StyleSheet = v_saf(function StyleSheet(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
CSSRuleList = v_saf(function CSSRuleList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
CSSRule = v_saf(function CSSRule(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Selection = v_saf(function Selection(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
RTCSessionDescription = v_saf(function RTCSessionDescription(){;})
MutationRecord = v_saf(function MutationRecord(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
RTCIceCandidate = v_saf(function RTCIceCandidate(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
DOMImplementation = v_saf(function DOMImplementation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
IdleDeadline = v_saf(function IdleDeadline(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
MimeTypeArray = v_saf(function MimeTypeArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].enabledPlugin={"0":{},"1":{}};this[0].suffixes="pdf";this[0].type="application/pdf";
  this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].enabledPlugin={"0":{},"1":{}};this[1].suffixes="pdf";this[1].type="text/pdf";})
MimeType = v_saf(function MimeType(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceTiming = v_saf(function PerformanceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Node = v_saf(function Node(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Node, EventTarget)
MessagePort = v_saf(function MessagePort(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MessagePort, EventTarget)
Worker = v_saf(function Worker(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Worker, EventTarget)
XMLHttpRequestEventTarget = v_saf(function XMLHttpRequestEventTarget(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(XMLHttpRequestEventTarget, EventTarget)
Performance = v_saf(function Performance(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Performance, EventTarget)
PerformanceResourceTiming = v_saf(function PerformanceResourceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceResourceTiming, PerformanceEntry)
LayoutShift = v_saf(function LayoutShift(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(LayoutShift, PerformanceEntry)
TrustedTypePolicyFactory = v_saf(function TrustedTypePolicyFactory(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(TrustedTypePolicyFactory, EventTarget)
Screen = v_saf(function Screen(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Screen, EventTarget)
MessageEvent = v_saf(function MessageEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MessageEvent, Event)
RTCPeerConnection = v_saf(function RTCPeerConnection(){;}); _inherits(RTCPeerConnection, EventTarget)
webkitRTCPeerConnection = v_saf(function webkitRTCPeerConnection(){;}); _inherits(webkitRTCPeerConnection, EventTarget)
CSSStyleSheet = v_saf(function CSSStyleSheet(){;}); _inherits(CSSStyleSheet, StyleSheet)
CSSStyleRule = v_saf(function CSSStyleRule(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(CSSStyleRule, CSSRule)
PageTransitionEvent = v_saf(function PageTransitionEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PageTransitionEvent, Event)
RTCPeerConnectionIceEvent = v_saf(function RTCPeerConnectionIceEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(RTCPeerConnectionIceEvent, Event)
DOMRect = v_saf(function DOMRect(){;}); _inherits(DOMRect, DOMRectReadOnly)
BatteryManager = v_saf(function BatteryManager(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(BatteryManager, EventTarget)
Document = v_saf(function Document(){;}); _inherits(Document, Node)
Element = v_saf(function Element(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Element, Node)
CharacterData = v_saf(function CharacterData(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(CharacterData, Node)
XMLHttpRequest = v_saf(function XMLHttpRequest(){;}); _inherits(XMLHttpRequest, XMLHttpRequestEventTarget)
PerformanceNavigationTiming = v_saf(function PerformanceNavigationTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceNavigationTiming, PerformanceResourceTiming)
DocumentType = v_saf(function DocumentType(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(DocumentType, Node)
Attr = v_saf(function Attr(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Attr, Node)
HTMLElement = v_saf(function HTMLElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLElement, Element)
HTMLInputElement = v_saf(function HTMLInputElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLInputElement, HTMLElement)
HTMLScriptElement = v_saf(function HTMLScriptElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLScriptElement, HTMLElement)
HTMLLinkElement = v_saf(function HTMLLinkElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLLinkElement, HTMLElement)
HTMLAnchorElement = v_saf(function HTMLAnchorElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };v_hook_href(this, 'HTMLAnchorElement', location.href)}); _inherits(HTMLAnchorElement, HTMLElement)
HTMLMetaElement = v_saf(function HTMLMetaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLMetaElement, HTMLElement)
HTMLCanvasElement = v_saf(function HTMLCanvasElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLCanvasElement, HTMLElement)
HTMLIFrameElement = v_saf(function HTMLIFrameElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLIFrameElement, HTMLElement)
HTMLImageElement = v_saf(function HTMLImageElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLImageElement, HTMLElement)
HTMLStyleElement = v_saf(function HTMLStyleElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLStyleElement, HTMLElement)
Window = v_saf(function Window(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Window, EventTarget)
HTMLDocument = v_saf(function HTMLDocument(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };Object.defineProperty(this, 'location', {get(){return location}})}); _inherits(HTMLDocument, Document)
HTMLHeadElement = v_saf(function HTMLHeadElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHeadElement, HTMLElement)
HTMLBodyElement = v_saf(function HTMLBodyElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLBodyElement, HTMLElement)
Location = v_saf(function Location(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
WebGLRenderingContext = v_saf(function WebGLRenderingContext(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  function WebGLBuffer(){}
  function WebGLProgram(){}
  function WebGLShader(){}
  this._toggle = {}
  this.createBuffer = function(){ v_console_log('  [*] WebGLRenderingContext -> createBuffer[func]'); return v_new(WebGLBuffer) }
  this.createProgram = function(){ v_console_log('  [*] WebGLRenderingContext -> createProgram[func]'); return v_new(WebGLProgram) }
  this.createShader = function(){ v_console_log('  [*] WebGLRenderingContext -> createShader[func]'); return v_new(WebGLShader) }
  this.getSupportedExtensions = function(){
    v_console_log('  [*] WebGLRenderingContext -> getSupportedExtensions[func]')
    return [
      "ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth",
      "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic", "EXT_sRGB",
      "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear",
      "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc",
      "WEBKIT_WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders",
      "WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture","WEBGL_draw_buffers","WEBGL_lose_context","WEBKIT_WEBGL_lose_context","WEBGL_multi_draw",
    ]
  }
  var self = this
  this.getExtension = function(key){
    v_console_log('  [*] WebGLRenderingContext -> getExtension[func]:', key)
    class WebGLDebugRendererInfo{
      get UNMASKED_VENDOR_WEBGL(){self._toggle[37445]=1;return 37445}
      get UNMASKED_RENDERER_WEBGL(){self._toggle[37446]=1;return 37446}
    }
    class EXTTextureFilterAnisotropic{}
    class WebGLLoseContext{
      loseContext(){}
      restoreContext(){}
    }
    if (key == 'WEBGL_debug_renderer_info'){ var r = new WebGLDebugRendererInfo }
    if (key == 'EXT_texture_filter_anisotropic'){ var r = new EXTTextureFilterAnisotropic }
    if (key == 'WEBGL_lose_context'){ var r = new WebGLLoseContext }
    else{ var r = new WebGLDebugRendererInfo }
    return r
  }
  this.getParameter = function(key){
    v_console_log('  [*] WebGLRenderingContext -> getParameter[func]:', key)
    if (this._toggle[key]){
      if (key == 37445){ return "Google Inc. (NVIDIA)" }
      if (key == 37446){ return "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5671)" }
    }else{
      if (key == 33902){ return new Float32Array([1,1]) }
      if (key == 33901){ return new Float32Array([1,1024]) }
      if (key == 35661){ return 32 }
      if (key == 34047){ return 16 }
      if (key == 34076){ return 16384 }
      if (key == 36349){ return 1024 }
      if (key == 34024){ return 16384 }
      if (key == 34930){ return 16 }
      if (key == 3379){ return 16384 }
      if (key == 36348){ return 30 }
      if (key == 34921){ return 16 }
      if (key == 35660){ return 16 }
      if (key == 36347){ return 4095 }
      if (key == 3386){ return new Int32Array([32767, 32767]) }
      if (key == 3410){ return 8 }
      if (key == 7937){ return "WebKit WebGL" }
      if (key == 35724){ return "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)" }
      if (key == 3415){ return 0 }
      if (key == 7936){ return "WebKit" }
      if (key == 7938){ return "WebGL 1.0 (OpenGL ES 2.0 Chromium)" }
      if (key == 3411){ return 8 }
      if (key == 3412){ return 8 }
      if (key == 3413){ return 8 }
      if (key == 3414){ return 24 }
      return null
    }
  }
  this.getContextAttributes = function(){
    v_console_log('  [*] WebGLRenderingContext -> getContextAttributes[func]')
    return {
      alpha: true,
      antialias: true,
      depth: true,
      desynchronized: false,
      failIfMajorPerformanceCaveat: false,
      powerPreference: "default",
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
      stencil: false,
      xrCompatible: false,
    }
  }
  this.getShaderPrecisionFormat = function(a,b){
    v_console_log('  [*] WebGLRenderingContext -> getShaderPrecisionFormat[func]')
    function WebGLShaderPrecisionFormat(){}
    var r1 = v_new(WebGLShaderPrecisionFormat)
    r1.rangeMin = 127
    r1.rangeMax = 127
    r1.precision = 23
    var r2 = v_new(WebGLShaderPrecisionFormat)
    r2.rangeMin = 31
    r2.rangeMax = 30
    r2.precision = 0
    if (a == 35633 && b == 36338){ return r1 } if (a == 35633 && b == 36337){ return r1 } if (a == 35633 && b == 36336){ return r1 }
    if (a == 35633 && b == 36341){ return r2 } if (a == 35633 && b == 36340){ return r2 } if (a == 35633 && b == 36339){ return r2 }
    if (a == 35632 && b == 36338){ return r1 } if (a == 35632 && b == 36337){ return r1 } if (a == 35632 && b == 36336){ return r1 }
    if (a == 35632 && b == 36341){ return r2 } if (a == 35632 && b == 36340){ return r2 } if (a == 35632 && b == 36339){ return r2 }
    throw Error('getShaderPrecisionFormat')
  }
  v_saf(this.createBuffer, 'createBuffer')
  v_saf(this.createProgram, 'createProgram')
  v_saf(this.createShader, 'createShader')
  v_saf(this.getSupportedExtensions, 'getSupportedExtensions')
  v_saf(this.getExtension, 'getExtension')
  v_saf(this.getParameter, 'getParameter')
  v_saf(this.getContextAttributes, 'getContextAttributes')
  v_saf(this.getShaderPrecisionFormat, 'getShaderPrecisionFormat')})
PerformanceElementTiming = v_saf(function PerformanceElementTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceElementTiming, PerformanceEntry)
PerformanceEventTiming = v_saf(function PerformanceEventTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceEventTiming, PerformanceEntry)
PerformanceLongTaskTiming = v_saf(function PerformanceLongTaskTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceLongTaskTiming, PerformanceEntry)
PerformanceMark = v_saf(function PerformanceMark(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMark, PerformanceEntry)
PerformanceMeasure = v_saf(function PerformanceMeasure(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMeasure, PerformanceEntry)
PerformanceNavigation = v_saf(function PerformanceNavigation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformancePaintTiming = v_saf(function PerformancePaintTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformancePaintTiming, PerformanceEntry)
PerformanceServerTiming = v_saf(function PerformanceServerTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
HTMLMediaElement = v_saf(function HTMLMediaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLMediaElement, HTMLElement)
HTMLUnknownElement = v_saf(function HTMLUnknownElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLUnknownElement, HTMLElement)
Touch = v_saf(function Touch(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
UIEvent = v_saf(function UIEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(UIEvent, Event)
TouchEvent = v_saf(function TouchEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(TouchEvent, UIEvent)
MouseEvent = v_saf(function MouseEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MouseEvent, UIEvent)
PointerEvent = v_saf(function PointerEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PointerEvent, MouseEvent)
HTMLDivElement = v_saf(function HTMLDivElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLDivElement, HTMLElement)
HTMLFormElement = v_saf(function HTMLFormElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLFormElement, HTMLElement)
HTMLSpanElement = v_saf(function HTMLSpanElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLSpanElement, HTMLElement)
HTMLHtmlElement = v_saf(function HTMLHtmlElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHtmlElement, HTMLElement)
HTMLTitleElement = v_saf(function HTMLTitleElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTitleElement, HTMLElement)
HTMLButtonElement = v_saf(function HTMLButtonElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLButtonElement, HTMLElement)
HTMLUListElement = v_saf(function HTMLUListElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLUListElement, HTMLElement)
HTMLLIElement = v_saf(function HTMLLIElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLLIElement, HTMLElement)
HTMLLabelElement = v_saf(function HTMLLabelElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLLabelElement, HTMLElement)
HTMLParagraphElement = v_saf(function HTMLParagraphElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLParagraphElement, HTMLElement)
HTMLHeadingElement = v_saf(function HTMLHeadingElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHeadingElement, HTMLElement)
HTMLDListElement = v_saf(function HTMLDListElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLDListElement, HTMLElement)
Object.defineProperties(EventTarget.prototype, {
  removeEventListener: {value: v_saf(function removeEventListener(){v_console_log("  [*] EventTarget -> removeEventListener[func]", [].slice.call(arguments));})},
  dispatchEvent: {value: v_saf(function dispatchEvent(){v_console_log("  [*] EventTarget -> dispatchEvent[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"EventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMTokenList.prototype, {
  add: {value: v_saf(function add(){v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments));})},
  supports: {value: v_saf(function supports(){v_console_log("  [*] DOMTokenList -> supports[func]", [].slice.call(arguments));})},
  contains: {value: v_saf(function contains(){v_console_log("  [*] DOMTokenList -> contains[func]", [].slice.call(arguments));})},
  remove: {value: v_saf(function remove(){v_console_log("  [*] DOMTokenList -> remove[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"DOMTokenList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MessageChannel.prototype, {
  port2: {get(){ v_console_log("  [*] MessageChannel -> port2[get]", {});return {} }},
  port1: {get(){ v_console_log("  [*] MessageChannel -> port1[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"MessageChannel",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(WebKitMutationObserver.prototype, {
  observe: {value: v_saf(function observe(){v_console_log("  [*] WebKitMutationObserver -> observe[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"WebKitMutationObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MutationObserver.prototype, {
  observe: {value: v_saf(function observe(){v_console_log("  [*] MutationObserver -> observe[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"MutationObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Navigator.prototype, {
  userAgent: {get(){ v_console_log("  [*] Navigator -> userAgent[get]", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36");return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" }},
  platform: {get(){ v_console_log("  [*] Navigator -> platform[get]", "Win32");return "Win32" }},
  scheduling: {get(){ v_console_log("  [*] Navigator -> scheduling[get]", {});return {} }},
  product: {get(){ v_console_log("  [*] Navigator -> product[get]", "Gecko");return "Gecko" }},
  javaEnabled: {value: v_saf(function javaEnabled(){v_console_log("  [*] Navigator -> javaEnabled[func]", [].slice.call(arguments));return true})},
  language: {get(){ v_console_log("  [*] Navigator -> language[get]", "zh-CN");return "zh-CN" }},
  sendBeacon: {value: v_saf(function sendBeacon(){v_console_log("  [*] Navigator -> sendBeacon[func]", [].slice.call(arguments));})},
  webdriver: {get(){ v_console_log("  [*] Navigator -> webdriver[get]", false);return false }},
  plugins: {get(){ v_console_log("  [*] Navigator -> plugins[get]", this._plugins || []);return this._plugins || [] }},
  hardwareConcurrency: {get(){ v_console_log("  [*] Navigator -> hardwareConcurrency[get]", 32);return 32 }},
  maxTouchPoints: {get(){ v_console_log("  [*] Navigator -> maxTouchPoints[get]", 0);return 0 }},
  cookieEnabled: {get(){ v_console_log("  [*] Navigator -> cookieEnabled[get]", true);return true }},
  appName: {get(){ v_console_log("  [*] Navigator -> appName[get]", "Netscape");return "Netscape" }},
  onLine: {get(){ v_console_log("  [*] Navigator -> onLine[get]", true);return true }},
  mimeTypes: {get(){ v_console_log("  [*] Navigator -> mimeTypes[get]", this._mimeTypes || []);return this._mimeTypes || [] }},
  vendor: {get(){ v_console_log("  [*] Navigator -> vendor[get]", "Google Inc.");return "Google Inc." }},
  appVersion: {get(){ v_console_log("  [*] Navigator -> appVersion[get]", "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36");return "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36" }},
  appCodeName: {get(){ v_console_log("  [*] Navigator -> appCodeName[get]", "Mozilla");return "Mozilla" }},
  doNotTrack: {get(){ v_console_log("  [*] Navigator -> doNotTrack[get]", {});return {} }},
  productSub: {get(){ v_console_log("  [*] Navigator -> productSub[get]", "20030107");return "20030107" }},
  vendorSub: {get(){ v_console_log("  [*] Navigator -> vendorSub[get]", "");return "" }},
  getBattery: {value: v_saf(function getBattery(){v_console_log("  [*] Navigator -> getBattery[func]", [].slice.call(arguments));})},
  languages: {get(){ v_console_log("  [*] Navigator -> languages[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"Navigator",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Storage.prototype, {
  [Symbol.toStringTag]: {value:"Storage",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(NodeList.prototype, {
  length: {get(){ v_console_log("  [*] NodeList -> length[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"NodeList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCollection.prototype, {
  length: {get(){ v_console_log("  [*] HTMLCollection -> length[get]", 1);return 1 }},
  [Symbol.toStringTag]: {value:"HTMLCollection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceObserver.prototype, {
  observe: {value: v_saf(function observe(){v_console_log("  [*] PerformanceObserver -> observe[func]", [].slice.call(arguments));})},
  disconnect: {value: v_saf(function disconnect(){v_console_log("  [*] PerformanceObserver -> disconnect[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"PerformanceObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Crypto.prototype, {
  [Symbol.toStringTag]: {value:"Crypto",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(TextDecoder.prototype, {
  decode: {value: v_saf(function decode(){v_console_log("  [*] TextDecoder -> decode[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"TextDecoder",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Path2D.prototype, {
  addPath: {value: v_saf(function addPath(){v_console_log("  [*] Path2D -> addPath[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Path2D",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Event.prototype, {
  target: {get(){ v_console_log("  [*] Event -> target[get]", {});return {} }},
  type: {get(){ v_console_log("  [*] Event -> type[get]", "readystatechange");return "readystatechange" }},
  defaultPrevented: {get(){ v_console_log("  [*] Event -> defaultPrevented[get]", false);return false }},
  NONE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  CAPTURING_PHASE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  AT_TARGET: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  BUBBLING_PHASE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Event",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Request.prototype, {
  headers: {get(){ v_console_log("  [*] Request -> headers[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"Request",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Headers.prototype, {
  has: {value: v_saf(function has(){v_console_log("  [*] Headers -> has[func]", [].slice.call(arguments));})},
  get: {value: v_saf(function get(){v_console_log("  [*] Headers -> get[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Headers",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Response.prototype, {
  body: {get(){ v_console_log("  [*] Response -> body[get]", {});return {} }},
  status: {get(){ v_console_log("  [*] Response -> status[get]", 200);return 200 }},
  headers: {get(){ v_console_log("  [*] Response -> headers[get]", {});return {} }},
  json: {value: v_saf(function json(){v_console_log("  [*] Response -> json[func]", [].slice.call(arguments));})},
  ok: {get(){ v_console_log("  [*] Response -> ok[get]", true);return true }},
  [Symbol.toStringTag]: {value:"Response",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(URLSearchParams.prototype, {
  toString: {value: v_saf(function toString(){v_console_log("  [*] URLSearchParams -> toString[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"URLSearchParams",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(History.prototype, {
  replaceState: {value: v_saf(function replaceState(){v_console_log("  [*] History -> replaceState[func]", [].slice.call(arguments));})},
  state: {get(){ v_console_log("  [*] History -> state[get]", {});return {} }},
  length: {get(){ v_console_log("  [*] History -> length[get]", 40);return 40 }},
  [Symbol.toStringTag]: {value:"History",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(webkitURL.prototype, {
  searchParams: {get(){ v_console_log("  [*] webkitURL -> searchParams[get]", {});return {} }},
  pathname: {get(){ v_console_log("  [*] webkitURL -> pathname[get]", "/modules/hotel/hotel-spider-defence-new/sdt.1001-common.min.9523a027cd7f61152c429eae5b56b319.js");return "/modules/hotel/hotel-spider-defence-new/sdt.1001-common.min.9523a027cd7f61152c429eae5b56b319.js" }},
  [Symbol.toStringTag]: {value:"webkitURL",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceEntry.prototype, {
  entryType: {get(){ v_console_log("  [*] PerformanceEntry -> entryType[get]", "resource");return "resource" }},
  name: {get(){ v_console_log("  [*] PerformanceEntry -> name[get]", "https://cdid.c-ctrip.com/chloro-device/v2/d");return "https://cdid.c-ctrip.com/chloro-device/v2/d" }},
  duration: {get(){ v_console_log("  [*] PerformanceEntry -> duration[get]", 144);return 144 }},
  startTime: {get(){ v_console_log("  [*] PerformanceEntry -> startTime[get]", 5194.899999976158);return 5194.899999976158 }},
  [Symbol.toStringTag]: {value:"PerformanceEntry",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceObserverEntryList.prototype, {
  getEntries: {value: v_saf(function getEntries(){v_console_log("  [*] PerformanceObserverEntryList -> getEntries[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"PerformanceObserverEntryList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(TrustedTypePolicy.prototype, {
  createScriptURL: {value: v_saf(function createScriptURL(){v_console_log("  [*] TrustedTypePolicy -> createScriptURL[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"TrustedTypePolicy",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(AbortController.prototype, {
  signal: {get(){ v_console_log("  [*] AbortController -> signal[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"AbortController",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSStyleDeclaration.prototype, {
  cssText: {get(){ v_console_log("  [*] CSSStyleDeclaration -> cssText[get]", "");return "" },set(){ v_console_log("  [*] CSSStyleDeclaration -> cssText[set]", [].slice.call(arguments));return "" }},
  length: {get(){ v_console_log("  [*] CSSStyleDeclaration -> length[get]", 33);return 33 }},
  cssFloat: {set(){ v_console_log("  [*] CSSStyleDeclaration -> cssFloat[set]", [].slice.call(arguments));return 33 }},
  getPropertyValue: {value: v_saf(function getPropertyValue(){v_console_log("  [*] CSSStyleDeclaration -> getPropertyValue[func]", [].slice.call(arguments));})},
  getPropertyPriority: {value: v_saf(function getPropertyPriority(){v_console_log("  [*] CSSStyleDeclaration -> getPropertyPriority[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"CSSStyleDeclaration",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMRectReadOnly.prototype, {
  right: {get(){ v_console_log("  [*] DOMRectReadOnly -> right[get]", 1690.666748046875);return 1690.666748046875 }},
  left: {get(){ v_console_log("  [*] DOMRectReadOnly -> left[get]", 719.3333740234375);return 719.3333740234375 }},
  bottom: {get(){ v_console_log("  [*] DOMRectReadOnly -> bottom[get]", 1684.666748046875);return 1684.666748046875 }},
  top: {get(){ v_console_log("  [*] DOMRectReadOnly -> top[get]", 1013.375);return 1013.375 }},
  [Symbol.toStringTag]: {value:"DOMRectReadOnly",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PluginArray.prototype, {
  item: {value: v_saf(function item(){v_console_log("  [*] PluginArray -> item[func]", [].slice.call(arguments));})},
  length: {get(){ v_console_log("  [*] PluginArray -> length[get]", 5);return 5 }},
  [Symbol.toStringTag]: {value:"PluginArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Plugin.prototype, {
  [Symbol.toStringTag]: {value:"Plugin",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CanvasRenderingContext2D.prototype, {
  textBaseline: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> textBaseline[set]", [].slice.call(arguments)); }},
  font: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> font[set]", [].slice.call(arguments)); }},
  fillStyle: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> fillStyle[set]", [].slice.call(arguments)); }},
  fillRect: {value: v_saf(function fillRect(){v_console_log("  [*] CanvasRenderingContext2D -> fillRect[func]", [].slice.call(arguments));})},
  fillText: {value: v_saf(function fillText(){v_console_log("  [*] CanvasRenderingContext2D -> fillText[func]", [].slice.call(arguments));})},
  scale: {value: v_saf(function scale(){v_console_log("  [*] CanvasRenderingContext2D -> scale[func]", [].slice.call(arguments));})},
  fill: {value: v_saf(function fill(){v_console_log("  [*] CanvasRenderingContext2D -> fill[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"CanvasRenderingContext2D",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(IntersectionObserver.prototype, {
  thresholds: {get(){ v_console_log("  [*] IntersectionObserver -> thresholds[get]", {});return {} }},
  observe: {value: v_saf(function observe(){v_console_log("  [*] IntersectionObserver -> observe[func]", [].slice.call(arguments));})},
  unobserve: {value: v_saf(function unobserve(){v_console_log("  [*] IntersectionObserver -> unobserve[func]", [].slice.call(arguments));})},
  disconnect: {value: v_saf(function disconnect(){v_console_log("  [*] IntersectionObserver -> disconnect[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"IntersectionObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(IntersectionObserverEntry.prototype, {
  intersectionRatio: {get(){ v_console_log("  [*] IntersectionObserverEntry -> intersectionRatio[get]", 1);return 1 }},
  isIntersecting: {get(){ v_console_log("  [*] IntersectionObserverEntry -> isIntersecting[get]", false);return false }},
  target: {get(){ v_console_log("  [*] IntersectionObserverEntry -> target[get]", {});return {} }},
  boundingClientRect: {get(){ v_console_log("  [*] IntersectionObserverEntry -> boundingClientRect[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"IntersectionObserverEntry",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Image.prototype, {
  src: {set(){ v_console_log("  [*] Image -> src[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"Image",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(NamedNodeMap.prototype, {
  length: {get(){ v_console_log("  [*] NamedNodeMap -> length[get]", 1);return 1 }},
  [Symbol.toStringTag]: {value:"NamedNodeMap",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CustomElementRegistry.prototype, {
  get: {value: v_saf(function get(){v_console_log("  [*] CustomElementRegistry -> get[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"CustomElementRegistry",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(StyleSheetList.prototype, {
  length: {get(){ v_console_log("  [*] StyleSheetList -> length[get]", 18);return 18 }},
  [Symbol.toStringTag]: {value:"StyleSheetList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(StyleSheet.prototype, {
  href: {get(){ v_console_log("  [*] StyleSheet -> href[get]", "https://webresource.c-ctrip.com/ares2/nfes/pc-home/*/default/icon/pc_home.css");return "https://webresource.c-ctrip.com/ares2/nfes/pc-home/*/default/icon/pc_home.css" }},
  [Symbol.toStringTag]: {value:"StyleSheet",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSRuleList.prototype, {
  length: {get(){ v_console_log("  [*] CSSRuleList -> length[get]", 247);return 247 }},
  [Symbol.toStringTag]: {value:"CSSRuleList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSRule.prototype, {
  cssText: {get(){ v_console_log("  [*] CSSRule -> cssText[get]", ".fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour100_TQ2bR { background-size: contain; width: 90px; }");return ".fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour100_TQ2bR { background-size: contain; width: 90px; }" }},
  STYLE_RULE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  CHARSET_RULE: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  IMPORT_RULE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  MEDIA_RULE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  FONT_FACE_RULE: {"value":5,"writable":false,"enumerable":true,"configurable":false},
  PAGE_RULE: {"value":6,"writable":false,"enumerable":true,"configurable":false},
  NAMESPACE_RULE: {"value":10,"writable":false,"enumerable":true,"configurable":false},
  KEYFRAMES_RULE: {"value":7,"writable":false,"enumerable":true,"configurable":false},
  KEYFRAME_RULE: {"value":8,"writable":false,"enumerable":true,"configurable":false},
  COUNTER_STYLE_RULE: {"value":11,"writable":false,"enumerable":true,"configurable":false},
  FONT_FEATURE_VALUES_RULE: {"value":14,"writable":false,"enumerable":true,"configurable":false},
  SUPPORTS_RULE: {"value":12,"writable":false,"enumerable":true,"configurable":false},
  MARGIN_RULE: {"value":9,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"CSSRule",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Selection.prototype, {
  isCollapsed: {get(){ v_console_log("  [*] Selection -> isCollapsed[get]", true);return true }},
  [Symbol.toStringTag]: {value:"Selection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(RTCSessionDescription.prototype, {
  sdp: {get(){ v_console_log("  [*] RTCSessionDescription -> sdp[get]", "v=0\r\no=- 771225016485822407 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:Resk\r\na=ice-pwd:L2LOtlLrL7fD+s4FdTSXXdTu\r\na=ice-options:trickle\r\na=fingerprint:sha-256 5E:E1:82:13:B1:FB:CA:F6:46:4F:F8:53:73:01:A0:42:C7:9C:90:48:CD:56:9C:40:3B:F3:49:91:ED:16:F2:FC\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n");return "v=0\r\no=- 771225016485822407 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=ice-ufrag:Resk\r\na=ice-pwd:L2LOtlLrL7fD+s4FdTSXXdTu\r\na=ice-options:trickle\r\na=fingerprint:sha-256 5E:E1:82:13:B1:FB:CA:F6:46:4F:F8:53:73:01:A0:42:C7:9C:90:48:CD:56:9C:40:3B:F3:49:91:ED:16:F2:FC\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n" }},
  [Symbol.toStringTag]: {value:"RTCSessionDescription",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MutationRecord.prototype, {
  target: {get(){ v_console_log("  [*] MutationRecord -> target[get]", {});return {} }},
  type: {get(){ v_console_log("  [*] MutationRecord -> type[get]", "childList");return "childList" }},
  addedNodes: {get(){ v_console_log("  [*] MutationRecord -> addedNodes[get]", {});return {} }},
  removedNodes: {get(){ v_console_log("  [*] MutationRecord -> removedNodes[get]", {});return {} }},
  attributeName: {get(){ v_console_log("  [*] MutationRecord -> attributeName[get]", "u_remark");return "u_remark" }},
  oldValue: {get(){ v_console_log("  [*] MutationRecord -> oldValue[get]", "低价日历日期tab[active:false,price:-,date:2024-12-29,date2:-]");return "低价日历日期tab[active:false,price:-,date:2024-12-29,date2:-]" }},
  [Symbol.toStringTag]: {value:"MutationRecord",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(RTCIceCandidate.prototype, {
  candidate: {get(){ v_console_log("  [*] RTCIceCandidate -> candidate[get]", "candidate:3220706450 1 udp 2113937151 56c37905-551b-432c-95a5-8dba0662c9b0.local 56741 typ host generation 0 ufrag Resk network-cost 999");return "candidate:3220706450 1 udp 2113937151 56c37905-551b-432c-95a5-8dba0662c9b0.local 56741 typ host generation 0 ufrag Resk network-cost 999" }},
  [Symbol.toStringTag]: {value:"RTCIceCandidate",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMImplementation.prototype, {
  createHTMLDocument: {value: v_saf(function createHTMLDocument(){v_console_log("  [*] DOMImplementation -> createHTMLDocument[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"DOMImplementation",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(IdleDeadline.prototype, {
  timeRemaining: {value: v_saf(function timeRemaining(){v_console_log("  [*] IdleDeadline -> timeRemaining[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"IdleDeadline",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeTypeArray.prototype, {
  length: {get(){ v_console_log("  [*] MimeTypeArray -> length[get]", 2);return 2 }},
  [Symbol.toStringTag]: {value:"MimeTypeArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeType.prototype, {
  [Symbol.toStringTag]: {value:"MimeType",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceTiming.prototype, {
  navigationStart: {get(){ v_console_log("  [*] PerformanceTiming -> navigationStart[get]", 1734925782442);return 1734925782442 }},
  unloadEventStart: {get(){ v_console_log("  [*] PerformanceTiming -> unloadEventStart[get]", 1734925782509);return 1734925782509 }},
  unloadEventEnd: {get(){ v_console_log("  [*] PerformanceTiming -> unloadEventEnd[get]", 1734925782509);return 1734925782509 }},
  redirectStart: {get(){ v_console_log("  [*] PerformanceTiming -> redirectStart[get]", 0);return 0 }},
  redirectEnd: {get(){ v_console_log("  [*] PerformanceTiming -> redirectEnd[get]", 0);return 0 }},
  fetchStart: {get(){ v_console_log("  [*] PerformanceTiming -> fetchStart[get]", 1734925782444);return 1734925782444 }},
  domainLookupStart: {get(){ v_console_log("  [*] PerformanceTiming -> domainLookupStart[get]", 1734925782444);return 1734925782444 }},
  domainLookupEnd: {get(){ v_console_log("  [*] PerformanceTiming -> domainLookupEnd[get]", 1734925782444);return 1734925782444 }},
  connectStart: {get(){ v_console_log("  [*] PerformanceTiming -> connectStart[get]", 1734925782444);return 1734925782444 }},
  connectEnd: {get(){ v_console_log("  [*] PerformanceTiming -> connectEnd[get]", 1734925782444);return 1734925782444 }},
  secureConnectionStart: {get(){ v_console_log("  [*] PerformanceTiming -> secureConnectionStart[get]", 0);return 0 }},
  requestStart: {get(){ v_console_log("  [*] PerformanceTiming -> requestStart[get]", 1734925782446);return 1734925782446 }},
  responseStart: {get(){ v_console_log("  [*] PerformanceTiming -> responseStart[get]", 1734925782503);return 1734925782503 }},
  responseEnd: {get(){ v_console_log("  [*] PerformanceTiming -> responseEnd[get]", 1734925782575);return 1734925782575 }},
  domLoading: {get(){ v_console_log("  [*] PerformanceTiming -> domLoading[get]", 1734925782512);return 1734925782512 }},
  domInteractive: {get(){ v_console_log("  [*] PerformanceTiming -> domInteractive[get]", 1734925782991);return 1734925782991 }},
  domContentLoadedEventStart: {get(){ v_console_log("  [*] PerformanceTiming -> domContentLoadedEventStart[get]", 1734925783016);return 1734925783016 }},
  domContentLoadedEventEnd: {get(){ v_console_log("  [*] PerformanceTiming -> domContentLoadedEventEnd[get]", 1734925783018);return 1734925783018 }},
  domComplete: {get(){ v_console_log("  [*] PerformanceTiming -> domComplete[get]", 1734925783441);return 1734925783441 }},
  loadEventStart: {get(){ v_console_log("  [*] PerformanceTiming -> loadEventStart[get]", 1734925783442);return 1734925783442 }},
  loadEventEnd: {get(){ v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", 1734925784398);return 1734925784398 }},
  [Symbol.toStringTag]: {value:"PerformanceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Node.prototype, {
  parentNode: {get(){ v_console_log("  [*] Node -> parentNode[get]", {});return {} }},
  textContent: {get(){ v_console_log("  [*] Node -> textContent[get]", "狭窄");return "狭窄" },set(){ v_console_log("  [*] Node -> textContent[set]", [].slice.call(arguments));return "狭窄" }},
  firstChild: {get(){ v_console_log("  [*] Node -> firstChild[get]", {});return {} }},
  childNodes: {get(){ v_console_log("  [*] Node -> childNodes[get]", {});return {} }},
  nextSibling: {get(){ v_console_log("  [*] Node -> nextSibling[get]", {});return {} }},
  appendChild: {value: v_saf(function appendChild(){v_console_log("  [*] Node -> appendChild[func]", [].slice.call(arguments));})},
  removeChild: {value: v_saf(function removeChild(){v_console_log("  [*] Node -> removeChild[func]", [].slice.call(arguments));})},
  nodeType: {get(){ v_console_log("  [*] Node -> nodeType[get]", 1);return 1 }},
  insertBefore: {value: v_saf(function insertBefore(){v_console_log("  [*] Node -> insertBefore[func]", [].slice.call(arguments));})},
  ownerDocument: {get(){ v_console_log("  [*] Node -> ownerDocument[get]", {});return {} }},
  nodeName: {get(){ v_console_log("  [*] Node -> nodeName[get]", "I");return "I" }},
  isEqualNode: {value: v_saf(function isEqualNode(){v_console_log("  [*] Node -> isEqualNode[func]", [].slice.call(arguments));})},
  lastChild: {get(){ v_console_log("  [*] Node -> lastChild[get]", {});return {} }},
  nodeValue: {set(){ v_console_log("  [*] Node -> nodeValue[set]", [].slice.call(arguments));return {} }},
  parentElement: {get(){ v_console_log("  [*] Node -> parentElement[get]", {});return {} }},
  previousSibling: {get(){ v_console_log("  [*] Node -> previousSibling[get]", {});return {} }},
  contains: {value: v_saf(function contains(){v_console_log("  [*] Node -> contains[func]", [].slice.call(arguments));})},
  getRootNode: {value: v_saf(function getRootNode(){v_console_log("  [*] Node -> getRootNode[func]", [].slice.call(arguments));})},
  ELEMENT_NODE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  ATTRIBUTE_NODE: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  TEXT_NODE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  CDATA_SECTION_NODE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  ENTITY_REFERENCE_NODE: {"value":5,"writable":false,"enumerable":true,"configurable":false},
  ENTITY_NODE: {"value":6,"writable":false,"enumerable":true,"configurable":false},
  PROCESSING_INSTRUCTION_NODE: {"value":7,"writable":false,"enumerable":true,"configurable":false},
  COMMENT_NODE: {"value":8,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_NODE: {"value":9,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_TYPE_NODE: {"value":10,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_FRAGMENT_NODE: {"value":11,"writable":false,"enumerable":true,"configurable":false},
  NOTATION_NODE: {"value":12,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_DISCONNECTED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_PRECEDING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_FOLLOWING: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_CONTAINS: {"value":8,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_CONTAINED_BY: {"value":16,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {"value":32,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Node",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MessagePort.prototype, {
  onmessage: {set(){ v_console_log("  [*] MessagePort -> onmessage[set]", [].slice.call(arguments)); }},
  postMessage: {value: v_saf(function postMessage(){v_console_log("  [*] MessagePort -> postMessage[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"MessagePort",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Worker.prototype, {
  onmessage: {set(){ v_console_log("  [*] Worker -> onmessage[set]", [].slice.call(arguments)); }},
  onerror: {set(){ v_console_log("  [*] Worker -> onerror[set]", [].slice.call(arguments)); }},
  postMessage: {value: v_saf(function postMessage(){v_console_log("  [*] Worker -> postMessage[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"Worker",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
  onerror: {set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onerror[set]", [].slice.call(arguments)); }},
  onloadend: {set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onloadend[set]", [].slice.call(arguments)); }},
  onabort: {set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onabort[set]", [].slice.call(arguments)); }},
  ontimeout: {set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> ontimeout[set]", [].slice.call(arguments)); }},
  onload: {set(){ v_console_log("  [*] XMLHttpRequestEventTarget -> onload[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"XMLHttpRequestEventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Performance.prototype, {
  mark: {value: v_saf(function mark(){v_console_log("  [*] Performance -> mark[func]", [].slice.call(arguments));})},
  now: {value: v_saf(function now(){v_console_log("  [*] Performance -> now[func]", [].slice.call(arguments));})},
  getEntriesByName: {value: v_saf(function getEntriesByName(){v_console_log("  [*] Performance -> getEntriesByName[func]", [].slice.call(arguments));})},
  measure: {value: v_saf(function measure(){v_console_log("  [*] Performance -> measure[func]", [].slice.call(arguments));})},
  clearMarks: {value: v_saf(function clearMarks(){v_console_log("  [*] Performance -> clearMarks[func]", [].slice.call(arguments));})},
  getEntries: {value: v_saf(function getEntries(){v_console_log("  [*] Performance -> getEntries[func]", [].slice.call(arguments));})},
  getEntriesByType: {value: v_saf(function getEntriesByType(){v_console_log("  [*] Performance -> getEntriesByType[func]", [].slice.call(arguments));if (arguments[0]=='resource'){return v_new(PerformanceResourceTiming)}})},
  timing: {get(){ v_console_log("  [*] Performance -> timing[get]", v_new(PerformanceTiming));return v_new(PerformanceTiming) }},
  [Symbol.toStringTag]: {value:"Performance",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceResourceTiming.prototype, {
  initiatorType: {get(){ v_console_log("  [*] PerformanceResourceTiming -> initiatorType[get]", "xmlhttprequest");return "xmlhttprequest" }},
  transferSize: {get(){ v_console_log("  [*] PerformanceResourceTiming -> transferSize[get]", 0);return 0 }},
  responseStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> responseStart[get]", 60.89999997615814);return 60.89999997615814 }},
  responseEnd: {get(){ v_console_log("  [*] PerformanceResourceTiming -> responseEnd[get]", 132.79999995231628);return 132.79999995231628 }},
  domainLookupEnd: {get(){ v_console_log("  [*] PerformanceResourceTiming -> domainLookupEnd[get]", 1.7999999523162842);return 1.7999999523162842 }},
  domainLookupStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> domainLookupStart[get]", 1.7999999523162842);return 1.7999999523162842 }},
  connectEnd: {get(){ v_console_log("  [*] PerformanceResourceTiming -> connectEnd[get]", 1.7999999523162842);return 1.7999999523162842 }},
  connectStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> connectStart[get]", 1.7999999523162842);return 1.7999999523162842 }},
  redirectEnd: {get(){ v_console_log("  [*] PerformanceResourceTiming -> redirectEnd[get]", 0);return 0 }},
  redirectStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> redirectStart[get]", 0);return 0 }},
  encodedBodySize: {get(){ v_console_log("  [*] PerformanceResourceTiming -> encodedBodySize[get]", 67398);return 67398 }},
  decodedBodySize: {get(){ v_console_log("  [*] PerformanceResourceTiming -> decodedBodySize[get]", 387379);return 387379 }},
  toJSON: {value: v_saf(function toJSON(){v_console_log("  [*] PerformanceResourceTiming -> toJSON[func]", [].slice.call(arguments));})},
  workerStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> workerStart[get]", 0);return 0 }},
  fetchStart: {get(){ v_console_log("  [*] PerformanceResourceTiming -> fetchStart[get]", 788.0999999046326);return 788.0999999046326 }},
  [Symbol.toStringTag]: {value:"PerformanceResourceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(LayoutShift.prototype, {
  hadRecentInput: {get(){ v_console_log("  [*] LayoutShift -> hadRecentInput[get]", false);return false }},
  value: {get(){ v_console_log("  [*] LayoutShift -> value[get]", 0.000008019058657286136);return 0.000008019058657286136 }},
  [Symbol.toStringTag]: {value:"LayoutShift",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(TrustedTypePolicyFactory.prototype, {
  createPolicy: {value: v_saf(function createPolicy(){v_console_log("  [*] TrustedTypePolicyFactory -> createPolicy[func]", [].slice.call(arguments));})},
  [Symbol.toStringTag]: {value:"TrustedTypePolicyFactory",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Screen.prototype, {
  width: {get(){ v_console_log("  [*] Screen -> width[get]", 1707);return 1707 }},
  height: {get(){ v_console_log("  [*] Screen -> height[get]", 1067);return 1067 }},
  colorDepth: {get(){ v_console_log("  [*] Screen -> colorDepth[get]", 24);return 24 }},
  pixelDepth: {get(){ v_console_log("  [*] Screen -> pixelDepth[get]", 24);return 24 }},
  availWidth: {get(){ v_console_log("  [*] Screen -> availWidth[get]", 1707);return 1707 }},
  availHeight: {get(){ v_console_log("  [*] Screen -> availHeight[get]", 1019);return 1019 }},
  [Symbol.toStringTag]: {value:"Screen",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MessageEvent.prototype, {
  data: {get(){ v_console_log("  [*] MessageEvent -> data[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"MessageEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(RTCPeerConnection.prototype, {
  onicecandidate: {set(){ v_console_log("  [*] RTCPeerConnection -> onicecandidate[set]", [].slice.call(arguments)); }},
  createDataChannel: {value: v_saf(function createDataChannel(){v_console_log("  [*] RTCPeerConnection -> createDataChannel[func]", [].slice.call(arguments));})},
  createOffer: {value: v_saf(function createOffer(){v_console_log("  [*] RTCPeerConnection -> createOffer[func]", [].slice.call(arguments));})},
  setLocalDescription: {value: v_saf(function setLocalDescription(){v_console_log("  [*] RTCPeerConnection -> setLocalDescription[func]", [].slice.call(arguments));})},
  localDescription: {get(){ v_console_log("  [*] RTCPeerConnection -> localDescription[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"RTCPeerConnection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(webkitRTCPeerConnection.prototype, {
  onicecandidate: {set(){ v_console_log("  [*] webkitRTCPeerConnection -> onicecandidate[set]", [].slice.call(arguments)); }},
  createDataChannel: {value: v_saf(function createDataChannel(){v_console_log("  [*] webkitRTCPeerConnection -> createDataChannel[func]", [].slice.call(arguments));})},
  createOffer: {value: v_saf(function createOffer(){v_console_log("  [*] webkitRTCPeerConnection -> createOffer[func]", [].slice.call(arguments));})},
  setLocalDescription: {value: v_saf(function setLocalDescription(){v_console_log("  [*] webkitRTCPeerConnection -> setLocalDescription[func]", [].slice.call(arguments));})},
  localDescription: {get(){ v_console_log("  [*] webkitRTCPeerConnection -> localDescription[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"webkitRTCPeerConnection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSStyleSheet.prototype, {
  rules: {get(){ v_console_log("  [*] CSSStyleSheet -> rules[get]", {});return {} }},
  cssRules: {get(){ v_console_log("  [*] CSSStyleSheet -> cssRules[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"CSSStyleSheet",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSStyleRule.prototype, {
  selectorText: {get(){ v_console_log("  [*] CSSStyleRule -> selectorText[get]", ".fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour100_TQ2bR");return ".fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour100_TQ2bR" }},
  [Symbol.toStringTag]: {value:"CSSStyleRule",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PageTransitionEvent.prototype, {
  persisted: {get(){ v_console_log("  [*] PageTransitionEvent -> persisted[get]", false);return false }},
  [Symbol.toStringTag]: {value:"PageTransitionEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(RTCPeerConnectionIceEvent.prototype, {
  candidate: {get(){ v_console_log("  [*] RTCPeerConnectionIceEvent -> candidate[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"RTCPeerConnectionIceEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMRect.prototype, {
  width: {get(){ v_console_log("  [*] DOMRect -> width[get]", 210);return 210 }},
  height: {get(){ v_console_log("  [*] DOMRect -> height[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"DOMRect",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(BatteryManager.prototype, {
  charging: {get(){ v_console_log("  [*] BatteryManager -> charging[get]", true);return true }},
  level: {get(){ v_console_log("  [*] BatteryManager -> level[get]", 0.96);return 0.96 }},
  dischargingTime: {get(){ v_console_log("  [*] BatteryManager -> dischargingTime[get]", null);return null }},
  [Symbol.toStringTag]: {value:"BatteryManager",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Document.prototype, {
  documentElement: {get(){ v_console_log("  [*] Document -> documentElement[get]", document);return document }},
  createTextNode: {value: v_saf(function createTextNode(){v_console_log("  [*] Document -> createTextNode[func]", [].slice.call(arguments));})},
  all: {get(){ v_console_log("  [*] Document -> all[get]", {});return {} }},
  createElement: {value: v_saf(function createElement(){v_console_log("  [*] Document -> createElement[func]", [].slice.call(arguments));return _createElement(arguments[0])})},
  hidden: {get(){ v_console_log("  [*] Document -> hidden[get]", false);return false }},
  readyState: {get(){ v_console_log("  [*] Document -> readyState[get]", "complete");return "complete" }},
  referrer: {get(){ v_console_log("  [*] Document -> referrer[get]", "https://flights.ctrip.com/online/list/oneway-czx-can?depdate=2024-12-25&cabin=y_s_c_f&adult=1&child=0&infant=0");return "https://flights.ctrip.com/online/list/oneway-czx-can?depdate=2024-12-25&cabin=y_s_c_f&adult=1&child=0&infant=0" }},
  activeElement: {get(){ v_console_log("  [*] Document -> activeElement[get]", {});return {} }},
  title: {get(){ v_console_log("  [*] Document -> title[get]", "常州到广州机票查询预订-常州飞广州特价机票价格-携程飞机票");return "常州到广州机票查询预订-常州飞广州特价机票价格-携程飞机票" }},
  visibilityState: {get(){ v_console_log("  [*] Document -> visibilityState[get]", "visible");return "visible" }},
  createEvent: {value: v_saf(function createEvent(){v_console_log("  [*] Document -> createEvent[func]", [].slice.call(arguments));})},
  charset: {get(){ v_console_log("  [*] Document -> charset[get]", "UTF-8");return "UTF-8" }},
  compatMode: {get(){ v_console_log("  [*] Document -> compatMode[get]", "CSS1Compat");return "CSS1Compat" }},
  styleSheets: {get(){ v_console_log("  [*] Document -> styleSheets[get]", {});return {} }},
  scrollingElement: {get(){ v_console_log("  [*] Document -> scrollingElement[get]", {});return {} }},
  adoptedStyleSheets: {get(){ v_console_log("  [*] Document -> adoptedStyleSheets[get]", {});return {} }},
  defaultView: {get(){ v_console_log("  [*] Document -> defaultView[get]", {});return {} }},
  getSelection: {value: v_saf(function getSelection(){v_console_log("  [*] Document -> getSelection[func]", [].slice.call(arguments));})},
  implementation: {get(){ v_console_log("  [*] Document -> implementation[get]", {});return {} }},
  onreadystatechange: {"enumerable":true,"configurable":true},
  onmouseenter: {"enumerable":true,"configurable":true},
  onmouseleave: {"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"Document",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Element.prototype, {
  classList: {get(){ v_console_log("  [*] Element -> classList[get]", {});return {} }},
  getAttribute: {value: v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})},
  removeAttribute: {value: v_saf(function removeAttribute(){v_console_log("  [*] Element -> removeAttribute[func]", [].slice.call(arguments));})},
  localName: {get(){ v_console_log("  [*] Element -> localName[get]", "span");return "span" }},
  clientWidth: {get(){ v_console_log("  [*] Element -> clientWidth[get]", 1691);return 1691 }},
  className: {get(){ v_console_log("  [*] Element -> className[get]", "NEW-HEADER");return "NEW-HEADER" },set(){ v_console_log("  [*] Element -> className[set]", [].slice.call(arguments));return "NEW-HEADER" }},
  scrollLeft: {get(){ v_console_log("  [*] Element -> scrollLeft[get]", 0);return 0 }},
  scrollTop: {get(){ v_console_log("  [*] Element -> scrollTop[get]", 0);return 0 }},
  scrollWidth: {get(){ v_console_log("  [*] Element -> scrollWidth[get]", 76);return 76 }},
  scrollHeight: {get(){ v_console_log("  [*] Element -> scrollHeight[get]", 838);return 838 }},
  clientHeight: {get(){ v_console_log("  [*] Element -> clientHeight[get]", 881);return 881 }},
  id: {set(){ v_console_log("  [*] Element -> id[set]", [].slice.call(arguments));return 881 }},
  setAttribute: {value: v_saf(function setAttribute(){v_console_log("  [*] Element -> setAttribute[func]", [].slice.call(arguments));})},
  namespaceURI: {get(){ v_console_log("  [*] Element -> namespaceURI[get]", "http://www.w3.org/1999/xhtml");return "http://www.w3.org/1999/xhtml" }},
  tagName: {get(){ v_console_log("  [*] Element -> tagName[get]", this.v_tagName);return this.v_tagName }},
  querySelector: {value: v_saf(function querySelector(){v_console_log("  [*] Element -> querySelector[func]", [].slice.call(arguments));})},
  previousElementSibling: {get(){ v_console_log("  [*] Element -> previousElementSibling[get]", {});return {} }},
  getBoundingClientRect: {value: v_saf(function getBoundingClientRect(){v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));})},
  remove: {value: v_saf(function remove(){v_console_log("  [*] Element -> remove[func]", [].slice.call(arguments));})},
  querySelectorAll: {value: v_saf(function querySelectorAll(){v_console_log("  [*] Element -> querySelectorAll[func]", [].slice.call(arguments));})},
  getElementsByClassName: {value: v_saf(function getElementsByClassName(){v_console_log("  [*] Element -> getElementsByClassName[func]", [].slice.call(arguments));})},
  matches: {value: v_saf(function matches(){v_console_log("  [*] Element -> matches[func]", [].slice.call(arguments));})},
  attributes: {get(){ v_console_log("  [*] Element -> attributes[get]", {});return {} }},
  shadowRoot: {get(){ v_console_log("  [*] Element -> shadowRoot[get]", {});return {} }},
  hasAttribute: {value: v_saf(function hasAttribute(){v_console_log("  [*] Element -> hasAttribute[func]", [].slice.call(arguments));})},
  closest: {value: v_saf(function closest(){v_console_log("  [*] Element -> closest[func]", [].slice.call(arguments));})},
  innerHTML: {set(){ v_console_log("  [*] Element -> innerHTML[set]", [].slice.call(arguments));return {} }},
  [Symbol.toStringTag]: {value:"Element",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CharacterData.prototype, {
  data: {get(){ v_console_log("  [*] CharacterData -> data[get]", "适老化及无障碍标识");return "适老化及无障碍标识" },set(){ v_console_log("  [*] CharacterData -> data[set]", [].slice.call(arguments));return "适老化及无障碍标识" }},
  [Symbol.toStringTag]: {value:"CharacterData",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequest.prototype, {
  UNSENT: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  OPENED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  HEADERS_RECEIVED: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  LOADING: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  DONE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"XMLHttpRequest",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceNavigationTiming.prototype, {
  type: {get(){ v_console_log("  [*] PerformanceNavigationTiming -> type[get]", "navigate");return "navigate" }},
  [Symbol.toStringTag]: {value:"PerformanceNavigationTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DocumentType.prototype, {
  name: {get(){ v_console_log("  [*] DocumentType -> name[get]", "html");return "html" }},
  publicId: {get(){ v_console_log("  [*] DocumentType -> publicId[get]", "");return "" }},
  systemId: {get(){ v_console_log("  [*] DocumentType -> systemId[get]", "");return "" }},
  [Symbol.toStringTag]: {value:"DocumentType",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Attr.prototype, {
  name: {get(){ v_console_log("  [*] Attr -> name[get]", "class");return "class" }},
  value: {get(){ v_console_log("  [*] Attr -> value[get]", "ico-food-b");return "ico-food-b" }},
  [Symbol.toStringTag]: {value:"Attr",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLElement.prototype, {
  onclick: {get(){ v_console_log("  [*] HTMLElement -> onclick[get]", {});return {} },set(){ v_console_log("  [*] HTMLElement -> onclick[set]", [].slice.call(arguments));return {} }},
  style: {get(){ v_console_log("  [*] HTMLElement -> style[get]", this.v_style);return this.v_style }},
  offsetWidth: {get(){ v_console_log("  [*] HTMLElement -> offsetWidth[get]", 120);return 120 }},
  onerror: {get(){ v_console_log("  [*] HTMLElement -> onerror[get]", {});return {} },set(){ v_console_log("  [*] HTMLElement -> onerror[set]", [].slice.call(arguments));return {} }},
  onload: {get(){ v_console_log("  [*] HTMLElement -> onload[get]", {});return {} },set(){ v_console_log("  [*] HTMLElement -> onload[set]", [].slice.call(arguments));return {} }},
  contentEditable: {get(){ v_console_log("  [*] HTMLElement -> contentEditable[get]", "inherit");return "inherit" }},
  dataset: {get(){ v_console_log("  [*] HTMLElement -> dataset[get]", {});return {} }},
  offsetHeight: {get(){ v_console_log("  [*] HTMLElement -> offsetHeight[get]", 15);return 15 }},
  innerText: {get(){ v_console_log("  [*] HTMLElement -> innerText[get]", "\n                body,html{\n                    margin: 0;\n                    padding: 0;\n                }\n                #hp_top_layer {\n                    padding: 0 18px;\n                }\n                #hp_container{\n                    box-sizing: border-box;\n                }\n                .CTRIP_ASSIST  #hp_container {\n                }\n                #content{\n                    margin: 0 auto;\n                }\n                #footerLayer {\n                    margin-top: 40px;\n                    background: #f8fafd;\n                }\n            .lsn_menu_wrap_zLutF .lsn_menu_son_nav_HoNwa{display:block;text-decoration:none;padding:10px 20px;cursor:pointer}.lsn_menu_wrap_zLutF .lsn_menu_son_nav_HoNwa:hover .lsn_font_data_rSNIK{color:#0086f6;font-weight:500;cursor:pointer}.lsn_menu_wrap_zLutF .lsn_menu_son_nav_HoNwa .lsn_font_data_rSNIK{font-family:Pingfang SC,Helvetica,Helvetica Neue,Microsoft YaHei,Arial,Heiti SC,sans-serif;font-size:14px;letter-spacing:0px;line-height:18px;font-weight:normal;white-space:nowrap}.lsn_menu_wrap_zLutF .lsn_menu_son_nav_HoNwa:last-child{padding-bottom:20px}.lsn_menu_wrap_zLutF .lsn_menu_son_nav_HoNwa:first-child{padding-top:20px}.lsn_left_nav_container_fixed_GPuER{padding-right:76px}.lsn_left_nav_container_CT1cL{color:#555;font-size:14px;font-family:Pingfang SC,Helvetica,Helvetica Neue,Microsoft YaHei,Arial,Heiti SC,sans-serif;height:100%;background:#fff;border-right:1px solid #dadfe6}.lsn_left_nav_container_CT1cL .lsn_small_left_nav_container_KMgI-{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;width:164px}.lsn_left_nav_container_CT1cL .lsn_small_left_nav_container_fixed_lNeP4{background:#fff;border-right:1px solid #dadfe6;position:absolute;left:0;top:0;z-index:2}.lsn_left_nav_container_CT1cL .lsn_mini_left_nav_container_TASuN{width:76px}.lsn_left_nav_container_CT1cL .lsn_mini_left_nav_container_TASuN .lsn_button_icon_dvatN{margin:0 auto}.lsn_left_nav_container_CT1cL .lsn_mini_left_nav_container_TASuN .lsn_son_nav_wrap_TJFu2{transition:max-height 0s ease !important}.lsn_left_nav_container_CT1cL .lsn_top_button_wrap_boxshadown_EvVc7{position:relative}.lsn_left_nav_container_CT1cL .lsn_top_button_wrap_boxshadown_EvVc7:after{content:\"\";display:block;height:8px;width:100%;position:absolute;left:0;bottom:-8px;background:url(\"//webresource.c-ctrip.com/ares2/nfes/pc-home/*/default/image/blackbg.png\") no-repeat;background-size:cover}.lsn_left_nav_container_CT1cL .lsn_top_button_wrap_t3-TA{height:60px;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:14px;background:#fff}.lsn_left_nav_container_CT1cL .lsn_top_button_wrap_t3-TA .lsn_button_icon_dvatN{cursor:pointer;padding:12px}.lsn_left_nav_container_CT1cL .lsn_top_button_wrap_t3-TA .lsn_button_icon_dvatN .lsn_ico_9C9TD{width:24px;font-size:24px}.lsn_left_nav_container_CT1cL .lsn_icon_center_uNT-6{padding-left:0}.lsn_nav_content_wrap_ci7QT{-ms-flex:1;flex:1;padding:8px 15px;box-sizing:border-box}.lsn_nav_content_wrap_ci7QT .lsn_left_nav_border_ItHt7{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding:9px 0}.lsn_nav_content_wrap_ci7QT .lsn_left_nav_border_ItHt7:after{content:\"\";display:block;width:100%;border-top:1px solid #dadfe6}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin-bottom:6px;min-height:38px;-ms-flex-pack:center;justify-content:center;box-sizing:border-box}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_qdgwe{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;white-space:nowrap;padding:10px 13px;border-radius:20px;text-decoration:none;border:0;background:rgba(0,0,0,0);padding-right:0}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_qdgwe:hover{background:#f2f8fe}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_qdgwe .lsn_top_nav_icon_ijnym{width:20px;height:22px;border-radius:20px;text-align:center;font-size:20px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:#0086f6;margin-right:7px}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_qdgwe .lsn_top_nav_font_tag_t5SfS{min-width:32px;max-width:72px;height:20px}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_qdgwe .lsn_top_nav_font_4h1KU{font-family:PingFang SC;font-style:normal;font-size:16px;font-weight:500;line-height:22px;margin-right:4px;color:#333}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_qdgwe .lsn_top_nav_font_line_0iVuu{font-weight:normal}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_show_none_content_pfZ8n{padding:10px 12px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_show_none_content_pfZ8n .lsn_top_nav_icon_ijnym{margin:0}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_show_none_content_pfZ8n .lsn_top_nav_font_4h1KU{display:none}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_son_nav_wrap_TJFu2{padding-left:32px;box-sizing:border-box;overflow-y:hidden;transition:max-height .3s ease;max-height:650px;visibility:visible;-webkit-transform:translateZ(0);transform:translateZ(0);padding-top:8px}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_son_nav_wrap_TJFu2 .lsn_son_nav_LbhRN{padding:6px 0;padding-left:10px;padding-bottom:4px;margin-bottom:2px;margin-right:2px;box-sizing:border-box;cursor:pointer;display:block;text-decoration:none}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_son_nav_wrap_TJFu2 .lsn_son_nav_LbhRN .lsn_font_data_rSNIK{font-style:normal;font-weight:normal;font-size:14px;line-height:16px;font-family:Pingfang SC,Helvetica,Helvetica Neue,Microsoft YaHei,Arial,Heiti SC,sans-serif;color:#666;text-decoration:none}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_son_nav_wrap_TJFu2 .lsn_son_nav_LbhRN .lsn_font_data_rSNIK:hover{color:#0086f6;transition:all .2s ease}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_son_nav_wrap_TJFu2 .lsn_son_nav_active_E-1fy .lsn_font_data_rSNIK{font-weight:500;color:#0086f6}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_active_v6VGn .lsn_top_nav_qdgwe{background:linear-gradient(90deg, rgb(0, 167, 250) 0%, rgb(0, 118, 245) 100%)}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_active_v6VGn .lsn_top_nav_qdgwe:hover{background:linear-gradient(90deg, rgb(0, 167, 250) 0%, rgb(0, 118, 245) 100%)}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_active_v6VGn .lsn_top_nav_qdgwe .lsn_top_nav_font_4h1KU{color:#fff}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_active_v6VGn .lsn_top_nav_qdgwe .lsn_top_nav_icon_ijnym{color:#fff}.lsn_nav_content_wrap_ci7QT .lsn_son_hidden_vhA4D{display:none}.lsn_nav_content_wrap_ci7QT .lsn_son_show_9gw-I{max-height:0px !important;visibility:hidden !important;overflow:hidden;padding-top:0px !important}.lsn_disableClick_WFBYw{pointer-events:none;cursor:default}\n.popup-content{background:#fff}#popup-root{position:absolute;z-index:100000;top:0;left:0;color:#666;font-size:14px;font-family:Pingfang SC,Helvetica,Helvetica Neue,Microsoft YaHei,Arial,Heiti SC,sans-serif}#popup-root a{color:#666;text-decoration:none;font-style:normal;font-weight:normal;font-family:Pingfang SC,Helvetica,Helvetica Neue,Microsoft YaHei,Arial,Heiti SC,sans-serif}[role=tooltip].popup-content{box-shadow:0 2px 8px 0 rgba(0,0,0,.1);border-radius:10px}.popup-overlay{background:rgba(0,0,0,.5)}[data-popup=tooltip].popup-overlay{background:rgba(0,0,0,0)}.popup-arrow{color:#fff;stroke-width:1px;box-shadow:0 0 2px -2px rgba(0,0,0,.1);stroke:rgba(0,0,0,.1);stroke-dasharray:30px;stroke-dashoffset:-54px;left:0;right:0;top:0;bottom:0}\n.tl_header_nav_container_T0v0W{min-width:1080px;background-color:#fff;margin-left:auto;margin-right:auto;font-family:Pingfang SC,Helvetica,Helvetica Neue,Microsoft YaHei,Arial,Heiti SC,sans-serif}.tl_header_nav_container_T0v0W.tl_normal_header_oOjiU{max-width:1180px}.tl_header_nav_container_T0v0W.tl_simple_header_BRlgn{max-width:1180px;margin:auto}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ{height:72px;box-sizing:border-box}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7{height:100%;display:flex;align-items:center;justify-content:space-between;position:relative}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_logo_search_layout_jqiD8{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex:1}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_logo_search_layout_jqiD8 .tl_first_wrap_O-7cj{display:flex;align-items:center;height:40px;width:200px;z-index:10}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_logo_search_layout_jqiD8 .tl_first_wrap_O-7cj .tl_header_nav_small_logo_qV3BH{display:block;text-indent:-6999px;width:194px;height:32px}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_logo_search_layout_jqiD8 .tl_first_wrap_O-7cj .tl_header_logo_default_7J1Wu{background:url(https://webresource.c-ctrip.com/ares2/nfes/pc-home/1.0.65/default/image/logo.png) no-repeat;background-size:100% 100%}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_logo_search_layout_jqiD8 .tl_first_wrap_O-7cj .tl_header_logo_custom_HJwDU{background:url(https://webresource.c-ctrip.com/ares2/nfes/pc-home/1.2.14/default/image/ins_new.png) no-repeat;background-size:100% 100%}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_logo_search_layout_jqiD8 .tl_search_bar_wrap_-c5cq{display:flex;margin-left:24px;width:100%;max-width:320px;min-width:200px}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F{display:flex;align-items:center;margin-left:40px;right:0}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F a{text-decoration:none}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F button{border:none;outline:none;line-height:1;text-decoration:none}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe{position:relative;display:flex;justify-content:flex-start;align-items:center;cursor:pointer;background-color:rgba(0,0,0,0);color:#333}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe.tl_btn_home_-XbZg{margin-right:20px}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe.tl_btn_accessibility_lXwrx{margin-left:20px;overflow:visible}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe:hover,.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe:focus{color:#0086f6}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe:hover .tl_icon_btn_Ml4AL,.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe:hover .tl_icon_content_qbOk8,.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe:focus .tl_icon_btn_Ml4AL,.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe:focus .tl_icon_content_qbOk8{color:#0086f6}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe .tl_icon_btn_Ml4AL{font-size:20px;color:#5678a8;vertical-align:middle}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe .tl_icon_content_qbOk8{padding-left:4px;font-size:14px;line-height:18px;display:flex}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_header_jinlao_tips_XDmmg{position:absolute;top:calc(100% + 6px);left:calc(50% - 27px);z-index:9999;background:#333;border-radius:16px 16px 16px 16px;box-shadow:0px 2px 8px 0px rgba(0,0,0,.1);padding:6px 9px;display:inline-block;color:#fff;font-size:12px;white-space:nowrap}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_header_tips_HkrYK{position:absolute;top:calc(100% + 6px);left:calc(50% - 33px);z-index:9999;background:#333;border-radius:16px 16px 16px 16px;box-shadow:0px 2px 8px 0px rgba(0,0,0,.1);padding:6px 9px;display:inline-block;color:#fff;font-size:12px;white-space:nowrap}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_derive_5ZA9O{height:20px;width:1px;background-color:#dadfe6;margin-left:20px}#hp_top_layer{background-color:#fff}\n.tl_nfes_home_header_account_oS-UF{list-style:none;margin:0;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;color:#333;font-size:14px;line-height:1;box-sizing:border-box}.tl_nfes_home_header_account_oS-UF .tl_home_header_item_JJ5DU{margin-left:20px}.tl_nfes_home_header_account_oS-UF .tl_home_header_item_JJ5DU.tl_first_item_d1lsj{margin-left:0px}.tl_nfes_home_header_account_oS-UF button{border:none;background-color:rgba(0,0,0,0);outline:none;color:#333;line-height:1}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn{position:relative}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a{display:flex;align-items:center;justify-content:flex-start;flex-direction:row;background:#f2f8fe;border-radius:16px 16px 16px 16px;padding:4px 8px 4px 4px;cursor:pointer}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp:hover,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp.tl_select_Jruuh,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp:focus,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a:hover,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a.tl_select_Jruuh,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a:focus{color:#0086f6}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp:hover .tl_nfes_home_header_login_avatar_SG4WR,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp:hover .tl_nfes_home_header_login_title_5neWJ,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp.tl_select_Jruuh .tl_nfes_home_header_login_avatar_SG4WR,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp.tl_select_Jruuh .tl_nfes_home_header_login_title_5neWJ,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp:focus .tl_nfes_home_header_login_avatar_SG4WR,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp:focus .tl_nfes_home_header_login_title_5neWJ,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a:hover .tl_nfes_home_header_login_avatar_SG4WR,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a:hover .tl_nfes_home_header_login_title_5neWJ,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a.tl_select_Jruuh .tl_nfes_home_header_login_avatar_SG4WR,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a.tl_select_Jruuh .tl_nfes_home_header_login_title_5neWJ,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a:focus .tl_nfes_home_header_login_avatar_SG4WR,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a:focus .tl_nfes_home_header_login_title_5neWJ{color:#0086f6}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_avatar_SG4WR,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a .tl_nfes_home_header_login_avatar_SG4WR{border-radius:50%;width:24px;height:auto;font-size:24px;color:#5678a8}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a .tl_nfes_home_header_login_title_5neWJ{margin-left:5px;margin-right:2px;display:flex}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_login_title_name_fDEXu,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_login_title_name_fDEXu{white-space:nowrap;line-height:1.2}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_login_title_name_fDEXu.tl_vip_1Tkgx,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_login_title_name_fDEXu.tl_vip_1Tkgx{max-width:56px;overflow:hidden;text-overflow:ellipsis}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_login_title_name_fDEXu.tl_non_vip_RJmOk,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_login_title_name_fDEXu.tl_non_vip_RJmOk{width:70px}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_icon_LA97o,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_icon_LA97o{font-size:14px;align-items:center;margin-left:2px;display:flex}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_icon_LA97o.tl_icon_dropdown_S6x2r,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_icon_LA97o.tl_icon_dropdown_S6x2r{color:#333}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_icon_LA97o.tl_icon_hover_iGB9I,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_icon_LA97o.tl_icon_hover_iGB9I{color:#0086f6}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a{height:32px;padding:4px 13px 4px 12px}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_register_eTWYU{cursor:pointer}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_register_eTWYU:hover,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_register_eTWYU:focus{color:#0086f6}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu{position:absolute;z-index:9999;top:calc(100% + 8px);left:calc(50% - 120px)}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C{width:240px}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C .tl_account_switch_tip_lKv59 .tl_account_icon_wrapper_warn_-XLPV{position:absolute;width:36px;left:0;top:0;bottom:0;box-sizing:border-box}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C .tl_account_switch_tip_lKv59 .tl_account_icon_wrapper_warn_-XLPV .tl_header_icon_warn_pfk2e{position:absolute;right:6px;top:18px;font-size:16px;color:#f70}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C .tl_account_switch_tip_lKv59 .tl_account_icon_wrapper_warn_-XLPV .tl_header_icon_warn_pfk2e.tl_bg_RBG27{width:12px;height:12px;border-radius:50%;background:#fff;z-index:0;right:9px;top:20px}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C .tl_account_switch_tip_lKv59 .tl_account_icon_wrapper_close_E-Sph{position:absolute;width:36px;right:0;top:0;bottom:0;display:flex;justify-content:center;padding-top:12px}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C .tl_account_switch_tip_lKv59 .tl_account_icon_wrapper_close_E-Sph .tl_header_icon_close_T2QJh{font-size:12px;color:#fff;cursor:pointer;height:12px}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C .tl_account_switch_tip_lKv59 .tl_account_tip_title_fVxbc{width:168px;margin-left:36px;margin-right:36px;padding-top:16px;padding-bottom:16px;font-size:14px;color:#fff;line-height:20px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj{position:absolute;z-index:9999;top:calc(100% + 8px);left:calc(50% - 114px)}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:20px 8px 11px 8px;box-sizing:border-box}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY{margin-bottom:18px;margin-right:19px;display:flex;flex-direction:row;justify-content:flex-start}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_user_avatar_9rIw1{padding-right:8px;display:flex;align-items:center}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR{display:flex;flex-direction:column;justify-content:space-around;align-items:flex-start}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_user_name_wrapper_zfBSz{display:inline-flex;cursor:pointer;color:#333}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_user_name_wrapper_zfBSz:hover,.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_user_name_wrapper_zfBSz:focus{color:#0086f6}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_user_name_wrapper_zfBSz .tl_user_name_kFprV{max-width:129px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:16px;line-height:24px;font-weight:bold}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_user_name_wrapper_zfBSz .tl_icon_link_DuvU-{margin:auto;align-self:center}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF{display:inline-flex;white-space:nowrap;margin-top:2px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL{display:inline-flex;align-items:center;border-radius:9px 9px 9px 9px;color:#333;font-size:12px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL span{margin:auto 8px auto 4px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_goldenVIP_-SFga{background:#ffe9c4}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_platinumVIP_fVTaA{background:#d8f5ff}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_blackDiamondVIP_ifRgb{background:#fff7eb}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_goldenDiamondVIP_O0uEF{background:#dde4fa}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_diamondVIP_p7979{background:#e7e6ff}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_ordinaryMember_jyuYJ{background:#e9f6ff}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_silverVIP_FgXfg{background:#e9f6ff}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_super_vip_oJkGL{margin-left:4px;background:linear-gradient(90deg, rgb(249, 235, 228) 0%, rgb(255, 211, 187) 100%);border-radius:9px 9px 9px 9px;padding:3px 7px 3px 8px;color:#333;font-size:12px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_vip_ads_-rMIg{width:100%;height:56px;margin-bottom:18px;background-size:cover;background-repeat:no-repeat;border-radius:8px 8px 8px 8px;display:flex;flex-direction:row;justify-content:flex-start}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_vip_ads_-rMIg .tl_left_vip_rights_mbn3N{color:#eee;font-size:12px;padding:34px 12px 10px 8px;white-space:nowrap}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_vip_ads_-rMIg .tl_right_open_tUoRv{align-self:center;flex:1;display:flex;justify-content:center;padding-right:12px;white-space:nowrap}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_vip_ads_-rMIg .tl_right_open_tUoRv .tl_open_button_T3msR{background:linear-gradient(90deg, rgb(249, 235, 228) 0%, rgb(242, 179, 144) 100%);border-radius:12px 12px 12px 12px;color:#000;font-size:12px;font-weight:500;cursor:pointer}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_vip_ads_-rMIg .tl_right_open_tUoRv .tl_open_button_T3msR span{margin:2px 8px;line-height:20px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq{width:212px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_split_line_NQgo2{margin:0 12px;height:1px;width:calc(100% - 24px);background-color:#dadfe6}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_split_line_NQgo2.tl_top_Gf7PT{margin-bottom:8px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_split_line_NQgo2.tl_bottom_F6xFi{margin:8px 0}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M{width:100%;box-sizing:border-box;display:inline-flex;padding:11px 12px;align-items:center;justify-content:flex-start;color:#333;font-size:14px;font-weight:normal;line-height:18px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M .tl_icon_C5ApI{color:#5678a8}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M .tl_title_sGgZK{margin:auto 0 auto 9px;white-space:nowrap}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M .tl_tag_y80ej{margin:auto 0 auto 8px;color:#0086f6;font-weight:500;text-overflow:ellipsis;overflow:hidden}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M.tl_logout_knRFU .tl_icon_C5ApI{color:#333}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M:hover,.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M:focus{background:#f2f8fe;border-radius:20px 20px 20px 20px;color:#0086f6;cursor:pointer}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M:hover .tl_icon_C5ApI,.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M:focus .tl_icon_C5ApI{color:#0086f6}.tl_nfes_home_header_account_oS-UF .tl_space_vertical_line_Ng4Lz{height:20px;width:1px;background-color:#dadfe6}\n.tl_pc_home_header_order_gcMhX{overflow:visible;position:relative;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;cursor:pointer;padding:6px 0px}.tl_pc_home_header_order_gcMhX a{color:#333}.tl_pc_home_header_order_gcMhX:hover,.tl_pc_home_header_order_gcMhX:focus{color:#0086f6}.tl_pc_home_header_order_gcMhX:hover .tl_order_title_kSApX,.tl_pc_home_header_order_gcMhX:focus .tl_order_title_kSApX{color:#0086f6}.tl_pc_home_header_order_gcMhX .tl_icon_order_QjjKh{color:#5678a8;font-size:20px;vertical-align:middle}.tl_pc_home_header_order_gcMhX .tl_icon_order_QjjKh.tl_hover_x8-Yd{color:#0086f6}.tl_pc_home_header_order_gcMhX .tl_order_title_kSApX{margin:auto;padding-left:4px;padding-right:2px;display:flex}.tl_pc_home_header_order_gcMhX .tl_order_title_kSApX:focus{color:#0086f6}.tl_pc_home_header_order_gcMhX .tl_icon_dropdown_lExig{font-size:14px;vertical-align:middle}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa{position:absolute;z-index:9999;top:calc(100% + 8px);left:calc(50% - 80px)}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL{padding:11px 8px 9px 8px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U{width:100%;display:flex;cursor:pointer;padding:11px 12px;box-sizing:border-box}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U:hover,.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U:focus{background-color:#f2f8fe;border-radius:20px 20px 20px 20px;color:#0086f6}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U:hover .tl_icon_9iQ2G,.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U:focus .tl_icon_9iQ2G{color:#0086f6}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U span{padding-left:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U .tl_icon_9iQ2G{color:#89a0c2}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_split_line_JEUU6{height:1px;width:calc(100% - 24px);background-color:#dadfe6;margin:8px 12px}\n.tl_header_dropdown_panel_L4Nvq{box-sizing:border-box;background:#fff;border:1px solid #e6f3fe;border-radius:10px;filter:drop-shadow(0 0 8px rgba(0, 0, 0, 0.1))}.tl_header_dropdown_panel_L4Nvq .tl_arrow_ZoQ7U{content:\" \";position:absolute;top:-8px;left:calc(50% - 10px);border-width:0 8px 8px;border-style:solid;width:0;height:0;border-style:solid;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #e6f3fe}.tl_header_dropdown_panel_L4Nvq .tl_arrow_ZoQ7U:after{content:\"\";position:absolute;top:1px;left:-7px;border-width:0 7px 7px;border-style:solid;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff}.tl_header_dropdown_panel_L4Nvq .tl_arrow_ZoQ7U.tl_black_vXF62{border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.9019607843)}.tl_header_dropdown_panel_L4Nvq .tl_arrow_ZoQ7U.tl_black_vXF62:after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.9019607843)}\n.tl_header_icon_wrapper_GsnJ-{display:flex;position:relative;padding:6px 0;overflow:visible}.tl_header_icon_wrapper_GsnJ-:hover .tl_header_icon_CqpDm,.tl_header_icon_wrapper_GsnJ-:focus .tl_header_icon_CqpDm,.tl_header_icon_wrapper_GsnJ- button:focus .tl_header_icon_CqpDm{color:#0086f6}.tl_header_icon_wrapper_GsnJ- .tl_header_icon_CqpDm{color:#5678a8;font-size:20px;cursor:pointer}.tl_header_tips_9Ze9j{position:absolute;top:calc(100% + 6px);left:calc(50% - 33px);z-index:9999;background:#333;border-radius:16px 16px 16px 16px;box-shadow:0px 2px 8px 0px rgba(0,0,0,.1);padding:6px 9px;display:inline-block;color:#fff;font-size:12px;white-space:nowrap}.tl_notification_count_wrapper_Aa-WA{position:relative;cursor:pointer;display:flex}.tl_notification_count_wrapper_Aa-WA .tl_notification_count_font_SDRwz{color:#333}.tl_notification_count_wrapper_Aa-WA .tl_notification_count_gVIWt{position:absolute;left:85%;top:-13px;padding:2px 4px;border-radius:50px;background:#f5190a;display:inline-block;box-sizing:border-box;color:#fff;font-size:12px;text-align:center;vertical-align:middle}.tl_qrcode_panel_rfXW9{position:absolute;z-index:9999;top:calc(100% + 8px);left:calc(50% - 240px)}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F{display:flex;flex-direction:row;justify-content:center;align-items:flex-start;padding:22px 23px 20px}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;font-size:14px}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK.tl_first_0XM03{margin-right:25px}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK .tl_item_title_obEiT{margin-top:2px;color:#333;line-height:22px}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK .tl_link_title_Gbhw6{color:#333;font-weight:bold;margin-top:8px;cursor:pointer;display:inline-flex}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK .tl_link_title_Gbhw6:hover,.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK .tl_link_title_Gbhw6:focus{color:#0086f6}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK .tl_link_title_Gbhw6 .tl_icon_oynMq{font-size:14px}.tl_custom_service_panel_n5l1Y{position:absolute;z-index:9999;top:calc(100% + 8px);left:calc(50% - 119px)}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7{padding:24px 20px 16px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_service_center_link_LrDCv{padding-bottom:19px;font-size:14px;font-weight:bold;line-height:18px;display:flex;cursor:pointer;color:#333}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_service_center_link_LrDCv:hover,.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_service_center_link_LrDCv:focus{color:#0086f6}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_service_center_link_LrDCv .tl_jump_icon_vlGT3{font-size:14px}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_tel_list_dG17S{padding-top:16px;border-top:1px solid #dadfe6;font-size:12px;line-height:16px}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_tel_list_dG17S li{margin-top:4px;list-style:none}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_tel_list_dG17S li:first-of-type{margin-top:0}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_tel_list_dG17S .tl_list_item_first_HWMIk{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_tel_list_dG17S .tl_list_item_first_HWMIk .tl_tel_number_list_Hdkg4{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_tel_list_dG17S .tl_list_item_other_hSzq2{display:flex;white-space:nowrap}\n.tl_input_wrap_4wLqk{height:32px;width:100%;display:flex;align-items:center;background:#fff;border-radius:8px 8px 8px 8px;border:1px solid #9acefb}.tl_input_wrap_4wLqk .tl_input_8N-Vi{flex:1;background:none;outline:none;border:none !important;text-indent:15px;font-style:normal;font-weight:normal;color:#666;font-size:14px;font-weight:normal;height:18px;letter-spacing:0px;line-height:18px;width:124px}.tl_input_wrap_4wLqk .tl_search_icon_N-uay{display:flex;justify-content:center;align-items:center;background:#0086f6;border-radius:0px 8px 8px 0px;height:100%;width:56px;margin-right:-1px;padding:1px 0;text-decoration:none}.tl_input_wrap_4wLqk .tl_search_icon_N-uay:before{content:\"󰩬\";text-align:center;display:flex;color:#fff;align-content:center;font-size:23px;border-radius:0px 8px 8px 0px}\n.fl_footer_wrap_ow234{width:100%;padding-left:18px;padding-right:18px;background:#f8fafd;box-sizing:border-box;font-family:Pingfang SC,Helvetica,Helvetica Neue,Microsoft YaHei,Arial,Heiti SC,sans-serif}.fl_footer_wrap_ow234 dl,.fl_footer_wrap_ow234 dd{margin:0;padding:0}.fl_footer_wrap_ow234 .fl_layout_wrap_g-sIE{min-width:1080px;margin:0 auto;padding-top:40px;padding-bottom:52px;background:#f8fafd}.fl_footer_wrap_ow234 .fl_layout_wrap_g-sIE.fl_normal_footer_YgQc1{max-width:1180px}.fl_footer_wrap_ow234 .fl_layout_wrap_g-sIE.fl_simple_footer_-yGp1{width:100%}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH{display:flex;flex-direction:row;justify-content:space-between;padding-left:12px;padding-right:9px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_layout_gZ1W6{margin-left:20px;border-right:1px solid #dadfe6;display:flex;box-sizing:border-box}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_layout_gZ1W6.fl_no_derive_G1PJ2{border-right-width:0}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_layout_gZ1W6.fl_first_item_y9897{margin-left:0}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx{float:left;display:inline-block;max-width:217px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_tel_list_3nBrm,.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_qrcode_Sf-pF{padding-top:42px;width:auto}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_tel_list_3nBrm .fl_list_item_first_CsArf{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_tel_list_3nBrm .fl_list_item_first_CsArf .fl_tel_number_list_Y0Y2g{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_tel_list_3nBrm .fl_list_item_other_7QPIe{display:inline-block;white-space:nowrap;margin-top:12px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_qrcode_Sf-pF{margin-left:31px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_qrcode_Sf-pF .fl_qr_title_oIhLw{color:#333;font-size:14px;line-height:22px;margin:4px 0px 0px;padding:0px 0px;text-align:center}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx dt{color:#333;font-size:20px;font-weight:500;line-height:24px;margin-bottom:6px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx dd{font-size:12px;line-height:16px;color:#666}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler{position:relative;float:left;display:inline-block;width:96px;text-align:left;margin-right:8px;margin-top:12px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler>a,.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ>a{color:#666;text-decoration:none}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler>a:hover,.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ>a:hover{color:#0086f6}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_news_item_a_5-UUz{display:flex}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_news_item_a_5-UUz:hover{color:#0086f6}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_news_item_a_5-UUz .fl_news_icon_VV9RE{font-size:12px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_dropdown_panel_S6G-k{position:absolute;z-index:9999;top:20px;right:0;background:#fff;border-radius:8px 8px 8px 8px;border:1px solid #e6f3fe;box-shadow:0px 2px 8px 0px rgba(0,0,0,.1);display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:16px 20px;width:194px;box-sizing:border-box}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_dropdown_panel_S6G-k .fl_drop_news_item_rdWfz{width:100%;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:8px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_dropdown_panel_S6G-k .fl_drop_news_item_rdWfz.fl_last_more_i1AIf{margin-bottom:0}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_dropdown_panel_S6G-k .fl_drop_news_item_rdWfz.fl_last_more_i1AIf>a{color:#0086f6}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_dropdown_panel_S6G-k .fl_drop_news_item_rdWfz>a{color:#666;font-size:12px;line-height:16px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_dropdown_panel_S6G-k .fl_drop_news_item_rdWfz>a:hover{color:#0086f6}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt{margin-top:40px;text-align:center;color:#999;font-size:12px;line-height:1.5}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt a{color:#999;text-decoration:none}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt a:hover{color:#0086f6}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt *:focus{color:#666}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_icon-gns_iPpG5,.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt a,.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt a,.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt span{background-color:#fff;background-repeat:no-repeat;background-position:0 0}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_gns_wrapper_wMJ0P{margin-top:8px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_gns_wrapper_wMJ0P .fl_icon-gns_iPpG5{display:inline-block;width:20px;height:20px;margin-right:3px;background-position:0 -235px;vertical-align:middle}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_supervision-call_gsdM8{padding-top:10px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt{display:inline-block;padding-top:10px;text-align:left}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt a,.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt span{float:left;margin:0 4px;width:88px;height:32px;border:1px solid #d1d1d1;border-radius:2px;font:12px/32px Simsun;color:#666;overflow:hidden;text-indent:-99em}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour1_-yL9A{background-position:-88px -50px;text-indent:36px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour2_Emzmq{background-position:-88px -85px;text-indent:36px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour4_eaDL-{background-position:-88px -118px;text-indent:0;padding:2px 0 2px 37px;width:51px;height:28px;line-height:1.2}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour5_o2v5s{width:95px;background-position:0 -387px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour6_ZTS5D{background-position:0 -118px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour10_6KzQ4{background-position:0 -429px;width:102px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour12_Lfzzx{background-position:0 -155px;width:114px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour11_30pvz{background-position:0 -480px;width:50px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour9_ds2vl{background-position:0 -350px;width:130px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour100_TQ2bR{background-size:contain;width:90px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src=\"https://pages.c-ctrip.com/nfes/assist.png\", sizingMethod=\"scale\");-ms-filter:\"progid:DXImageTransform.Microsoft.AlphaImageLoader( src='https://pages.c-ctrip.com/nfes/assist.png', sizingMethod='scale')\"}\n");return "\n                body,html{\n                    margin: 0;\n                    padding: 0;\n                }\n                #hp_top_layer {\n                    padding: 0 18px;\n                }\n                #hp_container{\n                    box-sizing: border-box;\n                }\n                .CTRIP_ASSIST  #hp_container {\n                }\n                #content{\n                    margin: 0 auto;\n                }\n                #footerLayer {\n                    margin-top: 40px;\n                    background: #f8fafd;\n                }\n            .lsn_menu_wrap_zLutF .lsn_menu_son_nav_HoNwa{display:block;text-decoration:none;padding:10px 20px;cursor:pointer}.lsn_menu_wrap_zLutF .lsn_menu_son_nav_HoNwa:hover .lsn_font_data_rSNIK{color:#0086f6;font-weight:500;cursor:pointer}.lsn_menu_wrap_zLutF .lsn_menu_son_nav_HoNwa .lsn_font_data_rSNIK{font-family:Pingfang SC,Helvetica,Helvetica Neue,Microsoft YaHei,Arial,Heiti SC,sans-serif;font-size:14px;letter-spacing:0px;line-height:18px;font-weight:normal;white-space:nowrap}.lsn_menu_wrap_zLutF .lsn_menu_son_nav_HoNwa:last-child{padding-bottom:20px}.lsn_menu_wrap_zLutF .lsn_menu_son_nav_HoNwa:first-child{padding-top:20px}.lsn_left_nav_container_fixed_GPuER{padding-right:76px}.lsn_left_nav_container_CT1cL{color:#555;font-size:14px;font-family:Pingfang SC,Helvetica,Helvetica Neue,Microsoft YaHei,Arial,Heiti SC,sans-serif;height:100%;background:#fff;border-right:1px solid #dadfe6}.lsn_left_nav_container_CT1cL .lsn_small_left_nav_container_KMgI-{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;width:164px}.lsn_left_nav_container_CT1cL .lsn_small_left_nav_container_fixed_lNeP4{background:#fff;border-right:1px solid #dadfe6;position:absolute;left:0;top:0;z-index:2}.lsn_left_nav_container_CT1cL .lsn_mini_left_nav_container_TASuN{width:76px}.lsn_left_nav_container_CT1cL .lsn_mini_left_nav_container_TASuN .lsn_button_icon_dvatN{margin:0 auto}.lsn_left_nav_container_CT1cL .lsn_mini_left_nav_container_TASuN .lsn_son_nav_wrap_TJFu2{transition:max-height 0s ease !important}.lsn_left_nav_container_CT1cL .lsn_top_button_wrap_boxshadown_EvVc7{position:relative}.lsn_left_nav_container_CT1cL .lsn_top_button_wrap_boxshadown_EvVc7:after{content:\"\";display:block;height:8px;width:100%;position:absolute;left:0;bottom:-8px;background:url(\"//webresource.c-ctrip.com/ares2/nfes/pc-home/*/default/image/blackbg.png\") no-repeat;background-size:cover}.lsn_left_nav_container_CT1cL .lsn_top_button_wrap_t3-TA{height:60px;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:14px;background:#fff}.lsn_left_nav_container_CT1cL .lsn_top_button_wrap_t3-TA .lsn_button_icon_dvatN{cursor:pointer;padding:12px}.lsn_left_nav_container_CT1cL .lsn_top_button_wrap_t3-TA .lsn_button_icon_dvatN .lsn_ico_9C9TD{width:24px;font-size:24px}.lsn_left_nav_container_CT1cL .lsn_icon_center_uNT-6{padding-left:0}.lsn_nav_content_wrap_ci7QT{-ms-flex:1;flex:1;padding:8px 15px;box-sizing:border-box}.lsn_nav_content_wrap_ci7QT .lsn_left_nav_border_ItHt7{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding:9px 0}.lsn_nav_content_wrap_ci7QT .lsn_left_nav_border_ItHt7:after{content:\"\";display:block;width:100%;border-top:1px solid #dadfe6}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;margin-bottom:6px;min-height:38px;-ms-flex-pack:center;justify-content:center;box-sizing:border-box}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_qdgwe{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;white-space:nowrap;padding:10px 13px;border-radius:20px;text-decoration:none;border:0;background:rgba(0,0,0,0);padding-right:0}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_qdgwe:hover{background:#f2f8fe}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_qdgwe .lsn_top_nav_icon_ijnym{width:20px;height:22px;border-radius:20px;text-align:center;font-size:20px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:#0086f6;margin-right:7px}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_qdgwe .lsn_top_nav_font_tag_t5SfS{min-width:32px;max-width:72px;height:20px}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_qdgwe .lsn_top_nav_font_4h1KU{font-family:PingFang SC;font-style:normal;font-size:16px;font-weight:500;line-height:22px;margin-right:4px;color:#333}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_qdgwe .lsn_top_nav_font_line_0iVuu{font-weight:normal}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_show_none_content_pfZ8n{padding:10px 12px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_show_none_content_pfZ8n .lsn_top_nav_icon_ijnym{margin:0}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_top_nav_show_none_content_pfZ8n .lsn_top_nav_font_4h1KU{display:none}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_son_nav_wrap_TJFu2{padding-left:32px;box-sizing:border-box;overflow-y:hidden;transition:max-height .3s ease;max-height:650px;visibility:visible;-webkit-transform:translateZ(0);transform:translateZ(0);padding-top:8px}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_son_nav_wrap_TJFu2 .lsn_son_nav_LbhRN{padding:6px 0;padding-left:10px;padding-bottom:4px;margin-bottom:2px;margin-right:2px;box-sizing:border-box;cursor:pointer;display:block;text-decoration:none}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_son_nav_wrap_TJFu2 .lsn_son_nav_LbhRN .lsn_font_data_rSNIK{font-style:normal;font-weight:normal;font-size:14px;line-height:16px;font-family:Pingfang SC,Helvetica,Helvetica Neue,Microsoft YaHei,Arial,Heiti SC,sans-serif;color:#666;text-decoration:none}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_son_nav_wrap_TJFu2 .lsn_son_nav_LbhRN .lsn_font_data_rSNIK:hover{color:#0086f6;transition:all .2s ease}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_wrap_LZamG .lsn_son_nav_wrap_TJFu2 .lsn_son_nav_active_E-1fy .lsn_font_data_rSNIK{font-weight:500;color:#0086f6}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_active_v6VGn .lsn_top_nav_qdgwe{background:linear-gradient(90deg, rgb(0, 167, 250) 0%, rgb(0, 118, 245) 100%)}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_active_v6VGn .lsn_top_nav_qdgwe:hover{background:linear-gradient(90deg, rgb(0, 167, 250) 0%, rgb(0, 118, 245) 100%)}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_active_v6VGn .lsn_top_nav_qdgwe .lsn_top_nav_font_4h1KU{color:#fff}.lsn_nav_content_wrap_ci7QT .lsn_first_nav_active_v6VGn .lsn_top_nav_qdgwe .lsn_top_nav_icon_ijnym{color:#fff}.lsn_nav_content_wrap_ci7QT .lsn_son_hidden_vhA4D{display:none}.lsn_nav_content_wrap_ci7QT .lsn_son_show_9gw-I{max-height:0px !important;visibility:hidden !important;overflow:hidden;padding-top:0px !important}.lsn_disableClick_WFBYw{pointer-events:none;cursor:default}\n.popup-content{background:#fff}#popup-root{position:absolute;z-index:100000;top:0;left:0;color:#666;font-size:14px;font-family:Pingfang SC,Helvetica,Helvetica Neue,Microsoft YaHei,Arial,Heiti SC,sans-serif}#popup-root a{color:#666;text-decoration:none;font-style:normal;font-weight:normal;font-family:Pingfang SC,Helvetica,Helvetica Neue,Microsoft YaHei,Arial,Heiti SC,sans-serif}[role=tooltip].popup-content{box-shadow:0 2px 8px 0 rgba(0,0,0,.1);border-radius:10px}.popup-overlay{background:rgba(0,0,0,.5)}[data-popup=tooltip].popup-overlay{background:rgba(0,0,0,0)}.popup-arrow{color:#fff;stroke-width:1px;box-shadow:0 0 2px -2px rgba(0,0,0,.1);stroke:rgba(0,0,0,.1);stroke-dasharray:30px;stroke-dashoffset:-54px;left:0;right:0;top:0;bottom:0}\n.tl_header_nav_container_T0v0W{min-width:1080px;background-color:#fff;margin-left:auto;margin-right:auto;font-family:Pingfang SC,Helvetica,Helvetica Neue,Microsoft YaHei,Arial,Heiti SC,sans-serif}.tl_header_nav_container_T0v0W.tl_normal_header_oOjiU{max-width:1180px}.tl_header_nav_container_T0v0W.tl_simple_header_BRlgn{max-width:1180px;margin:auto}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ{height:72px;box-sizing:border-box}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7{height:100%;display:flex;align-items:center;justify-content:space-between;position:relative}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_logo_search_layout_jqiD8{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex:1}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_logo_search_layout_jqiD8 .tl_first_wrap_O-7cj{display:flex;align-items:center;height:40px;width:200px;z-index:10}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_logo_search_layout_jqiD8 .tl_first_wrap_O-7cj .tl_header_nav_small_logo_qV3BH{display:block;text-indent:-6999px;width:194px;height:32px}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_logo_search_layout_jqiD8 .tl_first_wrap_O-7cj .tl_header_logo_default_7J1Wu{background:url(https://webresource.c-ctrip.com/ares2/nfes/pc-home/1.0.65/default/image/logo.png) no-repeat;background-size:100% 100%}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_logo_search_layout_jqiD8 .tl_first_wrap_O-7cj .tl_header_logo_custom_HJwDU{background:url(https://webresource.c-ctrip.com/ares2/nfes/pc-home/1.2.14/default/image/ins_new.png) no-repeat;background-size:100% 100%}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_logo_search_layout_jqiD8 .tl_search_bar_wrap_-c5cq{display:flex;margin-left:24px;width:100%;max-width:320px;min-width:200px}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F{display:flex;align-items:center;margin-left:40px;right:0}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F a{text-decoration:none}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F button{border:none;outline:none;line-height:1;text-decoration:none}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe{position:relative;display:flex;justify-content:flex-start;align-items:center;cursor:pointer;background-color:rgba(0,0,0,0);color:#333}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe.tl_btn_home_-XbZg{margin-right:20px}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe.tl_btn_accessibility_lXwrx{margin-left:20px;overflow:visible}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe:hover,.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe:focus{color:#0086f6}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe:hover .tl_icon_btn_Ml4AL,.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe:hover .tl_icon_content_qbOk8,.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe:focus .tl_icon_btn_Ml4AL,.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe:focus .tl_icon_content_qbOk8{color:#0086f6}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe .tl_icon_btn_Ml4AL{font-size:20px;color:#5678a8;vertical-align:middle}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_icon_btn_wrap_R8aGe .tl_icon_content_qbOk8{padding-left:4px;font-size:14px;line-height:18px;display:flex}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_header_jinlao_tips_XDmmg{position:absolute;top:calc(100% + 6px);left:calc(50% - 27px);z-index:9999;background:#333;border-radius:16px 16px 16px 16px;box-shadow:0px 2px 8px 0px rgba(0,0,0,.1);padding:6px 9px;display:inline-block;color:#fff;font-size:12px;white-space:nowrap}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_header_tips_HkrYK{position:absolute;top:calc(100% + 6px);left:calc(50% - 33px);z-index:9999;background:#333;border-radius:16px 16px 16px 16px;box-shadow:0px 2px 8px 0px rgba(0,0,0,.1);padding:6px 9px;display:inline-block;color:#fff;font-size:12px;white-space:nowrap}.tl_header_nav_container_T0v0W .tl_header_nav_fOCFQ .tl_header_nav_small_wrap_gCHc7 .tl_btn_wrap_EyH-F .tl_derive_5ZA9O{height:20px;width:1px;background-color:#dadfe6;margin-left:20px}#hp_top_layer{background-color:#fff}\n.tl_nfes_home_header_account_oS-UF{list-style:none;margin:0;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;color:#333;font-size:14px;line-height:1;box-sizing:border-box}.tl_nfes_home_header_account_oS-UF .tl_home_header_item_JJ5DU{margin-left:20px}.tl_nfes_home_header_account_oS-UF .tl_home_header_item_JJ5DU.tl_first_item_d1lsj{margin-left:0px}.tl_nfes_home_header_account_oS-UF button{border:none;background-color:rgba(0,0,0,0);outline:none;color:#333;line-height:1}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn{position:relative}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a{display:flex;align-items:center;justify-content:flex-start;flex-direction:row;background:#f2f8fe;border-radius:16px 16px 16px 16px;padding:4px 8px 4px 4px;cursor:pointer}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp:hover,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp.tl_select_Jruuh,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp:focus,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a:hover,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a.tl_select_Jruuh,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a:focus{color:#0086f6}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp:hover .tl_nfes_home_header_login_avatar_SG4WR,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp:hover .tl_nfes_home_header_login_title_5neWJ,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp.tl_select_Jruuh .tl_nfes_home_header_login_avatar_SG4WR,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp.tl_select_Jruuh .tl_nfes_home_header_login_title_5neWJ,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp:focus .tl_nfes_home_header_login_avatar_SG4WR,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp:focus .tl_nfes_home_header_login_title_5neWJ,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a:hover .tl_nfes_home_header_login_avatar_SG4WR,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a:hover .tl_nfes_home_header_login_title_5neWJ,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a.tl_select_Jruuh .tl_nfes_home_header_login_avatar_SG4WR,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a.tl_select_Jruuh .tl_nfes_home_header_login_title_5neWJ,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a:focus .tl_nfes_home_header_login_avatar_SG4WR,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a:focus .tl_nfes_home_header_login_title_5neWJ{color:#0086f6}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_avatar_SG4WR,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a .tl_nfes_home_header_login_avatar_SG4WR{border-radius:50%;width:24px;height:auto;font-size:24px;color:#5678a8}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a .tl_nfes_home_header_login_title_5neWJ{margin-left:5px;margin-right:2px;display:flex}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_login_title_name_fDEXu,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_login_title_name_fDEXu{white-space:nowrap;line-height:1.2}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_login_title_name_fDEXu.tl_vip_1Tkgx,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_login_title_name_fDEXu.tl_vip_1Tkgx{max-width:56px;overflow:hidden;text-overflow:ellipsis}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_login_title_name_fDEXu.tl_non_vip_RJmOk,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_login_title_name_fDEXu.tl_non_vip_RJmOk{width:70px}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_icon_LA97o,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_icon_LA97o{font-size:14px;align-items:center;margin-left:2px;display:flex}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_icon_LA97o.tl_icon_dropdown_S6x2r,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_icon_LA97o.tl_icon_dropdown_S6x2r{color:#333}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_IUsnp .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_icon_LA97o.tl_icon_hover_iGB9I,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a .tl_nfes_home_header_login_title_5neWJ .tl_nfes_home_header_icon_LA97o.tl_icon_hover_iGB9I{color:#0086f6}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_login_wrapper_siwkn .tl_nfes_home_header_login_not_frb4a{height:32px;padding:4px 13px 4px 12px}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_register_eTWYU{cursor:pointer}.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_register_eTWYU:hover,.tl_nfes_home_header_account_oS-UF .tl_nfes_home_header_register_eTWYU:focus{color:#0086f6}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu{position:absolute;z-index:9999;top:calc(100% + 8px);left:calc(50% - 120px)}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C{width:240px}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C .tl_account_switch_tip_lKv59 .tl_account_icon_wrapper_warn_-XLPV{position:absolute;width:36px;left:0;top:0;bottom:0;box-sizing:border-box}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C .tl_account_switch_tip_lKv59 .tl_account_icon_wrapper_warn_-XLPV .tl_header_icon_warn_pfk2e{position:absolute;right:6px;top:18px;font-size:16px;color:#f70}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C .tl_account_switch_tip_lKv59 .tl_account_icon_wrapper_warn_-XLPV .tl_header_icon_warn_pfk2e.tl_bg_RBG27{width:12px;height:12px;border-radius:50%;background:#fff;z-index:0;right:9px;top:20px}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C .tl_account_switch_tip_lKv59 .tl_account_icon_wrapper_close_E-Sph{position:absolute;width:36px;right:0;top:0;bottom:0;display:flex;justify-content:center;padding-top:12px}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C .tl_account_switch_tip_lKv59 .tl_account_icon_wrapper_close_E-Sph .tl_header_icon_close_T2QJh{font-size:12px;color:#fff;cursor:pointer;height:12px}.tl_nfes_home_header_account_oS-UF .tl_account_switch_tip_wrapper_8fIzu .tl_account_switch_tip_card_O-67C .tl_account_switch_tip_lKv59 .tl_account_tip_title_fVxbc{width:168px;margin-left:36px;margin-right:36px;padding-top:16px;padding-bottom:16px;font-size:14px;color:#fff;line-height:20px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj{position:absolute;z-index:9999;top:calc(100% + 8px);left:calc(50% - 114px)}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:20px 8px 11px 8px;box-sizing:border-box}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY{margin-bottom:18px;margin-right:19px;display:flex;flex-direction:row;justify-content:flex-start}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_user_avatar_9rIw1{padding-right:8px;display:flex;align-items:center}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR{display:flex;flex-direction:column;justify-content:space-around;align-items:flex-start}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_user_name_wrapper_zfBSz{display:inline-flex;cursor:pointer;color:#333}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_user_name_wrapper_zfBSz:hover,.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_user_name_wrapper_zfBSz:focus{color:#0086f6}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_user_name_wrapper_zfBSz .tl_user_name_kFprV{max-width:129px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:16px;line-height:24px;font-weight:bold}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_user_name_wrapper_zfBSz .tl_icon_link_DuvU-{margin:auto;align-self:center}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF{display:inline-flex;white-space:nowrap;margin-top:2px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL{display:inline-flex;align-items:center;border-radius:9px 9px 9px 9px;color:#333;font-size:12px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL span{margin:auto 8px auto 4px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_goldenVIP_-SFga{background:#ffe9c4}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_platinumVIP_fVTaA{background:#d8f5ff}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_blackDiamondVIP_ifRgb{background:#fff7eb}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_goldenDiamondVIP_O0uEF{background:#dde4fa}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_diamondVIP_p7979{background:#e7e6ff}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_ordinaryMember_jyuYJ{background:#e9f6ff}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_vip_level_Z03fL.tl_silverVIP_FgXfg{background:#e9f6ff}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_basic_info_vtLmY .tl_name_info_-XJhR .tl_vip_tag_faLjF .tl_super_vip_oJkGL{margin-left:4px;background:linear-gradient(90deg, rgb(249, 235, 228) 0%, rgb(255, 211, 187) 100%);border-radius:9px 9px 9px 9px;padding:3px 7px 3px 8px;color:#333;font-size:12px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_vip_ads_-rMIg{width:100%;height:56px;margin-bottom:18px;background-size:cover;background-repeat:no-repeat;border-radius:8px 8px 8px 8px;display:flex;flex-direction:row;justify-content:flex-start}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_vip_ads_-rMIg .tl_left_vip_rights_mbn3N{color:#eee;font-size:12px;padding:34px 12px 10px 8px;white-space:nowrap}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_vip_ads_-rMIg .tl_right_open_tUoRv{align-self:center;flex:1;display:flex;justify-content:center;padding-right:12px;white-space:nowrap}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_vip_ads_-rMIg .tl_right_open_tUoRv .tl_open_button_T3msR{background:linear-gradient(90deg, rgb(249, 235, 228) 0%, rgb(242, 179, 144) 100%);border-radius:12px 12px 12px 12px;color:#000;font-size:12px;font-weight:500;cursor:pointer}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_vip_ads_-rMIg .tl_right_open_tUoRv .tl_open_button_T3msR span{margin:2px 8px;line-height:20px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq{width:212px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:flex-start;align-items:center}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_split_line_NQgo2{margin:0 12px;height:1px;width:calc(100% - 24px);background-color:#dadfe6}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_split_line_NQgo2.tl_top_Gf7PT{margin-bottom:8px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_split_line_NQgo2.tl_bottom_F6xFi{margin:8px 0}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M{width:100%;box-sizing:border-box;display:inline-flex;padding:11px 12px;align-items:center;justify-content:flex-start;color:#333;font-size:14px;font-weight:normal;line-height:18px}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M .tl_icon_C5ApI{color:#5678a8}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M .tl_title_sGgZK{margin:auto 0 auto 9px;white-space:nowrap}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M .tl_tag_y80ej{margin:auto 0 auto 8px;color:#0086f6;font-weight:500;text-overflow:ellipsis;overflow:hidden}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M.tl_logout_knRFU .tl_icon_C5ApI{color:#333}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M:hover,.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M:focus{background:#f2f8fe;border-radius:20px 20px 20px 20px;color:#0086f6;cursor:pointer}.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M:hover .tl_icon_C5ApI,.tl_nfes_home_header_account_oS-UF .tl_header_account_center_wrapper_Anlqj .tl_header_account_center_CNxoP .tl_info_list_0vRoq .tl_list_item_Kah3M:focus .tl_icon_C5ApI{color:#0086f6}.tl_nfes_home_header_account_oS-UF .tl_space_vertical_line_Ng4Lz{height:20px;width:1px;background-color:#dadfe6}\n.tl_pc_home_header_order_gcMhX{overflow:visible;position:relative;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;cursor:pointer;padding:6px 0px}.tl_pc_home_header_order_gcMhX a{color:#333}.tl_pc_home_header_order_gcMhX:hover,.tl_pc_home_header_order_gcMhX:focus{color:#0086f6}.tl_pc_home_header_order_gcMhX:hover .tl_order_title_kSApX,.tl_pc_home_header_order_gcMhX:focus .tl_order_title_kSApX{color:#0086f6}.tl_pc_home_header_order_gcMhX .tl_icon_order_QjjKh{color:#5678a8;font-size:20px;vertical-align:middle}.tl_pc_home_header_order_gcMhX .tl_icon_order_QjjKh.tl_hover_x8-Yd{color:#0086f6}.tl_pc_home_header_order_gcMhX .tl_order_title_kSApX{margin:auto;padding-left:4px;padding-right:2px;display:flex}.tl_pc_home_header_order_gcMhX .tl_order_title_kSApX:focus{color:#0086f6}.tl_pc_home_header_order_gcMhX .tl_icon_dropdown_lExig{font-size:14px;vertical-align:middle}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa{position:absolute;z-index:9999;top:calc(100% + 8px);left:calc(50% - 80px)}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL{padding:11px 8px 9px 8px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U{width:100%;display:flex;cursor:pointer;padding:11px 12px;box-sizing:border-box}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U:hover,.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U:focus{background-color:#f2f8fe;border-radius:20px 20px 20px 20px;color:#0086f6}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U:hover .tl_icon_9iQ2G,.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U:focus .tl_icon_9iQ2G{color:#0086f6}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U span{padding-left:8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_type_list_item_JB0-U .tl_icon_9iQ2G{color:#89a0c2}.tl_pc_home_header_order_gcMhX .tl_order_center_xwPxa .tl_order_type_list_z-dcL .tl_split_line_JEUU6{height:1px;width:calc(100% - 24px);background-color:#dadfe6;margin:8px 12px}\n.tl_header_dropdown_panel_L4Nvq{box-sizing:border-box;background:#fff;border:1px solid #e6f3fe;border-radius:10px;filter:drop-shadow(0 0 8px rgba(0, 0, 0, 0.1))}.tl_header_dropdown_panel_L4Nvq .tl_arrow_ZoQ7U{content:\" \";position:absolute;top:-8px;left:calc(50% - 10px);border-width:0 8px 8px;border-style:solid;width:0;height:0;border-style:solid;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #e6f3fe}.tl_header_dropdown_panel_L4Nvq .tl_arrow_ZoQ7U:after{content:\"\";position:absolute;top:1px;left:-7px;border-width:0 7px 7px;border-style:solid;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #fff}.tl_header_dropdown_panel_L4Nvq .tl_arrow_ZoQ7U.tl_black_vXF62{border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.9019607843)}.tl_header_dropdown_panel_L4Nvq .tl_arrow_ZoQ7U.tl_black_vXF62:after{border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,.9019607843)}\n.tl_header_icon_wrapper_GsnJ-{display:flex;position:relative;padding:6px 0;overflow:visible}.tl_header_icon_wrapper_GsnJ-:hover .tl_header_icon_CqpDm,.tl_header_icon_wrapper_GsnJ-:focus .tl_header_icon_CqpDm,.tl_header_icon_wrapper_GsnJ- button:focus .tl_header_icon_CqpDm{color:#0086f6}.tl_header_icon_wrapper_GsnJ- .tl_header_icon_CqpDm{color:#5678a8;font-size:20px;cursor:pointer}.tl_header_tips_9Ze9j{position:absolute;top:calc(100% + 6px);left:calc(50% - 33px);z-index:9999;background:#333;border-radius:16px 16px 16px 16px;box-shadow:0px 2px 8px 0px rgba(0,0,0,.1);padding:6px 9px;display:inline-block;color:#fff;font-size:12px;white-space:nowrap}.tl_notification_count_wrapper_Aa-WA{position:relative;cursor:pointer;display:flex}.tl_notification_count_wrapper_Aa-WA .tl_notification_count_font_SDRwz{color:#333}.tl_notification_count_wrapper_Aa-WA .tl_notification_count_gVIWt{position:absolute;left:85%;top:-13px;padding:2px 4px;border-radius:50px;background:#f5190a;display:inline-block;box-sizing:border-box;color:#fff;font-size:12px;text-align:center;vertical-align:middle}.tl_qrcode_panel_rfXW9{position:absolute;z-index:9999;top:calc(100% + 8px);left:calc(50% - 240px)}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F{display:flex;flex-direction:row;justify-content:center;align-items:flex-start;padding:22px 23px 20px}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;font-size:14px}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK.tl_first_0XM03{margin-right:25px}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK .tl_item_title_obEiT{margin-top:2px;color:#333;line-height:22px}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK .tl_link_title_Gbhw6{color:#333;font-weight:bold;margin-top:8px;cursor:pointer;display:inline-flex}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK .tl_link_title_Gbhw6:hover,.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK .tl_link_title_Gbhw6:focus{color:#0086f6}.tl_qrcode_panel_rfXW9 .tl_code_list_Efq9F .tl_list_item_JOnTK .tl_link_title_Gbhw6 .tl_icon_oynMq{font-size:14px}.tl_custom_service_panel_n5l1Y{position:absolute;z-index:9999;top:calc(100% + 8px);left:calc(50% - 119px)}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7{padding:24px 20px 16px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_service_center_link_LrDCv{padding-bottom:19px;font-size:14px;font-weight:bold;line-height:18px;display:flex;cursor:pointer;color:#333}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_service_center_link_LrDCv:hover,.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_service_center_link_LrDCv:focus{color:#0086f6}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_service_center_link_LrDCv .tl_jump_icon_vlGT3{font-size:14px}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_tel_list_dG17S{padding-top:16px;border-top:1px solid #dadfe6;font-size:12px;line-height:16px}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_tel_list_dG17S li{margin-top:4px;list-style:none}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_tel_list_dG17S li:first-of-type{margin-top:0}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_tel_list_dG17S .tl_list_item_first_HWMIk{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_tel_list_dG17S .tl_list_item_first_HWMIk .tl_tel_number_list_Hdkg4{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.tl_custom_service_panel_n5l1Y .tl_panel_content_wPzc7 .tl_tel_list_dG17S .tl_list_item_other_hSzq2{display:flex;white-space:nowrap}\n.tl_input_wrap_4wLqk{height:32px;width:100%;display:flex;align-items:center;background:#fff;border-radius:8px 8px 8px 8px;border:1px solid #9acefb}.tl_input_wrap_4wLqk .tl_input_8N-Vi{flex:1;background:none;outline:none;border:none !important;text-indent:15px;font-style:normal;font-weight:normal;color:#666;font-size:14px;font-weight:normal;height:18px;letter-spacing:0px;line-height:18px;width:124px}.tl_input_wrap_4wLqk .tl_search_icon_N-uay{display:flex;justify-content:center;align-items:center;background:#0086f6;border-radius:0px 8px 8px 0px;height:100%;width:56px;margin-right:-1px;padding:1px 0;text-decoration:none}.tl_input_wrap_4wLqk .tl_search_icon_N-uay:before{content:\"󰩬\";text-align:center;display:flex;color:#fff;align-content:center;font-size:23px;border-radius:0px 8px 8px 0px}\n.fl_footer_wrap_ow234{width:100%;padding-left:18px;padding-right:18px;background:#f8fafd;box-sizing:border-box;font-family:Pingfang SC,Helvetica,Helvetica Neue,Microsoft YaHei,Arial,Heiti SC,sans-serif}.fl_footer_wrap_ow234 dl,.fl_footer_wrap_ow234 dd{margin:0;padding:0}.fl_footer_wrap_ow234 .fl_layout_wrap_g-sIE{min-width:1080px;margin:0 auto;padding-top:40px;padding-bottom:52px;background:#f8fafd}.fl_footer_wrap_ow234 .fl_layout_wrap_g-sIE.fl_normal_footer_YgQc1{max-width:1180px}.fl_footer_wrap_ow234 .fl_layout_wrap_g-sIE.fl_simple_footer_-yGp1{width:100%}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH{display:flex;flex-direction:row;justify-content:space-between;padding-left:12px;padding-right:9px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_layout_gZ1W6{margin-left:20px;border-right:1px solid #dadfe6;display:flex;box-sizing:border-box}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_layout_gZ1W6.fl_no_derive_G1PJ2{border-right-width:0}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_layout_gZ1W6.fl_first_item_y9897{margin-left:0}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx{float:left;display:inline-block;max-width:217px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_tel_list_3nBrm,.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_qrcode_Sf-pF{padding-top:42px;width:auto}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_tel_list_3nBrm .fl_list_item_first_CsArf{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_tel_list_3nBrm .fl_list_item_first_CsArf .fl_tel_number_list_Y0Y2g{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_tel_list_3nBrm .fl_list_item_other_7QPIe{display:inline-block;white-space:nowrap;margin-top:12px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_qrcode_Sf-pF{margin-left:31px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx.fl_item_qrcode_Sf-pF .fl_qr_title_oIhLw{color:#333;font-size:14px;line-height:22px;margin:4px 0px 0px;padding:0px 0px;text-align:center}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx dt{color:#333;font-size:20px;font-weight:500;line-height:24px;margin-bottom:6px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx dd{font-size:12px;line-height:16px;color:#666}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler{position:relative;float:left;display:inline-block;width:96px;text-align:left;margin-right:8px;margin-top:12px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler>a,.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ>a{color:#666;text-decoration:none}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler>a:hover,.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ>a:hover{color:#0086f6}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_news_item_a_5-UUz{display:flex}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_news_item_a_5-UUz:hover{color:#0086f6}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_news_item_a_5-UUz .fl_news_icon_VV9RE{font-size:12px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_dropdown_panel_S6G-k{position:absolute;z-index:9999;top:20px;right:0;background:#fff;border-radius:8px 8px 8px 8px;border:1px solid #e6f3fe;box-shadow:0px 2px 8px 0px rgba(0,0,0,.1);display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:16px 20px;width:194px;box-sizing:border-box}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_dropdown_panel_S6G-k .fl_drop_news_item_rdWfz{width:100%;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:8px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_dropdown_panel_S6G-k .fl_drop_news_item_rdWfz.fl_last_more_i1AIf{margin-bottom:0}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_dropdown_panel_S6G-k .fl_drop_news_item_rdWfz.fl_last_more_i1AIf>a{color:#0086f6}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_dropdown_panel_S6G-k .fl_drop_news_item_rdWfz>a{color:#666;font-size:12px;line-height:16px}.fl_footer_wrap_ow234 .fl_footer_link_list_OWItH .fl_footer_item_vp3yx .fl_ft_link_item_8Hler .fl_news_item_dropdown_A8-JZ .fl_dropdown_panel_S6G-k .fl_drop_news_item_rdWfz>a:hover{color:#0086f6}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt{margin-top:40px;text-align:center;color:#999;font-size:12px;line-height:1.5}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt a{color:#999;text-decoration:none}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt a:hover{color:#0086f6}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt *:focus{color:#666}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_icon-gns_iPpG5,.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt a,.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt a,.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt span{background-color:#fff;background-repeat:no-repeat;background-position:0 0}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_gns_wrapper_wMJ0P{margin-top:8px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_gns_wrapper_wMJ0P .fl_icon-gns_iPpG5{display:inline-block;width:20px;height:20px;margin-right:3px;background-position:0 -235px;vertical-align:middle}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_supervision-call_gsdM8{padding-top:10px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt{display:inline-block;padding-top:10px;text-align:left}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt a,.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt span{float:left;margin:0 4px;width:88px;height:32px;border:1px solid #d1d1d1;border-radius:2px;font:12px/32px Simsun;color:#666;overflow:hidden;text-indent:-99em}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour1_-yL9A{background-position:-88px -50px;text-indent:36px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour2_Emzmq{background-position:-88px -85px;text-indent:36px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour4_eaDL-{background-position:-88px -118px;text-indent:0;padding:2px 0 2px 37px;width:51px;height:28px;line-height:1.2}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour5_o2v5s{width:95px;background-position:0 -387px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour6_ZTS5D{background-position:0 -118px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour10_6KzQ4{background-position:0 -429px;width:102px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour12_Lfzzx{background-position:0 -155px;width:114px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour11_30pvz{background-position:0 -480px;width:50px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour9_ds2vl{background-position:0 -350px;width:130px}.fl_footer_wrap_ow234 .fl_footer_copyright_wrapper_xaEbt .fl_honour_wrap_E--kt .fl_honour100_TQ2bR{background-size:contain;width:90px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src=\"https://pages.c-ctrip.com/nfes/assist.png\", sizingMethod=\"scale\");-ms-filter:\"progid:DXImageTransform.Microsoft.AlphaImageLoader( src='https://pages.c-ctrip.com/nfes/assist.png', sizingMethod='scale')\"}\n" }},
  onmouseenter: {"enumerable":true,"configurable":true},
  onmouseleave: {"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"HTMLElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLInputElement.prototype, {
  placeholder: {set(){ v_console_log("  [*] HTMLInputElement -> placeholder[set]", [].slice.call(arguments)); }},
  type: {get(){ v_console_log("  [*] HTMLInputElement -> type[get]", "hidden");return "hidden" }},
  value: {get(){ v_console_log("  [*] HTMLInputElement -> value[get]", "广州(CAN)");return "广州(CAN)" },set(){ v_console_log("  [*] HTMLInputElement -> value[set]", [].slice.call(arguments));return "广州(CAN)" }},
  defaultValue: {get(){ v_console_log("  [*] HTMLInputElement -> defaultValue[get]", "广州(CAN)");return "广州(CAN)" },set(){ v_console_log("  [*] HTMLInputElement -> defaultValue[set]", [].slice.call(arguments));return "广州(CAN)" }},
  name: {get(){ v_console_log("  [*] HTMLInputElement -> name[get]", "owACity");return "owACity" },set(){ v_console_log("  [*] HTMLInputElement -> name[set]", [].slice.call(arguments));return "owACity" }},
  defaultChecked: {set(){ v_console_log("  [*] HTMLInputElement -> defaultChecked[set]", [].slice.call(arguments));return "owACity" }},
  checked: {get(){ v_console_log("  [*] HTMLInputElement -> checked[get]", false);return false }},
  [Symbol.toStringTag]: {value:"HTMLInputElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLScriptElement.prototype, {
  async: {get(){ v_console_log("  [*] HTMLScriptElement -> async[get]", true);return true },set(){ v_console_log("  [*] HTMLScriptElement -> async[set]", [].slice.call(arguments));return true }},
  crossOrigin: {set(){ v_console_log("  [*] HTMLScriptElement -> crossOrigin[set]", [].slice.call(arguments));return true }},
  src: {get(){ v_console_log("  [*] HTMLScriptElement -> src[get]", "https://static.tripcdn.com/packages/market/mkt-union-tracing/*/ResUnionOnline/remarketing/remarketing.js?v=20241223");return "https://static.tripcdn.com/packages/market/mkt-union-tracing/*/ResUnionOnline/remarketing/remarketing.js?v=20241223" },set(){ v_console_log("  [*] HTMLScriptElement -> src[set]", [].slice.call(arguments));return "https://static.tripcdn.com/packages/market/mkt-union-tracing/*/ResUnionOnline/remarketing/remarketing.js?v=20241223" }},
  type: {set(){ v_console_log("  [*] HTMLScriptElement -> type[set]", [].slice.call(arguments));return "https://static.tripcdn.com/packages/market/mkt-union-tracing/*/ResUnionOnline/remarketing/remarketing.js?v=20241223" }},
  charset: {set(){ v_console_log("  [*] HTMLScriptElement -> charset[set]", [].slice.call(arguments));return "https://static.tripcdn.com/packages/market/mkt-union-tracing/*/ResUnionOnline/remarketing/remarketing.js?v=20241223" }},
  [Symbol.toStringTag]: {value:"HTMLScriptElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLLinkElement.prototype, {
  relList: {get(){ v_console_log("  [*] HTMLLinkElement -> relList[get]", {});return {} }},
  rel: {get(){ v_console_log("  [*] HTMLLinkElement -> rel[get]", "stylesheet");return "stylesheet" },set(){ v_console_log("  [*] HTMLLinkElement -> rel[set]", [].slice.call(arguments));return "stylesheet" }},
  type: {set(){ v_console_log("  [*] HTMLLinkElement -> type[set]", [].slice.call(arguments));return "stylesheet" }},
  href: {get(){ v_console_log("  [*] HTMLLinkElement -> href[get]", "https://webresource.c-ctrip.com/ares2/nfes/pc-home/*/default/icon/pc_home.css");return "https://webresource.c-ctrip.com/ares2/nfes/pc-home/*/default/icon/pc_home.css" },set(){ v_console_log("  [*] HTMLLinkElement -> href[set]", [].slice.call(arguments));return "https://webresource.c-ctrip.com/ares2/nfes/pc-home/*/default/icon/pc_home.css" }},
  sheet: {get(){ v_console_log("  [*] HTMLLinkElement -> sheet[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"HTMLLinkElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLAnchorElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLAnchorElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLMetaElement.prototype, {
  content: {get(){ v_console_log("  [*] HTMLMetaElement -> content[get]", "23");return "23" },set(){ v_console_log("  [*] HTMLMetaElement -> content[set]", [].slice.call(arguments));return "23" }},
  [Symbol.toStringTag]: {value:"HTMLMetaElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCanvasElement.prototype, {
  getContext: {value: v_saf(function getContext(){v_console_log("  [*] HTMLCanvasElement -> getContext[func]", [].slice.call(arguments));if (arguments[0]=='2d'){var r = v_new(CanvasRenderingContext2D); return r}; if (arguments[0]=='webgl' || arguments[0]=='experimental-webgl'){var r = v_new(WebGLRenderingContext); r._canvas = this; return r}; return null})},
  width: {set(){ v_console_log("  [*] HTMLCanvasElement -> width[set]", [].slice.call(arguments)); }},
  height: {set(){ v_console_log("  [*] HTMLCanvasElement -> height[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"HTMLCanvasElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLIFrameElement.prototype, {
  src: {get(){ v_console_log("  [*] HTMLIFrameElement -> src[get]", "about:blank");return "about:blank" },set(){ v_console_log("  [*] HTMLIFrameElement -> src[set]", [].slice.call(arguments));return "about:blank" }},
  frameBorder: {set(){ v_console_log("  [*] HTMLIFrameElement -> frameBorder[set]", [].slice.call(arguments));return "about:blank" }},
  contentDocument: {get(){ v_console_log("  [*] HTMLIFrameElement -> contentDocument[get]", {});return {} }},
  contentWindow: {get(){ v_console_log("  [*] HTMLIFrameElement -> contentWindow[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"HTMLIFrameElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLImageElement.prototype, {
  src: {set(){ v_console_log("  [*] HTMLImageElement -> src[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"HTMLImageElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLStyleElement.prototype, {
  sheet: {get(){ v_console_log("  [*] HTMLStyleElement -> sheet[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"HTMLStyleElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Window.prototype, {
  TEMPORARY: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  PERSISTENT: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Window",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDocument.prototype, {
  [Symbol.toStringTag]: {value:"HTMLDocument",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLHeadElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLHeadElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLBodyElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLBodyElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Location.prototype, {
  [Symbol.toStringTag]: {value:"Location",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(WebGLRenderingContext.prototype, {
  DEPTH_BUFFER_BIT: {"value":256,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BUFFER_BIT: {"value":1024,"writable":false,"enumerable":true,"configurable":false},
  COLOR_BUFFER_BIT: {"value":16384,"writable":false,"enumerable":true,"configurable":false},
  POINTS: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  LINES: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  LINE_LOOP: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  LINE_STRIP: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLES: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLE_STRIP: {"value":5,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLE_FAN: {"value":6,"writable":false,"enumerable":true,"configurable":false},
  ZERO: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  ONE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  SRC_COLOR: {"value":768,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_SRC_COLOR: {"value":769,"writable":false,"enumerable":true,"configurable":false},
  SRC_ALPHA: {"value":770,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_SRC_ALPHA: {"value":771,"writable":false,"enumerable":true,"configurable":false},
  DST_ALPHA: {"value":772,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_DST_ALPHA: {"value":773,"writable":false,"enumerable":true,"configurable":false},
  DST_COLOR: {"value":774,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_DST_COLOR: {"value":775,"writable":false,"enumerable":true,"configurable":false},
  SRC_ALPHA_SATURATE: {"value":776,"writable":false,"enumerable":true,"configurable":false},
  FUNC_ADD: {"value":32774,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION_RGB: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION_ALPHA: {"value":34877,"writable":false,"enumerable":true,"configurable":false},
  FUNC_SUBTRACT: {"value":32778,"writable":false,"enumerable":true,"configurable":false},
  FUNC_REVERSE_SUBTRACT: {"value":32779,"writable":false,"enumerable":true,"configurable":false},
  BLEND_DST_RGB: {"value":32968,"writable":false,"enumerable":true,"configurable":false},
  BLEND_SRC_RGB: {"value":32969,"writable":false,"enumerable":true,"configurable":false},
  BLEND_DST_ALPHA: {"value":32970,"writable":false,"enumerable":true,"configurable":false},
  BLEND_SRC_ALPHA: {"value":32971,"writable":false,"enumerable":true,"configurable":false},
  CONSTANT_COLOR: {"value":32769,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_CONSTANT_COLOR: {"value":32770,"writable":false,"enumerable":true,"configurable":false},
  CONSTANT_ALPHA: {"value":32771,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_CONSTANT_ALPHA: {"value":32772,"writable":false,"enumerable":true,"configurable":false},
  BLEND_COLOR: {"value":32773,"writable":false,"enumerable":true,"configurable":false},
  ARRAY_BUFFER: {"value":34962,"writable":false,"enumerable":true,"configurable":false},
  ELEMENT_ARRAY_BUFFER: {"value":34963,"writable":false,"enumerable":true,"configurable":false},
  ARRAY_BUFFER_BINDING: {"value":34964,"writable":false,"enumerable":true,"configurable":false},
  ELEMENT_ARRAY_BUFFER_BINDING: {"value":34965,"writable":false,"enumerable":true,"configurable":false},
  STREAM_DRAW: {"value":35040,"writable":false,"enumerable":true,"configurable":false},
  STATIC_DRAW: {"value":35044,"writable":false,"enumerable":true,"configurable":false},
  DYNAMIC_DRAW: {"value":35048,"writable":false,"enumerable":true,"configurable":false},
  BUFFER_SIZE: {"value":34660,"writable":false,"enumerable":true,"configurable":false},
  BUFFER_USAGE: {"value":34661,"writable":false,"enumerable":true,"configurable":false},
  CURRENT_VERTEX_ATTRIB: {"value":34342,"writable":false,"enumerable":true,"configurable":false},
  FRONT: {"value":1028,"writable":false,"enumerable":true,"configurable":false},
  BACK: {"value":1029,"writable":false,"enumerable":true,"configurable":false},
  FRONT_AND_BACK: {"value":1032,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_2D: {"value":3553,"writable":false,"enumerable":true,"configurable":false},
  CULL_FACE: {"value":2884,"writable":false,"enumerable":true,"configurable":false},
  BLEND: {"value":3042,"writable":false,"enumerable":true,"configurable":false},
  DITHER: {"value":3024,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_TEST: {"value":2960,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_TEST: {"value":2929,"writable":false,"enumerable":true,"configurable":false},
  SCISSOR_TEST: {"value":3089,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_FILL: {"value":32823,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_ALPHA_TO_COVERAGE: {"value":32926,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE: {"value":32928,"writable":false,"enumerable":true,"configurable":false},
  NO_ERROR: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  INVALID_ENUM: {"value":1280,"writable":false,"enumerable":true,"configurable":false},
  INVALID_VALUE: {"value":1281,"writable":false,"enumerable":true,"configurable":false},
  INVALID_OPERATION: {"value":1282,"writable":false,"enumerable":true,"configurable":false},
  OUT_OF_MEMORY: {"value":1285,"writable":false,"enumerable":true,"configurable":false},
  CW: {"value":2304,"writable":false,"enumerable":true,"configurable":false},
  CCW: {"value":2305,"writable":false,"enumerable":true,"configurable":false},
  LINE_WIDTH: {"value":2849,"writable":false,"enumerable":true,"configurable":false},
  ALIASED_POINT_SIZE_RANGE: {"value":33901,"writable":false,"enumerable":true,"configurable":false},
  ALIASED_LINE_WIDTH_RANGE: {"value":33902,"writable":false,"enumerable":true,"configurable":false},
  CULL_FACE_MODE: {"value":2885,"writable":false,"enumerable":true,"configurable":false},
  FRONT_FACE: {"value":2886,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_RANGE: {"value":2928,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_WRITEMASK: {"value":2930,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_CLEAR_VALUE: {"value":2931,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_FUNC: {"value":2932,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_CLEAR_VALUE: {"value":2961,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_FUNC: {"value":2962,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_FAIL: {"value":2964,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_PASS_DEPTH_FAIL: {"value":2965,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_PASS_DEPTH_PASS: {"value":2966,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_REF: {"value":2967,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_VALUE_MASK: {"value":2963,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_WRITEMASK: {"value":2968,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_FUNC: {"value":34816,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_FAIL: {"value":34817,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_PASS_DEPTH_FAIL: {"value":34818,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_PASS_DEPTH_PASS: {"value":34819,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_REF: {"value":36003,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_VALUE_MASK: {"value":36004,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_WRITEMASK: {"value":36005,"writable":false,"enumerable":true,"configurable":false},
  VIEWPORT: {"value":2978,"writable":false,"enumerable":true,"configurable":false},
  SCISSOR_BOX: {"value":3088,"writable":false,"enumerable":true,"configurable":false},
  COLOR_CLEAR_VALUE: {"value":3106,"writable":false,"enumerable":true,"configurable":false},
  COLOR_WRITEMASK: {"value":3107,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_ALIGNMENT: {"value":3317,"writable":false,"enumerable":true,"configurable":false},
  PACK_ALIGNMENT: {"value":3333,"writable":false,"enumerable":true,"configurable":false},
  MAX_TEXTURE_SIZE: {"value":3379,"writable":false,"enumerable":true,"configurable":false},
  MAX_VIEWPORT_DIMS: {"value":3386,"writable":false,"enumerable":true,"configurable":false},
  SUBPIXEL_BITS: {"value":3408,"writable":false,"enumerable":true,"configurable":false},
  RED_BITS: {"value":3410,"writable":false,"enumerable":true,"configurable":false},
  GREEN_BITS: {"value":3411,"writable":false,"enumerable":true,"configurable":false},
  BLUE_BITS: {"value":3412,"writable":false,"enumerable":true,"configurable":false},
  ALPHA_BITS: {"value":3413,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_BITS: {"value":3414,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BITS: {"value":3415,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_UNITS: {"value":10752,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_FACTOR: {"value":32824,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_BINDING_2D: {"value":32873,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_BUFFERS: {"value":32936,"writable":false,"enumerable":true,"configurable":false},
  SAMPLES: {"value":32937,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE_VALUE: {"value":32938,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE_INVERT: {"value":32939,"writable":false,"enumerable":true,"configurable":false},
  COMPRESSED_TEXTURE_FORMATS: {"value":34467,"writable":false,"enumerable":true,"configurable":false},
  DONT_CARE: {"value":4352,"writable":false,"enumerable":true,"configurable":false},
  FASTEST: {"value":4353,"writable":false,"enumerable":true,"configurable":false},
  NICEST: {"value":4354,"writable":false,"enumerable":true,"configurable":false},
  GENERATE_MIPMAP_HINT: {"value":33170,"writable":false,"enumerable":true,"configurable":false},
  BYTE: {"value":5120,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_BYTE: {"value":5121,"writable":false,"enumerable":true,"configurable":false},
  SHORT: {"value":5122,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT: {"value":5123,"writable":false,"enumerable":true,"configurable":false},
  INT: {"value":5124,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_INT: {"value":5125,"writable":false,"enumerable":true,"configurable":false},
  FLOAT: {"value":5126,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_COMPONENT: {"value":6402,"writable":false,"enumerable":true,"configurable":false},
  ALPHA: {"value":6406,"writable":false,"enumerable":true,"configurable":false},
  RGB: {"value":6407,"writable":false,"enumerable":true,"configurable":false},
  RGBA: {"value":6408,"writable":false,"enumerable":true,"configurable":false},
  LUMINANCE: {"value":6409,"writable":false,"enumerable":true,"configurable":false},
  LUMINANCE_ALPHA: {"value":6410,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_4_4_4_4: {"value":32819,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_5_5_5_1: {"value":32820,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_5_6_5: {"value":33635,"writable":false,"enumerable":true,"configurable":false},
  FRAGMENT_SHADER: {"value":35632,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_SHADER: {"value":35633,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_ATTRIBS: {"value":34921,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_UNIFORM_VECTORS: {"value":36347,"writable":false,"enumerable":true,"configurable":false},
  MAX_VARYING_VECTORS: {"value":36348,"writable":false,"enumerable":true,"configurable":false},
  MAX_COMBINED_TEXTURE_IMAGE_UNITS: {"value":35661,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_TEXTURE_IMAGE_UNITS: {"value":35660,"writable":false,"enumerable":true,"configurable":false},
  MAX_TEXTURE_IMAGE_UNITS: {"value":34930,"writable":false,"enumerable":true,"configurable":false},
  MAX_FRAGMENT_UNIFORM_VECTORS: {"value":36349,"writable":false,"enumerable":true,"configurable":false},
  SHADER_TYPE: {"value":35663,"writable":false,"enumerable":true,"configurable":false},
  DELETE_STATUS: {"value":35712,"writable":false,"enumerable":true,"configurable":false},
  LINK_STATUS: {"value":35714,"writable":false,"enumerable":true,"configurable":false},
  VALIDATE_STATUS: {"value":35715,"writable":false,"enumerable":true,"configurable":false},
  ATTACHED_SHADERS: {"value":35717,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_UNIFORMS: {"value":35718,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_ATTRIBUTES: {"value":35721,"writable":false,"enumerable":true,"configurable":false},
  SHADING_LANGUAGE_VERSION: {"value":35724,"writable":false,"enumerable":true,"configurable":false},
  CURRENT_PROGRAM: {"value":35725,"writable":false,"enumerable":true,"configurable":false},
  NEVER: {"value":512,"writable":false,"enumerable":true,"configurable":false},
  LESS: {"value":513,"writable":false,"enumerable":true,"configurable":false},
  EQUAL: {"value":514,"writable":false,"enumerable":true,"configurable":false},
  LEQUAL: {"value":515,"writable":false,"enumerable":true,"configurable":false},
  GREATER: {"value":516,"writable":false,"enumerable":true,"configurable":false},
  NOTEQUAL: {"value":517,"writable":false,"enumerable":true,"configurable":false},
  GEQUAL: {"value":518,"writable":false,"enumerable":true,"configurable":false},
  ALWAYS: {"value":519,"writable":false,"enumerable":true,"configurable":false},
  KEEP: {"value":7680,"writable":false,"enumerable":true,"configurable":false},
  REPLACE: {"value":7681,"writable":false,"enumerable":true,"configurable":false},
  INCR: {"value":7682,"writable":false,"enumerable":true,"configurable":false},
  DECR: {"value":7683,"writable":false,"enumerable":true,"configurable":false},
  INVERT: {"value":5386,"writable":false,"enumerable":true,"configurable":false},
  INCR_WRAP: {"value":34055,"writable":false,"enumerable":true,"configurable":false},
  DECR_WRAP: {"value":34056,"writable":false,"enumerable":true,"configurable":false},
  VENDOR: {"value":7936,"writable":false,"enumerable":true,"configurable":false},
  RENDERER: {"value":7937,"writable":false,"enumerable":true,"configurable":false},
  VERSION: {"value":7938,"writable":false,"enumerable":true,"configurable":false},
  NEAREST: {"value":9728,"writable":false,"enumerable":true,"configurable":false},
  LINEAR: {"value":9729,"writable":false,"enumerable":true,"configurable":false},
  NEAREST_MIPMAP_NEAREST: {"value":9984,"writable":false,"enumerable":true,"configurable":false},
  LINEAR_MIPMAP_NEAREST: {"value":9985,"writable":false,"enumerable":true,"configurable":false},
  NEAREST_MIPMAP_LINEAR: {"value":9986,"writable":false,"enumerable":true,"configurable":false},
  LINEAR_MIPMAP_LINEAR: {"value":9987,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_MAG_FILTER: {"value":10240,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_MIN_FILTER: {"value":10241,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_WRAP_S: {"value":10242,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_WRAP_T: {"value":10243,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE: {"value":5890,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP: {"value":34067,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_BINDING_CUBE_MAP: {"value":34068,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_X: {"value":34069,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_X: {"value":34070,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_Y: {"value":34071,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_Y: {"value":34072,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_Z: {"value":34073,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_Z: {"value":34074,"writable":false,"enumerable":true,"configurable":false},
  MAX_CUBE_MAP_TEXTURE_SIZE: {"value":34076,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE0: {"value":33984,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE1: {"value":33985,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE2: {"value":33986,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE3: {"value":33987,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE4: {"value":33988,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE5: {"value":33989,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE6: {"value":33990,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE7: {"value":33991,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE8: {"value":33992,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE9: {"value":33993,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE10: {"value":33994,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE11: {"value":33995,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE12: {"value":33996,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE13: {"value":33997,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE14: {"value":33998,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE15: {"value":33999,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE16: {"value":34000,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE17: {"value":34001,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE18: {"value":34002,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE19: {"value":34003,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE20: {"value":34004,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE21: {"value":34005,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE22: {"value":34006,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE23: {"value":34007,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE24: {"value":34008,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE25: {"value":34009,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE26: {"value":34010,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE27: {"value":34011,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE28: {"value":34012,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE29: {"value":34013,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE30: {"value":34014,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE31: {"value":34015,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_TEXTURE: {"value":34016,"writable":false,"enumerable":true,"configurable":false},
  REPEAT: {"value":10497,"writable":false,"enumerable":true,"configurable":false},
  CLAMP_TO_EDGE: {"value":33071,"writable":false,"enumerable":true,"configurable":false},
  MIRRORED_REPEAT: {"value":33648,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC2: {"value":35664,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC3: {"value":35665,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC4: {"value":35666,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC2: {"value":35667,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC3: {"value":35668,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC4: {"value":35669,"writable":false,"enumerable":true,"configurable":false},
  BOOL: {"value":35670,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC2: {"value":35671,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC3: {"value":35672,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC4: {"value":35673,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT2: {"value":35674,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT3: {"value":35675,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT4: {"value":35676,"writable":false,"enumerable":true,"configurable":false},
  SAMPLER_2D: {"value":35678,"writable":false,"enumerable":true,"configurable":false},
  SAMPLER_CUBE: {"value":35680,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_ENABLED: {"value":34338,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_SIZE: {"value":34339,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_STRIDE: {"value":34340,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_TYPE: {"value":34341,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_NORMALIZED: {"value":34922,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_POINTER: {"value":34373,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: {"value":34975,"writable":false,"enumerable":true,"configurable":false},
  IMPLEMENTATION_COLOR_READ_TYPE: {"value":35738,"writable":false,"enumerable":true,"configurable":false},
  IMPLEMENTATION_COLOR_READ_FORMAT: {"value":35739,"writable":false,"enumerable":true,"configurable":false},
  COMPILE_STATUS: {"value":35713,"writable":false,"enumerable":true,"configurable":false},
  LOW_FLOAT: {"value":36336,"writable":false,"enumerable":true,"configurable":false},
  MEDIUM_FLOAT: {"value":36337,"writable":false,"enumerable":true,"configurable":false},
  HIGH_FLOAT: {"value":36338,"writable":false,"enumerable":true,"configurable":false},
  LOW_INT: {"value":36339,"writable":false,"enumerable":true,"configurable":false},
  MEDIUM_INT: {"value":36340,"writable":false,"enumerable":true,"configurable":false},
  HIGH_INT: {"value":36341,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER: {"value":36160,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER: {"value":36161,"writable":false,"enumerable":true,"configurable":false},
  RGBA4: {"value":32854,"writable":false,"enumerable":true,"configurable":false},
  RGB5_A1: {"value":32855,"writable":false,"enumerable":true,"configurable":false},
  RGB565: {"value":36194,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_COMPONENT16: {"value":33189,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_INDEX8: {"value":36168,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_STENCIL: {"value":34041,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_WIDTH: {"value":36162,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_HEIGHT: {"value":36163,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_INTERNAL_FORMAT: {"value":36164,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_RED_SIZE: {"value":36176,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_GREEN_SIZE: {"value":36177,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_BLUE_SIZE: {"value":36178,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_ALPHA_SIZE: {"value":36179,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_DEPTH_SIZE: {"value":36180,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_STENCIL_SIZE: {"value":36181,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: {"value":36048,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: {"value":36049,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: {"value":36050,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: {"value":36051,"writable":false,"enumerable":true,"configurable":false},
  COLOR_ATTACHMENT0: {"value":36064,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_ATTACHMENT: {"value":36096,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_ATTACHMENT: {"value":36128,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_STENCIL_ATTACHMENT: {"value":33306,"writable":false,"enumerable":true,"configurable":false},
  NONE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_COMPLETE: {"value":36053,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT: {"value":36054,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: {"value":36055,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS: {"value":36057,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_UNSUPPORTED: {"value":36061,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_BINDING: {"value":36006,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_BINDING: {"value":36007,"writable":false,"enumerable":true,"configurable":false},
  MAX_RENDERBUFFER_SIZE: {"value":34024,"writable":false,"enumerable":true,"configurable":false},
  INVALID_FRAMEBUFFER_OPERATION: {"value":1286,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_FLIP_Y_WEBGL: {"value":37440,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_PREMULTIPLY_ALPHA_WEBGL: {"value":37441,"writable":false,"enumerable":true,"configurable":false},
  CONTEXT_LOST_WEBGL: {"value":37442,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_COLORSPACE_CONVERSION_WEBGL: {"value":37443,"writable":false,"enumerable":true,"configurable":false},
  BROWSER_DEFAULT_WEBGL: {"value":37444,"writable":false,"enumerable":true,"configurable":false},
  RGB8: {"value":32849,"writable":false,"enumerable":true,"configurable":false},
  RGBA8: {"value":32856,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"WebGLRenderingContext",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceElementTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceElementTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceEventTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceEventTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceLongTaskTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceLongTaskTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceMark.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceMark",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceMeasure.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceMeasure",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceNavigation.prototype, {
  TYPE_NAVIGATE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  TYPE_RELOAD: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  TYPE_BACK_FORWARD: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  TYPE_RESERVED: {"value":255,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"PerformanceNavigation",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformancePaintTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformancePaintTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceServerTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceServerTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLMediaElement.prototype, {
  NETWORK_EMPTY: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_IDLE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_LOADING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_NO_SOURCE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  HAVE_NOTHING: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  HAVE_METADATA: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  HAVE_CURRENT_DATA: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  HAVE_FUTURE_DATA: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  HAVE_ENOUGH_DATA: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"HTMLMediaElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLUnknownElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLUnknownElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Touch.prototype, {
  [Symbol.toStringTag]: {value:"Touch",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(UIEvent.prototype, {
  [Symbol.toStringTag]: {value:"UIEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(TouchEvent.prototype, {
  [Symbol.toStringTag]: {value:"TouchEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MouseEvent.prototype, {
  [Symbol.toStringTag]: {value:"MouseEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PointerEvent.prototype, {
  [Symbol.toStringTag]: {value:"PointerEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDivElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLDivElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLFormElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLFormElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLSpanElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLSpanElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLHtmlElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLHtmlElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLTitleElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLTitleElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLButtonElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLButtonElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLUListElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLUListElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLLIElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLLIElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLLabelElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLLabelElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLParagraphElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLParagraphElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLHeadingElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLHeadingElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDListElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLDListElement",writable:false,enumerable:false,configurable:true},
})
if (typeof __dirname != 'undefined'){ __dirname = undefined }
if (typeof __filename != 'undefined'){ __filename = undefined }
if (typeof require != 'undefined'){ require = undefined }
if (typeof exports != 'undefined'){ exports = undefined }
if (typeof module != 'undefined'){ module = undefined }
if (typeof Buffer != 'undefined'){ Buffer = undefined }
var __globalThis__ = typeof global != 'undefined' ? global : this
var window = new Proxy(v_new(Window), {
  get(a,b){ if(b=='global'){return}return a[b] || __globalThis__[b] },
  set(a,b,c){
    if (b == 'onclick' && typeof c == 'function') { window.addEventListener('click', c) }
    if (b == 'onmousedown' && typeof c == 'function') { window.addEventListener('mousedown', c) }
    if (b == 'onmouseup' && typeof c == 'function') { window.addEventListener('mouseup', c) }
    __globalThis__[b] = a[b] = c
    return true
  },
})
var v_hasOwnProperty = Object.prototype.hasOwnProperty
Object.prototype.hasOwnProperty = v_saf(function hasOwnProperty(){
  if (this == window){ return v_hasOwnProperty.apply(__globalThis__, arguments) }
  return v_hasOwnProperty.apply(this, arguments)
})
Object.defineProperties(__globalThis__, {[Symbol.toStringTag]:{value:'Window'}})
Object.defineProperties(__globalThis__, Object.getOwnPropertyDescriptors(window))
Object.setPrototypeOf(__globalThis__, Object.getPrototypeOf(window))
window.parent = window
window.top = window
window.frames = window
window.self = window
window.document = v_new(HTMLDocument)
window.location = v_new(Location)
window.customElements = v_new(CustomElementRegistry)
window.history = v_new(History)
window.navigator = v_new(Navigator)
window.screen = v_new(Screen)
window.clientInformation = navigator
window.trustedTypes = v_new(TrustedTypePolicyFactory)
window.performance = v_new(Performance)
window.crypto = v_new(Crypto)
window.sessionStorage = v_new(Storage)
window.localStorage = v_new(Storage)
window._objAllSearchKeyword = v_new(HTMLInputElement)
window.inputNode = _objAllSearchKeyword

var win = {
  window: window,
  frames: window,
  parent: window,
  self: window,
  top: window,
}
function v_repair_this(){
  win = {
    window: __globalThis__,
    frames: __globalThis__,
    parent: __globalThis__,
    self: __globalThis__,
    top: __globalThis__,
  }
}
Object.defineProperties(window, {
  window: {get:function(){return win.window},set:function(e){return win.window = e}},
  frames: {get:function(){return win.frames},set:function(e){return win.frames = e}},
  parent: {get:function(){return win.parent},set:function(e){return win.parent = e}},
  self:   {get:function(){return win.self},  set:function(e){return win.self = e}},
  top:    {get:function(){return win.top},   set:function(e){return win.top = e}},
})

function _createElement(name){
  var htmlmap = {"HTMLElement":["abbr","address","article","aside","b","bdi","bdo","cite","code","dd","dfn","dt","em","figcaption","figure","footer","header","hgroup","i","kbd","main","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],"HTMLInputElement":["input"],"HTMLScriptElement":["script"],"HTMLLinkElement":["link"],"HTMLAnchorElement":["a"],"HTMLMetaElement":["meta"],"HTMLCanvasElement":["canvas"],"HTMLIFrameElement":["iframe"],"HTMLImageElement":["img"],"HTMLStyleElement":["style"],"HTMLHeadElement":["head"],"HTMLBodyElement":["body"],"HTMLMediaElement":[],"HTMLUnknownElement":[]}
  var ret, htmlmapkeys = Object.keys(htmlmap)
  name = name.toLocaleLowerCase()
  for (var i = 0; i < htmlmapkeys.length; i++) {
    if (htmlmap[htmlmapkeys[i]].indexOf(name) != -1){
      ret = v_new(window[htmlmapkeys[i]])
      break
    }
  }
  if (!ret){ ret = v_new(HTMLUnknownElement) }
  if (typeof CSSStyleDeclaration != 'undefined') { ret.v_style = v_new(CSSStyleDeclaration) }
  ret.v_tagName = name.toUpperCase()
  return ret
}
function init_cookie(cookie){
  var cache = (cookie || "").trim();
  if (!cache){
    cache = ''
  }else if (cache.charAt(cache.length-1) != ';'){
    cache += '; '
  }else{
    cache += ' '
  }
  Object.defineProperty(Document.prototype, 'cookie', {
    get: function() {
      var r = cache.slice(0,cache.length-2);
      v_console_log('  [*] document -> cookie[get]', r)
      return r
    },
    set: function(c) {
      v_console_log('  [*] document -> cookie[set]', c)
      var ncookie = c.split(";")[0].split("=");
      if (!ncookie.slice(1).join('')){
        return c
      }
      var key = ncookie[0].trim()
      var val = ncookie.slice(1).join('').trim()
      var newc = key+'='+val
      var flag = false;
      var temp = cache.split("; ").map(function(a) {
        if (a.split("=")[0] === key) {
          flag = true;
          return newc;
        }
        return a;
      })
      cache = temp.join("; ");
      if (!flag) {
        cache += newc + "; ";
      }
      return cache;
    }
  });
}
function v_hook_href(obj, name, initurl){
  var r = Object.defineProperty(obj, 'href', {
    get: function(){
      if (!(this.protocol) && !(this.hostname)){
        r = ''
      }else{
        r = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "") + this.pathname + this.search + this.hash;
      }
      v_console_log(`  [*] ${name||obj.constructor.name} -> href[get]:`, JSON.stringify(r))
      return r
    },
    set: function(href){
      href = href.trim()
      v_console_log(`  [*] ${name||obj.constructor.name} -> href[set]:`, JSON.stringify(href))
      if (href.startsWith("http://") || href.startsWith("https://")){/*ok*/}
      else if(href.startsWith("//")){ href = (this.protocol?this.protocol:'http:') + href}
      else{ href = this.protocol+"//"+this.hostname + (this.port?":"+this.port:"") + '/' + ((href[0]=='/')?href.slice(1):href) }
      var a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
      this.protocol = a[1] ? a[1] : "";
      this.hostname = a[2] ? a[2] : "";
      this.port     = a[3] ? a[3] : "";
      this.pathname = a[4] ? a[4] : "";
      this.search   = a[5] ? a[5] : "";
      this.hash     = a[6] ? a[6] : "";
      this.host     = this.hostname + (this.port?":"+this.port:"") ;
      this.origin   = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "");
    }
  });
  if (initurl && initurl.trim()){ var temp=v_new_toggle; v_new_toggle = true; r.href = initurl; v_new_toggle = temp; }
  return r
}
function v_hook_storage(){
  Storage.prototype.clear      = v_saf(function(){          v_console_log(`  [*] Storage -> clear[func]:`); var self=this;Object.keys(self).forEach(function (key) { delete self[key]; }); }, 'clear')
  Storage.prototype.getItem    = v_saf(function(key){       v_console_log(`  [*] Storage -> getItem[func]:`, key); var r = (this.hasOwnProperty(key)?String(this[key]):null); return r}, 'getItem')
  Storage.prototype.setItem    = v_saf(function(key, val){  v_console_log(`  [*] Storage -> setItem[func]:`, key, val); this[key] = (val === undefined)?null:String(val) }, 'setItem')
  Storage.prototype.key        = v_saf(function(key){       v_console_log(`  [*] Storage -> key[func]:`, key); return Object.keys(this)[key||0];} , 'key')
  Storage.prototype.removeItem = v_saf(function(key){       v_console_log(`  [*] Storage -> removeItem[func]:`, key); delete this[key];}, 'removeItem')
  Object.defineProperty(Storage.prototype, 'length', {get: function(){
    if(this===Storage.prototype){ throw TypeError('Illegal invocation') }return Object.keys(this).length
  }})
  window.sessionStorage = new Proxy(sessionStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
  window.localStorage = new Proxy(localStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
}
function v_init_document(){
  Document.prototype.getElementById = v_saf(function getElementById(name){ var r = v_getele(name, 'getElementById'); v_console_log('  [*] Document -> getElementById', name, r); return r })
  Document.prototype.querySelector = v_saf(function querySelector(name){ var r = v_getele(name, 'querySelector'); v_console_log('  [*] Document -> querySelector', name, r); return r })
  Document.prototype.getElementsByClassName = v_saf(function getElementsByClassName(name){ var r = v_geteles(name, 'getElementsByClassName'); v_console_log('  [*] Document -> getElementsByClassName', name, r); return r })
  Document.prototype.getElementsByName = v_saf(function getElementsByName(name){ var r = v_geteles(name, 'getElementsByName'); v_console_log('  [*] Document -> getElementsByName', name, r); return r })
  Document.prototype.getElementsByTagName = v_saf(function getElementsByTagName(name){ var r = v_geteles(name, 'getElementsByTagName'); v_console_log('  [*] Document -> getElementsByTagName', name, r); return r })
  Document.prototype.getElementsByTagNameNS = v_saf(function getElementsByTagNameNS(name){ var r = v_geteles(name, 'getElementsByTagNameNS'); v_console_log('  [*] Document -> getElementsByTagNameNS', name, r); return r })
  Document.prototype.querySelectorAll = v_saf(function querySelectorAll(name){ var r = v_geteles(name, 'querySelectorAll'); v_console_log('  [*] Document -> querySelectorAll', name, r); return r })
  var v_head = v_new(HTMLHeadElement)
  var v_body = v_new(HTMLBodyElement)
  Object.defineProperties(Document.prototype, {
    head: {get(){ v_console_log("  [*] Document -> head[get]", v_head);return v_head }},
    body: {get(){ v_console_log("  [*] Document -> body[get]", v_body);return v_body }},
  })
}
function v_init_canvas(){
  HTMLCanvasElement.prototype.getContext = function(){if (arguments[0]=='2d'){var r = v_new(CanvasRenderingContext2D); return r}; if (arguments[0]=='webgl' || arguments[0]=='experimental-webgl'){var r = v_new(WebGLRenderingContext); r._canvas = this; return r}; return null}
  HTMLCanvasElement.prototype.toDataURL = function(){return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC"}
}
var v_start_stamp = +new Date
var v_fake_stamp = +new Date
function v_init_event_target(){
  v_events = {}
  function add_event(_this, x){
    if (!v_events[x[0]]){
      v_events[x[0]] = []
    }
    v_events[x[0]].push([_this, x[1].bind(_this)])
  }
  function _mk_mouse_event(type, canBubble, cancelable, view, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget){
    if (type == 'click'){
      var m = new v_saf(function PointerEvent(){})
      m.pointerType = "mouse"
    }else{
      var m = new v_saf(function MouseEvent(){})
    }
    m.isTrusted = true
    m.type = type
    m.canBubble = canBubble
    m.cancelable = cancelable
    m.view = view
    m.detail = detail
    m.screenX = screenX; m.movementX = screenX
    m.screenY = screenY; m.movementY = screenY
    m.clientX = clientX; m.layerX = clientX; m.offsetX = clientX; m.pageX = clientX; m.x = clientX;
    m.clientY = clientY; m.layerY = clientY; m.offsetY = clientY; m.pageY = clientY; m.y = clientY;
    m.ctrlKey = ctrlKey
    m.altKey = altKey
    m.shiftKey = shiftKey
    m.metaKey = metaKey
    m.button = button
    m.relatedTarget = relatedTarget
    return m
  }
  function make_mouse(type, x, y){
    return _mk_mouse_event(type, true, true, window, 0, 0, 0, x, y, false, false, false, false, 0, null)
  }
  function mouse_click(x, y){
    for (var i = 0; i < (v_events['click'] || []).length; i++) { v_events['click'][i][1](make_mouse('click', x, y)) }
    for (var i = 0; i < (v_events['mousedown'] || []).length; i++) { v_events['mousedown'][i][1](make_mouse('mousedown', x, y)) }
    for (var i = 0; i < (v_events['mouseup'] || []).length; i++) { v_events['mouseup'][i][1](make_mouse('mouseup', x, y)) }
  }
  var offr = Math.random()
  function make_touch(_this, type, x, y, timeStamp){
    var offx = Math.random()
    var offy = Math.random()
    var t = v_new(new v_saf(function Touch(){}))
    t = clientX = offx + x
    t = clientY = offy + y
    t = force = 1
    t = identifier = 0
    t = pageX = offx + x
    t = pageY = offy + y
    t = radiusX = 28 + offr
    t = radiusY = 28 + offr
    t = rotationAngle = 0
    t = screenX = 0
    t = screenY = 0
    var e = v_new(new v_saf(function TouchEvent(){}))
    e.isTrusted = true
    e.altKey = false
    e.bubbles = true
    e.cancelBubble = false
    e.cancelable = false
    e.changedTouches = e.targetTouches = e.touches = [t]
    e.composed = true
    e.ctrlKey = false
    e.currentTarget = null
    e.defaultPrevented = false
    e.detail = 0
    e.eventPhase = 0
    e.metaKey = false
    e.path = _this == window ? [window] : [_this, window]
    e.returnValue = true
    e.shiftKey = false
    e.sourceCapabilities = new v_saf(function InputDeviceCapabilities(){this.firesTouchEvents = true})
    e.srcElement = _this
    e.target = _this
    e.type = type
    e.timeStamp = timeStamp == undefined ? (new Date - v_start_stamp) : ((v_fake_stamp += Math.random()*20) - v_start_stamp)
    e.view = window
    e.which = 0
    return e
  }
  function make_trace(x1, y1, x2, y2){
    // 贝塞尔曲线
    function step_len(x1, y1, x2, y2){
      var ln = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
      return (ln / 10) ^ 0
    }
    var slen = step_len(x1, y1, x2, y2)
    if (slen < 3){
      return []
    }
    function factorial(x){
      for(var y = 1; x > 1;  x--) {
        y *= x
      }
      return y;
    }
    var lp = Math.random()
    var rp = Math.random()
    var xx1 = (x1 + (x2 - x1) / 12 * (4-lp*4)) ^ 0
    var yy1 = (y1 + (y2 - y1) / 12 * (8+lp*4)) ^ 0
    var xx2 = (x1 + (x2 - x1) / 12 * (8+rp*4)) ^ 0
    var yy2 = (y1 + (y2 - y1) / 12 * (4-rp*4)) ^ 0
    var points = [[x1, y1], [xx1, yy1], [xx2, yy2], [x2, y2]]
    var N = points.length
    var n = N - 1
    var traces = []
    var step = slen
    for (var T = 0; T < step+1; T++) {
      var t = T*(1/step)
      var x = 0
      var y = 0
      for (var i = 0; i < N; i++) {
        var B = factorial(n)*t**i*(1-t)**(n-i)/(factorial(i)*factorial(n-i))
        x += points[i][0]*B
        y += points[i][1]*B
      }
      traces.push([x^0, y^0])
    }
    return traces
  }
  function touch(x1, y1, x2, y2){
    if (x2 == undefined && y2 == undefined){
      x2 = x1
      y2 = y1
    }
    var traces = make_trace(x1, y1, x2, y2)
    console.log('traces:', traces)
    for (var i = 0; i < (v_events['touchstart'] || []).length; i++) { v_events['touchstart'][i][1](make_touch(v_events['touchstart'][i][0], 'touchstart', x1, y1)) }
    for (var j = 0; j < traces.length; j++) {
      var x = traces[j][0]
      var y = traces[j][0]
      for (var i = 0; i < (v_events['touchmove'] || []).length; i++) { v_events['touchmove'][i][1](make_touch(v_events['touchmove'][i][0], 'touchmove', x, y)) }
    }
    for (var i = 0; i < (v_events['touchend'] || []).length; i++) { v_events['touchend'][i][1](make_touch(v_events['touchend'][i][0], 'touchend', x2, y2)) }
  }
  function mouse_move(x1, y1, x2, y2){
    if (x2 == undefined && y2 == undefined){
      x2 = x1
      y2 = y1
    }
    var traces = make_trace(x1, y1, x2, y2)
    console.log('traces:', traces)
    for (var j = 0; j < traces.length; j++) {
      var x = traces[j][0]
      var y = traces[j][0]
      for (var i = 0; i < (v_events['mousemove'] || []).length; i++) { v_events['mousemove'][i][1](make_touch(v_events['mousemove'][i][0], 'mousemove', x, y)) }
    }
  }
  window.make_mouse = make_mouse
  window.mouse_click = mouse_click
  window.mouse_move = mouse_move
  window.touch = touch
  EventTarget.prototype.addEventListener = function(){v_console_log('  [*] EventTarget -> addEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
  EventTarget.prototype.dispatchEvent = function(){v_console_log('  [*] EventTarget -> dispatchEvent[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
  EventTarget.prototype.removeEventListener = function(){v_console_log('  [*] EventTarget -> removeEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
}
function v_init_Element_prototype(){
  Element.prototype.getAnimations          = Element.prototype.getAnimations          || v_saf(function getAnimations(){v_console_log("  [*] Element -> getAnimations[func]", [].slice.call(arguments));})
  Element.prototype.getAttribute           = Element.prototype.getAttribute           || v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNS         = Element.prototype.getAttributeNS         || v_saf(function getAttributeNS(){v_console_log("  [*] Element -> getAttributeNS[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNames      = Element.prototype.getAttributeNames      || v_saf(function getAttributeNames(){v_console_log("  [*] Element -> getAttributeNames[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNode       = Element.prototype.getAttributeNode       || v_saf(function getAttributeNode(){v_console_log("  [*] Element -> getAttributeNode[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNodeNS     = Element.prototype.getAttributeNodeNS     || v_saf(function getAttributeNodeNS(){v_console_log("  [*] Element -> getAttributeNodeNS[func]", [].slice.call(arguments));})
  Element.prototype.getBoundingClientRect  = Element.prototype.getBoundingClientRect  || v_saf(function getBoundingClientRect(){v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));})
  Element.prototype.getClientRects         = Element.prototype.getClientRects         || v_saf(function getClientRects(){v_console_log("  [*] Element -> getClientRects[func]", [].slice.call(arguments));})
  Element.prototype.getElementsByClassName = Element.prototype.getElementsByClassName || v_saf(function getElementsByClassName(){v_console_log("  [*] Element -> getElementsByClassName[func]", [].slice.call(arguments));})
  Element.prototype.getElementsByTagName   = Element.prototype.getElementsByTagName   || v_saf(function getElementsByTagName(){v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments));})
  Element.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS || v_saf(function getElementsByTagNameNS(){v_console_log("  [*] Element -> getElementsByTagNameNS[func]", [].slice.call(arguments));})
  Element.prototype.getInnerHTML           = Element.prototype.getInnerHTML           || v_saf(function getInnerHTML(){v_console_log("  [*] Element -> getInnerHTML[func]", [].slice.call(arguments));})
  Element.prototype.hasAttribute           = Element.prototype.hasAttribute           || v_saf(function hasAttribute(){v_console_log("  [*] Element -> hasAttribute[func]", [].slice.call(arguments));})
  Element.prototype.hasAttributeNS         = Element.prototype.hasAttributeNS         || v_saf(function hasAttributeNS(){v_console_log("  [*] Element -> hasAttributeNS[func]", [].slice.call(arguments));})
  Element.prototype.hasAttributes          = Element.prototype.hasAttributes          || v_saf(function hasAttributes(){v_console_log("  [*] Element -> hasAttributes[func]", [].slice.call(arguments));})
  Element.prototype.hasPointerCapture      = Element.prototype.hasPointerCapture      || v_saf(function hasPointerCapture(){v_console_log("  [*] Element -> hasPointerCapture[func]", [].slice.call(arguments));})
  Element.prototype.webkitMatchesSelector  = Element.prototype.webkitMatchesSelector  || v_saf(function webkitMatchesSelector(){v_console_log("  [*] Element -> webkitMatchesSelector[func]", [].slice.call(arguments));})
}
function v_init_DOMTokenList_prototype(){
  DOMTokenList.prototype.add = DOMTokenList.prototype.add || v_saf(function add(){v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.contains = DOMTokenList.prototype.contains || v_saf(function contains(){v_console_log("  [*] DOMTokenList -> contains[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.entries = DOMTokenList.prototype.entries || v_saf(function entries(){v_console_log("  [*] DOMTokenList -> entries[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.forEach = DOMTokenList.prototype.forEach || v_saf(function forEach(){v_console_log("  [*] DOMTokenList -> forEach[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.item = DOMTokenList.prototype.item || v_saf(function item(){v_console_log("  [*] DOMTokenList -> item[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.keys = DOMTokenList.prototype.keys || v_saf(function keys(){v_console_log("  [*] DOMTokenList -> keys[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.length = DOMTokenList.prototype.length || v_saf(function length(){v_console_log("  [*] DOMTokenList -> length[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.remove = DOMTokenList.prototype.remove || v_saf(function remove(){v_console_log("  [*] DOMTokenList -> remove[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.replace = DOMTokenList.prototype.replace || v_saf(function replace(){v_console_log("  [*] DOMTokenList -> replace[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.supports = DOMTokenList.prototype.supports || v_saf(function supports(){v_console_log("  [*] DOMTokenList -> supports[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.toggle = DOMTokenList.prototype.toggle || v_saf(function toggle(){v_console_log("  [*] DOMTokenList -> toggle[func]", [].slice.call(arguments));})
}
function v_init_CSSStyleDeclaration_prototype(){
  CSSStyleDeclaration.prototype["zoom"] = ''
  CSSStyleDeclaration.prototype["resize"] = ''
  CSSStyleDeclaration.prototype["text-rendering"] = ''
  CSSStyleDeclaration.prototype["text-align-last"] = ''
}
function v_init_PointerEvent_prototype(){
  PointerEvent.prototype.getCoalescedEvents = v_saf(function getCoalescedEvents(){v_console_log("  [*] PointerEvent -> getCoalescedEvents[func]", [].slice.call(arguments));})
  PointerEvent.prototype.getPredictedEvents = v_saf(function getPredictedEvents(){v_console_log("  [*] PointerEvent -> getPredictedEvents[func]", [].slice.call(arguments));})
}
function v_init_PerformanceTiming_prototype(){
  try{
    Object.defineProperties(PerformanceTiming.prototype, {
      connectEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function connectEnd(){v_console_log("  [*] PerformanceTiming -> connectEnd[get]", [].slice.call(arguments));})},
      connectStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function connectStart(){v_console_log("  [*] PerformanceTiming -> connectStart[get]", [].slice.call(arguments));})},
      domComplete: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domComplete(){v_console_log("  [*] PerformanceTiming -> domComplete[get]", [].slice.call(arguments));})},
      domContentLoadedEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventEnd(){v_console_log("  [*] PerformanceTiming -> domContentLoadedEventEnd[get]", [].slice.call(arguments));})},
      domContentLoadedEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventStart(){v_console_log("  [*] PerformanceTiming -> domContentLoadedEventStart[get]", [].slice.call(arguments));})},
      domInteractive: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domInteractive(){v_console_log("  [*] PerformanceTiming -> domInteractive[get]", [].slice.call(arguments));})},
      domLoading: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domLoading(){v_console_log("  [*] PerformanceTiming -> domLoading[get]", [].slice.call(arguments));})},
      domainLookupEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupEnd(){v_console_log("  [*] PerformanceTiming -> domainLookupEnd[get]", [].slice.call(arguments));})},
      domainLookupStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupStart(){v_console_log("  [*] PerformanceTiming -> domainLookupStart[get]", [].slice.call(arguments));})},
      fetchStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function fetchStart(){v_console_log("  [*] PerformanceTiming -> fetchStart[get]", [].slice.call(arguments));})},
      loadEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventEnd(){v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", [].slice.call(arguments));})},
      loadEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventStart(){v_console_log("  [*] PerformanceTiming -> loadEventStart[get]", [].slice.call(arguments));})},
      navigationStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function navigationStart(){v_console_log("  [*] PerformanceTiming -> navigationStart[get]", [].slice.call(arguments));})},
      redirectEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectEnd(){v_console_log("  [*] PerformanceTiming -> redirectEnd[get]", [].slice.call(arguments));})},
      redirectStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectStart(){v_console_log("  [*] PerformanceTiming -> redirectStart[get]", [].slice.call(arguments));})},
      requestStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function requestStart(){v_console_log("  [*] PerformanceTiming -> requestStart[get]", [].slice.call(arguments));})},
      responseEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function responseEnd(){v_console_log("  [*] PerformanceTiming -> responseEnd[get]", [].slice.call(arguments));})},
      responseStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function responseStart(){v_console_log("  [*] PerformanceTiming -> responseStart[get]", [].slice.call(arguments));})},
      secureConnectionStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function secureConnectionStart(){v_console_log("  [*] PerformanceTiming -> secureConnectionStart[get]", [].slice.call(arguments));})},
      unloadEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventEnd(){v_console_log("  [*] PerformanceTiming -> unloadEventEnd[get]", [].slice.call(arguments));})},
      unloadEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventStart(){v_console_log("  [*] PerformanceTiming -> unloadEventStart[get]", [].slice.call(arguments));})},
    })
  }catch(e){}
}
function mk_atob_btoa(r){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);return{atob:function(r){var a,e,o,h,c,i,n;for(i=r.length,c=0,n="";c<i;){do{a=t[255&r.charCodeAt(c++)]}while(c<i&&-1==a);if(-1==a)break;do{e=t[255&r.charCodeAt(c++)]}while(c<i&&-1==e);if(-1==e)break;n+=String.fromCharCode(a<<2|(48&e)>>4);do{if(61==(o=255&r.charCodeAt(c++)))return n;o=t[o]}while(c<i&&-1==o);if(-1==o)break;n+=String.fromCharCode((15&e)<<4|(60&o)>>2);do{if(61==(h=255&r.charCodeAt(c++)))return n;h=t[h]}while(c<i&&-1==h);if(-1==h)break;n+=String.fromCharCode((3&o)<<6|h)}return n},btoa:function(r){var t,e,o,h,c,i;for(o=r.length,e=0,t="";e<o;){if(h=255&r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4),t+="==";break}if(c=r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2),t+="=";break}i=r.charCodeAt(e++),t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2|(192&i)>>6),t+=a.charAt(63&i)}return t}}}
var atob_btoa = mk_atob_btoa()
window.btoa = window.btoa || v_saf(atob_btoa.btoa, 'btoa')
window.atob = window.atob || v_saf(atob_btoa.atob, 'atob')

init_cookie("UBT_VID=1734682944700.eb3fIUrCxARg; GUID=09031048112717160856; _RF1=112.24.220.26; _RSG=pJKdYae02O6XvMSCpTQEQA; _RDG=280942b75cd6582ed636f2896bd596a046; _RGUID=66020289-229d-44f3-a68e-69dccc716e61; _bfa=1.1734682944700.eb3fIUrCxARg.1.1734924750767.1734925783107.5.4.10320673302; FlightIntl=Search=[%22CZX|%E5%B8%B8%E5%B7%9E(CZX)|213|CZX|480%22%2C%22CAN|%E5%B9%BF%E5%B7%9E(CAN)|32|CAN|480%22%2C%222024-12-25%22]")
v_hook_href(window.location, 'location', "https://flights.ctrip.com/online/list/oneway-czx-can?depdate=2024-12-25&cabin=y_s_c_f&adult=1&child=0&infant=0")
Location.prototype.toString = v_saf(function toString(){ return "https://flights.ctrip.com/online/list/oneway-czx-can?depdate=2024-12-25&cabin=y_s_c_f&adult=1&child=0&infant=0" })
window.alert = v_saf(function alert(){})
v_hook_storage()
v_init_document()
v_init_canvas()
v_init_event_target()
v_init_Element_prototype()
v_init_DOMTokenList_prototype()
v_init_CSSStyleDeclaration_prototype()
v_init_PointerEvent_prototype()
v_init_PerformanceTiming_prototype()
window.innerWidth = 1707
window.innerHeight = 898
window.outerHeight = 1019
window.outerWidth = 1707
window.isSecureContext = true
window.origin = location.origin
function v_getele(name, func){
  if(name == "_allSearchResult" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "_allSearchKeyword" && func == "getElementById"){ return v_new(HTMLInputElement) }
  if(name == "search_button_global" && func == "getElementById"){ return v_new(HTMLAnchorElement) }
  if(name == "__MFE_leftSideNavLayer_DATA__" && func == "getElementById"){ return v_new(HTMLScriptElement) }
  if(name == "leftSideNavLayer" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "__MFE_topLayer_DATA__" && func == "getElementById"){ return v_new(HTMLScriptElement) }
  if(name == "topLayer" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "__MFE_footerLayer_DATA__" && func == "getElementById"){ return v_new(HTMLScriptElement) }
  if(name == "footerLayer" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "cloginsdk" && func == "getElementById"){ return v_new(HTMLScriptElement) }
  if(name == "head" && func == "querySelector"){ return v_new(HTMLHeadElement) }
  if(name == "__NEXT_DATA__" && func == "getElementById"){ return v_new(HTMLScriptElement) }
  if(name == "__next" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "hp_container" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "meta[name=next-head-count]" && func == "querySelector"){ return v_new(HTMLMetaElement) }
  if(name == "[trigger='yes']" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == "[trigger='no']" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == "akmohfpnfodolpdgmlhabifeflcbokfb" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "aafffodlodelkolbgmdgnlffbcjiecgm" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "page_id" && func == "getElementById"){ return v_new(HTMLInputElement) }
  if(name == "page_start_time" && func == "getElementById"){ return v_new(HTMLInputElement) }
  if(name == "searchForm" && func == "getElementById"){ return v_new(HTMLFormElement) }
  if(name == ".main" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == "time-update-tip" && func == "getElementById"){ return v_new(HTMLImageElement) }
  if(name == ".result-wrapper" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == "#time-update-tip" && func == "querySelector"){ return v_new(HTMLImageElement) }
  if(name == "comfort-ZH9654_1735129800000-0" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "departureTerminalZH9654_1735129800000-0" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "arrivalTerminalZH9654_1735129800000-0" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "airlineNameZH9654_1735129800000-0" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "departureFlightTrainZH9654_1735129800000-0" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "arrivalFlightTrainZH9654_1735129800000-0" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "flightPriceTag_ZH9654_1735129800000-0_XDiscountProduct_0" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "#page_start_time" && func == "querySelector"){ return v_new(HTMLInputElement) }
  if(name == "comfort-MU2947_1735089000000-100" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "departureTerminalMU2947_1735089000000-100" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "arrivalTerminalMU2947_1735089000000-100" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "airlineNameMU2947_1735089000000-100" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "departureFlightTrainMU2947_1735089000000-100" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "arrivalFlightTrainMU2947_1735089000000-100" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "flightPriceTag_MU2947_1735089000000-100_XDiscountProduct_0" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "comfort-ZH9676_1735104300000-200" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "departureTerminalZH9676_1735104300000-200" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "arrivalTerminalZH9676_1735104300000-200" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "airlineNameZH9676_1735104300000-200" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "departureFlightTrainZH9676_1735104300000-200" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "arrivalFlightTrainZH9676_1735104300000-200" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "optimizedTag_flightPriceTag_ZH9676_1735104300000-200_BookAndDiscount_0" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "flightPriceTag_ZH9676_1735104300000-200_XDiscountProduct_1" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "comfort-CZ3900_1735113600000-300" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "departureTerminalCZ3900_1735113600000-300" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "arrivalTerminalCZ3900_1735113600000-300" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "airlineNameCZ3900_1735113600000-300" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "departureFlightTrainCZ3900_1735113600000-300" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "arrivalFlightTrainCZ3900_1735113600000-300" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "flightPriceTag_CZ3900_1735113600000-300_FreeSurcharge_0" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "flightPriceTag_CZ3900_1735113600000-300_XDiscountProduct_1" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "comfort-MF1610_1735113600000-400" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "departureTerminalMF1610_1735113600000-400" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "arrivalTerminalMF1610_1735113600000-400" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "airlineNameMF1610_1735113600000-400" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "departureFlightTrainMF1610_1735113600000-400" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "arrivalFlightTrainMF1610_1735113600000-400" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "flightPriceTag_MF1610_1735113600000-400_FreeSurcharge_0" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "comfort-3U5111_1735089000000-500" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "departureTerminal3U5111_1735089000000-500" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "arrivalTerminal3U5111_1735089000000-500" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "airlineName3U5111_1735089000000-500" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "departureFlightTrain3U5111_1735089000000-500" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "arrivalFlightTrain3U5111_1735089000000-500" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "comfort-MU2971_1735081200000MU6956_1735138800000-600" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "departureTerminalMU2971_1735081200000MU6956_1735138800000-600" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "arrivalTerminalMU2971_1735081200000MU6956_1735138800000-600" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "crossDaysMU2971_1735081200000MU6956_1735138800000-600" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "departureFlightTrainMU2971_1735081200000MU6956_1735138800000-600" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "arrivalFlightTrainMU2971_1735081200000MU6956_1735138800000-600" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "flightPriceTag_MU2971_1735081200000MU6956_1735138800000-600_GiftMarketingCode_0" && func == "getElementById"){ return v_new(HTMLSpanElement) }
  if(name == "flightDetailPopup-MU2971_1735081200000MU6956_1735138800000-600" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "#comfort-ZH9654_1735129800000-0" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == "#departureTerminalZH9654_1735129800000-0" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#arrivalTerminalZH9654_1735129800000-0" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#airlineNameZH9654_1735129800000-0" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#departureFlightTrainZH9654_1735129800000-0" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#arrivalFlightTrainZH9654_1735129800000-0" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#flightPriceTag_ZH9654_1735129800000-0_XDiscountProduct_0" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#comfort-MU2947_1735089000000-100" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == "#departureTerminalMU2947_1735089000000-100" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#arrivalTerminalMU2947_1735089000000-100" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#airlineNameMU2947_1735089000000-100" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#departureFlightTrainMU2947_1735089000000-100" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#arrivalFlightTrainMU2947_1735089000000-100" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#flightPriceTag_MU2947_1735089000000-100_XDiscountProduct_0" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#comfort-ZH9676_1735104300000-200" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == "#departureTerminalZH9676_1735104300000-200" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#arrivalTerminalZH9676_1735104300000-200" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#airlineNameZH9676_1735104300000-200" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#departureFlightTrainZH9676_1735104300000-200" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#arrivalFlightTrainZH9676_1735104300000-200" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#optimizedTag_flightPriceTag_ZH9676_1735104300000-200_BookAndDiscount_0" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == "#flightPriceTag_ZH9676_1735104300000-200_XDiscountProduct_1" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#comfort-CZ3900_1735113600000-300" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == "#departureTerminalCZ3900_1735113600000-300" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#arrivalTerminalCZ3900_1735113600000-300" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#airlineNameCZ3900_1735113600000-300" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#departureFlightTrainCZ3900_1735113600000-300" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#arrivalFlightTrainCZ3900_1735113600000-300" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#flightPriceTag_CZ3900_1735113600000-300_FreeSurcharge_0" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#flightPriceTag_CZ3900_1735113600000-300_XDiscountProduct_1" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#comfort-MF1610_1735113600000-400" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == "#departureTerminalMF1610_1735113600000-400" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#arrivalTerminalMF1610_1735113600000-400" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#airlineNameMF1610_1735113600000-400" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#departureFlightTrainMF1610_1735113600000-400" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#arrivalFlightTrainMF1610_1735113600000-400" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#flightPriceTag_MF1610_1735113600000-400_FreeSurcharge_0" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#comfort-3U5111_1735089000000-500" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == "#departureTerminal3U5111_1735089000000-500" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#arrivalTerminal3U5111_1735089000000-500" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#airlineName3U5111_1735089000000-500" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#departureFlightTrain3U5111_1735089000000-500" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#arrivalFlightTrain3U5111_1735089000000-500" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#comfort-MU2971_1735081200000MU6956_1735138800000-600" && func == "querySelector"){ return v_new(HTMLDivElement) }
  if(name == "#departureTerminalMU2971_1735081200000MU6956_1735138800000-600" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#arrivalTerminalMU2971_1735081200000MU6956_1735138800000-600" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#crossDaysMU2971_1735081200000MU6956_1735138800000-600" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#departureFlightTrainMU2971_1735081200000MU6956_1735138800000-600" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#arrivalFlightTrainMU2971_1735081200000MU6956_1735138800000-600" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#flightPriceTag_MU2971_1735081200000MU6956_1735138800000-600_GiftMarketingCode_0" && func == "querySelector"){ return v_new(HTMLSpanElement) }
  if(name == "#flightDetailPopup-MU2971_1735081200000MU6956_1735138800000-600" && func == "querySelector"){ return v_new(HTMLDivElement) }
  return null
}
function v_geteles(name, func){
  if(name == "body" && func == "getElementsByTagName"){ return [v_new(HTMLBodyElement)] }
  if(name == "script" && func == "getElementsByTagName"){ return [v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement)] }
  if(name == "head" && func == "getElementsByTagName"){ return [v_new(HTMLHeadElement)] }
  if(name == "link" && func == "getElementsByTagName"){ return [v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement)] }
  if(name == "style" && func == "getElementsByTagName"){ return [v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement)] }
  if(name == "trigger" && func == "getElementsByClassName"){ return [] }
  if(name == "footerLayer-lazy" && func == "getElementsByClassName"){ return [v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement)] }
  if(name == "*" && func == "querySelectorAll"){ return [v_new(HTMLHtmlElement),v_new(HTMLHeadElement),v_new(HTMLMetaElement),v_new(HTMLMetaElement),v_new(HTMLMetaElement),v_new(HTMLMetaElement),v_new(HTMLMetaElement),v_new(HTMLMetaElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLMetaElement),v_new(HTMLMetaElement),v_new(HTMLTitleElement),v_new(HTMLMetaElement),v_new(HTMLMetaElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLMetaElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLMetaElement),v_new(HTMLLinkElement),v_new(HTMLLinkElement),v_new(HTMLElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLScriptElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLLinkElement),v_new(HTMLStyleElement),v_new(HTMLStyleElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLBodyElement),v_new(HTMLIFrameElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLScriptElement),v_new(HTMLStyleElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLAnchorElement),v_new(HTMLFormElement),v_new(HTMLLinkElement),v_new(HTMLInputElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLInputElement),v_new(HTMLAnchorElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLDivElement),v_new(HTMLUListElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLLIElement),v_new(HTMLButtonElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLElement),v_new(HTMLButtonElement),v_new(HTMLElement),v_new(HTMLButtonElement),v_new(HTMLElement),v_new(HTMLStyleElement),v_new(HTMLScriptElement),v_new(HTMLLinkElement),v_new(HTMLDivElement),v_new(HTMLInputElement),v_new(HTMLInputElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLFormElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLUListElement),v_new(HTMLLIElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLElement),v_new(HTMLLIElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLElement),v_new(HTMLLIElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLUListElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLabelElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLInputElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLUListElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLUListElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLLabelElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLInputElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLUListElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLUListElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLabelElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLInputElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLAnchorElement),v_new(HTMLDivElement),v_new(HTMLLabelElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLInputElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLUListElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLImageElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLUListElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLUListElement),v_new(HTMLLIElement),v_new(HTMLSpanElement),v_new(HTMLLIElement),v_new(HTMLSpanElement),v_new(HTMLLIElement),v_new(HTMLSpanElement),v_new(HTMLLIElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLUListElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLUListElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLHeadingElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLHeadingElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLCanvasElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLUListElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLParagraphElement),v_new(HTMLUListElement),v_new(HTMLLIElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLImageElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLImageElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLImageElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLImageElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLImageElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLImageElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLHeadingElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLImageElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLImageElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLButtonElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLHeadingElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLHeadingElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLHeadingElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLHeadingElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLHeadingElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLHeadingElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLHeadingElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLHeadingElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLHeadingElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLHeadingElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLHeadingElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLHeadingElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLHeadingElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLHeadingElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDListElement),v_new(HTMLElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLDivElement),v_new(HTMLDListElement),v_new(HTMLElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLDivElement),v_new(HTMLDListElement),v_new(HTMLElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLDivElement),v_new(HTMLDListElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLDListElement),v_new(HTMLElement),v_new(HTMLDivElement),v_new(HTMLImageElement),v_new(HTMLParagraphElement),v_new(HTMLDivElement),v_new(HTMLParagraphElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLParagraphElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLParagraphElement),v_new(HTMLSpanElement),v_new(HTMLAnchorElement),v_new(HTMLDivElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLDivElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLSpanElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLDivElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLElement),v_new(HTMLParagraphElement),v_new(HTMLScriptElement),v_new(HTMLInputElement),v_new(HTMLInputElement)] }
  if(name == "iframe:not([data-vue-devtools-ignore])" && func == "querySelectorAll"){ return [v_new(HTMLIFrameElement)] }
  if(name == "flight-list" && func == "getElementsByClassName"){ return [v_new(HTMLDivElement)] }
  if(name == "adsbox" && func == "getElementsByClassName"){ return [] }
  return null
}
var v_Date = Date;
var v_base_time = +new Date;
(function(){
  function ftime(){
    return new v_Date() - v_base_time + v_to_time
  }
  Date = function(_Date) {
    var bind = Function.bind;
    var unbind = bind.bind(bind);
    function instantiate(constructor, args) {
      return new (unbind(constructor, null).apply(null, args));
    }
    var names = Object.getOwnPropertyNames(_Date);
    for (var i = 0; i < names.length; i++) {
      if (names[i]in Date)
        continue;
      var desc = Object.getOwnPropertyDescriptor(_Date, names[i]);
      Object.defineProperty(Date, names[i], desc);
    }
    function Date() {
      var date = instantiate(_Date, [ftime()]);
      return date;
    }
    Date.prototype = _Date.prototype
    return v_saf(Date);
  }(Date);
  Date.now = v_saf(function now(){ return ftime() })
})();
var v_to_time = +new v_Date
// var v_to_time = +new v_Date('Sat Sep 03 2022 11:11:58 GMT+0800') // 自定义起始时间

v_repair_this() // 修复 window 指向global
v_new_toggle = undefined
// v_console_log = function(){} // 关闭日志输出;