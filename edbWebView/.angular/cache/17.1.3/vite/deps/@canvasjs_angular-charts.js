import {
  CommonModule,
  NgIf,
  NgStyle
} from "./chunk-TK6D43SB.js";
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵtemplate
} from "./chunk-IIPTCXYA.js";
import {
  __commonJS
} from "./chunk-CPNXOV62.js";

// node_modules/@canvasjs/charts/canvasjs.min.js
var require_canvasjs_min = __commonJS({
  "node_modules/@canvasjs/charts/canvasjs.min.js"(exports, module) {
    (function() {
      function qa(h, p) {
        h.prototype = db(p.prototype);
        h.prototype.constructor = h;
        h.base = p.prototype;
      }
      function db(h) {
        function p() {
        }
        p.prototype = h;
        return new p();
      }
      function Xa(h, p, N) {
        "millisecond" === N ? h.setMilliseconds(h.getMilliseconds() + 1 * p) : "second" === N ? h.setSeconds(h.getSeconds() + 1 * p) : "minute" === N ? h.setMinutes(h.getMinutes() + 1 * p) : "hour" === N ? h.setHours(h.getHours() + 1 * p) : "day" === N ? h.setDate(h.getDate() + 1 * p) : "week" === N ? h.setDate(h.getDate() + 7 * p) : "month" === N ? h.setMonth(h.getMonth() + 1 * p) : "year" === N && h.setFullYear(h.getFullYear() + 1 * p);
        return h;
      }
      function ea(h, p) {
        var N = false;
        0 > h && (N = true, h *= -1);
        h = "" + h;
        for (p = p ? p : 1; h.length < p; )
          h = "0" + h;
        return N ? "-" + h : h;
      }
      function Ha(h) {
        if (!h)
          return h;
        h = h.replace(/^\s\s*/, "");
        for (var p = /\s/, N = h.length; p.test(h.charAt(--N)); )
          ;
        return h.slice(0, N + 1);
      }
      function Aa(h) {
        h.roundRect = function(h2, N, m2, u2, sa, D, z2, w2) {
          z2 && (this.fillStyle = z2);
          w2 && (this.strokeStyle = w2);
          "undefined" === typeof sa && (sa = 5);
          this.lineWidth = D;
          this.beginPath();
          this.moveTo(h2 + sa, N);
          this.lineTo(h2 + m2 - sa, N);
          this.quadraticCurveTo(h2 + m2, N, h2 + m2, N + sa);
          this.lineTo(h2 + m2, N + u2 - sa);
          this.quadraticCurveTo(h2 + m2, N + u2, h2 + m2 - sa, N + u2);
          this.lineTo(h2 + sa, N + u2);
          this.quadraticCurveTo(h2, N + u2, h2, N + u2 - sa);
          this.lineTo(h2, N + sa);
          this.quadraticCurveTo(h2, N, h2 + sa, N);
          this.closePath();
          z2 && this.fill();
          w2 && 0 < D && this.stroke();
        };
      }
      function Ra(h, p) {
        return h - p;
      }
      function Z(h) {
        var p = ((h & 16711680) >> 16).toString(16), N = ((h & 65280) >> 8).toString(16);
        h = ((h & 255) >> 0).toString(16);
        p = 2 > p.length ? "0" + p : p;
        N = 2 > N.length ? "0" + N : N;
        h = 2 > h.length ? "0" + h : h;
        return "#" + p + N + h;
      }
      function eb(h, p) {
        var N = this.length >>> 0, m2 = Number(p) || 0, m2 = 0 > m2 ? Math.ceil(m2) : Math.floor(m2);
        for (0 > m2 && (m2 += N); m2 < N; m2++)
          if (m2 in this && this[m2] === h)
            return m2;
        return -1;
      }
      function m(h) {
        return null === h || "undefined" === typeof h;
      }
      function Ea(h) {
        h.indexOf || (h.indexOf = eb);
        return h;
      }
      function fb(h) {
        if (xa.fSDec)
          h[ka("`eeDwdouMhrudods")](ka("e`u`@ohl`uhnoHuds`uhnoDoe"), function() {
            xa._fTWm && xa._fTWm(h);
          });
      }
      function Ya(h, p, N) {
        N = N || "normal";
        var m2 = h + "_" + p + "_" + N, u2 = Za[m2];
        if (isNaN(u2)) {
          try {
            if (!ta) {
              var sa = document.body;
              ta = document.createElement("span");
              ta.innerHTML = "";
              var D = document.createTextNode("Mpgyi");
              ta.appendChild(D);
              sa.appendChild(ta);
            }
            ta.style.display = "";
            Y(ta, { position: "absolute", left: "0px", top: "-20000px", padding: "0px", margin: "0px", border: "none", whiteSpace: "pre", lineHeight: "normal", fontFamily: h, fontSize: p + "px", fontWeight: N });
            u2 = Math.round(ta.offsetHeight);
            ta.style.display = "none";
          } catch (z2) {
            u2 = Math.ceil(1.1 * p);
          }
          u2 = Math.max(u2, p);
          Za[m2] = u2;
        }
        return u2;
      }
      function I(h, p) {
        var N = [];
        if (N = { solid: [], shortDash: [3, 1], shortDot: [1, 1], shortDashDot: [3, 1, 1, 1], shortDashDotDot: [3, 1, 1, 1, 1, 1], dot: [1, 2], dash: [4, 2], dashDot: [
          4,
          2,
          1,
          2
        ], longDash: [8, 2], longDashDot: [8, 2, 1, 2], longDashDotDot: [8, 2, 1, 2, 1, 2] }[h || "solid"])
          for (var m2 = 0; m2 < N.length; m2++)
            N[m2] *= p;
        else
          N = [];
        return N;
      }
      function Q(h, p, N, u2, ja) {
        u2 = u2 || [];
        ja = m(ja) ? gb ? { passive: false, capture: false } : false : ja;
        u2.push([h, p, N, ja]);
        return h.addEventListener ? (h.addEventListener(p, N, ja), N) : h.attachEvent ? (u2 = function(p2) {
          p2 = p2 || window.event;
          p2.preventDefault = p2.preventDefault || function() {
            p2.returnValue = false;
          };
          p2.stopPropagation = p2.stopPropagation || function() {
            p2.cancelBubble = true;
          };
          N.call(h, p2);
        }, h.attachEvent(
          "on" + p,
          u2
        ), u2) : false;
      }
      function hb(h) {
        if (h._menuButton)
          h.exportEnabled ? (Y(h._menuButton, { backgroundColor: h.toolbar.itemBackgroundColor, color: h.toolbar.fontColor }), Ma(h._menuButton), ua(h, h._menuButton, "menu")) : ya(h._menuButton);
        else if (h.exportEnabled && u) {
          var p = false;
          h._menuButton = document.createElement("button");
          ua(h, h._menuButton, "menu");
          h._toolBar.appendChild(h._menuButton);
          Q(h._menuButton, "touchstart", function(h2) {
            p = true;
          }, h.allDOMEventHandlers);
          Q(h._menuButton, "click", function() {
            "none" !== h._dropdownMenu.style.display || h._dropDownCloseTime && 500 >= (/* @__PURE__ */ new Date()).getTime() - h._dropDownCloseTime.getTime() || (h._dropdownMenu.style.display = "block", h._menuButton.blur(), h._dropdownMenu.focus());
          }, h.allDOMEventHandlers, true);
          Q(h._menuButton, "mousemove", function() {
            p || (Y(h._menuButton, { backgroundColor: h.toolbar.itemBackgroundColorOnHover, color: h.toolbar.fontColorOnHover }), 0 >= navigator.userAgent.search("MSIE") && Y(h._menuButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
          }, h.allDOMEventHandlers, true);
          Q(
            h._menuButton,
            "mouseout",
            function() {
              p || (Y(h._menuButton, { backgroundColor: h.toolbar.itemBackgroundColor, color: h.toolbar.fontColor }), 0 >= navigator.userAgent.search("MSIE") && Y(h._menuButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
            },
            h.allDOMEventHandlers,
            true
          );
        }
        if (h.exportEnabled && h._dropdownMenu) {
          Y(h._dropdownMenu, { backgroundColor: h.toolbar.itemBackgroundColor, color: h.toolbar.fontColor });
          for (var m2 = h._dropdownMenu.childNodes, $ = [h._cultureInfo.printText, h._cultureInfo.saveJPGText, h._cultureInfo.savePNGText], ja = 0; ja < m2.length; ja++)
            Y(m2[ja], { backgroundColor: h.toolbar.itemBackgroundColor, color: h.toolbar.fontColor }), m2[ja].innerHTML = $[ja];
        } else
          !h._dropdownMenu && (h.exportEnabled && u) && (p = false, h._dropdownMenu = document.createElement("div"), h._dropdownMenu.setAttribute("tabindex", -1), m2 = -1 !== h.theme.indexOf("dark") ? "black" : "#888888", Y(h._dropdownMenu, {
            position: "absolute",
            zIndex: 1,
            userSelect: "none",
            MozUserSeelct: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
            cursor: "pointer",
            right: "0px",
            top: "25px",
            minWidth: "120px",
            outline: 0,
            fontSize: "14px",
            fontFamily: "Arial, Helvetica, sans-serif",
            padding: "5px 0px 5px 0px",
            textAlign: "left",
            lineHeight: "10px",
            backgroundColor: h.toolbar.itemBackgroundColor,
            boxShadow: "2px 2px 10px" + m2
          }), h._dropdownMenu.style.display = "none", h._toolBar.appendChild(h._dropdownMenu), Q(h._dropdownMenu, "blur", function() {
            ya(h._dropdownMenu);
            h._dropDownCloseTime = /* @__PURE__ */ new Date();
          }, h.allDOMEventHandlers, true), m2 = document.createElement("div"), Y(m2, { padding: "12px 8px 12px 8px" }), m2.innerHTML = h._cultureInfo.printText, m2.style.backgroundColor = h.toolbar.itemBackgroundColor, m2.style.color = h.toolbar.fontColor, h._dropdownMenu.appendChild(m2), Q(m2, "touchstart", function(h2) {
            p = true;
          }, h.allDOMEventHandlers), Q(m2, "mousemove", function() {
            p || (this.style.backgroundColor = h.toolbar.itemBackgroundColorOnHover, this.style.color = h.toolbar.fontColorOnHover);
          }, h.allDOMEventHandlers, true), Q(m2, "mouseout", function() {
            p || (this.style.backgroundColor = h.toolbar.itemBackgroundColor, this.style.color = h.toolbar.fontColor);
          }, h.allDOMEventHandlers, true), Q(m2, "click", function() {
            h.print();
            ya(h._dropdownMenu);
          }, h.allDOMEventHandlers, true), m2 = document.createElement("div"), Y(m2, { padding: "12px 8px 12px 8px" }), m2.innerHTML = h._cultureInfo.saveJPGText, m2.style.backgroundColor = h.toolbar.itemBackgroundColor, m2.style.color = h.toolbar.fontColor, h._dropdownMenu.appendChild(m2), Q(m2, "touchstart", function(h2) {
            p = true;
          }, h.allDOMEventHandlers), Q(m2, "mousemove", function() {
            p || (this.style.backgroundColor = h.toolbar.itemBackgroundColorOnHover, this.style.color = h.toolbar.fontColorOnHover);
          }, h.allDOMEventHandlers, true), Q(
            m2,
            "mouseout",
            function() {
              p || (this.style.backgroundColor = h.toolbar.itemBackgroundColor, this.style.color = h.toolbar.fontColor);
            },
            h.allDOMEventHandlers,
            true
          ), Q(m2, "click", function() {
            h.exportChart({ format: "jpeg", fileName: h.exportFileName });
            ya(h._dropdownMenu);
          }, h.allDOMEventHandlers, true), m2 = document.createElement("div"), Y(m2, { padding: "12px 8px 12px 8px" }), m2.innerHTML = h._cultureInfo.savePNGText, m2.style.backgroundColor = h.toolbar.itemBackgroundColor, m2.style.color = h.toolbar.fontColor, h._dropdownMenu.appendChild(m2), Q(
            m2,
            "touchstart",
            function(h2) {
              p = true;
            },
            h.allDOMEventHandlers
          ), Q(m2, "mousemove", function() {
            p || (this.style.backgroundColor = h.toolbar.itemBackgroundColorOnHover, this.style.color = h.toolbar.fontColorOnHover);
          }, h.allDOMEventHandlers, true), Q(m2, "mouseout", function() {
            p || (this.style.backgroundColor = h.toolbar.itemBackgroundColor, this.style.color = h.toolbar.fontColor);
          }, h.allDOMEventHandlers, true), Q(m2, "click", function() {
            h.exportChart({ format: "png", fileName: h.exportFileName });
            ya(h._dropdownMenu);
          }, h.allDOMEventHandlers, true));
      }
      function $a(h, p, m2) {
        h *= na;
        p *= na;
        h = m2.getImageData(h, p, 2, 2).data;
        p = true;
        for (m2 = 0; 4 > m2; m2++)
          if (h[m2] !== h[m2 + 4] | h[m2] !== h[m2 + 8] | h[m2] !== h[m2 + 12]) {
            p = false;
            break;
          }
        return p ? h[0] << 16 | h[1] << 8 | h[2] : 0;
      }
      function oa(h, p, m2) {
        return h in p ? p[h] : m2[h];
      }
      function Na(h, p, N, $) {
        u && ab ? ($ = !m($) && $ ? h.getContext("2d", { willReadFrequently: true }) : h.getContext("2d"), Oa = $.webkitBackingStorePixelRatio || $.mozBackingStorePixelRatio || $.msBackingStorePixelRatio || $.oBackingStorePixelRatio || $.backingStorePixelRatio || 1, na = Sa / Oa, h.width = p * na, h.height = N * na, Sa !== Oa && (h.style.width = p + "px", h.style.height = N + "px", $.scale(na, na))) : (h.width = p, h.height = N);
      }
      function ib(h) {
        if (!jb) {
          var p = false, m2 = false;
          "undefined" === typeof ra.Chart.creditHref ? (h.creditHref = ka("iuuqr;..b`ow`rkr/bnl."), h.creditText = ka("B`ow`rKR/bnl")) : (p = h.updateOption("creditText"), m2 = h.updateOption("creditHref"));
          if (h.creditHref && h.creditText) {
            h._creditLink || (h._creditLink = document.createElement("a"), h._creditLink.setAttribute("class", "canvasjs-chart-credit"), h._creditLink.setAttribute("title", "JavaScript Charts"), Y(
              h._creditLink,
              { outline: "none", margin: "0px", position: "absolute", right: "2px", top: h.height - 14 + "px", color: "dimgrey", textDecoration: "none", fontSize: "11px", fontFamily: "Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif" }
            ), h._creditLink.setAttribute("tabIndex", -1), h._creditLink.setAttribute("target", "_blank"));
            if (0 === h.renderCount || p || m2)
              h._creditLink.setAttribute("href", h.creditHref), h._creditLink.innerHTML = h.creditText;
            h._creditLink && h.creditHref && h.creditText ? (h._creditLink.parentElement || h._canvasJSContainer.appendChild(h._creditLink), h._creditLink.style.top = h.height - 14 + "px") : h._creditLink.parentElement && h._canvasJSContainer.removeChild(h._creditLink);
          }
        }
      }
      function wa(h, p, m2) {
        Ia && (this.canvasCount |= 0, window.console.log(++this.canvasCount));
        var $ = document.createElement("canvas");
        $.setAttribute("class", "canvasjs-chart-canvas");
        Na($, h, p, m2);
        u || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement($);
        return $;
      }
      function Y(h, p) {
        for (var m2 in p)
          h.style[m2] = p[m2];
      }
      function ua(h, p, m2) {
        p.getAttribute("state") || (p.style.backgroundColor = h.toolbar.itemBackgroundColor, p.style.color = h.toolbar.fontColor, p.style.border = "none", Y(p, { WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none", userSelect: "none" }));
        p.getAttribute("state") !== m2 && (p.setAttribute("state", m2), p.setAttribute("type", "button"), Y(p, { padding: "5px 12px", cursor: "pointer", "float": "left", width: "40px", height: "25px", outline: "0px", verticalAlign: "baseline", lineHeight: "0" }), p.innerHTML = "<img src='" + kb[m2].image + "' alt='" + h._cultureInfo[m2 + "Text"] + "' />", Y(
          p.childNodes[0],
          { height: "95%", pointerEvents: "none" }
        ));
        p.setAttribute("title", h._cultureInfo[m2 + "Text"]);
      }
      function Ma() {
        for (var h = null, p = 0; p < arguments.length; p++)
          h = arguments[p], h.style && (h.style.display = "inline");
      }
      function ya() {
        for (var h = null, p = 0; p < arguments.length; p++)
          (h = arguments[p]) && h.style && (h.style.display = "none");
      }
      function Ta(h, p, m2, u2, ja) {
        if (null === h || "undefined" === typeof h)
          return "undefined" === typeof m2 ? p : m2;
        h = parseFloat(h.toString()) * (0 <= h.toString().indexOf("%") ? p / 100 : 1);
        "undefined" !== typeof u2 && (h = Math.min(u2, h), "undefined" !== typeof ja && (h = Math.max(ja, h)));
        return !isNaN(h) && h <= p && 0 <= h ? h : "undefined" === typeof m2 ? p : m2;
      }
      function K(h, p, u2, $, ja) {
        this._defaultsKey = h;
        this._themeOptionsKey = p;
        this._index = $;
        this.parent = ja;
        this._eventListeners = [];
        h = {};
        this.theme && m(this.parent) && m(p) && m($) ? h = m(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[p]) && (null === $ ? h = this.parent.themeOptions[p] : 0 < this.parent.themeOptions[p].length && ($ = Math.min(this.parent.themeOptions[p].length - 1, $), h = this.parent.themeOptions[p][$]));
        this.themeOptions = h;
        this.options = u2 ? u2 : { _isPlaceholder: true };
        this.setOptions(this.options, h);
      }
      function Fa(h, p, m2, u2, ja) {
        "undefined" === typeof ja && (ja = 0);
        this._padding = ja;
        this._x1 = h;
        this._y1 = p;
        this._x2 = m2;
        this._y2 = u2;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
      }
      function la(h, p) {
        la.base.constructor.call(this, "TextBlock", null, p, null, null);
        this.ctx = h;
        this._isDirty = true;
        this._wrappedText = null;
        this._initialize();
      }
      function Ua(h, p) {
        Ua.base.constructor.call(this, "Toolbar", "toolbar", p, null, h);
        this.chart = h;
        this.canvas = h.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "toolbar";
      }
      function Ba(h, p) {
        Ba.base.constructor.call(this, "Title", "title", p, null, h);
        this.chart = h;
        this.canvas = h.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "title";
        if (m(this.options.margin) && h.options.subtitles) {
          for (var u2 = h.options.subtitles, $ = 0; $ < u2.length; $++)
            if ((m(u2[$].horizontalAlign) && "center" === this.horizontalAlign || u2[$].horizontalAlign === this.horizontalAlign) && (m(u2[$].verticalAlign) && "top" === this.verticalAlign || u2[$].verticalAlign === this.verticalAlign) && !u2[$].dockInsidePlotArea === !this.dockInsidePlotArea) {
              this.margin = 0;
              break;
            }
        }
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null };
      }
      function Ja(h, p, m2) {
        Ja.base.constructor.call(this, "Subtitle", "subtitles", p, m2, h);
        this.chart = h;
        this.canvas = h.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "subtitles";
        this.isOptionsInArray = true;
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null };
      }
      function Va() {
        this.pool = [];
      }
      function Ka(h) {
        var p;
        h && La[h] && (p = La[h]);
        Ka.base.constructor.call(this, "CultureInfo", null, p, null, null);
      }
      var Ia = false, xa = {}, u = !!document.createElement("canvas").getContext, ra = {
        Chart: {
          width: 500,
          height: 400,
          zoomEnabled: false,
          zoomType: "x",
          backgroundColor: "white",
          theme: "light1",
          animationEnabled: false,
          animationDuration: 1200,
          dataPointWidth: null,
          dataPointMinWidth: null,
          dataPointMaxWidth: null,
          colorSet: "colorSet1",
          culture: "en",
          creditText: "CanvasJS",
          interactivityEnabled: true,
          exportEnabled: false,
          exportFileName: "Chart",
          rangeChanging: null,
          rangeChanged: null,
          publicProperties: {
            title: "readWrite",
            subtitles: "readWrite",
            toolbar: "readWrite",
            toolTip: "readWrite",
            legend: "readWrite",
            axisX: "readWrite",
            axisY: "readWrite",
            axisX2: "readWrite",
            axisY2: "readWrite",
            data: "readWrite",
            options: "readWrite",
            bounds: "readOnly",
            container: "readOnly",
            selectedColorSet: "readOnly"
          }
        },
        Title: { padding: 0, text: null, verticalAlign: "top", horizontalAlign: "center", fontSize: 20, fontFamily: "Calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", borderThickness: 0, borderColor: "black", cornerRadius: 0, backgroundColor: u ? "transparent" : null, margin: 5, wrap: true, maxWidth: null, dockInsidePlotArea: false, publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" } },
        Subtitle: {
          padding: 0,
          text: null,
          verticalAlign: "top",
          horizontalAlign: "center",
          fontSize: 14,
          fontFamily: "Calibri",
          fontWeight: "normal",
          fontColor: "black",
          fontStyle: "normal",
          borderThickness: 0,
          borderColor: "black",
          cornerRadius: 0,
          backgroundColor: null,
          margin: 2,
          wrap: true,
          maxWidth: null,
          dockInsidePlotArea: false,
          publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" }
        },
        Toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white", publicProperties: { options: "readWrite", chart: "readOnly" } },
        Legend: { name: null, verticalAlign: "center", horizontalAlign: "right", fontSize: 14, fontFamily: "calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", cursor: null, itemmouseover: null, itemmouseout: null, itemmousemove: null, itemclick: null, dockInsidePlotArea: false, reversed: false, backgroundColor: u ? "transparent" : null, borderColor: u ? "transparent" : null, borderThickness: 0, cornerRadius: 0, maxWidth: null, maxHeight: null, markerMargin: null, itemMaxWidth: null, itemWidth: null, itemWrap: true, itemTextFormatter: null, publicProperties: {
          options: "readWrite",
          bounds: "readOnly",
          chart: "readOnly"
        } },
        ToolTip: { enabled: true, shared: false, animationEnabled: true, content: null, contentFormatter: null, reversed: false, backgroundColor: u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", borderColor: null, borderThickness: 2, cornerRadius: 5, fontSize: 14, fontColor: "black", fontFamily: "Calibri, Arial, Georgia, serif;", fontWeight: "normal", fontStyle: "italic", updated: null, hidden: null, publicProperties: { options: "readWrite", chart: "readOnly" } },
        Axis: {
          minimum: null,
          maximum: null,
          viewportMinimum: null,
          viewportMaximum: null,
          interval: null,
          intervalType: null,
          reversed: false,
          logarithmic: false,
          logarithmBase: 10,
          title: null,
          titleFontColor: "black",
          titleFontSize: 20,
          titleFontFamily: "arial",
          titleFontWeight: "normal",
          titleFontStyle: "normal",
          titleWrap: true,
          titleMaxWidth: null,
          titleBackgroundColor: u ? "transparent" : null,
          titleBorderColor: u ? "transparent" : null,
          titleBorderThickness: 0,
          titleCornerRadius: 0,
          labelAngle: 0,
          labelFontFamily: "arial",
          labelFontColor: "black",
          labelFontSize: 12,
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelAutoFit: true,
          labelWrap: true,
          labelMaxWidth: null,
          labelFormatter: null,
          labelBackgroundColor: u ? "transparent" : null,
          labelBorderColor: u ? "transparent" : null,
          labelBorderThickness: 0,
          labelCornerRadius: 0,
          labelPlacement: "outside",
          labelTextAlign: "left",
          prefix: "",
          suffix: "",
          includeZero: false,
          tickLength: 5,
          tickColor: "black",
          tickThickness: 1,
          tickPlacement: "outside",
          lineColor: "black",
          lineThickness: 1,
          lineDashType: "solid",
          gridColor: "#A0A0A0",
          gridThickness: 0,
          gridDashType: "solid",
          interlacedColor: u ? "transparent" : null,
          valueFormatString: null,
          margin: 2,
          publicProperties: {
            options: "readWrite",
            stripLines: "readWrite",
            scaleBreaks: "readWrite",
            crosshair: "readWrite",
            bounds: "readOnly",
            chart: "readOnly"
          }
        },
        StripLine: {
          value: null,
          startValue: null,
          endValue: null,
          color: "orange",
          opacity: null,
          thickness: 2,
          lineDashType: "solid",
          label: "",
          labelPlacement: "inside",
          labelAlign: "far",
          labelWrap: true,
          labelMaxWidth: null,
          labelBackgroundColor: null,
          labelBorderColor: u ? "transparent" : null,
          labelBorderThickness: 0,
          labelCornerRadius: 0,
          labelFontFamily: "arial",
          labelFontColor: "orange",
          labelFontSize: 12,
          labelFontWeight: "normal",
          labelFontStyle: "normal",
          labelFormatter: null,
          showOnTop: false,
          publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" }
        },
        ScaleBreaks: { autoCalculate: false, collapsibleThreshold: "25%", maxNumberOfAutoBreaks: 2, spacing: 8, type: "straight", color: "#FFFFFF", fillOpacity: 0.9, lineThickness: 2, lineColor: "#E16E6E", lineDashType: "solid", publicProperties: { options: "readWrite", customBreaks: "readWrite", axis: "readOnly", autoBreaks: "readOnly", bounds: "readOnly", chart: "readOnly" } },
        Break: {
          startValue: null,
          endValue: null,
          spacing: 8,
          type: "straight",
          color: "#FFFFFF",
          fillOpacity: 0.9,
          lineThickness: 2,
          lineColor: "#E16E6E",
          lineDashType: "solid",
          publicProperties: { options: "readWrite", scaleBreaks: "readOnly", bounds: "readOnly", chart: "readOnly" }
        },
        Crosshair: { enabled: false, snapToDataPoint: false, color: "grey", opacity: null, thickness: 2, lineDashType: "solid", label: "", labelWrap: true, labelMaxWidth: null, labelBackgroundColor: u ? "grey" : null, labelBorderColor: u ? "grey" : null, labelBorderThickness: 0, labelCornerRadius: 0, labelFontFamily: u ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri", labelFontSize: 12, labelFontColor: "#fff", labelFontWeight: "normal", labelFontStyle: "normal", labelFormatter: null, valueFormatString: null, updated: null, hidden: null, publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" } },
        DataSeries: {
          name: null,
          dataPoints: null,
          label: "",
          bevelEnabled: false,
          highlightEnabled: true,
          cursor: "default",
          indexLabel: "",
          indexLabelPlacement: "auto",
          indexLabelOrientation: "horizontal",
          indexLabelTextAlign: "left",
          indexLabelFontColor: "black",
          indexLabelFontSize: 12,
          indexLabelFontStyle: "normal",
          indexLabelFontFamily: "Arial",
          indexLabelFontWeight: "normal",
          indexLabelBackgroundColor: null,
          indexLabelLineColor: "gray",
          indexLabelLineThickness: 1,
          indexLabelLineDashType: "solid",
          indexLabelMaxWidth: null,
          indexLabelWrap: true,
          indexLabelFormatter: null,
          lineThickness: 2,
          lineDashType: "solid",
          connectNullData: false,
          nullDataLineDashType: "dash",
          color: null,
          lineColor: null,
          risingColor: "white",
          fallingColor: "red",
          fillOpacity: null,
          startAngle: 0,
          radius: null,
          innerRadius: null,
          neckHeight: null,
          neckWidth: null,
          reversed: false,
          valueRepresents: null,
          linkedDataSeriesIndex: null,
          whiskerThickness: 2,
          whiskerDashType: "solid",
          whiskerColor: null,
          whiskerLength: null,
          stemThickness: 2,
          stemColor: null,
          stemDashType: "solid",
          upperBoxColor: "white",
          lowerBoxColor: "white",
          type: "column",
          xValueType: "number",
          axisXType: "primary",
          axisYType: "primary",
          axisXIndex: 0,
          axisYIndex: 0,
          xValueFormatString: null,
          yValueFormatString: null,
          zValueFormatString: null,
          percentFormatString: null,
          showInLegend: null,
          legendMarkerType: null,
          legendMarkerColor: null,
          legendText: null,
          legendMarkerBorderColor: u ? "transparent" : null,
          legendMarkerBorderThickness: 0,
          markerType: "circle",
          markerColor: null,
          markerSize: null,
          markerBorderColor: u ? "transparent" : null,
          markerBorderThickness: 0,
          mouseover: null,
          mouseout: null,
          mousemove: null,
          click: null,
          toolTipContent: null,
          visible: true,
          publicProperties: { options: "readWrite", axisX: "readWrite", axisY: "readWrite", chart: "readOnly" }
        },
        TextBlock: {
          x: 0,
          y: 0,
          width: null,
          height: null,
          maxWidth: null,
          maxHeight: null,
          padding: 0,
          angle: 0,
          text: "",
          horizontalAlign: "center",
          textAlign: "left",
          fontSize: 12,
          fontFamily: "calibri",
          fontWeight: "normal",
          fontColor: "black",
          fontStyle: "normal",
          borderThickness: 0,
          borderColor: "black",
          cornerRadius: 0,
          backgroundColor: null,
          textBaseline: "top"
        },
        CultureInfo: {
          decimalSeparator: ".",
          digitGroupSeparator: ",",
          zoomText: "Zoom",
          panText: "Pan",
          resetText: "Reset",
          menuText: "More Options",
          saveJPGText: "Save as JPEG",
          savePNGText: "Save as PNG",
          printText: "Print",
          days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
          shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
          months: "January February March April May June July August September October November December".split(" "),
          shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
        }
      }, La = { en: {} }, z = u ? "Trebuchet MS, Helvetica, sans-serif" : "Arial", Ga = u ? "Impact, Charcoal, sans-serif" : "Arial", Ca = {
        colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),
        colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),
        colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
      }, E, da, R, W, aa;
      da = "#333333";
      R = "#000000";
      E = "#666666";
      aa = W = "#000000";
      var fa = 20, w = 14, Wa = { colorSet: "colorSet1", backgroundColor: "#FFFFFF", title: { fontFamily: Ga, fontSize: 32, fontColor: da, fontWeight: "normal", verticalAlign: "top", margin: 5 }, subtitles: [{ fontFamily: Ga, fontSize: w, fontColor: da, fontWeight: "normal", verticalAlign: "top", margin: 5 }], data: [{
        indexLabelFontFamily: z,
        indexLabelFontSize: w,
        indexLabelFontColor: da,
        indexLabelFontWeight: "normal",
        indexLabelLineThickness: 1
      }], axisX: [{ titleFontFamily: z, titleFontSize: fa, titleFontColor: da, titleFontWeight: "normal", labelFontFamily: z, labelFontSize: w, labelFontColor: R, labelFontWeight: "normal", lineThickness: 1, lineColor: E, tickThickness: 1, tickColor: E, gridThickness: 0, gridColor: E, stripLines: [{ labelFontFamily: z, labelFontSize: w, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: z,
        labelFontSize: w,
        labelFontColor: "#EEEEEE",
        labelFontWeight: "normal",
        labelBackgroundColor: aa,
        color: W,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisX2: [{ titleFontFamily: z, titleFontSize: fa, titleFontColor: da, titleFontWeight: "normal", labelFontFamily: z, labelFontSize: w, labelFontColor: R, labelFontWeight: "normal", lineThickness: 1, lineColor: E, tickThickness: 1, tickColor: E, gridThickness: 0, gridColor: E, stripLines: [{
        labelFontFamily: z,
        labelFontSize: w,
        labelFontColor: "#FF7300",
        labelFontWeight: "normal",
        labelBackgroundColor: null,
        color: "#FF7300",
        thickness: 1
      }], crosshair: { labelFontFamily: z, labelFontSize: w, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: aa, color: W, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisY: [{
        titleFontFamily: z,
        titleFontSize: fa,
        titleFontColor: da,
        titleFontWeight: "normal",
        labelFontFamily: z,
        labelFontSize: w,
        labelFontColor: R,
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: E,
        tickThickness: 1,
        tickColor: E,
        gridThickness: 1,
        gridColor: E,
        stripLines: [{ labelFontFamily: z, labelFontSize: w, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
        crosshair: { labelFontFamily: z, labelFontSize: w, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: aa, color: W, thickness: 1, lineDashType: "dash" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#BBBBBB",
          lineThickness: 1,
          lineDashType: "solid"
        }
      }], axisY2: [{ titleFontFamily: z, titleFontSize: fa, titleFontColor: da, titleFontWeight: "normal", labelFontFamily: z, labelFontSize: w, labelFontColor: R, labelFontWeight: "normal", lineThickness: 1, lineColor: E, tickThickness: 1, tickColor: E, gridThickness: 1, gridColor: E, stripLines: [{ labelFontFamily: z, labelFontSize: w, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
        labelFontFamily: z,
        labelFontSize: w,
        labelFontColor: "#EEEEEE",
        labelFontWeight: "normal",
        labelBackgroundColor: aa,
        color: W,
        thickness: 1,
        lineDashType: "dash"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], legend: { fontFamily: z, fontSize: 14, fontColor: da, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: z, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 }, toolbar: {
        itemBackgroundColor: "white",
        itemBackgroundColorOnHover: "#2196f3",
        buttonBorderColor: "#2196f3",
        buttonBorderThickness: 1,
        fontColor: "black",
        fontColorOnHover: "white"
      } };
      R = da = "#F5F5F5";
      E = "#FFFFFF";
      W = "#40BAF1";
      aa = "#F5F5F5";
      var fa = 20, w = 14, bb = { colorSet: "colorSet2", title: { fontFamily: z, fontSize: 33, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "top", margin: 5 }, subtitles: [{ fontFamily: z, fontSize: w, fontColor: "#3A3A3A", fontWeight: "normal", verticalAlign: "top", margin: 5 }], data: [{ indexLabelFontFamily: z, indexLabelFontSize: w, indexLabelFontColor: "#666666", indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }], axisX: [{
        titleFontFamily: z,
        titleFontSize: fa,
        titleFontColor: "#666666",
        titleFontWeight: "normal",
        labelFontFamily: z,
        labelFontSize: w,
        labelFontColor: "#666666",
        labelFontWeight: "normal",
        lineThickness: 1,
        lineColor: "#BBBBBB",
        tickThickness: 1,
        tickColor: "#BBBBBB",
        gridThickness: 1,
        gridColor: "#BBBBBB",
        stripLines: [{ labelFontFamily: z, labelFontSize: w, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
        crosshair: {
          labelFontFamily: z,
          labelFontSize: w,
          labelFontColor: "#EEEEEE",
          labelFontWeight: "normal",
          labelBackgroundColor: "black",
          color: "black",
          thickness: 1,
          lineDashType: "dot"
        },
        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
      }], axisX2: [{ titleFontFamily: z, titleFontSize: fa, titleFontColor: "#666666", titleFontWeight: "normal", labelFontFamily: z, labelFontSize: w, labelFontColor: "#666666", labelFontWeight: "normal", lineThickness: 1, lineColor: "#BBBBBB", tickColor: "#BBBBBB", tickThickness: 1, gridThickness: 1, gridColor: "#BBBBBB", stripLines: [{
        labelFontFamily: z,
        labelFontSize: w,
        labelFontColor: "#FFA500",
        labelFontWeight: "normal",
        labelBackgroundColor: null,
        color: "#FFA500",
        thickness: 1
      }], crosshair: { labelFontFamily: z, labelFontSize: w, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], axisY: [{
        titleFontFamily: z,
        titleFontSize: fa,
        titleFontColor: "#666666",
        titleFontWeight: "normal",
        labelFontFamily: z,
        labelFontSize: w,
        labelFontColor: "#666666",
        labelFontWeight: "normal",
        lineThickness: 0,
        lineColor: "#BBBBBB",
        tickColor: "#BBBBBB",
        tickThickness: 1,
        gridThickness: 1,
        gridColor: "#BBBBBB",
        stripLines: [{ labelFontFamily: z, labelFontSize: w, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
        crosshair: { labelFontFamily: z, labelFontSize: w, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
        scaleBreaks: {
          type: "zigzag",
          spacing: "2%",
          lineColor: "#BBBBBB",
          lineThickness: 1,
          lineDashType: "solid"
        }
      }], axisY2: [{ titleFontFamily: z, titleFontSize: fa, titleFontColor: "#666666", titleFontWeight: "normal", labelFontFamily: z, labelFontSize: w, labelFontColor: "#666666", labelFontWeight: "normal", lineThickness: 0, lineColor: "#BBBBBB", tickColor: "#BBBBBB", tickThickness: 1, gridThickness: 1, gridColor: "#BBBBBB", stripLines: [{ labelFontFamily: z, labelFontSize: w, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }], crosshair: {
        labelFontFamily: z,
        labelFontSize: w,
        labelFontColor: "#EEEEEE",
        labelFontWeight: "normal",
        labelBackgroundColor: "black",
        color: "black",
        thickness: 1,
        lineDashType: "dot"
      }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" } }], legend: { fontFamily: z, fontSize: 14, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" }, toolTip: { fontFamily: z, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 }, toolbar: {
        itemBackgroundColor: "white",
        itemBackgroundColorOnHover: "#2196f3",
        buttonBorderColor: "#2196f3",
        buttonBorderThickness: 1,
        fontColor: "black",
        fontColorOnHover: "white"
      } };
      R = da = "#F5F5F5";
      E = "#FFFFFF";
      W = "#40BAF1";
      aa = "#F5F5F5";
      fa = 20;
      w = 14;
      Ga = {
        colorSet: "colorSet12",
        backgroundColor: "#2A2A2A",
        title: { fontFamily: Ga, fontSize: 32, fontColor: da, fontWeight: "normal", verticalAlign: "top", margin: 5 },
        subtitles: [{ fontFamily: Ga, fontSize: w, fontColor: da, fontWeight: "normal", verticalAlign: "top", margin: 5 }],
        toolbar: {
          itemBackgroundColor: "#666666",
          itemBackgroundColorOnHover: "#FF7372",
          buttonBorderColor: "#FF7372",
          buttonBorderThickness: 1,
          fontColor: "#F5F5F5",
          fontColorOnHover: "#F5F5F5"
        },
        data: [{ indexLabelFontFamily: z, indexLabelFontSize: w, indexLabelFontColor: R, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
        axisX: [{ titleFontFamily: z, titleFontSize: fa, titleFontColor: R, titleFontWeight: "normal", labelFontFamily: z, labelFontSize: w, labelFontColor: R, labelFontWeight: "normal", lineThickness: 1, lineColor: E, tickThickness: 1, tickColor: E, gridThickness: 0, gridColor: E, stripLines: [{
          labelFontFamily: z,
          labelFontSize: w,
          labelFontColor: "#FF7300",
          labelFontWeight: "normal",
          labelBackgroundColor: null,
          color: "#FF7300",
          thickness: 1
        }], crosshair: { labelFontFamily: z, labelFontSize: w, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: aa, color: W, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }],
        axisX2: [{
          titleFontFamily: z,
          titleFontSize: fa,
          titleFontColor: R,
          titleFontWeight: "normal",
          labelFontFamily: z,
          labelFontSize: w,
          labelFontColor: R,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: E,
          tickThickness: 1,
          tickColor: E,
          gridThickness: 0,
          gridColor: E,
          stripLines: [{ labelFontFamily: z, labelFontSize: w, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
          crosshair: { labelFontFamily: z, labelFontSize: w, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: aa, color: W, thickness: 1, lineDashType: "dash" },
          scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
        }],
        axisY: [{ titleFontFamily: z, titleFontSize: fa, titleFontColor: R, titleFontWeight: "normal", labelFontFamily: z, labelFontSize: w, labelFontColor: R, labelFontWeight: "normal", lineThickness: 1, lineColor: E, tickThickness: 1, tickColor: E, gridThickness: 1, gridColor: E, stripLines: [{ labelFontFamily: z, labelFontSize: w, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
          labelFontFamily: z,
          labelFontSize: w,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: aa,
          color: W,
          thickness: 1,
          lineDashType: "dash"
        }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }],
        axisY2: [{ titleFontFamily: z, titleFontSize: fa, titleFontColor: R, titleFontWeight: "normal", labelFontFamily: z, labelFontSize: w, labelFontColor: R, labelFontWeight: "normal", lineThickness: 1, lineColor: E, tickThickness: 1, tickColor: E, gridThickness: 1, gridColor: E, stripLines: [{
          labelFontFamily: z,
          labelFontSize: w,
          labelFontColor: "#FF7300",
          labelFontWeight: "normal",
          labelBackgroundColor: null,
          color: "#FF7300",
          thickness: 1
        }], crosshair: { labelFontFamily: z, labelFontSize: w, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: aa, color: W, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }],
        legend: { fontFamily: z, fontSize: 14, fontColor: da, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
        toolTip: {
          fontFamily: z,
          fontSize: 14,
          fontStyle: "normal",
          cornerRadius: 0,
          borderThickness: 1,
          fontColor: R,
          backgroundColor: "rgba(0, 0, 0, .7)"
        }
      };
      E = "#FFFFFF";
      R = da = "#FAFAFA";
      W = "#40BAF1";
      aa = "#F5F5F5";
      var fa = 20, w = 14, cb = { light1: Wa, light2: bb, dark1: Ga, dark2: {
        colorSet: "colorSet2",
        backgroundColor: "#32373A",
        title: { fontFamily: z, fontSize: 32, fontColor: da, fontWeight: "normal", verticalAlign: "top", margin: 5 },
        subtitles: [{ fontFamily: z, fontSize: w, fontColor: da, fontWeight: "normal", verticalAlign: "top", margin: 5 }],
        toolbar: {
          itemBackgroundColor: "#666666",
          itemBackgroundColorOnHover: "#FF7372",
          buttonBorderColor: "#FF7372",
          buttonBorderThickness: 1,
          fontColor: "#F5F5F5",
          fontColorOnHover: "#F5F5F5"
        },
        data: [{ indexLabelFontFamily: z, indexLabelFontSize: w, indexLabelFontColor: R, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
        axisX: [{ titleFontFamily: z, titleFontSize: fa, titleFontColor: R, titleFontWeight: "normal", labelFontFamily: z, labelFontSize: w, labelFontColor: R, labelFontWeight: "normal", lineThickness: 1, lineColor: E, tickThickness: 1, tickColor: E, gridThickness: 0, gridColor: E, stripLines: [{
          labelFontFamily: z,
          labelFontSize: w,
          labelFontColor: "#FF7300",
          labelFontWeight: "normal",
          labelBackgroundColor: null,
          color: "#FF7300",
          thickness: 1
        }], crosshair: { labelFontFamily: z, labelFontSize: w, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: aa, color: W, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }],
        axisX2: [{
          titleFontFamily: z,
          titleFontSize: fa,
          titleFontColor: R,
          titleFontWeight: "normal",
          labelFontFamily: z,
          labelFontSize: w,
          labelFontColor: R,
          labelFontWeight: "normal",
          lineThickness: 1,
          lineColor: E,
          tickThickness: 1,
          tickColor: E,
          gridThickness: 0,
          gridColor: E,
          stripLines: [{ labelFontFamily: z, labelFontSize: w, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
          crosshair: { labelFontFamily: z, labelFontSize: w, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: aa, color: W, thickness: 1, lineDashType: "dash" },
          scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
        }],
        axisY: [{ titleFontFamily: z, titleFontSize: fa, titleFontColor: R, titleFontWeight: "normal", labelFontFamily: z, labelFontSize: w, labelFontColor: R, labelFontWeight: "normal", lineThickness: 0, lineColor: E, tickThickness: 1, tickColor: E, gridThickness: 1, gridColor: E, stripLines: [{ labelFontFamily: z, labelFontSize: w, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }], crosshair: {
          labelFontFamily: z,
          labelFontSize: w,
          labelFontColor: "#000000",
          labelFontWeight: "normal",
          labelBackgroundColor: aa,
          color: W,
          thickness: 1,
          lineDashType: "dash"
        }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }],
        axisY2: [{ titleFontFamily: z, titleFontSize: fa, titleFontColor: R, titleFontWeight: "normal", labelFontFamily: z, labelFontSize: w, labelFontColor: R, labelFontWeight: "normal", lineThickness: 0, lineColor: E, tickThickness: 1, tickColor: E, gridThickness: 1, gridColor: E, stripLines: [{
          labelFontFamily: z,
          labelFontSize: w,
          labelFontColor: "#FF7300",
          labelFontWeight: "normal",
          labelBackgroundColor: null,
          color: "#FF7300",
          thickness: 1
        }], crosshair: { labelFontFamily: z, labelFontSize: w, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: aa, color: W, thickness: 1, lineDashType: "dash" }, scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" } }],
        legend: { fontFamily: z, fontSize: 14, fontColor: da, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
        toolTip: {
          fontFamily: z,
          fontSize: 14,
          fontStyle: "normal",
          cornerRadius: 0,
          borderThickness: 1,
          fontColor: R,
          backgroundColor: "rgba(0, 0, 0, .7)"
        }
      }, theme1: Wa, theme2: bb, theme3: Wa }, U = { numberDuration: 1, yearDuration: 314496e5, monthDuration: 2592e6, weekDuration: 6048e5, dayDuration: 864e5, hourDuration: 36e5, minuteDuration: 6e4, secondDuration: 1e3, millisecondDuration: 1, dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ") };
      (function() {
        xa.fSDec = function(h) {
          for (var p = "", m2 = 0; m2 < h.length; m2++)
            p += String.fromCharCode(Math.ceil(h.length / 57 / 5) ^ h.charCodeAt(m2));
          return p;
        };
        delete ra[xa.fSDec("Bi`su")][xa.fSDec("bsdehuIsdg")];
        xa.pro = { sCH: ra[xa.fSDec("Bi`su")][xa.fSDec("bsdehuIsdg")] };
      })();
      var gb = function() {
        var h = false;
        try {
          var p = Object.defineProperty && Object.defineProperty({}, "passive", { get: function() {
            h = true;
            return false;
          } });
          window.addEventListener && (window.addEventListener("test", null, p), window.removeEventListener("test", null, p));
        } catch (m2) {
          h = false;
        }
        return h;
      }(), Za = {}, ta = null, lb = function() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height));
      }, za = function(h) {
        h.width = 1;
        h.height = 1;
        h.getContext("2d") && h.getContext("2d").clearRect(0, 0, 1, 1);
      }, mb = function(h, p, m2) {
        p = Math.min(this.width, this.height);
        return Math.max("theme4" === this.theme ? 0 : 300 <= p ? 12 : 11, Math.round(p * (h / 400)));
      }, Da = function() {
        var h = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g, p = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), m2 = "Sun Mon Tue Wed Thu Fri Sat".split(" "), u2 = "January February March April May June July August September October November December".split(" "), ja = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), z2 = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, D = /[^-+\dA-Z]/g;
        return function(w2, I2, P) {
          var E2 = P ? P.days : p, Z2 = P ? P.months : u2, Q2 = P ? P.shortDays : m2, U2 = P ? P.shortMonths : ja;
          P = "";
          var Y2 = false;
          w2 = w2 && w2.getTime ? w2 : w2 ? new Date(w2) : /* @__PURE__ */ new Date();
          if (isNaN(w2))
            throw SyntaxError("invalid date");
          "UTC:" === I2.slice(0, 4) && (I2 = I2.slice(4), Y2 = true);
          P = Y2 ? "getUTC" : "get";
          var K2 = w2[P + "Date"](), O = w2[P + "Day"](), X = w2[P + "Month"](), a = w2[P + "FullYear"](), d = w2[P + "Hours"](), c = w2[P + "Minutes"](), b = w2[P + "Seconds"](), e = w2[P + "Milliseconds"](), g = Y2 ? 0 : w2.getTimezoneOffset();
          return P = I2.replace(h, function(q) {
            switch (q) {
              case "D":
                return K2;
              case "DD":
                return ea(K2, 2);
              case "DDD":
                return Q2[O];
              case "DDDD":
                return E2[O];
              case "M":
                return X + 1;
              case "MM":
                return ea(X + 1, 2);
              case "MMM":
                return U2[X];
              case "MMMM":
                return Z2[X];
              case "Y":
                return parseInt(String(a).slice(-2));
              case "YY":
                return ea(String(a).slice(-2), 2);
              case "YYY":
                return ea(
                  String(a).slice(-3),
                  3
                );
              case "YYYY":
                return ea(a, 4);
              case "h":
                return d % 12 || 12;
              case "hh":
                return ea(d % 12 || 12, 2);
              case "H":
                return d;
              case "HH":
                return ea(d, 2);
              case "m":
                return c;
              case "mm":
                return ea(c, 2);
              case "s":
                return b;
              case "ss":
                return ea(b, 2);
              case "f":
                return ea(String(e), 3).slice(0, 1);
              case "ff":
                return ea(String(e), 3).slice(0, 2);
              case "fff":
                return ea(String(e), 3).slice(0, 3);
              case "t":
                return 12 > d ? "a" : "p";
              case "tt":
                return 12 > d ? "am" : "pm";
              case "T":
                return 12 > d ? "A" : "P";
              case "TT":
                return 12 > d ? "AM" : "PM";
              case "K":
                return Y2 ? "UTC" : (String(w2).match(z2) || [""]).pop().replace(D, "");
              case "z":
                return (0 < g ? "-" : "+") + Math.floor(Math.abs(g) / 60);
              case "zz":
                return (0 < g ? "-" : "+") + ea(Math.floor(Math.abs(g) / 60), 2);
              case "zzz":
                return (0 < g ? "-" : "+") + ea(Math.floor(Math.abs(g) / 60), 2) + ea(Math.abs(g) % 60, 2);
              default:
                return q.slice(1, q.length - 1);
            }
          });
        };
      }(), nb = function(h) {
        var p = 0 > h;
        if (1 > Math.abs(h)) {
          var m2 = parseInt(h.toString().split("e-")[1]);
          m2 && (h = (p ? -1 * h : h) * Math.pow(10, m2 - 1), h = "0." + Array(m2).join("0") + h.toString().substring(2), h = p ? "-" + h : h);
        } else
          m2 = parseInt(h.toString().split("+")[1]), 20 < m2 && (m2 -= 20, h /= Math.pow(10, m2), h = h.toString() + Array(m2 + 1).join("0"));
        return String(h);
      }, ga = function(h, p, m2) {
        if (null === h)
          return "";
        if (!isFinite(h))
          return h;
        h = Number(h);
        var u2 = 0 > h ? true : false;
        u2 && (h *= -1);
        var z2 = m2 ? m2.decimalSeparator : ".", w2 = m2 ? m2.digitGroupSeparator : ",", D = "";
        p = String(p);
        var D = 1, I2 = m2 = "", E2 = -1, P = [], Z2 = [], Q2 = 0, U2 = 0, Y2 = 0, K2 = false, R2 = 0, I2 = p.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
        p = null;
        for (var O = 0; I2 && O < I2.length; O++)
          if (p = I2[O], "." === p && 0 > E2)
            E2 = O;
          else {
            if ("%" === p)
              D *= 100;
            else if ("‰" === p) {
              D *= 1e3;
              continue;
            } else if ("," === p[0] && "." === p[p.length - 1]) {
              D /= Math.pow(1e3, p.length - 1);
              E2 = O + p.length - 1;
              continue;
            } else
              "E" !== p[0] && "e" !== p[0] || "0" !== p[p.length - 1] || (K2 = true);
            0 > E2 ? (P.push(p), "#" === p || "0" === p ? Q2++ : "," === p && Y2++) : (Z2.push(p), "#" !== p && "0" !== p || U2++);
          }
        K2 && (p = Math.floor(h), I2 = -Math.floor(Math.log(h) / Math.LN10 + 1), R2 = 0 === h ? 0 : 0 === p ? -(Q2 + I2) : nb(p).length - Q2, D /= Math.pow(10, R2));
        0 > E2 && (E2 = O);
        D = (h * D).toFixed(U2);
        p = D.split(".");
        D = (p[0] + "").split("");
        h = (p[1] + "").split("");
        D && "0" === D[0] && D.shift();
        for (K2 = I2 = O = U2 = E2 = 0; 0 < P.length; )
          if (p = P.pop(), "#" === p || "0" === p)
            if (E2++, E2 === Q2) {
              var X = D, D = [];
              if ("0" === p)
                for (p = Q2 - U2 - (X ? X.length : 0); 0 < p; )
                  X.unshift("0"), p--;
              for (; 0 < X.length; )
                m2 = X.pop() + m2, K2++, 0 === K2 % I2 && (O === Y2 && 0 < X.length) && (m2 = w2 + m2);
            } else
              0 < D.length ? (m2 = D.pop() + m2, U2++, K2++) : "0" === p && (m2 = "0" + m2, U2++, K2++), 0 === K2 % I2 && (O === Y2 && 0 < D.length) && (m2 = w2 + m2);
          else
            "E" !== p[0] && "e" !== p[0] || "0" !== p[p.length - 1] || !/[eE][+-]*[0]+/.test(p) ? "," === p ? (O++, I2 = K2, K2 = 0, 0 < D.length && (m2 = w2 + m2)) : m2 = 1 < p.length && ('"' === p[0] && '"' === p[p.length - 1] || "'" === p[0] && "'" === p[p.length - 1]) ? p.slice(1, p.length - 1) + m2 : p + m2 : (p = 0 > R2 ? p.replace(
              "+",
              ""
            ).replace("-", "") : p.replace("-", ""), m2 += p.replace(/[0]+/, function(a) {
              return ea(R2, a.length);
            }));
        w2 = "";
        for (P = false; 0 < Z2.length; )
          p = Z2.shift(), "#" === p || "0" === p ? 0 < h.length && 0 !== Number(h.join("")) ? (w2 += h.shift(), P = true) : "0" === p && (w2 += "0", P = true) : 1 < p.length && ('"' === p[0] && '"' === p[p.length - 1] || "'" === p[0] && "'" === p[p.length - 1]) ? w2 += p.slice(1, p.length - 1) : "E" !== p[0] && "e" !== p[0] || "0" !== p[p.length - 1] || !/[eE][+-]*[0]+/.test(p) ? w2 += p : (p = 0 > R2 ? p.replace("+", "").replace("-", "") : p.replace("-", ""), w2 += p.replace(/[0]+/, function(a) {
            return ea(
              R2,
              a.length
            );
          }));
        m2 += (P ? z2 : "") + w2;
        return u2 ? "-" + m2 : m2;
      }, Pa = function(h) {
        var p = 0, m2 = 0;
        h = h || window.event;
        h.offsetX || 0 === h.offsetX ? (p = h.offsetX, m2 = h.offsetY) : h.layerX || 0 == h.layerX ? (p = h.layerX, m2 = h.layerY) : (p = h.pageX - h.target.offsetLeft, m2 = h.pageY - h.target.offsetTop);
        return { x: p, y: m2 };
      }, ab = true, Sa = window.devicePixelRatio || 1, Oa = 1, na = ab ? Sa / Oa : 1, ba = function(h, p, m2, u2, w2, z2, D, I2, E2, P, Z2, U2, Q2) {
        "undefined" === typeof Q2 && (Q2 = 1);
        D = D || 0;
        I2 = I2 || "black";
        var K2 = 15 < u2 - p && 15 < w2 - m2 ? 8 : 0.35 * Math.min(u2 - p, w2 - m2);
        h.beginPath();
        h.moveTo(p, m2);
        h.save();
        h.fillStyle = z2;
        h.globalAlpha = Q2;
        h.fillRect(p, m2, u2 - p, w2 - m2);
        h.globalAlpha = 1;
        0 < D && (Q2 = 0 === D % 2 ? 0 : 0.5, h.beginPath(), h.lineWidth = D, h.strokeStyle = I2, h.moveTo(p, m2), h.rect(p - Q2, m2 - Q2, u2 - p + 2 * Q2, w2 - m2 + 2 * Q2), h.stroke());
        h.restore();
        true === E2 && (h.save(), h.beginPath(), h.moveTo(p, m2), h.lineTo(p + K2, m2 + K2), h.lineTo(u2 - K2, m2 + K2), h.lineTo(u2, m2), h.closePath(), D = h.createLinearGradient((u2 + p) / 2, m2 + K2, (u2 + p) / 2, m2), D.addColorStop(0, z2), D.addColorStop(1, "rgba(255, 255, 255, .4)"), h.fillStyle = D, h.fill(), h.restore());
        true === P && (h.save(), h.beginPath(), h.moveTo(p, w2), h.lineTo(p + K2, w2 - K2), h.lineTo(u2 - K2, w2 - K2), h.lineTo(u2, w2), h.closePath(), D = h.createLinearGradient((u2 + p) / 2, w2 - K2, (u2 + p) / 2, w2), D.addColorStop(0, z2), D.addColorStop(1, "rgba(255, 255, 255, .4)"), h.fillStyle = D, h.fill(), h.restore());
        true === Z2 && (h.save(), h.beginPath(), h.moveTo(p, m2), h.lineTo(p + K2, m2 + K2), h.lineTo(p + K2, w2 - K2), h.lineTo(p, w2), h.closePath(), D = h.createLinearGradient(p + K2, (w2 + m2) / 2, p, (w2 + m2) / 2), D.addColorStop(0, z2), D.addColorStop(1, "rgba(255, 255, 255, 0.1)"), h.fillStyle = D, h.fill(), h.restore());
        true === U2 && (h.save(), h.beginPath(), h.moveTo(
          u2,
          m2
        ), h.lineTo(u2 - K2, m2 + K2), h.lineTo(u2 - K2, w2 - K2), h.lineTo(u2, w2), D = h.createLinearGradient(u2 - K2, (w2 + m2) / 2, u2, (w2 + m2) / 2), D.addColorStop(0, z2), D.addColorStop(1, "rgba(255, 255, 255, 0.1)"), h.fillStyle = D, D.addColorStop(0, z2), D.addColorStop(1, "rgba(255, 255, 255, 0.1)"), h.fillStyle = D, h.fill(), h.closePath(), h.restore());
      }, ka = function(h) {
        for (var m2 = "", u2 = 0; u2 < h.length; u2++)
          m2 += String.fromCharCode(Math.ceil(h.length / 57 / 5) ^ h.charCodeAt(u2));
        return m2;
      }, jb = window && (window[ka("mnb`uhno")] && window[ka("mnb`uhno")].href && window[ka("mnb`uhno")].href.indexOf && (-1 !== window[ka("mnb`uhno")].href.indexOf(ka("b`ow`rkr/bnl")) || -1 !== window[ka("mnb`uhno")].href.indexOf(ka("gdonqhy/bnl")) || -1 !== window[ka("mnb`uhno")].href.indexOf(ka("gheemd")))) && -1 === window[ka("mnb`uhno")].href.indexOf(ka("gheemd")), kb = {
        reset: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg==" },
        pan: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC" },
        zoom: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII=" },
        menu: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC" }
      };
      K.prototype.setOptions = function(h, m2) {
        if (ra[this._defaultsKey]) {
          var u2 = ra[this._defaultsKey], w2;
          for (w2 in u2)
            "publicProperties" !== w2 && u2.hasOwnProperty(w2) && (this[w2] = h && w2 in h ? h[w2] : m2 && w2 in m2 ? m2[w2] : u2[w2]);
        } else
          Ia && window.console && console.log("defaults not set");
      };
      K.prototype.get = function(h) {
        var m2 = ra[this._defaultsKey];
        if ("options" === h)
          return this.options && this.options._isPlaceholder ? null : this.options;
        if (m2.hasOwnProperty(h) || m2.publicProperties && m2.publicProperties.hasOwnProperty(h))
          return this[h];
        window.console && window.console.log('Property "' + h + `" doesn't exist. Please check for typo.`);
      };
      K.prototype.set = function(h, m2, u2) {
        u2 = "undefined" === typeof u2 ? true : u2;
        var w2 = ra[this._defaultsKey];
        if ("options" === h)
          this.createUserOptions(m2);
        else if (w2.hasOwnProperty(h) || w2.publicProperties && w2.publicProperties.hasOwnProperty(h) && "readWrite" === w2.publicProperties[h])
          this.options._isPlaceholder && this.createUserOptions(), this.options[h] = m2;
        else {
          window.console && (w2.publicProperties && w2.publicProperties.hasOwnProperty(h) && "readOnly" === w2.publicProperties[h] ? window.console.log('Property "' + h + '" is read-only.') : window.console.log('Property "' + h + `" doesn't exist. Please check for typo.`));
          return;
        }
        u2 && (this.stockChart || this.chart || this).render();
      };
      K.prototype.addTo = function(h, m2, u2, w2) {
        w2 = "undefined" === typeof w2 ? true : w2;
        var z2 = ra[this._defaultsKey];
        z2.hasOwnProperty(h) || z2.publicProperties && z2.publicProperties.hasOwnProperty(h) && "readWrite" === z2.publicProperties[h] ? (this.options._isPlaceholder && this.createUserOptions(), "undefined" === typeof this.options[h] && (this.options[h] = []), h = this.options[h], u2 = "undefined" === typeof u2 || null === u2 ? h.length : u2, h.splice(u2, 0, m2), w2 && (this.stockChart || this.chart || this).render()) : window.console && (z2.publicProperties && z2.publicProperties.hasOwnProperty(h) && "readOnly" === z2.publicProperties[h] ? window.console.log('Property "' + h + '" is read-only.') : window.console.log('Property "' + h + `" doesn't exist. Please check for typo.`));
      };
      K.prototype.createUserOptions = function(h) {
        if ("undefined" !== typeof h || this.options._isPlaceholder)
          if (this.parent.options._isPlaceholder && this.parent.createUserOptions(), this.isOptionsInArray) {
            this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
            var m2 = this.parent.options[this.optionsName], u2 = m2.length;
            this.options._isPlaceholder || (Ea(m2), u2 = m2.indexOf(this.options));
            this.options = "undefined" === typeof h ? {} : h;
            m2[u2] = this.options;
          } else
            this.options = "undefined" === typeof h ? {} : h, h = this.parent.options, this.optionsName ? m2 = this.optionsName : (m2 = this._defaultsKey) && 0 !== m2.length ? (u2 = m2.charAt(0).toLowerCase(), 1 < m2.length && (u2 = u2.concat(m2.slice(1))), m2 = u2) : m2 = void 0, h[m2] = this.options;
      };
      K.prototype.remove = function(h) {
        h = "undefined" === typeof h ? true : h;
        if (this.isOptionsInArray) {
          var m2 = this.parent.options[this.optionsName];
          Ea(m2);
          var u2 = m2.indexOf(this.options);
          0 <= u2 && m2.splice(u2, 1);
        } else
          delete this.parent.options[this.optionsName];
        h && (this.stockChart || this.chart || this).render();
      };
      K.prototype.updateOption = function(h) {
        !ra[this._defaultsKey] && (Ia && window.console) && console.log("defaults not set");
        var p = ra[this._defaultsKey], u2 = {}, w2 = this[h], z2 = this._themeOptionsKey, I2 = this._index;
        this.theme && m(this.parent) && m(z2) && m(I2) ? u2 = m(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[z2]) && (null === I2 ? u2 = this.parent.themeOptions[z2] : 0 < this.parent.themeOptions[z2].length && (u2 = Math.min(this.parent.themeOptions[z2].length - 1, I2), u2 = this.parent.themeOptions[z2][u2]));
        this.themeOptions = u2;
        h in p && (w2 = h in this.options ? this.options[h] : u2 && h in u2 ? u2[h] : p[h]);
        if (w2 === this[h])
          return false;
        this[h] = w2;
        return true;
      };
      K.prototype.trackChanges = function(h) {
        if (!this.sessionVariables)
          throw "Session Variable Store not set";
        this.sessionVariables[h] = this.options[h];
      };
      K.prototype.isBeingTracked = function(h) {
        this.options._oldOptions || (this.options._oldOptions = {});
        return this.options._oldOptions[h] ? true : false;
      };
      K.prototype.hasOptionChanged = function(h) {
        if (!this.sessionVariables)
          throw "Session Variable Store not set";
        return this.sessionVariables[h] !== this.options[h];
      };
      K.prototype.addEventListener = function(h, m2, u2) {
        h && m2 && (this._eventListeners[h] = this._eventListeners[h] || [], this._eventListeners[h].push({ context: u2 || this, eventHandler: m2 }));
      };
      K.prototype.removeEventListener = function(h, m2) {
        if (h && m2 && this._eventListeners[h]) {
          for (var u2 = this._eventListeners[h], w2 = 0; w2 < u2.length; w2++)
            if (u2[w2].eventHandler === m2) {
              u2[w2].splice(w2, 1);
              break;
            }
        }
      };
      K.prototype.removeAllEventListeners = function() {
        this._eventListeners = [];
      };
      K.prototype.dispatchEvent = function(h, m2, u2) {
        if (h && this._eventListeners[h]) {
          m2 = m2 || {};
          for (var w2 = this._eventListeners[h], z2 = 0; z2 < w2.length; z2++)
            w2[z2].eventHandler.call(
              w2[z2].context,
              m2
            );
        }
        "function" === typeof this[h] && this[h].call(u2 || this.chart, m2);
      };
      Fa.prototype.registerSpace = function(h, m2) {
        "top" === h ? this._topOccupied += m2.height : "bottom" === h ? this._bottomOccupied += m2.height : "left" === h ? this._leftOccupied += m2.width : "right" === h && (this._rightOccupied += m2.width);
      };
      Fa.prototype.unRegisterSpace = function(h, m2) {
        "top" === h ? this._topOccupied -= m2.height : "bottom" === h ? this._bottomOccupied -= m2.height : "left" === h ? this._leftOccupied -= m2.width : "right" === h && (this._rightOccupied -= m2.width);
      };
      Fa.prototype.getFreeSpace = function() {
        return { x1: this._x1 + this._leftOccupied, y1: this._y1 + this._topOccupied, x2: this._x2 - this._rightOccupied, y2: this._y2 - this._bottomOccupied, width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied, height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied };
      };
      Fa.prototype.reset = function() {
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
      };
      qa(la, K);
      la.prototype._initialize = function() {
        m(this.padding) || "object" !== typeof this.padding ? this.topPadding = this.rightPadding = this.bottomPadding = this.leftPadding = Number(this.padding) | 0 : (this.topPadding = m(this.padding.top) ? 0 : Number(this.padding.top) | 0, this.rightPadding = m(this.padding.right) ? 0 : Number(this.padding.right) | 0, this.bottomPadding = m(this.padding.bottom) ? 0 : Number(this.padding.bottom) | 0, this.leftPadding = m(this.padding.left) ? 0 : Number(this.padding.left) | 0);
      };
      la.prototype.render = function(h) {
        if (0 !== this.fontSize) {
          h && this.ctx.save();
          var m2 = this.ctx.font;
          this.ctx.textBaseline = this.textBaseline;
          var u2 = 0;
          this._isDirty && this.measureText(this.ctx);
          this.ctx.translate(this.x, this.y + u2);
          "middle" === this.textBaseline && (u2 = -this._lineHeight / 2);
          this.ctx.font = this._getFontString();
          this.ctx.rotate(Math.PI / 180 * this.angle);
          var w2 = 0, z2 = this.topPadding, I2 = null;
          this.ctx.roundRect || Aa(this.ctx);
          (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, u2, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
          this.ctx.fillStyle = this.fontColor;
          for (u2 = 0; u2 < this._wrappedText.lines.length; u2++) {
            I2 = this._wrappedText.lines[u2];
            if ("right" === this.horizontalAlign || "right" === this.textAlign)
              w2 = this.width - I2.width - this.rightPadding;
            else if ("left" === this.horizontalAlign || "left" === this.textAlign)
              w2 = this.leftPadding;
            else if ("center" === this.horizontalAlign || "center" === this.textAlign)
              w2 = (this.width - (this.leftPadding + this.rightPadding)) / 2 - I2.width / 2 + this.leftPadding;
            this.ctx.fillText(I2.text, w2, z2);
            z2 += I2.height;
          }
          this.ctx.font = m2;
          h && this.ctx.restore();
        }
      };
      la.prototype.setText = function(h) {
        this.text = h;
        this._isDirty = true;
        this._wrappedText = null;
      };
      la.prototype.measureText = function() {
        this._lineHeight = Ya(this.fontFamily, this.fontSize, this.fontWeight);
        if (null === this.maxWidth)
          throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = false;
        return { width: this.width, height: this.height };
      };
      la.prototype._getLineWithWidth = function(h, m2, u2) {
        h = String(h);
        if (!h)
          return { text: "", width: 0 };
        var w2 = u2 = 0, z2 = h.length - 1, I2 = Infinity;
        for (this.ctx.font = this._getFontString(); w2 <= z2; ) {
          var I2 = Math.floor((w2 + z2) / 2), D = h.substr(0, I2 + 1);
          u2 = this.ctx.measureText(D).width;
          if (u2 < m2)
            w2 = I2 + 1;
          else if (u2 > m2)
            z2 = I2 - 1;
          else
            break;
        }
        u2 > m2 && 1 < D.length && (D = D.substr(0, D.length - 1), u2 = this.ctx.measureText(D).width);
        m2 = true;
        if (D.length === h.length || " " === h[D.length])
          m2 = false;
        m2 && (h = D.split(" "), 1 < h.length && h.pop(), D = h.join(" "), u2 = this.ctx.measureText(D).width);
        return { text: D, width: u2 };
      };
      la.prototype._wrapText = function() {
        var h = new String(Ha(String(this.text))), m2 = [], u2 = this.ctx.font, w2 = 0, z2 = 0;
        this.ctx.font = this._getFontString();
        if (0 === this.frontSize)
          z2 = w2 = 0;
        else
          for (; 0 < h.length; ) {
            var I2 = this.maxHeight - (this.topPadding + this.bottomPadding), D = this._getLineWithWidth(h, this.maxWidth - (this.leftPadding + this.rightPadding), false);
            D.height = this._lineHeight;
            m2.push(D);
            var K2 = z2, z2 = Math.max(z2, D.width), w2 = w2 + D.height, h = Ha(h.slice(D.text.length, h.length));
            I2 && w2 > I2 && (D = m2.pop(), w2 -= D.height, z2 = K2);
          }
        this._wrappedText = { lines: m2, width: z2, height: w2 };
        this.width = z2 + (this.leftPadding + this.rightPadding);
        this.height = w2 + (this.topPadding + this.bottomPadding);
        this.ctx.font = u2;
      };
      la.prototype._getFontString = function() {
        var h;
        h = this.fontStyle ? this.fontStyle + " " : "";
        h += this.fontWeight ? this.fontWeight + " " : "";
        h += this.fontSize ? this.fontSize + "px " : "";
        var m2 = this.fontFamily ? this.fontFamily + "" : "";
        !u && m2 && (m2 = m2.split(",")[0], "'" !== m2[0] && '"' !== m2[0] && (m2 = "'" + m2 + "'"));
        return h += m2;
      };
      qa(Ua, K);
      qa(Ba, K);
      Ba.prototype.setLayout = function() {
        if (this.text) {
          var h = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, p = h.layoutManager.getFreeSpace(), u2 = p.x1, w2 = p.y1, z2 = 0, I2 = 0, D = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 40 : 0, K2, E2;
          "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = p.width - 4 - D * ("center" === this.horizontalAlign ? 2 : 1)), I2 = 0.5 * p.height - this.margin - 2, z2 = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = p.height - 4), I2 = 0.5 * p.width - this.margin - 2) : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = p.width - 4), I2 = 0.5 * p.height - 4));
          var P;
          m(this.padding) || "number" !== typeof this.padding ? m(this.padding) || "object" !== typeof this.padding || (P = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0, P += this.padding.bottom ? this.padding.bottom : this.padding.top ? this.padding.top : 0) : P = 2 * this.padding;
          this.wrap || (I2 = Math.min(I2, 1.5 * this.fontSize + P));
          I2 = new la(this.ctx, {
            fontSize: this.fontSize,
            fontFamily: this.fontFamily,
            fontColor: this.fontColor,
            fontStyle: this.fontStyle,
            fontWeight: this.fontWeight,
            horizontalAlign: this.horizontalAlign,
            textAlign: this.horizontalAlign,
            verticalAlign: this.verticalAlign,
            borderColor: this.borderColor,
            borderThickness: this.borderThickness,
            backgroundColor: this.backgroundColor,
            maxWidth: this.maxWidth,
            maxHeight: I2,
            cornerRadius: this.cornerRadius,
            text: this.text,
            padding: this.padding,
            textBaseline: "middle"
          });
          P = I2.measureText();
          "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (w2 = p.y1 + 2 + this.fontSize / 2 + 4, E2 = "top") : "bottom" === this.verticalAlign && (w2 = p.y2 - 2 - P.height + this.fontSize / 2 + 4, E2 = "bottom"), "left" === this.horizontalAlign ? u2 = p.x1 + 2 : "center" === this.horizontalAlign ? u2 = p.x1 + p.width / 2 - P.width / 2 : "right" === this.horizontalAlign && (u2 = p.x2 - 2 - P.width - D), K2 = this.horizontalAlign, this.width = P.width, this.height = P.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (u2 = p.x1 + 2 + (this.fontSize / 2 + 4), w2 = p.y2 - 2 - (this.maxWidth / 2 - P.width / 2), z2 = -90, E2 = "left", this.width = P.height, this.height = P.width) : "right" === this.horizontalAlign ? (u2 = p.x2 - 2 - (this.fontSize / 2 + 4), w2 = p.y1 + 2 + (this.maxWidth / 2 - P.width / 2), z2 = 90, E2 = "right", this.width = P.height, this.height = P.width) : "center" === this.horizontalAlign && (w2 = h.y1 + (h.height / 2 - P.height / 2) + this.fontSize / 2 + 4, u2 = h.x1 + (h.width / 2 - P.width / 2), E2 = "center", this.width = P.width, this.height = P.height), K2 = "center");
          I2.x = u2;
          I2.y = w2;
          I2.angle = z2;
          I2.horizontalAlign = K2;
          this._textBlock = I2;
          h.layoutManager.registerSpace(E2, { width: this.width + ("left" === E2 || "right" === E2 ? this.margin + 2 : 0), height: this.height + ("top" === E2 || "bottom" === E2 ? this.margin + 2 : 0) });
          this.bounds = { x1: u2, y1: w2, x2: u2 + this.width, y2: w2 + this.height };
          this.ctx.textBaseline = "top";
        }
      };
      Ba.prototype.render = function() {
        this._textBlock && this._textBlock.render(true);
      };
      qa(Ja, K);
      Ja.prototype.setLayout = Ba.prototype.setLayout;
      Ja.prototype.render = Ba.prototype.render;
      Va.prototype.get = function(h, m2) {
        var u2 = null;
        0 < this.pool.length ? (u2 = this.pool.pop(), Na(u2, h, m2)) : u2 = wa(h, m2);
        return u2;
      };
      Va.prototype.release = function(h) {
        this.pool.push(h);
      };
      qa(Ka, K);
      var Qa = { addTheme: function(h, m2) {
        cb[h] = m2;
      }, addColorSet: function(h, m2) {
        Ca[h] = m2;
      }, addCultureInfo: function(h, m2) {
        La[h] = m2;
      }, formatNumber: function(h, m2, u2) {
        u2 = u2 || "en";
        if (La[u2])
          return ga(h, m2 || "#,##0.##", new Ka(u2));
        throw "Unknown Culture Name";
      }, formatDate: function(h, m2, u2) {
        u2 = u2 || "en";
        if (La[u2])
          return Da(h, m2 || "DD MMM YYYY", new Ka(u2));
        throw "Unknown Culture Name";
      } };
      "undefined" !== typeof module && "undefined" !== typeof module.exports ? module.exports = Qa : "function" === typeof define && define.amd ? define([], function() {
        return Qa;
      }) : (window.CanvasJS && window.console && window.console.log("CanvasJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."), window.CanvasJS = window.CanvasJS ? window.CanvasJS : Qa);
      z = Qa.Chart = function() {
        function h(a, d) {
          return a.x - d.x;
        }
        function p(a, d, c) {
          d = d || {};
          m(c) ? (this.predefinedThemes = cb, this.optionsName = this.parent = this.index = null) : (this.parent = c.parent, this.index = c.index, this.predefinedThemes = c.predefinedThemes, this.optionsName = c.optionsName, this.stockChart = c.stockChart, this.panel = a, this.isOptionsInArray = c.isOptionsInArray);
          this.theme = m(d.theme) || m(this.predefinedThemes[d.theme]) ? "light1" : d.theme;
          p.base.constructor.call(this, "Chart", this.optionsName, d, this.index, this.parent);
          var b = this;
          this._containerId = a;
          this._objectsInitialized = false;
          this.overlaidCanvasCtx = this.ctx = null;
          this._indexLabels = [];
          this._panTimerId = 0;
          this._lastTouchEventType = "";
          this._lastTouchData = null;
          this.isAnimating = false;
          this.renderCount = 0;
          this.disableToolTip = this.animatedRender = false;
          this.canvasPool = new Va();
          this.allDOMEventHandlers = [];
          this.panEnabled = false;
          this._defaultCursor = "default";
          this.plotArea = { canvas: null, ctx: null, x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
          this._dataInRenderedOrder = [];
          (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this.container.innerHTML = "", d = a = 0, a = this.options.width ? this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width, d = this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height, this.width = a, this.height = d, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this.selectedColorSet = "undefined" !== typeof Ca[this.colorSet] ? Ca[this.colorSet] : Ca.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), this._canvasJSContainer.style.position = "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", this._canvasJSContainer.style.direction = "ltr", u || (this._canvasJSContainer.style.height = "0px"), this.container.appendChild(this._canvasJSContainer), this.canvas = wa(a, d), this._preRenderCanvas = wa(a, d), this.canvas.style.position = "absolute", this.canvas.style.WebkitUserSelect = "none", this.canvas.style.MozUserSelect = "none", this.canvas.style.msUserSelect = "none", this.canvas.style.userSelect = "none", this.canvas.getContext && (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Aa(this.ctx), this._preRenderCtx = this._preRenderCanvas.getContext("2d"), this._preRenderCtx.textBaseline = "top", Aa(this._preRenderCtx), u ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = wa(a, d), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")), this.overlaidCanvas = wa(a, d), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.style.WebkitUserSelect = "none", this.overlaidCanvas.style.MozUserSelect = "none", this.overlaidCanvas.style.msUserSelect = "none", this.overlaidCanvas.style.userSelect = "none", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline = "top", Aa(this.overlaidCanvasCtx)), this._eventManager = new aa2(this), this.windowResizeHandler = Q(window, "resize", function() {
            b._updateSize() && b.render();
          }, this.allDOMEventHandlers), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), Y(this._toolBar, {
            position: "absolute",
            right: "1px",
            top: "1px"
          }), this._canvasJSContainer.appendChild(this._toolBar), this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height }, Q(this.overlaidCanvas, "click", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), Q(this.overlaidCanvas, "mousemove", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), Q(this.overlaidCanvas, "mouseup", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), Q(
            this.overlaidCanvas,
            "mousedown",
            function(a2) {
              b._mouseEventHandler(a2);
              ya(b._dropdownMenu);
            },
            this.allDOMEventHandlers
          ), Q(this.overlaidCanvas, "mouseout", function(a2) {
            b._mouseEventHandler(a2);
          }, this.allDOMEventHandlers), Q(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), Q(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), Q(
            this.overlaidCanvas,
            window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend",
            function(a2) {
              b._touchEventHandler(a2);
            },
            this.allDOMEventHandlers
          ), Q(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a2) {
            b._touchEventHandler(a2);
          }, this.allDOMEventHandlers), this.toolTip = new W2(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = { axisX: [], axisX2: [], axisY: [], axisY2: [] })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found');
        }
        function w2(a, d) {
          for (var c = [], b, e = 0; e < a.length; e++)
            if (0 == e)
              c.push(a[0]);
            else {
              var g, q, t;
              t = e - 1;
              g = 0 === t ? 0 : t - 1;
              q = t === a.length - 1 ? t : t + 1;
              b = Math.abs((a[q].x - a[g].x) / (0 === a[q].x - a[t].x ? 0.01 : a[q].x - a[t].x)) * (d - 1) / 2 + 1;
              var C = (a[q].x - a[g].x) / b;
              b = (a[q].y - a[g].y) / b;
              c[c.length] = a[t].x > a[g].x && 0 < C || a[t].x < a[g].x && 0 > C ? { x: a[t].x + C / 3, y: a[t].y + b / 3 } : { x: a[t].x, y: a[t].y + (1 === c.length ? 0 : b / 9) };
              t = e;
              g = 0 === t ? 0 : t - 1;
              q = t === a.length - 1 ? t : t + 1;
              b = Math.abs((a[q].x - a[g].x) / (0 === a[t].x - a[g].x ? 0.01 : a[t].x - a[g].x)) * (d - 1) / 2 + 1;
              C = (a[q].x - a[g].x) / b;
              b = (a[q].y - a[g].y) / b;
              c[c.length] = a[t].x > a[g].x && 0 < C || a[t].x < a[g].x && 0 > C ? { x: a[t].x - C / 3, y: a[t].y - b / 3 } : { x: a[t].x, y: a[t].y - b / 9 };
              c[c.length] = a[e];
            }
          return c;
        }
        function z2(a, d, c, b, e, g, q, t, C, k) {
          var l = 0;
          k ? (q.color = g, t.color = g) : k = 1;
          l = C ? Math.abs(e - c) : Math.abs(b - d);
          l = 0 < q.trimLength ? Math.abs(l * q.trimLength / 100) : Math.abs(l - q.length);
          C ? (c += l / 2, e -= l / 2) : (d += l / 2, b -= l / 2);
          var l = 1 === Math.round(q.thickness) % 2 ? 0.5 : 0, n = 1 === Math.round(t.thickness) % 2 ? 0.5 : 0;
          a.save();
          a.globalAlpha = k;
          a.strokeStyle = t.color || g;
          a.lineWidth = t.thickness || 2;
          a.setLineDash && a.setLineDash(I(t.dashType, t.thickness));
          a.beginPath();
          C && 0 < t.thickness ? (a.moveTo(b - q.thickness / 2, Math.round((c + e) / 2) - n), a.lineTo(d + q.thickness / 2, Math.round((c + e) / 2) - n)) : 0 < t.thickness && (a.moveTo(Math.round((d + b) / 2) - n, c + q.thickness / 2), a.lineTo(Math.round((d + b) / 2) - n, e - q.thickness / 2));
          a.stroke();
          a.strokeStyle = q.color || g;
          a.lineWidth = q.thickness || 2;
          a.setLineDash && a.setLineDash(I(q.dashType, q.thickness));
          a.beginPath();
          C && 0 < q.thickness ? (a.moveTo(b - l, c), a.lineTo(b - l, e), a.moveTo(d + l, c), a.lineTo(d + l, e)) : 0 < q.thickness && (a.moveTo(d, c + l), a.lineTo(b, c + l), a.moveTo(d, e - l), a.lineTo(b, e - l));
          a.stroke();
          a.restore();
        }
        function E2(a, d) {
          E2.base.constructor.call(this, "Legend", "legend", d, null, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = this.chart.ctx;
          this.ghostCtx = this.chart._eventManager.ghostCtx;
          this.items = [];
          this.optionsName = "legend";
          this.height = this.width = 0;
          this.orientation = null;
          this.dataSeries = [];
          this.bounds = { x1: null, y1: null, x2: null, y2: null };
          "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
          this.lineHeight = Ya(this.fontFamily, this.fontSize, this.fontWeight);
          this.horizontalSpacing = this.fontSize;
        }
        function R2(a, d, c, b) {
          R2.base.constructor.call(this, "DataSeries", "data", d, c, a);
          this.chart = a;
          this.canvas = a.canvas;
          this._ctx = a.canvas.ctx;
          this.index = c;
          this.noDataPointsInPlotArea = 0;
          this.id = b;
          this.chart._eventManager.objectMap[b] = { id: b, objectType: "dataSeries", dataSeriesIndex: c };
          a = d.dataPoints ? d.dataPoints.length : 0;
          this.dataPointEOs = [];
          for (d = 0; d < a; d++)
            this.dataPointEOs[d] = {};
          this.dataPointIds = [];
          this.plotUnit = [];
          this.axisY = this.axisX = null;
          this.optionsName = "data";
          this.isOptionsInArray = true;
          null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity = 1);
          this.axisPlacement = this.getDefaultAxisPlacement();
          "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize));
        }
        function D(a, d, c, b, e, g) {
          D.base.constructor.call(this, "Axis", d, c, b, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = a.ctx;
          this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
          this.labels = [];
          this.dataSeries = [];
          this._stripLineLabels = this._ticks = this._labels = null;
          this.dataInfo = { min: Infinity, max: -Infinity, viewPortMin: Infinity, viewPortMax: -Infinity, minDiff: Infinity };
          this.isOptionsInArray = true;
          "axisX" === e ? ("left" === g || "bottom" === g ? (this.optionsName = "axisX", m(this.chart.sessionVariables.axisX[b]) && (this.chart.sessionVariables.axisX[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX[b]) : (this.optionsName = "axisX2", m(this.chart.sessionVariables.axisX2[b]) && (this.chart.sessionVariables.axisX2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[b]), this.options.interval || (this.intervalType = null)) : "left" === g || "bottom" === g ? (this.optionsName = "axisY", m(this.chart.sessionVariables.axisY[b]) && (this.chart.sessionVariables.axisY[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[b]) : (this.optionsName = "axisY2", m(this.chart.sessionVariables.axisY2[b]) && (this.chart.sessionVariables.axisY2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[b]);
          "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
          "undefined" === typeof this.options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
          this.type = e;
          "axisX" !== e || c && "undefined" !== typeof c.gridThickness || (this.gridThickness = 0);
          this._position = g;
          this.lineCoordinates = { x1: null, y1: null, x2: null, y2: null, width: null };
          this.labelAngle = (this.labelAngle % 360 + 360) % 360;
          90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
          this.options.scaleBreaks && (this.scaleBreaks = new fa2(this.chart, this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId, this));
          this.stripLines = [];
          if (this.options.stripLines && 0 < this.options.stripLines.length)
            for (a = 0; a < this.options.stripLines.length; a++)
              this.stripLines.push(new P(this.chart, this.options.stripLines[a], a, ++this.chart._eventManager.lastObjectId, this));
          this.options.crosshair && (this.crosshair = new ea2(
            this.chart,
            this.options.crosshair,
            this
          ));
          this._titleTextBlock = null;
          this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum = null);
          this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
          this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
          this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
          null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
          null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
          this.trackChanges("viewportMinimum");
          this.trackChanges("viewportMaximum");
        }
        function fa2(a, d, c, b) {
          fa2.base.constructor.call(this, "ScaleBreaks", "scaleBreaks", d, null, b);
          this.id = c;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.axis = b;
          this.optionsName = "scaleBreaks";
          this.isOptionsInArray = false;
          this._appliedBreaks = [];
          this.customBreaks = [];
          this.autoBreaks = [];
          "string" === typeof this.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 8 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.spacing && (this.spacing = 8);
          this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
          if (this.options.customBreaks && 0 < this.options.customBreaks.length) {
            for (a = 0; a < this.options.customBreaks.length; a++)
              this.customBreaks.push(new da2(this.chart, "customBreaks", this.options.customBreaks[a], a, ++this.chart._eventManager.lastObjectId, this)), "number" === typeof this.customBreaks[a].startValue && ("number" === typeof this.customBreaks[a].endValue && this.customBreaks[a].endValue !== this.customBreaks[a].startValue) && this._appliedBreaks.push(this.customBreaks[a]);
            this._appliedBreaks.sort(function(a2, b2) {
              return a2.startValue - b2.startValue;
            });
            for (a = 0; a < this._appliedBreaks.length - 1; a++)
              this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue && (this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue, this._appliedBreaks[a + 1].endValue), window.console && window.console.log("CanvasJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."), this._appliedBreaks.splice(a, 2), a--);
          }
        }
        function da2(a, d, c, b, e, g) {
          da2.base.constructor.call(this, "Break", d, c, b, g);
          this.id = e;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.scaleBreaks = g;
          this.optionsName = d;
          this.isOptionsInArray = true;
          this.type = c.type ? this.type : g.type;
          this.fillOpacity = m(c.fillOpacity) ? g.fillOpacity : this.fillOpacity;
          this.lineThickness = m(c.lineThickness) ? g.lineThickness : this.lineThickness;
          this.color = c.color ? this.color : g.color;
          this.lineColor = c.lineColor ? this.lineColor : g.lineColor;
          this.lineDashType = c.lineDashType ? this.lineDashType : g.lineDashType;
          !m(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
          !m(this.endValue) && this.endValue.getTime && (this.endValue = this.endValue.getTime());
          "number" === typeof this.startValue && ("number" === typeof this.endValue && this.endValue < this.startValue) && (a = this.startValue, this.startValue = this.endValue, this.endValue = a);
          this.spacing = "undefined" === typeof c.spacing ? g.spacing : c.spacing;
          "string" === typeof this.options.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.options.spacing && (this.spacing = g.spacing);
          this.size = g.parent.logarithmic ? 1 : 0;
        }
        function P(a, d, c, b, e) {
          P.base.constructor.call(this, "StripLine", "stripLines", d, c, e);
          this.id = b;
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.label = this.label;
          this.axis = e;
          this.optionsName = "stripLines";
          this.isOptionsInArray = true;
          this._thicknessType = "pixel";
          null !== this.startValue && null !== this.endValue && (this.value = e.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this._thicknessType = null);
        }
        function ea2(a, d, c) {
          ea2.base.constructor.call(this, "Crosshair", "crosshair", d, null, c);
          this.chart = a;
          this.ctx = this.chart.ctx;
          this.axis = c;
          this.optionsName = "crosshair";
          this._thicknessType = "pixel";
        }
        function W2(a, d) {
          W2.base.constructor.call(this, "ToolTip", "toolTip", d, null, a);
          this.chart = a;
          this.canvas = a.canvas;
          this.ctx = this.chart.ctx;
          this.currentDataPointIndex = this.currentSeriesIndex = -1;
          this._prevY = this._prevX = NaN;
          this.containerTransitionDuration = 0.1;
          this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
          this.optionsName = "toolTip";
          this._initialize();
        }
        function aa2(a) {
          this.chart = a;
          this.lastObjectId = 0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.previousDataPointEventObject = null;
          this.ghostCanvas = wa(this.chart.width, this.chart.height, true);
          this.ghostCtx = this.ghostCanvas.getContext("2d");
          this.mouseoveredObjectMaps = [];
        }
        function ka2(a) {
          this.chart = a;
          this.ctx = this.chart.plotArea.ctx;
          this.animations = [];
          this.animationRequestId = null;
        }
        qa(p, K);
        p.prototype.destroy = function() {
          var a = this.allDOMEventHandlers;
          this._animator && this._animator.cancelAllAnimations();
          this._panTimerId && clearTimeout(this._panTimerId);
          for (var d = 0; d < a.length; d++) {
            var c = a[d][0], b = a[d][1], e = a[d][2], g = a[d][3], g = g || false;
            c.removeEventListener ? c.removeEventListener(b, e, g) : c.detachEvent && c.detachEvent("on" + b, e);
          }
          this.allDOMEventHandlers = [];
          for (this.removeAllEventListeners(); this._canvasJSContainer && this._canvasJSContainer.hasChildNodes(); )
            this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
          for (; this.container && this.container.hasChildNodes(); )
            this.container.removeChild(this.container.lastChild);
          for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes(); )
            this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
          this.container = this._canvasJSContainer = null;
          this.toolTip.container = null;
          this.canvas && za(this.canvas);
          this.overlaidCanvas && za(this.overlaidCanvas);
          this._preRenderCanvas && za(this._preRenderCanvas);
          this._breaksCanvas && za(this._breaksCanvas);
          this._eventManager && this._eventManager.ghostCanvas && za(this._eventManager.ghostCanvas);
          this._toolBar = this._dropdownMenu = this._menuButton = this._resetButton = this._zoomButton = null;
        };
        p.prototype._updateOptions = function() {
          var a = this;
          this.updateOption("width");
          this.updateOption("height");
          this.updateOption("dataPointWidth");
          this.updateOption("dataPointMinWidth");
          this.updateOption("dataPointMaxWidth");
          this.updateOption("interactivityEnabled");
          this.updateOption("theme");
          this.updateOption("colorSet") && (this.selectedColorSet = "undefined" !== typeof Ca[this.colorSet] ? Ca[this.colorSet] : Ca.colorSet1);
          this.updateOption("backgroundColor");
          this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
          this.updateOption("culture");
          this._cultureInfo = new Ka(this.options.culture);
          this.updateOption("animationEnabled");
          this.animationEnabled = this.animationEnabled && u;
          this.updateOption("animationDuration");
          this.updateOption("rangeChanging");
          this.updateOption("rangeChanged");
          this.updateOption("exportEnabled");
          this.updateOption("exportFileName");
          this.updateOption("zoomType");
          this.toolbar = new Ua(this, this.options.toolbar);
          if (this.options.zoomEnabled || this.panEnabled) {
            if (this._zoomButton)
              Y(this._zoomButton, {
                borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor,
                backgroundColor: a.toolbar.itemBackgroundColor,
                color: a.toolbar.fontColor
              }), ua(this, this._zoomButton, "zoom");
            else {
              var d = false;
              ya(this._zoomButton = document.createElement("button"));
              ua(this, this._zoomButton, "pan");
              this._toolBar.appendChild(this._zoomButton);
              this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor;
              Q(this._zoomButton, "touchstart", function(a2) {
                d = true;
              }, this.allDOMEventHandlers);
              Q(this._zoomButton, "click", function() {
                a.zoomEnabled ? (a.zoomEnabled = false, a.panEnabled = true, ua(a, a._zoomButton, "zoom")) : (a.zoomEnabled = true, a.panEnabled = false, ua(a, a._zoomButton, "pan"));
                a.render();
              }, this.allDOMEventHandlers);
              Q(this._zoomButton, "mousemove", function() {
                d ? d = false : (Y(a._zoomButton, { backgroundColor: a.toolbar.itemBackgroundColorOnHover, color: a.toolbar.fontColorOnHover, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && Y(a._zoomButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
              }, this.allDOMEventHandlers);
              Q(this._zoomButton, "mouseout", function() {
                d || (Y(
                  a._zoomButton,
                  { backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }
                ), 0 >= navigator.userAgent.search("MSIE") && Y(a._zoomButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
              }, this.allDOMEventHandlers);
            }
            this._resetButton ? (Y(this._resetButton, { borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor }), this._resetButton.title = this._cultureInfo.resetText) : (d = false, ya(this._resetButton = document.createElement("button")), ua(this, this._resetButton, "reset"), this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor, this._toolBar.appendChild(this._resetButton), Q(this._resetButton, "touchstart", function(a2) {
              d = true;
            }, this.allDOMEventHandlers), Q(this._resetButton, "click", function() {
              a.toolTip.hide();
              a.toolTip && a.toolTip.enabled && a.toolTip.dispatchEvent(
                "hidden",
                { chart: a, toolTip: a.toolTip },
                a.toolTip
              );
              a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = true, a.panEnabled = false, ua(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = false, a.panEnabled = false);
              if (a.sessionVariables.axisX)
                for (var b = 0; b < a.sessionVariables.axisX.length; b++)
                  a.sessionVariables.axisX[b].newViewportMinimum = null, a.sessionVariables.axisX[b].newViewportMaximum = null;
              if (a.sessionVariables.axisX2)
                for (b = 0; b < a.sessionVariables.axisX2.length; b++)
                  a.sessionVariables.axisX2[b].newViewportMinimum = null, a.sessionVariables.axisX2[b].newViewportMaximum = null;
              if (a.sessionVariables.axisY)
                for (b = 0; b < a.sessionVariables.axisY.length; b++)
                  a.sessionVariables.axisY[b].newViewportMinimum = null, a.sessionVariables.axisY[b].newViewportMaximum = null;
              if (a.sessionVariables.axisY2)
                for (b = 0; b < a.sessionVariables.axisY2.length; b++)
                  a.sessionVariables.axisY2[b].newViewportMinimum = null, a.sessionVariables.axisY2[b].newViewportMaximum = null;
              a.resetOverlayedCanvas();
              0 >= navigator.userAgent.search("MSIE") && Y(
                a._resetButton.childNodes[0],
                { WebkitFilter: "invert(0%)", filter: "invert(0%)" }
              );
              ya(a._zoomButton, a._resetButton);
              a.stockChart && (a.stockChart._rangeEventParameter = { stockChart: a.stockChart, source: "chart", index: a.stockChart.charts.indexOf(a), minimum: null, maximum: null });
              a._dispatchRangeEvent("rangeChanging", "reset");
              a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanging", a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter, a.stockChart));
              a.render();
              a.syncCharts && a.syncCharts(null, null);
              a._dispatchRangeEvent(
                "rangeChanged",
                "reset"
              );
              a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanged", a.stockChart.dispatchEvent("rangeChanged", a.stockChart._rangeEventParameter, a.stockChart));
            }, this.allDOMEventHandlers), Q(
              this._resetButton,
              "mousemove",
              function() {
                d || (Y(a._resetButton, { backgroundColor: a.toolbar.itemBackgroundColorOnHover, color: a.toolbar.fontColorOnHover, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && Y(a._resetButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
              },
              this.allDOMEventHandlers
            ), Q(this._resetButton, "mouseout", function() {
              d || (Y(a._resetButton, { backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && Y(a._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
            }, this.allDOMEventHandlers), this.overlaidCanvas.style.cursor = a._defaultCursor);
            this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = true, this.zoomEnabled = false) : (this.zoomEnabled = true, this.panEnabled = false), Ma(a._zoomButton, a._resetButton)) : (this.zoomEnabled = true, this.panEnabled = false));
          } else
            this.panEnabled = this.zoomEnabled = false;
          hb(this);
          "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? ua(a, a._zoomButton, "zoom") : ua(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && ua(a, a._resetButton, "reset"));
          this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
          for (var c in this.toolTip.options)
            this.toolTip.options.hasOwnProperty(c) && this.toolTip.updateOption(c);
        };
        p.prototype._updateSize = function() {
          var a;
          a = [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas];
          var d = 0, c = 0;
          this.options.width ? d = this.width : this.width = d = 0 < this.container.clientWidth ? this.container.clientWidth : this.width;
          this.options.height ? c = this.height : this.height = c = 0 < this.container.clientHeight ? this.container.clientHeight : this.height;
          if (this.canvas.width !== d * na || this.canvas.height !== c * na) {
            for (var b = 0; b < a.length; b++)
              Na(a[b], d, c);
            this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height, width: this.width, height: this.height };
            a = true;
          } else
            a = false;
          return a;
        };
        p.prototype._initialize = function() {
          this.isNavigator = m(this.parent) || m(this.parent._defaultsKey) || "Navigator" !== this.parent._defaultsKey ? false : true;
          this._animator ? this._animator.cancelAllAnimations() : this._animator = new ka2(this);
          this.removeAllEventListeners();
          this.disableToolTip = false;
          this._axes = [];
          this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
          this._updateOptions();
          this.animatedRender = u && this.animationEnabled && 0 === this.renderCount;
          this._updateSize();
          this.clearCanvas();
          this.ctx.beginPath();
          this.axisX = [];
          this.axisX2 = [];
          this.axisY = [];
          this.axisY2 = [];
          this._indexLabels = [];
          this._dataInRenderedOrder = [];
          this._events = [];
          this._eventManager && this._eventManager.reset();
          this.plotInfo = { axisPlacement: null, plotTypes: [] };
          this.layoutManager = new Fa(0, 0, this.width, this.height, this.isNavigator ? 0 : 2);
          this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
          this.data = [];
          this.title = null;
          this.subtitles = [];
          var a = 0, d = null;
          if (this.options.data) {
            for (var c = 0; c < this.options.data.length; c++)
              if (a++, !this.options.data[c].type || 0 <= p._supportedChartTypes.indexOf(this.options.data[c].type)) {
                var b = new R2(this, this.options.data[c], a - 1, ++this._eventManager.lastObjectId);
                if (!m(b) && b.dataPoints) {
                  for (var e = 0; e < b.dataPoints.length; e++)
                    if (b.dataPoints[e].x && b.dataPoints[e].x.getTime) {
                      b.xValueType = "dateTime";
                      break;
                    }
                }
                "error" === b.type && (b.linkedDataSeriesIndex = m(this.options.data[c].linkedDataSeriesIndex) ? c - 1 : this.options.data[c].linkedDataSeriesIndex, 0 > b.linkedDataSeriesIndex || b.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof b.linkedDataSeriesIndex || "error" === this.options.data[b.linkedDataSeriesIndex].type) && (b.linkedDataSeriesIndex = null);
                null === b.name && (b.name = "DataSeries " + a);
                null === b.color ? 1 < this.options.data.length ? (b._colorSet = [this.selectedColorSet[b.index % this.selectedColorSet.length]], b.color = this.selectedColorSet[b.index % this.selectedColorSet.length]) : b._colorSet = "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "candlestick" === b.type || "ohlc" === b.type || "waterfall" === b.type || "boxAndWhisker" === b.type ? [this.selectedColorSet[0]] : this.selectedColorSet : b._colorSet = [b.color];
                null === b.markerSize && (("line" === b.type || "stepLine" === b.type || "spline" === b.type || 0 <= b.type.toLowerCase().indexOf("area")) && b.dataPoints && b.dataPoints.length < this.width / 16 || "scatter" === b.type) && (b.markerSize = 8);
                "bubble" !== b.type && "scatter" !== b.type || !b.dataPoints || (b.dataPoints.some ? b.dataPoints.some(function(a2) {
                  return a2.x;
                }) && b.dataPoints.sort(h) : b.dataPoints.sort(h));
                this.data.push(b);
                var e = b.axisPlacement, d = d || e, g;
                "normal" === e ? "xySwapped" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + b.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === e ? "normal" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + b.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === e ? "normal" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + b.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? g = 'You cannot combine "' + b.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") : null === e && "none" === this.plotInfo.axisPlacement && (g = 'You cannot combine "' + b.type + '" with pie chart');
                if (g && window.console) {
                  window.console.log(g);
                  return;
                }
              }
            for (c = 0; c < this.data.length; c++) {
              if ("none" == d && "error" === this.data[c].type && window.console) {
                window.console.log('You cannot combine "' + b.type + '" with error chart');
                return;
              }
              "error" === this.data[c].type && (this.data[c].axisPlacement = this.plotInfo.axisPlacement = d || "normal", this.data[c]._linkedSeries = null === this.data[c].linkedDataSeriesIndex ? null : this.data[this.data[c].linkedDataSeriesIndex]);
            }
          }
          this._objectsInitialized = true;
          this._plotAreaElements = [];
        };
        p._supportedChartTypes = Ea("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
        p.prototype.setLayout = function() {
          for (var a = this._plotAreaElements, d = 0; d < this.data.length; d++)
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
              if (!this.data[d].axisYType || "primary" === this.data[d].axisYType)
                if (this.options.axisY && 0 < this.options.axisY.length) {
                  if (!this.axisY.length)
                    for (var c = 0; c < this.options.axisY.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[c] = new D(this, "axisY", this.options.axisY[c], c, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[c] = new D(this, "axisY", this.options.axisY[c], c, "axisY", "bottom"));
                  this.data[d].axisY = this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0];
                  this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d]);
                } else
                  this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new D(
                    this,
                    "axisY",
                    this.options.axisY,
                    0,
                    "axisY",
                    "left"
                  )) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new D(this, "axisY", this.options.axisY, 0, "axisY", "bottom"))), this.data[d].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[d]);
              if ("secondary" === this.data[d].axisYType)
                if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                  if (!this.axisY2.length)
                    for (c = 0; c < this.options.axisY2.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[c] = new D(
                        this,
                        "axisY2",
                        this.options.axisY2[c],
                        c,
                        "axisY",
                        "right"
                      )) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[c] = new D(this, "axisY2", this.options.axisY2[c], c, "axisY", "top"));
                  this.data[d].axisY = this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0];
                  this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d]);
                } else
                  this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] = new D(this, "axisY2", this.options.axisY2, 0, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new D(this, "axisY2", this.options.axisY2, 0, "axisY", "top"))), this.data[d].axisY = this.axisY2[0], this.axisY2[0].dataSeries.push(this.data[d]);
              if (!this.data[d].axisXType || "primary" === this.data[d].axisXType)
                if (this.options.axisX && 0 < this.options.axisX.length) {
                  if (!this.axisX.length)
                    for (c = 0; c < this.options.axisX.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[c] = new D(this, "axisX", this.options.axisX[c], c, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[c] = new D(this, "axisX", this.options.axisX[c], c, "axisX", "left"));
                  this.data[d].axisX = this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0];
                  this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d]);
                } else
                  this.axisX.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[0] = new D(this, "axisX", this.options.axisX, 0, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new D(this, "axisX", this.options.axisX, 0, "axisX", "left"))), this.data[d].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[d]);
              if ("secondary" === this.data[d].axisXType)
                if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                  if (!this.axisX2.length)
                    for (c = 0; c < this.options.axisX2.length; c++)
                      "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[c] = new D(this, "axisX2", this.options.axisX2[c], c, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[c] = new D(this, "axisX2", this.options.axisX2[c], c, "axisX", "right"));
                  this.data[d].axisX = this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0];
                  this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d]);
                } else
                  this.axisX2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new D(this, "axisX2", this.options.axisX2, 0, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] = new D(this, "axisX2", this.options.axisX2, 0, "axisX", "right"))), this.data[d].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[d]);
            }
          if (this.axisY) {
            for (c = 1; c < this.axisY.length; c++)
              "undefined" === typeof this.axisY[c].options.gridThickness && (this.axisY[c].gridThickness = 0);
            for (c = 0; c < this.axisY.length - 1; c++)
              "undefined" === typeof this.axisY[c].options.margin && (this.axisY[c].margin = 10);
          }
          if (this.axisY2) {
            for (c = 1; c < this.axisY2.length; c++)
              "undefined" === typeof this.axisY2[c].options.gridThickness && (this.axisY2[c].gridThickness = 0);
            for (c = 0; c < this.axisY2.length - 1; c++)
              "undefined" === typeof this.axisY2[c].options.margin && (this.axisY2[c].margin = 10);
          }
          this.axisY && 0 < this.axisY.length && (this.axisY2 && 0 < this.axisY2.length) && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness = 0 : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
          if (this.axisX)
            for (c = 0; c < this.axisX.length; c++)
              "undefined" === typeof this.axisX[c].options.gridThickness && (this.axisX[c].gridThickness = 0);
          if (this.axisX2)
            for (c = 0; c < this.axisX2.length; c++)
              "undefined" === typeof this.axisX2[c].options.gridThickness && (this.axisX2[c].gridThickness = 0);
          this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness && "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
          c = false;
          if (0 < this._axes.length && this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled)) {
            for (d = 0; d < this._axes.length; d++)
              if (!m(this._axes[d].viewportMinimum) || !m(this._axes[d].viewportMaximum)) {
                c = true;
                break;
              }
          }
          c ? (Ma(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor) : (ya(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid transparent", this.options.zoomEnabled && (this.zoomEnabled = true, this.panEnabled = false));
          fb(this);
          this._processData();
          this.options.title && (this.title = new Ba(this, this.options.title), this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout());
          if (this.options.subtitles)
            for (d = 0; d < this.options.subtitles.length; d++)
              c = new Ja(this, this.options.subtitles[d], d), this.subtitles.push(c), c.dockInsidePlotArea ? a.push(c) : c.setLayout();
          this.legend = new E2(this, this.options.legend);
          for (d = 0; d < this.data.length; d++)
            (this.data[d].showInLegend || "pie" === this.data[d].type || "doughnut" === this.data[d].type || "funnel" === this.data[d].type || "pyramid" === this.data[d].type) && this.legend.dataSeries.push(this.data[d]);
          this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout();
          for (d = 0; d < this._axes.length; d++)
            if (this._axes[d].scaleBreaks && this._axes[d].scaleBreaks._appliedBreaks.length) {
              u ? (this._breaksCanvas = wa(this.width, this.height, true), this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas, this._breaksCanvasCtx = this.ctx);
              break;
            }
          this._preRenderCanvas = wa(this.width, this.height);
          this._preRenderCtx = this._preRenderCanvas.getContext("2d");
          "normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement || D.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
        };
        p.prototype.renderElements = function() {
          if (this.height) {
            var a = this._plotAreaElements;
            this.title && !this.title.dockInsidePlotArea && this.title.render();
            for (var d = 0; d < this.subtitles.length; d++)
              this.subtitles[d].dockInsidePlotArea || this.subtitles[d].render();
            this.legend.dockInsidePlotArea || this.legend.render();
            if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement)
              D.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement);
            else if ("none" === this.plotInfo.axisPlacement)
              this.preparePlotArea();
            else
              return;
            for (d = 0; d < a.length; d++)
              a[d].setLayout(), a[d].render();
            var c = [];
            if (this.animatedRender) {
              var b = wa(this.width, this.height);
              b.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height);
            }
            ib(this);
            var a = this.ctx.miterLimit, e;
            this.ctx.miterLimit = 3;
            u && this._breaksCanvas && (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height), this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx.globalCompositeOperation = "source-atop", this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), this._preRenderCtx.clearRect(0, 0, this.width, this.height));
            for (d = 0; d < this.plotInfo.plotTypes.length; d++)
              for (var g = this.plotInfo.plotTypes[d], q = 0; q < g.plotUnits.length; q++) {
                var t = g.plotUnits[q], C = null;
                t.targetCanvas && za(t.targetCanvas);
                t.targetCanvas = null;
                this.animatedRender && (t.targetCanvas = wa(this.width, this.height), t.targetCanvasCtx = t.targetCanvas.getContext("2d"), e = t.targetCanvasCtx.miterLimit, t.targetCanvasCtx.miterLimit = 3);
                "line" === t.type ? C = this.renderLine(t) : "stepLine" === t.type ? C = this.renderStepLine(t) : "spline" === t.type ? C = this.renderSpline(t) : "column" === t.type ? C = this.renderColumn(t) : "bar" === t.type ? C = this.renderBar(t) : "area" === t.type ? C = this.renderArea(t) : "stepArea" === t.type ? C = this.renderStepArea(t) : "splineArea" === t.type ? C = this.renderSplineArea(t) : "stackedColumn" === t.type ? C = this.renderStackedColumn(t) : "stackedColumn100" === t.type ? C = this.renderStackedColumn100(t) : "stackedBar" === t.type ? C = this.renderStackedBar(t) : "stackedBar100" === t.type ? C = this.renderStackedBar100(t) : "stackedArea" === t.type ? C = this.renderStackedArea(t) : "stackedArea100" === t.type ? C = this.renderStackedArea100(t) : "bubble" === t.type ? C = C = this.renderBubble(t) : "scatter" === t.type ? C = this.renderScatter(t) : "pie" === t.type ? this.renderPie(t) : "doughnut" === t.type ? this.renderPie(t) : "funnel" === t.type ? C = this.renderFunnel(t) : "pyramid" === t.type ? C = this.renderFunnel(t) : "candlestick" === t.type ? C = this.renderCandlestick(t) : "ohlc" === t.type ? C = this.renderCandlestick(t) : "rangeColumn" === t.type ? C = this.renderRangeColumn(t) : "error" === t.type ? C = this.renderError(t) : "rangeBar" === t.type ? C = this.renderRangeBar(t) : "rangeArea" === t.type ? C = this.renderRangeArea(t) : "rangeSplineArea" === t.type ? C = this.renderRangeSplineArea(t) : "waterfall" === t.type ? C = this.renderWaterfall(t) : "boxAndWhisker" === t.type && (C = this.renderBoxAndWhisker(t));
                for (var k = 0; k < t.dataSeriesIndexes.length; k++)
                  this._dataInRenderedOrder.push(this.data[t.dataSeriesIndexes[k]]);
                this.animatedRender && (t.targetCanvasCtx.miterLimit = e, C && c.push(C));
              }
            this.ctx.miterLimit = a;
            this.animatedRender && this._breaksCanvasCtx && c.push({ source: this._breaksCanvasCtx, dest: this.plotArea.ctx, animationCallback: O.fadeInAnimation, easingFunction: O.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 });
            this.animatedRender && 0 < this._indexLabels.length && (e = wa(this.width, this.height).getContext("2d"), Aa(e), c.push(this.renderIndexLabels(e)));
            var l = this;
            if (0 < c.length)
              l.disableToolTip = true, l._animator.animate(200, l.animationDuration, function(a2) {
                l.ctx.clearRect(0, 0, l.width, l.height);
                l.ctx.drawImage(b, 0, 0, Math.floor(l.width * na), Math.floor(l.height * na), 0, 0, l.width, l.height);
                for (var e2 = 0; e2 < c.length; e2++)
                  C = c[e2], 1 > a2 && "undefined" !== typeof C.startTimePercent ? a2 >= C.startTimePercent && C.animationCallback(
                    C.easingFunction(a2 - C.startTimePercent, 0, 1, 1 - C.startTimePercent),
                    C
                  ) : C.animationCallback(C.easingFunction(a2, 0, 1, 1), C);
                l.dispatchEvent("dataAnimationIterationEnd", { chart: l });
              }, function() {
                c = [];
                for (var a2 = 0; a2 < l.plotInfo.plotTypes.length; a2++)
                  for (var e2 = l.plotInfo.plotTypes[a2], d2 = 0; d2 < e2.plotUnits.length; d2++) {
                    var g2 = e2.plotUnits[d2];
                    g2.targetCanvas && za(g2.targetCanvas);
                    g2.targetCanvas = null;
                  }
                b = null;
                l.disableToolTip = false;
                l.dispatchEvent("dataAnimationEnd", { chart: l });
              });
            else {
              if (l._breaksCanvas)
                if (u)
                  l.plotArea.ctx.drawImage(l._breaksCanvas, 0, 0, this.width, this.height);
                else
                  for (k = 0; k < l._axes.length; k++)
                    l._axes[k].createMask();
              0 < l._indexLabels.length && l.renderIndexLabels();
              l.dispatchEvent("dataAnimationIterationEnd", { chart: l });
              l.dispatchEvent("dataAnimationEnd", { chart: l });
            }
            this.attachPlotAreaEventHandlers();
            this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || ya(this._zoomButton, this._resetButton);
            this.toolTip._updateToolTip();
            this.renderCount++;
            Ia && (l = this, setTimeout(function() {
              var a2 = document.getElementById("ghostCanvasCopy");
              a2 && (Na(a2, l.width, l.height), a2.getContext("2d").drawImage(
                l._eventManager.ghostCanvas,
                0,
                0
              ));
            }, 2e3));
            this._breaksCanvas && (delete this._breaksCanvas, delete this._breaksCanvasCtx);
            for (k = 0; k < this._axes.length; k++)
              this._axes[k].maskCanvas && (delete this._axes[k].maskCanvas, delete this._axes[k].maskCtx);
          }
        };
        p.prototype.render = function(a) {
          a && (this.options = a);
          this._initialize();
          this.setLayout();
          this.renderElements();
          this._preRenderCanvas && za(this._preRenderCanvas);
        };
        p.prototype.attachPlotAreaEventHandlers = function() {
          this.attachEvent({
            context: this,
            chart: this,
            mousedown: this._plotAreaMouseDown,
            mouseup: this._plotAreaMouseUp,
            mousemove: this._plotAreaMouseMove,
            cursor: this.panEnabled ? "move" : "default",
            capture: true,
            bounds: this.plotArea
          });
        };
        p.prototype.categoriseDataSeries = function() {
          for (var a = "", d = 0; d < this.data.length; d++)
            if (a = this.data[d], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= p._supportedChartTypes.indexOf(a.type)) {
              for (var c = null, b = false, e = null, g = false, q = 0; q < this.plotInfo.plotTypes.length; q++)
                if (this.plotInfo.plotTypes[q].type === a.type) {
                  b = true;
                  c = this.plotInfo.plotTypes[q];
                  break;
                }
              b || (c = {
                type: a.type,
                totalDataSeries: 0,
                plotUnits: []
              }, this.plotInfo.plotTypes.push(c));
              for (q = 0; q < c.plotUnits.length; q++)
                if (c.plotUnits[q].axisYType === a.axisYType && c.plotUnits[q].axisXType === a.axisXType && c.plotUnits[q].axisYIndex === a.axisYIndex && c.plotUnits[q].axisXIndex === a.axisXIndex) {
                  g = true;
                  e = c.plotUnits[q];
                  break;
                }
              g || (e = { type: a.type, previousDataSeriesCount: 0, index: c.plotUnits.length, plotType: c, axisXType: a.axisXType, axisYType: a.axisYType, axisYIndex: a.axisYIndex, axisXIndex: a.axisXIndex, axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0], axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0], dataSeriesIndexes: [], yTotals: [], yAbsTotals: [] }, c.plotUnits.push(e));
              c.totalDataSeries++;
              e.dataSeriesIndexes.push(d);
              a.plotUnit = e;
            }
          for (d = 0; d < this.plotInfo.plotTypes.length; d++)
            for (c = this.plotInfo.plotTypes[d], q = a = 0; q < c.plotUnits.length; q++)
              c.plotUnits[q].previousDataSeriesCount = a, a += c.plotUnits[q].dataSeriesIndexes.length;
        };
        p.prototype.assignIdToDataPoints = function() {
          for (var a = 0; a < this.data.length; a++) {
            var d = this.data[a];
            if (d.dataPoints)
              for (var c = d.dataPoints.length, b = 0; b < c; b++)
                d.dataPointIds[b] = ++this._eventManager.lastObjectId;
          }
        };
        p.prototype._processData = function() {
          this.assignIdToDataPoints();
          this.categoriseDataSeries();
          for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
            for (var d = this.plotInfo.plotTypes[a], c = 0; c < d.plotUnits.length; c++) {
              var b = d.plotUnits[c];
              "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type ? this._processMultiseriesPlotUnit(b) : "stackedColumn" === b.type || "stackedBar" === b.type || "stackedArea" === b.type ? this._processStackedPlotUnit(b) : "stackedColumn100" === b.type || "stackedBar100" === b.type || "stackedArea100" === b.type ? this._processStacked100PlotUnit(b) : "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? this._processMultiYPlotUnit(b) : "waterfall" === b.type && this._processSpecificPlotUnit(b);
            }
          this.calculateAutoBreaks();
        };
        p.prototype._processMultiseriesPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, g = false, q = 0; q < a.dataSeriesIndexes.length; q++) {
              var t = this.data[a.dataSeriesIndexes[q]], C = 0, k = false, l = false, n;
              if ("normal" === t.axisPlacement || "xySwapped" === t.axisPlacement)
                var r = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, f = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (t.dataPoints[C].x && t.dataPoints[C].x.getTime || "dateTime" === t.xValueType)
                g = true;
              for (C = 0; C < t.dataPoints.length; C++) {
                "undefined" === typeof t.dataPoints[C].x && (t.dataPoints[C].x = C + (a.axisX.logarithmic ? 1 : 0));
                t.dataPoints[C].x.getTime ? (g = true, b = t.dataPoints[C].x.getTime()) : b = t.dataPoints[C].x;
                e = t.dataPoints[C].y;
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                e < d.min && "number" === typeof e && (d.min = e);
                e > d.max && "number" === typeof e && (d.max = e);
                if (0 < C) {
                  if (a.axisX.logarithmic) {
                    var V = b / t.dataPoints[C - 1].x;
                    1 > V && (V = 1 / V);
                    c.minDiff > V && 1 !== V && (c.minDiff = V);
                  } else
                    V = b - t.dataPoints[C - 1].x, 0 > V && (V *= -1), c.minDiff > V && 0 !== V && (c.minDiff = V);
                  null !== e && null !== t.dataPoints[C - 1].y && (a.axisY.logarithmic ? (V = e / t.dataPoints[C - 1].y, 1 > V && (V = 1 / V), d.minDiff > V && 1 !== V && (d.minDiff = V)) : (V = e - t.dataPoints[C - 1].y, 0 > V && (V *= -1), d.minDiff > V && 0 !== V && (d.minDiff = V)));
                }
                if (b < r && !k)
                  null !== e && (n = b);
                else {
                  if (!k && (k = true, 0 < C)) {
                    C -= 2;
                    continue;
                  }
                  if (b > f && !l)
                    l = true;
                  else if (b > f && l)
                    continue;
                  t.dataPoints[C].label && (a.axisX.labels[b] = t.dataPoints[C].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === e ? c.viewPortMin === b && n < b && (c.viewPortMin = n) : (e < d.viewPortMin && "number" === typeof e && (d.viewPortMin = e), e > d.viewPortMax && "number" === typeof e && (d.viewPortMax = e));
                }
              }
              t.axisX.valueType = t.xValueType = g ? "dateTime" : "number";
            }
        };
        p.prototype._processStackedPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, g = false, q = [], t = [], C = Infinity, k = -Infinity, l = 0; l < a.dataSeriesIndexes.length; l++) {
              var n = this.data[a.dataSeriesIndexes[l]], r = 0, f = false, V = false, h2;
              if ("normal" === n.axisPlacement || "xySwapped" === n.axisPlacement)
                var x = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : -Infinity, s = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (n.dataPoints[r].x && n.dataPoints[r].x.getTime || "dateTime" === n.xValueType)
                g = true;
              for (r = 0; r < n.dataPoints.length; r++) {
                "undefined" === typeof n.dataPoints[r].x && (n.dataPoints[r].x = r + (a.axisX.logarithmic ? 1 : 0));
                n.dataPoints[r].x.getTime ? (g = true, b = n.dataPoints[r].x.getTime()) : b = n.dataPoints[r].x;
                e = m(n.dataPoints[r].y) ? 0 : n.dataPoints[r].y;
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                if (0 < r) {
                  if (a.axisX.logarithmic) {
                    var y = b / n.dataPoints[r - 1].x;
                    1 > y && (y = 1 / y);
                    c.minDiff > y && 1 !== y && (c.minDiff = y);
                  } else
                    y = b - n.dataPoints[r - 1].x, 0 > y && (y *= -1), c.minDiff > y && 0 !== y && (c.minDiff = y);
                  null !== e && null !== n.dataPoints[r - 1].y && (a.axisY.logarithmic ? 0 < e && (y = e / n.dataPoints[r - 1].y, 1 > y && (y = 1 / y), d.minDiff > y && 1 !== y && (d.minDiff = y)) : (y = e - n.dataPoints[r - 1].y, 0 > y && (y *= -1), d.minDiff > y && 0 !== y && (d.minDiff = y)));
                }
                if (b < x && !f)
                  null !== n.dataPoints[r].y && (h2 = b);
                else {
                  if (!f && (f = true, 0 < r)) {
                    r -= 2;
                    continue;
                  }
                  if (b > s && !V)
                    V = true;
                  else if (b > s && V)
                    continue;
                  n.dataPoints[r].label && (a.axisX.labels[b] = n.dataPoints[r].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === n.dataPoints[r].y ? c.viewPortMin === b && h2 < b && (c.viewPortMin = h2) : (n.dataPointEOs[r].cumulativeY = (0 < l ? this.data[a.dataSeriesIndexes[l - 1]].dataPointEOs[r].cumulativeY : 0) + n.dataPoints[r].y, a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e), 0 <= e ? q[b] ? q[b] += e : (q[b] = e, C = Math.min(
                    e,
                    C
                  )) : t[b] ? t[b] += e : (t[b] = e, k = Math.max(e, k)));
                }
              }
              a.axisY.scaleBreaks && (a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks) && (d.dataPointYPositiveSums ? (d.dataPointYPositiveSums.push.apply(d.dataPointYPositiveSums, q), d.dataPointYNegativeSums.push.apply(d.dataPointYPositiveSums, t)) : (d.dataPointYPositiveSums = q, d.dataPointYNegativeSums = t));
              n.axisX.valueType = n.xValueType = g ? "dateTime" : "number";
            }
            for (r in q)
              q.hasOwnProperty(r) && !isNaN(r) && (a = q[r], a < d.min && (d.min = Math.min(a, C)), a > d.max && (d.max = a), r < c.viewPortMin || r > c.viewPortMax || (a < d.viewPortMin && (d.viewPortMin = Math.min(a, C)), a > d.viewPortMax && (d.viewPortMax = a)));
            for (r in t)
              t.hasOwnProperty(r) && !isNaN(r) && (a = t[r], a < d.min && (d.min = a), a > d.max && (d.max = Math.max(a, k)), r < c.viewPortMin || r > c.viewPortMax || (a < d.viewPortMin && (d.viewPortMin = a), a > d.viewPortMax && (d.viewPortMax = Math.max(a, k))));
          }
        };
        p.prototype._processStacked100PlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
            for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, g = false, q = false, t = false, C = [], k = 0; k < a.dataSeriesIndexes.length; k++) {
              var l = this.data[a.dataSeriesIndexes[k]], n = 0, r = false, f = false, V;
              if ("normal" === l.axisPlacement || "xySwapped" === l.axisPlacement)
                var h2 = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : -Infinity, x = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (l.dataPoints[n].x && l.dataPoints[n].x.getTime || "dateTime" === l.xValueType)
                g = true;
              for (n = 0; n < l.dataPoints.length; n++) {
                "undefined" === typeof l.dataPoints[n].x && (l.dataPoints[n].x = n + (a.axisX.logarithmic ? 1 : 0));
                l.dataPoints[n].x.getTime ? (g = true, b = l.dataPoints[n].x.getTime()) : b = l.dataPoints[n].x;
                e = m(l.dataPoints[n].y) ? null : l.dataPoints[n].y;
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                if (0 < n) {
                  if (a.axisX.logarithmic) {
                    var s = b / l.dataPoints[n - 1].x;
                    1 > s && (s = 1 / s);
                    c.minDiff > s && 1 !== s && (c.minDiff = s);
                  } else
                    s = b - l.dataPoints[n - 1].x, 0 > s && (s *= -1), c.minDiff > s && 0 !== s && (c.minDiff = s);
                  m(e) || null === l.dataPoints[n - 1].y || (a.axisY.logarithmic ? 0 < e && (s = e / l.dataPoints[n - 1].y, 1 > s && (s = 1 / s), d.minDiff > s && 1 !== s && (d.minDiff = s)) : (s = e - l.dataPoints[n - 1].y, 0 > s && (s *= -1), d.minDiff > s && 0 !== s && (d.minDiff = s)));
                }
                if (b < h2 && !r)
                  null !== e && (V = b);
                else {
                  if (!r && (r = true, 0 < n)) {
                    n -= 2;
                    continue;
                  }
                  if (b > x && !f)
                    f = true;
                  else if (b > x && f)
                    continue;
                  l.dataPoints[n].label && (a.axisX.labels[b] = l.dataPoints[n].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  null === e ? c.viewPortMin === b && V < b && (c.viewPortMin = V) : (l.dataPointEOs[n].cumulativeY = (0 < k ? this.data[a.dataSeriesIndexes[k - 1]].dataPointEOs[n].cumulativeY : 0) + l.dataPoints[n].y, a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e, a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e), 0 <= e ? q = true : 0 > e && (t = true), C[b] = C[b] ? C[b] + Math.abs(e) : Math.abs(e));
                }
              }
              l.axisX.valueType = l.xValueType = g ? "dateTime" : "number";
            }
            a.axisY.logarithmic ? (d.max = m(d.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(d.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), d.min = m(d.viewPortMin) ? 1 : Math.min(d.viewPortMin, 1)) : q && !t ? (d.max = m(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99), d.min = m(d.viewPortMin) ? 1 : Math.min(d.viewPortMin, 1)) : q && t ? (d.max = m(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99), d.min = m(d.viewPortMin) ? -99 : Math.min(d.viewPortMin, -99)) : !q && t && (d.max = m(d.viewPortMax) ? -1 : Math.max(
              d.viewPortMax,
              -1
            ), d.min = m(d.viewPortMin) ? -99 : Math.min(d.viewPortMin, -99));
            d.viewPortMin = d.min;
            d.viewPortMax = d.max;
            a.dataPointYSums = C;
          }
        };
        p.prototype._processMultiYPlotUnit = function(a) {
          if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, g, q, t = false, C = 0; C < a.dataSeriesIndexes.length; C++) {
              var k = this.data[a.dataSeriesIndexes[C]], l = 0, n = false, r = false, f, V, h2;
              if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement)
                var m2 = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, s = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (k.dataPoints[l].x && k.dataPoints[l].x.getTime || "dateTime" === k.xValueType)
                t = true;
              for (l = 0; l < k.dataPoints.length; l++) {
                "undefined" === typeof k.dataPoints[l].x && (k.dataPoints[l].x = l + (a.axisX.logarithmic ? 1 : 0));
                k.dataPoints[l].x.getTime ? (t = true, b = k.dataPoints[l].x.getTime()) : b = k.dataPoints[l].x;
                if ((e = k.dataPoints[l].y) && e.length) {
                  g = Math.min.apply(null, e);
                  q = Math.max.apply(null, e);
                  V = true;
                  for (var y = 0; y < e.length; y++)
                    null === e.k && (V = false);
                  V && (n || (h2 = f), f = b);
                }
                b < c.min && (c.min = b);
                b > c.max && (c.max = b);
                g < d.min && (d.min = g);
                q > d.max && (d.max = q);
                0 < l && (a.axisX.logarithmic ? (V = b / k.dataPoints[l - 1].x, 1 > V && (V = 1 / V), c.minDiff > V && 1 !== V && (c.minDiff = V)) : (V = b - k.dataPoints[l - 1].x, 0 > V && (V *= -1), c.minDiff > V && 0 !== V && (c.minDiff = V)), e && (null !== e[0] && k.dataPoints[l - 1].y && null !== k.dataPoints[l - 1].y[0]) && (a.axisY.logarithmic ? (V = e[0] / k.dataPoints[l - 1].y[0], 1 > V && (V = 1 / V), d.minDiff > V && 1 !== V && (d.minDiff = V)) : (V = e[0] - k.dataPoints[l - 1].y[0], 0 > V && (V *= -1), d.minDiff > V && 0 !== V && (d.minDiff = V))));
                if (!(b < m2) || n) {
                  if (!n && (n = true, 0 < l)) {
                    l -= 2;
                    f = h2;
                    continue;
                  }
                  if (b > s && !r)
                    r = true;
                  else if (b > s && r)
                    continue;
                  k.dataPoints[l].label && (a.axisX.labels[b] = k.dataPoints[l].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  if (c.viewPortMin === b && e) {
                    for (y = 0; y < e.length; y++)
                      if (null === e[y] && f < b) {
                        c.viewPortMin = f;
                        break;
                      }
                  }
                  null === e ? c.viewPortMin === b && f < b && (c.viewPortMin = f) : (g < d.viewPortMin && (d.viewPortMin = g), q > d.viewPortMax && (d.viewPortMax = q));
                }
              }
              k.axisX.valueType = k.xValueType = t ? "dateTime" : "number";
            }
        };
        p.prototype._processSpecificPlotUnit = function(a) {
          if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
            for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, g = false, q = 0; q < a.dataSeriesIndexes.length; q++) {
              var t = this.data[a.dataSeriesIndexes[q]], C = 0, k = false, l = false, n = b = 0;
              if ("normal" === t.axisPlacement || "xySwapped" === t.axisPlacement)
                var r = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : a.axisX.options && a.axisX.options.viewportMinimum ? a.axisX.options.viewportMinimum : a.axisX.options && a.axisX.options.minimum ? a.axisX.options.minimum : a.axisX.logarithmic ? 0 : -Infinity, f = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : a.axisX.options && a.axisX.options.viewportMaximum ? a.axisX.options.viewportMaximum : a.axisX.options && a.axisX.options.maximum ? a.axisX.options.maximum : Infinity;
              if (t.dataPoints[C].x && t.dataPoints[C].x.getTime || "dateTime" === t.xValueType)
                g = true;
              for (C = 0; C < t.dataPoints.length; C++)
                "undefined" !== typeof t.dataPoints[C].isCumulativeSum && true === t.dataPoints[C].isCumulativeSum ? (t.dataPointEOs[C].cumulativeSumYStartValue = 0, t.dataPointEOs[C].cumulativeSum = 0 === C ? 0 : t.dataPointEOs[C - 1].cumulativeSum, t.dataPoints[C].y = 0 === C ? 0 : t.dataPointEOs[C - 1].cumulativeSum) : "undefined" !== typeof t.dataPoints[C].isIntermediateSum && true === t.dataPoints[C].isIntermediateSum ? (t.dataPointEOs[C].cumulativeSumYStartValue = n, t.dataPointEOs[C].cumulativeSum = 0 === C ? 0 : t.dataPointEOs[C - 1].cumulativeSum, t.dataPoints[C].y = 0 === C ? 0 : b, n = 0 === C ? 0 : t.dataPointEOs[C - 1].cumulativeSum, b = 0) : (e = "number" !== typeof t.dataPoints[C].y ? 0 : t.dataPoints[C].y, t.dataPointEOs[C].cumulativeSumYStartValue = 0 === C ? 0 : t.dataPointEOs[C - 1].cumulativeSum, t.dataPointEOs[C].cumulativeSum = 0 === C ? e : t.dataPointEOs[C - 1].cumulativeSum + e, b += e);
              for (C = 0; C < t.dataPoints.length; C++)
                if ("undefined" === typeof t.dataPoints[C].x && (t.dataPoints[C].x = C + (a.axisX.logarithmic ? 1 : 0)), t.dataPoints[C].x.getTime ? (g = true, b = t.dataPoints[C].x.getTime()) : b = t.dataPoints[C].x, e = t.dataPoints[C].y, b < c.min && (c.min = b), b > c.max && (c.max = b), t.dataPointEOs[C].cumulativeSum < d.min && (d.min = t.dataPointEOs[C].cumulativeSum), t.dataPointEOs[C].cumulativeSum > d.max && (d.max = t.dataPointEOs[C].cumulativeSum), 0 < C && (a.axisX.logarithmic ? (n = b / t.dataPoints[C - 1].x, 1 > n && (n = 1 / n), c.minDiff > n && 1 !== n && (c.minDiff = n)) : (n = b - t.dataPoints[C - 1].x, 0 > n && (n *= -1), c.minDiff > n && 0 !== n && (c.minDiff = n)), null !== e && null !== t.dataPoints[C - 1].y && (a.axisY.logarithmic ? (e = t.dataPointEOs[C].cumulativeSum / t.dataPointEOs[C - 1].cumulativeSum, 1 > e && (e = 1 / e), d.minDiff > e && 1 !== e && (d.minDiff = e)) : (e = t.dataPointEOs[C].cumulativeSum - t.dataPointEOs[C - 1].cumulativeSum, 0 > e && (e *= -1), d.minDiff > e && 0 !== e && (d.minDiff = e)))), !(b < r) || k) {
                  if (!k && (k = true, 0 < C)) {
                    C -= 2;
                    continue;
                  }
                  if (b > f && !l)
                    l = true;
                  else if (b > f && l)
                    continue;
                  t.dataPoints[C].label && (a.axisX.labels[b] = t.dataPoints[C].label);
                  b < c.viewPortMin && (c.viewPortMin = b);
                  b > c.viewPortMax && (c.viewPortMax = b);
                  0 < C && (t.dataPointEOs[C - 1].cumulativeSum < d.viewPortMin && (d.viewPortMin = t.dataPointEOs[C - 1].cumulativeSum), t.dataPointEOs[C - 1].cumulativeSum > d.viewPortMax && (d.viewPortMax = t.dataPointEOs[C - 1].cumulativeSum));
                  t.dataPointEOs[C].cumulativeSum < d.viewPortMin && (d.viewPortMin = t.dataPointEOs[C].cumulativeSum);
                  t.dataPointEOs[C].cumulativeSum > d.viewPortMax && (d.viewPortMax = t.dataPointEOs[C].cumulativeSum);
                }
              t.axisX.valueType = t.xValueType = g ? "dateTime" : "number";
            }
        };
        p.prototype.calculateAutoBreaks = function() {
          function a(a2, b2, c2, e2) {
            if (e2)
              return c2 = Math.pow(Math.min(c2 * a2 / b2, b2 / a2), 0.2), 1 >= c2 && (c2 = Math.pow(1 > a2 ? 1 / a2 : Math.min(b2 / a2, a2), 0.25)), { startValue: a2 * c2, endValue: b2 / c2 };
            c2 = 0.2 * Math.min(c2 - b2 + a2, b2 - a2);
            0 >= c2 && (c2 = 0.25 * Math.min(b2 - a2, Math.abs(a2)));
            return { startValue: a2 + c2, endValue: b2 - c2 };
          }
          function d(a2) {
            if (a2.dataSeriesIndexes && !(1 > a2.dataSeriesIndexes.length)) {
              var b2 = a2.axisX.scaleBreaks && a2.axisX.scaleBreaks.autoCalculate && 1 <= a2.axisX.scaleBreaks.maxNumberOfAutoBreaks, c2 = a2.axisY.scaleBreaks && a2.axisY.scaleBreaks.autoCalculate && 1 <= a2.axisY.scaleBreaks.maxNumberOfAutoBreaks;
              if (b2 || c2)
                for (var d2 = a2.axisY.dataInfo, f2 = a2.axisX.dataInfo, g2, q2 = f2.min, k2 = f2.max, l2 = d2.min, n2 = d2.max, f2 = f2._dataRanges, d2 = d2._dataRanges, r2, t2 = 0, C2 = 0; C2 < a2.dataSeriesIndexes.length; C2++) {
                  var h2 = e.data[a2.dataSeriesIndexes[C2]];
                  if (!(4 > h2.dataPoints.length)) {
                    for (t2 = 0; t2 < h2.dataPoints.length; t2++)
                      if (b2 && (r2 = (k2 + 1 - q2) * Math.max(parseFloat(a2.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, g2 = h2.dataPoints[t2].x.getTime ? h2.dataPoints[t2].x.getTime() : h2.dataPoints[t2].x, r2 = Math.floor((g2 - q2) / r2), g2 < f2[r2].min && (f2[r2].min = g2), g2 > f2[r2].max && (f2[r2].max = g2)), c2) {
                        var u2 = (n2 + 1 - l2) * Math.max(parseFloat(a2.axisY.scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                        if ((g2 = "waterfall" === a2.type ? h2.dataPointEOs[t2].cumulativeSum : h2.dataPoints[t2].y) && g2.length)
                          for (var p2 = 0; p2 < g2.length; p2++)
                            r2 = Math.floor((g2[p2] - l2) / u2), g2[p2] < d2[r2].min && (d2[r2].min = g2[p2]), g2[p2] > d2[r2].max && (d2[r2].max = g2[p2]);
                        else
                          m(g2) || (r2 = Math.floor((g2 - l2) / u2), g2 < d2[r2].min && (d2[r2].min = g2), g2 > d2[r2].max && (d2[r2].max = g2));
                      }
                  }
                }
            }
          }
          function c(a2) {
            if (a2.dataSeriesIndexes && !(1 > a2.dataSeriesIndexes.length) && a2.axisX.scaleBreaks && a2.axisX.scaleBreaks.autoCalculate && 1 <= a2.axisX.scaleBreaks.maxNumberOfAutoBreaks)
              for (var b2 = a2.axisX.dataInfo, c2 = b2.min, d2 = b2.max, f2 = b2._dataRanges, g2, q2 = 0, k2 = 0; k2 < a2.dataSeriesIndexes.length; k2++) {
                var l2 = e.data[a2.dataSeriesIndexes[k2]];
                if (!(4 > l2.dataPoints.length))
                  for (q2 = 0; q2 < l2.dataPoints.length; q2++)
                    g2 = (d2 + 1 - c2) * Math.max(parseFloat(a2.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, b2 = l2.dataPoints[q2].x.getTime ? l2.dataPoints[q2].x.getTime() : l2.dataPoints[q2].x, g2 = Math.floor((b2 - c2) / g2), b2 < f2[g2].min && (f2[g2].min = b2), b2 > f2[g2].max && (f2[g2].max = b2);
              }
          }
          for (var b, e = this, g = false, q = 0; q < this._axes.length; q++)
            if (this._axes[q].scaleBreaks && this._axes[q].scaleBreaks.autoCalculate && 1 <= this._axes[q].scaleBreaks.maxNumberOfAutoBreaks) {
              g = true;
              this._axes[q].dataInfo._dataRanges = [];
              for (var t = 0; t < 100 / Math.max(parseFloat(this._axes[q].scaleBreaks.collapsibleThreshold) || 10, 10); t++)
                this._axes[q].dataInfo._dataRanges.push({ min: Infinity, max: -Infinity });
            }
          if (g) {
            for (q = 0; q < this.plotInfo.plotTypes.length; q++)
              for (g = this.plotInfo.plotTypes[q], t = 0; t < g.plotUnits.length; t++)
                b = g.plotUnits[t], "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type || "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "waterfall" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? d(b) : 0 <= b.type.indexOf("stacked") && c(b);
            for (q = 0; q < this._axes.length; q++)
              if (this._axes[q].dataInfo._dataRanges) {
                var C = this._axes[q].dataInfo.min;
                b = (this._axes[q].dataInfo.max + 1 - C) * Math.max(parseFloat(this._axes[q].scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                var k = this._axes[q].dataInfo._dataRanges, l, n, g = [];
                if (this._axes[q].dataInfo.dataPointYPositiveSums) {
                  var r = this._axes[q].dataInfo.dataPointYPositiveSums;
                  l = k;
                  for (t in r)
                    if (r.hasOwnProperty(t) && !isNaN(t) && (n = r[t], !m(n))) {
                      var f = Math.floor((n - C) / b);
                      n < l[f].min && (l[f].min = n);
                      n > l[f].max && (l[f].max = n);
                    }
                  delete this._axes[q].dataInfo.dataPointYPositiveSums;
                }
                if (this._axes[q].dataInfo.dataPointYNegativeSums) {
                  r = this._axes[q].dataInfo.dataPointYNegativeSums;
                  l = k;
                  for (t in r)
                    r.hasOwnProperty(t) && !isNaN(t) && (n = -1 * r[t], m(n) || (f = Math.floor((n - C) / b), n < l[f].min && (l[f].min = n), n > l[f].max && (l[f].max = n)));
                  delete this._axes[q].dataInfo.dataPointYNegativeSums;
                }
                for (t = 0; t < k.length - 1; t++)
                  if (l = k[t].max, isFinite(l))
                    for (; t < k.length - 1; )
                      if (C = k[t + 1].min, isFinite(C)) {
                        n = C - l;
                        n > b && g.push({ diff: n, start: l, end: C });
                        break;
                      } else
                        t++;
                if (this._axes[q].scaleBreaks.customBreaks) {
                  for (t = 0; t < this._axes[q].scaleBreaks.customBreaks.length; t++)
                    for (b = 0; b < g.length; b++)
                      if (this._axes[q].scaleBreaks.customBreaks[t].startValue <= g[b].start && g[b].start <= this._axes[q].scaleBreaks.customBreaks[t].endValue || this._axes[q].scaleBreaks.customBreaks[t].startValue <= g[b].start && g[b].start <= this._axes[q].scaleBreaks.customBreaks[t].endValue || g[b].start <= this._axes[q].scaleBreaks.customBreaks[t].startValue && this._axes[q].scaleBreaks.customBreaks[t].startValue <= g[b].end || g[b].start <= this._axes[q].scaleBreaks.customBreaks[t].endValue && this._axes[q].scaleBreaks.customBreaks[t].endValue <= g[b].end)
                        g.splice(b, 1), b--;
                }
                g.sort(function(a2, b2) {
                  return b2.diff - a2.diff;
                });
                for (t = 0; t < Math.min(g.length, this._axes[q].scaleBreaks.maxNumberOfAutoBreaks); t++)
                  b = a(g[t].start, g[t].end, this._axes[q].logarithmic ? this._axes[q].dataInfo.max / this._axes[q].dataInfo.min : this._axes[q].dataInfo.max - this._axes[q].dataInfo.min, this._axes[q].logarithmic), this._axes[q].scaleBreaks.autoBreaks.push(new da2(this, "autoBreaks", b, t, ++this._eventManager.lastObjectId, this._axes[q].scaleBreaks)), this._axes[q].scaleBreaks._appliedBreaks.push(this._axes[q].scaleBreaks.autoBreaks[this._axes[q].scaleBreaks.autoBreaks.length - 1]);
                this._axes[q].scaleBreaks._appliedBreaks.sort(function(a2, b2) {
                  return a2.startValue - b2.startValue;
                });
              }
          }
        };
        p.prototype.renderCrosshairs = function(a) {
          for (var d = 0; d < this.axisX.length; d++)
            this.axisX[d] != a && (this.axisX[d].crosshair && this.axisX[d].crosshair.enabled && !this.axisX[d].crosshair._hidden) && this.axisX[d].showCrosshair(this.axisX[d].crosshair._updatedValue);
          for (d = 0; d < this.axisX2.length; d++)
            this.axisX2[d] != a && (this.axisX2[d].crosshair && this.axisX2[d].crosshair.enabled && !this.axisX2[d].crosshair._hidden) && this.axisX2[d].showCrosshair(this.axisX2[d].crosshair._updatedValue);
          for (d = 0; d < this.axisY.length; d++)
            this.axisY[d] != a && (this.axisY[d].crosshair && this.axisY[d].crosshair.enabled && !this.axisY[d].crosshair._hidden) && this.axisY[d].showCrosshair(this.axisY[d].crosshair._updatedValue);
          for (d = 0; d < this.axisY2.length; d++)
            this.axisY2[d] != a && (this.axisY2[d].crosshair && this.axisY2[d].crosshair.enabled && !this.axisY2[d].crosshair._hidden) && this.axisY2[d].showCrosshair(this.axisY2[d].crosshair._updatedValue);
        };
        p.prototype.getDataPointAtXY = function(a, d, c) {
          c = c || false;
          for (var b = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) {
            var g = null;
            (g = this._dataInRenderedOrder[e].getDataPointAtXY(a, d, c)) && b.push(g);
          }
          a = null;
          d = false;
          for (c = 0; c < b.length; c++)
            if ("line" === b[c].dataSeries.type || "stepLine" === b[c].dataSeries.type || "area" === b[c].dataSeries.type || "stepArea" === b[c].dataSeries.type) {
              if (e = oa("markerSize", b[c].dataPoint, b[c].dataSeries) || 8, b[c].distance <= e / 2) {
                d = true;
                break;
              }
            }
          for (c = 0; c < b.length; c++)
            d && "line" !== b[c].dataSeries.type && "stepLine" !== b[c].dataSeries.type && "area" !== b[c].dataSeries.type && "stepArea" !== b[c].dataSeries.type || (a ? b[c].distance <= a.distance && (a = b[c]) : a = b[c]);
          return a;
        };
        p.prototype.getObjectAtXY = function(a, d, c) {
          var b = null;
          if (c = this.getDataPointAtXY(a, d, c || false))
            b = c.dataSeries.dataPointIds[c.dataPointIndex];
          else if (u)
            b = $a(a, d, this._eventManager.ghostCtx);
          else
            for (c = 0; c < this.legend.items.length; c++) {
              var e = this.legend.items[c];
              a >= e.x1 && (a <= e.x2 && d >= e.y1 && d <= e.y2) && (b = e.id);
            }
          return b;
        };
        p.prototype.getAutoFontSize = mb;
        p.prototype.resetOverlayedCanvas = function() {
          this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height);
        };
        p.prototype.clearCanvas = lb;
        p.prototype.attachEvent = function(a) {
          this._events.push(a);
        };
        p.prototype._touchEventHandler = function(a) {
          if (a.changedTouches && this.interactivityEnabled) {
            var d = [], c = a.changedTouches, b = c ? c[0] : a, e = null;
            switch (a.type) {
              case "touchstart":
              case "MSPointerDown":
                d = ["mousemove", "mousedown"];
                this._lastTouchData = Pa(b);
                this._lastTouchData.time = /* @__PURE__ */ new Date();
                break;
              case "touchmove":
              case "MSPointerMove":
                d = ["mousemove"];
                break;
              case "touchend":
              case "MSPointerUp":
                var g = this._lastTouchData && this._lastTouchData.time ? /* @__PURE__ */ new Date() - this._lastTouchData.time : 0, d = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > g ? ["mouseup", "click"] : ["mouseup"];
                break;
              default:
                return;
            }
            if (!(c && 1 < c.length)) {
              e = Pa(b);
              e.time = /* @__PURE__ */ new Date();
              try {
                var q = e.y - this._lastTouchData.y, g = e.time - this._lastTouchData.time;
                if (1 < Math.abs(q) && this._lastTouchData.scroll || 5 < Math.abs(q) && 250 > g)
                  this._lastTouchData.scroll = true;
              } catch (t) {
              }
              this._lastTouchEventType = a.type;
              if (this._lastTouchData.scroll && this.zoomEnabled)
                this.isDrag && this.resetOverlayedCanvas(), this.isDrag = false;
              else
                for (c = 0; c < d.length; c++)
                  if (e = d[c], q = document.createEvent("MouseEvent"), q.initMouseEvent(
                    e,
                    true,
                    true,
                    window,
                    1,
                    b.screenX,
                    b.screenY,
                    b.clientX,
                    b.clientY,
                    false,
                    false,
                    false,
                    false,
                    0,
                    null
                  ), b.target.dispatchEvent(q), !m(this._lastTouchData.scroll) && !this._lastTouchData.scroll || !this._lastTouchData.scroll && 250 < g || "click" === e)
                    a.preventManipulation && a.preventManipulation(), a.preventDefault && a.cancelable && a.preventDefault();
            }
          }
        };
        p.prototype._dispatchRangeEvent = function(a, d) {
          var c = { chart: this };
          c.type = a;
          c.trigger = d;
          var b = [];
          this.axisX && 0 < this.axisX.length && b.push("axisX");
          this.axisX2 && 0 < this.axisX2.length && b.push("axisX2");
          this.axisY && 0 < this.axisY.length && b.push("axisY");
          this.axisY2 && 0 < this.axisY2.length && b.push("axisY2");
          for (var e = 0; e < b.length; e++)
            if (m(c[b[e]]) && (c[b[e]] = []), "axisY" === b[e])
              for (var g = 0; g < this.axisY.length; g++)
                c[b[e]].push({ viewportMinimum: this[b[e]][g].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][g].sessionVariables.newViewportMaximum });
            else if ("axisY2" === b[e])
              for (g = 0; g < this.axisY2.length; g++)
                c[b[e]].push({ viewportMinimum: this[b[e]][g].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][g].sessionVariables.newViewportMaximum });
            else if ("axisX" === b[e])
              for (g = 0; g < this.axisX.length; g++)
                c[b[e]].push({ viewportMinimum: this[b[e]][g].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][g].sessionVariables.newViewportMaximum });
            else if ("axisX2" === b[e])
              for (g = 0; g < this.axisX2.length; g++)
                c[b[e]].push({ viewportMinimum: this[b[e]][g].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][g].sessionVariables.newViewportMaximum });
          this.dispatchEvent(a, c, this);
        };
        p.prototype._mouseEventHandler = function(a) {
          function d() {
            p.capturedEventParam && (e = p.capturedEventParam, q = e.bounds, "mouseup" === b && (p.capturedEventParam = null, e.chart.overlaidCanvas.releaseCapture ? e.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", e.chart._mouseEventHandler, false)), e.hasOwnProperty(b) && ("mouseup" !== b || e.chart.overlaidCanvas.releaseCapture ? a.target !== e.chart.overlaidCanvas && u || e[b].call(e.context, c.x, c.y) : a.target !== e.chart.overlaidCanvas && (e.chart.isDrag = false)));
          }
          "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
          var c = Pa(a), b = a.type, e, g;
          a.which ? g = 3 == a.which : a.button && (g = 2 == a.button);
          if (this._ignoreNextEvent)
            d(), this._ignoreNextEvent = false;
          else if (d(), this.interactivityEnabled) {
            a.preventManipulation && a.preventManipulation();
            a.preventDefault && a.preventDefault();
            var q;
            Ia && window.console && (window.console.log(b + " --> x: " + c.x + "; y:" + c.y), g && window.console.log(a.which), "mouseup" === b && window.console.log("mouseup"));
            if (!g) {
              if (!p.capturedEventParam && this._events) {
                for (g = 0; g < this._events.length; g++)
                  if (this._events[g].hasOwnProperty(b))
                    if (e = this._events[g], q = e.bounds, c.x >= q.x1 && c.x <= q.x2 && c.y >= q.y1 && c.y <= q.y2) {
                      e[b].call(e.context, c.x, c.y);
                      "mousedown" === b && true === e.capture ? (p.capturedEventParam = e, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, false)) : "mouseup" === b && (e.chart.overlaidCanvas.releaseCapture ? e.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, false));
                      break;
                    } else
                      e = null;
                a.target.style.cursor = e && e.cursor ? e.cursor : this._defaultCursor;
              }
              g = this.plotArea;
              if (c.x < g.x1 || c.x > g.x2 || c.y < g.y1 || c.y > g.y2) {
                this.toolTip && this.toolTip.enabled ? (this.toolTip.hide(), this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip)) : this.resetOverlayedCanvas();
                for (g = 0; g < this.axisX.length; g++)
                  this.axisX[g].crosshair && this.axisX[g].crosshair.enabled && (this.axisX[g].crosshair.hide(), this.axisX[g].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[g].options }, this.axisX[g].crosshair));
                for (g = 0; g < this.axisX2.length; g++)
                  this.axisX2[g].crosshair && this.axisX2[g].crosshair.enabled && (this.axisX2[g].crosshair.hide(), this.axisX2[g].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[g].options }, this.axisX2[g].crosshair));
                for (g = 0; g < this.axisY.length; g++)
                  this.axisY[g].crosshair && this.axisY[g].crosshair.enabled && (this.axisY[g].crosshair.hide(), this.axisY[g].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[g].options }, this.axisY[g].crosshair));
                for (g = 0; g < this.axisY2.length; g++)
                  this.axisY2[g].crosshair && this.axisY2[g].crosshair.enabled && (this.axisY2[g].crosshair.hide(), this.axisY2[g].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY2[g].options }, this.axisY2[g].crosshair));
              }
              this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a);
            }
          }
        };
        p.prototype._plotAreaMouseDown = function(a, d) {
          this.isDrag = true;
          this.dragStartPoint = { x: a, y: d };
        };
        p.prototype._plotAreaMouseUp = function(a, d) {
          if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
            var c = d - this.dragStartPoint.y, b = a - this.dragStartPoint.x, e = 0 <= this.zoomType.indexOf("x"), g = 0 <= this.zoomType.indexOf("y"), q = false;
            this.resetOverlayedCanvas();
            if ("xySwapped" === this.plotInfo.axisPlacement)
              var t = g, g = e, e = t;
            if (this.panEnabled || this.zoomEnabled) {
              if (this.panEnabled)
                for (e = g = 0; e < this._axes.length; e++)
                  c = this._axes[e], c.logarithmic ? c.viewportMinimum < c.minimum ? (g = c.minimum / c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum * g, c.sessionVariables.newViewportMaximum = c.viewportMaximum * g, q = true) : c.viewportMaximum > c.maximum && (g = c.viewportMaximum / c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum / g, c.sessionVariables.newViewportMaximum = c.viewportMaximum / g, q = true) : c.viewportMinimum < c.minimum ? (g = c.minimum - c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum + g, c.sessionVariables.newViewportMaximum = c.viewportMaximum + g, q = true) : c.viewportMaximum > c.maximum && (g = c.viewportMaximum - c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum - g, c.sessionVariables.newViewportMaximum = c.viewportMaximum - g, q = true);
              else if ((!e || 2 < Math.abs(b)) && (!g || 2 < Math.abs(c)) && this.zoomEnabled) {
                if (!this.dragStartPoint)
                  return;
                c = e ? this.dragStartPoint.x : this.plotArea.x1;
                b = g ? this.dragStartPoint.y : this.plotArea.y1;
                e = e ? a : this.plotArea.x2;
                g = g ? d : this.plotArea.y2;
                2 < Math.abs(c - e) && 2 < Math.abs(b - g) && this._zoomPanToSelectedRegion(c, b, e, g) && (q = true);
              }
              q && (this._ignoreNextEvent = true, this._dispatchRangeEvent("rangeChanging", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) && (this.stockChart._rangeEventParameter || (this.stockChart._rangeEventParameter = { stockChart: this.stockChart, source: "chart", index: this.stockChart.charts.indexOf(this), minimum: this.stockChart.sessionVariables._axisXMin, maximum: this.stockChart.sessionVariables._axisXMax }), this.stockChart._rangeEventParameter.type = "rangeChanging", this.stockChart.dispatchEvent("rangeChanging", this.stockChart._rangeEventParameter, this.stockChart)), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) && (this.stockChart._rangeEventParameter.type = "rangeChanged", this.stockChart.dispatchEvent("rangeChanged", this.stockChart._rangeEventParameter, this.stockChart)), q && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (Ma(this._zoomButton, this._resetButton), ua(this, this._zoomButton, "pan"), ua(this, this._resetButton, "reset")));
            }
          }
          this.isDrag = false;
          if ("none" !== this.plotInfo.axisPlacement) {
            this.resetOverlayedCanvas();
            if (this.axisX && 0 < this.axisX.length)
              for (q = 0; q < this.axisX.length; q++)
                this.axisX[q].crosshair && this.axisX[q].crosshair.enabled && this.axisX[q].renderCrosshair(a, d);
            if (this.axisX2 && 0 < this.axisX2.length)
              for (q = 0; q < this.axisX2.length; q++)
                this.axisX2[q].crosshair && this.axisX2[q].crosshair.enabled && this.axisX2[q].renderCrosshair(a, d);
            if (this.axisY && 0 < this.axisY.length)
              for (q = 0; q < this.axisY.length; q++)
                this.axisY[q].crosshair && this.axisY[q].crosshair.enabled && this.axisY[q].renderCrosshair(a, d);
            if (this.axisY2 && 0 < this.axisY2.length)
              for (q = 0; q < this.axisY2.length; q++)
                this.axisY2[q].crosshair && this.axisY2[q].crosshair.enabled && this.axisY2[q].renderCrosshair(a, d);
            if (this.axisX && 0 < this.axisX.length)
              for (q = 0; q < this.axisX.length; q++)
                this.axisX[q].crosshair && this.axisX[q].crosshair.enabled && this.axisX[q].crosshair.renderLabel();
            if (this.axisX2 && 0 < this.axisX2.length)
              for (q = 0; q < this.axisX2.length; q++)
                this.axisX2[q].crosshair && this.axisX2[q].crosshair.enabled && this.axisX2[q].crosshair.renderLabel();
            if (this.axisY && 0 < this.axisY.length)
              for (q = 0; q < this.axisY.length; q++)
                this.axisY[q].crosshair && this.axisY[q].crosshair.enabled && this.axisY[q].crosshair.renderLabel();
            if (this.axisY2 && 0 < this.axisY2.length)
              for (q = 0; q < this.axisY2.length; q++)
                this.axisY2[q].crosshair && this.axisY2[q].crosshair.enabled && this.axisY2[q].crosshair.renderLabel();
          }
        };
        p.prototype._plotAreaMouseMove = function(a, d) {
          if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
            var c = 0, b = 0, e = c = null, e = 0 <= this.zoomType.indexOf("x"), g = 0 <= this.zoomType.indexOf("y"), q = this;
            "xySwapped" === this.plotInfo.axisPlacement && (c = g, g = e, e = c);
            c = this.dragStartPoint.x - a;
            b = this.dragStartPoint.y - d;
            if (2 < Math.abs(c) && 8 > Math.abs(c) && (this.panEnabled || this.zoomEnabled)) {
              this.toolTip.hide();
              this.toolTip && this.toolTip.enabled && this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip);
              for (var t = 0; t < this.axisX.length; t++)
                this.axisX[t].crosshair && this.axisX[t].crosshair.enabled && (this.axisX[t].crosshair.hide(), this.axisX[t].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[t].options }, this.axisX[t].crosshair));
              for (t = 0; t < this.axisX2.length; t++)
                this.axisX2[t].crosshair && this.axisX2[t].crosshair.enabled && (this.axisX2[t].crosshair.hide(), this.axisX2[t].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[t].options }, this.axisX2[t].crosshair));
              for (t = 0; t < this.axisY.length; t++)
                this.axisY[t].crosshair && this.axisY[t].crosshair.enabled && (this.axisY[t].crosshair.hide(), this.axisY[t].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[t].options }, this.axisY[t].crosshair));
              for (t = 0; t < this.axisY2.length; t++)
                this.axisY2[t].crosshair && this.axisY2[t].crosshair.enabled && (this.axisY2[t].crosshair.hide(), this.axisY2[t].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY2[t].options }, this.axisY2[t].crosshair));
            } else
              this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, d);
            if ((!e || 2 < Math.abs(c) || !g || 2 < Math.abs(b)) && (this.panEnabled || this.zoomEnabled)) {
              if (this.panEnabled)
                e = { x1: e ? this.plotArea.x1 + c : this.plotArea.x1, y1: g ? this.plotArea.y1 + b : this.plotArea.y1, x2: e ? this.plotArea.x2 + c : this.plotArea.x2, y2: g ? this.plotArea.y2 + b : this.plotArea.y2 }, clearTimeout(q._panTimerId), q._panTimerId = setTimeout(/* @__PURE__ */ function(b2, c2, e2, f) {
                  return function() {
                    q._zoomPanToSelectedRegion(b2, c2, e2, f, true) && (q._dispatchRangeEvent("rangeChanging", "pan"), q.stockChart && (q.stockChart.navigator && q.stockChart.navigator.enabled) && (q.stockChart._rangeEventParameter.type = "rangeChanging", q.stockChart.dispatchEvent("rangeChanging", q.stockChart._rangeEventParameter, q.stockChart)), q.render(), q._dispatchRangeEvent("rangeChanged", "pan"), q.stockChart && (q.stockChart.navigator && q.stockChart.navigator.enabled) && (q.stockChart._rangeEventParameter.type = "rangeChanged", q.stockChart.dispatchEvent("rangeChanged", q.stockChart._rangeEventParameter, q.stockChart)), q.dragStartPoint.x = a, q.dragStartPoint.y = d);
                  };
                }(e.x1, e.y1, e.x2, e.y2), 0);
              else if (this.zoomEnabled) {
                this.resetOverlayedCanvas();
                c = this.overlaidCanvasCtx.globalAlpha;
                this.overlaidCanvasCtx.fillStyle = "#A89896";
                var b = e ? this.dragStartPoint.x : this.plotArea.x1, t = g ? this.dragStartPoint.y : this.plotArea.y1, C = e ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1, k = g ? d - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                this.validateRegion(b, t, e ? a : this.plotArea.x2 - this.plotArea.x1, g ? d : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
                this.overlaidCanvasCtx.globalAlpha = 0.7;
                this.overlaidCanvasCtx.fillRect(b, t, C, k);
                this.overlaidCanvasCtx.globalAlpha = c;
              }
            }
          } else if (this.toolTip.mouseMoveHandler(a, d), "none" !== this.plotInfo.axisPlacement) {
            if (this.axisX && 0 < this.axisX.length)
              for (e = 0; e < this.axisX.length; e++)
                this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].renderCrosshair(a, d);
            if (this.axisX2 && 0 < this.axisX2.length)
              for (e = 0; e < this.axisX2.length; e++)
                this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].renderCrosshair(a, d);
            if (this.axisY && 0 < this.axisY.length)
              for (e = 0; e < this.axisY.length; e++)
                this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].renderCrosshair(a, d);
            if (this.axisY2 && 0 < this.axisY2.length)
              for (e = 0; e < this.axisY2.length; e++)
                this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].renderCrosshair(
                  a,
                  d
                );
            if (this.axisX && 0 < this.axisX.length)
              for (e = 0; e < this.axisX.length; e++)
                this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].crosshair.renderLabel();
            if (this.axisX2 && 0 < this.axisX2.length)
              for (e = 0; e < this.axisX2.length; e++)
                this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].crosshair.renderLabel();
            if (this.axisY && 0 < this.axisY.length)
              for (e = 0; e < this.axisY.length; e++)
                this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].crosshair.renderLabel();
            if (this.axisY2 && 0 < this.axisY2.length)
              for (e = 0; e < this.axisY2.length; e++)
                this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].crosshair.renderLabel();
          }
        };
        p.prototype._zoomPanToSelectedRegion = function(a, d, c, b, e) {
          a = this.validateRegion(a, d, c, b, e);
          d = a.axesWithValidRange;
          c = a.axesRanges;
          if (a.isValid)
            for (b = 0; b < d.length; b++)
              e = c[b], d[b].setViewPortRange(e.val1, e.val2), this.syncCharts && "y" != this.zoomType && this.syncCharts(e.val1, e.val2), this.stockChart && (this.stockChart._rangeEventParameter = {
                stockChart: this.stockChart,
                source: "chart",
                index: this.stockChart.charts.indexOf(this),
                minimum: e.val1,
                maximum: e.val2
              });
          return a.isValid;
        };
        p.prototype.validateRegion = function(a, d, c, b, e) {
          e = e || false;
          for (var g = 0 <= this.zoomType.indexOf("x"), q = 0 <= this.zoomType.indexOf("y"), t = false, C = [], k = [], l = [], n = 0; n < this._axes.length; n++)
            ("axisX" === this._axes[n].type && g || "axisY" === this._axes[n].type && q) && k.push(this._axes[n]);
          for (q = 0; q < k.length; q++) {
            var n = k[q], g = false, r = n.convertPixelToValue({ x: a, y: d }), f = n.convertPixelToValue({ x: c, y: b });
            if (r > f)
              var h2 = f, f = r, r = h2;
            if (n.scaleBreaks)
              for (h2 = 0; !g && h2 < n.scaleBreaks._appliedBreaks.length; h2++)
                g = n.scaleBreaks._appliedBreaks[h2].startValue <= r && n.scaleBreaks._appliedBreaks[h2].endValue >= f;
            if (isFinite(n.dataInfo.minDiff)) {
              if (h2 = n.getApparentDifference(r, f, null, true), !(g || !(this.panEnabled && n.scaleBreaks && n.scaleBreaks._appliedBreaks.length) && (n.logarithmic && h2 < Math.pow(n.dataInfo.minDiff, 3) || !n.logarithmic && h2 < 3 * Math.abs(n.dataInfo.minDiff)) || r < n.minimum || f > n.maximum))
                C.push(n), l.push({ val1: r, val2: f }), t = true;
              else if (!e) {
                t = false;
                break;
              }
            }
          }
          return { isValid: t, axesWithValidRange: C, axesRanges: l };
        };
        p.prototype.preparePlotArea = function() {
          var a = this.plotArea;
          !u && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
          if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
            var d = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
            if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
              var c = this.axisY[0];
              a.x1 = d.x1 < d.x2 ? d.x1 : c.lineCoordinates.x1;
              a.y1 = d.y1 < c.lineCoordinates.y1 ? d.y1 : c.lineCoordinates.y1;
              a.x2 = d.x2 > c.lineCoordinates.x2 ? d.x2 : c.lineCoordinates.x2;
              a.y2 = d.y1 > c.lineCoordinates.y2 ? d.y1 : c.lineCoordinates.y2;
              a.width = a.x2 - a.x1;
              a.height = a.y2 - a.y1;
            }
            this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (c = this.axisY2[0], a.x1 = d.x1 < d.x2 ? d.x1 : c.lineCoordinates.x1, a.y1 = d.y1 < c.lineCoordinates.y1 ? d.y1 : c.lineCoordinates.y1, a.x2 = d.x2 > c.lineCoordinates.x2 ? d.x2 : c.lineCoordinates.x2, a.y2 = d.y2 > c.lineCoordinates.y2 ? d.y2 : c.lineCoordinates.y2, a.width = a.x2 - a.x1, a.height = a.y2 - a.y1);
          } else
            d = this.layoutManager.getFreeSpace(), a.x1 = d.x1, a.x2 = d.x2, a.y1 = d.y1, a.y2 = d.y2, a.width = d.width, a.height = d.height;
          u || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
          a.layoutManager = new Fa(a.x1, a.y1, a.x2, a.y2, 2);
        };
        p.prototype.renderIndexLabels = function(a) {
          var d = a || this.plotArea.ctx, c = this.plotArea, b = 0, e = 0, g = 0, q = g = e = 0, t = 0, C = b = 0, k = 0;
          for (a = 0; a < this._indexLabels.length; a++) {
            var l = this._indexLabels[a], n = l.chartType.toLowerCase(), r, f, q = oa(
              "indexLabelFontColor",
              l.dataPoint,
              l.dataSeries
            ), h2 = oa("indexLabelFontSize", l.dataPoint, l.dataSeries), t = oa("indexLabelFontFamily", l.dataPoint, l.dataSeries), C = oa("indexLabelFontStyle", l.dataPoint, l.dataSeries), k = oa("indexLabelFontWeight", l.dataPoint, l.dataSeries), J = oa("indexLabelBackgroundColor", l.dataPoint, l.dataSeries);
            r = oa("indexLabelMaxWidth", l.dataPoint, l.dataSeries);
            f = oa("indexLabelWrap", l.dataPoint, l.dataSeries);
            var x = oa("indexLabelLineDashType", l.dataPoint, l.dataSeries), s = oa("indexLabelLineColor", l.dataPoint, l.dataSeries), y = m(l.dataPoint.indexLabelLineThickness) ? m(l.dataSeries.options.indexLabelLineThickness) ? 0 : l.dataSeries.options.indexLabelLineThickness : l.dataPoint.indexLabelLineThickness, b = 0 < y ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0, v = { percent: null, total: null }, p2 = null;
            if (0 <= l.dataSeries.type.indexOf("stacked") || "pie" === l.dataSeries.type || "doughnut" === l.dataSeries.type)
              v = this.getPercentAndTotal(l.dataSeries, l.dataPoint);
            if (l.dataSeries.indexLabelFormatter || l.dataPoint.indexLabelFormatter)
              p2 = { chart: this, dataSeries: l.dataSeries, dataPoint: l.dataPoint, index: l.indexKeyword, total: v.total, percent: v.percent };
            var A = l.dataPoint.indexLabelFormatter ? l.dataPoint.indexLabelFormatter(p2) : l.dataPoint.indexLabel ? this.replaceKeywordsWithValue(l.dataPoint.indexLabel, l.dataPoint, l.dataSeries, null, l.indexKeyword) : l.dataSeries.indexLabelFormatter ? l.dataSeries.indexLabelFormatter(p2) : l.dataSeries.indexLabel ? this.replaceKeywordsWithValue(
              l.dataSeries.indexLabel,
              l.dataPoint,
              l.dataSeries,
              null,
              l.indexKeyword
            ) : null;
            if (null !== A && "" !== A) {
              var v = oa("indexLabelPlacement", l.dataPoint, l.dataSeries), p2 = oa("indexLabelOrientation", l.dataPoint, l.dataSeries), B = oa("indexLabelTextAlign", l.dataPoint, l.dataSeries), w3 = l.direction, e = l.dataSeries.axisX, g = l.dataSeries.axisY, z3 = false, J = new la(d, { x: 0, y: 0, maxWidth: r ? r : 0.5 * this.width, maxHeight: f ? 5 * h2 : 1.5 * h2, angle: "horizontal" === p2 ? 0 : -90, text: A, padding: 0, backgroundColor: J, textAlign: B, fontSize: h2, fontFamily: t, fontWeight: k, fontColor: q, fontStyle: C, textBaseline: "middle" });
              J.measureText();
              l.dataSeries.indexLabelMaxWidth = J.maxWidth;
              if ("stackedarea100" === n) {
                if (l.point.x < c.x1 || l.point.x > c.x2 || l.point.y < c.y1 - 1 || l.point.y > c.y2 + 1)
                  continue;
              } else if ("rangearea" === n || "rangesplinearea" === n) {
                if (l.dataPoint.x < e.viewportMinimum || l.dataPoint.x > e.viewportMaximum || Math.max.apply(null, l.dataPoint.y) < g.viewportMinimum || Math.min.apply(null, l.dataPoint.y) > g.viewportMaximum)
                  continue;
              } else if (0 <= n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("bubble") || 0 <= n.indexOf("scatter")) {
                if (l.dataPoint.x < e.viewportMinimum || l.dataPoint.x > e.viewportMaximum || l.dataPoint.y < g.viewportMinimum || l.dataPoint.y > g.viewportMaximum)
                  continue;
              } else if (0 <= n.indexOf("column") || "waterfall" === n || "error" === n && !l.axisSwapped) {
                if (l.dataPoint.x < e.viewportMinimum || l.dataPoint.x > e.viewportMaximum || l.bounds.y1 > c.y2 || l.bounds.y2 < c.y1)
                  continue;
              } else if (0 <= n.indexOf("bar") || "error" === n) {
                if (l.dataPoint.x < e.viewportMinimum || l.dataPoint.x > e.viewportMaximum || l.bounds.x1 > c.x2 || l.bounds.x2 < c.x1)
                  continue;
              } else if ("candlestick" === n || "ohlc" === n) {
                if (l.dataPoint.x < e.viewportMinimum || l.dataPoint.x > e.viewportMaximum || Math.max.apply(null, l.dataPoint.y) < g.viewportMinimum || Math.min.apply(null, l.dataPoint.y) > g.viewportMaximum)
                  continue;
              } else if (l.dataPoint.x < e.viewportMinimum || l.dataPoint.x > e.viewportMaximum)
                continue;
              q = t = 2;
              "horizontal" === p2 ? (C = J.width, k = J.height) : (k = J.width, C = J.height);
              if ("normal" === this.plotInfo.axisPlacement) {
                if (0 <= n.indexOf("line") || 0 <= n.indexOf("area"))
                  v = "auto", t = 4;
                else if (0 <= n.indexOf("stacked"))
                  "auto" === v && (v = "inside");
                else if ("bubble" === n || "scatter" === n)
                  v = "inside";
                r = l.point.x - ("horizontal" === p2 ? C / 2 : C / 2 - h2 / 2);
                "inside" !== v ? (e = c.y1, g = c.y2, 0 < w3 ? (f = l.point.y + ("horizontal" === p2 ? h2 / 2 : 0) - k - t - b, f < e && (f = "auto" === v ? Math.max(l.point.y, e) + h2 / 2 + t : e + h2 / 2 + t, z3 = f + k > l.point.y)) : (f = l.point.y + h2 / 2 + t + b, f > g - k && (f = "auto" === v ? Math.min(l.point.y, g) + h2 / 2 - k - t : g + h2 / 2 - k, z3 = f < l.point.y))) : (e = Math.max(l.bounds.y1, c.y1), g = Math.min(l.bounds.y2, c.y2 - k + h2 / 2), b = 0 <= n.indexOf("range") || "error" === n ? 0 < w3 ? Math.max(l.bounds.y1, c.y1) + h2 / 2 + t : Math.min(l.bounds.y2, c.y2) + h2 / 2 - k + t : (Math.max(
                  l.bounds.y1,
                  c.y1
                ) + Math.min(l.bounds.y2, c.y2)) / 2 - k / 2 + h2 / 2 + ("horizontal" === p2 ? t : 0), 0 < w3 ? (f = Math.max(l.point.y, b), f < e && ("bubble" === n || "scatter" === n) && (f = Math.max(l.point.y - k - t, c.y1 + t))) : (f = Math.min(l.point.y, b), f > g - k - t && ("bubble" === n || "scatter" === n) && (f = Math.min(l.point.y + t, c.y2 - k - t))), f = Math.min(f, g));
              } else
                0 <= n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("scatter") ? (v = "auto", q = 4) : 0 <= n.indexOf("stacked") ? "auto" === v && (v = "inside") : "bubble" === n && (v = "inside"), f = l.point.y + h2 / 2 - k / 2 + t, "inside" !== v ? (e = c.x1, g = c.x2, 0 > w3 ? (r = l.point.x - ("horizontal" === p2 ? C : C - h2 / 2) - q - b, r < e && (r = "auto" === v ? Math.max(l.point.x, e) + q : e + q, z3 = r + C > l.point.x)) : (r = l.point.x + ("horizontal" === p2 ? 0 : h2 / 2) + q + b, r > g - C - q - b && (r = "auto" === v ? Math.min(l.point.x, g) - ("horizontal" === p2 ? C : C / 2) - q : g - C - q, z3 = r < l.point.x))) : (e = Math.max(l.bounds.x1, c.x1), Math.min(l.bounds.x2, c.x2), b = 0 <= n.indexOf("range") || "error" === n ? 0 > w3 ? Math.max(l.bounds.x1, c.x1) + h2 / 2 + q : Math.min(l.bounds.x2, c.x2) - C / 2 - q + ("horizontal" === p2 ? 0 : h2 / 2) : (Math.max(l.bounds.x1, c.x1) + Math.min(l.bounds.x2, c.x2)) / 2 + ("horizontal" === p2 ? 0 : h2 / 2), r = 0 > w3 ? Math.max(l.point.x, b) - ("horizontal" === p2 ? C / 2 : 0) : Math.min(l.point.x, b) - C / 2, r = Math.max(r, e));
              "vertical" === p2 && (f += k - h2 / 2);
              J.x = r;
              J.y = f;
              J.render(true);
              y && ("inside" !== v && (0 > n.indexOf("bar") && ("error" !== n || !l.axisSwapped) && l.point.x > c.x1 && l.point.x < c.x2 || !z3) && (0 > n.indexOf("column") && ("error" !== n || l.axisSwapped) && l.point.y > c.y1 && l.point.y < c.y2 || !z3)) && (d.lineWidth = y, d.strokeStyle = s ? s : "gray", d.setLineDash && d.setLineDash(I(x, y)), d.beginPath(), d.moveTo(l.point.x, l.point.y), 0 <= n.indexOf("bar") || "error" === n && l.axisSwapped ? d.lineTo(r + (0 < l.direction ? -q : C + q) + ("vertical" === p2 ? -h2 / 2 : 0), f + ("vertical" === p2 ? -k / 2 : k / 2 - h2 / 2) - t) : 0 <= n.indexOf("column") || "error" === n && !l.axisSwapped ? d.lineTo(r + C / 2 - ("horizontal" === p2 ? 0 : h2 / 2), f + ("vertical" === p2 ? (f - k < l.point.y ? 0 : -k) + t : (f - h2 / 2 < l.point.y ? k : 0) - h2 / 2)) : 0 <= n.indexOf("waterfall") ? d.lineTo(r + C / 2 - ("horizontal" === p2 ? 0 : h2 / 2), "vertical" === p2 ? 0 < w3 && f < l.point.y ? f : 0 > w3 && f - k > l.point.y ? f - k : l.point.y : 0 < w3 && f + k - h2 / 2 < l.point.y ? f + k - h2 / 2 : 0 > w3 && f - h2 / 2 > l.point.y ? f - h2 / 2 - 2 : l.point.y) : d.lineTo(r + C / 2 - ("horizontal" === p2 ? 0 : h2 / 2), f + ("vertical" === p2 ? f - k < l.point.y ? 0 : -k : (f + k < l.point.y ? k : 0) - h2 / 2)), d.stroke());
            }
          }
          d = { source: d, dest: this.plotArea.ctx, animationCallback: O.fadeInAnimation, easingFunction: O.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 };
          for (a = 0; a < this._indexLabels.length; a++)
            l = this._indexLabels[a], J = oa("indexLabelBackgroundColor", l.dataPoint, l.dataSeries), l.dataSeries.indexLabelBackgroundColor = m(J) ? u ? "transparent" : null : J;
          return d;
        };
        p.prototype.renderLine = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var e = this.plotArea;
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            for (var g = [], q, t = 0; t < a.dataSeriesIndexes.length; t++) {
              var C = a.dataSeriesIndexes[t], k = this.data[C];
              c.lineWidth = k.lineThickness;
              var l = k.dataPoints, n = "solid";
              if (c.setLineDash) {
                var r = I(k.nullDataLineDashType, k.lineThickness), n = k.lineDashType, f = I(n, k.lineThickness);
                c.setLineDash(f);
              }
              var h2 = k.id;
              this._eventManager.objectMap[h2] = { objectType: "dataSeries", dataSeriesIndex: C };
              h2 = Z(h2);
              b.strokeStyle = h2;
              b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var h2 = k._colorSet, m2 = h2 = k.lineColor = k.options.lineColor ? k.options.lineColor : h2[0];
              c.strokeStyle = h2;
              var x = true, s = 0, p2, v;
              c.beginPath();
              if (0 < l.length) {
                for (var H = false, s = 0; s < l.length; s++)
                  if (p2 = l[s].x.getTime ? l[s].x.getTime() : l[s].x, !(p2 < a.axisX.dataInfo.viewPortMin || p2 > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !H)))
                    if ("number" !== typeof l[s].y)
                      0 < s && !(k.connectNullData || H || x) && (c.stroke(), u && b.stroke()), H = true;
                    else {
                      p2 = a.axisX.convertValueToPixel(p2);
                      v = a.axisY.convertValueToPixel(l[s].y);
                      var A = k.dataPointIds[s];
                      this._eventManager.objectMap[A] = { id: A, objectType: "dataPoint", dataSeriesIndex: C, dataPointIndex: s, x1: p2, y1: v };
                      x || H ? (!x && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || n === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(q.x, q.y), n = k.nullDataLineDashType, c.setLineDash(r)), c.lineTo(p2, v), u && b.lineTo(p2, v)) : (c.beginPath(), c.moveTo(
                        p2,
                        v
                      ), u && (b.beginPath(), b.moveTo(p2, v))), H = x = false) : (c.lineTo(p2, v), u && b.lineTo(p2, v), 0 == s % 500 && (c.stroke(), c.beginPath(), c.moveTo(p2, v), u && (b.stroke(), b.beginPath(), b.moveTo(p2, v))));
                      q = { x: p2, y: v };
                      s < l.length - 1 && (m2 !== (l[s].lineColor || h2) || n !== (l[s].lineDashType || k.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(p2, v), m2 = l[s].lineColor || h2, c.strokeStyle = m2, c.setLineDash && (l[s].lineDashType ? (n = l[s].lineDashType, c.setLineDash(I(n, k.lineThickness))) : (n = k.lineDashType, c.setLineDash(f))));
                      if (0 !== l[s].markerSize && (0 < l[s].markerSize || 0 < k.markerSize)) {
                        var B = k.getMarkerProperties(s, p2, v, c);
                        g.push(B);
                        A = Z(A);
                        u && g.push({ x: p2, y: v, ctx: b, type: B.type, size: B.size, color: A, borderColor: A, borderThickness: B.borderThickness });
                      }
                      (l[s].indexLabel || k.indexLabel || l[s].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "line", dataPoint: l[s], dataSeries: k, point: { x: p2, y: v }, direction: 0 > l[s].y === a.axisY.reversed ? 1 : -1, color: h2 });
                    }
                c.stroke();
                u && b.stroke();
              }
            }
            X.drawMarkers(g);
            u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath());
            c.restore();
            c.beginPath();
            return { source: d, dest: this.plotArea.ctx, animationCallback: O.xClipAnimation, easingFunction: O.easing.linear, animationBase: 0 };
          }
        };
        p.prototype.renderStepLine = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx;
            c.save();
            var e = this.plotArea;
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            for (var g = [], q, t = 0; t < a.dataSeriesIndexes.length; t++) {
              var C = a.dataSeriesIndexes[t], k = this.data[C];
              c.lineWidth = k.lineThickness;
              var l = k.dataPoints, n = "solid";
              if (c.setLineDash) {
                var r = I(k.nullDataLineDashType, k.lineThickness), n = k.lineDashType, f = I(n, k.lineThickness);
                c.setLineDash(f);
              }
              var h2 = k.id;
              this._eventManager.objectMap[h2] = { objectType: "dataSeries", dataSeriesIndex: C };
              h2 = Z(h2);
              b.strokeStyle = h2;
              b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var h2 = k._colorSet, m2 = h2 = k.lineColor = k.options.lineColor ? k.options.lineColor : h2[0];
              c.strokeStyle = h2;
              var p2 = true, s = 0, y, v;
              c.beginPath();
              if (0 < l.length) {
                for (var H = false, s = 0; s < l.length; s++)
                  if (y = l[s].getTime ? l[s].x.getTime() : l[s].x, !(y < a.axisX.dataInfo.viewPortMin || y > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !H)))
                    if ("number" !== typeof l[s].y)
                      0 < s && !(k.connectNullData || H || p2) && (c.stroke(), u && b.stroke()), H = true;
                    else {
                      var A = v;
                      y = a.axisX.convertValueToPixel(y);
                      v = a.axisY.convertValueToPixel(l[s].y);
                      var B = k.dataPointIds[s];
                      this._eventManager.objectMap[B] = { id: B, objectType: "dataPoint", dataSeriesIndex: C, dataPointIndex: s, x1: y, y1: v };
                      p2 || H ? (!p2 && k.connectNullData ? (c.setLineDash && (k.options.nullDataLineDashType || n === k.lineDashType && k.lineDashType !== k.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(q.x, q.y), n = k.nullDataLineDashType, c.setLineDash(r)), c.lineTo(y, A), c.lineTo(y, v), u && (b.lineTo(y, A), b.lineTo(y, v))) : (c.beginPath(), c.moveTo(y, v), u && (b.beginPath(), b.moveTo(y, v))), H = p2 = false) : (c.lineTo(y, A), u && b.lineTo(y, A), c.lineTo(y, v), u && b.lineTo(y, v), 0 == s % 500 && (c.stroke(), c.beginPath(), c.moveTo(y, v), u && (b.stroke(), b.beginPath(), b.moveTo(y, v))));
                      q = { x: y, y: v };
                      s < l.length - 1 && (m2 !== (l[s].lineColor || h2) || n !== (l[s].lineDashType || k.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(y, v), m2 = l[s].lineColor || h2, c.strokeStyle = m2, c.setLineDash && (l[s].lineDashType ? (n = l[s].lineDashType, c.setLineDash(I(n, k.lineThickness))) : (n = k.lineDashType, c.setLineDash(f))));
                      0 !== l[s].markerSize && (0 < l[s].markerSize || 0 < k.markerSize) && (A = k.getMarkerProperties(s, y, v, c), g.push(A), B = Z(B), u && g.push({ x: y, y: v, ctx: b, type: A.type, size: A.size, color: B, borderColor: B, borderThickness: A.borderThickness }));
                      (l[s].indexLabel || k.indexLabel || l[s].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepLine", dataPoint: l[s], dataSeries: k, point: { x: y, y: v }, direction: 0 > l[s].y === a.axisY.reversed ? 1 : -1, color: h2 });
                    }
                c.stroke();
                u && b.stroke();
              }
            }
            X.drawMarkers(g);
            u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath());
            c.restore();
            c.beginPath();
            return { source: d, dest: this.plotArea.ctx, animationCallback: O.xClipAnimation, easingFunction: O.easing.linear, animationBase: 0 };
          }
        };
        p.prototype.renderSpline = function(a) {
          function d(a2) {
            a2 = w2(a2, 2);
            if (0 < a2.length) {
              b.beginPath();
              u && e.beginPath();
              b.moveTo(a2[0].x, a2[0].y);
              a2[0].newStrokeStyle && (b.strokeStyle = a2[0].newStrokeStyle);
              a2[0].newLineDashArray && b.setLineDash(a2[0].newLineDashArray);
              u && e.moveTo(a2[0].x, a2[0].y);
              for (var c2 = 0; c2 < a2.length - 3; c2 += 3)
                if (b.bezierCurveTo(a2[c2 + 1].x, a2[c2 + 1].y, a2[c2 + 2].x, a2[c2 + 2].y, a2[c2 + 3].x, a2[c2 + 3].y), u && e.bezierCurveTo(a2[c2 + 1].x, a2[c2 + 1].y, a2[c2 + 2].x, a2[c2 + 2].y, a2[c2 + 3].x, a2[c2 + 3].y), 0 < c2 && 0 === c2 % 3e3 || a2[c2 + 3].newStrokeStyle || a2[c2 + 3].newLineDashArray)
                  b.stroke(), b.beginPath(), b.moveTo(a2[c2 + 3].x, a2[c2 + 3].y), a2[c2 + 3].newStrokeStyle && (b.strokeStyle = a2[c2 + 3].newStrokeStyle), a2[c2 + 3].newLineDashArray && b.setLineDash(a2[c2 + 3].newLineDashArray), u && (e.stroke(), e.beginPath(), e.moveTo(a2[c2 + 3].x, a2[c2 + 3].y));
              b.stroke();
              u && e.stroke();
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = u ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx;
            b.save();
            var g = this.plotArea;
            b.beginPath();
            b.rect(g.x1, g.y1, g.width, g.height);
            b.clip();
            for (var q = [], t = 0; t < a.dataSeriesIndexes.length; t++) {
              var h2 = a.dataSeriesIndexes[t], k = this.data[h2];
              b.lineWidth = k.lineThickness;
              var l = k.dataPoints, n = "solid";
              if (b.setLineDash) {
                var r = I(k.nullDataLineDashType, k.lineThickness), n = k.lineDashType, f = I(n, k.lineThickness);
                b.setLineDash(f);
              }
              var m2 = k.id;
              this._eventManager.objectMap[m2] = { objectType: "dataSeries", dataSeriesIndex: h2 };
              m2 = Z(m2);
              e.strokeStyle = m2;
              e.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
              var m2 = k._colorSet, p2 = m2 = k.lineColor = k.options.lineColor ? k.options.lineColor : m2[0];
              b.strokeStyle = m2;
              var x = 0, s, y, v = [];
              b.beginPath();
              if (0 < l.length) {
                for (y = false, x = 0; x < l.length; x++)
                  if (s = l[x].getTime ? l[x].x.getTime() : l[x].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !y)))
                    if ("number" !== typeof l[x].y)
                      0 < x && !y && (k.connectNullData ? b.setLineDash && (0 < v.length && (k.options.nullDataLineDashType || !l[x - 1].lineDashType)) && (v[v.length - 1].newLineDashArray = r, n = k.nullDataLineDashType) : (d(v), v = [])), y = true;
                    else {
                      s = a.axisX.convertValueToPixel(s);
                      y = a.axisY.convertValueToPixel(l[x].y);
                      var H = k.dataPointIds[x];
                      this._eventManager.objectMap[H] = { id: H, objectType: "dataPoint", dataSeriesIndex: h2, dataPointIndex: x, x1: s, y1: y };
                      v[v.length] = { x: s, y };
                      x < l.length - 1 && (p2 !== (l[x].lineColor || m2) || n !== (l[x].lineDashType || k.lineDashType)) && (p2 = l[x].lineColor || m2, v[v.length - 1].newStrokeStyle = p2, b.setLineDash && (l[x].lineDashType ? (n = l[x].lineDashType, v[v.length - 1].newLineDashArray = I(n, k.lineThickness)) : (n = k.lineDashType, v[v.length - 1].newLineDashArray = f)));
                      if (0 !== l[x].markerSize && (0 < l[x].markerSize || 0 < k.markerSize)) {
                        var A = k.getMarkerProperties(x, s, y, b);
                        q.push(A);
                        H = Z(H);
                        u && q.push({ x: s, y, ctx: e, type: A.type, size: A.size, color: H, borderColor: H, borderThickness: A.borderThickness });
                      }
                      (l[x].indexLabel || k.indexLabel || l[x].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({ chartType: "spline", dataPoint: l[x], dataSeries: k, point: { x: s, y }, direction: 0 > l[x].y === a.axisY.reversed ? 1 : -1, color: m2 });
                      y = false;
                    }
              }
              d(v);
            }
            X.drawMarkers(q);
            u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(g.x1, g.y1, g.width, g.height), e.beginPath());
            b.restore();
            b.beginPath();
            return {
              source: c,
              dest: this.plotArea.ctx,
              animationCallback: O.xClipAnimation,
              easingFunction: O.easing.linear,
              animationBase: 0
            };
          }
        };
        p.prototype.renderColumn = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, g = 0, q, t, h2, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, l = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0, n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
            n = this.dataPointWidth = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && g > l && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, l));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && l < g) && (l = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
            n < g && (n = g);
            n > l && (n = l);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (l = 0; l < a.dataSeriesIndexes.length; l++) {
              var r = a.dataSeriesIndexes[l], f = this.data[r], m2 = f.dataPoints;
              if (0 < m2.length) {
                for (var p2 = 5 < n && f.bevelEnabled ? true : false, g = 0; g < m2.length; g++)
                  if (m2[g].getTime ? h2 = m2[g].x.getTime() : h2 = m2[g].x, !(h2 < a.axisX.dataInfo.viewPortMin || h2 > a.axisX.dataInfo.viewPortMax) && "number" === typeof m2[g].y) {
                    q = a.axisX.convertValueToPixel(h2);
                    t = a.axisY.convertValueToPixel(m2[g].y);
                    q = a.axisX.reversed ? q + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + l) * n << 0 : q - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + l) * n << 0;
                    var x = a.axisX.reversed ? q - n << 0 : q + n << 0, s;
                    0 <= m2[g].y ? s = k : (s = t, t = k);
                    t > s && (b = t, t = s, s = b);
                    b = m2[g].color ? m2[g].color : f._colorSet[g % f._colorSet.length];
                    ba(c, a.axisX.reversed ? x : q, t, a.axisX.reversed ? q : x, s, b, 0, null, p2 && (a.axisY.reversed ? 0 > m2[g].y : 0 <= m2[g].y), (a.axisY.reversed ? 0 <= m2[g].y : 0 > m2[g].y) && p2, false, false, f.fillOpacity);
                    b = f.dataPointIds[g];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: r, dataPointIndex: g, x1: q, y1: t, x2: x, y2: s };
                    b = Z(b);
                    u && ba(
                      this._eventManager.ghostCtx,
                      a.axisX.reversed ? x : q,
                      t,
                      a.axisX.reversed ? q : x,
                      s,
                      b,
                      0,
                      null,
                      false,
                      false,
                      false,
                      false
                    );
                    (m2[g].indexLabel || f.indexLabel || m2[g].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "column", dataPoint: m2[g], dataSeries: f, point: { x: q + (x - q) / 2, y: 0 > m2[g].y === a.axisY.reversed ? t : s }, direction: 0 > m2[g].y === a.axisY.reversed ? 1 : -1, bounds: { x1: q, y1: Math.min(t, s), x2: x, y2: Math.max(t, s) }, color: b });
                  }
              }
            }
            u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: O.yScaleAnimation, easingFunction: O.easing.easeOutQuart, animationBase: k < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : k > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : k };
          }
        };
        p.prototype.renderStackedColumn = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, g = [], q = [], t = [], h2 = [], k = 0, l, n, r = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0, m2 = a.axisX.dataInfo.minDiff;
            isFinite(m2) || (m2 = 0.3 * Math.abs(a.axisX.range));
            m2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(m2) / Math.log(a.axisX.range) : Math.abs(m2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            m2 < k && (m2 = k);
            m2 > f && (m2 = f);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var p2 = a.dataSeriesIndexes[f], x = this.data[p2], s = x.dataPoints;
              if (0 < s.length) {
                var y = 5 < m2 && x.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    l = a.axisX.convertValueToPixel(b);
                    l = l - a.plotType.plotUnits.length * m2 / 2 + a.index * m2 << 0;
                    var v = l + m2 << 0, H;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y)
                      t[b] = s[k].y + (t[b] ? t[b] : 0), 0 < t[b] && (n = a.axisY.convertValueToPixel(t[b]), H = "undefined" !== typeof g[b] ? g[b] : r, g[b] = n);
                    else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      h2[b] = s[k].y + (h2[b] ? h2[b] : 0), H = a.axisY.convertValueToPixel(h2[b]), n = "undefined" !== typeof q[b] ? q[b] : r, q[b] = H;
                    else if (n = a.axisY.convertValueToPixel(s[k].y), 0 <= s[k].y) {
                      var A = "undefined" !== typeof g[b] ? g[b] : 0;
                      n -= A;
                      H = r - A;
                      g[b] = A + (H - n);
                    } else
                      A = q[b] ? q[b] : 0, H = n + A, n = r + A, q[b] = A + (H - n);
                    b = s[k].color ? s[k].color : x._colorSet[k % x._colorSet.length];
                    ba(c, l, a.axisY.reversed ? H : n, v, a.axisY.reversed ? n : H, b, 0, null, y && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y), (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && y, false, false, x.fillOpacity);
                    b = x.dataPointIds[k];
                    this._eventManager.objectMap[b] = {
                      id: b,
                      objectType: "dataPoint",
                      dataSeriesIndex: p2,
                      dataPointIndex: k,
                      x1: l,
                      y1: n,
                      x2: v,
                      y2: H
                    };
                    b = Z(b);
                    u && ba(this._eventManager.ghostCtx, l, n, v, H, b, 0, null, false, false, false, false);
                    (s[k].indexLabel || x.indexLabel || s[k].indexLabelFormatter || x.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedColumn", dataPoint: s[k], dataSeries: x, point: { x: l + (v - l) / 2, y: 0 <= s[k].y ? n : H }, direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: l, y1: Math.min(n, H), x2: v, y2: Math.max(n, H) }, color: b });
                  }
              }
            }
            u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: O.yScaleAnimation, easingFunction: O.easing.easeOutQuart, animationBase: r < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : r > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : r };
          }
        };
        p.prototype.renderStackedColumn100 = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, g = [], q = [], t = [], h2 = [], k = 0, l, n, r = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0, m2 = a.axisX.dataInfo.minDiff;
            isFinite(m2) || (m2 = 0.3 * Math.abs(a.axisX.range));
            m2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(m2) / Math.log(a.axisX.range) : Math.abs(m2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            m2 < k && (m2 = k);
            m2 > f && (m2 = f);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var p2 = a.dataSeriesIndexes[f], x = this.data[p2], s = x.dataPoints;
              if (0 < s.length) {
                for (var y = 5 < m2 && x.bevelEnabled ? true : false, k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    l = a.axisX.convertValueToPixel(b);
                    n = 0 !== a.dataPointYSums[b] ? 100 * (s[k].y / a.dataPointYSums[b]) : 0;
                    l = l - a.plotType.plotUnits.length * m2 / 2 + a.index * m2 << 0;
                    var v = l + m2 << 0, H;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y) {
                      t[b] = n + ("undefined" !== typeof t[b] ? t[b] : 0);
                      if (0 >= t[b])
                        continue;
                      n = a.axisY.convertValueToPixel(t[b]);
                      H = g[b] ? g[b] : r;
                      g[b] = n;
                    } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      h2[b] = n + ("undefined" !== typeof h2[b] ? h2[b] : 0), H = a.axisY.convertValueToPixel(h2[b]), n = q[b] ? q[b] : r, q[b] = H;
                    else if (n = a.axisY.convertValueToPixel(n), 0 <= s[k].y) {
                      var A = "undefined" !== typeof g[b] ? g[b] : 0;
                      n -= A;
                      H = r - A;
                      a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.y1 - n) && (n = e.y1);
                      g[b] = A + (H - n);
                    } else
                      A = "undefined" !== typeof q[b] ? q[b] : 0, H = n + A, n = r + A, a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.y2 - H) && (H = e.y2), q[b] = A + (H - n);
                    b = s[k].color ? s[k].color : x._colorSet[k % x._colorSet.length];
                    ba(c, l, a.axisY.reversed ? H : n, v, a.axisY.reversed ? n : H, b, 0, null, y && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y), (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && y, false, false, x.fillOpacity);
                    b = x.dataPointIds[k];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: p2, dataPointIndex: k, x1: l, y1: n, x2: v, y2: H };
                    b = Z(b);
                    u && ba(this._eventManager.ghostCtx, l, n, v, H, b, 0, null, false, false, false, false);
                    (s[k].indexLabel || x.indexLabel || s[k].indexLabelFormatter || x.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "stackedColumn100",
                      dataPoint: s[k],
                      dataSeries: x,
                      point: { x: l + (v - l) / 2, y: 0 <= s[k].y ? n : H },
                      direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                      bounds: { x1: l, y1: Math.min(n, H), x2: v, y2: Math.max(n, H) },
                      color: b
                    });
                  }
              }
            }
            u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: O.yScaleAnimation, easingFunction: O.easing.easeOutQuart, animationBase: r < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : r > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : r };
          }
        };
        p.prototype.renderBar = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, g = 0, q, t, h2, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, l = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0, n = a.axisX.dataInfo.minDiff;
            isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
            n = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && g > l && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, l));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && l < g) && (l = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
            n < g && (n = g);
            n > l && (n = l);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(
              e.x1,
              e.y1,
              e.width,
              e.height
            ), this._eventManager.ghostCtx.clip());
            for (l = 0; l < a.dataSeriesIndexes.length; l++) {
              var r = a.dataSeriesIndexes[l], f = this.data[r], m2 = f.dataPoints;
              if (0 < m2.length) {
                var p2 = 5 < n && f.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (g = 0; g < m2.length; g++)
                  if (m2[g].getTime ? h2 = m2[g].x.getTime() : h2 = m2[g].x, !(h2 < a.axisX.dataInfo.viewPortMin || h2 > a.axisX.dataInfo.viewPortMax) && "number" === typeof m2[g].y) {
                    t = a.axisX.convertValueToPixel(h2);
                    q = a.axisY.convertValueToPixel(m2[g].y);
                    t = a.axisX.reversed ? t + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + l) * n << 0 : t - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + l) * n << 0;
                    var x = a.axisX.reversed ? t - n << 0 : t + n << 0, s;
                    0 <= m2[g].y ? s = k : (s = q, q = k);
                    b = m2[g].color ? m2[g].color : f._colorSet[g % f._colorSet.length];
                    ba(c, a.axisY.reversed ? q : s, a.axisX.reversed ? x : t, a.axisY.reversed ? s : q, a.axisX.reversed ? t : x, b, 0, null, p2, false, false, false, f.fillOpacity);
                    b = f.dataPointIds[g];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: r, dataPointIndex: g, x1: s, y1: t, x2: q, y2: x };
                    b = Z(b);
                    u && ba(
                      this._eventManager.ghostCtx,
                      s,
                      a.axisX.reversed ? x : t,
                      q,
                      a.axisX.reversed ? t : x,
                      b,
                      0,
                      null,
                      false,
                      false,
                      false,
                      false
                    );
                    (m2[g].indexLabel || f.indexLabel || m2[g].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "bar", dataPoint: m2[g], dataSeries: f, point: { x: 0 <= m2[g].y ? q : s, y: t + (x - t) / 2 }, direction: 0 > m2[g].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(s, q), y1: t, x2: Math.max(s, q), y2: x }, color: b });
                  }
              }
            }
            u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(
              a.axisX.maskCanvas,
              0,
              0,
              this.width,
              this.height
            ), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: O.xScaleAnimation, easingFunction: O.easing.easeOutQuart, animationBase: k < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : k > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : k };
          }
        };
        p.prototype.renderStackedBar = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, g = [], q = [], t = [], h2 = [], k = 0, l, n, r = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, m2 = a.axisX.dataInfo.minDiff;
            isFinite(m2) || (m2 = 0.3 * Math.abs(a.axisX.range));
            m2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(m2) / Math.log(a.axisX.range) : Math.abs(m2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            m2 < k && (m2 = k);
            m2 > f && (m2 = f);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var p2 = a.dataSeriesIndexes[f], x = this.data[p2], s = x.dataPoints;
              if (0 < s.length) {
                var y = 5 < m2 && x.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    n = a.axisX.convertValueToPixel(b);
                    n = n - a.plotType.plotUnits.length * m2 / 2 + a.index * m2 << 0;
                    var v = n + m2 << 0, H;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y)
                      t[b] = s[k].y + (t[b] ? t[b] : 0), 0 < t[b] && (H = g[b] ? g[b] : r, g[b] = l = a.axisY.convertValueToPixel(t[b]));
                    else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      h2[b] = s[k].y + (h2[b] ? h2[b] : 0), l = q[b] ? q[b] : r, q[b] = H = a.axisY.convertValueToPixel(h2[b]);
                    else if (l = a.axisY.convertValueToPixel(s[k].y), 0 <= s[k].y) {
                      var A = g[b] ? g[b] : 0;
                      H = r + A;
                      l += A;
                      g[b] = A + (l - H);
                    } else
                      A = q[b] ? q[b] : 0, H = l - A, l = r - A, q[b] = A + (l - H);
                    b = s[k].color ? s[k].color : x._colorSet[k % x._colorSet.length];
                    ba(c, a.axisY.reversed ? l : H, n, a.axisY.reversed ? H : l, v, b, 0, null, y, false, false, false, x.fillOpacity);
                    b = x.dataPointIds[k];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: p2, dataPointIndex: k, x1: H, y1: n, x2: l, y2: v };
                    b = Z(b);
                    u && ba(
                      this._eventManager.ghostCtx,
                      H,
                      n,
                      l,
                      v,
                      b,
                      0,
                      null,
                      false,
                      false,
                      false,
                      false
                    );
                    (s[k].indexLabel || x.indexLabel || s[k].indexLabelFormatter || x.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedBar", dataPoint: s[k], dataSeries: x, point: { x: 0 <= s[k].y ? l : H, y: n + (v - n) / 2 }, direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(H, l), y1: n, x2: Math.max(H, l), y2: v }, color: b });
                  }
              }
            }
            u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(
              a.axisX.maskCanvas,
              0,
              0,
              this.width,
              this.height
            ), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: O.xScaleAnimation, easingFunction: O.easing.easeOutQuart, animationBase: r < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : r > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : r };
          }
        };
        p.prototype.renderStackedBar100 = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, g = [], q = [], t = [], h2 = [], k = 0, l, n, r = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0, m2 = a.axisX.dataInfo.minDiff;
            isFinite(m2) || (m2 = 0.3 * Math.abs(a.axisX.range));
            m2 = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(m2) / Math.log(a.axisX.range) : Math.abs(m2) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
            this.dataPointMaxWidth && k > f && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && f < k) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
            m2 < k && (m2 = k);
            m2 > f && (m2 = f);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (f = 0; f < a.dataSeriesIndexes.length; f++) {
              var p2 = a.dataSeriesIndexes[f], x = this.data[p2], s = x.dataPoints;
              if (0 < s.length) {
                var y = 5 < m2 && x.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (k = 0; k < s.length; k++)
                  if (b = s[k].x.getTime ? s[k].x.getTime() : s[k].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y) {
                    n = a.axisX.convertValueToPixel(b);
                    var v;
                    v = 0 !== a.dataPointYSums[b] ? 100 * (s[k].y / a.dataPointYSums[b]) : 0;
                    n = n - a.plotType.plotUnits.length * m2 / 2 + a.index * m2 << 0;
                    var H = n + m2 << 0;
                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y) {
                      t[b] = v + (t[b] ? t[b] : 0);
                      if (0 >= t[b])
                        continue;
                      v = g[b] ? g[b] : r;
                      g[b] = l = a.axisY.convertValueToPixel(t[b]);
                    } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                      h2[b] = v + (h2[b] ? h2[b] : 0), l = q[b] ? q[b] : r, q[b] = v = a.axisY.convertValueToPixel(h2[b]);
                    else if (l = a.axisY.convertValueToPixel(v), 0 <= s[k].y) {
                      var A = g[b] ? g[b] : 0;
                      v = r + A;
                      l += A;
                      a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.x2 - l) && (l = e.x2);
                      g[b] = A + (l - v);
                    } else
                      A = q[b] ? q[b] : 0, v = l - A, l = r - A, a.dataSeriesIndexes.length - 1 === f && 1 >= Math.abs(e.x1 - v) && (v = e.x1), q[b] = A + (l - v);
                    b = s[k].color ? s[k].color : x._colorSet[k % x._colorSet.length];
                    ba(c, a.axisY.reversed ? l : v, n, a.axisY.reversed ? v : l, H, b, 0, null, y, false, false, false, x.fillOpacity);
                    b = x.dataPointIds[k];
                    this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: p2, dataPointIndex: k, x1: v, y1: n, x2: l, y2: H };
                    b = Z(b);
                    u && ba(this._eventManager.ghostCtx, v, n, l, H, b, 0, null, false, false, false, false);
                    (s[k].indexLabel || x.indexLabel || s[k].indexLabelFormatter || x.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedBar100", dataPoint: s[k], dataSeries: x, point: { x: 0 <= s[k].y ? l : v, y: n + (H - n) / 2 }, direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(v, l), y1: n, x2: Math.max(v, l), y2: H }, color: b });
                  }
              }
            }
            u && (d.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: d,
              dest: this.plotArea.ctx,
              animationCallback: O.xScaleAnimation,
              easingFunction: O.easing.easeOutQuart,
              animationBase: r < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : r > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : r
            };
          }
        };
        p.prototype.renderArea = function(a) {
          var d, c;
          function b() {
            A && (0 < f.lineThickness && g.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? H = v : 0 > a.axisY.viewportMaximum ? H = t.y1 : 0 < a.axisY.viewportMinimum && (H = v), g.lineTo(x, H), g.lineTo(A.x, H), g.closePath(), g.globalAlpha = f.fillOpacity, g.fill(), g.globalAlpha = 1, u && (q.lineTo(x, H), q.lineTo(A.x, H), q.closePath(), q.fill()), g.beginPath(), g.moveTo(
              x,
              s
            ), q.beginPath(), q.moveTo(x, s), A = { x, y: s });
          }
          var e = a.targetCanvasCtx || this.plotArea.ctx, g = u ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var q = this._eventManager.ghostCtx, t = a.axisY.lineCoordinates, h2 = [], k = this.plotArea, l;
            g.save();
            u && q.save();
            g.beginPath();
            g.rect(k.x1, k.y1, k.width, k.height);
            g.clip();
            u && (q.beginPath(), q.rect(k.x1, k.y1, k.width, k.height), q.clip());
            for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
              var r = a.dataSeriesIndexes[n], f = this.data[r], m2 = f.dataPoints, h2 = f.id;
              this._eventManager.objectMap[h2] = { objectType: "dataSeries", dataSeriesIndex: r };
              h2 = Z(h2);
              q.fillStyle = h2;
              h2 = [];
              d = true;
              var p2 = 0, x, s, y, v = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), H, A = null;
              if (0 < m2.length) {
                var B = f._colorSet[p2 % f._colorSet.length], w3 = f.lineColor = f.options.lineColor || B, z3 = w3;
                g.fillStyle = B;
                g.strokeStyle = w3;
                g.lineWidth = f.lineThickness;
                c = "solid";
                if (g.setLineDash) {
                  var L = I(f.nullDataLineDashType, f.lineThickness);
                  c = f.lineDashType;
                  var T = I(c, f.lineThickness);
                  g.setLineDash(T);
                }
                for (var ha = true; p2 < m2.length; p2++)
                  if (y = m2[p2].x.getTime ? m2[p2].x.getTime() : m2[p2].x, !(y < a.axisX.dataInfo.viewPortMin || y > a.axisX.dataInfo.viewPortMax && (!f.connectNullData || !ha)))
                    if ("number" !== typeof m2[p2].y)
                      f.connectNullData || (ha || d) || b(), ha = true;
                    else {
                      x = a.axisX.convertValueToPixel(y);
                      s = a.axisY.convertValueToPixel(m2[p2].y);
                      d || ha ? (!d && f.connectNullData ? (g.setLineDash && (f.options.nullDataLineDashType || c === f.lineDashType && f.lineDashType !== f.nullDataLineDashType) && (d = x, c = s, x = l.x, s = l.y, b(), g.moveTo(l.x, l.y), x = d, s = c, A = l, c = f.nullDataLineDashType, g.setLineDash(L)), g.lineTo(
                        x,
                        s
                      ), u && q.lineTo(x, s)) : (g.beginPath(), g.moveTo(x, s), u && (q.beginPath(), q.moveTo(x, s)), A = { x, y: s }), ha = d = false) : (g.lineTo(x, s), u && q.lineTo(x, s), 0 == p2 % 250 && b());
                      l = { x, y: s };
                      p2 < m2.length - 1 && (z3 !== (m2[p2].lineColor || w3) || c !== (m2[p2].lineDashType || f.lineDashType)) && (b(), z3 = m2[p2].lineColor || w3, g.strokeStyle = z3, g.setLineDash && (m2[p2].lineDashType ? (c = m2[p2].lineDashType, g.setLineDash(I(c, f.lineThickness))) : (c = f.lineDashType, g.setLineDash(T))));
                      var ca = f.dataPointIds[p2];
                      this._eventManager.objectMap[ca] = {
                        id: ca,
                        objectType: "dataPoint",
                        dataSeriesIndex: r,
                        dataPointIndex: p2,
                        x1: x,
                        y1: s
                      };
                      0 !== m2[p2].markerSize && (0 < m2[p2].markerSize || 0 < f.markerSize) && (y = f.getMarkerProperties(p2, x, s, g), h2.push(y), ca = Z(ca), u && h2.push({ x, y: s, ctx: q, type: y.type, size: y.size, color: ca, borderColor: ca, borderThickness: y.borderThickness }));
                      (m2[p2].indexLabel || f.indexLabel || m2[p2].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "area", dataPoint: m2[p2], dataSeries: f, point: { x, y: s }, direction: 0 > m2[p2].y === a.axisY.reversed ? 1 : -1, color: B });
                    }
                b();
                X.drawMarkers(h2);
              }
            }
            u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), g.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && g.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && g.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), g.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore());
            g.restore();
            return {
              source: e,
              dest: this.plotArea.ctx,
              animationCallback: O.xClipAnimation,
              easingFunction: O.easing.linear,
              animationBase: 0
            };
          }
        };
        p.prototype.renderSplineArea = function(a) {
          function d() {
            var c2 = w2(y, 2);
            if (0 < c2.length) {
              if (0 < l.lineThickness) {
                b.beginPath();
                b.moveTo(c2[0].x, c2[0].y);
                c2[0].newStrokeStyle && (b.strokeStyle = c2[0].newStrokeStyle);
                c2[0].newLineDashArray && b.setLineDash(c2[0].newLineDashArray);
                for (var d2 = 0; d2 < c2.length - 3; d2 += 3)
                  if (b.bezierCurveTo(c2[d2 + 1].x, c2[d2 + 1].y, c2[d2 + 2].x, c2[d2 + 2].y, c2[d2 + 3].x, c2[d2 + 3].y), u && e.bezierCurveTo(c2[d2 + 1].x, c2[d2 + 1].y, c2[d2 + 2].x, c2[d2 + 2].y, c2[d2 + 3].x, c2[d2 + 3].y), c2[d2 + 3].newStrokeStyle || c2[d2 + 3].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(c2[d2 + 3].x, c2[d2 + 3].y), c2[d2 + 3].newStrokeStyle && (b.strokeStyle = c2[d2 + 3].newStrokeStyle), c2[d2 + 3].newLineDashArray && b.setLineDash(c2[d2 + 3].newLineDashArray);
                b.stroke();
              }
              b.beginPath();
              b.moveTo(c2[0].x, c2[0].y);
              u && (e.beginPath(), e.moveTo(c2[0].x, c2[0].y));
              for (d2 = 0; d2 < c2.length - 3; d2 += 3)
                b.bezierCurveTo(c2[d2 + 1].x, c2[d2 + 1].y, c2[d2 + 2].x, c2[d2 + 2].y, c2[d2 + 3].x, c2[d2 + 3].y), u && e.bezierCurveTo(c2[d2 + 1].x, c2[d2 + 1].y, c2[d2 + 2].x, c2[d2 + 2].y, c2[d2 + 3].x, c2[d2 + 3].y);
              a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? x = p2 : 0 > a.axisY.viewportMaximum ? x = g.y1 : 0 < a.axisY.viewportMinimum && (x = p2);
              s = { x: c2[0].x, y: c2[0].y };
              b.lineTo(c2[c2.length - 1].x, x);
              b.lineTo(s.x, x);
              b.closePath();
              b.globalAlpha = l.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              u && (e.lineTo(c2[c2.length - 1].x, x), e.lineTo(s.x, x), e.closePath(), e.fill());
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = u ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx, g = a.axisY.lineCoordinates, q = [], t = this.plotArea;
            b.save();
            u && e.save();
            b.beginPath();
            b.rect(t.x1, t.y1, t.width, t.height);
            b.clip();
            u && (e.beginPath(), e.rect(t.x1, t.y1, t.width, t.height), e.clip());
            for (var h2 = 0; h2 < a.dataSeriesIndexes.length; h2++) {
              var k = a.dataSeriesIndexes[h2], l = this.data[k], n = l.dataPoints, q = l.id;
              this._eventManager.objectMap[q] = { objectType: "dataSeries", dataSeriesIndex: k };
              q = Z(q);
              e.fillStyle = q;
              var q = [], r = 0, f, m2, p2 = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), x, s = null, y = [];
              if (0 < n.length) {
                var v = l._colorSet[r % l._colorSet.length], H = l.lineColor = l.options.lineColor || v, A = H;
                b.fillStyle = v;
                b.strokeStyle = H;
                b.lineWidth = l.lineThickness;
                var B = "solid";
                if (b.setLineDash) {
                  var z3 = I(l.nullDataLineDashType, l.lineThickness), B = l.lineDashType, D2 = I(B, l.lineThickness);
                  b.setLineDash(D2);
                }
                for (m2 = false; r < n.length; r++)
                  if (f = n[r].x.getTime ? n[r].x.getTime() : n[r].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax && (!l.connectNullData || !m2)))
                    if ("number" !== typeof n[r].y)
                      0 < r && !m2 && (l.connectNullData ? b.setLineDash && (0 < y.length && (l.options.nullDataLineDashType || !n[r - 1].lineDashType)) && (y[y.length - 1].newLineDashArray = z3, B = l.nullDataLineDashType) : (d(), y = [])), m2 = true;
                    else {
                      f = a.axisX.convertValueToPixel(f);
                      m2 = a.axisY.convertValueToPixel(n[r].y);
                      var L = l.dataPointIds[r];
                      this._eventManager.objectMap[L] = { id: L, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: r, x1: f, y1: m2 };
                      y[y.length] = { x: f, y: m2 };
                      r < n.length - 1 && (A !== (n[r].lineColor || H) || B !== (n[r].lineDashType || l.lineDashType)) && (A = n[r].lineColor || H, y[y.length - 1].newStrokeStyle = A, b.setLineDash && (n[r].lineDashType ? (B = n[r].lineDashType, y[y.length - 1].newLineDashArray = I(B, l.lineThickness)) : (B = l.lineDashType, y[y.length - 1].newLineDashArray = D2)));
                      if (0 !== n[r].markerSize && (0 < n[r].markerSize || 0 < l.markerSize)) {
                        var T = l.getMarkerProperties(r, f, m2, b);
                        q.push(T);
                        L = Z(L);
                        u && q.push({ x: f, y: m2, ctx: e, type: T.type, size: T.size, color: L, borderColor: L, borderThickness: T.borderThickness });
                      }
                      (n[r].indexLabel || l.indexLabel || n[r].indexLabelFormatter || l.indexLabelFormatter) && this._indexLabels.push({
                        chartType: "splineArea",
                        dataPoint: n[r],
                        dataSeries: l,
                        point: { x: f, y: m2 },
                        direction: 0 > n[r].y === a.axisY.reversed ? 1 : -1,
                        color: v
                      });
                      m2 = false;
                    }
                d();
                X.drawMarkers(q);
              }
            }
            u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(t.x1, t.y1, t.width, t.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: O.xClipAnimation, easingFunction: O.easing.linear, animationBase: 0 };
          }
        };
        p.prototype.renderStepArea = function(a) {
          var d, c;
          function b() {
            A && (0 < f.lineThickness && g.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? H = v : 0 > a.axisY.viewportMaximum ? H = t.y1 : 0 < a.axisY.viewportMinimum && (H = v), g.lineTo(x, H), g.lineTo(A.x, H), g.closePath(), g.globalAlpha = f.fillOpacity, g.fill(), g.globalAlpha = 1, u && (q.lineTo(x, H), q.lineTo(A.x, H), q.closePath(), q.fill()), g.beginPath(), g.moveTo(x, s), q.beginPath(), q.moveTo(x, s), A = { x, y: s });
          }
          var e = a.targetCanvasCtx || this.plotArea.ctx, g = u ? this._preRenderCtx : e;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var q = this._eventManager.ghostCtx, t = a.axisY.lineCoordinates, h2 = [], k = this.plotArea, l;
            g.save();
            u && q.save();
            g.beginPath();
            g.rect(k.x1, k.y1, k.width, k.height);
            g.clip();
            u && (q.beginPath(), q.rect(k.x1, k.y1, k.width, k.height), q.clip());
            for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
              var r = a.dataSeriesIndexes[n], f = this.data[r], m2 = f.dataPoints, h2 = f.id;
              this._eventManager.objectMap[h2] = { objectType: "dataSeries", dataSeriesIndex: r };
              h2 = Z(h2);
              q.fillStyle = h2;
              h2 = [];
              d = true;
              var p2 = 0, x, s, y, v = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), H, A = null;
              c = false;
              if (0 < m2.length) {
                var B = f._colorSet[p2 % f._colorSet.length], w3 = f.lineColor = f.options.lineColor || B, z3 = w3;
                g.fillStyle = B;
                g.strokeStyle = w3;
                g.lineWidth = f.lineThickness;
                var L = "solid";
                if (g.setLineDash) {
                  var T = I(f.nullDataLineDashType, f.lineThickness), L = f.lineDashType, D2 = I(L, f.lineThickness);
                  g.setLineDash(D2);
                }
                for (; p2 < m2.length; p2++)
                  if (y = m2[p2].x.getTime ? m2[p2].x.getTime() : m2[p2].x, !(y < a.axisX.dataInfo.viewPortMin || y > a.axisX.dataInfo.viewPortMax && (!f.connectNullData || !c))) {
                    var ca = s;
                    "number" !== typeof m2[p2].y ? (f.connectNullData || (c || d) || b(), c = true) : (x = a.axisX.convertValueToPixel(y), s = a.axisY.convertValueToPixel(m2[p2].y), d || c ? (!d && f.connectNullData ? (g.setLineDash && (f.options.nullDataLineDashType || L === f.lineDashType && f.lineDashType !== f.nullDataLineDashType) && (d = x, c = s, x = l.x, s = l.y, b(), g.moveTo(l.x, l.y), x = d, s = c, A = l, L = f.nullDataLineDashType, g.setLineDash(T)), g.lineTo(x, ca), g.lineTo(x, s), u && (q.lineTo(x, ca), q.lineTo(x, s))) : (g.beginPath(), g.moveTo(x, s), u && (q.beginPath(), q.moveTo(x, s)), A = { x, y: s }), c = d = false) : (g.lineTo(x, ca), u && q.lineTo(x, ca), g.lineTo(x, s), u && q.lineTo(x, s), 0 == p2 % 250 && b()), l = { x, y: s }, p2 < m2.length - 1 && (z3 !== (m2[p2].lineColor || w3) || L !== (m2[p2].lineDashType || f.lineDashType)) && (b(), z3 = m2[p2].lineColor || w3, g.strokeStyle = z3, g.setLineDash && (m2[p2].lineDashType ? (L = m2[p2].lineDashType, g.setLineDash(I(L, f.lineThickness))) : (L = f.lineDashType, g.setLineDash(D2)))), y = f.dataPointIds[p2], this._eventManager.objectMap[y] = { id: y, objectType: "dataPoint", dataSeriesIndex: r, dataPointIndex: p2, x1: x, y1: s }, 0 !== m2[p2].markerSize && (0 < m2[p2].markerSize || 0 < f.markerSize) && (ca = f.getMarkerProperties(p2, x, s, g), h2.push(ca), y = Z(y), u && h2.push({ x, y: s, ctx: q, type: ca.type, size: ca.size, color: y, borderColor: y, borderThickness: ca.borderThickness })), (m2[p2].indexLabel || f.indexLabel || m2[p2].indexLabelFormatter || f.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepArea", dataPoint: m2[p2], dataSeries: f, point: { x, y: s }, direction: 0 > m2[p2].y === a.axisY.reversed ? 1 : -1, color: B }));
                  }
                b();
                X.drawMarkers(h2);
              }
            }
            u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), g.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && g.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && g.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), g.clearRect(k.x1, k.y1, k.width, k.height), this._eventManager.ghostCtx.restore());
            g.restore();
            return { source: e, dest: this.plotArea.ctx, animationCallback: O.xClipAnimation, easingFunction: O.easing.linear, animationBase: 0 };
          }
        };
        p.prototype.renderStackedArea = function(a) {
          function d() {
            if (!(1 > k.length)) {
              for (0 < B.lineThickness && b.stroke(); 0 < k.length; ) {
                var a2 = k.pop();
                b.lineTo(a2.x, a2.y);
                u && x.lineTo(a2.x, a2.y);
              }
              b.closePath();
              b.globalAlpha = B.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              b.beginPath();
              u && (x.closePath(), x.fill(), x.beginPath());
              k = [];
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = u ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, g = null, q = [], t = this.plotArea, h2 = [], k = [], l = [], n = [], r = 0, f, m2, p2 = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), x = this._eventManager.ghostCtx, s, y, v;
            u && x.beginPath();
            b.save();
            u && x.save();
            b.beginPath();
            b.rect(t.x1, t.y1, t.width, t.height);
            b.clip();
            u && (x.beginPath(), x.rect(t.x1, t.y1, t.width, t.height), x.clip());
            for (var e = [], H = 0; H < a.dataSeriesIndexes.length; H++) {
              var A = a.dataSeriesIndexes[H], B = this.data[A], w3 = B.dataPoints;
              B.dataPointIndexes = [];
              for (r = 0; r < w3.length; r++)
                A = w3[r].x.getTime ? w3[r].x.getTime() : w3[r].x, B.dataPointIndexes[A] = r, e[A] || (l.push(A), e[A] = true);
              l.sort(Ra);
            }
            for (H = 0; H < a.dataSeriesIndexes.length; H++) {
              A = a.dataSeriesIndexes[H];
              B = this.data[A];
              w3 = B.dataPoints;
              y = true;
              k = [];
              r = B.id;
              this._eventManager.objectMap[r] = { objectType: "dataSeries", dataSeriesIndex: A };
              r = Z(r);
              x.fillStyle = r;
              if (0 < l.length) {
                var e = B._colorSet[0], z3 = B.lineColor = B.options.lineColor || e, L = z3;
                b.fillStyle = e;
                b.strokeStyle = z3;
                b.lineWidth = B.lineThickness;
                v = "solid";
                if (b.setLineDash) {
                  var T = I(B.nullDataLineDashType, B.lineThickness);
                  v = B.lineDashType;
                  var D2 = I(v, B.lineThickness);
                  b.setLineDash(D2);
                }
                for (var ca = true, r = 0; r < l.length; r++) {
                  var g = l[r], ia = null, ia = 0 <= B.dataPointIndexes[g] ? w3[B.dataPointIndexes[g]] : { x: g, y: null };
                  if (!(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax && (!B.connectNullData || !ca)))
                    if ("number" !== typeof ia.y)
                      B.connectNullData || (ca || y) || d(), ca = true;
                    else {
                      f = a.axisX.convertValueToPixel(g);
                      var pa = h2[g] ? h2[g] : 0;
                      if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                        n[g] = ia.y + (n[g] ? n[g] : 0);
                        if (0 >= n[g] && a.axisY.logarithmic)
                          continue;
                        m2 = a.axisY.convertValueToPixel(n[g]);
                      } else
                        m2 = a.axisY.convertValueToPixel(ia.y), m2 -= pa;
                      k.push({ x: f, y: p2 - pa });
                      h2[g] = p2 - m2;
                      y || ca ? (!y && B.connectNullData ? (b.setLineDash && (B.options.nullDataLineDashType || v === B.lineDashType && B.lineDashType !== B.nullDataLineDashType) && (y = k.pop(), v = k[k.length - 1], d(), b.moveTo(s.x, s.y), k.push(v), k.push(y), v = B.nullDataLineDashType, b.setLineDash(T)), b.lineTo(f, m2), u && x.lineTo(f, m2)) : (b.beginPath(), b.moveTo(f, m2), u && (x.beginPath(), x.moveTo(f, m2))), ca = y = false) : (b.lineTo(f, m2), u && x.lineTo(f, m2), 0 == r % 250 && (d(), b.moveTo(f, m2), u && x.moveTo(f, m2), k.push({ x: f, y: p2 - pa })));
                      s = { x: f, y: m2 };
                      r < w3.length - 1 && (L !== (w3[r].lineColor || z3) || v !== (w3[r].lineDashType || B.lineDashType)) && (d(), b.beginPath(), b.moveTo(f, m2), k.push({ x: f, y: p2 - pa }), L = w3[r].lineColor || z3, b.strokeStyle = L, b.setLineDash && (w3[r].lineDashType ? (v = w3[r].lineDashType, b.setLineDash(I(v, B.lineThickness))) : (v = B.lineDashType, b.setLineDash(D2))));
                      if (0 <= B.dataPointIndexes[g]) {
                        var ma = B.dataPointIds[B.dataPointIndexes[g]];
                        this._eventManager.objectMap[ma] = { id: ma, objectType: "dataPoint", dataSeriesIndex: A, dataPointIndex: B.dataPointIndexes[g], x1: f, y1: m2 };
                      }
                      0 <= B.dataPointIndexes[g] && 0 !== ia.markerSize && (0 < ia.markerSize || 0 < B.markerSize) && (pa = B.getMarkerProperties(B.dataPointIndexes[g], f, m2, b), q.push(pa), g = Z(ma), u && q.push({ x: f, y: m2, ctx: x, type: pa.type, size: pa.size, color: g, borderColor: g, borderThickness: pa.borderThickness }));
                      (ia.indexLabel || B.indexLabel || ia.indexLabelFormatter || B.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedArea", dataPoint: ia, dataSeries: B, point: { x: f, y: m2 }, direction: 0 > w3[r].y === a.axisY.reversed ? 1 : -1, color: e });
                    }
                }
                d();
                b.moveTo(f, m2);
                u && x.moveTo(f, m2);
              }
              delete B.dataPointIndexes;
            }
            X.drawMarkers(q);
            u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(t.x1, t.y1, t.width, t.height), x.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: O.xClipAnimation, easingFunction: O.easing.linear, animationBase: 0 };
          }
        };
        p.prototype.renderStackedArea100 = function(a) {
          function d() {
            for (0 < B.lineThickness && b.stroke(); 0 < k.length; ) {
              var a2 = k.pop();
              b.lineTo(a2.x, a2.y);
              u && v.lineTo(
                a2.x,
                a2.y
              );
            }
            b.closePath();
            b.globalAlpha = B.fillOpacity;
            b.fill();
            b.globalAlpha = 1;
            b.beginPath();
            u && (v.closePath(), v.fill(), v.beginPath());
            k = [];
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = u ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, g = null, q = this.plotArea, t = [], h2 = [], k = [], l = [], n = [], r = 0, f, m2, p2, x, s, y = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), v = this._eventManager.ghostCtx;
            b.save();
            u && v.save();
            b.beginPath();
            b.rect(q.x1, q.y1, q.width, q.height);
            b.clip();
            u && (v.beginPath(), v.rect(q.x1, q.y1, q.width, q.height), v.clip());
            for (var e = [], H = 0; H < a.dataSeriesIndexes.length; H++) {
              var A = a.dataSeriesIndexes[H], B = this.data[A], w3 = B.dataPoints;
              B.dataPointIndexes = [];
              for (r = 0; r < w3.length; r++)
                A = w3[r].x.getTime ? w3[r].x.getTime() : w3[r].x, B.dataPointIndexes[A] = r, e[A] || (l.push(A), e[A] = true);
              l.sort(Ra);
            }
            for (H = 0; H < a.dataSeriesIndexes.length; H++) {
              A = a.dataSeriesIndexes[H];
              B = this.data[A];
              w3 = B.dataPoints;
              x = true;
              e = B.id;
              this._eventManager.objectMap[e] = { objectType: "dataSeries", dataSeriesIndex: A };
              e = Z(e);
              v.fillStyle = e;
              k = [];
              if (0 < l.length) {
                var e = B._colorSet[r % B._colorSet.length], z3 = B.lineColor = B.options.lineColor || e, L = z3;
                b.fillStyle = e;
                b.strokeStyle = z3;
                b.lineWidth = B.lineThickness;
                s = "solid";
                if (b.setLineDash) {
                  var T = I(B.nullDataLineDashType, B.lineThickness);
                  s = B.lineDashType;
                  var D2 = I(s, B.lineThickness);
                  b.setLineDash(D2);
                }
                for (var ca = true, r = 0; r < l.length; r++) {
                  var g = l[r], ia = null, ia = 0 <= B.dataPointIndexes[g] ? w3[B.dataPointIndexes[g]] : { x: g, y: null };
                  if (!(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax && (!B.connectNullData || !ca)))
                    if ("number" !== typeof ia.y)
                      B.connectNullData || (ca || x) || d(), ca = true;
                    else {
                      var pa;
                      pa = 0 !== a.dataPointYSums[g] ? 100 * (ia.y / a.dataPointYSums[g]) : 0;
                      f = a.axisX.convertValueToPixel(g);
                      var ma = h2[g] ? h2[g] : 0;
                      if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                        n[g] = pa + (n[g] ? n[g] : 0);
                        if (0 >= n[g] && a.axisY.logarithmic)
                          continue;
                        m2 = a.axisY.convertValueToPixel(n[g]);
                      } else
                        m2 = a.axisY.convertValueToPixel(pa), m2 -= ma;
                      k.push({ x: f, y: y - ma });
                      h2[g] = y - m2;
                      x || ca ? (!x && B.connectNullData ? (b.setLineDash && (B.options.nullDataLineDashType || s === B.lineDashType && B.lineDashType !== B.nullDataLineDashType) && (x = k.pop(), s = k[k.length - 1], d(), b.moveTo(p2.x, p2.y), k.push(s), k.push(x), s = B.nullDataLineDashType, b.setLineDash(T)), b.lineTo(f, m2), u && v.lineTo(f, m2)) : (b.beginPath(), b.moveTo(f, m2), u && (v.beginPath(), v.moveTo(f, m2))), ca = x = false) : (b.lineTo(f, m2), u && v.lineTo(f, m2), 0 == r % 250 && (d(), b.moveTo(f, m2), u && v.moveTo(f, m2), k.push({ x: f, y: y - ma })));
                      p2 = { x: f, y: m2 };
                      r < w3.length - 1 && (L !== (w3[r].lineColor || z3) || s !== (w3[r].lineDashType || B.lineDashType)) && (d(), b.beginPath(), b.moveTo(f, m2), k.push({ x: f, y: y - ma }), L = w3[r].lineColor || z3, b.strokeStyle = L, b.setLineDash && (w3[r].lineDashType ? (s = w3[r].lineDashType, b.setLineDash(I(s, B.lineThickness))) : (s = B.lineDashType, b.setLineDash(D2))));
                      if (0 <= B.dataPointIndexes[g]) {
                        var F = B.dataPointIds[B.dataPointIndexes[g]];
                        this._eventManager.objectMap[F] = { id: F, objectType: "dataPoint", dataSeriesIndex: A, dataPointIndex: B.dataPointIndexes[g], x1: f, y1: m2 };
                      }
                      0 <= B.dataPointIndexes[g] && 0 !== ia.markerSize && (0 < ia.markerSize || 0 < B.markerSize) && (ma = B.getMarkerProperties(r, f, m2, b), t.push(ma), g = Z(F), u && t.push({ x: f, y: m2, ctx: v, type: ma.type, size: ma.size, color: g, borderColor: g, borderThickness: ma.borderThickness }));
                      (ia.indexLabel || B.indexLabel || ia.indexLabelFormatter || B.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedArea100", dataPoint: ia, dataSeries: B, point: { x: f, y: m2 }, direction: 0 > w3[r].y === a.axisY.reversed ? 1 : -1, color: e });
                    }
                }
                d();
                b.moveTo(f, m2);
                u && v.moveTo(f, m2);
              }
              delete B.dataPointIndexes;
            }
            X.drawMarkers(t);
            u && (c.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(q.x1, q.y1, q.width, q.height), v.restore());
            b.restore();
            return {
              source: c,
              dest: this.plotArea.ctx,
              animationCallback: O.xClipAnimation,
              easingFunction: O.easing.linear,
              animationBase: 0
            };
          }
        };
        p.prototype.renderBubble = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea, e = 0, g, q;
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(b.x1, b.y1, b.width, b.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
            for (var t = -Infinity, m2 = Infinity, k = 0; k < a.dataSeriesIndexes.length; k++)
              for (var l = a.dataSeriesIndexes[k], n = this.data[l], r = n.dataPoints, f = 0, e = 0; e < r.length; e++)
                g = r[e].getTime ? g = r[e].x.getTime() : g = r[e].x, g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax || "undefined" === typeof r[e].z || (f = r[e].z, f > t && (t = f), f < m2 && (m2 = f));
            for (var h2 = 25 * Math.PI, p2 = Math.max(Math.pow(0.25 * Math.min(b.height, b.width) / 2, 2) * Math.PI, h2), k = 0; k < a.dataSeriesIndexes.length; k++)
              if (l = a.dataSeriesIndexes[k], n = this.data[l], r = n.dataPoints, 0 < r.length) {
                for (c.strokeStyle = "#4572A7 ", e = 0; e < r.length; e++)
                  if (g = r[e].getTime ? g = r[e].x.getTime() : g = r[e].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && "number" === typeof r[e].y) {
                    g = a.axisX.convertValueToPixel(g);
                    q = a.axisY.convertValueToPixel(r[e].y);
                    var f = r[e].z, x = 2 * Math.max(Math.sqrt((t === m2 ? p2 / 2 : h2 + (p2 - h2) / (t - m2) * (f - m2)) / Math.PI) << 0, 1), f = n.getMarkerProperties(e, c);
                    f.size = x;
                    c.globalAlpha = n.fillOpacity;
                    X.drawMarker(g, q, c, f.type, f.size, f.color, f.borderColor, f.borderThickness);
                    c.globalAlpha = 1;
                    var s = n.dataPointIds[e];
                    this._eventManager.objectMap[s] = {
                      id: s,
                      objectType: "dataPoint",
                      dataSeriesIndex: l,
                      dataPointIndex: e,
                      x1: g,
                      y1: q,
                      size: x
                    };
                    x = Z(s);
                    u && X.drawMarker(g, q, this._eventManager.ghostCtx, f.type, f.size, x, x, f.borderThickness);
                    (r[e].indexLabel || n.indexLabel || r[e].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({ chartType: "bubble", dataPoint: r[e], dataSeries: n, point: { x: g, y: q }, direction: 1, bounds: { x1: g - f.size / 2, y1: q - f.size / 2, x2: g + f.size / 2, y2: q + f.size / 2 }, color: null });
                  }
              }
            u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: O.fadeInAnimation, easingFunction: O.easing.easeInQuad, animationBase: 0 };
          }
        };
        p.prototype.renderScatter = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this.plotArea, e = 0, g, q;
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(b.x1, b.y1, b.width, b.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
            for (var t = 0; t < a.dataSeriesIndexes.length; t++) {
              var m2 = a.dataSeriesIndexes[t], k = this.data[m2], l = k.dataPoints;
              if (0 < l.length) {
                c.strokeStyle = "#4572A7 ";
                Math.pow(0.3 * Math.min(b.height, b.width) / 2, 2);
                for (var n = 0, r = 0, e = 0; e < l.length; e++)
                  if (g = l[e].getTime ? g = l[e].x.getTime() : g = l[e].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && "number" === typeof l[e].y) {
                    g = a.axisX.convertValueToPixel(g);
                    q = a.axisY.convertValueToPixel(l[e].y);
                    var f = k.getMarkerProperties(e, g, q, c);
                    c.globalAlpha = k.fillOpacity;
                    X.drawMarker(f.x, f.y, f.ctx, f.type, f.size, f.color, f.borderColor, f.borderThickness);
                    c.globalAlpha = 1;
                    Math.sqrt((n - g) * (n - g) + (r - q) * (r - q)) < Math.min(f.size, 5) && l.length > Math.min(this.plotArea.width, this.plotArea.height) || (n = k.dataPointIds[e], this._eventManager.objectMap[n] = { id: n, objectType: "dataPoint", dataSeriesIndex: m2, dataPointIndex: e, x1: g, y1: q }, n = Z(n), u && X.drawMarker(f.x, f.y, this._eventManager.ghostCtx, f.type, f.size, n, n, f.borderThickness), (l[e].indexLabel || k.indexLabel || l[e].indexLabelFormatter || k.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "scatter",
                      dataPoint: l[e],
                      dataSeries: k,
                      point: { x: g, y: q },
                      direction: 1,
                      bounds: { x1: g - f.size / 2, y1: q - f.size / 2, x2: g + f.size / 2, y2: q + f.size / 2 },
                      color: null
                    }), n = g, r = q);
                  }
              }
            }
            u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: O.fadeInAnimation, easingFunction: O.easing.easeInQuad, animationBase: 0 };
          }
        };
        p.prototype.renderCandlestick = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d, b = this._eventManager.ghostCtx;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, g = null, q = this.plotArea, t = 0, h2, k, l, n, r, f, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, g = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, p2 = a.axisX.dataInfo.minDiff;
            isFinite(p2) || (p2 = 0.3 * Math.abs(a.axisX.range));
            p2 = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * q.width * (a.axisX.logarithmic ? Math.log(p2) / Math.log(a.axisX.range) : Math.abs(p2) / Math.abs(a.axisX.range)) << 0;
            this.dataPointMaxWidth && e > g && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, g));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && g < e) && (g = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            p2 < e && (p2 = e);
            p2 > g && (p2 = g);
            c.save();
            u && b.save();
            c.beginPath();
            c.rect(q.x1, q.y1, q.width, q.height);
            c.clip();
            u && (b.beginPath(), b.rect(q.x1, q.y1, q.width, q.height), b.clip());
            for (var J = 0; J < a.dataSeriesIndexes.length; J++) {
              var x = a.dataSeriesIndexes[J], s = this.data[x], y = s.dataPoints;
              if (0 < y.length) {
                for (var v = 5 < p2 && s.bevelEnabled ? true : false, t = 0; t < y.length; t++)
                  if (y[t].getTime ? f = y[t].x.getTime() : f = y[t].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && !m(y[t].y) && y[t].y.length && "number" === typeof y[t].y[0] && "number" === typeof y[t].y[1] && "number" === typeof y[t].y[2] && "number" === typeof y[t].y[3]) {
                    h2 = a.axisX.convertValueToPixel(f);
                    k = a.axisY.convertValueToPixel(y[t].y[0]);
                    l = a.axisY.convertValueToPixel(y[t].y[1]);
                    n = a.axisY.convertValueToPixel(y[t].y[2]);
                    r = a.axisY.convertValueToPixel(y[t].y[3]);
                    var w3 = h2 - p2 / 2 << 0, A = w3 + p2 << 0, g = s.options.fallingColor ? s.fallingColor : s._colorSet[0], e = y[t].color ? y[t].color : s._colorSet[0], B = Math.round(Math.max(1, 0.15 * p2)), z3 = 0 === B % 2 ? 0 : 0.5, D2 = s.dataPointIds[t];
                    this._eventManager.objectMap[D2] = { id: D2, objectType: "dataPoint", dataSeriesIndex: x, dataPointIndex: t, x1: w3, y1: k, x2: A, y2: l, x3: h2, y3: n, x4: h2, y4: r, borderThickness: B, color: e };
                    c.strokeStyle = e;
                    c.beginPath();
                    c.lineWidth = B;
                    b.lineWidth = Math.max(B, 4);
                    "candlestick" === s.type ? (c.moveTo(h2 - z3, l), c.lineTo(h2 - z3, Math.min(k, r)), c.stroke(), c.moveTo(h2 - z3, Math.max(k, r)), c.lineTo(h2 - z3, n), c.stroke(), ba(c, w3, Math.min(k, r), A, Math.max(k, r), y[t].y[0] <= y[t].y[3] ? s.risingColor : g, B, e, v, v, false, false, s.fillOpacity), u && (e = Z(D2), b.strokeStyle = e, b.moveTo(h2 - z3, l), b.lineTo(h2 - z3, Math.min(
                      k,
                      r
                    )), b.stroke(), b.moveTo(h2 - z3, Math.max(k, r)), b.lineTo(h2 - z3, n), b.stroke(), ba(b, w3, Math.min(k, r), A, Math.max(k, r), e, 0, null, false, false, false, false))) : "ohlc" === s.type && (c.moveTo(h2 - z3, l), c.lineTo(h2 - z3, n), c.stroke(), c.beginPath(), c.moveTo(h2, k), c.lineTo(w3, k), c.stroke(), c.beginPath(), c.moveTo(h2, r), c.lineTo(A, r), c.stroke(), u && (e = Z(D2), b.strokeStyle = e, b.moveTo(h2 - z3, l), b.lineTo(h2 - z3, n), b.stroke(), b.beginPath(), b.moveTo(h2, k), b.lineTo(w3, k), b.stroke(), b.beginPath(), b.moveTo(h2, r), b.lineTo(A, r), b.stroke()));
                    (y[t].indexLabel || s.indexLabel || y[t].indexLabelFormatter || s.indexLabelFormatter) && this._indexLabels.push({ chartType: s.type, dataPoint: y[t], dataSeries: s, point: { x: w3 + (A - w3) / 2, y: a.axisY.reversed ? n : l }, direction: 1, bounds: { x1: w3, y1: Math.min(l, n), x2: A, y2: Math.max(l, n) }, color: e });
                  }
              }
            }
            u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(q.x1, q.y1, q.width, q.height), b.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: O.fadeInAnimation, easingFunction: O.easing.easeInQuad, animationBase: 0 };
          }
        };
        p.prototype.renderBoxAndWhisker = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d, b = this._eventManager.ghostCtx;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, g = this.plotArea, q = 0, t, h2, k, l, n, r, f, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1, q = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width, p2 = a.axisX.dataInfo.minDiff;
            isFinite(p2) || (p2 = 0.3 * Math.abs(a.axisX.range));
            p2 = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * g.width * (a.axisX.logarithmic ? Math.log(p2) / Math.log(a.axisX.range) : Math.abs(p2) / Math.abs(a.axisX.range)) << 0;
            this.dataPointMaxWidth && e > q && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, q));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && q < e) && (q = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
            p2 < e && (p2 = e);
            p2 > q && (p2 = q);
            c.save();
            u && b.save();
            c.beginPath();
            c.rect(g.x1, g.y1, g.width, g.height);
            c.clip();
            u && (b.beginPath(), b.rect(g.x1, g.y1, g.width, g.height), b.clip());
            for (var J = false, J = !!a.axisY.reversed, x = 0; x < a.dataSeriesIndexes.length; x++) {
              var s = a.dataSeriesIndexes[x], y = this.data[s], v = y.dataPoints;
              if (0 < v.length) {
                for (var w3 = 5 < p2 && y.bevelEnabled ? true : false, q = 0; q < v.length; q++)
                  if (v[q].getTime ? f = v[q].x.getTime() : f = v[q].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && !m(v[q].y) && v[q].y.length && "number" === typeof v[q].y[0] && "number" === typeof v[q].y[1] && "number" === typeof v[q].y[2] && "number" === typeof v[q].y[3] && "number" === typeof v[q].y[4] && 5 === v[q].y.length) {
                    t = a.axisX.convertValueToPixel(f);
                    h2 = a.axisY.convertValueToPixel(v[q].y[0]);
                    k = a.axisY.convertValueToPixel(v[q].y[1]);
                    l = a.axisY.convertValueToPixel(v[q].y[2]);
                    n = a.axisY.convertValueToPixel(v[q].y[3]);
                    r = a.axisY.convertValueToPixel(v[q].y[4]);
                    var A = t - p2 / 2 << 0, B = t + p2 / 2 << 0, e = v[q].color ? v[q].color : y._colorSet[0], z3 = Math.round(Math.max(1, 0.15 * p2)), D2 = 0 === z3 % 2 ? 0 : 0.5, L = v[q].whiskerColor ? v[q].whiskerColor : v[q].color ? y.whiskerColor ? y.whiskerColor : v[q].color : y.whiskerColor ? y.whiskerColor : e, T = "number" === typeof v[q].whiskerThickness ? v[q].whiskerThickness : "number" === typeof y.options.whiskerThickness ? y.whiskerThickness : z3, ha = v[q].whiskerDashType ? v[q].whiskerDashType : y.whiskerDashType, ca = m(v[q].whiskerLength) ? m(y.options.whiskerLength) ? p2 : y.whiskerLength : v[q].whiskerLength, ca = "number" === typeof ca ? 0 >= ca ? 0 : ca >= p2 ? p2 : ca : "string" === typeof ca ? parseInt(ca) * p2 / 100 > p2 ? p2 : parseInt(ca) * p2 / 100 : p2, ia = 1 === Math.round(T) % 2 ? 0.5 : 0, pa = v[q].stemColor ? v[q].stemColor : v[q].color ? y.stemColor ? y.stemColor : v[q].color : y.stemColor ? y.stemColor : e, ma = "number" === typeof v[q].stemThickness ? v[q].stemThickness : "number" === typeof y.options.stemThickness ? y.stemThickness : z3, F = 1 === Math.round(ma) % 2 ? 0.5 : 0, E3 = v[q].stemDashType ? v[q].stemDashType : y.stemDashType, K2 = v[q].lineColor ? v[q].lineColor : v[q].color ? y.lineColor ? y.lineColor : v[q].color : y.lineColor ? y.lineColor : e, N = "number" === typeof v[q].lineThickness ? v[q].lineThickness : "number" === typeof y.options.lineThickness ? y.lineThickness : z3, P2 = v[q].lineDashType ? v[q].lineDashType : y.lineDashType, M = 1 === Math.round(N) % 2 ? 0.5 : 0, Q2 = y.upperBoxColor, R3 = y.lowerBoxColor, va = m(y.options.fillOpacity) ? 1 : y.fillOpacity, S = y.dataPointIds[q];
                    this._eventManager.objectMap[S] = {
                      id: S,
                      objectType: "dataPoint",
                      dataSeriesIndex: s,
                      dataPointIndex: q,
                      x1: A,
                      y1: h2,
                      x2: B,
                      y2: k,
                      x3: t,
                      y3: l,
                      x4: t,
                      y4: n,
                      y5: r,
                      borderThickness: z3,
                      color: e,
                      stemThickness: ma,
                      stemColor: pa,
                      whiskerThickness: T,
                      whiskerLength: ca,
                      whiskerColor: L,
                      lineThickness: N,
                      lineColor: K2
                    };
                    c.save();
                    0 < ma && (c.beginPath(), c.strokeStyle = pa, c.lineWidth = ma, c.setLineDash && c.setLineDash(I(E3, ma)), c.moveTo(t - F, k), c.lineTo(t - F, h2), c.stroke(), c.moveTo(t - F, n), c.lineTo(t - F, l), c.stroke());
                    c.restore();
                    b.lineWidth = Math.max(z3, 4);
                    c.beginPath();
                    ba(c, A, Math.min(r, k), B, Math.max(k, r), R3, 0, e, J ? w3 : false, J ? false : w3, false, false, va);
                    c.beginPath();
                    ba(c, A, Math.min(l, r), B, Math.max(r, l), Q2, 0, e, J ? false : w3, J ? w3 : false, false, false, va);
                    c.beginPath();
                    c.lineWidth = z3;
                    c.strokeStyle = e;
                    c.rect(A - D2, Math.min(k, l) - D2, B - A + 2 * D2, Math.max(k, l) - Math.min(k, l) + 2 * D2);
                    c.stroke();
                    c.save();
                    0 < N && (c.beginPath(), c.globalAlpha = 1, c.setLineDash && c.setLineDash(I(P2, N)), c.strokeStyle = K2, c.lineWidth = N, c.moveTo(A, r - M), c.lineTo(B, r - M), c.stroke());
                    c.restore();
                    c.save();
                    0 < T && (c.beginPath(), c.setLineDash && c.setLineDash(I(ha, T)), c.strokeStyle = L, c.lineWidth = T, c.moveTo(t - ca / 2 << 0, n - ia), c.lineTo(t + ca / 2 << 0, n - ia), c.stroke(), c.moveTo(t - ca / 2 << 0, h2 + ia), c.lineTo(t + ca / 2 << 0, h2 + ia), c.stroke());
                    c.restore();
                    u && (e = Z(S), b.strokeStyle = e, b.lineWidth = ma, 0 < ma && (b.moveTo(t - D2 - F, k), b.lineTo(t - D2 - F, Math.max(h2, n)), b.stroke(), b.moveTo(t - D2 - F, Math.min(h2, n)), b.lineTo(t - D2 - F, l), b.stroke()), ba(b, A, Math.max(k, l), B, Math.min(k, l), e, 0, null, false, false, false, false), 0 < T && (b.beginPath(), b.lineWidth = T, b.moveTo(t + ca / 2, n - ia), b.lineTo(t - ca / 2, n - ia), b.stroke(), b.moveTo(t + ca / 2, h2 + ia), b.lineTo(t - ca / 2, h2 + ia), b.stroke()));
                    (v[q].indexLabel || y.indexLabel || v[q].indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({ chartType: y.type, dataPoint: v[q], dataSeries: y, point: { x: A + (B - A) / 2, y: a.axisY.reversed ? h2 : n }, direction: 1, bounds: { x1: A, y1: Math.min(h2, n), x2: B, y2: Math.max(h2, n) }, color: e });
                  }
              }
            }
            u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.clearRect(g.x1, g.y1, g.width, g.height), b.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: O.fadeInAnimation, easingFunction: O.easing.easeInQuad, animationBase: 0 };
          }
        };
        p.prototype.renderRangeColumn = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, g = 0, q, t, h2, g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            q = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
            var k = a.axisX.dataInfo.minDiff;
            isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
            k = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && g > q && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, q));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && q < g) && (q = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
            k < g && (k = g);
            k > q && (k = q);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
              var n = a.dataSeriesIndexes[l], r = this.data[n], f = r.dataPoints;
              if (0 < f.length) {
                for (var p2 = 5 < k && r.bevelEnabled ? true : false, g = 0; g < f.length; g++)
                  if (f[g].getTime ? h2 = f[g].x.getTime() : h2 = f[g].x, !(h2 < a.axisX.dataInfo.viewPortMin || h2 > a.axisX.dataInfo.viewPortMax) && !m(f[g].y) && f[g].y.length && "number" === typeof f[g].y[0] && "number" === typeof f[g].y[1]) {
                    b = a.axisX.convertValueToPixel(h2);
                    q = a.axisY.convertValueToPixel(f[g].y[0]);
                    t = a.axisY.convertValueToPixel(f[g].y[1]);
                    var J = a.axisX.reversed ? b + a.plotType.totalDataSeries * k / 2 - (a.previousDataSeriesCount + l) * k << 0 : b - a.plotType.totalDataSeries * k / 2 + (a.previousDataSeriesCount + l) * k << 0, x = a.axisX.reversed ? J - k << 0 : J + k << 0, b = f[g].color ? f[g].color : r._colorSet[g % r._colorSet.length];
                    if (q > t) {
                      var s = q;
                      q = t;
                      t = s;
                    }
                    s = r.dataPointIds[g];
                    this._eventManager.objectMap[s] = { id: s, objectType: "dataPoint", dataSeriesIndex: n, dataPointIndex: g, x1: J, y1: q, x2: x, y2: t };
                    ba(c, a.axisX.reversed ? x : J, q, a.axisX.reversed ? J : x, t, b, 0, b, p2, p2, false, false, r.fillOpacity);
                    b = Z(s);
                    u && ba(this._eventManager.ghostCtx, a.axisX.reversed ? x : J, q, a.axisX.reversed ? J : x, t, b, 0, null, false, false, false, false);
                    if (f[g].indexLabel || r.indexLabel || f[g].indexLabelFormatter || r.indexLabelFormatter)
                      this._indexLabels.push({ chartType: "rangeColumn", dataPoint: f[g], dataSeries: r, indexKeyword: 0, point: { x: J + (x - J) / 2, y: f[g].y[1] >= f[g].y[0] ? t : q }, direction: f[g].y[1] >= f[g].y[0] ? -1 : 1, bounds: { x1: J, y1: Math.min(q, t), x2: x, y2: Math.max(q, t) }, color: b }), this._indexLabels.push({ chartType: "rangeColumn", dataPoint: f[g], dataSeries: r, indexKeyword: 1, point: { x: J + (x - J) / 2, y: f[g].y[1] >= f[g].y[0] ? q : t }, direction: f[g].y[1] >= f[g].y[0] ? 1 : -1, bounds: { x1: J, y1: Math.min(q, t), x2: x, y2: Math.max(q, t) }, color: b });
                  }
              }
            }
            u && (d.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return {
              source: d,
              dest: this.plotArea.ctx,
              animationCallback: O.fadeInAnimation,
              easingFunction: O.easing.easeInQuad,
              animationBase: 0
            };
          }
        };
        p.prototype.renderError = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d, b = a.axisY._position ? "left" === a.axisY._position || "right" === a.axisY._position ? false : true : false;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = null, g = false, q = this.plotArea, t = 0, h2, k, l, n, r, f, p2, J = a.axisX.dataInfo.minDiff;
            isFinite(J) || (J = 0.3 * Math.abs(a.axisX.range));
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(q.x1, q.y1, q.width, q.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(q.x1, q.y1, q.width, q.height), this._eventManager.ghostCtx.clip());
            for (var x = 0, s = 0; s < this.data.length; s++)
              !this.data[s].type.match(/(bar|column)/ig) || !this.data[s].visible || this.data[s].type.match(/(stacked)/ig) && x || x++;
            for (var y = 0; y < a.dataSeriesIndexes.length; y++) {
              var v = a.dataSeriesIndexes[y], w3 = this.data[v], A = w3.dataPoints, B = m(w3._linkedSeries) ? false : w3._linkedSeries.type.match(/(bar|column)/ig) && w3._linkedSeries.visible ? true : false, D2 = 0;
              if (B)
                for (e = w3._linkedSeries.id, s = 0; s < e; s++)
                  !this.data[s].type.match(/(bar|column)/ig) || !this.data[s].visible || this.data[s].type.match(/(stacked)/ig) && D2 || (this.data[s].type.match(/(range)/ig) && (g = true), D2++);
              e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
              t = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (B ? x : 1))) << 0 : 0.3 * this.width;
              g && (t = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (B ? x : 1))) << 0 : 0.03 * this.width);
              s = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * ((b ? q.height : q.width) * (a.axisX.logarithmic ? Math.log(J) / Math.log(a.axisX.range) : Math.abs(J) / Math.abs(a.axisX.range)) / (B ? x : 1)) << 0;
              this.dataPointMaxWidth && e > t && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, t));
              !this.dataPointMaxWidth && (this.dataPointMinWidth && t < e) && (t = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
              s < e && (s = e);
              s > t && (s = t);
              if (0 < A.length)
                for (var I2 = w3._colorSet, t = 0; t < A.length; t++) {
                  var e = w3.lineColor = w3.options.color ? w3.options.color : I2[0], L = {
                    color: A[t].whiskerColor ? A[t].whiskerColor : A[t].color ? w3.whiskerColor ? w3.whiskerColor : A[t].color : w3.whiskerColor ? w3.whiskerColor : e,
                    thickness: m(A[t].whiskerThickness) ? w3.whiskerThickness : A[t].whiskerThickness,
                    dashType: A[t].whiskerDashType ? A[t].whiskerDashType : w3.whiskerDashType,
                    length: m(A[t].whiskerLength) ? m(w3.options.whiskerLength) ? s : w3.options.whiskerLength : A[t].whiskerLength,
                    trimLength: m(A[t].whiskerLength) ? m(w3.options.whiskerLength) ? 50 : 0 : 0
                  };
                  L.length = "number" === typeof L.length ? 0 >= L.length ? 0 : L.length >= s ? s : L.length : "string" === typeof L.length ? parseInt(L.length) * s / 100 > s ? s : parseInt(L.length) * s / 100 > s : s;
                  L.thickness = "number" === typeof L.thickness ? 0 > L.thickness ? 0 : Math.round(L.thickness) : 2;
                  var T = { color: A[t].stemColor ? A[t].stemColor : A[t].color ? w3.stemColor ? w3.stemColor : A[t].color : w3.stemColor ? w3.stemColor : e, thickness: A[t].stemThickness ? A[t].stemThickness : w3.stemThickness, dashType: A[t].stemDashType ? A[t].stemDashType : w3.stemDashType };
                  T.thickness = "number" === typeof T.thickness ? 0 > T.thickness ? 0 : Math.round(T.thickness) : 2;
                  A[t].getTime ? p2 = A[t].x.getTime() : p2 = A[t].x;
                  if (!(p2 < a.axisX.dataInfo.viewPortMin || p2 > a.axisX.dataInfo.viewPortMax) && !m(A[t].y) && A[t].y.length && "number" === typeof A[t].y[0] && "number" === typeof A[t].y[1]) {
                    var ha = a.axisX.convertValueToPixel(p2);
                    b ? k = ha : h2 = ha;
                    ha = a.axisY.convertValueToPixel(A[t].y[0]);
                    b ? l = ha : r = ha;
                    ha = a.axisY.convertValueToPixel(A[t].y[1]);
                    b ? n = ha : f = ha;
                    b ? (r = a.axisX.reversed ? k + (B ? x : 1) * s / 2 - (B ? D2 - 1 : 0) * s << 0 : k - (B ? x : 1) * s / 2 + (B ? D2 - 1 : 0) * s << 0, f = a.axisX.reversed ? r - s << 0 : r + s << 0) : (l = a.axisX.reversed ? h2 + (B ? x : 1) * s / 2 - (B ? D2 - 1 : 0) * s << 0 : h2 - (B ? x : 1) * s / 2 + (B ? D2 - 1 : 0) * s << 0, n = a.axisX.reversed ? l - s << 0 : l + s << 0);
                    !b && r > f && (ha = r, r = f, f = ha);
                    b && l > n && (ha = l, l = n, n = ha);
                    ha = w3.dataPointIds[t];
                    this._eventManager.objectMap[ha] = { id: ha, objectType: "dataPoint", dataSeriesIndex: v, dataPointIndex: t, x1: Math.min(l, n), y1: Math.min(r, f), x2: Math.max(n, l), y2: Math.max(f, r), isXYSwapped: b, stemProperties: T, whiskerProperties: L };
                    z2(
                      c,
                      Math.min(l, n),
                      Math.min(r, f),
                      Math.max(n, l),
                      Math.max(f, r),
                      e,
                      L,
                      T,
                      b
                    );
                    u && z2(this._eventManager.ghostCtx, l, r, n, f, e, L, T, b);
                    if (A[t].indexLabel || w3.indexLabel || A[t].indexLabelFormatter || w3.indexLabelFormatter)
                      this._indexLabels.push({ chartType: "error", dataPoint: A[t], dataSeries: w3, indexKeyword: 0, point: { x: b ? A[t].y[1] >= A[t].y[0] ? l : n : l + (n - l) / 2, y: b ? r + (f - r) / 2 : A[t].y[1] >= A[t].y[0] ? f : r }, direction: A[t].y[1] >= A[t].y[0] ? -1 : 1, bounds: { x1: b ? Math.min(l, n) : l, y1: b ? r : Math.min(r, f), x2: b ? Math.max(l, n) : n, y2: b ? f : Math.max(r, f) }, color: e, axisSwapped: b }), this._indexLabels.push({ chartType: "error", dataPoint: A[t], dataSeries: w3, indexKeyword: 1, point: { x: b ? A[t].y[1] >= A[t].y[0] ? n : l : l + (n - l) / 2, y: b ? r + (f - r) / 2 : A[t].y[1] >= A[t].y[0] ? r : f }, direction: A[t].y[1] >= A[t].y[0] ? 1 : -1, bounds: { x1: b ? Math.min(l, n) : l, y1: b ? r : Math.min(r, f), x2: b ? Math.max(l, n) : n, y2: b ? f : Math.max(r, f) }, color: e, axisSwapped: b });
                  }
                }
            }
            u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(q.x1, q.y1, q.width, q.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: O.fadeInAnimation, easingFunction: O.easing.easeInQuad, animationBase: 0 };
          }
        };
        p.prototype.renderRangeBar = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = null, e = this.plotArea, g = 0, q, t, h2, k, g = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            q = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
            var l = a.axisX.dataInfo.minDiff;
            isFinite(l) || (l = 0.3 * Math.abs(a.axisX.range));
            l = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(l) / Math.log(a.axisX.range) : Math.abs(l) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && g > q && (g = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, q));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && q < g) && (q = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, g));
            l < g && (l = g);
            l > q && (l = q);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(e.x1, e.y1, e.width, e.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
            for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
              var r = a.dataSeriesIndexes[n], f = this.data[r], p2 = f.dataPoints;
              if (0 < p2.length) {
                var J = 5 < l && f.bevelEnabled ? true : false;
                c.strokeStyle = "#4572A7 ";
                for (g = 0; g < p2.length; g++)
                  if (p2[g].getTime ? k = p2[g].x.getTime() : k = p2[g].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && !m(p2[g].y) && p2[g].y.length && "number" === typeof p2[g].y[0] && "number" === typeof p2[g].y[1]) {
                    q = a.axisY.convertValueToPixel(p2[g].y[0]);
                    t = a.axisY.convertValueToPixel(p2[g].y[1]);
                    h2 = a.axisX.convertValueToPixel(k);
                    h2 = a.axisX.reversed ? h2 + a.plotType.totalDataSeries * l / 2 - (a.previousDataSeriesCount + n) * l << 0 : h2 - a.plotType.totalDataSeries * l / 2 + (a.previousDataSeriesCount + n) * l << 0;
                    var x = a.axisX.reversed ? h2 - l << 0 : h2 + l << 0;
                    q > t && (b = q, q = t, t = b);
                    b = p2[g].color ? p2[g].color : f._colorSet[g % f._colorSet.length];
                    ba(c, q, a.axisX.reversed ? x : h2, t, a.axisX.reversed ? h2 : x, b, 0, null, J, false, false, false, f.fillOpacity);
                    b = f.dataPointIds[g];
                    this._eventManager.objectMap[b] = {
                      id: b,
                      objectType: "dataPoint",
                      dataSeriesIndex: r,
                      dataPointIndex: g,
                      x1: q,
                      y1: h2,
                      x2: t,
                      y2: x
                    };
                    b = Z(b);
                    u && ba(this._eventManager.ghostCtx, q, a.axisX.reversed ? x : h2, t, a.axisX.reversed ? h2 : x, b, 0, null, false, false, false, false);
                    if (p2[g].indexLabel || f.indexLabel || p2[g].indexLabelFormatter || f.indexLabelFormatter)
                      this._indexLabels.push({ chartType: "rangeBar", dataPoint: p2[g], dataSeries: f, indexKeyword: 0, point: { x: p2[g].y[1] >= p2[g].y[0] ? q : t, y: h2 + (x - h2) / 2 }, direction: p2[g].y[1] >= p2[g].y[0] ? -1 : 1, bounds: { x1: Math.min(q, t), y1: h2, x2: Math.max(q, t), y2: x }, color: b }), this._indexLabels.push({
                        chartType: "rangeBar",
                        dataPoint: p2[g],
                        dataSeries: f,
                        indexKeyword: 1,
                        point: { x: p2[g].y[1] >= p2[g].y[0] ? t : q, y: h2 + (x - h2) / 2 },
                        direction: p2[g].y[1] >= p2[g].y[0] ? 1 : -1,
                        bounds: { x1: Math.min(q, t), y1: h2, x2: Math.max(q, t), y2: x },
                        color: b
                      });
                  }
              }
            }
            u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(
              this._preRenderCanvas,
              0,
              0,
              this.width,
              this.height
            ), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: O.fadeInAnimation, easingFunction: O.easing.easeInQuad, animationBase: 0 };
          }
        };
        p.prototype.renderRangeArea = function(a) {
          function d() {
            if (y) {
              for (var a2 = null, c2 = m2.length - 1; 0 <= c2; c2--)
                a2 = m2[c2], b.lineTo(a2.x, a2.y2), e.lineTo(a2.x, a2.y2);
              b.closePath();
              b.globalAlpha = l.fillOpacity;
              b.fill();
              b.globalAlpha = 1;
              e.fill();
              if (0 < l.lineThickness) {
                b.beginPath();
                b.moveTo(a2.x, a2.y2);
                for (c2 = 0; c2 < m2.length; c2++)
                  a2 = m2[c2], b.lineTo(a2.x, a2.y2);
                b.moveTo(m2[0].x, m2[0].y1);
                for (c2 = 0; c2 < m2.length; c2++)
                  a2 = m2[c2], b.lineTo(a2.x, a2.y1);
                b.stroke();
              }
              b.beginPath();
              b.moveTo(p2, J);
              e.beginPath();
              e.moveTo(p2, J);
              y = { x: p2, y: J };
              m2 = [];
              m2.push({ x: p2, y1: J, y2: x });
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = u ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx, g = [], q = this.plotArea;
            b.save();
            u && e.save();
            b.beginPath();
            b.rect(q.x1, q.y1, q.width, q.height);
            b.clip();
            u && (e.beginPath(), e.rect(q.x1, q.y1, q.width, q.height), e.clip());
            for (var h2 = 0; h2 < a.dataSeriesIndexes.length; h2++) {
              var m2 = [], k = a.dataSeriesIndexes[h2], l = this.data[k], n = l.dataPoints, g = l.id;
              this._eventManager.objectMap[g] = { objectType: "dataSeries", dataSeriesIndex: k };
              g = Z(g);
              e.fillStyle = g;
              var g = [], r = true, f = 0, p2, J, x, s, y = null;
              if (0 < n.length) {
                var v = l._colorSet[f % l._colorSet.length], w3 = l.lineColor = l.options.lineColor || v, A = w3;
                b.fillStyle = v;
                b.strokeStyle = w3;
                b.lineWidth = l.lineThickness;
                var B = "solid";
                if (b.setLineDash) {
                  var z3 = I(
                    l.nullDataLineDashType,
                    l.lineThickness
                  ), B = l.lineDashType, D2 = I(B, l.lineThickness);
                  b.setLineDash(D2);
                }
                for (var L = true; f < n.length; f++)
                  if (s = n[f].x.getTime ? n[f].x.getTime() : n[f].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!l.connectNullData || !L)))
                    if (null !== n[f].y && n[f].y.length && "number" === typeof n[f].y[0] && "number" === typeof n[f].y[1]) {
                      p2 = a.axisX.convertValueToPixel(s);
                      J = a.axisY.convertValueToPixel(n[f].y[0]);
                      x = a.axisY.convertValueToPixel(n[f].y[1]);
                      r || L ? (l.connectNullData && !r ? (b.setLineDash && (l.options.nullDataLineDashType || B === l.lineDashType && l.lineDashType !== l.nullDataLineDashType) && (m2[m2.length - 1].newLineDashArray = D2, B = l.nullDataLineDashType, b.setLineDash(z3)), b.lineTo(p2, J), u && e.lineTo(p2, J), m2.push({ x: p2, y1: J, y2: x })) : (b.beginPath(), b.moveTo(p2, J), y = { x: p2, y: J }, m2 = [], m2.push({ x: p2, y1: J, y2: x }), u && (e.beginPath(), e.moveTo(p2, J))), L = r = false) : (b.lineTo(p2, J), m2.push({ x: p2, y1: J, y2: x }), u && e.lineTo(p2, J), 0 == f % 250 && d());
                      s = l.dataPointIds[f];
                      this._eventManager.objectMap[s] = {
                        id: s,
                        objectType: "dataPoint",
                        dataSeriesIndex: k,
                        dataPointIndex: f,
                        x1: p2,
                        y1: J,
                        y2: x
                      };
                      f < n.length - 1 && (A !== (n[f].lineColor || w3) || B !== (n[f].lineDashType || l.lineDashType)) && (d(), A = n[f].lineColor || w3, m2[m2.length - 1].newStrokeStyle = A, b.strokeStyle = A, b.setLineDash && (n[f].lineDashType ? (B = n[f].lineDashType, m2[m2.length - 1].newLineDashArray = I(B, l.lineThickness), b.setLineDash(m2[m2.length - 1].newLineDashArray)) : (B = l.lineDashType, m2[m2.length - 1].newLineDashArray = D2, b.setLineDash(D2))));
                      if (0 !== n[f].markerSize && (0 < n[f].markerSize || 0 < l.markerSize)) {
                        var T = l.getMarkerProperties(f, p2, x, b);
                        g.push(T);
                        var ha = Z(s);
                        u && g.push({ x: p2, y: x, ctx: e, type: T.type, size: T.size, color: ha, borderColor: ha, borderThickness: T.borderThickness });
                        T = l.getMarkerProperties(f, p2, J, b);
                        g.push(T);
                        ha = Z(s);
                        u && g.push({ x: p2, y: J, ctx: e, type: T.type, size: T.size, color: ha, borderColor: ha, borderThickness: T.borderThickness });
                      }
                      if (n[f].indexLabel || l.indexLabel || n[f].indexLabelFormatter || l.indexLabelFormatter)
                        this._indexLabels.push({ chartType: "rangeArea", dataPoint: n[f], dataSeries: l, indexKeyword: 0, point: { x: p2, y: J }, direction: n[f].y[0] > n[f].y[1] === a.axisY.reversed ? -1 : 1, color: v }), this._indexLabels.push({ chartType: "rangeArea", dataPoint: n[f], dataSeries: l, indexKeyword: 1, point: { x: p2, y: x }, direction: n[f].y[0] > n[f].y[1] === a.axisY.reversed ? 1 : -1, color: v });
                    } else
                      L || r || d(), L = true;
                d();
                X.drawMarkers(g);
              }
            }
            u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(q.x1, q.y1, q.width, q.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: O.xClipAnimation, easingFunction: O.easing.linear, animationBase: 0 };
          }
        };
        p.prototype.renderRangeSplineArea = function(a) {
          function d(a2, c2) {
            var d2 = w2(J, 2);
            if (0 < d2.length) {
              if (0 < k.lineThickness) {
                b.strokeStyle = c2;
                b.setLineDash && b.setLineDash(a2);
                b.beginPath();
                b.moveTo(d2[0].x, d2[0].y);
                for (var f2 = 0; f2 < d2.length - 3; f2 += 3) {
                  if (d2[f2].newStrokeStyle || d2[f2].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(d2[f2].x, d2[f2].y), d2[f2].newStrokeStyle && (b.strokeStyle = d2[f2].newStrokeStyle), d2[f2].newLineDashArray && b.setLineDash(d2[f2].newLineDashArray);
                  b.bezierCurveTo(d2[f2 + 1].x, d2[f2 + 1].y, d2[f2 + 2].x, d2[f2 + 2].y, d2[f2 + 3].x, d2[f2 + 3].y);
                }
              }
              b.beginPath();
              b.moveTo(d2[0].x, d2[0].y);
              u && (e.beginPath(), e.moveTo(d2[0].x, d2[0].y));
              for (f2 = 0; f2 < d2.length - 3; f2 += 3)
                b.bezierCurveTo(d2[f2 + 1].x, d2[f2 + 1].y, d2[f2 + 2].x, d2[f2 + 2].y, d2[f2 + 3].x, d2[f2 + 3].y), u && e.bezierCurveTo(d2[f2 + 1].x, d2[f2 + 1].y, d2[f2 + 2].x, d2[f2 + 2].y, d2[f2 + 3].x, d2[f2 + 3].y);
              d2 = w2(x, 2);
              b.lineTo(x[x.length - 1].x, x[x.length - 1].y);
              for (f2 = d2.length - 1; 2 < f2; f2 -= 3)
                b.bezierCurveTo(d2[f2 - 1].x, d2[f2 - 1].y, d2[f2 - 2].x, d2[f2 - 2].y, d2[f2 - 3].x, d2[f2 - 3].y), u && e.bezierCurveTo(d2[f2 - 1].x, d2[f2 - 1].y, d2[f2 - 2].x, d2[f2 - 2].y, d2[f2 - 3].x, d2[f2 - 3].y);
              b.closePath();
              b.globalAlpha = k.fillOpacity;
              b.fill();
              u && (e.closePath(), e.fill());
              b.globalAlpha = 1;
              if (0 < k.lineThickness) {
                b.strokeStyle = c2;
                b.setLineDash && b.setLineDash(a2);
                b.beginPath();
                b.moveTo(d2[0].x, d2[0].y);
                for (var g2 = f2 = 0; f2 < d2.length - 3; f2 += 3, g2++) {
                  if (J[g2].newStrokeStyle || J[g2].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(d2[f2].x, d2[f2].y), J[g2].newStrokeStyle && (b.strokeStyle = J[g2].newStrokeStyle), J[g2].newLineDashArray && b.setLineDash(J[g2].newLineDashArray);
                  b.bezierCurveTo(d2[f2 + 1].x, d2[f2 + 1].y, d2[f2 + 2].x, d2[f2 + 2].y, d2[f2 + 3].x, d2[f2 + 3].y);
                }
                d2 = w2(J, 2);
                b.moveTo(d2[0].x, d2[0].y);
                for (g2 = f2 = 0; f2 < d2.length - 3; f2 += 3, g2++) {
                  if (J[g2].newStrokeStyle || J[g2].newLineDashArray)
                    b.stroke(), b.beginPath(), b.moveTo(d2[f2].x, d2[f2].y), J[g2].newStrokeStyle && (b.strokeStyle = J[g2].newStrokeStyle), J[g2].newLineDashArray && b.setLineDash(J[g2].newLineDashArray);
                  b.bezierCurveTo(d2[f2 + 1].x, d2[f2 + 1].y, d2[f2 + 2].x, d2[f2 + 2].y, d2[f2 + 3].x, d2[f2 + 3].y);
                }
                b.stroke();
              }
              b.beginPath();
            }
          }
          var c = a.targetCanvasCtx || this.plotArea.ctx, b = u ? this._preRenderCtx : c;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var e = this._eventManager.ghostCtx, g = [], q = this.plotArea;
            b.save();
            u && e.save();
            b.beginPath();
            b.rect(q.x1, q.y1, q.width, q.height);
            b.clip();
            u && (e.beginPath(), e.rect(q.x1, q.y1, q.width, q.height), e.clip());
            for (var h2 = 0; h2 < a.dataSeriesIndexes.length; h2++) {
              var m2 = a.dataSeriesIndexes[h2], k = this.data[m2], l = k.dataPoints, g = k.id;
              this._eventManager.objectMap[g] = { objectType: "dataSeries", dataSeriesIndex: m2 };
              g = Z(g);
              e.fillStyle = g;
              var g = [], n = 0, r, f, p2, J = [], x = [];
              if (0 < l.length) {
                var s = k._colorSet[n % k._colorSet.length], y = k.lineColor = k.options.lineColor || s, v = y;
                b.fillStyle = s;
                b.lineWidth = k.lineThickness;
                var z3 = "solid", A;
                if (b.setLineDash) {
                  var B = I(k.nullDataLineDashType, k.lineThickness), z3 = k.lineDashType;
                  A = I(z3, k.lineThickness);
                }
                for (f = false; n < l.length; n++)
                  if (r = l[n].x.getTime ? l[n].x.getTime() : l[n].x, !(r < a.axisX.dataInfo.viewPortMin || r > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !f)))
                    if (null !== l[n].y && l[n].y.length && "number" === typeof l[n].y[0] && "number" === typeof l[n].y[1]) {
                      r = a.axisX.convertValueToPixel(r);
                      f = a.axisY.convertValueToPixel(l[n].y[0]);
                      p2 = a.axisY.convertValueToPixel(l[n].y[1]);
                      var D2 = k.dataPointIds[n];
                      this._eventManager.objectMap[D2] = { id: D2, objectType: "dataPoint", dataSeriesIndex: m2, dataPointIndex: n, x1: r, y1: f, y2: p2 };
                      J[J.length] = { x: r, y: f };
                      x[x.length] = { x: r, y: p2 };
                      n < l.length - 1 && (v !== (l[n].lineColor || y) || z3 !== (l[n].lineDashType || k.lineDashType)) && (v = l[n].lineColor || y, J[J.length - 1].newStrokeStyle = v, b.setLineDash && (l[n].lineDashType ? (z3 = l[n].lineDashType, J[J.length - 1].newLineDashArray = I(z3, k.lineThickness)) : (z3 = k.lineDashType, J[J.length - 1].newLineDashArray = A)));
                      if (0 !== l[n].markerSize && (0 < l[n].markerSize || 0 < k.markerSize)) {
                        var E3 = k.getMarkerProperties(n, r, f, b);
                        g.push(E3);
                        var L = Z(D2);
                        u && g.push({ x: r, y: f, ctx: e, type: E3.type, size: E3.size, color: L, borderColor: L, borderThickness: E3.borderThickness });
                        E3 = k.getMarkerProperties(n, r, p2, b);
                        g.push(E3);
                        L = Z(D2);
                        u && g.push({ x: r, y: p2, ctx: e, type: E3.type, size: E3.size, color: L, borderColor: L, borderThickness: E3.borderThickness });
                      }
                      if (l[n].indexLabel || k.indexLabel || l[n].indexLabelFormatter || k.indexLabelFormatter)
                        this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: l[n], dataSeries: k, indexKeyword: 0, point: { x: r, y: f }, direction: l[n].y[0] <= l[n].y[1] ? -1 : 1, color: s }), this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: l[n], dataSeries: k, indexKeyword: 1, point: {
                          x: r,
                          y: p2
                        }, direction: l[n].y[0] <= l[n].y[1] ? 1 : -1, color: s });
                      f = false;
                    } else
                      0 < n && !f && (k.connectNullData ? b.setLineDash && (0 < J.length && (k.options.nullDataLineDashType || !l[n - 1].lineDashType)) && (J[J.length - 1].newLineDashArray = B, z3 = k.nullDataLineDashType) : (d(A, y), J = [], x = [])), f = true;
                d(A, y);
                X.drawMarkers(g);
              }
            }
            u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(
              a.axisY.maskCanvas,
              0,
              0,
              this.width,
              this.height
            ), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(q.x1, q.y1, q.width, q.height), this._eventManager.ghostCtx.restore());
            b.restore();
            return { source: c, dest: this.plotArea.ctx, animationCallback: O.xClipAnimation, easingFunction: O.easing.linear, animationBase: 0 };
          }
        };
        p.prototype.renderWaterfall = function(a) {
          var d = a.targetCanvasCtx || this.plotArea.ctx, c = u ? this._preRenderCtx : d;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var b = this._eventManager.ghostCtx, e = null, g = this.plotArea, q = 0, h2, m2, k, l, n = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0), q = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
            m2 = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
            var r = a.axisX.dataInfo.minDiff;
            isFinite(r) || (r = 0.3 * Math.abs(a.axisX.range));
            r = this.options.dataPointWidth ? this.dataPointWidth : 0.6 * (g.width * (a.axisX.logarithmic ? Math.log(r) / Math.log(a.axisX.range) : Math.abs(r) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
            this.dataPointMaxWidth && q > m2 && (q = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m2));
            !this.dataPointMaxWidth && (this.dataPointMinWidth && m2 < q) && (m2 = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, q));
            r < q && (r = q);
            r > m2 && (r = m2);
            c.save();
            u && this._eventManager.ghostCtx.save();
            c.beginPath();
            c.rect(g.x1, g.y1, g.width, g.height);
            c.clip();
            u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(g.x1, g.y1, g.width, g.height), this._eventManager.ghostCtx.clip());
            for (var f = 0; f < a.dataSeriesIndexes.length; f++) {
              var p2 = a.dataSeriesIndexes[f], w3 = this.data[p2], x = w3.dataPoints, e = w3._colorSet[0];
              w3.risingColor = w3.options.risingColor ? w3.options.risingColor : e;
              w3.fallingColor = w3.options.fallingColor ? w3.options.fallingColor : "#e40a0a";
              var s = "number" === typeof w3.options.lineThickness ? Math.round(w3.lineThickness) : 1, y = 1 === Math.round(s) % 2 ? -0.5 : 0;
              if (0 < x.length)
                for (var v = 5 < r && w3.bevelEnabled ? true : false, z3 = false, A = null, B = null, q = 0; q < x.length; q++)
                  if (x[q].getTime ? l = x[q].x.getTime() : l = x[q].x, "number" !== typeof x[q].y) {
                    if (0 < q && !z3 && w3.connectNullData)
                      var D2 = w3.options.nullDataLineDashType || !x[q - 1].lineDashType ? w3.nullDataLineDashType : x[q - 1].lineDashType;
                    z3 = true;
                  } else {
                    h2 = a.axisX.convertValueToPixel(l);
                    m2 = 0 === w3.dataPointEOs[q].cumulativeSum ? n : a.axisY.convertValueToPixel(w3.dataPointEOs[q].cumulativeSum);
                    k = 0 === w3.dataPointEOs[q].cumulativeSumYStartValue ? n : a.axisY.convertValueToPixel(w3.dataPointEOs[q].cumulativeSumYStartValue);
                    h2 = a.axisX.reversed ? h2 + a.plotType.totalDataSeries * r / 2 - (a.previousDataSeriesCount + f) * r << 0 : h2 - a.plotType.totalDataSeries * r / 2 + (a.previousDataSeriesCount + f) * r << 0;
                    var E3 = a.axisX.reversed ? h2 - r << 0 : h2 + r << 0;
                    m2 > k && (e = m2, m2 = k, k = e);
                    a.axisY.reversed && (e = m2, m2 = k, k = e);
                    e = w3.dataPointIds[q];
                    this._eventManager.objectMap[e] = { id: e, objectType: "dataPoint", dataSeriesIndex: p2, dataPointIndex: q, x1: h2, y1: m2, x2: E3, y2: k };
                    var L = x[q].color ? x[q].color : 0 < x[q].y ? w3.risingColor : w3.fallingColor;
                    ba(c, a.axisX.reversed ? E3 : h2, a.axisY.reversed ? k : m2, a.axisX.reversed ? h2 : E3, a.axisY.reversed ? m2 : k, L, 0, L, v, v, false, false, w3.fillOpacity);
                    e = Z(e);
                    u && ba(this._eventManager.ghostCtx, a.axisX.reversed ? E3 : h2, m2, a.axisX.reversed ? h2 : E3, k, e, 0, null, false, false, false, false);
                    var T, L = h2;
                    T = "undefined" !== typeof x[q].isIntermediateSum && true === x[q].isIntermediateSum || "undefined" !== typeof x[q].isCumulativeSum && true === x[q].isCumulativeSum ? 0 < x[q].y ? m2 : k : 0 < x[q].y ? k : m2;
                    0 < q && A && (!z3 || w3.connectNullData) && (z3 && c.setLineDash && c.setLineDash(I(D2, s)), c.beginPath(), c.moveTo(A, B - y), c.lineTo(L, T - y), 0 < s && c.stroke(), u && (b.beginPath(), b.moveTo(
                      A,
                      B - y
                    ), b.lineTo(L, T - y), 0 < s && b.stroke()));
                    z3 = false;
                    A = E3;
                    B = 0 < x[q].y ? m2 : k;
                    L = x[q].lineDashType ? x[q].lineDashType : w3.options.lineDashType ? w3.options.lineDashType : "shortDash";
                    c.strokeStyle = x[q].lineColor ? x[q].lineColor : w3.options.lineColor ? w3.options.lineColor : "#9e9e9e";
                    c.lineWidth = s;
                    c.setLineDash && (L = I(L, s), c.setLineDash(L));
                    (x[q].indexLabel || w3.indexLabel || x[q].indexLabelFormatter || w3.indexLabelFormatter) && this._indexLabels.push({
                      chartType: "waterfall",
                      dataPoint: x[q],
                      dataSeries: w3,
                      point: { x: h2 + (E3 - h2) / 2, y: 0 <= x[q].y ? m2 : k },
                      direction: 0 > x[q].y === a.axisY.reversed ? 1 : -1,
                      bounds: { x1: h2, y1: Math.min(m2, k), x2: E3, y2: Math.max(m2, k) },
                      color: e
                    });
                  }
            }
            u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(
              g.x1,
              g.y1,
              g.width,
              g.height
            ), this._eventManager.ghostCtx.restore());
            c.restore();
            return { source: d, dest: this.plotArea.ctx, animationCallback: O.fadeInAnimation, easingFunction: O.easing.easeInQuad, animationBase: 0 };
          }
        };
        var ra2 = function(a, d, c, b, e, g, q, h2, m2) {
          if (!(0 > c)) {
            "undefined" === typeof h2 && (h2 = 1);
            if (!u) {
              var k = Number((q % (2 * Math.PI)).toFixed(8));
              Number((g % (2 * Math.PI)).toFixed(8)) === k && (q -= 1e-4);
            }
            a.save();
            a.globalAlpha = h2;
            "pie" === e ? (a.beginPath(), a.moveTo(d.x, d.y), a.arc(d.x, d.y, c, g, q, false), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === e && (a.beginPath(), a.arc(d.x, d.y, c, g, q, false), 0 <= m2 && a.arc(d.x, d.y, m2 * c, q, g, true), a.closePath(), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
            a.globalAlpha = 1;
            a.restore();
          }
        };
        p.prototype.renderPie = function(a) {
          function d() {
            if (k && l) {
              for (var a2 = 0, b2 = 0, c2 = 0, d2 = 0, e2 = 0; e2 < l.length; e2++) {
                var g2 = l[e2], q2 = k.dataPointIds[e2];
                f[e2].id = q2;
                f[e2].objectType = "dataPoint";
                f[e2].dataPointIndex = e2;
                f[e2].dataSeriesIndex = 0;
                var h3 = f[e2], n2 = { percent: null, total: null }, t = null, n2 = p2.getPercentAndTotal(
                  k,
                  g2
                );
                if (k.indexLabelFormatter || g2.indexLabelFormatter)
                  t = { chart: p2.options, dataSeries: k, dataPoint: g2, total: n2.total, percent: n2.percent };
                n2 = g2.indexLabelFormatter ? g2.indexLabelFormatter(t) : g2.indexLabel ? p2.replaceKeywordsWithValue(g2.indexLabel, g2, k, e2) : k.indexLabelFormatter ? k.indexLabelFormatter(t) : k.indexLabel ? p2.replaceKeywordsWithValue(k.indexLabel, g2, k, e2) : g2.label ? g2.label : "";
                p2._eventManager.objectMap[q2] = h3;
                h3.center = { x: v.x, y: v.y };
                h3.y = g2.y;
                h3.radius = B;
                h3.percentInnerRadius = E3;
                h3.indexLabelText = n2;
                h3.indexLabelPlacement = k.indexLabelPlacement;
                h3.indexLabelLineColor = g2.indexLabelLineColor ? g2.indexLabelLineColor : k.options.indexLabelLineColor ? k.options.indexLabelLineColor : g2.color ? g2.color : k._colorSet[e2 % k._colorSet.length];
                h3.indexLabelLineThickness = m(g2.indexLabelLineThickness) ? k.indexLabelLineThickness : g2.indexLabelLineThickness;
                h3.indexLabelLineDashType = g2.indexLabelLineDashType ? g2.indexLabelLineDashType : k.indexLabelLineDashType;
                h3.indexLabelFontColor = g2.indexLabelFontColor ? g2.indexLabelFontColor : k.indexLabelFontColor;
                h3.indexLabelFontStyle = g2.indexLabelFontStyle ? g2.indexLabelFontStyle : k.indexLabelFontStyle;
                h3.indexLabelFontWeight = g2.indexLabelFontWeight ? g2.indexLabelFontWeight : k.indexLabelFontWeight;
                h3.indexLabelFontSize = m(g2.indexLabelFontSize) ? k.indexLabelFontSize : g2.indexLabelFontSize;
                h3.indexLabelFontFamily = g2.indexLabelFontFamily ? g2.indexLabelFontFamily : k.indexLabelFontFamily;
                h3.indexLabelBackgroundColor = g2.indexLabelBackgroundColor ? g2.indexLabelBackgroundColor : k.options.indexLabelBackgroundColor ? k.options.indexLabelBackgroundColor : k.indexLabelBackgroundColor;
                h3.indexLabelMaxWidth = g2.indexLabelMaxWidth ? g2.indexLabelMaxWidth : k.indexLabelMaxWidth ? k.indexLabelMaxWidth : 0.33 * r.width;
                h3.indexLabelWrap = "undefined" !== typeof g2.indexLabelWrap ? g2.indexLabelWrap : k.indexLabelWrap;
                h3.indexLabelTextAlign = g2.indexLabelTextAlign ? g2.indexLabelTextAlign : k.indexLabelTextAlign ? k.indexLabelTextAlign : "left";
                h3.startAngle = 0 === e2 ? k.startAngle ? k.startAngle / 180 * Math.PI : 0 : f[e2 - 1].endAngle;
                h3.startAngle = (h3.startAngle + 2 * Math.PI) % (2 * Math.PI);
                h3.endAngle = h3.startAngle + 2 * Math.PI / z3 * Math.abs(g2.y);
                g2 = (h3.endAngle + h3.startAngle) / 2;
                g2 = (g2 + 2 * Math.PI) % (2 * Math.PI);
                h3.midAngle = g2;
                if (h3.midAngle > Math.PI / 2 - s && h3.midAngle < Math.PI / 2 + s) {
                  if (0 === a2 || f[c2].midAngle > h3.midAngle)
                    c2 = e2;
                  a2++;
                } else if (h3.midAngle > 3 * Math.PI / 2 - s && h3.midAngle < 3 * Math.PI / 2 + s) {
                  if (0 === b2 || f[d2].midAngle > h3.midAngle)
                    d2 = e2;
                  b2++;
                }
                h3.hemisphere = g2 > Math.PI / 2 && g2 <= 3 * Math.PI / 2 ? "left" : "right";
                h3.indexLabelTextBlock = new la(p2.plotArea.ctx, {
                  fontSize: h3.indexLabelFontSize,
                  fontFamily: h3.indexLabelFontFamily,
                  fontColor: h3.indexLabelFontColor,
                  fontStyle: h3.indexLabelFontStyle,
                  fontWeight: h3.indexLabelFontWeight,
                  textAlign: h3.indexLabelTextAlign,
                  backgroundColor: h3.indexLabelBackgroundColor,
                  maxWidth: h3.indexLabelMaxWidth,
                  maxHeight: h3.indexLabelWrap ? 5 * h3.indexLabelFontSize : 1.5 * h3.indexLabelFontSize,
                  text: h3.indexLabelText,
                  padding: 0,
                  textBaseline: "middle"
                });
                h3.indexLabelTextBlock.measureText();
              }
              q2 = g2 = 0;
              n2 = false;
              for (e2 = 0; e2 < l.length; e2++)
                h3 = f[(c2 + e2) % l.length], 1 < a2 && (h3.midAngle > Math.PI / 2 - s && h3.midAngle < Math.PI / 2 + s) && (g2 <= a2 / 2 && !n2 ? (h3.hemisphere = "right", g2++) : (h3.hemisphere = "left", n2 = true));
              n2 = false;
              for (e2 = 0; e2 < l.length; e2++)
                h3 = f[(d2 + e2) % l.length], 1 < b2 && (h3.midAngle > 3 * Math.PI / 2 - s && h3.midAngle < 3 * Math.PI / 2 + s) && (q2 <= b2 / 2 && !n2 ? (h3.hemisphere = "left", q2++) : (h3.hemisphere = "right", n2 = true));
            }
          }
          function c(a2, b2) {
            var c2 = p2.plotArea.ctx;
            c2.clearRect(r.x1, r.y1, r.width, r.height);
            c2.fillStyle = p2.backgroundColor;
            c2.fillRect(r.x1, r.y1, r.width, r.height);
            for (c2 = 0; c2 < l.length; c2++) {
              var d2 = f[c2].startAngle, e2 = f[c2].endAngle;
              if (e2 > d2) {
                var g2 = 0.07 * B * Math.cos(f[c2].midAngle), q2 = 0.07 * B * Math.sin(f[c2].midAngle), h3 = false;
                if (l[c2].exploded) {
                  if (1e-9 < Math.abs(f[c2].center.x - (v.x + g2)) || 1e-9 < Math.abs(f[c2].center.y - (v.y + q2)))
                    f[c2].center.x = v.x + g2 * a2, f[c2].center.y = v.y + q2 * a2, h3 = true;
                } else if (0 < Math.abs(f[c2].center.x - v.x) || 0 < Math.abs(f[c2].center.y - v.y))
                  f[c2].center.x = v.x + g2 * (1 - a2), f[c2].center.y = v.y + q2 * (1 - a2), h3 = true;
                h3 && b2 && (g2 = {}, g2.dataSeries = k, g2.dataPoint = k.dataPoints[c2], g2.index = c2, p2.toolTip.highlightObjects([g2]));
                ra2(p2.plotArea.ctx, f[c2].center, f[c2].radius, l[c2].color ? l[c2].color : k._colorSet[c2 % k._colorSet.length], k.type, d2, e2, k.fillOpacity, f[c2].percentInnerRadius);
              }
            }
            c2 = p2.plotArea.ctx;
            c2.save();
            c2.fillStyle = "black";
            c2.strokeStyle = "grey";
            c2.textBaseline = "middle";
            c2.lineJoin = "round";
            for (d2 = d2 = 0; d2 < l.length; d2++)
              e2 = f[d2], e2.indexLabelText && (e2.indexLabelTextBlock.y -= e2.indexLabelTextBlock.height / 2 - e2.indexLabelTextBlock.fontSize / 2, g2 = 0, g2 = "left" === e2.hemisphere ? "inside" !== k.indexLabelPlacement ? -(e2.indexLabelTextBlock.width + n) : -e2.indexLabelTextBlock.width / 2 : "inside" !== k.indexLabelPlacement ? n : -e2.indexLabelTextBlock.width / 2, e2.indexLabelTextBlock.x += g2, e2.indexLabelTextBlock.render(true), e2.indexLabelTextBlock.x -= g2, e2.indexLabelTextBlock.y += e2.indexLabelTextBlock.height / 2 - e2.indexLabelTextBlock.fontSize / 2, "inside" !== e2.indexLabelPlacement && 0 < e2.indexLabelLineThickness && (g2 = e2.center.x + B * Math.cos(e2.midAngle), q2 = e2.center.y + B * Math.sin(e2.midAngle), c2.strokeStyle = e2.indexLabelLineColor, c2.lineWidth = e2.indexLabelLineThickness, c2.setLineDash && c2.setLineDash(I(e2.indexLabelLineDashType, e2.indexLabelLineThickness)), c2.beginPath(), c2.moveTo(g2, q2), c2.lineTo(e2.indexLabelTextBlock.x, e2.indexLabelTextBlock.y), c2.lineTo(e2.indexLabelTextBlock.x + ("left" === e2.hemisphere ? -n : n), e2.indexLabelTextBlock.y), c2.stroke()), c2.lineJoin = "miter");
            c2.save();
          }
          function b(a2, b2) {
            var c2 = 0, c2 = a2.indexLabelTextBlock.y - a2.indexLabelTextBlock.height / 2, e2 = a2.indexLabelTextBlock.y + a2.indexLabelTextBlock.height / 2, d2 = b2.indexLabelTextBlock.y - b2.indexLabelTextBlock.height / 2, f2 = b2.indexLabelTextBlock.y + b2.indexLabelTextBlock.height / 2;
            return c2 = b2.indexLabelTextBlock.y > a2.indexLabelTextBlock.y ? d2 - e2 : c2 - f2;
          }
          function e(a2) {
            for (var c2 = null, e2 = 1; e2 < l.length; e2++)
              if (c2 = (a2 + e2 + f.length) % f.length, f[c2].hemisphere !== f[a2].hemisphere) {
                c2 = null;
                break;
              } else if (f[c2].indexLabelText && c2 !== a2 && (0 > b(f[c2], f[a2]) || ("right" === f[a2].hemisphere ? f[c2].indexLabelTextBlock.y >= f[a2].indexLabelTextBlock.y : f[c2].indexLabelTextBlock.y <= f[a2].indexLabelTextBlock.y)))
                break;
              else
                c2 = null;
            return c2;
          }
          function g(a2, c2, d2) {
            d2 = (d2 || 0) + 1;
            if (1e3 < d2)
              return 0;
            c2 = c2 || 0;
            var q2 = 0, k2 = v.y - 1 * w3, h3 = v.y + 1 * w3;
            if (0 <= a2 && a2 < l.length) {
              var n2 = f[a2];
              if (0 > c2 && n2.indexLabelTextBlock.y < k2 || 0 < c2 && n2.indexLabelTextBlock.y > h3)
                return 0;
              var m2 = 0, r2 = 0, r2 = m2 = m2 = 0;
              0 > c2 ? n2.indexLabelTextBlock.y - n2.indexLabelTextBlock.height / 2 > k2 && n2.indexLabelTextBlock.y - n2.indexLabelTextBlock.height / 2 + c2 < k2 && (c2 = -(k2 - (n2.indexLabelTextBlock.y - n2.indexLabelTextBlock.height / 2 + c2))) : n2.indexLabelTextBlock.y + n2.indexLabelTextBlock.height / 2 < k2 && n2.indexLabelTextBlock.y + n2.indexLabelTextBlock.height / 2 + c2 > h3 && (c2 = n2.indexLabelTextBlock.y + n2.indexLabelTextBlock.height / 2 + c2 - h3);
              c2 = n2.indexLabelTextBlock.y + c2;
              k2 = 0;
              k2 = "right" === n2.hemisphere ? v.x + Math.sqrt(Math.pow(w3, 2) - Math.pow(c2 - v.y, 2)) : v.x - Math.sqrt(Math.pow(w3, 2) - Math.pow(c2 - v.y, 2));
              r2 = v.x + B * Math.cos(n2.midAngle);
              m2 = v.y + B * Math.sin(n2.midAngle);
              m2 = Math.sqrt(Math.pow(k2 - r2, 2) + Math.pow(c2 - m2, 2));
              r2 = Math.acos(B / w3);
              m2 = Math.acos((w3 * w3 + B * B - m2 * m2) / (2 * B * w3));
              c2 = m2 < r2 ? c2 - n2.indexLabelTextBlock.y : 0;
              k2 = null;
              for (h3 = 1; h3 < l.length; h3++)
                if (k2 = (a2 - h3 + f.length) % f.length, f[k2].hemisphere !== f[a2].hemisphere) {
                  k2 = null;
                  break;
                } else if (f[k2].indexLabelText && f[k2].hemisphere === f[a2].hemisphere && k2 !== a2 && (0 > b(f[k2], f[a2]) || ("right" === f[a2].hemisphere ? f[k2].indexLabelTextBlock.y <= f[a2].indexLabelTextBlock.y : f[k2].indexLabelTextBlock.y >= f[a2].indexLabelTextBlock.y)))
                  break;
                else
                  k2 = null;
              r2 = k2;
              m2 = e(a2);
              h3 = k2 = 0;
              0 > c2 ? (h3 = "right" === n2.hemisphere ? r2 : m2, q2 = c2, null !== h3 && (r2 = -c2, c2 = n2.indexLabelTextBlock.y - n2.indexLabelTextBlock.height / 2 - (f[h3].indexLabelTextBlock.y + f[h3].indexLabelTextBlock.height / 2), c2 - r2 < u2 && (k2 = -r2, h3 = g(h3, k2, d2 + 1), +h3.toFixed(y) > +k2.toFixed(y) && (q2 = c2 > u2 ? -(c2 - u2) : -(r2 - (h3 - k2)))))) : 0 < c2 && (h3 = "right" === n2.hemisphere ? m2 : r2, q2 = c2, null !== h3 && (r2 = c2, c2 = f[h3].indexLabelTextBlock.y - f[h3].indexLabelTextBlock.height / 2 - (n2.indexLabelTextBlock.y + n2.indexLabelTextBlock.height / 2), c2 - r2 < u2 && (k2 = r2, h3 = g(h3, k2, d2 + 1), +h3.toFixed(y) < +k2.toFixed(y) && (q2 = c2 > u2 ? c2 - u2 : r2 - (k2 - h3)))));
              q2 && (d2 = n2.indexLabelTextBlock.y + q2, c2 = 0, c2 = "right" === n2.hemisphere ? v.x + Math.sqrt(Math.pow(w3, 2) - Math.pow(d2 - v.y, 2)) : v.x - Math.sqrt(Math.pow(w3, 2) - Math.pow(d2 - v.y, 2)), n2.midAngle > Math.PI / 2 - s && n2.midAngle < Math.PI / 2 + s ? (k2 = (a2 - 1 + f.length) % f.length, k2 = f[k2], a2 = f[(a2 + 1 + f.length) % f.length], "left" === n2.hemisphere && "right" === k2.hemisphere && c2 > k2.indexLabelTextBlock.x ? c2 = k2.indexLabelTextBlock.x - 15 : "right" === n2.hemisphere && ("left" === a2.hemisphere && c2 < a2.indexLabelTextBlock.x) && (c2 = a2.indexLabelTextBlock.x + 15)) : n2.midAngle > 3 * Math.PI / 2 - s && n2.midAngle < 3 * Math.PI / 2 + s && (k2 = (a2 - 1 + f.length) % f.length, k2 = f[k2], a2 = f[(a2 + 1 + f.length) % f.length], "right" === n2.hemisphere && "left" === k2.hemisphere && c2 < k2.indexLabelTextBlock.x ? c2 = k2.indexLabelTextBlock.x + 15 : "left" === n2.hemisphere && ("right" === a2.hemisphere && c2 > a2.indexLabelTextBlock.x) && (c2 = a2.indexLabelTextBlock.x - 15)), n2.indexLabelTextBlock.y = d2, n2.indexLabelTextBlock.x = c2, n2.indexLabelAngle = Math.atan2(n2.indexLabelTextBlock.y - v.y, n2.indexLabelTextBlock.x - v.x));
            }
            return q2;
          }
          function q() {
            var a2 = p2.plotArea.ctx;
            a2.fillStyle = "grey";
            a2.strokeStyle = "grey";
            a2.font = "16px Arial";
            a2.textBaseline = "middle";
            for (var c2 = a2 = 0, d2 = 0, q2 = true, c2 = 0; 10 > c2 && (1 > c2 || 0 < d2); c2++) {
              if (k.radius || !k.radius && "undefined" !== typeof k.innerRadius && null !== k.innerRadius && B - d2 <= D2)
                q2 = false;
              q2 && (B -= d2);
              d2 = 0;
              if ("inside" !== k.indexLabelPlacement) {
                w3 = B * x;
                for (a2 = 0; a2 < l.length; a2++) {
                  var h3 = f[a2];
                  h3.indexLabelTextBlock.x = v.x + w3 * Math.cos(h3.midAngle);
                  h3.indexLabelTextBlock.y = v.y + w3 * Math.sin(h3.midAngle);
                  h3.indexLabelAngle = h3.midAngle;
                  h3.radius = B;
                  h3.percentInnerRadius = E3;
                }
                for (var m2, t, a2 = 0; a2 < l.length; a2++) {
                  var h3 = f[a2], s2 = e(a2);
                  if (null !== s2) {
                    m2 = f[a2];
                    t = f[s2];
                    var A2 = 0, A2 = b(m2, t) - u2;
                    if (0 > A2) {
                      for (var z4 = t = 0, H = 0; H < l.length; H++)
                        H !== a2 && f[H].hemisphere === h3.hemisphere && (f[H].indexLabelTextBlock.y < h3.indexLabelTextBlock.y ? t++ : z4++);
                      t = A2 / (t + z4 || 1) * z4;
                      var z4 = -1 * (A2 - t), I2 = H = 0;
                      "right" === h3.hemisphere ? (H = g(a2, t), z4 = -1 * (A2 - H), I2 = g(s2, z4), +I2.toFixed(y) < +z4.toFixed(y) && +H.toFixed(y) <= +t.toFixed(y) && g(a2, -(z4 - I2))) : (H = g(s2, t), z4 = -1 * (A2 - H), I2 = g(a2, z4), +I2.toFixed(y) < +z4.toFixed(y) && +H.toFixed(y) <= +t.toFixed(y) && g(s2, -(z4 - I2)));
                    }
                  }
                }
              } else
                for (a2 = 0; a2 < l.length; a2++)
                  h3 = f[a2], w3 = "pie" === k.type ? 0.7 * B : 0.85 * B, s2 = v.x + w3 * Math.cos(h3.midAngle), t = v.y + w3 * Math.sin(h3.midAngle), h3.indexLabelTextBlock.x = s2, h3.indexLabelTextBlock.y = t;
              for (a2 = 0; a2 < l.length; a2++)
                if (h3 = f[a2], s2 = h3.indexLabelTextBlock.measureText(), 0 !== s2.height && 0 !== s2.width)
                  s2 = s2 = 0, "right" === h3.hemisphere ? (s2 = r.x2 - (h3.indexLabelTextBlock.x + h3.indexLabelTextBlock.width + n), s2 *= -1) : s2 = r.x1 - (h3.indexLabelTextBlock.x - h3.indexLabelTextBlock.width - n), 0 < s2 && (!q2 && h3.indexLabelText && (t = "right" === h3.hemisphere ? r.x2 - h3.indexLabelTextBlock.x : h3.indexLabelTextBlock.x - r.x1, 0.3 * h3.indexLabelTextBlock.maxWidth > t ? h3.indexLabelText = "" : h3.indexLabelTextBlock.maxWidth = 0.85 * t, 0.3 * h3.indexLabelTextBlock.maxWidth < t && (h3.indexLabelTextBlock.x -= "right" === h3.hemisphere ? 2 : -2)), Math.abs(h3.indexLabelTextBlock.y - h3.indexLabelTextBlock.height / 2 - v.y) < B || Math.abs(h3.indexLabelTextBlock.y + h3.indexLabelTextBlock.height / 2 - v.y) < B) && (s2 /= Math.abs(Math.cos(h3.indexLabelAngle)), 9 < s2 && (s2 *= 0.3), s2 > d2 && (d2 = s2)), s2 = s2 = 0, 0 < h3.indexLabelAngle && h3.indexLabelAngle < Math.PI ? (s2 = r.y2 - (h3.indexLabelTextBlock.y + h3.indexLabelTextBlock.height / 2 + 5), s2 *= -1) : s2 = r.y1 - (h3.indexLabelTextBlock.y - h3.indexLabelTextBlock.height / 2 - 5), 0 < s2 && (!q2 && h3.indexLabelText && (t = 0 < h3.indexLabelAngle && h3.indexLabelAngle < Math.PI ? -1 : 1, 0 === g(a2, s2 * t) && g(a2, 2 * t)), Math.abs(h3.indexLabelTextBlock.x - v.x) < B && (s2 /= Math.abs(Math.sin(h3.indexLabelAngle)), 9 < s2 && (s2 *= 0.3), s2 > d2 && (d2 = s2)));
              var M = function(a3, b2, c3) {
                for (var e2 = [], d3 = 0; e2.push(f[b2]), b2 !== c3; b2 = (b2 + 1 + l.length) % l.length)
                  ;
                e2.sort(function(a4, b3) {
                  return a4.y - b3.y;
                });
                for (b2 = 0; b2 < e2.length; b2++)
                  if (c3 = e2[b2], d3 < 0.7 * a3)
                    d3 += c3.indexLabelTextBlock.height, c3.indexLabelTextBlock.text = "", c3.indexLabelText = "", c3.indexLabelTextBlock.measureText();
                  else
                    break;
              };
              (function() {
                for (var a3 = -1, c3 = -1, d3 = 0, g2 = false, q3 = 0; q3 < l.length; q3++)
                  if (g2 = false, m2 = f[q3], m2.indexLabelText) {
                    var k2 = e(q3);
                    if (null !== k2) {
                      var h4 = f[k2];
                      A2 = 0;
                      A2 = b(m2, h4);
                      var r2;
                      if (r2 = 0 > A2) {
                        r2 = m2.indexLabelTextBlock.x;
                        var t2 = m2.indexLabelTextBlock.y - m2.indexLabelTextBlock.height / 2, p3 = m2.indexLabelTextBlock.y + m2.indexLabelTextBlock.height / 2, s3 = h4.indexLabelTextBlock.y - h4.indexLabelTextBlock.height / 2, C = h4.indexLabelTextBlock.x + h4.indexLabelTextBlock.width, v2 = h4.indexLabelTextBlock.y + h4.indexLabelTextBlock.height / 2;
                        r2 = m2.indexLabelTextBlock.x + m2.indexLabelTextBlock.width < h4.indexLabelTextBlock.x - n || r2 > C + n || t2 > v2 + n || p3 < s3 - n ? false : true;
                      }
                      r2 ? (0 > a3 && (a3 = q3), k2 !== a3 && (c3 = k2, d3 += -A2), 0 === q3 % Math.max(l.length / 10, 3) && (g2 = true)) : g2 = true;
                      g2 && (0 < d3 && 0 <= a3 && 0 <= c3) && (M(d3, a3, c3), c3 = a3 = -1, d3 = 0);
                    }
                  }
                0 < d3 && M(d3, a3, c3);
              })();
            }
          }
          function h2() {
            p2.plotArea.layoutManager.reset();
            p2.title && (p2.title.dockInsidePlotArea || "center" === p2.title.horizontalAlign && "center" === p2.title.verticalAlign) && p2.title.render();
            if (p2.subtitles)
              for (var a2 = 0; a2 < p2.subtitles.length; a2++) {
                var b2 = p2.subtitles[a2];
                (b2.dockInsidePlotArea || "center" === b2.horizontalAlign && "center" === b2.verticalAlign) && b2.render();
              }
            p2.legend && (p2.legend.dockInsidePlotArea || "center" === p2.legend.horizontalAlign && "center" === p2.legend.verticalAlign) && (p2.legend.setLayout(), p2.legend.render());
          }
          var p2 = this;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            var k = this.data[a.dataSeriesIndexes[0]], l = k.dataPoints, n = 10, r = this.plotArea, f = k.dataPointEOs, u2 = 2, w3, x = 1.3, s = 20 / 180 * Math.PI, y = 6, v = { x: (r.x2 + r.x1) / 2, y: (r.y2 + r.y1) / 2 }, z3 = 0;
            a = false;
            for (var A = 0; A < l.length; A++)
              z3 += Math.abs(l[A].y), !a && ("undefined" !== typeof l[A].indexLabel && null !== l[A].indexLabel && 0 < l[A].indexLabel.toString().length) && (a = true), !a && ("undefined" !== typeof l[A].label && null !== l[A].label && 0 < l[A].label.toString().length) && (a = true);
            if (0 !== z3) {
              a = a || "undefined" !== typeof k.indexLabel && null !== k.indexLabel && 0 < k.indexLabel.toString().length;
              var B = "inside" !== k.indexLabelPlacement && a ? 0.75 * Math.min(r.width, r.height) / 2 : 0.92 * Math.min(r.width, r.height) / 2;
              k.radius && (B = Ta(k.radius, B));
              var D2 = "undefined" !== typeof k.innerRadius && null !== k.innerRadius ? Ta(k.innerRadius, B) : 0.7 * B;
              k.radius = B;
              "doughnut" === k.type && (k.innerRadius = D2);
              var E3 = Math.min(D2 / B, (B - 1) / B);
              this.pieDoughnutClickHandler = function(a2) {
                p2.isAnimating || !m(a2.dataSeries.explodeOnClick) && !a2.dataSeries.explodeOnClick || (a2 = a2.dataPoint, a2.exploded = a2.exploded ? false : true, 1 < this.dataPoints.length && p2._animator.animate(0, 500, function(a3) {
                  c(a3, true);
                  h2();
                  p2.dispatchEvent("dataAnimationIterationEnd", { chart: p2 });
                  p2.dispatchEvent("dataAnimationEnd", { chart: p2 });
                }));
              };
              d();
              q();
              q();
              q();
              q();
              this.disableToolTip = true;
              this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a2) {
                var b2 = p2.plotArea.ctx;
                b2.clearRect(r.x1, r.y1, r.width, r.height);
                b2.fillStyle = p2.backgroundColor;
                b2.fillRect(r.x1, r.y1, r.width, r.height);
                for (var b2 = f[0].startAngle + 2 * Math.PI * a2, c2 = 0; c2 < l.length; c2++) {
                  var e2 = 0 === c2 ? f[c2].startAngle : d2, d2 = e2 + (f[c2].endAngle - f[c2].startAngle), g2 = false;
                  d2 > b2 && (d2 = b2, g2 = true);
                  var q2 = l[c2].color ? l[c2].color : k._colorSet[c2 % k._colorSet.length];
                  d2 > e2 && ra2(p2.plotArea.ctx, f[c2].center, f[c2].radius, q2, k.type, e2, d2, k.fillOpacity, f[c2].percentInnerRadius);
                  if (g2)
                    break;
                }
                h2();
                p2.dispatchEvent(
                  "dataAnimationIterationEnd",
                  { chart: p2 }
                );
                1 <= a2 && p2.dispatchEvent("dataAnimationEnd", { chart: p2 });
              }, function() {
                p2.disableToolTip = false;
                p2._animator.animate(0, p2.animatedRender ? 500 : 0, function(a2) {
                  c(a2, false);
                  h2();
                  p2.dispatchEvent("dataAnimationIterationEnd", { chart: p2 });
                });
                p2.dispatchEvent("dataAnimationEnd", { chart: p2 });
              });
            }
          }
        };
        var ta2 = function(a, d, c, b) {
          "undefined" === typeof c && (c = 1);
          0 >= Math.round(d.y4 - d.y1) || (a.save(), a.globalAlpha = c, a.beginPath(), a.moveTo(Math.round(d.x1), Math.round(d.y1)), a.lineTo(Math.round(d.x2), Math.round(d.y2)), a.lineTo(
            Math.round(d.x3),
            Math.round(d.y3)
          ), a.lineTo(Math.round(d.x4), Math.round(d.y4)), "undefined" !== d.x5 && (a.lineTo(Math.round(d.x5), Math.round(d.y5)), a.lineTo(Math.round(d.x6), Math.round(d.y6))), a.closePath(), a.fillStyle = b ? b : d.color, a.fill(), a.globalAplha = 1, a.restore());
        };
        p.prototype.renderFunnel = function(a) {
          function d() {
            for (var a2 = 0, b2 = [], c2 = 0; c2 < y.length; c2++) {
              if ("undefined" === typeof y[c2].y)
                return -1;
              y[c2].y = "number" === typeof y[c2].y ? y[c2].y : 0;
              a2 += Math.abs(y[c2].y);
            }
            if (0 === a2)
              return -1;
            for (c2 = b2[0] = 0; c2 < y.length; c2++)
              b2.push(Math.abs(y[c2].y) * D2 / a2);
            return b2;
          }
          function c() {
            var a2 = U2, b2 = Y2, c2 = M, e2 = $, d2, f2;
            d2 = N;
            f2 = P2 - R3;
            e2 = Math.abs((f2 - d2) * (b2 - a2 + (e2 - c2)) / 2);
            c2 = $ - M;
            d2 = f2 - d2;
            f2 = c2 * (f2 - P2);
            f2 = Math.abs(f2);
            f2 = e2 + f2;
            for (var e2 = [], g2 = 0, q2 = 0; q2 < y.length; q2++) {
              if ("undefined" === typeof y[q2].y)
                return -1;
              y[q2].y = "number" === typeof y[q2].y ? y[q2].y : 0;
              g2 += Math.abs(y[q2].y);
            }
            if (0 === g2)
              return -1;
            for (var k2 = e2[0] = 0, h3 = 0, l2, n2, b2 = b2 - a2, k2 = false, q2 = 0; q2 < y.length; q2++)
              a2 = Math.abs(y[q2].y) * f2 / g2, k2 ? l2 = 0 == Number(c2.toFixed(3)) ? 0 : a2 / c2 : (n2 = da3 * da3 * b2 * b2 - 4 * Math.abs(da3) * a2, 0 > n2 ? (n2 = c2, k2 = (b2 + n2) * (d2 - h3) / 2, a2 -= k2, l2 = d2 - h3, h3 += d2 - h3, l2 += 0 == n2 ? 0 : a2 / n2, h3 += a2 / n2, k2 = true) : (l2 = (Math.abs(da3) * b2 - Math.sqrt(n2)) / 2, n2 = b2 - 2 * l2 / Math.abs(da3), h3 += l2, h3 > d2 && (h3 -= l2, n2 = c2, k2 = (b2 + n2) * (d2 - h3) / 2, a2 -= k2, l2 = d2 - h3, h3 += d2 - h3, l2 += a2 / n2, h3 += a2 / n2, k2 = true), b2 = n2)), e2.push(l2);
            return e2;
          }
          function b() {
            if (s && y) {
              for (var a2, b2, c2, d2, e2, g2, q2, k2, h3, l2, n2, r2, t, p3, v2, C = [], w4 = [], z4 = { percent: null, total: null }, J2 = null, A2 = 0; A2 < y.length; A2++)
                v2 = S[A2], v2 = "undefined" !== typeof v2.x5 ? (v2.y2 + v2.y4) / 2 : (v2.y2 + v2.y3) / 2, v2 = f(v2).x2 + 1, C[A2] = K2 - v2 - Z2;
              v2 = 0.5 * Z2;
              for (var A2 = 0, B2 = y.length - 1; A2 < y.length || 0 <= B2; A2++, B2--) {
                b2 = s.reversed ? y[B2] : y[A2];
                a2 = b2.color ? b2.color : s.reversed ? s._colorSet[(y.length - 1 - A2) % s._colorSet.length] : s._colorSet[A2 % s._colorSet.length];
                c2 = b2.indexLabelPlacement || s.indexLabelPlacement || "outside";
                p3 = b2.indexLabelTextAlign || s.indexLabelTextAlign || "left";
                d2 = b2.indexLabelBackgroundColor || s.indexLabelBackgroundColor || (u ? "transparent" : null);
                e2 = b2.indexLabelFontColor || s.indexLabelFontColor || "#979797";
                g2 = m(b2.indexLabelFontSize) ? s.indexLabelFontSize : b2.indexLabelFontSize;
                q2 = b2.indexLabelFontStyle || s.indexLabelFontStyle || "normal";
                k2 = b2.indexLabelFontFamily || s.indexLabelFontFamily || "arial";
                h3 = b2.indexLabelFontWeight || s.indexLabelFontWeight || "normal";
                a2 = b2.indexLabelLineColor || s.options.indexLabelLineColor || a2;
                l2 = "number" === typeof b2.indexLabelLineThickness ? b2.indexLabelLineThickness : "number" === typeof s.indexLabelLineThickness ? s.indexLabelLineThickness : 2;
                n2 = b2.indexLabelLineDashType || s.indexLabelLineDashType || "solid";
                r2 = "undefined" !== typeof b2.indexLabelWrap ? b2.indexLabelWrap : "undefined" !== typeof s.indexLabelWrap ? s.indexLabelWrap : true;
                t = s.dataPointIds[A2];
                x._eventManager.objectMap[t] = {
                  id: t,
                  objectType: "dataPoint",
                  dataPointIndex: A2,
                  dataSeriesIndex: 0,
                  funnelSection: S[s.reversed ? y.length - 1 - A2 : A2]
                };
                "inside" === s.indexLabelPlacement && (C[A2] = A2 !== ea3 ? s.reversed ? S[A2].x2 - S[A2].x1 : S[A2].x3 - S[A2].x4 : S[A2].x3 - S[A2].x6, 20 > C[A2] && (C[A2] = A2 !== ea3 ? s.reversed ? S[A2].x3 - S[A2].x4 : S[A2].x2 - S[A2].x1 : S[A2].x2 - S[A2].x1, C[A2] /= 2));
                t = b2.indexLabelMaxWidth ? b2.indexLabelMaxWidth : s.options.indexLabelMaxWidth ? s.indexLabelMaxWidth : C[A2];
                if (t > C[A2] || 0 > t)
                  t = C[A2];
                w4[A2] = "inside" === s.indexLabelPlacement ? r2 ? Math.max(S[A2].height, g2) : 1.5 * g2 : false;
                z4 = x.getPercentAndTotal(s, b2);
                if (s.indexLabelFormatter || b2.indexLabelFormatter)
                  J2 = { chart: x.options, dataSeries: s, dataPoint: b2, total: z4.total, percent: z4.percent };
                b2 = b2.indexLabelFormatter ? b2.indexLabelFormatter(J2) : b2.indexLabel ? x.replaceKeywordsWithValue(b2.indexLabel, b2, s, A2) : s.indexLabelFormatter ? s.indexLabelFormatter(J2) : s.indexLabel ? x.replaceKeywordsWithValue(s.indexLabel, b2, s, A2) : b2.label ? b2.label : "";
                0 >= l2 && (l2 = 0);
                1e3 > t && 1e3 - t < v2 && (t += 1e3 - t);
                Q2.roundRect || Aa(Q2);
                c2 = new la(Q2, {
                  fontSize: g2,
                  fontFamily: k2,
                  fontColor: e2,
                  fontStyle: q2,
                  fontWeight: h3,
                  horizontalAlign: c2,
                  textAlign: p3,
                  backgroundColor: d2,
                  maxWidth: t,
                  maxHeight: false === w4[A2] ? r2 ? 4.28571429 * g2 : 1.5 * g2 : w4[A2],
                  text: b2,
                  padding: fa3,
                  textBaseline: "middle"
                });
                c2.measureText();
                c2.height = c2.height === 2 * c2.padding ? 0 : c2.height;
                c2.width = c2.width === 2 * c2.padding ? 0 : c2.width;
                G.push({ textBlock: c2, id: s.reversed ? B2 : A2, isDirty: false, lineColor: a2, lineThickness: l2, lineDashType: n2, height: c2.height < c2.maxHeight ? c2.height : c2.maxHeight, width: c2.width < c2.maxWidth ? c2.width : c2.maxWidth });
              }
            }
          }
          function e() {
            var a2, b2, c2, d2, e2, f2 = [];
            e2 = false;
            c2 = 0;
            for (var g2, q2 = K2 - Y2 - Z2 / 2, q2 = s.options.indexLabelMaxWidth ? s.indexLabelMaxWidth > q2 ? q2 : s.indexLabelMaxWidth : q2, k2 = G.length - 1; 0 <= k2; k2--) {
              g2 = y[G[k2].id];
              c2 = G[k2];
              d2 = c2.textBlock;
              b2 = (a2 = r(k2) < S.length ? G[r(k2)] : null) ? a2.textBlock : null;
              c2 = c2.height;
              a2 && d2.y + c2 + fa3 > b2.y && (e2 = true);
              c2 = g2.indexLabelMaxWidth || q2;
              if (c2 > q2 || 0 > c2)
                c2 = q2;
              f2.push(c2);
            }
            if (e2)
              for (k2 = G.length - 1; 0 <= k2; k2--)
                a2 = S[k2], G[k2].textBlock.maxWidth = f2[f2.length - (k2 + 1)], G[k2].textBlock.measureText(), G[k2].textBlock.height = G[k2].textBlock.height === 2 * G[k2].textBlock.padding ? 0 : G[k2].textBlock.height, G[k2].textBlock.width = G[k2].textBlock.width === 2 * G[k2].textBlock.padding ? 0 : G[k2].textBlock.width, G[k2].textBlock.x = K2 - q2, c2 = G[k2].textBlock.height < G[k2].textBlock.maxHeight ? G[k2].textBlock.height : G[k2].textBlock.maxHeight, e2 = G[k2].textBlock.width < G[k2].textBlock.maxWidth ? G[k2].textBlock.width : G[k2].textBlock.maxWidth, G[k2].height = c2, G[k2].width = e2, c2 = "undefined" !== typeof a2.x5 ? (a2.y2 + a2.y4) / 2 : (a2.y2 + a2.y3) / 2, G[k2].textBlock.y = c2 - G[k2].height / 2, s.reversed ? (G[k2].textBlock.y + G[k2].height > W3 + z3 && (G[k2].textBlock.y = W3 + z3 - G[k2].height), G[k2].textBlock.y < va - z3 && (G[k2].textBlock.y = va - z3)) : (G[k2].textBlock.y < W3 - z3 && (G[k2].textBlock.y = W3 - z3), G[k2].textBlock.y + G[k2].height > va + z3 && (G[k2].textBlock.y = va + z3 - G[k2].height));
          }
          function g() {
            var a2, b2, c2, e2;
            if ("inside" !== s.indexLabelPlacement)
              for (var d2 = 0; d2 < S.length; d2++)
                0 == G[d2].textBlock.text.length ? G[d2].isDirty = true : (a2 = S[d2], c2 = "undefined" !== typeof a2.x5 ? (a2.y2 + a2.y4) / 2 : (a2.y2 + a2.y3) / 2, b2 = s.reversed ? "undefined" !== typeof a2.x5 ? c2 > X2 ? f(c2).x2 + 1 : (a2.x2 + a2.x3) / 2 + 1 : (a2.x2 + a2.x3) / 2 + 1 : "undefined" !== typeof a2.x5 ? c2 < X2 ? f(c2).x2 + 1 : (a2.x4 + a2.x3) / 2 + 1 : (a2.x2 + a2.x3) / 2 + 1, G[d2].textBlock.x = b2 + Z2, G[d2].textBlock.y = c2 - G[d2].height / 2, s.reversed ? (G[d2].textBlock.y + G[d2].height > W3 + z3 && (G[d2].textBlock.y = W3 + z3 - G[d2].height), G[d2].textBlock.y < va - z3 && (G[d2].textBlock.y = va - z3)) : (G[d2].textBlock.y < W3 - z3 && (G[d2].textBlock.y = W3 - z3), G[d2].textBlock.y + G[d2].height > va + z3 && (G[d2].textBlock.y = va + z3 - G[d2].height)));
            else
              for (d2 = 0; d2 < S.length; d2++)
                0 == G[d2].textBlock.text.length ? G[d2].isDirty = true : (a2 = S[d2], b2 = a2.height, c2 = G[d2].height, e2 = G[d2].width, b2 >= c2 ? (b2 = d2 != ea3 ? (a2.x4 + a2.x3) / 2 - e2 / 2 : (a2.x5 + a2.x4) / 2 - e2 / 2, c2 = d2 != ea3 ? (a2.y1 + a2.y3) / 2 - c2 / 2 : (a2.y1 + a2.y4) / 2 - c2 / 2, G[d2].textBlock.x = b2, G[d2].textBlock.y = c2) : G[d2].isDirty = true);
          }
          function q() {
            function a2(b3, c3) {
              var d3;
              if (0 > b3 || b3 >= G.length)
                return 0;
              var e3, f3 = G[b3].textBlock;
              if (0 > c3) {
                c3 *= -1;
                e3 = n(b3);
                d3 = h2(e3, b3);
                if (d3 >= c3)
                  return f3.y -= c3, c3;
                if (0 == b3)
                  return 0 < d3 && (f3.y -= d3), d3;
                d3 += a2(e3, -(c3 - d3));
                0 < d3 && (f3.y -= d3);
                return d3;
              }
              e3 = r(b3);
              d3 = h2(b3, e3);
              if (d3 >= c3)
                return f3.y += c3, c3;
              if (b3 == S.length - 1)
                return 0 < d3 && (f3.y += d3), d3;
              d3 += a2(e3, c3 - d3);
              0 < d3 && (f3.y += d3);
              return d3;
            }
            function b2() {
              var a3, d3, e3, f3, g3 = 0, k3;
              f3 = (P2 - N + 2 * z3) / l2;
              k3 = l2;
              for (var q3, h3 = 1; h3 < k3; h3++) {
                e3 = h3 * f3;
                for (var m3 = G.length - 1; 0 <= m3; m3--)
                  !G[m3].isDirty && (G[m3].textBlock.y < e3 && G[m3].textBlock.y + G[m3].height > e3) && (q3 = r(m3), !(q3 >= G.length - 1) && G[m3].textBlock.y + G[m3].height + fa3 > G[q3].textBlock.y && (G[m3].textBlock.y = G[m3].textBlock.y + G[m3].height - e3 > e3 - G[m3].textBlock.y ? e3 + 1 : e3 - G[m3].height - 1));
              }
              for (q3 = S.length - 1; 0 < q3; q3--)
                if (!G[q3].isDirty) {
                  e3 = n(q3);
                  if (0 > e3 && (e3 = 0, G[e3].isDirty))
                    break;
                  if (G[q3].textBlock.y < G[e3].textBlock.y + G[e3].height) {
                    d3 = d3 || q3;
                    f3 = q3;
                    for (k3 = 0; G[f3].textBlock.y < G[e3].textBlock.y + G[e3].height + fa3; ) {
                      a3 = a3 || G[f3].textBlock.y + G[f3].height;
                      k3 += G[f3].height;
                      k3 += fa3;
                      f3 = e3;
                      if (0 >= f3) {
                        f3 = 0;
                        k3 += G[f3].height;
                        break;
                      }
                      e3 = n(f3);
                      if (0 > e3) {
                        f3 = 0;
                        k3 += G[f3].height;
                        break;
                      }
                    }
                    if (f3 != q3) {
                      g3 = G[f3].textBlock.y;
                      a3 -= g3;
                      a3 = k3 - a3;
                      g3 = c2(a3, d3, f3);
                      break;
                    }
                  }
                }
              return g3;
            }
            function c2(a3, b3, d3) {
              var e3 = [], f3 = 0, g3 = 0;
              for (a3 = Math.abs(a3); d3 <= b3; d3++)
                e3.push(S[d3]);
              e3.sort(function(a4, b4) {
                return a4.height - b4.height;
              });
              for (d3 = 0; d3 < e3.length; d3++)
                if (b3 = e3[d3], f3 < a3)
                  g3++, f3 += G[b3.id].height + fa3, G[b3.id].textBlock.text = "", G[b3.id].indexLabelText = "", G[b3.id].isDirty = true, G[b3.id].textBlock.measureText();
                else
                  break;
              return g3;
            }
            for (var d2, e2, f2, g2, k2, q2, l2 = 1, m2 = 0; m2 < 2 * l2; m2++) {
              for (var p3 = G.length - 1; 0 <= p3 && !(0 <= n(p3) && n(p3), f2 = G[p3], g2 = f2.textBlock, q2 = (k2 = r(p3) < S.length ? G[r(p3)] : null) ? k2.textBlock : null, d2 = +f2.height.toFixed(6), e2 = +g2.y.toFixed(6), !f2.isDirty && (k2 && e2 + d2 + fa3 > +q2.y.toFixed(6)) && (d2 = g2.y + d2 + fa3 - q2.y, e2 = a2(p3, -d2), e2 < d2 && (0 < e2 && (d2 -= e2), e2 = a2(r(p3), d2), e2 != d2))); p3--)
                ;
              b2();
            }
          }
          function h2(a2, b2) {
            return (b2 < S.length ? G[b2].textBlock.y : s.reversed ? W3 + z3 : va + z3) - (0 > a2 ? s.reversed ? va - z3 : W3 - z3 : G[a2].textBlock.y + G[a2].height + fa3);
          }
          function p2(a2, b2, c2) {
            var d2, e2, f2, q2 = [], h3 = z3, n2 = [];
            -1 !== b2 && (0 <= aa3.indexOf(b2) ? (e2 = aa3.indexOf(b2), aa3.splice(e2, 1)) : (aa3.push(b2), aa3 = aa3.sort(function(a3, b3) {
              return a3 - b3;
            })));
            if (0 === aa3.length)
              q2 = ka3;
            else {
              e2 = z3 * (1 != aa3.length || 0 != aa3[0] && aa3[0] != S.length - 1 ? 2 : 1) / k();
              for (var m2 = 0; m2 < S.length; m2++) {
                if (1 == aa3.length && 0 == aa3[0]) {
                  if (0 === m2) {
                    q2.push(ka3[m2]);
                    d2 = h3;
                    continue;
                  }
                } else
                  0 === m2 && (d2 = -1 * h3);
                q2.push(ka3[m2] + d2);
                if (0 <= aa3.indexOf(m2) || m2 < S.length && 0 <= aa3.indexOf(m2 + 1))
                  d2 += e2;
              }
            }
            f2 = function() {
              for (var a3 = [], b3 = 0; b3 < S.length; b3++)
                a3.push(q2[b3] - S[b3].y1);
              return a3;
            }();
            var r2 = { startTime: (/* @__PURE__ */ new Date()).getTime(), duration: c2 || 500, easingFunction: function(a3, b3, c3, d3) {
              return O.easing.easeOutQuart(a3, b3, c3, d3);
            }, changeSection: function(a3) {
              for (var b3, c3, d3 = 0; d3 < S.length; d3++)
                b3 = f2[d3], c3 = S[d3], b3 *= a3, "undefined" === typeof n2[d3] && (n2[d3] = 0), 0 > n2 && (n2 *= -1), c3.y1 += b3 - n2[d3], c3.y2 += b3 - n2[d3], c3.y3 += b3 - n2[d3], c3.y4 += b3 - n2[d3], c3.y5 && (c3.y5 += b3 - n2[d3], c3.y6 += b3 - n2[d3]), n2[d3] = b3;
            } };
            a2._animator.animate(0, c2, function(c3) {
              var d3 = a2.plotArea.ctx || a2.ctx;
              ja = true;
              d3.clearRect(v.x1, v.y1, v.x2 - v.x1, v.y2 - v.y1);
              d3.fillStyle = a2.backgroundColor;
              d3.fillRect(v.x1, v.y1, v.width, v.height);
              r2.changeSection(c3, b2);
              var e3 = {};
              e3.dataSeries = s;
              e3.dataPoint = s.reversed ? s.dataPoints[y.length - 1 - b2] : s.dataPoints[b2];
              e3.index = s.reversed ? y.length - 1 - b2 : b2;
              a2.toolTip.highlightObjects([e3]);
              for (e3 = 0; e3 < S.length; e3++)
                ta2(
                  d3,
                  S[e3],
                  s.fillOpacity
                );
              J(d3);
              L && ("inside" !== s.indexLabelPlacement ? l(d3) : g(), w3(d3));
              1 <= c3 && (ja = false);
            }, null, O.easing.easeOutQuart);
          }
          function k() {
            for (var a2 = 0, b2 = 0; b2 < S.length - 1; b2++)
              (0 <= aa3.indexOf(b2) || 0 <= aa3.indexOf(b2 + 1)) && a2++;
            return a2;
          }
          function l(a2) {
            for (var b2, c2, d2, e2, g2 = 0; g2 < S.length; g2++)
              e2 = 1 === G[g2].lineThickness % 2 ? 0.5 : 0, c2 = ((S[g2].y2 + S[g2].y4) / 2 << 0) + e2, b2 = f(c2).x2 - 1, d2 = G[g2].textBlock.x, e2 = (G[g2].textBlock.y + G[g2].height / 2 << 0) + e2, G[g2].isDirty || 0 == G[g2].lineThickness || (a2.strokeStyle = G[g2].lineColor, a2.lineWidth = G[g2].lineThickness, a2.setLineDash && a2.setLineDash(I(G[g2].lineDashType, G[g2].lineThickness)), a2.beginPath(), a2.moveTo(b2, c2), a2.lineTo(d2, e2), a2.stroke());
          }
          function n(a2) {
            for (a2 -= 1; -1 <= a2 && -1 != a2 && G[a2].isDirty; a2--)
              ;
            return a2;
          }
          function r(a2) {
            for (a2 += 1; a2 <= S.length && a2 != S.length && G[a2].isDirty; a2++)
              ;
            return a2;
          }
          function f(a2) {
            for (var b2, c2 = 0; c2 < y.length; c2++)
              if (S[c2].y1 < a2 && S[c2].y4 > a2) {
                b2 = S[c2];
                break;
              }
            return b2 ? (a2 = b2.y6 ? a2 > b2.y6 ? b2.x3 + (b2.x4 - b2.x3) / (b2.y4 - b2.y3) * (a2 - b2.y3) : b2.x2 + (b2.x3 - b2.x2) / (b2.y3 - b2.y2) * (a2 - b2.y2) : b2.x2 + (b2.x3 - b2.x2) / (b2.y3 - b2.y2) * (a2 - b2.y2), { x1: a2, x2: a2 }) : -1;
          }
          function w3(a2) {
            for (var b2 = 0; b2 < S.length; b2++)
              G[b2].isDirty || (a2 && (G[b2].textBlock.ctx = a2), G[b2].textBlock.y += G[b2].textBlock._lineHeight / 2, G[b2].textBlock.render(true), G[b2].textBlock.y -= G[b2].textBlock._lineHeight / 2);
          }
          function J(a2) {
            x.plotArea.layoutManager.reset();
            a2.roundRect || Aa(a2);
            x.title && (x.title.dockInsidePlotArea || "center" === x.title.horizontalAlign && "center" === x.title.verticalAlign) && (x.title.ctx = a2, x.title.render());
            if (x.subtitles)
              for (var b2 = 0; b2 < x.subtitles.length; b2++) {
                var c2 = x.subtitles[b2];
                if (c2.dockInsidePlotArea || "center" === c2.horizontalAlign && "center" === c2.verticalAlign)
                  x.subtitles.ctx = a2, c2.render();
              }
            x.legend && (x.legend.dockInsidePlotArea || "center" === x.legend.horizontalAlign && "center" === x.legend.verticalAlign) && (x.legend.ctx = a2, x.legend.setLayout(), x.legend.render());
            xa.fNg && xa.fNg(x);
          }
          var x = this;
          if (!(0 >= a.dataSeriesIndexes.length)) {
            for (var s = this.data[a.dataSeriesIndexes[0]], y = s.dataPoints, v = this.plotArea, z3 = 0.025 * v.width, A = 0.01 * v.width, B = 0, D2 = v.height - 2 * z3, E3 = Math.min(v.width - 2 * A, 2.8 * v.height), L = false, T = 0; T < y.length; T++)
              if (!L && ("undefined" !== typeof y[T].indexLabel && null !== y[T].indexLabel && 0 < y[T].indexLabel.toString().length) && (L = true), !L && ("undefined" !== typeof y[T].label && null !== y[T].label && 0 < y[T].label.toString().length) && (L = true), !L && "function" === typeof s.indexLabelFormatter || "function" === typeof y[T].indexLabelFormatter)
                L = true;
            L = L || "undefined" !== typeof s.indexLabel && null !== s.indexLabel && 0 < s.indexLabel.toString().length;
            "inside" !== s.indexLabelPlacement && L || (A = (v.width - 0.75 * E3) / 2);
            var T = v.x1 + A, K2 = v.x2 - A, N = v.y1 + z3, P2 = v.y2 - z3, Q2 = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
            if (0 != s.length && (s.dataPoints && s.visible) && 0 !== y.length) {
              var R3, F;
              a = 75 * E3 / 100;
              var Z2 = 30 * (K2 - a) / 100;
              "funnel" === s.type ? (R3 = m(s.options.neckHeight) ? 0.35 * D2 : s.neckHeight, F = m(s.options.neckWidth) ? 0.25 * a : s.neckWidth, "string" === typeof R3 && R3.match(/%$/) ? (R3 = parseInt(R3), R3 = R3 * D2 / 100) : R3 = parseInt(R3), "string" === typeof F && F.match(/%$/) ? (F = parseInt(F), F = F * a / 100) : F = parseInt(F), R3 > D2 ? R3 = D2 : 0 >= R3 && (R3 = 0), F > a ? F = a - 0.5 : 0 >= F && (F = 0)) : "pyramid" === s.type && (F = R3 = 0, s.reversed = s.reversed ? false : true);
              var A = T + a / 2, U2 = T, Y2 = T + a, W3 = s.reversed ? P2 : N, M = A - F / 2, $ = A + F / 2, X2 = s.reversed ? N + R3 : P2 - R3, va = s.reversed ? N : P2;
              a = [];
              var A = [], S = [], E3 = [], ba2 = N, ea3, da3 = (X2 - W3) / (M - U2), ga2 = -da3, T = "area" === (s.valueRepresents ? s.valueRepresents : "height") ? c() : d();
              if (-1 !== T) {
                if (s.reversed)
                  for (E3.push(ba2), F = T.length - 1; 0 < F; F--)
                    ba2 += T[F], E3.push(ba2);
                else
                  for (F = 0; F < T.length; F++)
                    ba2 += T[F], E3.push(ba2);
                if (s.reversed)
                  for (F = 0; F < T.length; F++)
                    E3[F] < X2 ? (a.push(M), A.push($), ea3 = F) : (a.push((E3[F] - W3 + da3 * U2) / da3), A.push((E3[F] - W3 + ga2 * Y2) / ga2));
                else
                  for (F = 0; F < T.length; F++)
                    E3[F] < X2 ? (a.push((E3[F] - W3 + da3 * U2) / da3), A.push((E3[F] - W3 + ga2 * Y2) / ga2), ea3 = F) : (a.push(M), A.push($));
                for (F = 0; F < T.length - 1; F++)
                  ba2 = s.reversed ? y[y.length - 1 - F].color ? y[y.length - 1 - F].color : s._colorSet[(y.length - 1 - F) % s._colorSet.length] : y[F].color ? y[F].color : s._colorSet[F % s._colorSet.length], F === ea3 ? S.push({ x1: a[F], y1: E3[F], x2: A[F], y2: E3[F], x3: $, y3: X2, x4: A[F + 1], y4: E3[F + 1], x5: a[F + 1], y5: E3[F + 1], x6: M, y6: X2, id: F, height: E3[F + 1] - E3[F], color: ba2 }) : S.push({ x1: a[F], y1: E3[F], x2: A[F], y2: E3[F], x3: A[F + 1], y3: E3[F + 1], x4: a[F + 1], y4: E3[F + 1], id: F, height: E3[F + 1] - E3[F], color: ba2 });
                var fa3 = 2, G = [], ja = false, aa3 = [], ka3 = [], T = false;
                a = a = 0;
                Ea(aa3);
                for (F = 0; F < y.length; F++)
                  y[F].exploded && (T = true, s.reversed ? aa3.push(y.length - 1 - F) : aa3.push(F));
                Q2.clearRect(v.x1, v.y1, v.width, v.height);
                Q2.fillStyle = x.backgroundColor;
                Q2.fillRect(v.x1, v.y1, v.width, v.height);
                if (L && s.visible && (b(), g(), "inside" !== s.indexLabelPlacement)) {
                  e();
                  q();
                  for (F = 0; F < y.length; F++)
                    G[F].isDirty || (a = G[F].textBlock.x + G[F].width, a = (K2 - a) / 2, 0 == F && (B = a), B > a && (B = a));
                  for (F = 0; F < S.length; F++)
                    S[F].x1 += B, S[F].x2 += B, S[F].x3 += B, S[F].x4 += B, S[F].x5 && (S[F].x5 += B, S[F].x6 += B), G[F].textBlock.x += B;
                }
                for (F = 0; F < S.length; F++)
                  B = S[F], ta2(Q2, B, s.fillOpacity), ka3.push(B.y1);
                J(Q2);
                L && s.visible && ("inside" === s.indexLabelPlacement || x.animationEnabled || l(Q2), x.animationEnabled || w3());
                if (!L)
                  for (F = 0; F < y.length; F++)
                    B = s.dataPointIds[F], a = { id: B, objectType: "dataPoint", dataPointIndex: F, dataSeriesIndex: 0, funnelSection: S[s.reversed ? y.length - 1 - F : F] }, x._eventManager.objectMap[B] = a;
                !x.animationEnabled && T ? p2(x, -1, 0) : x.animationEnabled && !x.animatedRender && p2(x, -1, 0);
                this.funnelPyramidClickHandler = function(a2) {
                  var b2 = -1;
                  if (!ja && !x.isAnimating && (m(a2.dataSeries.explodeOnClick) || a2.dataSeries.explodeOnClick) && (b2 = s.reversed ? y.length - 1 - a2.dataPointIndex : a2.dataPointIndex, 0 <= b2)) {
                    a2 = b2;
                    if ("funnel" === s.type || "pyramid" === s.type)
                      s.reversed ? y[y.length - 1 - a2].exploded = y[y.length - 1 - a2].exploded ? false : true : y[a2].exploded = y[a2].exploded ? false : true;
                    p2(x, b2, 500);
                  }
                };
                return { source: Q2, dest: this.plotArea.ctx, animationCallback: function(a2, b2) {
                  O.fadeInAnimation(a2, b2);
                  1 <= a2 && (p2(x, -1, 500), J(x.plotArea.ctx || x.ctx));
                }, easingFunction: O.easing.easeInQuad, animationBase: 0 };
              }
            }
          }
        };
        p.prototype.requestAnimFrame = function() {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1e3 / 60);
          };
        }();
        p.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
        p.prototype.set = function(a, d, c) {
          c = "undefined" === typeof c ? true : c;
          "options" === a ? (this.options = d, c && this.render()) : p.base.set.call(this, a, d, c);
        };
        p.prototype.exportChart = function(a) {
          a = "undefined" === typeof a ? {} : a;
          var d = a.format ? a.format : "png", c = a.fileName ? a.fileName : this.exportFileName;
          if (a.toDataURL)
            return this.canvas.toDataURL("image/" + d);
          var b = this.canvas;
          if (b && d && c) {
            c = c + "." + d;
            a = "image/" + d;
            var b = b.toDataURL(a), e = false, g = document.createElement("a");
            g.download = c;
            g.href = b;
            if ("undefined" !== typeof Blob && new Blob()) {
              for (var q = b.replace(
                /^data:[a-z\/]*;base64,/,
                ""
              ), q = atob(q), h2 = new ArrayBuffer(q.length), h2 = new Uint8Array(h2), m2 = 0; m2 < q.length; m2++)
                h2[m2] = q.charCodeAt(m2);
              d = new Blob([h2.buffer], { type: "image/" + d });
              try {
                window.navigator.msSaveBlob(d, c), e = true;
              } catch (k) {
                g.dataset.downloadurl = [a, g.download, g.href].join(":"), g.href = window.URL.createObjectURL(d);
              }
            }
            if (!e)
              try {
                event = document.createEvent("MouseEvents"), event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null), g.dispatchEvent ? g.dispatchEvent(event) : g.fireEvent && g.fireEvent("onclick");
              } catch (l) {
                d = window.open(), d.document.write("<img src='" + b + "'></img><div>Please right click on the image and save it to your device</div>"), d.document.close();
              }
          }
        };
        p.prototype.print = function() {
          var a = this.exportChart({ toDataURL: true }), d = document.createElement("iframe");
          d.setAttribute("class", "canvasjs-chart-print-frame");
          Y(d, { position: "absolute", width: "100%", border: "0px", margin: "0px 0px 0px 0px", padding: "0px 0px 0px 0px" });
          d.style.height = this.height + "px";
          this._canvasJSContainer.appendChild(d);
          var c = this, b = d.contentWindow || d.contentDocument.document || d.contentDocument;
          b.document.open();
          b.document.write('<!DOCTYPE HTML>\n<html><body><img src="' + a + '"/><body/></html>');
          b.document.body && b.document.body.style && (b.document.body.style.margin = "0px 0px 0px 0px", b.document.body.style.padding = "0px 0px 0px 0px");
          b.document.close();
          setTimeout(function() {
            b.focus();
            b.print();
            setTimeout(function() {
              c._canvasJSContainer.removeChild(d);
            }, 1e3);
          }, 500);
        };
        p.prototype.getPercentAndTotal = function(a, d) {
          var c = null, b = null, e = c = null;
          if (0 <= a.type.indexOf("stacked"))
            b = 0, c = d.x.getTime ? d.x.getTime() : d.x, c in a.plotUnit.yTotals && (b = a.plotUnit.yTotals[c], c = a.plotUnit.yAbsTotals[c], e = isNaN(d.y) ? 0 : 0 === c ? 0 : 100 * (d.y / c));
          else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
            for (c = b = 0; c < a.dataPoints.length; c++)
              isNaN(a.dataPoints[c].y) || (b += a.dataPoints[c].y);
            e = isNaN(d.y) ? 0 : 100 * (d.y / b);
          }
          return { percent: e, total: b };
        };
        p.prototype.replaceKeywordsWithValue = function(a, d, c, b, e) {
          var g = this;
          e = "undefined" === typeof e ? 0 : e;
          if ((0 <= c.type.indexOf("stacked") || "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
            var q = "#percent", h2 = "#total", m2 = this.getPercentAndTotal(c, d), h2 = isNaN(m2.total) ? h2 : m2.total, q = isNaN(m2.percent) ? q : m2.percent;
            do {
              m2 = "";
              if (c.percentFormatString)
                m2 = c.percentFormatString;
              else {
                var m2 = "#,##0.", k = Math.max(Math.ceil(Math.log(1 / Math.abs(q)) / Math.LN10), 2);
                if (isNaN(k) || !isFinite(k))
                  k = 2;
                for (var l = 0; l < k; l++)
                  m2 += "#";
                c.percentFormatString = m2;
              }
              a = a.replace("#percent", ga(q, m2, g._cultureInfo));
              a = a.replace(
                "#total",
                ga(h2, c.yValueFormatString ? c.yValueFormatString : "#,##0.########", g._cultureInfo)
              );
            } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"));
          }
          return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a2) {
            if ('"' === a2[0] && '"' === a2[a2.length - 1] || "'" === a2[0] && "'" === a2[a2.length - 1])
              return a2.slice(1, a2.length - 1);
            a2 = Ha(a2.slice(1, a2.length - 1));
            a2 = a2.replace("#index", e);
            var k2 = null;
            try {
              var f = a2.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
              f && 0 < f.length && (k2 = Ha(f[2]), a2 = Ha(f[1]));
            } catch (q2) {
            }
            f = null;
            if ("color" === a2)
              return "waterfall" === c.type ? d.color ? d.color : 0 < d.y ? c.risingColor : c.fallingColor : "error" === c.type ? c.color ? c.color : c._colorSet[k2 % c._colorSet.length] : d.color ? d.color : c.color ? c.color : c._colorSet[b % c._colorSet.length];
            if (d.hasOwnProperty(a2))
              f = d;
            else if (c.hasOwnProperty(a2))
              f = c;
            else
              return "";
            f = f[a2];
            null !== k2 && (f = f[k2]);
            return "x" === a2 ? (c.axisX && "dateTime" === c.axisX.valueType || "dateTime" === c.xValueType || d.x && d.x.getTime) && !c.axisX.logarithmic ? Da(f, d.xValueFormatString ? d.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = g.axisX && g.axisX.autoValueFormatString ? g.axisX.autoValueFormatString : "DD MMM YY", g._cultureInfo) : ga(f, d.xValueFormatString ? d.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = "#,##0.########", g._cultureInfo) : "y" === a2 ? ga(f, d.yValueFormatString ? d.yValueFormatString : c.yValueFormatString ? c.yValueFormatString : c.yValueFormatString = "#,##0.########", g._cultureInfo) : "z" === a2 ? ga(f, d.zValueFormatString ? d.zValueFormatString : c.zValueFormatString ? c.zValueFormatString : c.zValueFormatString = "#,##0.########", g._cultureInfo) : f;
          });
        };
        qa(E2, K);
        E2.prototype.setLayout = function() {
          var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart, d = a.layoutManager.getFreeSpace(), c = null, b = 0, e = 0, g = 0, q = 0, h2 = this.markerMargin = this.chart.options.legend && !m(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
          this.height = 0;
          var p2 = [], k = [];
          if ("top" === this.verticalAlign || "bottom" === this.verticalAlign)
            this.orientation = "horizontal", c = this.verticalAlign, g = this.maxWidth = null !== this.maxWidth ? this.maxWidth : d.width, q = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * d.height;
          else if ("center" === this.verticalAlign) {
            this.orientation = "vertical";
            if ("left" === this.horizontalAlign || "center" === this.horizontalAlign || "right" === this.horizontalAlign)
              c = this.horizontalAlign;
            g = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * d.width;
            q = this.maxHeight = null !== this.maxHeight ? this.maxHeight : d.height;
          }
          this.errorMarkerColor = [];
          for (var l = 0; l < this.dataSeries.length; l++) {
            var n = this.dataSeries[l];
            if (n.dataPoints && n.dataPoints.length)
              if ("pie" !== n.type && "doughnut" !== n.type && "funnel" !== n.type && "pyramid" !== n.type) {
                var r = n.legendMarkerType = n.legendMarkerType ? n.legendMarkerType : "line" !== n.type && "stepLine" !== n.type && "spline" !== n.type && "scatter" !== n.type && "bubble" !== n.type || !n.markerType ? "error" === n.type && n._linkedSeries ? n._linkedSeries.legendMarkerType ? n._linkedSeries.legendMarkerType : R2.getDefaultLegendMarker(n._linkedSeries.type) : R2.getDefaultLegendMarker(n.type) : n.markerType, f = n.legendText ? n.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: n, dataPoint: null }) : n.name, u2 = n.legendMarkerColor = n.legendMarkerColor ? n.legendMarkerColor : n.markerColor ? n.markerColor : "error" === n.type ? m(n.whiskerColor) ? n._colorSet[0] : n.whiskerColor : n._colorSet[0], w3 = n.markerSize || "line" !== n.type && "stepLine" !== n.type && "spline" !== n.type ? 0.75 * this.lineHeight : 0, x = n.legendMarkerBorderColor ? n.legendMarkerBorderColor : n.markerBorderColor, s = n.legendMarkerBorderThickness ? n.legendMarkerBorderThickness : n.markerBorderThickness ? Math.max(1, Math.round(0.2 * w3)) : 0;
                "error" === n.type && this.errorMarkerColor.push(u2);
                f = this.chart.replaceKeywordsWithValue(f, n.dataPoints[0], n, l);
                r = { markerType: r, markerColor: u2, text: f, textBlock: null, chartType: n.type, markerSize: w3, lineColor: n._colorSet[0], dataSeriesIndex: n.index, dataPointIndex: null, markerBorderColor: x, markerBorderThickness: s };
                p2.push(r);
              } else
                for (var y = 0; y < n.dataPoints.length; y++) {
                  var v = n.dataPoints[y], r = v.legendMarkerType ? v.legendMarkerType : n.legendMarkerType ? n.legendMarkerType : R2.getDefaultLegendMarker(n.type), f = v.legendText ? v.legendText : n.legendText ? n.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: n, dataPoint: v }) : v.name ? v.name : "DataPoint: " + (y + 1), u2 = v.legendMarkerColor ? v.legendMarkerColor : n.legendMarkerColor ? n.legendMarkerColor : v.color ? v.color : n.color ? n.color : n._colorSet[y % n._colorSet.length], w3 = 0.75 * this.lineHeight, x = v.legendMarkerBorderColor ? v.legendMarkerBorderColor : n.legendMarkerBorderColor ? n.legendMarkerBorderColor : v.markerBorderColor ? v.markerBorderColor : n.markerBorderColor, s = v.legendMarkerBorderThickness ? v.legendMarkerBorderThickness : n.legendMarkerBorderThickness ? n.legendMarkerBorderThickness : v.markerBorderThickness || n.markerBorderThickness ? Math.max(1, Math.round(0.2 * w3)) : 0, f = this.chart.replaceKeywordsWithValue(f, v, n, y), r = { markerType: r, markerColor: u2, text: f, textBlock: null, chartType: n.type, markerSize: w3, dataSeriesIndex: l, dataPointIndex: y, markerBorderColor: x, markerBorderThickness: s };
                  (v.showInLegend || n.showInLegend && false !== v.showInLegend) && p2.push(r);
                }
          }
          true === this.reversed && p2.reverse();
          if (0 < p2.length) {
            n = null;
            f = v = y = 0;
            v = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, g) : this.itemMaxWidth = Math.min(this.itemWidth, g) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, g) : this.itemMaxWidth = g;
            w3 = 0 === w3 ? 0.75 * this.lineHeight : w3;
            v = (this.itemMaxWidth ? this.itemMaxWidth : v) - (w3 + h2);
            for (l = 0; l < p2.length; l++) {
              r = p2[l];
              u2 = v;
              if ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType)
                u2 -= 2 * 0.1 * this.lineHeight;
              if (!(0 >= q || "undefined" === typeof q || 0 >= u2 || "undefined" === typeof u2))
                if ("horizontal" === this.orientation) {
                  r.textBlock = new la(this.ctx, { x: 0, y: 0, maxWidth: u2, maxHeight: this.itemWrap ? q : this.lineHeight, angle: 0, text: r.text, horizontalAlign: "left", fontSize: this.fontSize, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontColor: this.fontColor, fontStyle: this.fontStyle, textBaseline: "middle" });
                  r.textBlock.measureText();
                  null !== this.itemWidth && (r.textBlock.width = this.itemWidth - (w3 + h2 + ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                  if (!n || n.width + Math.round(r.textBlock.width + w3 + h2 + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType ? 2 * 0.1 * this.lineHeight : 0)) > g)
                    n = { items: [], width: 0 }, k.push(n), this.height += f, f = 0;
                  f = Math.max(f, r.textBlock.height ? r.textBlock.height : this.lineHeight);
                  r.textBlock.x = n.width;
                  r.textBlock.y = 0;
                  n.width += Math.round(r.textBlock.width + w3 + h2 + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType ? 2 * 0.1 * this.lineHeight : 0));
                  n.items.push(r);
                  this.width = Math.max(n.width, this.width);
                } else
                  r.textBlock = new la(this.ctx, { x: 0, y: 0, maxWidth: v, maxHeight: true === this.itemWrap ? q : 1.5 * this.fontSize, angle: 0, text: r.text, horizontalAlign: "left", fontSize: this.fontSize, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontColor: this.fontColor, fontStyle: this.fontStyle, textBaseline: "middle" }), r.textBlock.measureText(), null !== this.itemWidth && (r.textBlock.width = this.itemWidth - (w3 + h2 + ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < q - this.lineHeight ? (n = { items: [], width: 0 }, k.push(n)) : (n = k[y], y = (y + 1) % k.length), n && (this.height += r.textBlock.height ? r.textBlock.height : this.lineHeight, r.textBlock.x = n.width, r.textBlock.y = 0, n.width += Math.round(r.textBlock.width + w3 + h2 + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === r.chartType || "spline" === r.chartType || "stepLine" === r.chartType ? 2 * 0.1 * this.lineHeight : 0)), n.items.push(r), this.width = Math.max(n.width, this.width));
            }
            this.height = false === this.itemWrap ? k.length * this.lineHeight : this.height + f;
            this.height = Math.min(q, this.height);
            this.width = Math.min(g, this.width);
          }
          "top" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y1) : "center" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y1 + d.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y2 - this.height);
          this.items = p2;
          for (l = 0; l < this.items.length; l++)
            r = p2[l], r.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[r.id] = { id: r.id, objectType: "legendItem", legendItemIndex: l, dataSeriesIndex: r.dataSeriesIndex, dataPointIndex: r.dataPointIndex };
          this.markerSize = w3;
          this.rows = k;
          0 < p2.length && a.layoutManager.registerSpace(c, { width: this.width + 2 + 2, height: this.height + 5 + 5 });
          this.bounds = { x1: e, y1: b, x2: e + this.width, y2: b + this.height };
        };
        E2.prototype.render = function() {
          var a = this.bounds.x1, d = this.bounds.y1, c = this.markerMargin, b = this.maxWidth, e = this.maxHeight, g = this.markerSize, q = this.rows;
          (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(a, d, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
          for (var h2 = 0, m2 = 0; m2 < q.length; m2++) {
            for (var k = q[m2], l = 0, n = 0; n < k.items.length; n++) {
              var r = k.items[n], f = r.textBlock.x + a + (0 === n ? 0.2 * g : this.horizontalSpacing), p2 = d + h2, u2 = f;
              this.chart.data[r.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
              this.ctx.save();
              this.ctx.beginPath();
              this.ctx.rect(a, d, b, Math.max(e - e % this.lineHeight, 0));
              this.ctx.clip();
              if ("line" === r.chartType || "stepLine" === r.chartType || "spline" === r.chartType)
                this.ctx.strokeStyle = r.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(f - 0.1 * this.lineHeight, p2 + this.lineHeight / 2), this.ctx.lineTo(f + 0.85 * this.lineHeight, p2 + this.lineHeight / 2), this.ctx.stroke(), u2 -= 0.1 * this.lineHeight;
              if ("error" === r.chartType) {
                this.ctx.strokeStyle = this.errorMarkerColor[0];
                this.ctx.lineWidth = g / 8;
                this.ctx.beginPath();
                var x = f - 0.08 * this.lineHeight + 0.1 * this.lineHeight, s = p2 + 0.15 * this.lineHeight, y = 0.7 * this.lineHeight, v = y + 0.02 * this.lineHeight;
                this.ctx.moveTo(x, s);
                this.ctx.lineTo(x + y, s);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x + y / 2, s);
                this.ctx.lineTo(x + y / 2, s + v);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(
                  x,
                  s + v
                );
                this.ctx.lineTo(x + y, s + v);
                this.ctx.stroke();
                this.errorMarkerColor.shift();
              }
              X.drawMarker(f + g / 2, p2 + this.lineHeight / 2, this.ctx, r.markerType, "error" === r.chartType || "line" === r.chartType || "spline" === r.chartType ? r.markerSize / 2 : r.markerSize, r.markerColor, r.markerBorderColor, r.markerBorderThickness);
              r.textBlock.x = f + c + g;
              if ("line" === r.chartType || "stepLine" === r.chartType || "spline" === r.chartType)
                r.textBlock.x += 0.1 * this.lineHeight;
              r.textBlock.y = Math.round(p2 + this.lineHeight / 2);
              r.textBlock.render(true);
              this.ctx.restore();
              l = 0 < n ? Math.max(l, r.textBlock.height ? r.textBlock.height : this.lineHeight) : r.textBlock.height ? r.textBlock.height : this.lineHeight;
              this.chart.data[r.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
              f = Z(r.id);
              this.ghostCtx.fillStyle = f;
              this.ghostCtx.beginPath();
              this.ghostCtx.fillRect(u2, r.textBlock.y - this.lineHeight / 2, r.textBlock.x + r.textBlock.width - u2, r.textBlock.height ? r.textBlock.height : this.lineHeight);
              r.x1 = this.chart._eventManager.objectMap[r.id].x1 = u2;
              r.y1 = this.chart._eventManager.objectMap[r.id].y1 = r.textBlock.y - this.lineHeight / 2;
              r.x2 = this.chart._eventManager.objectMap[r.id].x2 = r.textBlock.x + r.textBlock.width;
              r.y2 = this.chart._eventManager.objectMap[r.id].y2 = r.textBlock.y + (r.textBlock.height ? r.textBlock.height : this.lineHeight) - this.lineHeight / 2;
            }
            h2 += l;
          }
        };
        qa(R2, K);
        R2.prototype.getDefaultAxisPlacement = function() {
          var a = this.type;
          if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a)
            return "normal";
          if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a)
            return "xySwapped";
          if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a)
            return "none";
          "error" !== a && window.console.log("Unknown Chart Type: " + a);
          return null;
        };
        R2.getDefaultLegendMarker = function(a) {
          if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a)
            return "square";
          if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a)
            return "circle";
          if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a)
            return "triangle";
          if ("error" === a)
            return "none";
          window.console.log("Unknown Chart Type: " + a);
          return null;
        };
        R2.prototype.getDataPointAtX = function(a, d) {
          if (!this.dataPoints || 0 === this.dataPoints.length)
            return null;
          var c = { dataPoint: null, distance: Infinity, index: NaN }, b = null, e = 0, g = 0, q = 1, h2 = Infinity, m2 = 0, k = 0, l = 0;
          "none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ? (l = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), l = 1 < l ? Math.min(Math.max((this.dataPoints.length - 1) / l * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (l = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, l = 0 < l ? Math.min(Math.max((this.dataPoints.length - 1) / l * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
          for (; ; ) {
            g = 0 < q ? l + e : l - e;
            if (0 <= g && g < this.dataPoints.length) {
              var b = this.dataPoints[g], n = this.axisX.logarithmic ? b.x > a ? b.x / a : a / b.x : Math.abs(b.x - a);
              n < c.distance && (c.dataPoint = b, c.distance = n, c.index = g);
              b = n;
              b <= h2 ? h2 = b : 0 < q ? m2++ : k++;
              if (1e3 < m2 && 1e3 < k)
                break;
            } else if (0 > l - e && l + e >= this.dataPoints.length)
              break;
            -1 === q ? (e++, q = 1) : q = -1;
          }
          return d || (c.dataPoint.x.getTime ? c.dataPoint.x.getTime() : c.dataPoint.x) !== (a.getTime ? a.getTime() : a) ? d && null !== c.dataPoint ? c : null : c;
        };
        R2.prototype.getDataPointAtXY = function(a, d, c) {
          if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || d < this.chart.plotArea.y1 || d > this.chart.plotArea.y2)
            return null;
          c = c || false;
          var b = [], e = 0, g = 0, q = 1, h2 = false, p2 = Infinity, k = 0, l = 0, n = 0;
          if ("none" !== this.chart.plotInfo.axisPlacement)
            if (n = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({ x: a, y: d }), this.axisX.logarithmic)
              var r = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), n = 1 < r ? Math.min(Math.max((this.dataPoints.length - 1) / r * Math.log(n / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
            else
              r = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, n = 0 < r ? Math.min(Math.max((this.dataPoints.length - 1) / r * (n - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
          for (; ; ) {
            g = 0 < q ? n + e : n - e;
            if (0 <= g && g < this.dataPoints.length) {
              var r = this.chart._eventManager.objectMap[this.dataPointIds[g]], f = this.dataPoints[g], u2 = null;
              if (r) {
                switch (this.type) {
                  case "column":
                  case "stackedColumn":
                  case "stackedColumn100":
                  case "bar":
                  case "stackedBar":
                  case "stackedBar100":
                  case "rangeColumn":
                  case "rangeBar":
                  case "waterfall":
                  case "error":
                    a >= r.x1 && (a <= r.x2 && d >= r.y1 && d <= r.y2) && (b.push({ dataPoint: f, dataPointIndex: g, dataSeries: this, distance: Math.min(Math.abs(r.x1 - a), Math.abs(r.x2 - a), Math.abs(r.y1 - d), Math.abs(r.y2 - d)) }), h2 = true);
                    break;
                  case "line":
                  case "stepLine":
                  case "spline":
                  case "area":
                  case "stepArea":
                  case "stackedArea":
                  case "stackedArea100":
                  case "splineArea":
                  case "scatter":
                    var w3 = oa("markerSize", f, this) || 4, x = c ? 20 : w3, u2 = Math.sqrt(Math.pow(r.x1 - a, 2) + Math.pow(r.y1 - d, 2));
                    u2 <= x && b.push({ dataPoint: f, dataPointIndex: g, dataSeries: this, distance: u2 });
                    r = Math.abs(r.x1 - a);
                    r <= p2 ? p2 = r : 0 < q ? k++ : l++;
                    u2 <= w3 / 2 && (h2 = true);
                    break;
                  case "rangeArea":
                  case "rangeSplineArea":
                    w3 = oa("markerSize", f, this) || 4;
                    x = c ? 20 : w3;
                    u2 = Math.min(Math.sqrt(Math.pow(r.x1 - a, 2) + Math.pow(r.y1 - d, 2)), Math.sqrt(Math.pow(r.x1 - a, 2) + Math.pow(r.y2 - d, 2)));
                    u2 <= x && b.push({ dataPoint: f, dataPointIndex: g, dataSeries: this, distance: u2 });
                    r = Math.abs(r.x1 - a);
                    r <= p2 ? p2 = r : 0 < q ? k++ : l++;
                    u2 <= w3 / 2 && (h2 = true);
                    break;
                  case "bubble":
                    w3 = r.size;
                    u2 = Math.sqrt(Math.pow(r.x1 - a, 2) + Math.pow(r.y1 - d, 2));
                    u2 <= w3 / 2 && (b.push({ dataPoint: f, dataPointIndex: g, dataSeries: this, distance: u2 }), h2 = true);
                    break;
                  case "pie":
                  case "doughnut":
                    w3 = r.center;
                    x = "doughnut" === this.type ? r.percentInnerRadius * r.radius : 0;
                    u2 = Math.sqrt(Math.pow(w3.x - a, 2) + Math.pow(w3.y - d, 2));
                    u2 < r.radius && u2 > x && (u2 = Math.atan2(d - w3.y, a - w3.x), 0 > u2 && (u2 += 2 * Math.PI), u2 = Number(((180 * (u2 / Math.PI) % 360 + 360) % 360).toFixed(12)), w3 = Number(((180 * (r.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), x = Number(((180 * (r.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === x && 1 < r.endAngle && (x = 360), w3 >= x && (0 !== f.y && !m(f.y)) && (x += 360, u2 < w3 && (u2 += 360)), u2 > w3 && u2 < x && (b.push({ dataPoint: f, dataPointIndex: g, dataSeries: this, distance: 0 }), h2 = true));
                    break;
                  case "funnel":
                  case "pyramid":
                    u2 = r.funnelSection;
                    d > u2.y1 && d < u2.y4 && (u2.y6 ? d > u2.y6 ? (g = u2.x6 + (u2.x5 - u2.x6) / (u2.y5 - u2.y6) * (d - u2.y6), u2 = u2.x3 + (u2.x4 - u2.x3) / (u2.y4 - u2.y3) * (d - u2.y3)) : (g = u2.x1 + (u2.x6 - u2.x1) / (u2.y6 - u2.y1) * (d - u2.y1), u2 = u2.x2 + (u2.x3 - u2.x2) / (u2.y3 - u2.y2) * (d - u2.y2)) : (g = u2.x1 + (u2.x4 - u2.x1) / (u2.y4 - u2.y1) * (d - u2.y1), u2 = u2.x2 + (u2.x3 - u2.x2) / (u2.y3 - u2.y2) * (d - u2.y2)), a > g && a < u2 && (b.push({ dataPoint: f, dataPointIndex: r.dataPointIndex, dataSeries: this, distance: 0 }), h2 = true));
                    break;
                  case "boxAndWhisker":
                    if (a >= r.x1 - r.borderThickness / 2 && a <= r.x2 + r.borderThickness / 2 && d >= r.y4 - r.borderThickness / 2 && d <= r.y1 + r.borderThickness / 2 || Math.abs(r.x2 - a + r.x1 - a) < r.borderThickness && d >= r.y1 && d <= r.y4)
                      b.push({ dataPoint: f, dataPointIndex: g, dataSeries: this, distance: Math.min(Math.abs(r.x1 - a), Math.abs(r.x2 - a), Math.abs(r.y2 - d), Math.abs(r.y3 - d)) }), h2 = true;
                    break;
                  case "candlestick":
                    if (a >= r.x1 - r.borderThickness / 2 && a <= r.x2 + r.borderThickness / 2 && d >= r.y2 - r.borderThickness / 2 && d <= r.y3 + r.borderThickness / 2 || Math.abs(r.x2 - a + r.x1 - a) < r.borderThickness && d >= r.y1 && d <= r.y4)
                      b.push({ dataPoint: f, dataPointIndex: g, dataSeries: this, distance: Math.min(Math.abs(r.x1 - a), Math.abs(r.x2 - a), Math.abs(r.y2 - d), Math.abs(r.y3 - d)) }), h2 = true;
                    break;
                  case "ohlc":
                    if (Math.abs(r.x2 - a + r.x1 - a) < r.borderThickness && d >= r.y2 && d <= r.y3 || a >= r.x1 && a <= (r.x2 + r.x1) / 2 && d >= r.y1 - r.borderThickness / 2 && d <= r.y1 + r.borderThickness / 2 || a >= (r.x1 + r.x2) / 2 && a <= r.x2 && d >= r.y4 - r.borderThickness / 2 && d <= r.y4 + r.borderThickness / 2)
                      b.push({ dataPoint: f, dataPointIndex: g, dataSeries: this, distance: Math.min(Math.abs(r.x1 - a), Math.abs(r.x2 - a), Math.abs(r.y2 - d), Math.abs(r.y3 - d)) }), h2 = true;
                }
                if (h2 || 1e3 < k && 1e3 < l)
                  break;
              }
            } else if (0 > n - e && n + e >= this.dataPoints.length)
              break;
            -1 === q ? (e++, q = 1) : q = -1;
          }
          a = null;
          for (d = 0; d < b.length; d++)
            a ? b[d].distance <= a.distance && (a = b[d]) : a = b[d];
          return a;
        };
        R2.prototype.getMarkerProperties = function(a, d, c, b) {
          var e = this.dataPoints, g = e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length], q = e[a].markerBorderColor ? e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null, h2 = m(e[a].markerBorderThickness) ? this.markerBorderThickness ? this.markerBorderThickness : null : e[a].markerBorderThickness, p2 = e[a].markerType ? e[a].markerType : this.markerType;
          a = m(e[a].markerSize) ? this.markerSize : e[a].markerSize;
          return { x: d, y: c, ctx: b, type: p2, size: a, color: g, borderColor: q, borderThickness: h2 };
        };
        qa(D, K);
        D.prototype.createExtraLabelsForLog = function(a) {
          a = (a || 0) + 1;
          if (!(5 < a)) {
            var d = this.logLabelValues[0] || this.intervalStartPosition;
            if (Math.log(this.range) / Math.log(d / this.viewportMinimum) < this.noTicks - 1) {
              for (var c = D.getNiceNumber((d - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length), 3), true), b = Math.ceil(this.viewportMinimum / c) * c; b < d; b += c)
                b < this.viewportMinimum || this.logLabelValues.push(b);
              this.logLabelValues.sort(Ra);
              this.createExtraLabelsForLog(a);
            }
          }
        };
        D.prototype.createLabels = function() {
          var a, d, c = 0, b = 0, e, g = 0, q = 0, b = 0, b = this.interval, h2 = 0, p2, k = 0.6 * this.chart.height, l;
          a = false;
          var n = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], r = n.length ? m(this.scaleBreaks.firstBreakIndex) ? 0 : this.scaleBreaks.firstBreakIndex : 0;
          if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
            e = this.viewportMaximum;
            if (this.labels) {
              a = Math.ceil(b);
              for (var b = Math.ceil(this.intervalStartPosition), f = false, c = b; c < this.viewportMaximum; c += a)
                if (this.labels[c])
                  f = true;
                else {
                  f = false;
                  break;
                }
              f && (this.interval = a, this.intervalStartPosition = b);
            }
            if (this.logarithmic && !this.equidistantInterval)
              for (this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog()), b = 0, f = r; b < this.logLabelValues.length; b++)
                if (c = this.logLabelValues[b], c < this.viewportMinimum)
                  b++;
                else {
                  for (; f < n.length && c > n[f].endValue; f++)
                    ;
                  a = f < n.length && c >= n[f].startValue && c <= n[f].endValue;
                  l = c;
                  a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: l, label: this.labels[l] ? this.labels[l] : null }) : "axisX" === this.type && this.labels[l] ? this.labels[l] : ga(l, this.valueFormatString, this.chart._cultureInfo), a = new la(this.ctx, {
                    x: 0,
                    y: 0,
                    maxWidth: g,
                    maxHeight: q,
                    angle: this.labelAngle,
                    text: this.prefix + a + this.suffix,
                    backgroundColor: this.labelBackgroundColor,
                    borderColor: this.labelBorderColor,
                    cornerRadius: this.labelCornerRadius,
                    textAlign: this.labelTextAlign,
                    fontSize: this.labelFontSize,
                    fontFamily: this.labelFontFamily,
                    fontWeight: this.labelFontWeight,
                    fontColor: this.labelFontColor,
                    fontStyle: this.labelFontStyle,
                    textBaseline: "middle",
                    borderThickness: 0
                  }), this._labels.push({ position: l, textBlock: a, effectiveHeight: null }));
                }
            f = r;
            for (c = this.intervalStartPosition; c <= e; c = parseFloat(1e-12 > this.interval ? this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval : (this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval).toFixed(12))) {
              for (; f < n.length && c > n[f].endValue; f++)
                ;
              a = f < n.length && c >= n[f].startValue && c <= n[f].endValue;
              l = c;
              a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: l, label: this.labels[l] ? this.labels[l] : null }) : "axisX" === this.type && this.labels[l] ? this.labels[l] : ga(l, this.valueFormatString, this.chart._cultureInfo), a = new la(this.ctx, {
                x: 0,
                y: 0,
                maxWidth: g,
                maxHeight: q,
                angle: this.labelAngle,
                text: this.prefix + a + this.suffix,
                textAlign: this.labelTextAlign,
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
              }), this._labels.push({ position: l, textBlock: a, effectiveHeight: null }));
            }
          } else
            for (this.intervalStartPosition = this.getLabelStartPoint(
              new Date(this.viewportMinimum),
              this.intervalType,
              this.interval
            ), e = Xa(new Date(this.viewportMaximum), this.interval, this.intervalType), f = r, c = this.intervalStartPosition; c < e; Xa(c, b, this.intervalType)) {
              for (a = c.getTime(); f < n.length && a > n[f].endValue; f++)
                ;
              l = a;
              a = f < n.length && a >= n[f].startValue && a <= n[f].endValue;
              a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: new Date(l), label: this.labels[l] ? this.labels[l] : null }) : "axisX" === this.type && this.labels[l] ? this.labels[l] : Da(l, this.valueFormatString, this.chart._cultureInfo), a = new la(this.ctx, { x: 0, y: 0, maxWidth: g, backgroundColor: this.labelBackgroundColor, borderColor: this.labelBorderColor, borderThickness: this.labelBorderThickness, cornerRadius: this.labelCornerRadius, maxHeight: q, angle: this.labelAngle, text: this.prefix + a + this.suffix, textAlign: this.labelTextAlign, fontSize: this.labelFontSize, fontFamily: this.labelFontFamily, fontWeight: this.labelFontWeight, fontColor: this.labelFontColor, fontStyle: this.labelFontStyle, textBaseline: "middle" }), this._labels.push({
                position: l,
                textBlock: a,
                effectiveHeight: null,
                breaksLabelType: void 0
              }));
            }
          if ("bottom" === this._position || "top" === this._position)
            h2 = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * U[this.intervalType + "Duration"] * this.interval, g = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled || (q = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
          else if ("left" === this._position || "right" === this._position)
            h2 = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * U[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (g = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), q = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
          for (b = 0; b < this._labels.length; b++) {
            a = this._labels[b].textBlock;
            a.maxWidth = g;
            a.maxHeight = q;
            var w3 = a.measureText();
            p2 = w3.height;
          }
          e = [];
          r = n = 0;
          if (this.labelAutoFit || this.options.labelAutoFit) {
            if (m(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position || "top" === this._position)
              if (g = 0.9 * h2 >> 0, r = 0, !this.chart.panEnabled && 1 <= this._labels.length) {
                this.sessionVariables.labelFontSize = this.labelFontSize;
                this.sessionVariables.labelMaxWidth = g;
                this.sessionVariables.labelMaxHeight = q;
                this.sessionVariables.labelAngle = this.labelAngle;
                this.sessionVariables.labelWrap = this.labelWrap;
                for (c = 0; c < this._labels.length; c++)
                  if (!this._labels[c].breaksLabelType) {
                    a = this._labels[c].textBlock;
                    for (var z3, f = a.text.split(" "), b = 0; b < f.length; b++)
                      l = f[b], this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, l = this.ctx.measureText(l), l.width > r && (z3 = c, r = l.width);
                  }
                c = 0;
                for (c = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; c < this._labels.length; c++)
                  if (!this._labels[c].breaksLabelType) {
                    a = this._labels[c].textBlock;
                    w3 = a.measureText();
                    for (f = c + 1; f < this._labels.length; f++)
                      if (!this._labels[f].breaksLabelType) {
                        d = this._labels[f].textBlock;
                        d = d.measureText();
                        break;
                      }
                    e.push(a.height);
                    this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                    Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                    b = g * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (q - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    if (m(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                      if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? q : Math.min((b - g * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), l = (k - (p2 + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)), !m(this.options.labelWrap))
                        this.labelWrap ? m(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, r), l), this.sessionVariables.labelWrap = this.labelWrap, d && w3.width + d.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > g ? -25 : this.sessionVariables.labelAngle) : m(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = q, this.sessionVariables.labelMaxWidth = g, d && w3.width + d.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = l)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > g ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = q, this.sessionVariables.labelWrap = this.labelWrap);
                      else {
                        if (m(this.options.labelWrap)) {
                          if (!m(this.options.labelMaxWidth))
                            this.options.labelMaxWidth < g ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = q);
                          else if (!m(d)) {
                            if (b = w3.width + d.width >> 0, f = this.labelFontSize, r < g)
                              b - 2 * g > n && (n = b - 2 * g, b >= 2 * g && b < 2.2 * g ? (this.sessionVariables.labelMaxWidth = g, m(this.options.labelFontSize) && 12 < f && (f = Math.floor(12 / 13 * f), a.measureText()), this.sessionVariables.labelFontSize = m(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 2.2 * g && b < 2.8 * g ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = l, this.sessionVariables.labelFontSize = f) : b >= 2.8 * g && b < 3.2 * g ? (this.sessionVariables.labelMaxWidth = Math.max(g, r), this.sessionVariables.labelWrap = true, m(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = m(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 3.2 * g && b < 3.6 * g ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = true, this.sessionVariables.labelMaxWidth = l, this.sessionVariables.labelFontSize = this.labelFontSize) : b > 3.6 * g && b < 5 * g ? (m(this.options.labelFontSize) && 12 < f && (f = Math.floor(12 / 13 * f), a.measureText()), this.sessionVariables.labelFontSize = m(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelWrap = true, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = l) : b > 5 * g && (this.sessionVariables.labelWrap = true, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelFontSize = f, this.sessionVariables.labelMaxHeight = q, this.sessionVariables.labelAngle = this.labelAngle));
                            else if (z3 === c && (0 === z3 && r + this._labels[z3 + 1].textBlock.measureText().width - 2 * g > n || z3 === this._labels.length - 1 && r + this._labels[z3 - 1].textBlock.measureText().width - 2 * g > n || 0 < z3 && z3 < this._labels.length - 1 && r + this._labels[z3 + 1].textBlock.measureText().width - 2 * g > n && r + this._labels[z3 - 1].textBlock.measureText().width - 2 * g > n))
                              n = 0 === z3 ? r + this._labels[z3 + 1].textBlock.measureText().width - 2 * g : r + this._labels[z3 - 1].textBlock.measureText().width - 2 * g, this.sessionVariables.labelFontSize = m(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelWrap = true, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = l;
                            else if (0 === n)
                              for (this.sessionVariables.labelFontSize = m(this.options.labelFontSize) ? f : this.options.labelFontSize, this.sessionVariables.labelWrap = true, b = 0; b < this._labels.length; b++)
                                a = this._labels[b].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, r), l), w3 = a.measureText(), b < this._labels.length - 1 && (f = b + 1, d = this._labels[f].textBlock, d.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(g, r), l), d = d.measureText(), w3.width + d.width >> 0 > 2 * g && (this.sessionVariables.labelAngle = -25));
                          }
                        }
                      }
                    else
                      (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? q : Math.min((b - g * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), l = 0 != this.labelAngle ? (k - (p2 + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : g, this.sessionVariables.labelMaxHeight = this.labelWrap ? (k - l * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, m(this.options.labelWrap)) ? m(this.options.labelWrap) && (this.labelWrap && !m(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : l, this.sessionVariables.labelMaxHeight = q) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = l, this.sessionVariables.labelMaxHeight = b < 0.9 * h2 ? 0.9 * h2 : b, this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : l) : (m(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : l, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = q);
                  }
                for (b = 0; b < this._labels.length; b++)
                  a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
              } else
                for (c = 0; c < this._labels.length; c++)
                  a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = m(this.options.labelMaxWidth) ? m(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = g : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = m(this.options.labelFontSize) ? m(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = m(this.options.labelAngle) ? m(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = m(this.options.labelWrap) ? m(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = m(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = q : this.sessionVariables.labelMaxHeight, a.measureText();
            else if ("left" === this._position || "right" === this._position)
              if (g = m(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, q = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
                this.sessionVariables.labelFontSize = this.labelFontSize;
                this.sessionVariables.labelMaxWidth = g;
                this.sessionVariables.labelMaxHeight = q;
                this.sessionVariables.labelAngle = m(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle;
                this.sessionVariables.labelWrap = this.labelWrap;
                for (c = 0; c < this._labels.length; c++)
                  if (!this._labels[c].breaksLabelType) {
                    a = this._labels[c].textBlock;
                    w3 = a.measureText();
                    for (f = c + 1; f < this._labels.length; f++)
                      if (!this._labels[f].breaksLabelType) {
                        d = this._labels[f].textBlock;
                        d = d.measureText();
                        break;
                      }
                    e.push(a.height);
                    this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                    b = g * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (q - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                    Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                    m(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ? m(this.options.labelWrap) ? m(this.options.labelWrap) && (m(this.options.labelMaxWidth) ? m(d) || (h2 = w3.height + d.height >> 0, h2 - 2 * q > r && (r = h2 - 2 * q, h2 >= 2 * q && h2 < 2.4 * q ? (m(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = q, this.sessionVariables.labelFontSize = m(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : h2 >= 2.4 * q && h2 < 2.8 * q ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = true) : h2 >= 2.8 * q && h2 < 3.2 * q ? (this.sessionVariables.labelMaxHeight = q, this.sessionVariables.labelWrap = true, m(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = m(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle = m(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : h2 >= 3.2 * q && h2 < 3.6 * q ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelWrap = true, this.sessionVariables.labelFontSize = this.labelFontSize) : h2 > 3.6 * q && h2 < 10 * q ? (m(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = m(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelMaxHeight = q, this.sessionVariables.labelAngle = m(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : h2 > 10 * q && h2 < 50 * q && (m(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = m(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight = q, this.sessionVariables.labelMaxWidth = g, this.sessionVariables.labelAngle = m(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = q, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : g, this.sessionVariables.labelMaxHeight = q) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? g : Math.min((b - q * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), q), m(this.options.labelWrap)) ? m(this.options.labelWrap) && (this.labelWrap && !m(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : g, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? q : b, m(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? q : b, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = g) : (this.sessionVariables.labelMaxHeight = q, m(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap);
                  }
                for (b = 0; b < this._labels.length; b++)
                  a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText();
              } else
                for (c = 0; c < this._labels.length; c++)
                  a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = m(this.options.labelMaxWidth) ? m(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = g : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = m(this.options.labelFontSize) ? m(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = m(this.options.labelAngle) ? m(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = m(this.options.labelWrap) ? m(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = m(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = q : this.sessionVariables.labelMaxHeight, a.measureText();
          }
          for (c = 0; c < this.stripLines.length; c++) {
            var g = this.stripLines[c], x;
            if ("outside" === g.labelPlacement) {
              q = this.sessionVariables.labelMaxWidth;
              if ("bottom" === this._position || "top" === this._position)
                m(g.options.labelWrap) && !m(this.sessionVariables.stripLineLabelMaxHeight) ? x = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = x = g.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
              if ("left" === this._position || "right" === this._position)
                m(g.options.labelWrap) && !m(this.sessionVariables.stripLineLabelMaxHeight) ? x = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = x = g.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
              m(g.labelBackgroundColor) && (g.labelBackgroundColor = "#EEEEEE");
            } else
              q = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, x = m(g.options.labelWrap) || g.labelWrap ? "bottom" === this._position || "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, m(g.labelBackgroundColor) && (m(g.startValue) && 0 !== g.startValue ? g.labelBackgroundColor = u ? "transparent" : null : g.labelBackgroundColor = "#EEEEEE");
            a = new la(this.ctx, { x: 0, y: 0, backgroundColor: g.labelBackgroundColor, borderColor: g.labelBorderColor, borderThickness: g.labelBorderThickness, cornerRadius: g.labelCornerRadius, maxWidth: g.options.labelMaxWidth ? g.options.labelMaxWidth : q, maxHeight: x, angle: this.labelAngle, text: g.labelFormatter ? g.labelFormatter({ chart: this.chart, axis: this, stripLine: g }) : g.label, textAlign: this.labelTextAlign, fontSize: "outside" === g.labelPlacement ? g.options.labelFontSize ? g.labelFontSize : this.labelFontSize : g.labelFontSize, fontFamily: "outside" === g.labelPlacement ? g.options.labelFontFamily ? g.labelFontFamily : this.labelFontFamily : g.labelFontFamily, fontWeight: "outside" === g.labelPlacement ? g.options.labelFontWeight ? g.labelFontWeight : this.labelFontWeight : g.labelFontWeight, fontColor: g.labelFontColor || g.color, fontStyle: "outside" === g.labelPlacement ? g.options.labelFontStyle ? g.labelFontStyle : this.fontWeight : g.labelFontStyle, textBaseline: "middle" });
            this._stripLineLabels.push({ position: g.value, textBlock: a, effectiveHeight: null, stripLine: g });
          }
        };
        D.prototype.createLabelsAndCalculateWidth = function() {
          var a = 0, d = 0;
          this._labels = [];
          this._stripLineLabels = [];
          var c = this.chart.isNavigator ? 0 : 5;
          if ("left" === this._position || "right" === this._position) {
            this.createLabels();
            if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
              for (d = 0; d < this._labels.length; d++) {
                var b = this._labels[d].textBlock, e = b.measureText(), g = 0, g = 0 === this.labelAngle ? e.width : e.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                a < g && (this.labelEffectiveWidth = a = g);
                this._labels[d].effectiveWidth = g;
              }
            for (d = 0; d < this._stripLineLabels.length; d++)
              "outside" === this._stripLineLabels[d].stripLine.labelPlacement && (this._stripLineLabels[d].stripLine.value >= this.viewportMinimum && this._stripLineLabels[d].stripLine.value <= this.viewportMaximum) && (b = this._stripLineLabels[d].textBlock, e = b.measureText(), g = 0 === this.labelAngle ? e.width : e.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), "inside" === this.tickPlacement && (g += this.tickLength), "inside" === this.labelPlacement && (a += 0 < this._index ? g : 0), a < g && (a = g), this.stripLineLabelEffectiveWidth = this._stripLineLabels[d].effectiveWidth = g);
          }
          return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 < this._index ? this.tickLength : 0 : this.tickLength) + c;
        };
        D.prototype.createLabelsAndCalculateHeight = function() {
          var a = 0;
          this._labels = [];
          this._stripLineLabels = [];
          var d, c = 0, b = this.chart.isNavigator ? 0 : 5;
          if ("bottom" === this._position || "top" === this._position) {
            this.createLabels();
            if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
              for (c = 0; c < this._labels.length; c++) {
                d = this._labels[c].textBlock;
                var e = d.measureText(), g = 0, g = 0 === this.labelAngle ? e.height : e.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - d.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                a < g && (this.labelEffectiveHeight = a = g);
                this._labels[c].effectiveHeight = g;
              }
            for (c = 0; c < this._stripLineLabels.length; c++)
              "outside" === this._stripLineLabels[c].stripLine.labelPlacement && (this._stripLineLabels[c].stripLine.value >= this.viewportMinimum && this._stripLineLabels[c].stripLine.value <= this.viewportMaximum) && (d = this._stripLineLabels[c].textBlock, e = d.measureText(), g = 0 === this.labelAngle ? e.height : e.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - d.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), "inside" === this.tickPlacement && (g += this.tickLength), "inside" === this.labelPlacement && (a += 0 < this._index ? g : 0), a < g && (a = g), this.stripLineLabelEffectiveHeight = this._stripLineLabels[c].effectiveHeight = g);
          }
          return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 < this._index ? this.tickLength : 0 : this.tickLength) + b;
        };
        D.setLayout = function(a, d, c, b, e, g) {
          var q, h2, p2, k, l = a[0] ? a[0].chart : d[0].chart, n = l.isNavigator ? 0 : 10, r = l._axes;
          if (a && 0 < a.length)
            for (var f = 0; f < a.length; f++)
              a[f] && a[f].calculateAxisParameters();
          if (d && 0 < d.length)
            for (f = 0; f < d.length; f++)
              d[f].calculateAxisParameters();
          if (c && 0 < c.length)
            for (f = 0; f < c.length; f++)
              c[f].calculateAxisParameters();
          if (b && 0 < b.length)
            for (f = 0; f < b.length; f++)
              b[f].calculateAxisParameters();
          for (f = 0; f < r.length; f++)
            if (r[f] && r[f].scaleBreaks && r[f].scaleBreaks._appliedBreaks.length)
              for (var u2 = r[f].scaleBreaks._appliedBreaks, w3 = 0; w3 < u2.length && !(u2[w3].startValue > r[f].viewportMaximum); w3++)
                u2[w3].endValue < r[f].viewportMinimum || (m(r[f].scaleBreaks.firstBreakIndex) && (r[f].scaleBreaks.firstBreakIndex = w3), u2[w3].startValue >= r[f].viewPortMinimum && (r[f].scaleBreaks.lastBreakIndex = w3));
          for (var x = w3 = 0, s = 0, y = 0, v = 0, z3 = 0, A = 0, B, D2, E3 = h2 = 0, I2, K2, N, u2 = I2 = K2 = N = false, f = 0; f < r.length; f++)
            r[f] && r[f].title && (r[f]._titleTextBlock = new la(r[f].ctx, {
              text: r[f].title,
              horizontalAlign: "center",
              fontSize: r[f].titleFontSize,
              fontFamily: r[f].titleFontFamily,
              fontWeight: r[f].titleFontWeight,
              fontColor: r[f].titleFontColor,
              fontStyle: r[f].titleFontStyle,
              borderColor: r[f].titleBorderColor,
              borderThickness: r[f].titleBorderThickness,
              backgroundColor: r[f].titleBackgroundColor,
              cornerRadius: r[f].titleCornerRadius,
              textBaseline: "middle"
            }));
          for (f = 0; f < r.length; f++)
            if (r[f].title)
              switch (r[f]._position) {
                case "left":
                  r[f]._titleTextBlock.maxWidth = r[f].titleMaxWidth || g.height;
                  r[f]._titleTextBlock.maxHeight = r[f].titleWrap ? 0.8 * g.width : 1.5 * r[f].titleFontSize;
                  r[f]._titleTextBlock.angle = -90;
                  break;
                case "right":
                  r[f]._titleTextBlock.maxWidth = r[f].titleMaxWidth || g.height;
                  r[f]._titleTextBlock.maxHeight = r[f].titleWrap ? 0.8 * g.width : 1.5 * r[f].titleFontSize;
                  r[f]._titleTextBlock.angle = 90;
                  break;
                default:
                  r[f]._titleTextBlock.maxWidth = r[f].titleMaxWidth || g.width, r[f]._titleTextBlock.maxHeight = r[f].titleWrap ? 0.8 * g.height : 1.5 * r[f].titleFontSize, r[f]._titleTextBlock.angle = 0;
              }
          if ("normal" === e) {
            for (var y = [], v = [], z3 = [], A = [], O2 = [], R3 = [], P2 = [], Q2 = []; 4 > w3; ) {
              var F = 0, Z2 = 0, U2 = 0, W3 = 0, Y2 = e = 0, M = 0, aa3 = 0, X2 = 0, $ = 0, S = 0, ba2 = 0;
              if (c && 0 < c.length)
                for (z3 = [], f = S = 0; f < c.length; f++)
                  z3.push(Math.ceil(c[f] ? c[f].createLabelsAndCalculateWidth() : 0)), S += z3[f], M += c[f] && !l.isNavigator ? c[f].margin : 0;
              else
                z3.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
              P2.push(z3);
              if (b && 0 < b.length)
                for (A = [], f = ba2 = 0; f < b.length; f++)
                  A.push(Math.ceil(b[f] ? b[f].createLabelsAndCalculateWidth() : 0)), ba2 += A[f], aa3 += b[f] ? b[f].margin : 0;
              else
                A.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
              Q2.push(A);
              q = Math.round(g.x1 + S + M);
              p2 = Math.round(g.x2 - ba2 - aa3 > l.width - n ? l.width - n : g.x2 - ba2 - aa3);
              if (a && 0 < a.length)
                for (y = [], f = X2 = 0; f < a.length; f++)
                  a[f] && (a[f].lineCoordinates = {}), a[f].lineCoordinates.width = Math.abs(p2 - q), a[f].title && (a[f]._titleTextBlock.maxWidth = 0 < a[f].titleMaxWidth && a[f].titleMaxWidth < a[f].lineCoordinates.width ? a[f].titleMaxWidth : a[f].lineCoordinates.width), y.push(Math.ceil(a[f] ? a[f].createLabelsAndCalculateHeight() : 0)), X2 += y[f], e += a[f] && !l.isNavigator ? a[f].margin : 0;
              else
                y.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
              O2.push(y);
              if (d && 0 < d.length)
                for (v = [], f = $ = 0; f < d.length; f++)
                  d[f] && (d[f].lineCoordinates = {}), d[f].lineCoordinates.width = Math.abs(p2 - q), d[f].title && (d[f]._titleTextBlock.maxWidth = 0 < d[f].titleMaxWidth && d[f].titleMaxWidth < d[f].lineCoordinates.width ? d[f].titleMaxWidth : d[f].lineCoordinates.width), v.push(Math.ceil(d[f] ? d[f].createLabelsAndCalculateHeight() : 0)), $ += v[f], Y2 += d[f] && !l.isNavigator ? d[f].margin : 0;
              else
                v.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateHeight() : 0));
              R3.push(v);
              if (a && 0 < a.length)
                for (f = 0; f < a.length; f++)
                  a[f] && (a[f].lineCoordinates.x1 = q, p2 = Math.round(g.x2 - ba2 - aa3 > l.width - n ? l.width - n : g.x2 - ba2 - aa3), a[f]._labels && 1 < a[f]._labels.length && (h2 = k = 0, k = a[f]._labels[1], h2 = "dateTime" === a[f].valueType ? a[f]._labels[a[f]._labels.length - 2] : a[f]._labels[a[f]._labels.length - 1], x = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - h2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), s = h2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h2.textBlock.angle)) + (h2.textBlock.height - h2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h2.textBlock.angle))), !a[f] || (!a[f].labelAutoFit || m(B) || m(D2) || l.isNavigator || l.stockChart) || (h2 = 0, 0 < a[f].labelAngle ? D2 + s > p2 && (h2 += 0 < a[f].labelAngle ? D2 + s - p2 - ba2 : 0) : 0 > a[f].labelAngle ? B - x < q && B - x < a[f].viewportMinimum && (E3 = q - (M + a[f].tickLength + z3 + B - x + a[f].labelFontSize / 2)) : 0 === a[f].labelAngle && (D2 + s > p2 && (h2 = D2 + s / 2 - p2 - ba2), B - x < q && B - x < a[f].viewportMinimum && (E3 = q - M - a[f].tickLength - z3 - B + x / 2)), a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 < a[f].labelAngle && 0 < h2 ? p2 -= h2 : a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 > a[f].labelAngle && 0 < E3 ? q += E3 : a[f].viewportMaximum === a[f].maximum && a[f].viewportMinimum === a[f].minimum && 0 === a[f].labelAngle && (0 < E3 && (q += E3), 0 < h2 && (p2 -= h2))), l.panEnabled ? X2 = m(l.sessionVariables.axisX.height) ? l.sessionVariables.axisX.height = X2 : l.sessionVariables.axisX.height : l.sessionVariables.axisX.height = X2, h2 = Math.round(g.y2 - X2 - e + F), k = Math.round(g.y2), a[f].lineCoordinates.x2 = p2, a[f].lineCoordinates.width = p2 - q, a[f].lineCoordinates.y1 = h2, a[f].lineCoordinates.y2 = h2, "inside" === a[f].labelPlacement && 0 < f && (a[f].lineCoordinates.y1 = a[f - 1].lineCoordinates.y2 + F + (a[f].labelEffectiveHeight || 0), a[f].lineCoordinates.y2 = a[f].lineCoordinates.y1 + a[f].lineThickness / 2), "inside" === a[f].tickPlacement && 0 < f && (a[f].lineCoordinates.y1 += a[f].tickLength, a[f].lineCoordinates.y2 = a[f].lineCoordinates.y1 + a[f].lineThickness / 2), a[f].bounds = { x1: q, y1: h2, x2: p2, y2: k - (X2 + e - y[f] - F), width: p2 - q }, a[f].bounds.height = a[f].bounds.y2 - a[f].bounds.y1), F += y[f] + a[f].margin;
              if (d && 0 < d.length)
                for (f = 0; f < d.length; f++)
                  d[f].lineCoordinates.x1 = Math.round(g.x1 + S + M), d[f].lineCoordinates.x2 = Math.round(g.x2 - ba2 - aa3 > l.width - n ? l.width - n : g.x2 - ba2 - aa3), d[f].lineCoordinates.width = Math.abs(p2 - q), d[f]._labels && 1 < d[f]._labels.length && (k = d[f]._labels[1], h2 = "dateTime" === d[f].valueType ? d[f]._labels[d[f]._labels.length - 2] : d[f]._labels[d[f]._labels.length - 1], x = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - h2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), s = h2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h2.textBlock.angle)) + (h2.textBlock.height - h2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h2.textBlock.angle))), l.panEnabled ? $ = m(l.sessionVariables.axisX2.height) ? l.sessionVariables.axisX2.height = $ : l.sessionVariables.axisX2.height : l.sessionVariables.axisX2.height = $, h2 = Math.round(g.y1), k = d[f].lineCoordinates.y1 = h2 + $ + Y2 - Z2, d[f].lineCoordinates.y2 = h2, "inside" === d[f].labelPlacement && 0 < f && (d[f].lineCoordinates.y1 = d[f - 1].lineCoordinates.y1 - Z2 - (d[f].labelEffectiveHeight || 0)), "inside" === d[f].tickPlacement && 0 < f && (d[f].lineCoordinates.y1 -= d[f].tickLength), d[f].bounds = {
                    x1: q,
                    y1: h2 + ($ + Y2 - v[f] - Z2),
                    x2: p2,
                    y2: k,
                    width: p2 - q
                  }, d[f].bounds.height = d[f].bounds.y2 - d[f].bounds.y1, Z2 += v[f] + d[f].margin;
              if (c && 0 < c.length)
                for (f = 0; f < c.length; f++)
                  M = l.isNavigator ? 0 : 10, c[f] && (q = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1), M = c[f]._labels && 0 < c[f]._labels.length ? c[f]._labels[c[f]._labels.length - 1].textBlock.height / 2 : n, h2 = Math.round(g.y1 + $ + Y2 < Math.max(M, n) ? Math.max(M, n) : g.y1 + $ + Y2), p2 = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1), M = 0 < a.length ? 0 : c[f]._labels && 0 < c[f]._labels.length ? c[f]._labels[0].textBlock.height / 2 : n, k = Math.round(g.y2 - X2 - e - M), c[f].lineCoordinates = { x1: q - U2, y1: h2, x2: p2 - U2, y2: k, height: Math.abs(k - h2) }, "inside" === c[f].labelPlacement && 0 < f && (c[f].lineCoordinates.x1 = c[f - 1].lineCoordinates.x1 - U2 - (c[f].labelEffectiveWidth || 0), c[f].lineCoordinates.x2 = c[f].lineCoordinates.x1 + c[f].lineThickness / 2), "inside" === c[f].tickPlacement && 0 < f && (c[f].lineCoordinates.x1 -= c[f].tickLength, c[f].lineCoordinates.x2 = c[f].lineCoordinates.x1 + c[f].lineThickness / 2), c[f].bounds = { x1: q - (z3[f] + U2), y1: h2, x2: p2 - U2, y2: k, height: k - h2 }, c[f].bounds.width = c[f].bounds.x2 - c[f].bounds.x1, c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.height ? c[f].titleMaxWidth : c[f].lineCoordinates.height), U2 += z3[f] + c[f].margin);
              if (b && 0 < b.length)
                for (f = 0; f < b.length; f++)
                  b[f] && (q = Math.round(a[0] ? a[0].lineCoordinates.x2 : d[0].lineCoordinates.x2), p2 = Math.round(q), M = b[f]._labels && 0 < b[f]._labels.length ? b[f]._labels[b[f]._labels.length - 1].textBlock.height / 2 : 0, h2 = Math.round(g.y1 + $ + Y2 < Math.max(
                    M,
                    n
                  ) ? Math.max(M, n) : g.y1 + $ + Y2), M = 0 < a.length ? 0 : b[f]._labels && 0 < b[f]._labels.length ? b[f]._labels[0].textBlock.height / 2 : 0, k = Math.round(g.y2 - (X2 + e + M)), b[f].lineCoordinates = { x1: q + W3, y1: h2, x2: q + W3, y2: k, height: Math.abs(k - h2) }, "inside" === b[f].labelPlacement && 0 < f && (b[f].lineCoordinates.x1 = b[f - 1].lineCoordinates.x2 + W3 + (b[f].labelEffectiveWidth || 0), b[f].lineCoordinates.x2 = b[f].lineCoordinates.x1 + b[f].lineThickness / 2), "inside" === b[f].tickPlacement && 0 < f && (b[f].lineCoordinates.x1 += b[f].tickLength, b[f].lineCoordinates.x2 = b[f].lineCoordinates.x1 + b[f].lineThickness / 2), b[f].bounds = { x1: q + W3, y1: h2, x2: p2 + (A[f] + W3), y2: k, height: k - h2 }, b[f].bounds.width = b[f].bounds.x2 - b[f].bounds.x1, b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.height ? b[f].titleMaxWidth : b[f].lineCoordinates.height), W3 += A[f] + b[f].margin);
              if (a && 0 < a.length)
                for (f = 0; f < a.length; f++)
                  a[f] && (a[f].calculateValueToPixelConversionParameters(), a[f].calculateBreaksSizeInValues(), a[f]._labels && 1 < a[f]._labels.length && (B = (a[f].logarithmic ? Math.log(a[f]._labels[1].position / a[f].viewportMinimum) / a[f].conversionParameters.lnLogarithmBase : a[f]._labels[1].position - a[f].viewportMinimum) * Math.abs(a[f].conversionParameters.pixelPerUnit) + a[f].lineCoordinates.x1, q = a[f]._labels[a[f]._labels.length - ("dateTime" === a[f].valueType ? 2 : 1)].position, q = a[f].getApparentDifference(a[f].viewportMinimum, q), D2 = a[f].logarithmic ? (1 < q ? Math.log(q) / a[f].conversionParameters.lnLogarithmBase * Math.abs(a[f].conversionParameters.pixelPerUnit) : 0) + a[f].lineCoordinates.x1 : (0 < q ? q * Math.abs(a[f].conversionParameters.pixelPerUnit) : 0) + a[f].lineCoordinates.x1));
              if (d && 0 < d.length)
                for (f = 0; f < d.length; f++)
                  d[f].calculateValueToPixelConversionParameters(), d[f].calculateBreaksSizeInValues(), d[f]._labels && 1 < d[f]._labels.length && (B = (d[f].logarithmic ? Math.log(d[f]._labels[1].position / d[f].viewportMinimum) / d[f].conversionParameters.lnLogarithmBase : d[f]._labels[1].position - d[f].viewportMinimum) * Math.abs(d[f].conversionParameters.pixelPerUnit) + d[f].lineCoordinates.x1, q = d[f]._labels[d[f]._labels.length - ("dateTime" === d[f].valueType ? 2 : 1)].position, q = d[f].getApparentDifference(d[f].viewportMinimum, q), D2 = d[f].logarithmic ? (1 < q ? Math.log(q) / d[f].conversionParameters.lnLogarithmBase * Math.abs(d[f].conversionParameters.pixelPerUnit) : 0) + d[f].lineCoordinates.x1 : (0 < q ? q * Math.abs(d[f].conversionParameters.pixelPerUnit) : 0) + d[f].lineCoordinates.x1);
              for (f = 0; f < r.length; f++)
                "axisY" === r[f].type && (r[f].calculateValueToPixelConversionParameters(), r[f].calculateBreaksSizeInValues());
              if (0 < w3) {
                if (a && 0 < a.length)
                  for (f = 0; f < a.length; f++)
                    u2 = O2[w3 - 1][f] === O2[w3][f] ? true : false;
                else
                  u2 = true;
                if (d && 0 < d.length)
                  for (f = 0; f < d.length; f++)
                    I2 = R3[w3 - 1][f] === R3[w3][f] ? true : false;
                else
                  I2 = true;
                if (c && 0 < c.length)
                  for (f = 0; f < c.length; f++)
                    K2 = P2[w3 - 1][f] === P2[w3][f] ? true : false;
                else
                  K2 = true;
                if (b && 0 < b.length)
                  for (f = 0; f < b.length; f++)
                    N = Q2[w3 - 1][f] === Q2[w3][f] ? true : false;
                else
                  N = true;
              }
              if (u2 && I2 && K2 && N)
                break;
              w3++;
            }
            if (a && 0 < a.length)
              for (f = 0; f < a.length; f++)
                a[f].calculateStripLinesThicknessInValues(), a[f].calculateBreaksInPixels();
            if (d && 0 < d.length)
              for (f = 0; f < d.length; f++)
                d[f].calculateStripLinesThicknessInValues(), d[f].calculateBreaksInPixels();
            if (c && 0 < c.length)
              for (f = 0; f < c.length; f++)
                c[f].calculateStripLinesThicknessInValues(), c[f].calculateBreaksInPixels();
            if (b && 0 < b.length)
              for (f = 0; f < b.length; f++)
                b[f].calculateStripLinesThicknessInValues(), b[f].calculateBreaksInPixels();
          } else {
            n = [];
            B = [];
            E3 = [];
            x = [];
            D2 = [];
            s = [];
            O2 = [];
            for (R3 = []; 4 > w3; ) {
              X2 = W3 = U2 = aa3 = M = Y2 = e = Q2 = P2 = F = $ = 0;
              if (a && 0 < a.length)
                for (E3 = [], f = W3 = 0; f < a.length; f++)
                  E3.push(Math.ceil(a[f] ? a[f].createLabelsAndCalculateWidth() : 0)), W3 += E3[f], e += a[f] && !l.isNavigator ? a[f].margin : 0;
              else
                E3.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
              O2.push(E3);
              if (d && 0 < d.length)
                for (x = [], f = X2 = 0; f < d.length; f++)
                  x.push(Math.ceil(d[f] ? d[f].createLabelsAndCalculateWidth() : 0)), X2 += x[f], Y2 += d[f] ? d[f].margin : 0;
              else
                x.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateWidth() : 0));
              R3.push(x);
              if (c && 0 < c.length)
                for (f = 0; f < c.length; f++)
                  c[f].lineCoordinates = {}, q = Math.round(g.x1 + W3 + e), p2 = Math.round(g.x2 - X2 - Y2 > l.width - 10 ? l.width - 10 : g.x2 - X2 - Y2), c[f].labelAutoFit && !m(y) && (0 < !a.length && (q = 0 > c[f].labelAngle ? Math.max(q, y) : 0 === c[f].labelAngle ? Math.max(q, y / 2) : q), 0 < !d.length && (p2 = 0 < c[f].labelAngle ? p2 - v / 2 : 0 === c[f].labelAngle ? p2 - v / 2 : p2)), c[f].lineCoordinates.x1 = q, c[f].lineCoordinates.x2 = p2, c[f].lineCoordinates.width = Math.abs(p2 - q), c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.width ? c[f].titleMaxWidth : c[f].lineCoordinates.width);
              if (b && 0 < b.length)
                for (f = 0; f < b.length; f++)
                  b[f].lineCoordinates = {}, q = Math.round(g.x1 + W3 + e), p2 = Math.round(g.x2 - X2 - Y2 > b[f].chart.width - 10 ? b[f].chart.width - 10 : g.x2 - X2 - Y2), b[f] && b[f].labelAutoFit && !m(z3) && (0 < !a.length && (q = 0 < b[f].labelAngle ? Math.max(q, z3) : 0 === b[f].labelAngle ? Math.max(q, z3 / 2) : q), 0 < !d.length && (p2 -= A / 2)), b[f].lineCoordinates.x1 = q, b[f].lineCoordinates.x2 = p2, b[f].lineCoordinates.width = Math.abs(p2 - q), b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.width ? b[f].titleMaxWidth : b[f].lineCoordinates.width);
              if (c && 0 < c.length)
                for (n = [], f = U2 = 0; f < c.length; f++)
                  n.push(Math.ceil(c[f] ? c[f].createLabelsAndCalculateHeight() : 0)), U2 += n[f] + c[f].margin, M += c[f].margin;
              else
                n.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
              D2.push(n);
              if (b && 0 < b.length)
                for (B = [], f = 0; f < b.length; f++)
                  B.push(Math.ceil(b[f] ? b[f].createLabelsAndCalculateHeight() : 0)), aa3 += b[f].margin;
              else
                B.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
              s.push(B);
              if (c && 0 < c.length)
                for (f = 0; f < c.length; f++)
                  0 < c[f]._labels.length && (k = c[f]._labels[0], h2 = c[f]._labels[c[f]._labels.length - 1], y = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - h2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), v = h2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h2.textBlock.angle)) + (h2.textBlock.height - h2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h2.textBlock.angle)));
              if (b && 0 < b.length)
                for (f = 0; f < b.length; f++)
                  b[f] && 0 < b[f]._labels.length && (k = b[f]._labels[0], h2 = b[f]._labels[b[f]._labels.length - 1], z3 = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - h2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)), A = h2.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h2.textBlock.angle)) + (h2.textBlock.height - h2.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h2.textBlock.angle)));
              if (l.panEnabled)
                for (f = 0; f < c.length; f++)
                  n[f] = m(l.sessionVariables.axisY[f].height) ? l.sessionVariables.axisY[f].height = n[f] : l.sessionVariables.axisY[f].height;
              else
                for (f = 0; f < c.length; f++)
                  l.sessionVariables.axisY[f].height = n[f];
              if (c && 0 < c.length)
                for (f = c.length - 1; 0 <= f; f--)
                  h2 = Math.round(g.y2), k = Math.round(g.y2 > c[f].chart.height ? c[f].chart.height : g.y2), c[f].lineCoordinates.y1 = h2 - (n[f] + c[f].margin + $), c[f].lineCoordinates.y2 = h2 - (n[f] + c[f].margin + $), "inside" === c[f].labelPlacement && 0 < f && (c[f].lineCoordinates.y1 = c[f].lineCoordinates.y1 + n[f] - (c[f]._titleTextBlock ? c[f]._titleTextBlock.height : 0) - c[f].tickLength - (c[f].stripLineLabelEffectiveHeight || 0) - 5, c[f].lineCoordinates.y2 = c[f].lineCoordinates.y1 + c[f].lineThickness / 2), "inside" === c[f].tickPlacement && 0 < f && (c[f].lineCoordinates.y1 += c[f].tickLength, c[f].lineCoordinates.y2 = c[f].lineCoordinates.y1 + c[f].lineThickness / 2), c[f].bounds = { x1: q, y1: h2 - (n[f] + $ + c[f].margin), x2: p2, y2: k - ($ + c[f].margin), width: p2 - q, height: n[f] }, c[f].title && (c[f]._titleTextBlock.maxWidth = 0 < c[f].titleMaxWidth && c[f].titleMaxWidth < c[f].lineCoordinates.width ? c[f].titleMaxWidth : c[f].lineCoordinates.width), $ += n[f] + c[f].margin;
              if (b && 0 < b.length)
                for (f = b.length - 1; 0 <= f; f--)
                  b[f] && (h2 = Math.round(g.y1), k = Math.round(g.y1 + (B[f] + b[f].margin + F)), b[f].lineCoordinates.y1 = k, b[f].lineCoordinates.y2 = k, "inside" === b[f].labelPlacement && 0 < f && (b[f].lineCoordinates.y1 = k - B[f] + (b[f]._titleTextBlock ? b[f]._titleTextBlock.height : 0) + b[f].tickLength + (b[f].stripLineLabelEffectiveHeight || 0), b[f].lineCoordinates.y2 = b[f].lineCoordinates.y1 - b[f].lineThickness / 2), "inside" === b[f].tickPlacement && 0 < f && (b[f].lineCoordinates.y1 -= b[f].tickLength, b[f].lineCoordinates.y2 = b[f].lineCoordinates.y1 - b[f].lineThickness / 2), b[f].bounds = { x1: q, y1: h2 + (b[f].margin + F), x2: p2, y2: k, width: p2 - q }, b[f].bounds.height = b[f].bounds.y2 - b[f].bounds.y1, b[f].title && (b[f]._titleTextBlock.maxWidth = 0 < b[f].titleMaxWidth && b[f].titleMaxWidth < b[f].lineCoordinates.width ? b[f].titleMaxWidth : b[f].lineCoordinates.width), F += B[f] + b[f].margin);
              if (a && 0 < a.length)
                for (f = 0; f < a.length; f++) {
                  M = a[f]._labels && 0 < a[f]._labels.length ? a[f]._labels[0].textBlock.fontSize / 2 : 0;
                  q = Math.round(g.x1 + e);
                  h2 = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : g.y1 < Math.max(M, 10) ? Math.max(M, 10) : g.y1) : g.y1 < Math.max(M, 10) ? Math.max(M, 10) : g.y1;
                  p2 = Math.round(g.x1 + W3 + e);
                  k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : g.y2 - U2 > l.height - Math.max(M, 10) ? l.height - Math.max(M, 10) : g.y2 - U2) : g.y2 > l.height - Math.max(
                    M,
                    10
                  ) ? l.height - Math.max(M, 10) : g.y2;
                  if (c && 0 < c.length)
                    for (M = 0; M < c.length; M++)
                      c[M] && c[M].labelAutoFit && (p2 = c[M].lineCoordinates.x1, q = 0 > c[M].labelAngle || 0 === c[M].labelAngle ? p2 - W3 : q);
                  if (b && 0 < b.length)
                    for (M = 0; M < b.length; M++)
                      b[M] && b[M].labelAutoFit && (p2 = b[M].lineCoordinates.x1, q = p2 - W3);
                  a[f].lineCoordinates = { x1: p2 - P2, y1: h2, x2: p2 - P2, y2: k, height: Math.abs(k - h2) };
                  "inside" === a[f].labelPlacement && 0 < f && (a[f].lineCoordinates.x1 = a[f].lineCoordinates.x1 - (E3[f] - (a[f]._titleTextBlock ? a[f]._titleTextBlock.height : 0)) + a[f].tickLength + (a[f].stripLineLabelEffectiveWidth || 0), a[f].lineCoordinates.x2 = a[f].lineCoordinates.x1 + a[f].lineThickness / 2);
                  "inside" === a[f].tickPlacement && 0 < f && (a[f].lineCoordinates.x1 -= a[f].tickLength, a[f].lineCoordinates.x2 = a[f].lineCoordinates.x1 + a[f].lineThickness / 2);
                  a[f].bounds = { x1: p2 - (E3[f] + P2), y1: h2, x2: p2 - P2, y2: k, height: k - h2 };
                  a[f].bounds.width = a[f].bounds.x2 - a[f].bounds.x1;
                  a[f].title && (a[f]._titleTextBlock.maxWidth = 0 < a[f].titleMaxWidth && a[f].titleMaxWidth < a[f].lineCoordinates.height ? a[f].titleMaxWidth : a[f].lineCoordinates.height);
                  a[f].calculateValueToPixelConversionParameters();
                  a[f].calculateBreaksSizeInValues();
                  P2 += E3[f] + a[f].margin;
                }
              if (d && 0 < d.length)
                for (f = 0; f < d.length; f++) {
                  M = d[f]._labels && 0 < d[f]._labels.length ? d[f]._labels[0].textBlock.fontSize / 2 : 0;
                  q = Math.round(g.x1 - e);
                  h2 = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : g.y1 < Math.max(M, 10) ? Math.max(M, 10) : g.y1) : g.y1 < Math.max(M, 10) ? Math.max(M, 10) : g.y1;
                  p2 = Math.round(g.x2 - X2 - Y2);
                  k = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : g.y2 - U2 > l.height - Math.max(M, 10) ? l.height - Math.max(
                    M,
                    10
                  ) : g.y2 - U2) : g.y2 > l.height - Math.max(M, 10) ? l.height - Math.max(M, 10) : g.y2;
                  if (c && 0 < c.length)
                    for (M = 0; M < c.length; M++)
                      c[M] && c[M].labelAutoFit && (p2 = 0 > c[M].labelAngle ? Math.max(p2, y) : 0 === c[M].labelAngle ? Math.max(p2, y / 2) : p2, q = 0 > c[M].labelAngle || 0 === c[M].labelAngle ? p2 - X2 : q);
                  if (b && 0 < b.length)
                    for (M = 0; M < b.length; M++)
                      b[M] && b[M].labelAutoFit && (p2 = b[M].lineCoordinates.x2, q = p2 - X2);
                  d[f].lineCoordinates = { x1: p2 + Q2, y1: h2, x2: p2 + Q2, y2: k, height: Math.abs(k - h2) };
                  "inside" === d[f].labelPlacement && 0 < f && (d[f].lineCoordinates.x1 = d[f].lineCoordinates.x1 + (x[f] - (d[f]._titleTextBlock ? d[f]._titleTextBlock.height : 0) - 2) - d[f].tickLength - (d[f].stripLineLabelEffectiveWidth || 0), d[f].lineCoordinates.x2 = d[f].lineCoordinates.x1 + d[f].lineThickness / 2);
                  "inside" === d[f].tickPlacement && 0 < f && (d[f].lineCoordinates.x1 += d[f].tickLength, d[f].lineCoordinates.x2 = d[f].lineCoordinates.x1 + d[f].lineThickness / 2);
                  d[f].bounds = { x1: d[f].lineCoordinates.x1, y1: h2, x2: p2 + x[f] + Q2, y2: k, width: p2 - q, height: k - h2 };
                  d[f].bounds.width = d[f].bounds.x2 - d[f].bounds.x1;
                  d[f].title && (d[f]._titleTextBlock.maxWidth = 0 < d[f].titleMaxWidth && d[f].titleMaxWidth < d[f].lineCoordinates.height ? d[f].titleMaxWidth : d[f].lineCoordinates.height);
                  d[f].calculateValueToPixelConversionParameters();
                  d[f].calculateBreaksSizeInValues();
                  Q2 += x[f] + d[f].margin;
                }
              for (f = 0; f < r.length; f++)
                "axisY" === r[f].type && (r[f].calculateValueToPixelConversionParameters(), r[f].calculateBreaksSizeInValues());
              if (0 < w3) {
                if (a && 0 < a.length)
                  for (f = 0; f < a.length; f++)
                    u2 = O2[w3 - 1][f] === O2[w3][f] ? true : false;
                else
                  u2 = true;
                if (d && 0 < d.length)
                  for (f = 0; f < d.length; f++)
                    I2 = R3[w3 - 1][f] === R3[w3][f] ? true : false;
                else
                  I2 = true;
                if (c && 0 < c.length)
                  for (f = 0; f < c.length; f++)
                    K2 = D2[w3 - 1][f] === D2[w3][f] ? true : false;
                else
                  K2 = true;
                if (b && 0 < b.length)
                  for (f = 0; f < b.length; f++)
                    N = s[w3 - 1][f] === s[w3][f] ? true : false;
                else
                  N = true;
              }
              if (u2 && I2 && K2 && N)
                break;
              w3++;
            }
            if (c && 0 < c.length)
              for (f = 0; f < c.length; f++)
                c[f].calculateStripLinesThicknessInValues(), c[f].calculateBreaksInPixels();
            if (b && 0 < b.length)
              for (f = 0; f < b.length; f++)
                b[f].calculateStripLinesThicknessInValues(), b[f].calculateBreaksInPixels();
            if (a && 0 < a.length)
              for (f = 0; f < a.length; f++)
                a[f].calculateStripLinesThicknessInValues(), a[f].calculateBreaksInPixels();
            if (d && 0 < d.length)
              for (f = 0; f < d.length; f++)
                d[f].calculateStripLinesThicknessInValues(), d[f].calculateBreaksInPixels();
          }
        };
        D.render = function(a, d, c, b, e) {
          var g = a[0] ? a[0].chart : d[0].chart;
          e = g.ctx;
          g.alignVerticalAxes && g.alignVerticalAxes();
          e.save();
          e.beginPath();
          a && a.length && e.rect(5, a[0].bounds.y1, a[0].chart.width - 10, a[a.length - 1].bounds.y2);
          d && d.length && e.rect(5, d[d.length - 1].bounds.y1, d[0].chart.width - 10, d[0].bounds.y2);
          e.clip();
          if (a && 0 < a.length)
            for (var h2 = 0; h2 < a.length; h2++)
              a[h2].renderLabelsTicksAndTitle();
          if (d && 0 < d.length)
            for (h2 = 0; h2 < d.length; h2++)
              d[h2].renderLabelsTicksAndTitle();
          e.restore();
          if (c && 0 < c.length)
            for (h2 = 0; h2 < c.length; h2++)
              c[h2].renderLabelsTicksAndTitle();
          if (b && 0 < b.length)
            for (h2 = 0; h2 < b.length; h2++)
              b[h2].renderLabelsTicksAndTitle();
          g.preparePlotArea();
          g = g.plotArea;
          e.save();
          e.beginPath();
          e.rect(g.x1, g.y1, Math.abs(g.x2 - g.x1), Math.abs(g.y2 - g.y1));
          e.clip();
          if (a && 0 < a.length)
            for (h2 = 0; h2 < a.length; h2++)
              a[h2].renderStripLinesOfThicknessType("value");
          if (d && 0 < d.length)
            for (h2 = 0; h2 < d.length; h2++)
              d[h2].renderStripLinesOfThicknessType("value");
          if (c && 0 < c.length)
            for (h2 = 0; h2 < c.length; h2++)
              c[h2].renderStripLinesOfThicknessType("value");
          if (b && 0 < b.length)
            for (h2 = 0; h2 < b.length; h2++)
              b[h2].renderStripLinesOfThicknessType("value");
          if (a && 0 < a.length)
            for (h2 = 0; h2 < a.length; h2++)
              a[h2].renderInterlacedColors();
          if (d && 0 < d.length)
            for (h2 = 0; h2 < d.length; h2++)
              d[h2].renderInterlacedColors();
          if (c && 0 < c.length)
            for (h2 = 0; h2 < c.length; h2++)
              c[h2].renderInterlacedColors();
          if (b && 0 < b.length)
            for (h2 = 0; h2 < b.length; h2++)
              b[h2].renderInterlacedColors();
          e.restore();
          if (a && 0 < a.length)
            for (h2 = 0; h2 < a.length; h2++)
              a[h2].renderGrid(), u && (a[h2].createMask(), a[h2].renderBreaksBackground());
          if (d && 0 < d.length)
            for (h2 = 0; h2 < d.length; h2++)
              d[h2].renderGrid(), u && (d[h2].createMask(), d[h2].renderBreaksBackground());
          if (c && 0 < c.length)
            for (h2 = 0; h2 < c.length; h2++)
              c[h2].renderGrid(), u && (c[h2].createMask(), c[h2].renderBreaksBackground());
          if (b && 0 < b.length)
            for (h2 = 0; h2 < b.length; h2++)
              b[h2].renderGrid(), u && (b[h2].createMask(), b[h2].renderBreaksBackground());
          if (a && 0 < a.length)
            for (h2 = 0; h2 < a.length; h2++)
              a[h2].renderAxisLine();
          if (d && 0 < d.length)
            for (h2 = 0; h2 < d.length; h2++)
              d[h2].renderAxisLine();
          if (c && 0 < c.length)
            for (h2 = 0; h2 < c.length; h2++)
              c[h2].renderAxisLine();
          if (b && 0 < b.length)
            for (h2 = 0; h2 < b.length; h2++)
              b[h2].renderAxisLine();
          if (a && 0 < a.length)
            for (h2 = 0; h2 < a.length; h2++)
              a[h2].renderStripLinesOfThicknessType("pixel");
          if (d && 0 < d.length)
            for (h2 = 0; h2 < d.length; h2++)
              d[h2].renderStripLinesOfThicknessType("pixel");
          if (c && 0 < c.length)
            for (h2 = 0; h2 < c.length; h2++)
              c[h2].renderStripLinesOfThicknessType("pixel");
          if (b && 0 < b.length)
            for (h2 = 0; h2 < b.length; h2++)
              b[h2].renderStripLinesOfThicknessType("pixel");
        };
        D.prototype.calculateStripLinesThicknessInValues = function() {
          for (var a = 0; a < this.stripLines.length; a++)
            if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
              var d = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue), c = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue), b = this.getApparentDifference(d, c);
              this.stripLines[a].value = this.convertPixelToValue(Math.abs(this.convertValueToPixel(d) + this.convertValueToPixel(c)) / 2);
              this.stripLines[a].thickness = b;
              this.stripLines[a]._thicknessType = "value";
            }
        };
        D.prototype.calculateBreaksSizeInValues = function() {
          for (var a = "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, d = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ? this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), b = this.scaleBreaks && !m(this.scaleBreaks.options.spacing), e, g = 0; g < d.length; g++)
            e = b || !m(d[g].options.spacing), d[g].spacing = Ta(d[g].spacing, a, 8, e ? 0.1 * a : 8, e ? 0 : 3) << 0, d[g].size = 0 > d[g].spacing ? 0 : Math.abs(d[g].spacing / c), this.logarithmic && (d[g].size = Math.pow(this.logarithmBase, d[g].size));
        };
        D.prototype.calculateBreaksInPixels = function() {
          if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
            var a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
            for (var d = 0; d < a.length && !(a[d].startValue > this.conversionParameters.maximum); d++)
              a[d].endValue < this.conversionParameters.minimum || (m(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = d), a[d].startValue >= this.conversionParameters.minimum && (a[d].startPixel = this.convertValueToPixel(a[d].startValue), this.scaleBreaks.lastBreakIndex = d), a[d].endValue <= this.conversionParameters.maximum && (a[d].endPixel = this.convertValueToPixel(a[d].endValue)));
          }
        };
        D.prototype.renderLabelsTicksAndTitle = function() {
          var a = this, d = false, c = 0, b = 0, e = 1, g = 0;
          0 !== this.labelAngle && 360 !== this.labelAngle && (e = 1.2);
          if ("undefined" === typeof this.options.interval) {
            if ("bottom" === this._position || "top" === this._position)
              if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                for (var c = [], e = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, h2, m2 = this.viewportMaximum, p2 = this.lineCoordinates.width / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                  n = this._labels[k];
                  if (n.position < this.viewportMinimum)
                    break;
                  n.position > this.viewportMaximum || !(k === this._labels.length - 1 || h2 < Math.log(m2 / n.position) * p2 / e) || (c.push(n), m2 = n.position, h2 = n.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
                }
                this._labels = c;
              } else {
                for (k = 0; k < this._labels.length; k++)
                  n = this._labels[k], n.position < this.viewportMinimum || (h2 = n.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += h2);
                c > this.lineCoordinates.width * e && this.labelAutoFit && (d = true);
              }
            if ("left" === this._position || "right" === this._position)
              if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                for (var c = [], l, m2 = this.viewportMaximum, p2 = this.lineCoordinates.height / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                  n = this._labels[k];
                  if (n.position < this.viewportMinimum)
                    break;
                  n.position > this.viewportMaximum || !(k === this._labels.length - 1 || l < Math.log(m2 / n.position) * p2) || (c.push(n), m2 = n.position, l = n.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)));
                }
                this._labels = c;
              } else {
                for (k = 0; k < this._labels.length; k++)
                  n = this._labels[k], n.position < this.viewportMinimum || (l = n.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += l);
                b > this.lineCoordinates.height * e && this.labelAutoFit && (d = true);
              }
          }
          this.logarithmic && (!this.equidistantInterval && this.labelAutoFit) && this._labels.sort(function(a2, b2) {
            return a2.position - b2.position;
          });
          var k = 0, n, r;
          if ("bottom" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (r = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (r.x << 0) + 0.5 : r.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, r.y << 0), this.ctx.lineTo(b, r.y + this.tickLength << 0), this.ctx.stroke()), d && 0 !== g++ % 2 && this.labelAutoFit || (0 === n.textBlock.angle ? (r.x -= n.textBlock.width / 2, r.y = "inside" === this.labelPlacement ? r.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + n.textBlock.height - n.textBlock.fontSize / 2) : r.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + n.textBlock.fontSize / 2 + 5) : (r.x = "inside" === this.labelPlacement ? 0 > this.labelAngle ? r.x : r.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : r.x - (0 > this.labelAngle ? n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), r.y = "inside" === this.labelPlacement ? 0 > this.labelAngle ? r.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : r.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - Math.abs(n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5) : r.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + Math.abs(0 > this.labelAngle ? n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), n.textBlock.x = r.x, n.textBlock.y = r.y));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                if (n = a._labels[k], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (r = a.getPixelCoordinatesOnAxis(n.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (r.x << 0) + 0.5 : r.x << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(b2, r.y << 0);
                  a.ctx.lineTo(b2, r.y - a.tickLength << 0);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height + this._titleTextBlock.fontSize / 2 - 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("top" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (r = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (r.x << 0) + 0.5 : r.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, r.y << 0), this.ctx.lineTo(b, r.y - this.tickLength << 0), this.ctx.stroke()), d && 0 !== g++ % 2 && this.labelAutoFit || (0 === n.textBlock.angle ? (r.x -= n.textBlock.width / 2, r.y = "inside" === this.labelPlacement ? r.y + this.labelFontSize / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : r.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + n.textBlock.height - n.textBlock.fontSize / 2)) : (r.x = "inside" === this.labelPlacement ? 0 < this.labelAngle ? r.x : r.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : r.x + (n.textBlock.height - this.labelFontSize) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), r.y = "inside" === this.labelPlacement ? 0 < this.labelAngle ? r.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : r.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : r.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + ((n.textBlock.height - n.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))), n.textBlock.x = r.x, n.textBlock.y = r.y));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                if (n = a._labels[k], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (r = a.getPixelCoordinatesOnAxis(n.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (r.x << 0) + 0.5 : r.x << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(b2, r.y << 0);
                  a.ctx.lineTo(b2, r.y + a.tickLength << 0);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + this._titleTextBlock.fontSize / 2 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("left" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (r = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (r.y << 0) + 0.5 : r.y << 0, this.ctx.beginPath(), this.ctx.moveTo(r.x << 0, b), this.ctx.lineTo(r.x - this.tickLength << 0, b), this.ctx.stroke()), d && 0 !== g++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (n.textBlock.y = r.y, n.textBlock.x = "inside" === this.labelPlacement ? r.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : r.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : (n.textBlock.y = "inside" === this.labelPlacement ? r.y : r.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), n.textBlock.x = "inside" === this.labelPlacement ? r.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : 0 < this.labelAngle ? r.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5 : r.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (n.textBlock.height - n.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength))));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                if (n = a._labels[k], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (r = a.getPixelCoordinatesOnAxis(n.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (r.y << 0) + 0.5 : r.y << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(r.x << 0, b2);
                  a.ctx.lineTo(r.x + a.tickLength << 0, b2);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 + this._titleTextBlock.fontSize / 2 + 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          } else if ("right" === this._position) {
            for (k = 0; k < this._labels.length; k++)
              n = this._labels[k], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (r = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (r.y << 0) + 0.5 : r.y << 0, this.ctx.beginPath(), this.ctx.moveTo(r.x << 0, b), this.ctx.lineTo(r.x + this.tickLength << 0, b), this.ctx.stroke()), d && 0 !== g++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (n.textBlock.y = r.y, n.textBlock.x = "inside" === this.labelPlacement ? r.x - n.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : r.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : (n.textBlock.y = "inside" === this.labelPlacement ? r.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0 > this.labelAngle ? r.y : r.y - (n.textBlock.height - n.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), n.textBlock.x = "inside" === this.labelPlacement ? r.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : 0 < this.labelAngle ? r.x + (n.textBlock.height - n.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) : r.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5)));
            "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                if (n = a._labels[k], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (r = a.getPixelCoordinatesOnAxis(n.position), a.tickThickness)) {
                  a.ctx.lineWidth = a.tickThickness;
                  a.ctx.strokeStyle = a.tickColor;
                  var b2 = 1 === a.ctx.lineWidth % 2 ? (r.y << 0) + 0.5 : r.y << 0;
                  a.ctx.save();
                  a.ctx.beginPath();
                  a.ctx.moveTo(r.x << 0, b2);
                  a.ctx.lineTo(r.x - a.tickLength << 0, b2);
                  a.ctx.stroke();
                  a.ctx.restore();
                }
            }, this);
            this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - this._titleTextBlock.fontSize / 2 - 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(true));
          }
          g = 0;
          if ("inside" === this.labelPlacement)
            this.chart.addEventListener("dataAnimationIterationEnd", function() {
              for (k = 0; k < a._labels.length; k++)
                n = a._labels[k], n.position < a.viewportMinimum || (n.position > a.viewportMaximum || d && 0 !== g++ % 2 && a.labelAutoFit) || (a.ctx.save(), a.ctx.beginPath(), n.textBlock.render(true), a.ctx.restore());
            }, this);
          else
            for (k = 0; k < this._labels.length; k++)
              n = this._labels[k], n.position < this.viewportMinimum || (n.position > this.viewportMaximum || d && 0 !== g++ % 2 && this.labelAutoFit) || n.textBlock.render(true);
        };
        D.prototype.renderInterlacedColors = function() {
          var a = this.chart.plotArea.ctx, d, c, b = this.chart.plotArea, e = 0;
          d = true;
          if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++)
              d ? (d = this.getPixelCoordinatesOnAxis(this._labels[e].position), c = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(Math.min(c.x, d.x), b.y1, Math.abs(c.x - d.x), Math.abs(b.y1 - b.y2)), d = false) : d = true;
          else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
            for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++)
              d ? (c = this.getPixelCoordinatesOnAxis(this._labels[e].position), d = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(b.x1, Math.min(c.y, d.y), Math.abs(b.x1 - b.x2), Math.abs(d.y - c.y)), d = false) : d = true;
          a.beginPath();
        };
        D.prototype.renderStripLinesOfThicknessType = function(a) {
          if (this.stripLines && 0 < this.stripLines.length && a) {
            var d = this, c, b, e = 0, g = 0, h2 = false;
            b = false;
            for (var p2 = [], u2 = [], k = false, e = 0; e < this.stripLines.length; e++) {
              var l = this.stripLines[e];
              l._thicknessType === a && ("pixel" === a && (l.value < this.viewportMinimum || l.value > this.viewportMaximum || m(l.value) || isNaN(this.range)) || "value" === a && (l.startValue <= this.viewportMinimum && l.endValue <= this.viewportMinimum || l.startValue >= this.viewportMaximum && l.endValue >= this.viewportMaximum || m(l.startValue) || m(l.endValue) || isNaN(this.range)) || p2.push(l));
            }
            for (e = 0; e < this._stripLineLabels.length; e++)
              if (l = this.stripLines[e], c = this._stripLineLabels[e], !(c.position < this.viewportMinimum || c.position > this.viewportMaximum || isNaN(this.range)))
                if (b = this.getPixelCoordinatesOnAxis(c.position), "outside" === c.stripLine.labelPlacement) {
                  l && (this.ctx.strokeStyle = l.color, this.ctx.lineWidth = "pixel" === l._thicknessType ? l.thickness : this.tickThickness);
                  if ("bottom" === this._position) {
                    var n = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0;
                    this.ctx.beginPath();
                    this.ctx.moveTo(n, b.y << 0);
                    this.ctx.lineTo(n, b.y + this.tickLength << 0);
                    this.ctx.stroke();
                    0 === this.labelAngle ? (b.x -= c.textBlock.width / 2, b.y += this.tickLength + c.textBlock.fontSize / 2 + 5) : (b.x -= 0 > this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, b.y += this.tickLength + Math.abs(0 > this.labelAngle ? c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5));
                  } else
                    "top" === this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0, this.ctx.beginPath(), this.ctx.moveTo(n, b.y << 0), this.ctx.lineTo(n, b.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (b.x -= c.textBlock.width / 2, b.y -= this.tickLength + c.textBlock.height - c.textBlock.fontSize / 2) : (b.x += (c.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), b.y -= this.tickLength + (c.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))) : "left" === this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, n), this.ctx.lineTo(b.x - this.tickLength << 0, n), this.ctx.stroke(), 0 === this.labelAngle ? b.x = b.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (b.y -= c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), b.x = 0 < this.labelAngle ? b.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : b.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength)) : "right" === this._position && (n = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0, this.ctx.beginPath(), this.ctx.moveTo(b.x << 0, n), this.ctx.lineTo(b.x + this.tickLength << 0, n), this.ctx.stroke(), 0 === this.labelAngle ? b.x = b.x + this.tickLength + 5 : (b.y = 0 > this.labelAngle ? b.y : b.y - (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), b.x = 0 < this.labelAngle ? b.x + (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength : b.x + this.tickLength + 5));
                  c.textBlock.x = b.x;
                  c.textBlock.y = b.y;
                  u2.push(c);
                } else
                  l._thicknessType === a && (c.textBlock.angle = -90, "bottom" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), b.x - c.textBlock.height - l.thickness / 2 > this.chart.plotArea.x1 ? m(l.startValue) ? b.x -= c.textBlock.height - c.textBlock.fontSize / 2 + l.thickness / 2 : b.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : (c.textBlock.angle = 90, m(l.startValue) ? b.x += c.textBlock.height - c.textBlock.fontSize / 2 + l.thickness / 2 : b.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2), b.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y1 + c.textBlock.width + 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), b.x - c.textBlock.height - l.thickness / 2 > this.chart.plotArea.x1 ? m(l.startValue) ? b.x -= c.textBlock.height - c.textBlock.fontSize / 2 + l.thickness / 2 : b.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : (c.textBlock.angle = 90, m(l.startValue) ? b.x += c.textBlock.height - c.textBlock.fontSize / 2 + l.thickness / 2 : b.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2), b.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + c.textBlock.width + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y2 - c.textBlock.width - 3) : "left" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), b.y - c.textBlock.height - l.thickness / 2 > this.chart.plotArea.y1 ? m(l.startValue) ? b.y -= c.textBlock.height - c.textBlock.fontSize / 2 + l.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : m(l.startValue) ? b.y += c.textBlock.height - c.textBlock.fontSize / 2 + l.thickness / 2 : b.y += c.textBlock.height / 2 - c.textBlock.fontSize + 3, b.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x2 - c.textBlock.width - 3) : "right" === this._position && (c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), b.y - c.textBlock.height - l.thickness / 2 > this.chart.plotArea.y1 ? m(l.startValue) ? b.y -= c.textBlock.height - c.textBlock.fontSize / 2 + l.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 : m(l.startValue) ? b.y += c.textBlock.height - c.textBlock.fontSize / 2 + l.thickness / 2 : b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3, b.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x1 + 3), c.textBlock.x = b.x, c.textBlock.y = b.y, u2.push(c));
            if (!k) {
              b = false;
              this.ctx.save();
              this.ctx.beginPath();
              this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
              this.ctx.clip();
              for (e = 0; e < p2.length; e++)
                l = p2[e], l.showOnTop ? h2 || (h2 = true, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                  this.ctx.save();
                  this.ctx.beginPath();
                  this.ctx.rect(
                    this.chart.plotArea.x1,
                    this.chart.plotArea.y1,
                    this.chart.plotArea.width,
                    this.chart.plotArea.height
                  );
                  this.ctx.clip();
                  for (g = 0; g < p2.length; g++)
                    l = p2[g], l.showOnTop && l.render();
                  this.ctx.restore();
                }, l)) : l.render();
              for (e = 0; e < u2.length; e++)
                c = u2[e], c.stripLine.showOnTop ? b || (b = true, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                  for (g = 0; g < u2.length; g++)
                    c = u2[g], "inside" === c.stripLine.labelPlacement && c.stripLine.showOnTop && (d.ctx.save(), d.ctx.beginPath(), d.ctx.rect(d.chart.plotArea.x1, d.chart.plotArea.y1, d.chart.plotArea.width, d.chart.plotArea.height), d.ctx.clip(), c.textBlock.render(true), d.ctx.restore());
                }, c.textBlock)) : "inside" === c.stripLine.labelPlacement && c.textBlock.render(true);
              this.ctx.restore();
              k = true;
            }
            if (k)
              for (b = false, e = 0; e < u2.length; e++)
                c = u2[e], "outside" === c.stripLine.labelPlacement && c.textBlock.render(true);
          }
        };
        D.prototype.renderBreaksBackground = function() {
          this.chart._breaksCanvas && (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas) && (this.chart._breaksCanvasCtx.save(), this.chart._breaksCanvasCtx.beginPath(), this.chart._breaksCanvasCtx.rect(
            this.chart.plotArea.x1,
            this.chart.plotArea.y1,
            this.chart.plotArea.width,
            this.chart.plotArea.height
          ), this.chart._breaksCanvasCtx.clip(), this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx.restore());
        };
        D.prototype.createMask = function() {
          if (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length) {
            var a = this.scaleBreaks._appliedBreaks;
            u ? (this.maskCanvas = wa(this.chart.width, this.chart.height), this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas = this.chart.plotArea.canvas, this.maskCtx = this.chart.plotArea.ctx);
            this.maskCtx.save();
            this.maskCtx.beginPath();
            this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
            this.maskCtx.clip();
            for (var d = 0; d < a.length; d++)
              a[d].endValue < this.viewportMinimum || (a[d].startValue > this.viewportMaximum || isNaN(this.range)) || a[d].render(this.maskCtx);
            this.maskCtx.restore();
          }
        };
        D.prototype.renderCrosshair = function(a, d) {
          isFinite(this.minimum) && isFinite(this.maximum) && this.crosshair.render(a, d);
        };
        D.prototype.showCrosshair = function(a) {
          m(a) || (a < this.viewportMinimum || a > this.viewportMaximum) || ("top" === this._position || "bottom" === this._position ? this.crosshair.render(this.convertValueToPixel(a), null, a) : this.crosshair.render(null, this.convertValueToPixel(a), a));
        };
        D.prototype.renderGrid = function() {
          if (this.gridThickness && 0 < this.gridThickness) {
            var a = this.chart.ctx;
            a.save();
            var d, c = this.chart.plotArea;
            a.lineWidth = this.gridThickness;
            a.strokeStyle = this.gridColor;
            a.setLineDash && a.setLineDash(I(this.gridDashType, this.gridThickness));
            if ("bottom" === this._position || "top" === this._position)
              for (b = 0; b < this._labels.length; b++)
                this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), d = this.getPixelCoordinatesOnAxis(this._labels[b].position), d = 1 === a.lineWidth % 2 ? (d.x << 0) + 0.5 : d.x << 0, a.moveTo(d, c.y1 << 0), a.lineTo(d, c.y2 << 0), a.stroke());
            else if ("left" === this._position || "right" === this._position)
              for (var b = 0; b < this._labels.length; b++)
                this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), d = this.getPixelCoordinatesOnAxis(this._labels[b].position), d = 1 === a.lineWidth % 2 ? (d.y << 0) + 0.5 : d.y << 0, a.moveTo(c.x1 << 0, d), a.lineTo(c.x2 << 0, d), a.stroke());
            a.restore();
          }
        };
        D.prototype.renderAxisLine = function() {
          var a = this.chart.ctx, d = u ? this.chart._preRenderCtx : a, c = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)), b = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)), e, g;
          d.save();
          if ("bottom" === this._position || "top" === this._position) {
            if (this.lineThickness) {
              this.reversed ? (e = this.lineCoordinates.x2, g = this.lineCoordinates.x1) : (e = this.lineCoordinates.x1, g = this.lineCoordinates.x2);
              d.lineWidth = this.lineThickness;
              d.strokeStyle = this.lineColor ? this.lineColor : "black";
              d.setLineDash && d.setLineDash(I(this.lineDashType, this.lineThickness));
              var h2 = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
              d.beginPath();
              if (this.scaleBreaks && !m(this.scaleBreaks.firstBreakIndex))
                if (m(this.scaleBreaks.lastBreakIndex))
                  e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
                else
                  for (var p2 = this.scaleBreaks.firstBreakIndex; p2 <= this.scaleBreaks.lastBreakIndex; p2++)
                    d.moveTo(e, h2), d.lineTo(this.scaleBreaks._appliedBreaks[p2].startPixel + c, h2), e = this.scaleBreaks._appliedBreaks[p2].endPixel + b;
              e && (d.moveTo(e, h2), d.lineTo(g, h2));
              d.stroke();
            }
          } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
            this.reversed ? (e = this.lineCoordinates.y1, g = this.lineCoordinates.y2) : (e = this.lineCoordinates.y2, g = this.lineCoordinates.y1);
            d.lineWidth = this.lineThickness;
            d.strokeStyle = this.lineColor;
            d.setLineDash && d.setLineDash(I(this.lineDashType, this.lineThickness));
            h2 = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
            d.beginPath();
            if (this.scaleBreaks && !m(this.scaleBreaks.firstBreakIndex))
              if (m(this.scaleBreaks.lastBreakIndex))
                e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
              else
                for (p2 = this.scaleBreaks.firstBreakIndex; p2 <= this.scaleBreaks.lastBreakIndex; p2++)
                  d.moveTo(h2, e), d.lineTo(h2, this.scaleBreaks._appliedBreaks[p2].startPixel + b), e = this.scaleBreaks._appliedBreaks[p2].endPixel + c;
            e && (d.moveTo(h2, e), d.lineTo(h2, g));
            d.stroke();
          }
          u && (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), d.clearRect(
            0,
            0,
            this.chart.width,
            this.chart.height
          ));
          d.restore();
        };
        D.prototype.getPixelCoordinatesOnAxis = function(a) {
          var d = {};
          if ("bottom" === this._position || "top" === this._position)
            d.x = this.convertValueToPixel(a), d.y = this.lineCoordinates.y1;
          if ("left" === this._position || "right" === this._position)
            d.y = this.convertValueToPixel(a), d.x = this.lineCoordinates.x2;
          return d;
        };
        D.prototype.convertPixelToValue = function(a) {
          if ("undefined" === typeof a)
            return null;
          var d = 0, c = 0, b, d = true, e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
          if (this.logarithmic) {
            a = b = Math.pow(this.logarithmBase, (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
            if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
              for (c = 0; c < e.length; c++) {
                if (!(e[c].endValue < this.conversionParameters.minimum))
                  if (d)
                    if (e[c].startValue < this.conversionParameters.minimum) {
                      if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) < e[c].endValue) {
                        a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size));
                        break;
                      } else
                        a *= e[c].endValue / this.conversionParameters.minimum / Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)), b /= Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue));
                      d = false;
                    } else if (b > e[c].startValue / this.conversionParameters.minimum) {
                      b /= e[c].startValue / this.conversionParameters.minimum;
                      if (b < e[c].size) {
                        a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                        break;
                      } else
                        a *= e[c].endValue / e[c].startValue / e[c].size;
                      b /= e[c].size;
                      d = false;
                    } else
                      break;
                  else if (b > e[c].startValue / e[c - 1].endValue) {
                    b /= e[c].startValue / e[c - 1].endValue;
                    if (b < e[c].size) {
                      a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                      break;
                    } else
                      a *= e[c].endValue / e[c].startValue / e[c].size;
                    b /= e[c].size;
                  } else
                    break;
              }
            else
              for (c = e.length - 1; 0 <= c; c--)
                if (!(e[c].startValue > this.conversionParameters.minimum))
                  if (d)
                    if (e[c].endValue > this.conversionParameters.minimum) {
                      if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) > e[c].startValue) {
                        a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size));
                        break;
                      } else
                        a *= e[c].startValue / this.conversionParameters.minimum * Math.pow(e[c].size, Math.log(e[c].startValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)) * b, b *= Math.pow(e[c].size, Math.log(this.conversionParameters.minimum / e[c].startValue) / Math.log(e[c].endValue / e[c].startValue));
                      d = false;
                    } else if (b < e[c].endValue / this.conversionParameters.minimum) {
                      b /= e[c].endValue / this.conversionParameters.minimum;
                      if (b > 1 / e[c].size) {
                        a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                        break;
                      } else
                        a /= e[c].endValue / e[c].startValue / e[c].size;
                      b *= e[c].size;
                      d = false;
                    } else
                      break;
                  else if (b < e[c].endValue / e[c + 1].startValue) {
                    b /= e[c].endValue / e[c + 1].startValue;
                    if (b > 1 / e[c].size) {
                      a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                      break;
                    } else
                      a /= e[c].endValue / e[c].startValue / e[c].size;
                    b *= e[c].size;
                  } else
                    break;
            d = a * this.viewportMinimum;
          } else {
            a = b = (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit;
            if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
              for (c = 0; c < e.length; c++) {
                if (!(e[c].endValue < this.conversionParameters.minimum))
                  if (d)
                    if (e[c].startValue < this.conversionParameters.minimum) {
                      if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size < e[c].endValue) {
                        a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) / e[c].size;
                        break;
                      } else
                        a += e[c].endValue - this.conversionParameters.minimum - e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue), b -= e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue);
                      d = false;
                    } else if (b > e[c].startValue - this.conversionParameters.minimum) {
                      b -= e[c].startValue - this.conversionParameters.minimum;
                      if (b < e[c].size) {
                        a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                        break;
                      } else
                        a += e[c].endValue - e[c].startValue - e[c].size;
                      b -= e[c].size;
                      d = false;
                    } else
                      break;
                  else if (b > e[c].startValue - e[c - 1].endValue) {
                    b -= e[c].startValue - e[c - 1].endValue;
                    if (b < e[c].size) {
                      a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                      break;
                    } else
                      a += e[c].endValue - e[c].startValue - e[c].size;
                    b -= e[c].size;
                  } else
                    break;
              }
            else
              for (c = e.length - 1; 0 <= c; c--)
                if (!(e[c].startValue > this.conversionParameters.minimum))
                  if (d)
                    if (e[c].endValue > this.conversionParameters.minimum)
                      if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size > e[c].startValue) {
                        a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) / e[c].size;
                        break;
                      } else
                        a += e[c].startValue - this.conversionParameters.minimum + e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), b += e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), d = false;
                    else if (b < e[c].endValue - this.conversionParameters.minimum) {
                      b -= e[c].endValue - this.conversionParameters.minimum;
                      if (b > -1 * e[c].size) {
                        a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                        break;
                      } else
                        a -= e[c].endValue - e[c].startValue - e[c].size;
                      b += e[c].size;
                      d = false;
                    } else
                      break;
                  else if (b < e[c].endValue - e[c + 1].startValue) {
                    b -= e[c].endValue - e[c + 1].startValue;
                    if (b > -1 * e[c].size) {
                      a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                      break;
                    } else
                      a -= e[c].endValue - e[c].startValue - e[c].size;
                    b += e[c].size;
                  } else
                    break;
            d = this.conversionParameters.minimum + a;
          }
          return d;
        };
        D.prototype.convertValueToPixel = function(a) {
          a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
          return this.logarithmic ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + 0.5 << 0 : "axisX" === this.type ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5;
        };
        D.prototype.getApparentDifference = function(a, d, c, b) {
          var e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          if (this.logarithmic) {
            c = m(c) ? d / a : c;
            for (var g = 0; g < e.length && !(d < e[g].startValue); g++)
              a > e[g].endValue || (a <= e[g].startValue && d >= e[g].endValue ? c = c / e[g].endValue * e[g].startValue * e[g].size : a >= e[g].startValue && d >= e[g].endValue ? c = c / e[g].endValue * a * Math.pow(e[g].size, Math.log(e[g].endValue / a) / Math.log(e[g].endValue / e[g].startValue)) : a <= e[g].startValue && d <= e[g].endValue ? c = c / d * e[g].startValue * Math.pow(e[g].size, Math.log(d / e[g].startValue) / Math.log(e[g].endValue / e[g].startValue)) : !b && (a > e[g].startValue && d < e[g].endValue) && (c = a * Math.pow(e[g].size, Math.log(d / a) / Math.log(e[g].endValue / e[g].startValue))));
          } else
            for (c = m(c) ? Math.abs(d - a) : c, g = 0; g < e.length && !(d < e[g].startValue); g++)
              a > e[g].endValue || (a <= e[g].startValue && d >= e[g].endValue ? c = c - e[g].endValue + e[g].startValue + e[g].size : a > e[g].startValue && d >= e[g].endValue ? c = c - e[g].endValue + a + e[g].size * (e[g].endValue - a) / (e[g].endValue - e[g].startValue) : a <= e[g].startValue && d < e[g].endValue ? c = c - d + e[g].startValue + e[g].size * (d - e[g].startValue) / (e[g].endValue - e[g].startValue) : !b && (a > e[g].startValue && d < e[g].endValue) && (c = a + e[g].size * (d - a) / (e[g].endValue - e[g].startValue)));
          return c;
        };
        D.prototype.setViewPortRange = function(a, d) {
          this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, d);
          this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, d);
        };
        D.prototype.getXValueAt = function(a) {
          if (!a)
            return null;
          var d = null;
          "left" === this._position ? d = this.convertPixelToValue(a.y) : "bottom" === this._position && (d = this.convertPixelToValue(a.x));
          return d;
        };
        D.prototype.calculateValueToPixelConversionParameters = function(a) {
          a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
          var d = { pixelPerUnit: null, minimum: null, reference: null }, c = this.lineCoordinates.width, b = this.lineCoordinates.height, c = "bottom" === this._position || "top" === this._position ? c : b, b = Math.abs(this.range);
          if (this.logarithmic)
            for (var e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++)
              this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b / this.viewportMaximum * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)));
          else
            for (e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++)
              this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b - this.viewportMaximum + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)));
          d.minimum = this.viewportMinimum;
          d.maximum = this.viewportMaximum;
          d.range = b;
          if ("bottom" === this._position || "top" === this._position)
            this.logarithmic ? (d.lnLogarithmBase = Math.log(this.logarithmBase), d.pixelPerUnit = (this.reversed ? -1 : 1) * c * d.lnLogarithmBase / Math.log(Math.abs(b))) : d.pixelPerUnit = (this.reversed ? -1 : 1) * c / Math.abs(b), d.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
          if ("left" === this._position || "right" === this._position)
            this.logarithmic ? (d.lnLogarithmBase = Math.log(this.logarithmBase), d.pixelPerUnit = (this.reversed ? 1 : -1) * c * d.lnLogarithmBase / Math.log(Math.abs(b))) : d.pixelPerUnit = (this.reversed ? 1 : -1) * c / Math.abs(b), d.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
          this.conversionParameters = d;
        };
        D.prototype.calculateAxisParameters = function() {
          if (this.logarithmic)
            this.calculateLogarithmicAxisParameters();
          else {
            var a = this.chart.layoutManager.getFreeSpace(), d = false, c = false;
            "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
            var a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40, b = 4;
            "axisX" === this.type && (b = 600 > this.maxWidth ? 8 : 6);
            var a = Math.max(b, Math.floor(this.maxWidth / a)), e, g, h2, b = 0;
            !m(this.options.viewportMinimum) && (!m(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
            if (m(this.options.viewportMinimum) && !m(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum))
              this.viewportMinimum = this.sessionVariables.newViewportMinimum;
            else if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
              this.viewportMinimum = this.minimum;
            if (m(this.options.viewportMaximum) && !m(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum))
              this.viewportMaximum = this.sessionVariables.newViewportMaximum;
            else if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
              this.viewportMaximum = this.maximum;
            if (this.scaleBreaks) {
              for (b = 0; b < this.scaleBreaks._appliedBreaks.length; b++)
                if ((!m(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue || !m(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[b].startValue || !m(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue) && (!m(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue || !m(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[b].endValue || !m(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue)) {
                  this.scaleBreaks._appliedBreaks.splice(
                    b,
                    1
                  );
                  break;
                }
            }
            if ("axisX" === this.type) {
              if (this.dataSeries && 0 < this.dataSeries.length)
                for (e = 0; e < this.dataSeries.length; e++)
                  "dateTime" === this.dataSeries[e].xValueType && (c = true);
              e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin;
              g = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
              0 === g - e && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, g += b, e -= b);
              Infinity !== this.dataInfo.minDiff ? h2 = this.dataInfo.minDiff : 1 < g - e ? h2 = 0.5 * Math.abs(g - e) : (h2 = 1, c && (d = true));
            } else
              "axisY" === this.type && (e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, g = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(e) || isFinite(g) ? isFinite(e) ? isFinite(g) || (g = e) : e = g : (g = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), 0 === e && 0 === g ? (g += 9, e = 0) : 0 === g - e ? (b = Math.min(Math.abs(0.01 * Math.abs(g)), 5), g += b, e -= b) : e > g ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(g, e, null, true)), 5), 0 <= g ? e = g - b : g = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, g, null, true)), 0.05), 0 !== g && (g += b), 0 !== e && (e -= b)), h2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - e ? 0.5 * Math.abs(g - e) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < e && (e = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > g && (g = 0));
            b = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? e : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? g : this.viewportMaximum, null, true);
            if ("axisX" === this.type && c) {
              this.valueType = "dateTime";
              this.intervalType || (b / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : b / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : b / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : b / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : b / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : b / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : b / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : b / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : b / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : b / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : b / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : b / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : b / (1 * U.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : b / (2 * U.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : b / (5 * U.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : b / (10 * U.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : b / (15 * U.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : b / (20 * U.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : b / (30 * U.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : b / (1 * U.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : b / (2 * U.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : b / (5 * U.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : b / (10 * U.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : b / (15 * U.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : b / (20 * U.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : b / (30 * U.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : b / (1 * U.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : b / (2 * U.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : b / (3 * U.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : b / (6 * U.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : b / (1 * U.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : b / (2 * U.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : b / (4 * U.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : b / (1 * U.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : b / (2 * U.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : b / (3 * U.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : b / (1 * U.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : b / (2 * U.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : b / (3 * U.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : b / (6 * U.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = b / (1 * U.yearDuration) <= a ? 1 : b / (2 * U.yearDuration) <= a ? 2 : b / (4 * U.yearDuration) <= a ? 4 : Math.floor(D.getNiceNumber(b / (a - 1), true) / U.yearDuration), this.intervalType = "year"));
              if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
                this.viewportMinimum = e - h2 / 2;
              if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
                this.viewportMaximum = g + h2 / 2;
              d ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
              this.valueFormatString || (this.valueFormatString = this.autoValueFormatString);
            } else {
              this.intervalType = "number";
              b = D.getNiceNumber(b, false);
              this.interval = this.options && 0 < this.options.interval ? this.options.interval : D.getNiceNumber(b / (a - 1), true);
              if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
                this.viewportMinimum = "axisX" === this.type ? e - h2 / 2 : Math.floor(e / this.interval) * this.interval;
              if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
                this.viewportMaximum = "axisX" === this.type ? g + h2 / 2 : Math.ceil(g / this.interval) * this.interval;
              0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = D.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), true)));
            }
            if (null === this.minimum || null === this.maximum)
              if ("axisX" === this.type ? (e = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === g - e && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, g += b, e -= b), h2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - e ? 0.5 * Math.abs(g - e) : 1) : "axisY" === this.type && (e = null !== this.minimum ? this.minimum : this.dataInfo.min, g = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(e) || isFinite(g) ? 0 === e && 0 === g ? (g += 9, e = 0) : 0 === g - e ? (b = Math.min(Math.abs(0.01 * Math.abs(g)), 5), g += b, e -= b) : e > g ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(g, e, null, true)), 5), 0 <= g ? e = g - b : g = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, g, null, true)), 0.05), 0 !== g && (g += b), 0 !== e && (e -= b)) : (g = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), h2 = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < g - e ? 0.5 * Math.abs(g - e) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < e && (e = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > g && (g = 0)), Math.abs(this.getApparentDifference(e, g, null, true)), "axisX" === this.type && c) {
                this.valueType = "dateTime";
                if (null === this.minimum || isNaN(this.minimum))
                  this.minimum = e - h2 / 2, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum);
                if (null === this.maximum || isNaN(this.maximum))
                  this.maximum = g + h2 / 2, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum);
              } else
                this.intervalType = this.valueType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? e - h2 / 2 : Math.floor(e / this.interval) * this.interval, this.minimum = Math.min(
                  this.minimum,
                  null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum
                )), null === this.maximum && (this.maximum = "axisX" === this.type ? g + h2 / 2 : Math.ceil(g / this.interval) * this.interval, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
            m(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
            m(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
            this.range = this.viewportMaximum - this.viewportMinimum;
            this.intervalStartPosition = "axisX" === this.type && c ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
            this.valueFormatString || (this.valueFormatString = D.generateValueFormatString(this.range, 2));
          }
        };
        D.prototype.calculateLogarithmicAxisParameters = function() {
          var a = this.chart.layoutManager.getFreeSpace(), d = Math.log(this.logarithmBase), c;
          "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
          var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3), b, e, g, h2;
          h2 = 1;
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
            this.viewportMinimum = this.minimum;
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
            this.viewportMaximum = this.maximum;
          if (this.scaleBreaks) {
            for (h2 = 0; h2 < this.scaleBreaks._appliedBreaks.length; h2++)
              if ((!m(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[h2].startValue || !m(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[h2].startValue || !m(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[h2].startValue) && (!m(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[h2].endValue || !m(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[h2].endValue || !m(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[h2].endValue)) {
                this.scaleBreaks._appliedBreaks.splice(h2, 1);
                break;
              }
          }
          "axisX" === this.type ? (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 1 === e / b && (h2 = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), e *= h2, b /= h2), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= b && !isFinite(e) ? (e = "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1) : 0 >= b ? b = e : isFinite(e) || (e = b), 1 === b && 1 === e ? (e *= this.logarithmBase - 1 / this.logarithmBase, b = 1) : 1 === e / b ? (h2 = Math.min(e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), e *= h2, b /= h2) : b > e ? (h2 = Math.min(b / e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), 1 <= e ? b = e / h2 : e = b * h2) : (h2 = Math.min(e / b * Math.pow(
            this.logarithmBase,
            0.01
          ), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= h2), 1 !== b && (b /= h2)), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < b && (b = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > e && (e = 1));
          h2 = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
          var p2 = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
          this.intervalType = "number";
          h2 = Math.pow(this.logarithmBase, D.getNiceNumber(Math.abs(Math.log(h2) / d), false));
          this.options && 0 < this.options.interval ? this.interval = this.options.interval : (this.interval = D.getNiceExponent(Math.log(h2) / d / (a - 1), true), c = D.getNiceNumber(p2 / (a - 1), true));
          if (null === this.viewportMinimum || isNaN(this.viewportMinimum))
            this.viewportMinimum = "axisX" === this.type ? b / Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / d / this.interval));
          if (null === this.viewportMaximum || isNaN(this.viewportMaximum))
            this.viewportMaximum = "axisX" === this.type ? e * Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / d / this.interval));
          1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this.options && "undefined" === typeof this.options.interval && (this.interval = D.getNiceExponent(Math.ceil(Math.log(h2) / d) / (a - 1)), c = D.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), true)));
          if (null === this.minimum || null === this.maximum)
            "axisX" === this.type ? (b = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === e / b && (h2 = Math.pow(
              this.logarithmBase,
              "undefined" === typeof this.options.interval ? 0.4 : this.options.interval
            ), e *= h2, b /= h2), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(b) || isFinite(e) ? 1 === b && 1 === e ? (e *= this.logarithmBase, b /= this.logarithmBase) : 1 === e / b ? (h2 = Math.pow(this.logarithmBase, this.interval), e *= h2, b /= h2) : b > e ? (h2 = Math.min(0.01 * (b / e), 5), 1 <= e ? b = e / h2 : e = b * h2) : (h2 = Math.min(e / b * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= h2), 1 !== b && (b /= h2)) : (e = "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1), g = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < b && (b = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > e && (e = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? b / Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / d / this.interval)), m(null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum) || (this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum))), null === this.maximum && (this.maximum = "axisX" === this.type ? e * Math.sqrt(g) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / d / this.interval)), m(null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum) || (this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum))), 1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
          this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
          this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
          this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum || this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum || this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
          b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval);
          this.range = this.viewportMaximum / this.viewportMinimum;
          this.noTicks = a;
          if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
            for (d = Math.floor(this.viewportMinimum / c + 0.5) * c; d < this.viewportMinimum; )
              d += c;
            this.equidistantInterval = false;
            this.intervalStartPosition = d;
            this.interval = c;
          } else
            this.options.interval || (c = Math.ceil(this.interval), this.range > this.interval && (this.interval = c, b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval))), this.equidistantInterval = true, this.intervalStartPosition = b;
          if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum)) {
            d = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
            if (isNaN(d) || !isFinite(d))
              d = 2;
            if (2 < d)
              for (h2 = 0; h2 < d - 2; h2++)
                this.valueFormatString += "#";
          }
        };
        D.generateValueFormatString = function(a, d) {
          var c = "#,##0.", b = d;
          1 > a && (b += Math.floor(Math.abs(Math.log(a) / Math.LN10)), isNaN(b) || !isFinite(b)) && (b = d);
          for (var e = 0; e < b; e++)
            c += "#";
          return c;
        };
        D.getNiceExponent = function(a, d) {
          var c = Math.floor(Math.log(a) / Math.LN10), b = a / Math.pow(10, c), b = 0 > c ? 1 >= b ? 1 : 5 >= b ? 5 : 10 : Math.max(Math.floor(b), 1);
          return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20));
        };
        D.getNiceNumber = function(a, d) {
          var c = Math.floor(Math.log(a) / Math.LN10), b = a / Math.pow(10, c), b = d ? 1.5 > b ? 1 : 3 > b ? 2 : 7 > b ? 5 : 10 : 1 >= b ? 1 : 2 >= b ? 2 : 5 >= b ? 5 : 10;
          return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20));
        };
        D.prototype.getLabelStartPoint = function() {
          var a = U[this.intervalType + "Duration"] * this.interval, a = new Date(Math.floor(this.viewportMinimum / a) * a);
          if ("millisecond" !== this.intervalType)
            if ("second" === this.intervalType)
              0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
            else if ("minute" === this.intervalType) {
              if (0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("hour" === this.intervalType) {
              if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("day" === this.intervalType) {
              if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("week" === this.intervalType) {
              if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else if ("month" === this.intervalType) {
              if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
            } else
              "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
          return a;
        };
        qa(fa2, K);
        qa(da2, K);
        da2.prototype.createUserOptions = function(a) {
          if ("undefined" !== typeof a || this.options._isPlaceholder) {
            var d = 0;
            this.parent.options._isPlaceholder && this.parent.createUserOptions();
            this.options._isPlaceholder || (Ea(this.parent[this.optionsName]), d = this.parent.options[this.optionsName].indexOf(this.options));
            this.options = "undefined" === typeof a ? {} : a;
            this.parent.options[this.optionsName][d] = this.options;
          }
        };
        da2.prototype.render = function(a) {
          if (0 !== this.spacing || 0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness)) {
            var d = this.ctx, c = this.ctx.globalAlpha;
            this.ctx = a || this.ctx;
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
            this.ctx.clip();
            var b = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue), e = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
            this.ctx.strokeStyle = this.lineColor;
            this.ctx.fillStyle = this.color;
            this.ctx.beginPath();
            this.ctx.globalAlpha = 1;
            Z(this.id);
            var g, h2, m2, p2, k, l;
            a = Math.max(this.spacing, 3);
            var n = Math.max(0, this.lineThickness);
            this.ctx.lineWidth = n;
            this.ctx.setLineDash && this.ctx.setLineDash(I(this.lineDashType, n));
            if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position)
              if (b = 1 === n % 2 ? (b.x << 0) + 0.5 : b.x << 0, h2 = 1 === n % 2 ? (e.x << 0) + 0.5 : e.x << 0, "top" === this.scaleBreaks.parent._position ? (e = this.chart.plotArea.y1, m2 = this.chart.plotArea.y2 + n / 2 + 0.5 << 0) : (e = this.chart.plotArea.y2, m2 = this.chart.plotArea.y1 - n / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: b - n / 2, y1: e, x2: h2 + n / 2, y2: m2 }, this.ctx.moveTo(b, e), "straight" === this.type || "top" === this.scaleBreaks.parent._position && 0 >= a || "bottom" === this.scaleBreaks.parent._position && 0 <= a)
                this.ctx.lineTo(b, m2), this.ctx.lineTo(h2, m2), this.ctx.lineTo(h2, e);
              else if ("wavy" === this.type) {
                p2 = b;
                k = e;
                g = 0.5;
                l = (m2 - k) / a / 3;
                for (var r = 0; r < l; r++)
                  this.ctx.bezierCurveTo(p2 + g * a, k + a, p2 + g * a, k + 2 * a, p2, k + 3 * a), k += 3 * a, g *= -1;
                this.ctx.bezierCurveTo(p2 + g * a, k + a, p2 + g * a, k + 2 * a, p2, k + 3 * a);
                p2 = h2;
                g *= -1;
                this.ctx.lineTo(p2, k);
                for (r = 0; r < l; r++)
                  this.ctx.bezierCurveTo(p2 + g * a, k - a, p2 + g * a, k - 2 * a, p2, k - 3 * a), k -= 3 * a, g *= -1;
              } else {
                if ("zigzag" === this.type) {
                  g = -1;
                  k = e + a;
                  p2 = b + a;
                  l = (m2 - k) / a / 2;
                  for (r = 0; r < l; r++)
                    this.ctx.lineTo(p2, k), p2 += 2 * g * a, k += 2 * a, g *= -1;
                  this.ctx.lineTo(p2, k);
                  p2 += h2 - b;
                  for (r = 0; r < l + 1; r++)
                    this.ctx.lineTo(p2, k), p2 += 2 * g * a, k -= 2 * a, g *= -1;
                  this.ctx.lineTo(p2 + g * a, k + a);
                }
              }
            else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position) {
              if (e = 1 === n % 2 ? (e.y << 0) + 0.5 : e.y << 0, m2 = 1 === n % 2 ? (b.y << 0) + 0.5 : b.y << 0, "left" === this.scaleBreaks.parent._position ? (b = this.chart.plotArea.x1, h2 = this.chart.plotArea.x2 + n / 2 + 0.5 << 0) : (b = this.chart.plotArea.x2, h2 = this.chart.plotArea.x1 - n / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: b, y1: e - n / 2, x2: h2, y2: m2 + n / 2 }, this.ctx.moveTo(b, e), "straight" === this.type || "left" === this.scaleBreaks.parent._position && 0 >= a || "right" === this.scaleBreaks.parent._position && 0 <= a)
                this.ctx.lineTo(h2, e), this.ctx.lineTo(h2, m2), this.ctx.lineTo(b, m2);
              else if ("wavy" === this.type) {
                p2 = b;
                k = e;
                g = 0.5;
                l = (h2 - p2) / a / 3;
                for (r = 0; r < l; r++)
                  this.ctx.bezierCurveTo(p2 + a, k + g * a, p2 + 2 * a, k + g * a, p2 + 3 * a, k), p2 += 3 * a, g *= -1;
                this.ctx.bezierCurveTo(p2 + a, k + g * a, p2 + 2 * a, k + g * a, p2 + 3 * a, k);
                k = m2;
                g *= -1;
                this.ctx.lineTo(p2, k);
                for (r = 0; r < l; r++)
                  this.ctx.bezierCurveTo(p2 - a, k + g * a, p2 - 2 * a, k + g * a, p2 - 3 * a, k), p2 -= 3 * a, g *= -1;
              } else if ("zigzag" === this.type) {
                g = 1;
                k = e - a;
                p2 = b + a;
                l = (h2 - p2) / a / 2;
                for (r = 0; r < l; r++)
                  this.ctx.lineTo(p2, k), k += 2 * g * a, p2 += 2 * a, g *= -1;
                this.ctx.lineTo(p2, k);
                k += m2 - e;
                for (r = 0; r < l + 1; r++)
                  this.ctx.lineTo(
                    p2,
                    k
                  ), k += 2 * g * a, p2 -= 2 * a, g *= -1;
                this.ctx.lineTo(p2 + a, k + g * a);
              }
            }
            0 < n && this.ctx.stroke();
            this.ctx.closePath();
            this.ctx.globalAlpha = this.fillOpacity;
            this.ctx.globalCompositeOperation = "destination-over";
            this.ctx.fill();
            this.ctx.restore();
            this.ctx.globalAlpha = c;
            this.ctx = d;
          }
        };
        qa(P, K);
        P.prototype.createUserOptions = function(a) {
          if ("undefined" !== typeof a || this.options._isPlaceholder) {
            var d = 0;
            this.parent.options._isPlaceholder && this.parent.createUserOptions();
            this.options._isPlaceholder || (Ea(this.parent.stripLines), d = this.parent.options.stripLines.indexOf(this.options));
            this.options = "undefined" === typeof a ? {} : a;
            this.parent.options.stripLines[d] = this.options;
          }
        };
        P.prototype.render = function() {
          this.ctx.save();
          var a = this.parent.getPixelCoordinatesOnAxis(this.value), d = Math.abs("pixel" === this._thicknessType ? this.thickness : Math.abs(this.parent.convertValueToPixel(this.endValue) - this.parent.convertValueToPixel(this.startValue)));
          if (0 < d) {
            var c = null === this.opacity ? 1 : this.opacity;
            this.ctx.strokeStyle = this.color;
            this.ctx.beginPath();
            var b = this.ctx.globalAlpha;
            this.ctx.globalAlpha = c;
            Z(this.id);
            var e, g, h2, m2;
            this.ctx.lineWidth = d;
            this.ctx.setLineDash && this.ctx.setLineDash(I(this.lineDashType, d));
            if ("bottom" === this.parent._position || "top" === this.parent._position)
              e = g = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, h2 = this.chart.plotArea.y1, m2 = this.chart.plotArea.y2, this.bounds = { x1: e - d / 2, y1: h2, x2: g + d / 2, y2: m2 };
            else if ("left" === this.parent._position || "right" === this.parent._position)
              h2 = m2 = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, e = this.chart.plotArea.x1, g = this.chart.plotArea.x2, this.bounds = { x1: e, y1: h2 - d / 2, x2: g, y2: m2 + d / 2 };
            this.ctx.moveTo(e, h2);
            this.ctx.lineTo(g, m2);
            this.ctx.stroke();
            this.ctx.globalAlpha = b;
          }
          this.ctx.restore();
        };
        qa(ea2, K);
        ea2.prototype.showAt = function(a) {
          if (!this.enabled)
            return false;
          var d = this.chart, c = false;
          d.resetOverlayedCanvas();
          d.clearedOverlayedCanvas = this.parent.type;
          this.chart.renderCrosshairs(this.parent);
          if ("xySwapped" === d.plotInfo.axisPlacement)
            if ("bottom" === this.parent._position)
              for (var b = 0; b < d.axisY.length; b++)
                this.parent === d.axisY[b] && (d.axisY[b]._crosshairValue = a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum ? a : null);
            else if ("top" === this.parent._position)
              for (b = 0; b < d.axisY2.length; b++)
                this.parent === d.axisY2[b] && (d.axisY2[b]._crosshairValue = a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum ? a : null);
            else if ("left" === this.parent._position)
              for (b = 0; b < d.axisX.length; b++)
                this.parent === d.axisX[b] && (d.axisX[b]._crosshairValue = a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum ? a : null);
            else {
              if ("right" === this.parent._position)
                for (b = 0; b < d.axisX2.length; b++)
                  this.parent === d.axisX2[b] && (d.axisX2[b]._crosshairValue = a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum ? a : null);
            }
          else if ("bottom" === this.parent._position)
            for (b = 0; b < d.axisX.length; b++)
              this.parent === d.axisX[b] && (d.axisX[b]._crosshairValue = a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum ? a : null);
          else if ("top" === this.parent._position)
            for (b = 0; b < d.axisX2.length; b++)
              this.parent === d.axisX2[b] && (d.axisX2[b]._crosshairValue = a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum ? a : null);
          else if ("left" === this.parent._position)
            for (b = 0; b < d.axisY.length; b++)
              this.parent === d.axisY[b] && (d.axisY[b]._crosshairValue = a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum ? a : null);
          else if ("right" === this.parent._position)
            for (b = 0; b < d.axisY2.length; b++)
              this.parent === d.axisY2[b] && (d.axisY2[b]._crosshairValue = a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum ? a : null);
          for (b = 0; b < d.axisX.length; b++)
            a = d.axisX[b]._crosshairValue, d.axisX[b].crosshair && (d.axisX[b].crosshair.enabled && !m(a) && a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum) && (d.axisX[b].showCrosshair(a), d.axisX[b].crosshair._updatedValue = a, this === d.axisX[b].crosshair && (c = true));
          for (b = 0; b < d.axisX2.length; b++)
            a = d.axisX2[b]._crosshairValue, d.axisX2[b].crosshair && (d.axisX2[b].crosshair.enabled && !m(a) && a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum) && (d.axisX2[b].showCrosshair(a), d.axisX2[b].crosshair._updatedValue = a, this === d.axisX2[b].crosshair && (c = true));
          for (b = 0; b < d.axisY.length; b++)
            a = d.axisY[b]._crosshairValue, d.axisY[b].crosshair && (d.axisY[b].crosshair.enabled && !m(a) && a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum) && (d.axisY[b].showCrosshair(a), d.axisY[b].crosshair._updatedValue = a, this === d.axisY[b].crosshair && (c = true));
          for (b = 0; b < d.axisY2.length; b++)
            a = d.axisY2[b]._crosshairValue, d.axisY2[b].crosshair && (d.axisY2[b].crosshair.enabled && !m(a) && a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum) && (d.axisY2[b].showCrosshair(a), d.axisY2[b].crosshair._updatedValue = a, this === d.axisY2[b].crosshair && (c = true));
          this.chart.toolTip && this.chart.toolTip._entries && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
          return c;
        };
        ea2.prototype.hide = function() {
          this.chart.resetOverlayedCanvas();
          this.chart.renderCrosshairs(this.parent);
          this._hidden = true;
        };
        ea2.prototype.render = function(a, d, c) {
          var b, e, g, h2, p2 = null, u2 = null, k = null, l = "";
          this.valueFormatString || ("dateTime" === this.parent.valueType ? this.valueFormatString = this.parent.valueFormatString : (k = 0, k = "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 < this.parent.range ? 0 : 500 < this.chart.width && 25 > this.parent.range ? 2 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0) : 50 < this.parent.range ? 0 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0), this.valueFormatString = D.generateValueFormatString(this.parent.range, k)));
          var n = null === this.opacity ? 1 : this.opacity, r = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness), f = this.chart.overlaidCanvasCtx, w3 = f.globalAlpha;
          f.beginPath();
          f.strokeStyle = this.color;
          f.lineWidth = r;
          f.save();
          this.labelFontSize = Math.abs(m(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize);
          this.labelMaxWidth = m(this.options.labelMaxWidth) ? 0.3 * this.chart.width : this.labelMaxWidth;
          this.labelMaxHeight = m(this.options.labelWrap) || this.labelWrap ? 0.3 * this.chart.height : 2 * this.labelFontSize;
          0 < r && f.setLineDash && f.setLineDash(I(this.lineDashType, r));
          k = new la(f, {
            x: 0,
            y: 0,
            padding: { top: 2, right: 3, bottom: 2, left: 4 },
            backgroundColor: this.labelBackgroundColor,
            borderColor: this.labelBorderColor,
            borderThickness: this.labelBorderThickness,
            cornerRadius: this.labelCornerRadius,
            maxWidth: this.labelMaxWidth,
            maxHeight: this.labelMaxHeight,
            angle: this.labelAngle,
            text: l,
            horizontalAlign: "left",
            fontSize: this.labelFontSize,
            fontFamily: this.labelFontFamily,
            fontWeight: this.labelFontWeight,
            fontColor: this.labelFontColor,
            fontStyle: this.labelFontStyle,
            textBaseline: "middle"
          });
          if (this.snapToDataPoint) {
            var z3 = 0, l = [];
            if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
              var x = null;
              if ("bottom" === this.parent._position || "top" === this.parent._position)
                z3 = this.parent.dataSeries[0].axisX.convertPixelToValue({ y: d });
              else if ("left" === this.parent._position || "right" === this.parent._position)
                z3 = this.parent.convertPixelToValue({ y: d });
              for (var s = 0; s < this.parent.dataSeries.length; s++)
                (x = this.parent.dataSeries[s].getDataPointAtX(z3, true)) && 0 <= x.index && (x.dataSeries = this.parent.dataSeries[s], null !== x.dataPoint.y && x.dataSeries.visible && l.push(x));
              x = null;
              if (0 === l.length)
                return;
              l.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              var y = x = 0;
              yPercent = cumulativeY = 0;
              for (var z3 = Infinity, v, s = 0; s < l.length; s++) {
                if ("rangeBar" === l[s].dataSeries.type || "error" === l[s].dataSeries.type) {
                  if (l[s].dataPoint.y)
                    for (var E3 = 0; E3 < l[s].dataPoint.y.length; E3++)
                      y = Math.abs(a - this.parent.convertValueToPixel(l[s].dataPoint.y[E3])), y <= z3 && (z3 = y, x = s);
                } else
                  "stackedBar" === l[s].dataSeries.type ? (cumulativeY = l[s].dataSeries.dataPointEOs[l[s].index].cumulativeY, y = Math.abs(a - this.parent.convertValueToPixel(cumulativeY)), y <= z3 && (z3 = y, x = s)) : "stackedBar100" === l[s].dataSeries.type ? (y = l[0].dataPoint.x.getTime ? l[0].dataPoint.x.getTime() : l[0].dataPoint.x, m(v) && (v = Math.abs(a - this.parent.convertValueToPixel(100 * (l[0].dataSeries.dataPointEOs[l[0].index].cumulativeY / l[0].dataSeries.plotUnit.dataPointYSums[y])))), cumulativeY = l[s].dataSeries.dataPointEOs[l[s].index].cumulativeY, y = l[s].dataPoint.x.getTime ? l[s].dataPoint.x.getTime() : l[s].dataPoint.x, yPercent = 100 * (cumulativeY / l[s].dataSeries.plotUnit.dataPointYSums[y]), y = Math.abs(a - this.parent.convertValueToPixel(yPercent)), y <= v && (v = y, x = s)) : (y = Math.abs(a - this.parent.convertValueToPixel(l[s].dataPoint.y)), y <= z3 && (z3 = y, x = s));
                m(v) || (z3 = Math.min(z3, v));
              }
              v = l[x];
              s = 0;
              if ("bottom" === this.parent._position || "top" === this.parent._position) {
                if ("rangeBar" === v.dataSeries.type || "error" === v.dataSeries.type) {
                  z3 = Math.abs(a - this.parent.convertValueToPixel(v.dataPoint.y[0]));
                  for (l = 0; l < v.dataPoint.y.length; l++)
                    y = Math.abs(a - this.parent.convertValueToPixel(v.dataPoint.y[l])), y < z3 && (z3 = y, s = l);
                  p2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0;
                  this.value = v.dataPoint.y[s];
                  k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.y[s] }) : m(this.options.label) ? ga(m(c) ? v.dataPoint.y[s] : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
                } else
                  "stackedBar" === v.dataSeries.type ? (z3 = Math.abs(a - this.parent.convertValueToPixel(l[0].dataPoint.y)), cumulativeY = v.dataSeries.dataPointEOs[v.index].cumulativeY, p2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(cumulativeY) << 0) + 0.5 : this.parent.convertValueToPixel(cumulativeY) << 0, this.value = cumulativeY, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.y }) : m(this.options.label) ? ga(m(c) ? v.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label) : "stackedBar100" === v.dataSeries.type ? (z3 = Math.abs(a - this.parent.convertValueToPixel(l[0].dataPoint.y)), cumulativeY = v.dataSeries.dataPointEOs[v.index].cumulativeY, y = v.dataPoint.x.getTime ? v.dataPoint.x.getTime() : v.dataPoint.x, yPercent = 100 * (cumulativeY / v.dataSeries.plotUnit.dataPointYSums[y]), p2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(yPercent) << 0) + 0.5 : this.parent.convertValueToPixel(yPercent) << 0, this.value = yPercent, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: yPercent }) : m(this.options.label) ? ga(
                    m(c) ? yPercent : c,
                    this.valueFormatString,
                    this.chart._cultureInfo
                  ) : this.label) : (p2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y) << 0, this.value = v.dataPoint.y, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.y }) : m(this.options.label) ? ga(m(c) ? v.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label);
                b = e = p2;
                g = this.chart.plotArea.y1;
                h2 = this.chart.plotArea.y2;
                this.bounds = { x1: b - r / 2, y1: g, x2: e + r / 2, y2: h2 };
                k.x = b - k.measureText().width / 2;
                k.x + k.width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.width : k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
                k.y = this.parent.lineCoordinates.y2 + ("top" === this.parent._position ? -k.height + this.parent.tickLength : k.fontSize / 2) + 2;
                k.y + k.height > this.chart.bounds.y2 ? k.y = this.chart.bounds.y2 - k.height : k.y < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1);
              } else if ("left" === this.parent._position || "right" === this.parent._position) {
                g = h2 = u2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.x) << 0;
                b = this.chart.plotArea.x1;
                e = this.chart.plotArea.x2;
                this.bounds = { x1: b, y1: g - r / 2, x2: e, y2: h2 + r / 2 };
                s = false;
                if (this.parent.labels)
                  for (z3 = Math.ceil(this.parent.interval), l = 0; l < this.parent.viewportMaximum; l += z3)
                    if (this.parent.labels[l])
                      s = true;
                    else {
                      s = false;
                      break;
                    }
                if (s) {
                  if ("axisX" === this.parent.type)
                    for (z3 = this.parent.convertPixelToValue({ y: d }), x = null, s = 0; s < this.parent.dataSeries.length; s++)
                      (x = this.parent.dataSeries[s].getDataPointAtX(
                        z3,
                        true
                      )) && 0 <= x.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x }) : m(this.options.label) ? x.dataPoint.label : this.label);
                } else
                  k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x }) : m(this.options.label) ? ga(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x }) : m(this.options.label) ? Da(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label;
                this.value = v.dataPoint.x;
                k.y = h2 + k.fontSize / 2 - k.measureText().height / 2 + 2;
                k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
              }
            } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
              z3 = this.parent.convertPixelToValue({ x: a });
              for (s = 0; s < this.parent.dataSeries.length; s++)
                (x = this.parent.dataSeries[s].getDataPointAtX(z3, true)) && 0 <= x.index && (x.dataSeries = this.parent.dataSeries[s], null !== x.dataPoint.y && x.dataSeries.visible && l.push(x));
              if (0 === l.length)
                return;
              l.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              v = l[0];
              b = e = p2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.x) << 0;
              g = this.chart.plotArea.y1;
              h2 = this.chart.plotArea.y2;
              this.bounds = { x1: b - r / 2, y1: g, x2: e + r / 2, y2: h2 };
              s = false;
              if (this.parent.labels)
                for (z3 = Math.ceil(this.parent.interval), l = 0; l < this.parent.viewportMaximum; l += z3)
                  if (this.parent.labels[l])
                    s = true;
                  else {
                    s = false;
                    break;
                  }
              if (s) {
                if ("axisX" === this.parent.type)
                  for (z3 = this.parent.convertPixelToValue({ x: a }), x = null, s = 0; s < this.parent.dataSeries.length; s++)
                    (x = this.parent.dataSeries[s].getDataPointAtX(z3, true)) && 0 <= x.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x }) : m(this.options.label) ? x.dataPoint.label : this.label);
              } else
                k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x }) : m(this.options.label) ? ga(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x }) : m(this.options.label) ? Da(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label;
              this.value = v.dataPoint.x;
              k.x = b - k.measureText().width / 2;
              k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
              k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
              "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
            } else if ("left" === this.parent._position || "right" === this.parent._position) {
              !m(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && (z3 = this.parent.dataSeries[0].axisX.convertPixelToValue({ x: a }));
              for (s = 0; s < this.parent.dataSeries.length; s++)
                (x = this.parent.dataSeries[s].getDataPointAtX(z3, true)) && 0 <= x.index && (x.dataSeries = this.parent.dataSeries[s], null !== x.dataPoint.y && x.dataSeries.visible && l.push(x));
              if (0 === l.length)
                return;
              l.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              y = x = 0;
              z3 = Infinity;
              for (s = 0; s < l.length; s++) {
                if ("rangeColumn" === l[s].dataSeries.type || "rangeArea" === l[s].dataSeries.type || "error" === l[s].dataSeries.type || "rangeSplineArea" === l[s].dataSeries.type || "candlestick" === l[s].dataSeries.type || "ohlc" === l[s].dataSeries.type || "boxAndWhisker" === l[s].dataSeries.type) {
                  if (l[s].dataPoint.y)
                    for (E3 = 0; E3 < l[s].dataPoint.y.length; E3++)
                      y = Math.abs(d - this.parent.convertValueToPixel(l[s].dataPoint.y[E3])), y <= z3 && (z3 = y, x = s);
                } else
                  "stackedColumn" === l[s].dataSeries.type ? (b = l[s].dataSeries.dataPointEOs[l[s].index].cumulativeY, y = Math.abs(d - this.parent.convertValueToPixel(b)), y <= z3 && (z3 = y, x = s)) : "stackedArea" === l[s].dataSeries.type ? (b = l[s].dataSeries.dataPointEOs[l[s].index].cumulativeY, y = Math.abs(d - this.parent.convertValueToPixel(b)), y <= z3 && (z3 = y, x = s)) : "stackedColumn100" === l[s].dataSeries.type || "stackedArea100" === l[s].dataSeries.type ? (y = l[0].dataPoint.x.getTime ? l[0].dataPoint.x.getTime() : l[0].dataPoint.x, m(v) && (v = Math.abs(d - this.parent.convertValueToPixel(100 * (l[0].dataSeries.dataPointEOs[l[0].index].cumulativeY / l[0].dataSeries.plotUnit.dataPointYSums[y])))), "stackedColumn100" === l[s].dataSeries.type ? (u2 = l[s].dataSeries.dataPointEOs[l[s].index].cumulativeY, y = l[s].dataPoint.x.getTime ? l[s].dataPoint.x.getTime() : l[s].dataPoint.x, b = 100 * (u2 / l[s].dataSeries.plotUnit.dataPointYSums[y]), y = Math.abs(d - this.parent.convertValueToPixel(b)), y <= v && (v = y, x = s)) : "stackedArea100" === l[s].dataSeries.type && (u2 = l[s].dataSeries.dataPointEOs[l[s].index].cumulativeY, y = l[s].dataPoint.x.getTime ? l[s].dataPoint.x.getTime() : l[s].dataPoint.x, b = 100 * (u2 / l[s].dataSeries.plotUnit.dataPointYSums[y]), y = Math.abs(d - this.parent.convertValueToPixel(b)), y <= v && (v = y, x = s))) : "waterfall" === l[s].dataSeries.type ? (y = Math.abs(d - this.parent.convertValueToPixel(l[s].dataSeries.dataPointEOs[l[s].index].cumulativeSum)), y <= z3 && (v = z3 = y, x = s)) : (y = Math.abs(d - this.parent.convertValueToPixel(l[s].dataPoint.y)), y <= z3 && (z3 = y, x = s));
                m(v) || (z3 = Math.min(z3, v));
              }
              v = l[x];
              s = 0;
              if ("rangeColumn" === v.dataSeries.type || "rangeArea" === v.dataSeries.type || "error" === v.dataSeries.type || "rangeSplineArea" === v.dataSeries.type || "candlestick" === v.dataSeries.type || "ohlc" === v.dataSeries.type || "boxAndWhisker" === v.dataSeries.type) {
                z3 = Math.abs(d - this.parent.convertValueToPixel(v.dataPoint.y[0]));
                for (l = 0; l < v.dataPoint.y.length; l++)
                  y = Math.abs(d - this.parent.convertValueToPixel(v.dataPoint.y[l])), y < z3 && (z3 = y, s = l);
                u2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0;
                k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.y[s] }) : m(this.options.label) ? ga(m(c) ? v.dataPoint.y[s] : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
                this.value = v.dataPoint.y[s];
              } else
                "stackedColumn" === v.dataSeries.type ? (b = v.dataSeries.dataPointEOs[v.index].cumulativeY, u2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: v.dataPoint.y
                }) : m(this.options.label) ? ga(m(c) ? v.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "stackedArea" === v.dataSeries.type ? (b = v.dataSeries.dataPointEOs[v.index].cumulativeY, u2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.y }) : m(this.options.label) ? ga(m(c) ? v.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "stackedColumn100" === v.dataSeries.type ? (u2 = v.dataSeries.dataPointEOs[v.index].cumulativeY, y = v.dataPoint.x.getTime ? v.dataPoint.x.getTime() : v.dataPoint.x, b = 100 * (u2 / v.dataSeries.plotUnit.dataPointYSums[y]), u2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: b
                }) : m(this.options.label) ? ga(m(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "stackedArea100" === v.dataSeries.type ? (u2 = v.dataSeries.dataPointEOs[v.index].cumulativeY, y = v.dataPoint.x.getTime ? v.dataPoint.x.getTime() : v.dataPoint.x, b = 100 * (u2 / v.dataSeries.plotUnit.dataPointYSums[y]), u2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: b
                }) : m(this.options.label) ? ga(m(c) ? b : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = b) : "waterfall" === v.dataSeries.type ? (u2 = 1 === f.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataSeries.dataPointEOs[v.index].cumulativeSum) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataSeries.dataPointEOs[v.index].cumulativeSum) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: v.dataSeries.dataPointEOs[v.index].cumulativeSum
                }) : m(this.options.label) ? ga(m(c) ? v.dataSeries.dataPointEOs[v.index].cumulativeSum : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = v.dataSeries.dataPointEOs[v.index].cumulativeSum) : (u2 = 1 === f.lineWidth % 2 ? (m(a) ? d : this.parent.convertValueToPixel(v.dataPoint.y) << 0) + 0.5 : m(a) ? d : this.parent.convertValueToPixel(v.dataPoint.y) << 0, k.text = this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: m(c) ? v.dataPoint.y : c
                }) : m(this.options.label) ? ga(m(c) ? v.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = v.dataPoint.y);
              g = h2 = u2;
              b = this.chart.plotArea.x1;
              e = this.chart.plotArea.x2;
              this.bounds = { x1: b, y1: g - r / 2, x2: e, y2: h2 + r / 2 };
              k.y = h2 + k.fontSize / 2 - k.measureText().height / 2 + 2;
              k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
              "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
            }
            l = null;
            f.globalAlpha = n;
            if ("bottom" === this.parent._position || "top" === this.parent._position)
              "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1 + k.fontSize / 2), "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2), this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && 0 < r && (f.moveTo(b, g), f.lineTo(e, h2), f.stroke(), this._hidden = false);
            if ("left" === this.parent._position || "right" === this.parent._position)
              "left" === this.parent._position && k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.measureText().width), this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && 0 < r && (f.moveTo(b, g), f.lineTo(e, h2), f.stroke(), this._hidden = false);
          } else {
            if ("bottom" === this.parent._position || "top" === this.parent._position)
              b = e = p2 = 1 === f.lineWidth % 2 ? (a << 0) + 0.5 : a << 0, g = this.chart.plotArea.y1, h2 = this.chart.plotArea.y2, this.bounds = { x1: b - r / 2, y1: g, x2: e + r / 2, y2: h2 };
            else if ("left" === this.parent._position || "right" === this.parent._position)
              g = h2 = u2 = 1 === f.lineWidth % 2 ? (d << 0) + 0.5 : d << 0, b = this.chart.plotArea.x1, e = this.chart.plotArea.x2, this.bounds = { x1: b, y1: g - r / 2, x2: e, y2: h2 + r / 2 };
            if ("xySwapped" === this.chart.plotInfo.axisPlacement)
              if ("left" === this.parent._position || "right" === this.parent._position) {
                s = false;
                if (this.parent.labels)
                  for (z3 = Math.ceil(this.parent.interval), l = 0; l < this.parent.viewportMaximum; l += z3)
                    if (this.parent.labels[l])
                      s = true;
                    else {
                      s = false;
                      break;
                    }
                if (s) {
                  if ("axisX" === this.parent.type)
                    for (z3 = this.parent.convertPixelToValue({ y: d }), x = null, s = 0; s < this.parent.dataSeries.length; s++)
                      (x = this.parent.dataSeries[s].getDataPointAtX(z3, true)) && 0 <= x.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: m(c) ? this.parent.convertPixelToValue(a) : c }) : m(this.options.label) ? x.dataPoint.label : this.label);
                } else
                  k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: m(c) ? this.parent.convertPixelToValue(d) : c }) : m(this.options.label) ? ga(m(c) ? this.parent.convertPixelToValue(d) : c, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: m(c) ? this.parent.convertPixelToValue(d) : c }) : m(this.options.label) ? Da(m(c) ? this.parent.convertPixelToValue(d) : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
                k.y = d + k.fontSize / 2 - k.measureText().height / 2 + 2;
                k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x1 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
              } else {
                if ("bottom" === this.parent._position || "top" === this.parent._position)
                  k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: m(c) ? this.parent.convertPixelToValue(a) : c }) : m(this.options.label) ? ga(m(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label, k.x = b - k.measureText().width / 2, k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width), k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1), "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
              }
            else if ("bottom" === this.parent._position || "top" === this.parent._position) {
              s = false;
              l = "";
              if (this.parent.labels)
                for (z3 = Math.ceil(this.parent.interval), l = 0; l < this.parent.viewportMaximum; l += z3)
                  if (this.parent.labels[l])
                    s = true;
                  else {
                    s = false;
                    break;
                  }
              if (s) {
                if ("axisX" === this.parent.type)
                  for (z3 = this.parent.convertPixelToValue({ x: a }), x = null, s = 0; s < this.parent.dataSeries.length; s++)
                    (x = this.parent.dataSeries[s].getDataPointAtX(z3, true)) && 0 <= x.index && (k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: m(c) ? this.parent.convertPixelToValue(a) : c }) : m(this.options.label) ? m(c) ? x.dataPoint.label : c : this.label);
              } else
                k.text = "dateTime" !== this.parent.valueType || this.parent.logarithmic ? this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: m(c) ? 0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : "" : c }) : m(this.options.label) ? ga(m(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label : this.labelFormatter ? this.labelFormatter({
                  chart: this.chart,
                  axis: this.parent.options,
                  crosshair: this.options,
                  value: m(c) ? this.parent.convertPixelToValue(a) : c
                }) : m(this.options.label) ? Da(m(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo) : this.label;
              k.x = b - k.measureText().width / 2;
              k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
              k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
              "bottom" === this.parent._position ? k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2 : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
            } else if ("left" === this.parent._position || "right" === this.parent._position)
              k.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: m(c) ? this.parent.convertPixelToValue(d) : c }) : m(this.options.label) ? ga(m(c) ? this.parent.convertPixelToValue(d) : c, this.valueFormatString, this.chart._cultureInfo) : this.label, k.y = d + k.fontSize / 2 - k.measureText().height / 2 + 2, k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2 : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2), "left" === this.parent._position ? k.x = this.parent.lineCoordinates.x2 - k.measureText().width : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
            "left" === this.parent._position && k.x < this.chart.bounds.x1 ? k.x = this.chart.bounds.x1 : "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 ? k.x = this.chart.bounds.x2 - k.measureText().width : "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 ? k.y = this.chart.bounds.y1 + k.fontSize / 2 : "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2);
            f.globalAlpha = n;
            0 < r && (f.moveTo(b, g), f.lineTo(e, h2), f.stroke(), this._hidden = false);
            this.value = "bottom" === this.parent._position || "top" === this.parent._position ? this.parent.convertPixelToValue(a) : this.parent.convertPixelToValue(d);
          }
          if ("bottom" === this.parent._position || "top" === this.parent._position)
            this._updatedValue = this.parent.convertPixelToValue(p2);
          if ("left" === this.parent._position || "right" === this.parent._position)
            this._updatedValue = this.parent.convertPixelToValue(u2);
          this._textBlock = k;
          this._label = c;
          m(c) || this.renderLabel();
          f.restore();
          f.globalAlpha = w3;
        };
        ea2.prototype.renderLabel = function() {
          this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) && this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) && (m(this._textBlock) || (m(this._textBlock.text) || !("number" === typeof this._textBlock.text.valueOf() || 0 < this._textBlock.text.length) || this._hidden) || this._textBlock.render(true), m(this._label) && this.dispatchEvent("updated", { chart: this.chart, crosshair: this.options, axis: this.parent, value: this.value }, this.parent));
        };
        qa(W2, K);
        W2.prototype._initialize = function() {
          this.updateOption("updated");
          this.updateOption("hidden");
          if (this.enabled) {
            this.container = document.createElement("div");
            this.container.setAttribute(
              "class",
              "canvasjs-chart-tooltip"
            );
            this.container.style.position = "absolute";
            this.container.style.height = "auto";
            this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
            this.container.style.zIndex = "1000";
            this.container.style.pointerEvents = "none";
            this.container.style.display = "none";
            var a = document.createElement("div");
            a.style.width = "auto";
            a.style.height = "auto";
            a.style.minWidth = "50px";
            a.style.lineHeight = "normal";
            a.style.margin = "0px 0px 0px 0px";
            a.style.padding = "5px";
            a.style.fontFamily = "Calibri, Arial, Georgia, serif";
            a.style.fontWeight = "normal";
            a.style.fontStyle = u ? "italic" : "normal";
            a.style.fontSize = "14px";
            a.style.color = "#000000";
            a.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.1)";
            a.style.textAlign = "left";
            a.style.border = "2px solid gray";
            a.style.background = u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)";
            a.style.textIndent = "0px";
            a.style.whiteSpace = "nowrap";
            a.style.borderRadius = "5px";
            a.style.MozUserSelect = "none";
            a.style.WebkitUserSelect = "none";
            a.style.msUserSelect = "none";
            a.style.userSelect = "none";
            u || (a.style.filter = "alpha(opacity = 90)", a.style.filter = "progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666')");
            a.innerText = "Sample Tooltip";
            this.container.appendChild(a);
            this.contentDiv = this.container.firstChild;
            this.container.style.borderRadius = this.contentDiv.style.borderRadius;
            this.chart._canvasJSContainer.appendChild(this.container);
          }
        };
        W2.prototype.mouseMoveHandler = function(a, d) {
          this._lastUpdated && 4 > (/* @__PURE__ */ new Date()).getTime() - this._lastUpdated || (this._lastUpdated = (/* @__PURE__ */ new Date()).getTime(), this.chart.resetOverlayedCanvas(), this._updateToolTip(a, d), !this._updatedEventParameters || (isNaN(this._prevX) || isNaN(this._prevY)) || this.dispatchEvent("updated", this._updatedEventParameters, this));
        };
        W2.prototype._updateToolTip = function(a, d, c) {
          c = "undefined" === typeof c ? true : c;
          this.container || this._initialize();
          this.enabled || this.hide();
          if (!this.chart.disableToolTip) {
            if ("undefined" === typeof a || "undefined" === typeof d) {
              if (isNaN(this._prevX) || isNaN(this._prevY))
                return;
              a = this._prevX;
              d = this._prevY;
            } else
              this._prevX = a, this._prevY = d;
            var b = null, e = null, g = [], h2 = 0;
            if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
              var p2 = [];
              if (this.chart.axisX)
                for (var w3 = 0; w3 < this.chart.axisX.length; w3++) {
                  for (var h2 = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX[w3].convertPixelToValue({ y: d }) : this.chart.axisX[w3].convertPixelToValue({ x: a }), k = null, b = 0; b < this.chart.axisX[w3].dataSeries.length; b++)
                    (k = this.chart.axisX[w3].dataSeries[b].getDataPointAtX(h2, c)) && 0 <= k.index && (k.dataSeries = this.chart.axisX[w3].dataSeries[b], null !== k.dataPoint.y && k.dataSeries.visible && p2.push(k));
                  k = null;
                }
              if (this.chart.axisX2)
                for (w3 = 0; w3 < this.chart.axisX2.length; w3++) {
                  h2 = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX2[w3].convertPixelToValue({ y: d }) : this.chart.axisX2[w3].convertPixelToValue({ x: a });
                  k = null;
                  for (b = 0; b < this.chart.axisX2[w3].dataSeries.length; b++)
                    (k = this.chart.axisX2[w3].dataSeries[b].getDataPointAtX(h2, c)) && 0 <= k.index && (k.dataSeries = this.chart.axisX2[w3].dataSeries[b], null !== k.dataPoint.y && k.dataSeries.visible && p2.push(k));
                  k = null;
                }
              if (0 === p2.length)
                return;
              p2.sort(function(a2, b2) {
                return a2.distance - b2.distance;
              });
              c = p2[0];
              for (b = 0; b < p2.length; b++)
                p2[b].dataPoint.x.valueOf() === c.dataPoint.x.valueOf() && g.push(p2[b]);
              p2 = null;
            } else {
              if (b = this.chart.getDataPointAtXY(a, d, c))
                this.currentDataPointIndex = b.dataPointIndex, this.currentSeriesIndex = b.dataSeries.index;
              else if (u)
                if (b = $a(a, d, this.chart._eventManager.ghostCtx), 0 < b && "undefined" !== typeof this.chart._eventManager.objectMap[b]) {
                  b = this.chart._eventManager.objectMap[b];
                  if ("legendItem" === b.objectType)
                    return;
                  this.currentSeriesIndex = b.dataSeriesIndex;
                  this.currentDataPointIndex = 0 <= b.dataPointIndex ? b.dataPointIndex : -1;
                } else
                  this.currentDataPointIndex = -1;
              else
                this.currentDataPointIndex = -1;
              if (0 <= this.currentSeriesIndex) {
                e = this.chart.data[this.currentSeriesIndex];
                k = {};
                if (0 <= this.currentDataPointIndex)
                  b = e.dataPoints[this.currentDataPointIndex], k.dataSeries = e, k.dataPoint = b, k.index = this.currentDataPointIndex, k.distance = Math.abs(b.x - h2), "waterfall" === e.type && (k.cumulativeSumYStartValue = e.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue, k.cumulativeSum = e.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
                else {
                  if (!this.enabled || "line" !== e.type && "stepLine" !== e.type && "spline" !== e.type && "area" !== e.type && "stepArea" !== e.type && "splineArea" !== e.type && "stackedArea" !== e.type && "stackedArea100" !== e.type && "rangeArea" !== e.type && "rangeSplineArea" !== e.type && "candlestick" !== e.type && "ohlc" !== e.type && "boxAndWhisker" !== e.type)
                    return;
                  h2 = e.axisX.convertPixelToValue({ x: a });
                  k = e.getDataPointAtX(h2, c);
                  m(k) || (k.dataSeries = e, this.currentDataPointIndex = k.index, b = k.dataPoint);
                }
                if (!m(k) && !m(k.dataPoint) && !m(k.dataPoint.y))
                  if (k.dataSeries.axisY)
                    if (0 < k.dataPoint.y.length) {
                      for (b = c = 0; b < k.dataPoint.y.length; b++)
                        k.dataPoint.y[b] < k.dataSeries.axisY.viewportMinimum ? c-- : k.dataPoint.y[b] > k.dataSeries.axisY.viewportMaximum && c++;
                      c < k.dataPoint.y.length && c > -k.dataPoint.y.length && g.push(k);
                    } else
                      "column" === e.type || "bar" === e.type ? 0 > k.dataPoint.y ? 0 > k.dataSeries.axisY.viewportMinimum && k.dataSeries.axisY.viewportMaximum >= k.dataPoint.y && g.push(k) : k.dataSeries.axisY.viewportMinimum <= k.dataPoint.y && 0 <= k.dataSeries.axisY.viewportMaximum && g.push(k) : "bubble" === e.type ? (c = this.chart._eventManager.objectMap[e.dataPointIds[k.index]].size / 2, k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum - c && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum + c && g.push(k)) : "waterfall" === e.type ? (c = 0, k.cumulativeSumYStartValue < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSumYStartValue > k.dataSeries.axisY.viewportMaximum && c++, k.cumulativeSum < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSum > k.dataSeries.axisY.viewportMaximum && c++, 2 > c && -2 < c && g.push(k)) : (0 <= k.dataSeries.type.indexOf("100") || "stackedColumn" === e.type || "stackedBar" === e.type || k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum) && g.push(k);
                  else
                    g.push(k);
              }
            }
            if (0 < g.length) {
              if (this.highlightObjects(g), this.enabled) {
                c = "";
                c = this.getToolTipInnerHTML({ entries: g });
                if (null !== c) {
                  this.contentDiv.innerHTML = c;
                  if (this.isToolTipDefinedInData && m(this.options.content) && m(this.options.contentFormatter))
                    for (h2 = this.contentDiv.getElementsByTagName("span"), b = 0; b < h2.length; b++)
                      h2[b] && (h2[b].style.color = h2[b].getAttribute("data-color"));
                  h2 = false;
                  "none" === this.container.style.display && (h2 = true, this.container.style.display = "block");
                  try {
                    this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === g[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : 0 < g[0].dataPoint.y ? g[0].dataSeries.risingColor : g[0].dataSeries.fallingColor : "error" === g[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[e.index % g[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[g[0].index % g[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : u ? "italic" : "normal";
                  } catch (l) {
                  }
                  "pie" === g[0].dataSeries.type || "doughnut" === g[0].dataSeries.type || "funnel" === g[0].dataSeries.type || "pyramid" === g[0].dataSeries.type || "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) - this.container.clientWidth << 0, a -= 10);
                  0 > a && (a += this.container.clientWidth + 20);
                  a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                  d = 1 !== g.length || this.shared || "line" !== g[0].dataSeries.type && "stepLine" !== g[0].dataSeries.type && "spline" !== g[0].dataSeries.type && "area" !== g[0].dataSeries.type && "stepArea" !== g[0].dataSeries.type && "splineArea" !== g[0].dataSeries.type ? "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) : d : g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y);
                  d = -d + 10;
                  0 < d + this.container.clientHeight + 5 && (d -= d + this.container.clientHeight + 5 - 0);
                  this.fixMozTransitionDelay(a, d);
                  !this.animationEnabled || h2 ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                  this.positionLeft = a;
                  this.positionBottom = d;
                  this.container.style.left = a + "px";
                  this.container.style.bottom = d + "px";
                } else
                  this.hide(false), this.enabled && this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this);
                d = [];
                for (b = 0; b < g.length; b++)
                  d.push({
                    xValue: g[b].dataPoint.x,
                    dataPoint: g[b].dataPoint,
                    dataSeries: g[b].dataSeries,
                    dataPointIndex: g[b].index,
                    dataSeriesIndex: g[b].dataSeries._index
                  });
                this._updatedEventParameters = { chart: this.chart, toolTip: this.options, content: c, entries: d };
                this._entries = g;
              }
            } else
              this.hide(), this.enabled && this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this);
          }
        };
        W2.prototype.highlightObjects = function(a) {
          var d = this.chart.overlaidCanvasCtx;
          if (m(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas)
            this.chart.resetOverlayedCanvas(), d.clearRect(0, 0, this.chart.width, this.chart.height), this.chart.clearedOverlayedCanvas = "toolTip";
          d.save();
          var c = this.chart.plotArea, b = 0;
          d.beginPath();
          d.rect(c.x1, c.y1, c.x2 - c.x1, c.y2 - c.y1);
          d.clip();
          for (c = 0; c < a.length; c++) {
            var e = a[c];
            if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) && e.objectType && "dataPoint" === e.objectType) {
              var b = this.chart.data[e.dataSeriesIndex], g = b.dataPoints[e.dataPointIndex], h2 = e.dataPointIndex;
              false === g.highlightEnabled || true !== b.highlightEnabled && true !== g.highlightEnabled || ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "scatter" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type ? (g = b.getMarkerProperties(h2, e.x1, e.y1, this.chart.overlaidCanvasCtx), g.size = Math.max(1.5 * g.size << 0, 10), g.borderColor = g.borderColor || "#FFFFFF", g.borderThickness = g.borderThickness || Math.ceil(0.1 * g.size), X.drawMarkers([g]), "undefined" !== typeof e.y2 && (g = b.getMarkerProperties(
                h2,
                e.x1,
                e.y2,
                this.chart.overlaidCanvasCtx
              ), g.size = Math.max(1.5 * g.size << 0, 10), g.borderColor = g.borderColor || "#FFFFFF", g.borderThickness = g.borderThickness || Math.ceil(0.1 * g.size), X.drawMarkers([g]))) : "bubble" === b.type ? (g = b.getMarkerProperties(h2, e.x1, e.y1, this.chart.overlaidCanvasCtx), g.size = e.size, g.color = "white", g.borderColor = "white", d.globalAlpha = 0.3, X.drawMarkers([g]), d.globalAlpha = 1) : "column" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "bar" === b.type || "rangeBar" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "rangeColumn" === b.type || "waterfall" === b.type ? ba(d, e.x1, e.y1, e.x2, e.y2, "white", 0, null, false, false, false, false, 0.3) : "pie" === b.type || "doughnut" === b.type ? ra2(d, e.center, e.radius, "white", b.type, e.startAngle, e.endAngle, 0.3, e.percentInnerRadius) : "funnel" === b.type || "pyramid" === b.type ? ta2(d, e.funnelSection, 0.3, "white") : "candlestick" === b.type ? (d.globalAlpha = 1, d.strokeStyle = e.color, d.lineWidth = 2 * e.borderThickness, b = 0 === d.lineWidth % 2 ? 0 : 0.5, d.beginPath(), d.moveTo(e.x3 - b, Math.min(e.y2, e.y3)), d.lineTo(e.x3 - b, Math.min(e.y1, e.y4)), d.stroke(), d.beginPath(), d.moveTo(e.x3 - b, Math.max(e.y1, e.y4)), d.lineTo(e.x3 - b, Math.max(e.y2, e.y3)), d.stroke(), ba(d, e.x1, Math.min(e.y1, e.y4), e.x2, Math.max(e.y1, e.y4), "transparent", 2 * e.borderThickness, e.color, false, false, false, false), d.globalAlpha = 1) : "ohlc" === b.type ? (d.globalAlpha = 1, d.strokeStyle = e.color, d.lineWidth = 2 * e.borderThickness, b = 0 === d.lineWidth % 2 ? 0 : 0.5, d.beginPath(), d.moveTo(e.x3 - b, e.y2), d.lineTo(e.x3 - b, e.y3), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y1), d.lineTo(
                e.x1,
                e.y1
              ), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y4), d.lineTo(e.x2, e.y4), d.stroke(), d.globalAlpha = 1) : "boxAndWhisker" === b.type ? (d.save(), d.globalAlpha = 1, d.strokeStyle = e.stemColor, d.lineWidth = 2 * e.stemThickness, 0 < e.stemThickness && (d.beginPath(), d.moveTo(e.x3, e.y2 + e.borderThickness / 2), d.lineTo(e.x3, e.y1 + e.whiskerThickness / 2), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y4 - e.whiskerThickness / 2), d.lineTo(e.x3, e.y3 - e.borderThickness / 2), d.stroke()), d.beginPath(), ba(d, e.x1, Math.max(e.y2, e.y3), e.x2, Math.min(
                e.y2,
                e.y3
              ), "transparent", 2 * e.borderThickness, e.color, false, false, false, false), d.globalAlpha = 1, d.strokeStyle = e.whiskerColor, d.lineWidth = 2 * e.whiskerThickness, 0 < e.whiskerThickness && (d.beginPath(), d.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y4), d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y4), d.stroke(), d.beginPath(), d.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y1), d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y1), d.stroke()), d.globalAlpha = 1, d.strokeStyle = e.lineColor, d.lineWidth = 2 * e.lineThickness, 0 < e.lineThickness && (d.beginPath(), d.moveTo(e.x1, e.y5), d.lineTo(e.x2, e.y5), d.stroke()), d.restore(), d.globalAlpha = 1) : "error" === b.type && z2(d, e.x1, e.y1, e.x2, e.y2, "white", e.whiskerProperties, e.stemProperties, e.isXYSwapped, 0.3));
            }
          }
          d.restore();
          d.globalAlpha = 1;
          d.beginPath();
        };
        W2.prototype.getToolTipInnerHTML = function(a) {
          a = a.entries;
          var d = null, c = null, b = null, e = 0, g = "";
          this.isToolTipDefinedInData = true;
          for (var h2 = 0; h2 < a.length; h2++)
            if (a[h2].dataSeries.toolTipContent || a[h2].dataPoint.toolTipContent) {
              this.isToolTipDefinedInData = false;
              break;
            }
          if (this.isToolTipDefinedInData && (this.content && "function" === typeof this.content || this.contentFormatter))
            a = { chart: this.chart, toolTip: this.options, entries: a }, d = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
          else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
            for (var m2 = null, p2 = "", h2 = 0; h2 < a.length; h2++) {
              c = a[h2].dataSeries;
              b = a[h2].dataPoint;
              e = a[h2].index;
              g = "";
              if (0 === h2 && this.isToolTipDefinedInData && !this.content) {
                this.chart.axisX && 0 < this.chart.axisX.length ? p2 += "undefined" !== typeof this.chart.axisX[0].labels[b.x] ? this.chart.axisX[0].labels[b.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (p2 += "undefined" !== typeof this.chart.axisX2[0].labels[b.x] ? this.chart.axisX2[0].labels[b.x] : "{x}");
                p2 += "</br>";
                if (!c.visible)
                  continue;
                p2 = this.chart.replaceKeywordsWithValue(p2, b, c, e);
              }
              null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += m2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y}`, m2 = c.axisXIndex) : "bubble" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += m2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}`) : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += m2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}`) : "candlestick" === c.type || "ohlc" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (g += m2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}`) : "boxAndWhisker" === c.type && (this.chart.axisX && 1 < this.chart.axisX.length && (g += m2 != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), g += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>{name}:</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}`), null === d && (d = ""), c.visible && (true === this.reversed ? (d = this.chart.replaceKeywordsWithValue(g, b, c, e) + d, h2 < a.length - 1 && (d = "</br>" + d)) : (d += this.chart.replaceKeywordsWithValue(g, b, c, e), h2 < a.length - 1 && (d += "</br>"))));
            }
            null !== d && (d = p2 + d);
          } else {
            c = a[0].dataSeries;
            b = a[0].dataPoint;
            e = a[0].index;
            if (null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent)
              return null;
            "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? g = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === c.type ? g = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type ? g = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.name ? "{name}:</span>&nbsp;&nbsp;" : b.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? g = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" : "candlestick" === c.type || "ohlc" === c.type ? g = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === c.type && (g = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : `<span data-color='"` + (this.options.fontColor ? "" : "'{color}'") + `"'>` + (b.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
            null === d && (d = "");
            d += this.chart.replaceKeywordsWithValue(
              g,
              b,
              c,
              e
            );
          }
          return d;
        };
        W2.prototype.enableAnimation = function() {
          if (!this.container.style.WebkitTransition) {
            var a = this.getContainerTransition(this.containerTransitionDuration);
            this.container.style.WebkitTransition = a;
            this.container.style.MsTransition = a;
            this.container.style.transition = a;
            this.container.style.MozTransition = this.mozContainerTransition;
          }
        };
        W2.prototype.disableAnimation = function() {
          this.container.style.WebkitTransition && (this.container.style.WebkitTransition = "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "");
        };
        W2.prototype.hide = function(a) {
          this.container && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevY = this._prevX = NaN, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas());
        };
        W2.prototype.show = function(a, d, c) {
          this._updateToolTip(a, d, "undefined" === typeof c ? false : c);
        };
        W2.prototype.showAtIndex = function(a, d) {
        };
        W2.prototype.showAtX = function(a, d) {
          if (!this.enabled)
            return false;
          this.chart.clearedOverlayedCanvas = null;
          var c, b, e, g = [];
          e = false;
          d = !m(d) && 0 <= d && d < this.chart.data.length ? d : 0;
          if (this.shared)
            for (var h2 = 0; h2 < this.chart.data.length; h2++)
              c = this.chart.data[h2], (b = c.getDataPointAtX(a, false)) && (b.dataPoint && !m(b.dataPoint.y) && c.visible) && (b.dataSeries = c, g.push(b));
          else
            c = this.chart.data[d], (b = c.getDataPointAtX(a, false)) && (b.dataPoint && !m(b.dataPoint.y) && c.visible) && (b.dataSeries = c, g.push(b));
          if (0 < g.length) {
            for (h2 = 0; h2 < g.length; h2++)
              if (b = g[h2], (this.shared || 0 <= b.dataSeries.type.indexOf("100")) && b.dataPoint.x >= b.dataSeries.axisX.viewportMinimum && b.dataPoint.x <= b.dataSeries.axisX.viewportMaximum) {
                e = false;
                break;
              } else if (b.dataPoint.x < b.dataSeries.axisX.viewportMinimum || b.dataPoint.x > b.dataSeries.axisX.viewportMaximum || b.dataPoint.y < b.dataSeries.axisY.viewportMinimum || b.dataPoint.y > b.dataSeries.axisY.viewportMaximum)
                e = true;
              else {
                e = false;
                break;
              }
            if (e)
              return this.hide(), false;
            this.highlightObjects(g);
            this._entries = g;
            h2 = "";
            h2 = this.getToolTipInnerHTML({ entries: g });
            if (null !== h2) {
              this.contentDiv.innerHTML = h2;
              if (this.isToolTipDefinedInData && m(this.options.content) && m(this.options.contentFormatter))
                for (b = this.contentDiv.getElementsByTagName("span"), h2 = 0; h2 < b.length; h2++)
                  b[h2] && (b[h2].style.color = b[h2].getAttribute("data-color"));
              h2 = false;
              "none" === this.container.style.display && (h2 = true, this.container.style.display = "block");
              try {
                this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)", this.borderColor = "waterfall" === g[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : 0 < g[0].dataPoint.y ? g[0].dataSeries.risingColor : g[0].dataSeries.fallingColor : "error" === g[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[c.index % g[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : g[0].dataPoint.color ? g[0].dataPoint.color : g[0].dataSeries.color ? g[0].dataSeries.color : g[0].dataSeries._colorSet[g[0].index % g[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : u ? "italic" : "normal";
              } catch (p2) {
              }
              "pie" === g[0].dataSeries.type || "doughnut" === g[0].dataSeries.type || "funnel" === g[0].dataSeries.type || "pyramid" === g[0].dataSeries.type ? c = mouseX - 10 - this.container.clientWidth : (c = "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y) - this.container.clientWidth << 0 : g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) - this.container.clientWidth << 0, c -= 10);
              0 > c && (c += this.container.clientWidth + 20);
              c + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (c = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
              g = 1 !== g.length || this.shared || "line" !== g[0].dataSeries.type && "stepLine" !== g[0].dataSeries.type && "spline" !== g[0].dataSeries.type && "area" !== g[0].dataSeries.type && "stepArea" !== g[0].dataSeries.type && "splineArea" !== g[0].dataSeries.type ? "bar" === g[0].dataSeries.type || "rangeBar" === g[0].dataSeries.type || "stackedBar" === g[0].dataSeries.type || "stackedBar100" === g[0].dataSeries.type ? g[0].dataSeries.axisX.convertValueToPixel(g[0].dataPoint.x) : g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y) : g[0].dataSeries.axisY.convertValueToPixel(g[0].dataPoint.y);
              g = -g + 10;
              0 < g + this.container.clientHeight + 5 && (g -= g + this.container.clientHeight + 5 - 0);
              this.fixMozTransitionDelay(c, g);
              !this.animationEnabled || h2 ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
              this.container.style.left = c + "px";
              this.container.style.bottom = g + "px";
            } else
              return this.hide(false), false;
          } else
            return this.hide(), false;
          return true;
        };
        W2.prototype.fixMozTransitionDelay = function(a, d) {
          if (20 < this.chart._eventManager.lastObjectId)
            this.mozContainerTransition = this.getContainerTransition(0);
          else {
            var c = parseFloat(this.container.style.left), c = isNaN(c) ? 0 : c, b = parseFloat(this.container.style.bottom), b = isNaN(b) ? 0 : b;
            10 < Math.sqrt(Math.pow(c - a, 2) + Math.pow(b - d, 2)) ? this.mozContainerTransition = this.getContainerTransition(0.1) : this.mozContainerTransition = this.getContainerTransition(0);
          }
        };
        W2.prototype.getContainerTransition = function(a) {
          return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s";
        };
        aa2.prototype.reset = function() {
          this.lastObjectId = 0;
          this.objectMap = [];
          this.rectangularRegionEventSubscriptions = [];
          this.previousDataPointEventObject = null;
          this.eventObjects = [];
          u && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath());
        };
        aa2.prototype.getNewObjectTrackingId = function() {
          return ++this.lastObjectId;
        };
        aa2.prototype.mouseEventHandler = function(a) {
          if ("mousemove" === a.type || "click" === a.type) {
            var d = [], c = Pa(a), b = null;
            if ((b = this.chart.getObjectAtXY(c.x, c.y, false)) && "undefined" !== typeof this.objectMap[b])
              if (b = this.objectMap[b], "dataPoint" === b.objectType) {
                var e = this.chart.data[b.dataSeriesIndex], g = e.dataPoints[b.dataPointIndex], h2 = b.dataPointIndex;
                b.eventParameter = { x: c.x, y: c.y, dataPoint: g, dataSeries: e.options, dataPointIndex: h2, dataSeriesIndex: e.index, chart: this.chart };
                b.eventContext = {
                  context: g,
                  userContext: g,
                  mouseover: "mouseover",
                  mousemove: "mousemove",
                  mouseout: "mouseout",
                  click: "click"
                };
                d.push(b);
                b = this.objectMap[e.id];
                b.eventParameter = { x: c.x, y: c.y, dataPoint: g, dataSeries: e.options, dataPointIndex: h2, dataSeriesIndex: e.index, chart: this.chart };
                b.eventContext = { context: e, userContext: e.options, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
                d.push(this.objectMap[e.id]);
              } else
                "legendItem" === b.objectType && (e = this.chart.data[b.dataSeriesIndex], g = null !== b.dataPointIndex ? e.dataPoints[b.dataPointIndex] : null, b.eventParameter = {
                  x: c.x,
                  y: c.y,
                  dataSeries: e.options,
                  dataPoint: g,
                  dataPointIndex: b.dataPointIndex,
                  dataSeriesIndex: b.dataSeriesIndex,
                  chart: this.chart
                }, b.eventContext = { context: this.chart.legend, userContext: this.chart.legend.options, mouseover: "itemmouseover", mousemove: "itemmousemove", mouseout: "itemmouseout", click: "itemclick" }, d.push(b));
            e = [];
            for (c = 0; c < this.mouseoveredObjectMaps.length; c++) {
              g = true;
              for (b = 0; b < d.length; b++)
                if (d[b].id === this.mouseoveredObjectMaps[c].id) {
                  g = false;
                  break;
                }
              g ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout", a) : e.push(this.mouseoveredObjectMaps[c]);
            }
            this.mouseoveredObjectMaps = e;
            for (c = 0; c < d.length; c++) {
              e = false;
              for (b = 0; b < this.mouseoveredObjectMaps.length; b++)
                if (d[c].id === this.mouseoveredObjectMaps[b].id) {
                  e = true;
                  break;
                }
              e || (this.fireEvent(d[c], "mouseover", a), this.mouseoveredObjectMaps.push(d[c]));
              "click" === a.type ? this.fireEvent(d[c], "click", a) : "mousemove" === a.type && this.fireEvent(d[c], "mousemove", a);
            }
          }
        };
        aa2.prototype.fireEvent = function(a, d, c) {
          if (a && d) {
            var b = a.eventParameter, e = a.eventContext, g = a.eventContext.userContext;
            g && (e && g[e[d]]) && g[e[d]].call(g, b);
            "mouseout" !== d ? g.cursor && g.cursor !== c.target.style.cursor && (c.target.style.cursor = g.cursor) : (c.target.style.cursor = this.chart.panEnabled ? "itemmouseout" !== e.mouseout || g.dockInsidePlotArea ? "move" : this.chart._defaultCursor : this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
            "click" === d && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
            "click" === d && ("dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler) && this.chart.funnelPyramidClickHandler.call(
              this.chart.data[a.dataSeriesIndex],
              b
            );
          }
        };
        ka2.prototype.animate = function(a, d, c, b, e) {
          var g = this;
          this.chart.isAnimating = true;
          e = e || O.easing.linear;
          c && this.animations.push({ startTime: (/* @__PURE__ */ new Date()).getTime() + (a ? a : 0), duration: d, animationCallback: c, onComplete: b });
          for (a = []; 0 < this.animations.length; )
            if (d = this.animations.shift(), c = (/* @__PURE__ */ new Date()).getTime(), b = 0, d.startTime <= c && (b = e(Math.min(c - d.startTime, d.duration), 0, 1, d.duration), b = Math.min(b, 1), isNaN(b) || !isFinite(b)) && (b = 1), 1 > b && a.push(d), d.animationCallback(b), 1 <= b && d.onComplete)
              d.onComplete();
          this.animations = a;
          0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
            g.animate.call(g);
          }) : this.chart.isAnimating = false;
        };
        ka2.prototype.cancelAllAnimations = function() {
          this.animations = [];
          this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
          this.animationRequestId = null;
          this.chart.isAnimating = false;
        };
        var O = { yScaleAnimation: function(a, d) {
          if (0 !== a) {
            var c = d.dest, b = d.source.canvas, e = d.animationBase;
            c.drawImage(b, 0, 0, b.width, b.height, 0, e - e * a, c.canvas.width / na, a * c.canvas.height / na);
          }
        }, xScaleAnimation: function(a, d) {
          if (0 !== a) {
            var c = d.dest, b = d.source.canvas, e = d.animationBase;
            c.drawImage(b, 0, 0, b.width, b.height, e - e * a, 0, a * c.canvas.width / na, c.canvas.height / na);
          }
        }, xClipAnimation: function(a, d) {
          if (0 !== a) {
            var c = d.dest, b = d.source.canvas;
            c.save();
            0 < a && c.drawImage(b, 0, 0, b.width * a, b.height, 0, 0, b.width * a / na, b.height / na);
            c.restore();
          }
        }, fadeInAnimation: function(a, d) {
          if (0 !== a) {
            var c = d.dest, b = d.source.canvas;
            c.save();
            c.globalAlpha = a;
            c.drawImage(
              b,
              0,
              0,
              b.width,
              b.height,
              0,
              0,
              c.canvas.width / na,
              c.canvas.height / na
            );
            c.restore();
          }
        }, easing: { linear: function(a, d, c, b) {
          return c * a / b + d;
        }, easeOutQuad: function(a, d, c, b) {
          return -c * (a /= b) * (a - 2) + d;
        }, easeOutQuart: function(a, d, c, b) {
          return -c * ((a = a / b - 1) * a * a * a - 1) + d;
        }, easeInQuad: function(a, d, c, b) {
          return c * (a /= b) * a + d;
        }, easeInQuart: function(a, d, c, b) {
          return c * (a /= b) * a * a * a + d;
        } } }, X = { drawMarker: function(a, d, c, b, e, g, h2, m2) {
          if (c) {
            var p2 = 1;
            c.fillStyle = g ? g : "#000000";
            c.strokeStyle = h2 ? h2 : "#000000";
            c.lineWidth = m2 ? m2 : 0;
            c.setLineDash && c.setLineDash(I(
              "solid",
              m2
            ));
            "circle" === b ? (c.moveTo(a, d), c.beginPath(), c.arc(a, d, e / 2, 0, 2 * Math.PI, false), g && c.fill(), m2 && (h2 ? c.stroke() : (p2 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = p2))) : "square" === b ? (c.beginPath(), c.rect(a - e / 2, d - e / 2, e, e), g && c.fill(), m2 && (h2 ? c.stroke() : (p2 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = p2))) : "triangle" === b ? (c.beginPath(), c.moveTo(a - e / 2, d + e / 2), c.lineTo(a + e / 2, d + e / 2), c.lineTo(a, d - e / 2), c.closePath(), g && c.fill(), m2 && (h2 ? c.stroke() : (p2 = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = p2)), c.beginPath()) : "cross" === b && (c.strokeStyle = g, c.lineWidth = e / 4, c.beginPath(), c.moveTo(a - e / 2, d - e / 2), c.lineTo(a + e / 2, d + e / 2), c.stroke(), c.moveTo(a + e / 2, d - e / 2), c.lineTo(a - e / 2, d + e / 2), c.stroke());
          }
        }, drawMarkers: function(a) {
          for (var d = 0; d < a.length; d++) {
            var c = a[d];
            X.drawMarker(c.x, c.y, c.ctx, c.type, c.size, c.color, c.borderColor, c.borderThickness);
          }
        } };
        return p;
      }();
      z.version = "v3.7.43 GA";
      window.CanvasJS && (z && !window.CanvasJS.Chart) && (window.CanvasJS.Chart = z);
    })();
    document.createElement("canvas").getContext || function() {
      function V() {
        return this.context_ || (this.context_ = new C(this));
      }
      function W(a, b, c) {
        var g = M.call(arguments, 2);
        return function() {
          return a.apply(b, g.concat(M.call(arguments)));
        };
      }
      function N(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
      }
      function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}");
      }
      function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
          case "width":
            b.getContext().clearRect();
            b.style.width = b.attributes.width.nodeValue + "px";
            b.firstChild.style.width = b.clientWidth + "px";
            break;
          case "height":
            b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight + "px";
        }
      }
      function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px");
      }
      function D() {
        return [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
      }
      function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++)
          for (var e = 0; 3 > e; e++) {
            for (var f = 0, d2 = 0; 3 > d2; d2++)
              f += a[g][d2] * b[d2][e];
            c[g][e] = f;
          }
        return c;
      }
      function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX = a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_;
      }
      function Q(a) {
        var b = a.indexOf("(", 3), c = a.indexOf(")", b + 1), b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3))
          b[3] = 1;
        return b;
      }
      function E(a, b, c) {
        return Math.min(c, Math.max(b, a));
      }
      function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a;
      }
      function G(a) {
        if (a in H)
          return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0))
          b = a;
        else if (/^rgb/.test(a)) {
          c = Q(a);
          b = "#";
          for (var g, e = 0; 3 > e; e++)
            g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
          c = +c[3];
        } else if (/^hsl/.test(a)) {
          e = c = Q(a);
          b = parseFloat(e[0]) / 360 % 360;
          0 > b && b++;
          g = E(parseFloat(e[1]) / 100, 0, 1);
          e = E(parseFloat(e[2]) / 100, 0, 1);
          if (0 == g)
            g = e = b = e;
          else {
            var f = 0.5 > e ? e * (1 + g) : e + g - e * g, d2 = 2 * e - f;
            g = F(d2, f, b + 1 / 3);
            e = F(d2, f, b);
            b = F(d2, f, b - 1 / 3);
          }
          b = "#" + v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
          c = c[3];
        } else
          b = Z[a] || a;
        return H[a] = { color: b, alpha: c };
      }
      function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute", c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(false);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1;
      }
      function R(a, b, c, g) {
        a.currentPath_.push({ type: "bezierCurveTo", cp1x: b.x, cp1y: b.y, cp2x: c.x, cp2y: c.y, x: g.x, y: g.y });
        a.currentX_ = g.x;
        a.currentY_ = g.y;
      }
      function S(a, b) {
        var c = G(a.strokeStyle), g = c.color, c = c.alpha * a.globalAlpha, e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push(
          "<g_vml_:stroke",
          ' opacity="',
          c,
          '"',
          ' joinstyle="',
          a.lineJoin,
          '"',
          ' miterlimit="',
          a.miterLimit,
          '"',
          ' endcap="',
          $[a.lineCap] || "square",
          '"',
          ' weight="',
          e,
          'px"',
          ' color="',
          g,
          '" />'
        );
      }
      function T(a, b, c, g) {
        var e = a.fillStyle, f = a.arcScaleX_, d2 = a.arcScaleY_, k2 = g.x - c.x, n = g.y - c.y;
        if (e instanceof w) {
          var h = 0, l = g = 0, u = 0, m = 1;
          if ("gradient" == e.type_) {
            h = e.x1_ / f;
            c = e.y1_ / d2;
            var p = s(a, e.x0_ / f, e.y0_ / d2), h = s(a, h, c), h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
            0 > h && (h += 360);
            1e-6 > h && (h = 0);
          } else
            p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k2, l = (p.y - c.y) / n, k2 /= f * q, n /= d2 * q, m = x.max(k2, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
          f = e.colors_;
          f.sort(function(a2, b2) {
            return a2.offset - b2.offset;
          });
          d2 = f.length;
          p = f[0].color;
          c = f[d2 - 1].color;
          k2 = f[0].alpha * a.globalAlpha;
          a = f[d2 - 1].alpha * a.globalAlpha;
          for (var n = [], r2 = 0; r2 < d2; r2++) {
            var t2 = f[r2];
            n.push(t2.offset * m + u + " " + t2.color);
          }
          b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k2, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />');
        } else
          e instanceof I ? k2 && n && b.push("<g_vml_:fill", ' position="', -c.x / k2 * f * f, ",", -c.y / n * d2 * d2, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'));
      }
      function s(a, b, c) {
        a = a.m_;
        return { x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r, y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r };
      }
      function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] * b[1][0]))));
      }
      function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = [];
      }
      function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName)
          throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState)
          throw new A("INVALID_STATE_ERR");
        switch (b) {
          case "repeat":
          case null:
          case "":
            this.repetition_ = "repeat";
            break;
          case "repeat-x":
          case "repeat-y":
          case "no-repeat":
            this.repetition_ = b;
            break;
          default:
            throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height;
      }
      function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code;
      }
      var x = Math, k = x.round, J = x.sin, K = x.cos, ba = x.abs, aa = x.sqrt, q = 10, r = q / 2;
      navigator.userAgent.match(/MSIE ([\d.]+)?/);
      var M = Array.prototype.slice;
      O(document);
      var U = { init: function(a) {
        a = a || document;
        a.createElement("canvas");
        a.attachEvent("onreadystatechange", W(this.init_, this, a));
      }, init_: function(a) {
        a = a.getElementsByTagName("canvas");
        for (var b = 0; b < a.length; b++)
          this.initElement(a[b]);
      }, initElement: function(a) {
        if (!a.getContext) {
          a.getContext = V;
          O(a.ownerDocument);
          a.innerHTML = "";
          a.attachEvent("onpropertychange", X);
          a.attachEvent("onresize", Y);
          var b = a.attributes;
          b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
          b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight;
        }
        return a;
      } };
      U.init();
      for (var v = [], d = 0; 16 > d; d++)
        for (var B = 0; 16 > B; B++)
          v[16 * d + B] = d.toString(16) + B.toString(16);
      var Z = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        grey: "#808080",
        greenyellow: "#ADFF2F",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        oldlace: "#FDF5E6",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        whitesmoke: "#F5F5F5",
        yellowgreen: "#9ACD32"
      }, H = {}, L = {}, $ = { butt: "flat", round: "round" }, d = C.prototype;
      d.clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(true), this.textMeasureEl_ = null);
        this.element_.innerHTML = "";
      };
      d.beginPath = function() {
        this.currentPath_ = [];
      };
      d.moveTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({ type: "moveTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y;
      };
      d.lineTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({ type: "lineTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y;
      };
      d.bezierCurveTo = function(a, b, c, g, e, f) {
        e = s(this, e, f);
        a = s(this, a, b);
        c = s(this, c, g);
        R(this, a, c, e);
      };
      d.quadraticCurveTo = function(a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = { x: this.currentX_ + 2 / 3 * (a.x - this.currentX_), y: this.currentY_ + 2 / 3 * (a.y - this.currentY_) };
        R(this, g, { x: g.x + (c.x - this.currentX_) / 3, y: g.y + (c.y - this.currentY_) / 3 }, c);
      };
      d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d2 = f ? "at" : "wa", k2 = a + K(g) * c - r, n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k2 != g || f || (k2 += 0.125);
        a = s(this, a, b);
        k2 = s(this, k2, n);
        g = s(this, g, e);
        this.currentPath_.push({
          type: d2,
          x: a.x,
          y: a.y,
          radius: c,
          xStart: k2.x,
          yStart: k2.y,
          xEnd: g.x,
          yEnd: g.y
        });
      };
      d.rect = function(a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
      };
      d.strokeRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e;
      };
      d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e;
      };
      d.createLinearGradient = function(a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e;
      };
      d.createRadialGradient = function(a, b, c, g, e, f) {
        var d2 = new w("gradientradial");
        d2.x0_ = a;
        d2.y0_ = b;
        d2.r0_ = c;
        d2.x1_ = g;
        d2.y1_ = e;
        d2.r1_ = f;
        return d2;
      };
      d.drawImage = function(a, b) {
        var c, g, e, d2, r2, y, n, h;
        e = a.runtimeStyle.width;
        d2 = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width, u = a.height;
        a.runtimeStyle.width = e;
        a.runtimeStyle.height = d2;
        if (3 == arguments.length)
          c = arguments[1], g = arguments[2], r2 = y = 0, n = e = l, h = d2 = u;
        else if (5 == arguments.length)
          c = arguments[1], g = arguments[2], e = arguments[3], d2 = arguments[4], r2 = y = 0, n = l, h = u;
        else if (9 == arguments.length)
          r2 = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d2 = arguments[8];
        else
          throw Error("Invalid number of arguments");
        var m = s(this, c, g), p = [];
        p.push(
          " <g_vml_:group",
          ' coordsize="',
          10 * q,
          ",",
          10 * q,
          '"',
          ' coordorigin="0,0"',
          ' style="width:',
          10,
          "px;height:",
          10,
          "px;position:absolute;"
        );
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
          var t2 = [];
          t2.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
          var v2 = s(this, c + e, g), w2 = s(this, c, g + d2);
          c = s(this, c + e, g + d2);
          m.x = x.max(m.x, v2.x, w2.x, c.x);
          m.y = x.max(m.y, v2.y, w2.y, c.y);
          p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t2.join(""), ", sizingmethod='clip');");
        } else
          p.push(
            "top:",
            k(m.y / q),
            "px;left:",
            k(m.x / q),
            "px;"
          );
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d2, 'px"', ' cropleft="', r2 / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r2 - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""));
      };
      d.stroke = function(a) {
        var b = [];
        b.push(
          "<g_vml_:shape",
          ' filled="',
          !!a,
          '"',
          ' style="position:absolute;width:',
          10,
          "px;height:",
          10,
          'px;"',
          ' coordorigin="0,0"',
          ' coordsize="',
          10 * q,
          ",",
          10 * q,
          '"',
          ' stroked="',
          !a,
          '"',
          ' path="'
        );
        for (var c = { x: null, y: null }, d2 = { x: null, y: null }, e = 0; e < this.currentPath_.length; e++) {
          var f = this.currentPath_[e];
          switch (f.type) {
            case "moveTo":
              b.push(" m ", k(f.x), ",", k(f.y));
              break;
            case "lineTo":
              b.push(" l ", k(f.x), ",", k(f.y));
              break;
            case "close":
              b.push(" x ");
              f = null;
              break;
            case "bezierCurveTo":
              b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
              break;
            case "at":
            case "wa":
              b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ * f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd));
          }
          if (f) {
            if (null == c.x || f.x < c.x)
              c.x = f.x;
            if (null == d2.x || f.x > d2.x)
              d2.x = f.x;
            if (null == c.y || f.y < c.y)
              c.y = f.y;
            if (null == d2.y || f.y > d2.y)
              d2.y = f.y;
          }
        }
        b.push(' ">');
        a ? T(this, b, c, d2) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""));
      };
      d.fill = function() {
        this.stroke(true);
      };
      d.closePath = function() {
        this.currentPath_.push({ type: "close" });
      };
      d.save = function() {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_);
      };
      d.restore = function() {
        this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop());
      };
      d.translate = function(a, b) {
        z(this, t([[1, 0, 0], [0, 1, 0], [a, b, 1]], this.m_), false);
      };
      d.rotate = function(a) {
        var b = K(a);
        a = J(a);
        z(this, t([[b, a, 0], [-a, b, 0], [0, 0, 1]], this.m_), false);
      };
      d.scale = function(a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([[a, 0, 0], [0, b, 0], [0, 0, 1]], this.m_), true);
      };
      d.transform = function(a, b, c, d2, e, f) {
        z(this, t([[
          a,
          b,
          0
        ], [c, d2, 0], [e, f, 1]], this.m_), true);
      };
      d.setTransform = function(a, b, c, d2, e, f) {
        z(this, [[a, b, 0], [c, d2, 0], [e, f, 1]], true);
      };
      d.drawText_ = function(a, b, c, d2, e) {
        var f = this.m_;
        d2 = 0;
        var r2 = 1e3, t2 = 0, n = [], h;
        h = this.font;
        if (L[h])
          h = L[h];
        else {
          var l = document.createElement("div").style;
          try {
            l.font = h;
          } catch (u) {
          }
          h = L[h] = { style: l.fontStyle || "normal", variant: l.fontVariant || "normal", weight: l.fontWeight || "normal", size: l.fontSize || 10, family: l.fontFamily || "sans-serif" };
        }
        var l = h, m = this.element_;
        h = {};
        for (var p in l)
          h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
          case "left":
          case "center":
          case "right":
            break;
          case "end":
            l = "ltr" == m.direction ? "right" : "left";
            break;
          case "start":
            l = "rtl" == m.direction ? "right" : "left";
            break;
          default:
            l = "left";
        }
        switch (this.textBaseline) {
          case "hanging":
          case "top":
            t2 = h.size / 1.75;
            break;
          case "middle":
            break;
          default:
          case null:
          case "alphabetic":
          case "ideographic":
          case "bottom":
            t2 = -h.size / 2.25;
        }
        switch (l) {
          case "right":
            d2 = 1e3;
            r2 = 0.05;
            break;
          case "center":
            d2 = r2 = 500;
        }
        b = s(this, b + 0, c + t2);
        n.push('<g_vml_:line from="', -d2, ' 0" to="', r2, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(
          this,
          n,
          { x: -d2, y: 0 },
          { x: r2, y: h.size }
        );
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d2, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""));
      };
      d.fillText = function(a, b, c, d2) {
        this.drawText_(a, b, c, d2, false);
      };
      d.strokeText = function(a, b, c, d2) {
        this.drawText_(a, b, c, d2, true);
      };
      d.measureText = function(a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return { width: this.textMeasureEl_.offsetWidth };
      };
      d.clip = function() {
      };
      d.arcTo = function() {
      };
      d.createPattern = function(a, b) {
        return new I(a, b);
      };
      w.prototype.addColorStop = function(a, b) {
        b = G(b);
        this.colors_.push({ offset: a, color: b.color, alpha: b.alpha });
      };
      d = A.prototype = Error();
      d.INDEX_SIZE_ERR = 1;
      d.DOMSTRING_SIZE_ERR = 2;
      d.HIERARCHY_REQUEST_ERR = 3;
      d.WRONG_DOCUMENT_ERR = 4;
      d.INVALID_CHARACTER_ERR = 5;
      d.NO_DATA_ALLOWED_ERR = 6;
      d.NO_MODIFICATION_ALLOWED_ERR = 7;
      d.NOT_FOUND_ERR = 8;
      d.NOT_SUPPORTED_ERR = 9;
      d.INUSE_ATTRIBUTE_ERR = 10;
      d.INVALID_STATE_ERR = 11;
      d.SYNTAX_ERR = 12;
      d.INVALID_MODIFICATION_ERR = 13;
      d.NAMESPACE_ERR = 14;
      d.INVALID_ACCESS_ERR = 15;
      d.VALIDATION_ERR = 16;
      d.TYPE_MISMATCH_ERR = 17;
      G_vmlCanvasManager = U;
      CanvasRenderingContext2D = C;
      CanvasGradient = w;
      CanvasPattern = I;
      DOMException = A;
    }();
  }
});

// node_modules/@canvasjs/angular-charts/fesm2015/canvasjs-angular-charts.js
function CanvasJSChart_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r0.chartContainerId);
    ɵɵproperty("ngStyle", ctx_r0.styles);
  }
}
if (typeof document === "object" && !!document) {
  CanvasJS = require_canvasjs_min();
}
var CanvasJS;
var CanvasJSChart = class _CanvasJSChart {
  constructor() {
    this.shouldUpdateChart = false;
    this.isDOMPresent = typeof document === "object" && !!document;
    this.chartInstance = new EventEmitter();
    this.options = this.options ? this.options : {};
    this.styles = this.styles ? this.styles : {
      width: "100%",
      position: "relative"
    };
    this.styles.height = this.options.height ? this.options.height + "px" : "400px";
    this.chartContainerId = "canvasjs-angular-chart-container-" + _CanvasJSChart._cjsChartContainerId++;
  }
  ngDoCheck() {
    if (this.prevChartOptions != this.options) {
      this.shouldUpdateChart = true;
    }
  }
  ngOnChanges() {
    if (this.shouldUpdateChart && this.chart) {
      this.chart.options = this.options;
      this.chart.render();
      this.shouldUpdateChart = false;
      this.prevChartOptions = this.options;
    }
  }
  ngAfterViewInit() {
    if (this.isDOMPresent) {
      this.chart = new CanvasJS.Chart(this.chartContainerId, this.options);
      this.chart.render();
      this.prevChartOptions = this.options;
      this.chartInstance.emit(this.chart);
    }
  }
  ngOnDestroy() {
    if (this.chart)
      this.chart.destroy();
  }
};
CanvasJSChart._cjsChartContainerId = 0;
CanvasJSChart.ɵfac = function CanvasJSChart_Factory(t) {
  return new (t || CanvasJSChart)();
};
CanvasJSChart.ɵcmp = ɵɵdefineComponent({
  type: CanvasJSChart,
  selectors: [["canvasjs-chart"]],
  inputs: {
    options: "options",
    styles: "styles"
  },
  outputs: {
    chartInstance: "chartInstance"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 1,
  vars: 1,
  consts: [[3, "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"]],
  template: function CanvasJSChart_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CanvasJSChart_div_0_Template, 1, 2, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.isDOMPresent);
    }
  },
  dependencies: [NgIf, NgStyle],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CanvasJSChart, [{
    type: Component,
    args: [{
      selector: "canvasjs-chart",
      template: '<div *ngIf="isDOMPresent" id="{{chartContainerId}}" [ngStyle]="styles"></div>'
    }]
  }], function() {
    return [];
  }, {
    options: [{
      type: Input
    }],
    styles: [{
      type: Input
    }],
    chartInstance: [{
      type: Output
    }]
  });
})();
var CanvasJSAngularChartsModule = class {
};
CanvasJSAngularChartsModule.ɵfac = function CanvasJSAngularChartsModule_Factory(t) {
  return new (t || CanvasJSAngularChartsModule)();
};
CanvasJSAngularChartsModule.ɵmod = ɵɵdefineNgModule({
  type: CanvasJSAngularChartsModule,
  declarations: [CanvasJSChart],
  imports: [CommonModule],
  exports: [CanvasJSChart]
});
CanvasJSAngularChartsModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CanvasJSAngularChartsModule, [{
    type: NgModule,
    args: [{
      declarations: [CanvasJSChart],
      imports: [CommonModule],
      exports: [CanvasJSChart]
    }]
  }], null, null);
})();
export {
  CanvasJS,
  CanvasJSAngularChartsModule,
  CanvasJSChart
};
//# sourceMappingURL=@canvasjs_angular-charts.js.map
