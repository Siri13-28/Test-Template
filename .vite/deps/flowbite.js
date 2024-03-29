import {
  createPopper
} from "./chunk-MF4UFTB6.js";
import "./chunk-5HFSU4IV.js";

// node_modules/flowbite/lib/esm/dom/events.js
var Events = (
  /** @class */
  function() {
    function Events2(eventType, eventFunctions) {
      if (eventFunctions === void 0) {
        eventFunctions = [];
      }
      this._eventType = eventType;
      this._eventFunctions = eventFunctions;
    }
    Events2.prototype.init = function() {
      var _this = this;
      this._eventFunctions.forEach(function(eventFunction) {
        if (typeof window !== "undefined") {
          window.addEventListener(_this._eventType, eventFunction);
        }
      });
    };
    return Events2;
  }()
);
var events_default = Events;

// node_modules/flowbite/lib/esm/dom/instances.js
var Instances = (
  /** @class */
  function() {
    function Instances2() {
      this._instances = {
        Accordion: {},
        Carousel: {},
        Collapse: {},
        Dial: {},
        Dismiss: {},
        Drawer: {},
        Dropdown: {},
        Modal: {},
        Popover: {},
        Tabs: {},
        Tooltip: {},
        InputCounter: {},
        CopyClipboard: {}
      };
    }
    Instances2.prototype.addInstance = function(component, instance, id, override) {
      if (override === void 0) {
        override = false;
      }
      if (!this._instances[component]) {
        console.warn("Flowbite: Component ".concat(component, " does not exist."));
        return false;
      }
      if (this._instances[component][id] && !override) {
        console.warn("Flowbite: Instance with ID ".concat(id, " already exists."));
        return;
      }
      if (override && this._instances[component][id]) {
        this._instances[component][id].destroyAndRemoveInstance();
      }
      this._instances[component][id ? id : this._generateRandomId()] = instance;
    };
    Instances2.prototype.getAllInstances = function() {
      return this._instances;
    };
    Instances2.prototype.getInstances = function(component) {
      if (!this._instances[component]) {
        console.warn("Flowbite: Component ".concat(component, " does not exist."));
        return false;
      }
      return this._instances[component];
    };
    Instances2.prototype.getInstance = function(component, id) {
      if (!this._componentAndInstanceCheck(component, id)) {
        return;
      }
      if (!this._instances[component][id]) {
        console.warn("Flowbite: Instance with ID ".concat(id, " does not exist."));
        return;
      }
      return this._instances[component][id];
    };
    Instances2.prototype.destroyAndRemoveInstance = function(component, id) {
      if (!this._componentAndInstanceCheck(component, id)) {
        return;
      }
      this.destroyInstanceObject(component, id);
      this.removeInstance(component, id);
    };
    Instances2.prototype.removeInstance = function(component, id) {
      if (!this._componentAndInstanceCheck(component, id)) {
        return;
      }
      delete this._instances[component][id];
    };
    Instances2.prototype.destroyInstanceObject = function(component, id) {
      if (!this._componentAndInstanceCheck(component, id)) {
        return;
      }
      this._instances[component][id].destroy();
    };
    Instances2.prototype.instanceExists = function(component, id) {
      if (!this._instances[component]) {
        return false;
      }
      if (!this._instances[component][id]) {
        return false;
      }
      return true;
    };
    Instances2.prototype._generateRandomId = function() {
      return Math.random().toString(36).substr(2, 9);
    };
    Instances2.prototype._componentAndInstanceCheck = function(component, id) {
      if (!this._instances[component]) {
        console.warn("Flowbite: Component ".concat(component, " does not exist."));
        return false;
      }
      if (!this._instances[component][id]) {
        console.warn("Flowbite: Instance with ID ".concat(id, " does not exist."));
        return false;
      }
      return true;
    };
    return Instances2;
  }()
);
var instances = new Instances();
var instances_default = instances;
if (typeof window !== "undefined") {
  window.FlowbiteInstances = instances;
}

// node_modules/flowbite/lib/esm/components/accordion/index.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var Default = {
  alwaysOpen: false,
  activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
  inactiveClasses: "text-gray-500 dark:text-gray-400",
  onOpen: function() {
  },
  onClose: function() {
  },
  onToggle: function() {
  }
};
var DefaultInstanceOptions = {
  id: null,
  override: true
};
var Accordion = (
  /** @class */
  function() {
    function Accordion2(accordionEl, items, options, instanceOptions) {
      if (accordionEl === void 0) {
        accordionEl = null;
      }
      if (items === void 0) {
        items = [];
      }
      if (options === void 0) {
        options = Default;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : accordionEl.id;
      this._accordionEl = accordionEl;
      this._items = items;
      this._options = __assign(__assign({}, Default), options);
      this._initialized = false;
      this.init();
      instances_default.addInstance("Accordion", this, this._instanceId, instanceOptions.override);
    }
    Accordion2.prototype.init = function() {
      var _this = this;
      if (this._items.length && !this._initialized) {
        this._items.forEach(function(item) {
          if (item.active) {
            _this.open(item.id);
          }
          var clickHandler = function() {
            _this.toggle(item.id);
          };
          item.triggerEl.addEventListener("click", clickHandler);
          item.clickHandler = clickHandler;
        });
        this._initialized = true;
      }
    };
    Accordion2.prototype.destroy = function() {
      if (this._items.length && this._initialized) {
        this._items.forEach(function(item) {
          item.triggerEl.removeEventListener("click", item.clickHandler);
          delete item.clickHandler;
        });
        this._initialized = false;
      }
    };
    Accordion2.prototype.removeInstance = function() {
      instances_default.removeInstance("Accordion", this._instanceId);
    };
    Accordion2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Accordion2.prototype.getItem = function(id) {
      return this._items.filter(function(item) {
        return item.id === id;
      })[0];
    };
    Accordion2.prototype.open = function(id) {
      var _a, _b;
      var _this = this;
      var item = this.getItem(id);
      if (!this._options.alwaysOpen) {
        this._items.map(function(i) {
          var _a2, _b2;
          if (i !== item) {
            (_a2 = i.triggerEl.classList).remove.apply(_a2, _this._options.activeClasses.split(" "));
            (_b2 = i.triggerEl.classList).add.apply(_b2, _this._options.inactiveClasses.split(" "));
            i.targetEl.classList.add("hidden");
            i.triggerEl.setAttribute("aria-expanded", "false");
            i.active = false;
            if (i.iconEl) {
              i.iconEl.classList.add("rotate-180");
            }
          }
        });
      }
      (_a = item.triggerEl.classList).add.apply(_a, this._options.activeClasses.split(" "));
      (_b = item.triggerEl.classList).remove.apply(_b, this._options.inactiveClasses.split(" "));
      item.triggerEl.setAttribute("aria-expanded", "true");
      item.targetEl.classList.remove("hidden");
      item.active = true;
      if (item.iconEl) {
        item.iconEl.classList.remove("rotate-180");
      }
      this._options.onOpen(this, item);
    };
    Accordion2.prototype.toggle = function(id) {
      var item = this.getItem(id);
      if (item.active) {
        this.close(id);
      } else {
        this.open(id);
      }
      this._options.onToggle(this, item);
    };
    Accordion2.prototype.close = function(id) {
      var _a, _b;
      var item = this.getItem(id);
      (_a = item.triggerEl.classList).remove.apply(_a, this._options.activeClasses.split(" "));
      (_b = item.triggerEl.classList).add.apply(_b, this._options.inactiveClasses.split(" "));
      item.targetEl.classList.add("hidden");
      item.triggerEl.setAttribute("aria-expanded", "false");
      item.active = false;
      if (item.iconEl) {
        item.iconEl.classList.add("rotate-180");
      }
      this._options.onClose(this, item);
    };
    Accordion2.prototype.updateOnOpen = function(callback) {
      this._options.onOpen = callback;
    };
    Accordion2.prototype.updateOnClose = function(callback) {
      this._options.onClose = callback;
    };
    Accordion2.prototype.updateOnToggle = function(callback) {
      this._options.onToggle = callback;
    };
    return Accordion2;
  }()
);
function initAccordions() {
  document.querySelectorAll("[data-accordion]").forEach(function($accordionEl) {
    var alwaysOpen = $accordionEl.getAttribute("data-accordion");
    var activeClasses = $accordionEl.getAttribute("data-active-classes");
    var inactiveClasses = $accordionEl.getAttribute("data-inactive-classes");
    var items = [];
    $accordionEl.querySelectorAll("[data-accordion-target]").forEach(function($triggerEl) {
      if ($triggerEl.closest("[data-accordion]") === $accordionEl) {
        var item = {
          id: $triggerEl.getAttribute("data-accordion-target"),
          triggerEl: $triggerEl,
          targetEl: document.querySelector($triggerEl.getAttribute("data-accordion-target")),
          iconEl: $triggerEl.querySelector("[data-accordion-icon]"),
          active: $triggerEl.getAttribute("aria-expanded") === "true" ? true : false
        };
        items.push(item);
      }
    });
    new Accordion($accordionEl, items, {
      alwaysOpen: alwaysOpen === "open" ? true : false,
      activeClasses: activeClasses ? activeClasses : Default.activeClasses,
      inactiveClasses: inactiveClasses ? inactiveClasses : Default.inactiveClasses
    });
  });
}
if (typeof window !== "undefined") {
  window.Accordion = Accordion;
  window.initAccordions = initAccordions;
}
var accordion_default = Accordion;

// node_modules/flowbite/lib/esm/components/collapse/index.js
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var Default2 = {
  onCollapse: function() {
  },
  onExpand: function() {
  },
  onToggle: function() {
  }
};
var DefaultInstanceOptions2 = {
  id: null,
  override: true
};
var Collapse = (
  /** @class */
  function() {
    function Collapse2(targetEl, triggerEl, options, instanceOptions) {
      if (targetEl === void 0) {
        targetEl = null;
      }
      if (triggerEl === void 0) {
        triggerEl = null;
      }
      if (options === void 0) {
        options = Default2;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions2;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
      this._targetEl = targetEl;
      this._triggerEl = triggerEl;
      this._options = __assign2(__assign2({}, Default2), options);
      this._visible = false;
      this._initialized = false;
      this.init();
      instances_default.addInstance("Collapse", this, this._instanceId, instanceOptions.override);
    }
    Collapse2.prototype.init = function() {
      var _this = this;
      if (this._triggerEl && this._targetEl && !this._initialized) {
        if (this._triggerEl.hasAttribute("aria-expanded")) {
          this._visible = this._triggerEl.getAttribute("aria-expanded") === "true";
        } else {
          this._visible = !this._targetEl.classList.contains("hidden");
        }
        this._clickHandler = function() {
          _this.toggle();
        };
        this._triggerEl.addEventListener("click", this._clickHandler);
        this._initialized = true;
      }
    };
    Collapse2.prototype.destroy = function() {
      if (this._triggerEl && this._initialized) {
        this._triggerEl.removeEventListener("click", this._clickHandler);
        this._initialized = false;
      }
    };
    Collapse2.prototype.removeInstance = function() {
      instances_default.removeInstance("Collapse", this._instanceId);
    };
    Collapse2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Collapse2.prototype.collapse = function() {
      this._targetEl.classList.add("hidden");
      if (this._triggerEl) {
        this._triggerEl.setAttribute("aria-expanded", "false");
      }
      this._visible = false;
      this._options.onCollapse(this);
    };
    Collapse2.prototype.expand = function() {
      this._targetEl.classList.remove("hidden");
      if (this._triggerEl) {
        this._triggerEl.setAttribute("aria-expanded", "true");
      }
      this._visible = true;
      this._options.onExpand(this);
    };
    Collapse2.prototype.toggle = function() {
      if (this._visible) {
        this.collapse();
      } else {
        this.expand();
      }
      this._options.onToggle(this);
    };
    Collapse2.prototype.updateOnCollapse = function(callback) {
      this._options.onCollapse = callback;
    };
    Collapse2.prototype.updateOnExpand = function(callback) {
      this._options.onExpand = callback;
    };
    Collapse2.prototype.updateOnToggle = function(callback) {
      this._options.onToggle = callback;
    };
    return Collapse2;
  }()
);
function initCollapses() {
  document.querySelectorAll("[data-collapse-toggle]").forEach(function($triggerEl) {
    var targetId = $triggerEl.getAttribute("data-collapse-toggle");
    var $targetEl = document.getElementById(targetId);
    if ($targetEl) {
      if (!instances_default.instanceExists("Collapse", $targetEl.getAttribute("id"))) {
        new Collapse($targetEl, $triggerEl);
      } else {
        new Collapse($targetEl, $triggerEl, {}, {
          id: $targetEl.getAttribute("id") + "_" + instances_default._generateRandomId()
        });
      }
    } else {
      console.error('The target element with id "'.concat(targetId, '" does not exist. Please check the data-collapse-toggle attribute.'));
    }
  });
}
if (typeof window !== "undefined") {
  window.Collapse = Collapse;
  window.initCollapses = initCollapses;
}
var collapse_default = Collapse;

// node_modules/flowbite/lib/esm/components/carousel/index.js
var __assign3 = function() {
  __assign3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign3.apply(this, arguments);
};
var Default3 = {
  defaultPosition: 0,
  indicators: {
    items: [],
    activeClasses: "bg-white dark:bg-gray-800",
    inactiveClasses: "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
  },
  interval: 3e3,
  onNext: function() {
  },
  onPrev: function() {
  },
  onChange: function() {
  }
};
var DefaultInstanceOptions3 = {
  id: null,
  override: true
};
var Carousel = (
  /** @class */
  function() {
    function Carousel2(carouselEl, items, options, instanceOptions) {
      if (carouselEl === void 0) {
        carouselEl = null;
      }
      if (items === void 0) {
        items = [];
      }
      if (options === void 0) {
        options = Default3;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions3;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : carouselEl.id;
      this._carouselEl = carouselEl;
      this._items = items;
      this._options = __assign3(__assign3(__assign3({}, Default3), options), { indicators: __assign3(__assign3({}, Default3.indicators), options.indicators) });
      this._activeItem = this.getItem(this._options.defaultPosition);
      this._indicators = this._options.indicators.items;
      this._intervalDuration = this._options.interval;
      this._intervalInstance = null;
      this._initialized = false;
      this.init();
      instances_default.addInstance("Carousel", this, this._instanceId, instanceOptions.override);
    }
    Carousel2.prototype.init = function() {
      var _this = this;
      if (this._items.length && !this._initialized) {
        this._items.map(function(item) {
          item.el.classList.add("absolute", "inset-0", "transition-transform", "transform");
        });
        if (this.getActiveItem()) {
          this.slideTo(this.getActiveItem().position);
        } else {
          this.slideTo(0);
        }
        this._indicators.map(function(indicator, position) {
          indicator.el.addEventListener("click", function() {
            _this.slideTo(position);
          });
        });
        this._initialized = true;
      }
    };
    Carousel2.prototype.destroy = function() {
      if (this._initialized) {
        this._initialized = false;
      }
    };
    Carousel2.prototype.removeInstance = function() {
      instances_default.removeInstance("Carousel", this._instanceId);
    };
    Carousel2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Carousel2.prototype.getItem = function(position) {
      return this._items[position];
    };
    Carousel2.prototype.slideTo = function(position) {
      var nextItem = this._items[position];
      var rotationItems = {
        left: nextItem.position === 0 ? this._items[this._items.length - 1] : this._items[nextItem.position - 1],
        middle: nextItem,
        right: nextItem.position === this._items.length - 1 ? this._items[0] : this._items[nextItem.position + 1]
      };
      this._rotate(rotationItems);
      this._setActiveItem(nextItem);
      if (this._intervalInstance) {
        this.pause();
        this.cycle();
      }
      this._options.onChange(this);
    };
    Carousel2.prototype.next = function() {
      var activeItem = this.getActiveItem();
      var nextItem = null;
      if (activeItem.position === this._items.length - 1) {
        nextItem = this._items[0];
      } else {
        nextItem = this._items[activeItem.position + 1];
      }
      this.slideTo(nextItem.position);
      this._options.onNext(this);
    };
    Carousel2.prototype.prev = function() {
      var activeItem = this.getActiveItem();
      var prevItem = null;
      if (activeItem.position === 0) {
        prevItem = this._items[this._items.length - 1];
      } else {
        prevItem = this._items[activeItem.position - 1];
      }
      this.slideTo(prevItem.position);
      this._options.onPrev(this);
    };
    Carousel2.prototype._rotate = function(rotationItems) {
      this._items.map(function(item) {
        item.el.classList.add("hidden");
      });
      if (this._items.length === 1) {
        rotationItems.middle.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-10");
        rotationItems.middle.el.classList.add("translate-x-0", "z-20");
        return;
      }
      rotationItems.left.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20");
      rotationItems.left.el.classList.add("-translate-x-full", "z-10");
      rotationItems.middle.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-10");
      rotationItems.middle.el.classList.add("translate-x-0", "z-30");
      rotationItems.right.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-30");
      rotationItems.right.el.classList.add("translate-x-full", "z-20");
    };
    Carousel2.prototype.cycle = function() {
      var _this = this;
      if (typeof window !== "undefined") {
        this._intervalInstance = window.setInterval(function() {
          _this.next();
        }, this._intervalDuration);
      }
    };
    Carousel2.prototype.pause = function() {
      clearInterval(this._intervalInstance);
    };
    Carousel2.prototype.getActiveItem = function() {
      return this._activeItem;
    };
    Carousel2.prototype._setActiveItem = function(item) {
      var _a, _b;
      var _this = this;
      this._activeItem = item;
      var position = item.position;
      if (this._indicators.length) {
        this._indicators.map(function(indicator) {
          var _a2, _b2;
          indicator.el.setAttribute("aria-current", "false");
          (_a2 = indicator.el.classList).remove.apply(_a2, _this._options.indicators.activeClasses.split(" "));
          (_b2 = indicator.el.classList).add.apply(_b2, _this._options.indicators.inactiveClasses.split(" "));
        });
        (_a = this._indicators[position].el.classList).add.apply(_a, this._options.indicators.activeClasses.split(" "));
        (_b = this._indicators[position].el.classList).remove.apply(_b, this._options.indicators.inactiveClasses.split(" "));
        this._indicators[position].el.setAttribute("aria-current", "true");
      }
    };
    Carousel2.prototype.updateOnNext = function(callback) {
      this._options.onNext = callback;
    };
    Carousel2.prototype.updateOnPrev = function(callback) {
      this._options.onPrev = callback;
    };
    Carousel2.prototype.updateOnChange = function(callback) {
      this._options.onChange = callback;
    };
    return Carousel2;
  }()
);
function initCarousels() {
  document.querySelectorAll("[data-carousel]").forEach(function($carouselEl) {
    var interval = $carouselEl.getAttribute("data-carousel-interval");
    var slide = $carouselEl.getAttribute("data-carousel") === "slide" ? true : false;
    var items = [];
    var defaultPosition = 0;
    if ($carouselEl.querySelectorAll("[data-carousel-item]").length) {
      Array.from($carouselEl.querySelectorAll("[data-carousel-item]")).map(function($carouselItemEl, position) {
        items.push({
          position,
          el: $carouselItemEl
        });
        if ($carouselItemEl.getAttribute("data-carousel-item") === "active") {
          defaultPosition = position;
        }
      });
    }
    var indicators = [];
    if ($carouselEl.querySelectorAll("[data-carousel-slide-to]").length) {
      Array.from($carouselEl.querySelectorAll("[data-carousel-slide-to]")).map(function($indicatorEl) {
        indicators.push({
          position: parseInt($indicatorEl.getAttribute("data-carousel-slide-to")),
          el: $indicatorEl
        });
      });
    }
    var carousel = new Carousel($carouselEl, items, {
      defaultPosition,
      indicators: {
        items: indicators
      },
      interval: interval ? interval : Default3.interval
    });
    if (slide) {
      carousel.cycle();
    }
    var carouselNextEl = $carouselEl.querySelector("[data-carousel-next]");
    var carouselPrevEl = $carouselEl.querySelector("[data-carousel-prev]");
    if (carouselNextEl) {
      carouselNextEl.addEventListener("click", function() {
        carousel.next();
      });
    }
    if (carouselPrevEl) {
      carouselPrevEl.addEventListener("click", function() {
        carousel.prev();
      });
    }
  });
}
if (typeof window !== "undefined") {
  window.Carousel = Carousel;
  window.initCarousels = initCarousels;
}
var carousel_default = Carousel;

// node_modules/flowbite/lib/esm/components/dismiss/index.js
var __assign4 = function() {
  __assign4 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign4.apply(this, arguments);
};
var Default4 = {
  transition: "transition-opacity",
  duration: 300,
  timing: "ease-out",
  onHide: function() {
  }
};
var DefaultInstanceOptions4 = {
  id: null,
  override: true
};
var Dismiss = (
  /** @class */
  function() {
    function Dismiss2(targetEl, triggerEl, options, instanceOptions) {
      if (targetEl === void 0) {
        targetEl = null;
      }
      if (triggerEl === void 0) {
        triggerEl = null;
      }
      if (options === void 0) {
        options = Default4;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions4;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
      this._targetEl = targetEl;
      this._triggerEl = triggerEl;
      this._options = __assign4(__assign4({}, Default4), options);
      this._initialized = false;
      this.init();
      instances_default.addInstance("Dismiss", this, this._instanceId, instanceOptions.override);
    }
    Dismiss2.prototype.init = function() {
      var _this = this;
      if (this._triggerEl && this._targetEl && !this._initialized) {
        this._clickHandler = function() {
          _this.hide();
        };
        this._triggerEl.addEventListener("click", this._clickHandler);
        this._initialized = true;
      }
    };
    Dismiss2.prototype.destroy = function() {
      if (this._triggerEl && this._initialized) {
        this._triggerEl.removeEventListener("click", this._clickHandler);
        this._initialized = false;
      }
    };
    Dismiss2.prototype.removeInstance = function() {
      instances_default.removeInstance("Dismiss", this._instanceId);
    };
    Dismiss2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Dismiss2.prototype.hide = function() {
      var _this = this;
      this._targetEl.classList.add(this._options.transition, "duration-".concat(this._options.duration), this._options.timing, "opacity-0");
      setTimeout(function() {
        _this._targetEl.classList.add("hidden");
      }, this._options.duration);
      this._options.onHide(this, this._targetEl);
    };
    Dismiss2.prototype.updateOnHide = function(callback) {
      this._options.onHide = callback;
    };
    return Dismiss2;
  }()
);
function initDismisses() {
  document.querySelectorAll("[data-dismiss-target]").forEach(function($triggerEl) {
    var targetId = $triggerEl.getAttribute("data-dismiss-target");
    var $dismissEl = document.querySelector(targetId);
    if ($dismissEl) {
      new Dismiss($dismissEl, $triggerEl);
    } else {
      console.error('The dismiss element with id "'.concat(targetId, '" does not exist. Please check the data-dismiss-target attribute.'));
    }
  });
}
if (typeof window !== "undefined") {
  window.Dismiss = Dismiss;
  window.initDismisses = initDismisses;
}
var dismiss_default = Dismiss;

// node_modules/flowbite/lib/esm/components/dropdown/index.js
var __assign5 = function() {
  __assign5 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign5.apply(this, arguments);
};
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var Default5 = {
  placement: "bottom",
  triggerType: "click",
  offsetSkidding: 0,
  offsetDistance: 10,
  delay: 300,
  ignoreClickOutsideClass: false,
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
};
var DefaultInstanceOptions5 = {
  id: null,
  override: true
};
var Dropdown = (
  /** @class */
  function() {
    function Dropdown2(targetElement, triggerElement, options, instanceOptions) {
      if (targetElement === void 0) {
        targetElement = null;
      }
      if (triggerElement === void 0) {
        triggerElement = null;
      }
      if (options === void 0) {
        options = Default5;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions5;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetElement.id;
      this._targetEl = targetElement;
      this._triggerEl = triggerElement;
      this._options = __assign5(__assign5({}, Default5), options);
      this._popperInstance = null;
      this._visible = false;
      this._initialized = false;
      this.init();
      instances_default.addInstance("Dropdown", this, this._instanceId, instanceOptions.override);
    }
    Dropdown2.prototype.init = function() {
      if (this._triggerEl && this._targetEl && !this._initialized) {
        this._popperInstance = this._createPopperInstance();
        this._setupEventListeners();
        this._initialized = true;
      }
    };
    Dropdown2.prototype.destroy = function() {
      var _this = this;
      var triggerEvents = this._getTriggerEvents();
      if (this._options.triggerType === "click") {
        triggerEvents.showEvents.forEach(function(ev) {
          _this._triggerEl.removeEventListener(ev, _this._clickHandler);
        });
      }
      if (this._options.triggerType === "hover") {
        triggerEvents.showEvents.forEach(function(ev) {
          _this._triggerEl.removeEventListener(ev, _this._hoverShowTriggerElHandler);
          _this._targetEl.removeEventListener(ev, _this._hoverShowTargetElHandler);
        });
        triggerEvents.hideEvents.forEach(function(ev) {
          _this._triggerEl.removeEventListener(ev, _this._hoverHideHandler);
          _this._targetEl.removeEventListener(ev, _this._hoverHideHandler);
        });
      }
      this._popperInstance.destroy();
      this._initialized = false;
    };
    Dropdown2.prototype.removeInstance = function() {
      instances_default.removeInstance("Dropdown", this._instanceId);
    };
    Dropdown2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Dropdown2.prototype._setupEventListeners = function() {
      var _this = this;
      var triggerEvents = this._getTriggerEvents();
      this._clickHandler = function() {
        _this.toggle();
      };
      if (this._options.triggerType === "click") {
        triggerEvents.showEvents.forEach(function(ev) {
          _this._triggerEl.addEventListener(ev, _this._clickHandler);
        });
      }
      this._hoverShowTriggerElHandler = function(ev) {
        if (ev.type === "click") {
          _this.toggle();
        } else {
          setTimeout(function() {
            _this.show();
          }, _this._options.delay);
        }
      };
      this._hoverShowTargetElHandler = function() {
        _this.show();
      };
      this._hoverHideHandler = function() {
        setTimeout(function() {
          if (!_this._targetEl.matches(":hover")) {
            _this.hide();
          }
        }, _this._options.delay);
      };
      if (this._options.triggerType === "hover") {
        triggerEvents.showEvents.forEach(function(ev) {
          _this._triggerEl.addEventListener(ev, _this._hoverShowTriggerElHandler);
          _this._targetEl.addEventListener(ev, _this._hoverShowTargetElHandler);
        });
        triggerEvents.hideEvents.forEach(function(ev) {
          _this._triggerEl.addEventListener(ev, _this._hoverHideHandler);
          _this._targetEl.addEventListener(ev, _this._hoverHideHandler);
        });
      }
    };
    Dropdown2.prototype._createPopperInstance = function() {
      return createPopper(this._triggerEl, this._targetEl, {
        placement: this._options.placement,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [
                this._options.offsetSkidding,
                this._options.offsetDistance
              ]
            }
          }
        ]
      });
    };
    Dropdown2.prototype._setupClickOutsideListener = function() {
      var _this = this;
      this._clickOutsideEventListener = function(ev) {
        _this._handleClickOutside(ev, _this._targetEl);
      };
      document.body.addEventListener("click", this._clickOutsideEventListener, true);
    };
    Dropdown2.prototype._removeClickOutsideListener = function() {
      document.body.removeEventListener("click", this._clickOutsideEventListener, true);
    };
    Dropdown2.prototype._handleClickOutside = function(ev, targetEl) {
      var clickedEl = ev.target;
      var ignoreClickOutsideClass = this._options.ignoreClickOutsideClass;
      var isIgnored = false;
      if (ignoreClickOutsideClass) {
        var ignoredClickOutsideEls = document.querySelectorAll(".".concat(ignoreClickOutsideClass));
        ignoredClickOutsideEls.forEach(function(el) {
          if (el.contains(clickedEl)) {
            isIgnored = true;
            return;
          }
        });
      }
      if (clickedEl !== targetEl && !targetEl.contains(clickedEl) && !this._triggerEl.contains(clickedEl) && !isIgnored && this.isVisible()) {
        this.hide();
      }
    };
    Dropdown2.prototype._getTriggerEvents = function() {
      switch (this._options.triggerType) {
        case "hover":
          return {
            showEvents: ["mouseenter", "click"],
            hideEvents: ["mouseleave"]
          };
        case "click":
          return {
            showEvents: ["click"],
            hideEvents: []
          };
        case "none":
          return {
            showEvents: [],
            hideEvents: []
          };
        default:
          return {
            showEvents: ["click"],
            hideEvents: []
          };
      }
    };
    Dropdown2.prototype.toggle = function() {
      if (this.isVisible()) {
        this.hide();
      } else {
        this.show();
      }
      this._options.onToggle(this);
    };
    Dropdown2.prototype.isVisible = function() {
      return this._visible;
    };
    Dropdown2.prototype.show = function() {
      this._targetEl.classList.remove("hidden");
      this._targetEl.classList.add("block");
      this._popperInstance.setOptions(function(options) {
        return __assign5(__assign5({}, options), { modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [
          { name: "eventListeners", enabled: true }
        ], false) });
      });
      this._setupClickOutsideListener();
      this._popperInstance.update();
      this._visible = true;
      this._options.onShow(this);
    };
    Dropdown2.prototype.hide = function() {
      this._targetEl.classList.remove("block");
      this._targetEl.classList.add("hidden");
      this._popperInstance.setOptions(function(options) {
        return __assign5(__assign5({}, options), { modifiers: __spreadArray(__spreadArray([], options.modifiers, true), [
          { name: "eventListeners", enabled: false }
        ], false) });
      });
      this._visible = false;
      this._removeClickOutsideListener();
      this._options.onHide(this);
    };
    Dropdown2.prototype.updateOnShow = function(callback) {
      this._options.onShow = callback;
    };
    Dropdown2.prototype.updateOnHide = function(callback) {
      this._options.onHide = callback;
    };
    Dropdown2.prototype.updateOnToggle = function(callback) {
      this._options.onToggle = callback;
    };
    return Dropdown2;
  }()
);
function initDropdowns() {
  document.querySelectorAll("[data-dropdown-toggle]").forEach(function($triggerEl) {
    var dropdownId = $triggerEl.getAttribute("data-dropdown-toggle");
    var $dropdownEl = document.getElementById(dropdownId);
    if ($dropdownEl) {
      var placement = $triggerEl.getAttribute("data-dropdown-placement");
      var offsetSkidding = $triggerEl.getAttribute("data-dropdown-offset-skidding");
      var offsetDistance = $triggerEl.getAttribute("data-dropdown-offset-distance");
      var triggerType = $triggerEl.getAttribute("data-dropdown-trigger");
      var delay = $triggerEl.getAttribute("data-dropdown-delay");
      var ignoreClickOutsideClass = $triggerEl.getAttribute("data-dropdown-ignore-click-outside-class");
      new Dropdown($dropdownEl, $triggerEl, {
        placement: placement ? placement : Default5.placement,
        triggerType: triggerType ? triggerType : Default5.triggerType,
        offsetSkidding: offsetSkidding ? parseInt(offsetSkidding) : Default5.offsetSkidding,
        offsetDistance: offsetDistance ? parseInt(offsetDistance) : Default5.offsetDistance,
        delay: delay ? parseInt(delay) : Default5.delay,
        ignoreClickOutsideClass: ignoreClickOutsideClass ? ignoreClickOutsideClass : Default5.ignoreClickOutsideClass
      });
    } else {
      console.error('The dropdown element with id "'.concat(dropdownId, '" does not exist. Please check the data-dropdown-toggle attribute.'));
    }
  });
}
if (typeof window !== "undefined") {
  window.Dropdown = Dropdown;
  window.initDropdowns = initDropdowns;
}
var dropdown_default = Dropdown;

// node_modules/flowbite/lib/esm/components/modal/index.js
var __assign6 = function() {
  __assign6 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign6.apply(this, arguments);
};
var Default6 = {
  placement: "center",
  backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
  backdrop: "dynamic",
  closable: true,
  onHide: function() {
  },
  onShow: function() {
  },
  onToggle: function() {
  }
};
var DefaultInstanceOptions6 = {
  id: null,
  override: true
};
var Modal = (
  /** @class */
  function() {
    function Modal2(targetEl, options, instanceOptions) {
      if (targetEl === void 0) {
        targetEl = null;
      }
      if (options === void 0) {
        options = Default6;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions6;
      }
      this._eventListenerInstances = [];
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
      this._targetEl = targetEl;
      this._options = __assign6(__assign6({}, Default6), options);
      this._isHidden = true;
      this._backdropEl = null;
      this._initialized = false;
      this.init();
      instances_default.addInstance("Modal", this, this._instanceId, instanceOptions.override);
    }
    Modal2.prototype.init = function() {
      var _this = this;
      if (this._targetEl && !this._initialized) {
        this._getPlacementClasses().map(function(c) {
          _this._targetEl.classList.add(c);
        });
        this._initialized = true;
      }
    };
    Modal2.prototype.destroy = function() {
      if (this._initialized) {
        this.removeAllEventListenerInstances();
        this._destroyBackdropEl();
        this._initialized = false;
      }
    };
    Modal2.prototype.removeInstance = function() {
      instances_default.removeInstance("Modal", this._instanceId);
    };
    Modal2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Modal2.prototype._createBackdrop = function() {
      var _a;
      if (this._isHidden) {
        var backdropEl = document.createElement("div");
        backdropEl.setAttribute("modal-backdrop", "");
        (_a = backdropEl.classList).add.apply(_a, this._options.backdropClasses.split(" "));
        document.querySelector("body").append(backdropEl);
        this._backdropEl = backdropEl;
      }
    };
    Modal2.prototype._destroyBackdropEl = function() {
      if (!this._isHidden) {
        document.querySelector("[modal-backdrop]").remove();
      }
    };
    Modal2.prototype._setupModalCloseEventListeners = function() {
      var _this = this;
      if (this._options.backdrop === "dynamic") {
        this._clickOutsideEventListener = function(ev) {
          _this._handleOutsideClick(ev.target);
        };
        this._targetEl.addEventListener("click", this._clickOutsideEventListener, true);
      }
      this._keydownEventListener = function(ev) {
        if (ev.key === "Escape") {
          _this.hide();
        }
      };
      document.body.addEventListener("keydown", this._keydownEventListener, true);
    };
    Modal2.prototype._removeModalCloseEventListeners = function() {
      if (this._options.backdrop === "dynamic") {
        this._targetEl.removeEventListener("click", this._clickOutsideEventListener, true);
      }
      document.body.removeEventListener("keydown", this._keydownEventListener, true);
    };
    Modal2.prototype._handleOutsideClick = function(target) {
      if (target === this._targetEl || target === this._backdropEl && this.isVisible()) {
        this.hide();
      }
    };
    Modal2.prototype._getPlacementClasses = function() {
      switch (this._options.placement) {
        case "top-left":
          return ["justify-start", "items-start"];
        case "top-center":
          return ["justify-center", "items-start"];
        case "top-right":
          return ["justify-end", "items-start"];
        case "center-left":
          return ["justify-start", "items-center"];
        case "center":
          return ["justify-center", "items-center"];
        case "center-right":
          return ["justify-end", "items-center"];
        case "bottom-left":
          return ["justify-start", "items-end"];
        case "bottom-center":
          return ["justify-center", "items-end"];
        case "bottom-right":
          return ["justify-end", "items-end"];
        default:
          return ["justify-center", "items-center"];
      }
    };
    Modal2.prototype.toggle = function() {
      if (this._isHidden) {
        this.show();
      } else {
        this.hide();
      }
      this._options.onToggle(this);
    };
    Modal2.prototype.show = function() {
      if (this.isHidden) {
        this._targetEl.classList.add("flex");
        this._targetEl.classList.remove("hidden");
        this._targetEl.setAttribute("aria-modal", "true");
        this._targetEl.setAttribute("role", "dialog");
        this._targetEl.removeAttribute("aria-hidden");
        this._createBackdrop();
        this._isHidden = false;
        if (this._options.closable) {
          this._setupModalCloseEventListeners();
        }
        document.body.classList.add("overflow-hidden");
        this._options.onShow(this);
      }
    };
    Modal2.prototype.hide = function() {
      if (this.isVisible) {
        this._targetEl.classList.add("hidden");
        this._targetEl.classList.remove("flex");
        this._targetEl.setAttribute("aria-hidden", "true");
        this._targetEl.removeAttribute("aria-modal");
        this._targetEl.removeAttribute("role");
        this._destroyBackdropEl();
        this._isHidden = true;
        document.body.classList.remove("overflow-hidden");
        if (this._options.closable) {
          this._removeModalCloseEventListeners();
        }
        this._options.onHide(this);
      }
    };
    Modal2.prototype.isVisible = function() {
      return !this._isHidden;
    };
    Modal2.prototype.isHidden = function() {
      return this._isHidden;
    };
    Modal2.prototype.addEventListenerInstance = function(element, type, handler) {
      this._eventListenerInstances.push({
        element,
        type,
        handler
      });
    };
    Modal2.prototype.removeAllEventListenerInstances = function() {
      this._eventListenerInstances.map(function(eventListenerInstance) {
        eventListenerInstance.element.removeEventListener(eventListenerInstance.type, eventListenerInstance.handler);
      });
      this._eventListenerInstances = [];
    };
    Modal2.prototype.getAllEventListenerInstances = function() {
      return this._eventListenerInstances;
    };
    Modal2.prototype.updateOnShow = function(callback) {
      this._options.onShow = callback;
    };
    Modal2.prototype.updateOnHide = function(callback) {
      this._options.onHide = callback;
    };
    Modal2.prototype.updateOnToggle = function(callback) {
      this._options.onToggle = callback;
    };
    return Modal2;
  }()
);
function initModals() {
  document.querySelectorAll("[data-modal-target]").forEach(function($triggerEl) {
    var modalId = $triggerEl.getAttribute("data-modal-target");
    var $modalEl = document.getElementById(modalId);
    if ($modalEl) {
      var placement = $modalEl.getAttribute("data-modal-placement");
      var backdrop = $modalEl.getAttribute("data-modal-backdrop");
      new Modal($modalEl, {
        placement: placement ? placement : Default6.placement,
        backdrop: backdrop ? backdrop : Default6.backdrop
      });
    } else {
      console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."));
    }
  });
  document.querySelectorAll("[data-modal-toggle]").forEach(function($triggerEl) {
    var modalId = $triggerEl.getAttribute("data-modal-toggle");
    var $modalEl = document.getElementById(modalId);
    if ($modalEl) {
      var modal_1 = instances_default.getInstance("Modal", modalId);
      if (modal_1) {
        var toggleModal = function() {
          modal_1.toggle();
        };
        $triggerEl.addEventListener("click", toggleModal);
        modal_1.addEventListenerInstance($triggerEl, "click", toggleModal);
      } else {
        console.error("Modal with id ".concat(modalId, " has not been initialized. Please initialize it using the data-modal-target attribute."));
      }
    } else {
      console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"));
    }
  });
  document.querySelectorAll("[data-modal-show]").forEach(function($triggerEl) {
    var modalId = $triggerEl.getAttribute("data-modal-show");
    var $modalEl = document.getElementById(modalId);
    if ($modalEl) {
      var modal_2 = instances_default.getInstance("Modal", modalId);
      if (modal_2) {
        var showModal = function() {
          modal_2.show();
        };
        $triggerEl.addEventListener("click", showModal);
        modal_2.addEventListenerInstance($triggerEl, "click", showModal);
      } else {
        console.error("Modal with id ".concat(modalId, " has not been initialized. Please initialize it using the data-modal-target attribute."));
      }
    } else {
      console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"));
    }
  });
  document.querySelectorAll("[data-modal-hide]").forEach(function($triggerEl) {
    var modalId = $triggerEl.getAttribute("data-modal-hide");
    var $modalEl = document.getElementById(modalId);
    if ($modalEl) {
      var modal_3 = instances_default.getInstance("Modal", modalId);
      if (modal_3) {
        var hideModal = function() {
          modal_3.hide();
        };
        $triggerEl.addEventListener("click", hideModal);
        modal_3.addEventListenerInstance($triggerEl, "click", hideModal);
      } else {
        console.error("Modal with id ".concat(modalId, " has not been initialized. Please initialize it using the data-modal-target attribute."));
      }
    } else {
      console.error("Modal with id ".concat(modalId, " does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"));
    }
  });
}
if (typeof window !== "undefined") {
  window.Modal = Modal;
  window.initModals = initModals;
}
var modal_default = Modal;

// node_modules/flowbite/lib/esm/components/drawer/index.js
var __assign7 = function() {
  __assign7 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign7.apply(this, arguments);
};
var Default7 = {
  placement: "left",
  bodyScrolling: false,
  backdrop: true,
  edge: false,
  edgeOffset: "bottom-[60px]",
  backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30",
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
};
var DefaultInstanceOptions7 = {
  id: null,
  override: true
};
var Drawer = (
  /** @class */
  function() {
    function Drawer2(targetEl, options, instanceOptions) {
      if (targetEl === void 0) {
        targetEl = null;
      }
      if (options === void 0) {
        options = Default7;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions7;
      }
      this._eventListenerInstances = [];
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
      this._targetEl = targetEl;
      this._options = __assign7(__assign7({}, Default7), options);
      this._visible = false;
      this._initialized = false;
      this.init();
      instances_default.addInstance("Drawer", this, this._instanceId, instanceOptions.override);
    }
    Drawer2.prototype.init = function() {
      var _this = this;
      if (this._targetEl && !this._initialized) {
        this._targetEl.setAttribute("aria-hidden", "true");
        this._targetEl.classList.add("transition-transform");
        this._getPlacementClasses(this._options.placement).base.map(function(c) {
          _this._targetEl.classList.add(c);
        });
        this._handleEscapeKey = function(event) {
          if (event.key === "Escape") {
            if (_this.isVisible()) {
              _this.hide();
            }
          }
        };
        document.addEventListener("keydown", this._handleEscapeKey);
        this._initialized = true;
      }
    };
    Drawer2.prototype.destroy = function() {
      if (this._initialized) {
        this.removeAllEventListenerInstances();
        this._destroyBackdropEl();
        document.removeEventListener("keydown", this._handleEscapeKey);
        this._initialized = false;
      }
    };
    Drawer2.prototype.removeInstance = function() {
      instances_default.removeInstance("Drawer", this._instanceId);
    };
    Drawer2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Drawer2.prototype.hide = function() {
      var _this = this;
      if (this._options.edge) {
        this._getPlacementClasses(this._options.placement + "-edge").active.map(function(c) {
          _this._targetEl.classList.remove(c);
        });
        this._getPlacementClasses(this._options.placement + "-edge").inactive.map(function(c) {
          _this._targetEl.classList.add(c);
        });
      } else {
        this._getPlacementClasses(this._options.placement).active.map(function(c) {
          _this._targetEl.classList.remove(c);
        });
        this._getPlacementClasses(this._options.placement).inactive.map(function(c) {
          _this._targetEl.classList.add(c);
        });
      }
      this._targetEl.setAttribute("aria-hidden", "true");
      this._targetEl.removeAttribute("aria-modal");
      this._targetEl.removeAttribute("role");
      if (!this._options.bodyScrolling) {
        document.body.classList.remove("overflow-hidden");
      }
      if (this._options.backdrop) {
        this._destroyBackdropEl();
      }
      this._visible = false;
      this._options.onHide(this);
    };
    Drawer2.prototype.show = function() {
      var _this = this;
      if (this._options.edge) {
        this._getPlacementClasses(this._options.placement + "-edge").active.map(function(c) {
          _this._targetEl.classList.add(c);
        });
        this._getPlacementClasses(this._options.placement + "-edge").inactive.map(function(c) {
          _this._targetEl.classList.remove(c);
        });
      } else {
        this._getPlacementClasses(this._options.placement).active.map(function(c) {
          _this._targetEl.classList.add(c);
        });
        this._getPlacementClasses(this._options.placement).inactive.map(function(c) {
          _this._targetEl.classList.remove(c);
        });
      }
      this._targetEl.setAttribute("aria-modal", "true");
      this._targetEl.setAttribute("role", "dialog");
      this._targetEl.removeAttribute("aria-hidden");
      if (!this._options.bodyScrolling) {
        document.body.classList.add("overflow-hidden");
      }
      if (this._options.backdrop) {
        this._createBackdrop();
      }
      this._visible = true;
      this._options.onShow(this);
    };
    Drawer2.prototype.toggle = function() {
      if (this.isVisible()) {
        this.hide();
      } else {
        this.show();
      }
    };
    Drawer2.prototype._createBackdrop = function() {
      var _a;
      var _this = this;
      if (!this._visible) {
        var backdropEl = document.createElement("div");
        backdropEl.setAttribute("drawer-backdrop", "");
        (_a = backdropEl.classList).add.apply(_a, this._options.backdropClasses.split(" "));
        document.querySelector("body").append(backdropEl);
        backdropEl.addEventListener("click", function() {
          _this.hide();
        });
      }
    };
    Drawer2.prototype._destroyBackdropEl = function() {
      if (this._visible && document.querySelector("[drawer-backdrop]") !== null) {
        document.querySelector("[drawer-backdrop]").remove();
      }
    };
    Drawer2.prototype._getPlacementClasses = function(placement) {
      switch (placement) {
        case "top":
          return {
            base: ["top-0", "left-0", "right-0"],
            active: ["transform-none"],
            inactive: ["-translate-y-full"]
          };
        case "right":
          return {
            base: ["right-0", "top-0"],
            active: ["transform-none"],
            inactive: ["translate-x-full"]
          };
        case "bottom":
          return {
            base: ["bottom-0", "left-0", "right-0"],
            active: ["transform-none"],
            inactive: ["translate-y-full"]
          };
        case "left":
          return {
            base: ["left-0", "top-0"],
            active: ["transform-none"],
            inactive: ["-translate-x-full"]
          };
        case "bottom-edge":
          return {
            base: ["left-0", "top-0"],
            active: ["transform-none"],
            inactive: ["translate-y-full", this._options.edgeOffset]
          };
        default:
          return {
            base: ["left-0", "top-0"],
            active: ["transform-none"],
            inactive: ["-translate-x-full"]
          };
      }
    };
    Drawer2.prototype.isHidden = function() {
      return !this._visible;
    };
    Drawer2.prototype.isVisible = function() {
      return this._visible;
    };
    Drawer2.prototype.addEventListenerInstance = function(element, type, handler) {
      this._eventListenerInstances.push({
        element,
        type,
        handler
      });
    };
    Drawer2.prototype.removeAllEventListenerInstances = function() {
      this._eventListenerInstances.map(function(eventListenerInstance) {
        eventListenerInstance.element.removeEventListener(eventListenerInstance.type, eventListenerInstance.handler);
      });
      this._eventListenerInstances = [];
    };
    Drawer2.prototype.getAllEventListenerInstances = function() {
      return this._eventListenerInstances;
    };
    Drawer2.prototype.updateOnShow = function(callback) {
      this._options.onShow = callback;
    };
    Drawer2.prototype.updateOnHide = function(callback) {
      this._options.onHide = callback;
    };
    Drawer2.prototype.updateOnToggle = function(callback) {
      this._options.onToggle = callback;
    };
    return Drawer2;
  }()
);
function initDrawers() {
  document.querySelectorAll("[data-drawer-target]").forEach(function($triggerEl) {
    var drawerId = $triggerEl.getAttribute("data-drawer-target");
    var $drawerEl = document.getElementById(drawerId);
    if ($drawerEl) {
      var placement = $triggerEl.getAttribute("data-drawer-placement");
      var bodyScrolling = $triggerEl.getAttribute("data-drawer-body-scrolling");
      var backdrop = $triggerEl.getAttribute("data-drawer-backdrop");
      var edge = $triggerEl.getAttribute("data-drawer-edge");
      var edgeOffset = $triggerEl.getAttribute("data-drawer-edge-offset");
      new Drawer($drawerEl, {
        placement: placement ? placement : Default7.placement,
        bodyScrolling: bodyScrolling ? bodyScrolling === "true" ? true : false : Default7.bodyScrolling,
        backdrop: backdrop ? backdrop === "true" ? true : false : Default7.backdrop,
        edge: edge ? edge === "true" ? true : false : Default7.edge,
        edgeOffset: edgeOffset ? edgeOffset : Default7.edgeOffset
      });
    } else {
      console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
    }
  });
  document.querySelectorAll("[data-drawer-toggle]").forEach(function($triggerEl) {
    var drawerId = $triggerEl.getAttribute("data-drawer-toggle");
    var $drawerEl = document.getElementById(drawerId);
    if ($drawerEl) {
      var drawer_1 = instances_default.getInstance("Drawer", drawerId);
      if (drawer_1) {
        var toggleDrawer = function() {
          drawer_1.toggle();
        };
        $triggerEl.addEventListener("click", toggleDrawer);
        drawer_1.addEventListenerInstance($triggerEl, "click", toggleDrawer);
      } else {
        console.error("Drawer with id ".concat(drawerId, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
      }
    } else {
      console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
    }
  });
  document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach(function($triggerEl) {
    var drawerId = $triggerEl.getAttribute("data-drawer-dismiss") ? $triggerEl.getAttribute("data-drawer-dismiss") : $triggerEl.getAttribute("data-drawer-hide");
    var $drawerEl = document.getElementById(drawerId);
    if ($drawerEl) {
      var drawer_2 = instances_default.getInstance("Drawer", drawerId);
      if (drawer_2) {
        var hideDrawer = function() {
          drawer_2.hide();
        };
        $triggerEl.addEventListener("click", hideDrawer);
        drawer_2.addEventListenerInstance($triggerEl, "click", hideDrawer);
      } else {
        console.error("Drawer with id ".concat(drawerId, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
      }
    } else {
      console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"));
    }
  });
  document.querySelectorAll("[data-drawer-show]").forEach(function($triggerEl) {
    var drawerId = $triggerEl.getAttribute("data-drawer-show");
    var $drawerEl = document.getElementById(drawerId);
    if ($drawerEl) {
      var drawer_3 = instances_default.getInstance("Drawer", drawerId);
      if (drawer_3) {
        var showDrawer = function() {
          drawer_3.show();
        };
        $triggerEl.addEventListener("click", showDrawer);
        drawer_3.addEventListenerInstance($triggerEl, "click", showDrawer);
      } else {
        console.error("Drawer with id ".concat(drawerId, " has not been initialized. Please initialize it using the data-drawer-target attribute."));
      }
    } else {
      console.error("Drawer with id ".concat(drawerId, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"));
    }
  });
}
if (typeof window !== "undefined") {
  window.Drawer = Drawer;
  window.initDrawers = initDrawers;
}
var drawer_default = Drawer;

// node_modules/flowbite/lib/esm/components/tabs/index.js
var __assign8 = function() {
  __assign8 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign8.apply(this, arguments);
};
var Default8 = {
  defaultTabId: null,
  activeClasses: "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",
  inactiveClasses: "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
  onShow: function() {
  }
};
var DefaultInstanceOptions8 = {
  id: null,
  override: true
};
var Tabs = (
  /** @class */
  function() {
    function Tabs2(tabsEl, items, options, instanceOptions) {
      if (tabsEl === void 0) {
        tabsEl = null;
      }
      if (items === void 0) {
        items = [];
      }
      if (options === void 0) {
        options = Default8;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions8;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : tabsEl.id;
      this._tabsEl = tabsEl;
      this._items = items;
      this._activeTab = options ? this.getTab(options.defaultTabId) : null;
      this._options = __assign8(__assign8({}, Default8), options);
      this._initialized = false;
      this.init();
      instances_default.addInstance("Tabs", this, this._tabsEl.id, true);
      instances_default.addInstance("Tabs", this, this._instanceId, instanceOptions.override);
    }
    Tabs2.prototype.init = function() {
      var _this = this;
      if (this._items.length && !this._initialized) {
        if (!this._activeTab) {
          this.setActiveTab(this._items[0]);
        }
        this.show(this._activeTab.id, true);
        this._items.map(function(tab) {
          tab.triggerEl.addEventListener("click", function(event) {
            event.preventDefault();
            _this.show(tab.id);
          });
        });
      }
    };
    Tabs2.prototype.destroy = function() {
      if (this._initialized) {
        this._initialized = false;
      }
    };
    Tabs2.prototype.removeInstance = function() {
      this.destroy();
      instances_default.removeInstance("Tabs", this._instanceId);
    };
    Tabs2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Tabs2.prototype.getActiveTab = function() {
      return this._activeTab;
    };
    Tabs2.prototype.setActiveTab = function(tab) {
      this._activeTab = tab;
    };
    Tabs2.prototype.getTab = function(id) {
      return this._items.filter(function(t) {
        return t.id === id;
      })[0];
    };
    Tabs2.prototype.show = function(id, forceShow) {
      var _a, _b;
      var _this = this;
      if (forceShow === void 0) {
        forceShow = false;
      }
      var tab = this.getTab(id);
      if (tab === this._activeTab && !forceShow) {
        return;
      }
      this._items.map(function(t) {
        var _a2, _b2;
        if (t !== tab) {
          (_a2 = t.triggerEl.classList).remove.apply(_a2, _this._options.activeClasses.split(" "));
          (_b2 = t.triggerEl.classList).add.apply(_b2, _this._options.inactiveClasses.split(" "));
          t.targetEl.classList.add("hidden");
          t.triggerEl.setAttribute("aria-selected", "false");
        }
      });
      (_a = tab.triggerEl.classList).add.apply(_a, this._options.activeClasses.split(" "));
      (_b = tab.triggerEl.classList).remove.apply(_b, this._options.inactiveClasses.split(" "));
      tab.triggerEl.setAttribute("aria-selected", "true");
      tab.targetEl.classList.remove("hidden");
      this.setActiveTab(tab);
      this._options.onShow(this, tab);
    };
    Tabs2.prototype.updateOnShow = function(callback) {
      this._options.onShow = callback;
    };
    return Tabs2;
  }()
);
function initTabs() {
  document.querySelectorAll("[data-tabs-toggle]").forEach(function($parentEl) {
    var tabItems = [];
    var activeClasses = $parentEl.getAttribute("data-tabs-active-classes");
    var inactiveClasses = $parentEl.getAttribute("data-tabs-inactive-classes");
    var defaultTabId = null;
    $parentEl.querySelectorAll('[role="tab"]').forEach(function($triggerEl) {
      var isActive = $triggerEl.getAttribute("aria-selected") === "true";
      var tab = {
        id: $triggerEl.getAttribute("data-tabs-target"),
        triggerEl: $triggerEl,
        targetEl: document.querySelector($triggerEl.getAttribute("data-tabs-target"))
      };
      tabItems.push(tab);
      if (isActive) {
        defaultTabId = tab.id;
      }
    });
    new Tabs($parentEl, tabItems, {
      defaultTabId,
      activeClasses: activeClasses ? activeClasses : Default8.activeClasses,
      inactiveClasses: inactiveClasses ? inactiveClasses : Default8.inactiveClasses
    });
  });
}
if (typeof window !== "undefined") {
  window.Tabs = Tabs;
  window.initTabs = initTabs;
}
var tabs_default = Tabs;

// node_modules/flowbite/lib/esm/components/tooltip/index.js
var __assign9 = function() {
  __assign9 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign9.apply(this, arguments);
};
var __spreadArray2 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var Default9 = {
  placement: "top",
  triggerType: "hover",
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
};
var DefaultInstanceOptions9 = {
  id: null,
  override: true
};
var Tooltip = (
  /** @class */
  function() {
    function Tooltip2(targetEl, triggerEl, options, instanceOptions) {
      if (targetEl === void 0) {
        targetEl = null;
      }
      if (triggerEl === void 0) {
        triggerEl = null;
      }
      if (options === void 0) {
        options = Default9;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions9;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
      this._targetEl = targetEl;
      this._triggerEl = triggerEl;
      this._options = __assign9(__assign9({}, Default9), options);
      this._popperInstance = null;
      this._visible = false;
      this._initialized = false;
      this.init();
      instances_default.addInstance("Tooltip", this, this._instanceId, instanceOptions.override);
    }
    Tooltip2.prototype.init = function() {
      if (this._triggerEl && this._targetEl && !this._initialized) {
        this._setupEventListeners();
        this._popperInstance = this._createPopperInstance();
        this._initialized = true;
      }
    };
    Tooltip2.prototype.destroy = function() {
      var _this = this;
      if (this._initialized) {
        var triggerEvents = this._getTriggerEvents();
        triggerEvents.showEvents.forEach(function(ev) {
          _this._triggerEl.removeEventListener(ev, _this._showHandler);
        });
        triggerEvents.hideEvents.forEach(function(ev) {
          _this._triggerEl.removeEventListener(ev, _this._hideHandler);
        });
        this._removeKeydownListener();
        this._removeClickOutsideListener();
        if (this._popperInstance) {
          this._popperInstance.destroy();
        }
        this._initialized = false;
      }
    };
    Tooltip2.prototype.removeInstance = function() {
      instances_default.removeInstance("Tooltip", this._instanceId);
    };
    Tooltip2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Tooltip2.prototype._setupEventListeners = function() {
      var _this = this;
      var triggerEvents = this._getTriggerEvents();
      this._showHandler = function() {
        _this.show();
      };
      this._hideHandler = function() {
        _this.hide();
      };
      triggerEvents.showEvents.forEach(function(ev) {
        _this._triggerEl.addEventListener(ev, _this._showHandler);
      });
      triggerEvents.hideEvents.forEach(function(ev) {
        _this._triggerEl.addEventListener(ev, _this._hideHandler);
      });
    };
    Tooltip2.prototype._createPopperInstance = function() {
      return createPopper(this._triggerEl, this._targetEl, {
        placement: this._options.placement,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 8]
            }
          }
        ]
      });
    };
    Tooltip2.prototype._getTriggerEvents = function() {
      switch (this._options.triggerType) {
        case "hover":
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
        case "click":
          return {
            showEvents: ["click", "focus"],
            hideEvents: ["focusout", "blur"]
          };
        case "none":
          return {
            showEvents: [],
            hideEvents: []
          };
        default:
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
      }
    };
    Tooltip2.prototype._setupKeydownListener = function() {
      var _this = this;
      this._keydownEventListener = function(ev) {
        if (ev.key === "Escape") {
          _this.hide();
        }
      };
      document.body.addEventListener("keydown", this._keydownEventListener, true);
    };
    Tooltip2.prototype._removeKeydownListener = function() {
      document.body.removeEventListener("keydown", this._keydownEventListener, true);
    };
    Tooltip2.prototype._setupClickOutsideListener = function() {
      var _this = this;
      this._clickOutsideEventListener = function(ev) {
        _this._handleClickOutside(ev, _this._targetEl);
      };
      document.body.addEventListener("click", this._clickOutsideEventListener, true);
    };
    Tooltip2.prototype._removeClickOutsideListener = function() {
      document.body.removeEventListener("click", this._clickOutsideEventListener, true);
    };
    Tooltip2.prototype._handleClickOutside = function(ev, targetEl) {
      var clickedEl = ev.target;
      if (clickedEl !== targetEl && !targetEl.contains(clickedEl) && !this._triggerEl.contains(clickedEl) && this.isVisible()) {
        this.hide();
      }
    };
    Tooltip2.prototype.isVisible = function() {
      return this._visible;
    };
    Tooltip2.prototype.toggle = function() {
      if (this.isVisible()) {
        this.hide();
      } else {
        this.show();
      }
    };
    Tooltip2.prototype.show = function() {
      this._targetEl.classList.remove("opacity-0", "invisible");
      this._targetEl.classList.add("opacity-100", "visible");
      this._popperInstance.setOptions(function(options) {
        return __assign9(__assign9({}, options), { modifiers: __spreadArray2(__spreadArray2([], options.modifiers, true), [
          { name: "eventListeners", enabled: true }
        ], false) });
      });
      this._setupClickOutsideListener();
      this._setupKeydownListener();
      this._popperInstance.update();
      this._visible = true;
      this._options.onShow(this);
    };
    Tooltip2.prototype.hide = function() {
      this._targetEl.classList.remove("opacity-100", "visible");
      this._targetEl.classList.add("opacity-0", "invisible");
      this._popperInstance.setOptions(function(options) {
        return __assign9(__assign9({}, options), { modifiers: __spreadArray2(__spreadArray2([], options.modifiers, true), [
          { name: "eventListeners", enabled: false }
        ], false) });
      });
      this._removeClickOutsideListener();
      this._removeKeydownListener();
      this._visible = false;
      this._options.onHide(this);
    };
    Tooltip2.prototype.updateOnShow = function(callback) {
      this._options.onShow = callback;
    };
    Tooltip2.prototype.updateOnHide = function(callback) {
      this._options.onHide = callback;
    };
    Tooltip2.prototype.updateOnToggle = function(callback) {
      this._options.onToggle = callback;
    };
    return Tooltip2;
  }()
);
function initTooltips() {
  document.querySelectorAll("[data-tooltip-target]").forEach(function($triggerEl) {
    var tooltipId = $triggerEl.getAttribute("data-tooltip-target");
    var $tooltipEl = document.getElementById(tooltipId);
    if ($tooltipEl) {
      var triggerType = $triggerEl.getAttribute("data-tooltip-trigger");
      var placement = $triggerEl.getAttribute("data-tooltip-placement");
      new Tooltip($tooltipEl, $triggerEl, {
        placement: placement ? placement : Default9.placement,
        triggerType: triggerType ? triggerType : Default9.triggerType
      });
    } else {
      console.error('The tooltip element with id "'.concat(tooltipId, '" does not exist. Please check the data-tooltip-target attribute.'));
    }
  });
}
if (typeof window !== "undefined") {
  window.Tooltip = Tooltip;
  window.initTooltips = initTooltips;
}
var tooltip_default = Tooltip;

// node_modules/flowbite/lib/esm/components/popover/index.js
var __assign10 = function() {
  __assign10 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign10.apply(this, arguments);
};
var __spreadArray3 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var Default10 = {
  placement: "top",
  offset: 10,
  triggerType: "hover",
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
};
var DefaultInstanceOptions10 = {
  id: null,
  override: true
};
var Popover = (
  /** @class */
  function() {
    function Popover2(targetEl, triggerEl, options, instanceOptions) {
      if (targetEl === void 0) {
        targetEl = null;
      }
      if (triggerEl === void 0) {
        triggerEl = null;
      }
      if (options === void 0) {
        options = Default10;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions10;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
      this._targetEl = targetEl;
      this._triggerEl = triggerEl;
      this._options = __assign10(__assign10({}, Default10), options);
      this._popperInstance = null;
      this._visible = false;
      this._initialized = false;
      this.init();
      instances_default.addInstance("Popover", this, instanceOptions.id ? instanceOptions.id : this._targetEl.id, instanceOptions.override);
    }
    Popover2.prototype.init = function() {
      if (this._triggerEl && this._targetEl && !this._initialized) {
        this._setupEventListeners();
        this._popperInstance = this._createPopperInstance();
        this._initialized = true;
      }
    };
    Popover2.prototype.destroy = function() {
      var _this = this;
      if (this._initialized) {
        var triggerEvents = this._getTriggerEvents();
        triggerEvents.showEvents.forEach(function(ev) {
          _this._triggerEl.removeEventListener(ev, _this._showHandler);
          _this._targetEl.removeEventListener(ev, _this._showHandler);
        });
        triggerEvents.hideEvents.forEach(function(ev) {
          _this._triggerEl.removeEventListener(ev, _this._hideHandler);
          _this._targetEl.removeEventListener(ev, _this._hideHandler);
        });
        this._removeKeydownListener();
        this._removeClickOutsideListener();
        if (this._popperInstance) {
          this._popperInstance.destroy();
        }
        this._initialized = false;
      }
    };
    Popover2.prototype.removeInstance = function() {
      instances_default.removeInstance("Popover", this._instanceId);
    };
    Popover2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Popover2.prototype._setupEventListeners = function() {
      var _this = this;
      var triggerEvents = this._getTriggerEvents();
      this._showHandler = function() {
        _this.show();
      };
      this._hideHandler = function() {
        setTimeout(function() {
          if (!_this._targetEl.matches(":hover")) {
            _this.hide();
          }
        }, 100);
      };
      triggerEvents.showEvents.forEach(function(ev) {
        _this._triggerEl.addEventListener(ev, _this._showHandler);
        _this._targetEl.addEventListener(ev, _this._showHandler);
      });
      triggerEvents.hideEvents.forEach(function(ev) {
        _this._triggerEl.addEventListener(ev, _this._hideHandler);
        _this._targetEl.addEventListener(ev, _this._hideHandler);
      });
    };
    Popover2.prototype._createPopperInstance = function() {
      return createPopper(this._triggerEl, this._targetEl, {
        placement: this._options.placement,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, this._options.offset]
            }
          }
        ]
      });
    };
    Popover2.prototype._getTriggerEvents = function() {
      switch (this._options.triggerType) {
        case "hover":
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
        case "click":
          return {
            showEvents: ["click", "focus"],
            hideEvents: ["focusout", "blur"]
          };
        case "none":
          return {
            showEvents: [],
            hideEvents: []
          };
        default:
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
      }
    };
    Popover2.prototype._setupKeydownListener = function() {
      var _this = this;
      this._keydownEventListener = function(ev) {
        if (ev.key === "Escape") {
          _this.hide();
        }
      };
      document.body.addEventListener("keydown", this._keydownEventListener, true);
    };
    Popover2.prototype._removeKeydownListener = function() {
      document.body.removeEventListener("keydown", this._keydownEventListener, true);
    };
    Popover2.prototype._setupClickOutsideListener = function() {
      var _this = this;
      this._clickOutsideEventListener = function(ev) {
        _this._handleClickOutside(ev, _this._targetEl);
      };
      document.body.addEventListener("click", this._clickOutsideEventListener, true);
    };
    Popover2.prototype._removeClickOutsideListener = function() {
      document.body.removeEventListener("click", this._clickOutsideEventListener, true);
    };
    Popover2.prototype._handleClickOutside = function(ev, targetEl) {
      var clickedEl = ev.target;
      if (clickedEl !== targetEl && !targetEl.contains(clickedEl) && !this._triggerEl.contains(clickedEl) && this.isVisible()) {
        this.hide();
      }
    };
    Popover2.prototype.isVisible = function() {
      return this._visible;
    };
    Popover2.prototype.toggle = function() {
      if (this.isVisible()) {
        this.hide();
      } else {
        this.show();
      }
      this._options.onToggle(this);
    };
    Popover2.prototype.show = function() {
      this._targetEl.classList.remove("opacity-0", "invisible");
      this._targetEl.classList.add("opacity-100", "visible");
      this._popperInstance.setOptions(function(options) {
        return __assign10(__assign10({}, options), { modifiers: __spreadArray3(__spreadArray3([], options.modifiers, true), [
          { name: "eventListeners", enabled: true }
        ], false) });
      });
      this._setupClickOutsideListener();
      this._setupKeydownListener();
      this._popperInstance.update();
      this._visible = true;
      this._options.onShow(this);
    };
    Popover2.prototype.hide = function() {
      this._targetEl.classList.remove("opacity-100", "visible");
      this._targetEl.classList.add("opacity-0", "invisible");
      this._popperInstance.setOptions(function(options) {
        return __assign10(__assign10({}, options), { modifiers: __spreadArray3(__spreadArray3([], options.modifiers, true), [
          { name: "eventListeners", enabled: false }
        ], false) });
      });
      this._removeClickOutsideListener();
      this._removeKeydownListener();
      this._visible = false;
      this._options.onHide(this);
    };
    Popover2.prototype.updateOnShow = function(callback) {
      this._options.onShow = callback;
    };
    Popover2.prototype.updateOnHide = function(callback) {
      this._options.onHide = callback;
    };
    Popover2.prototype.updateOnToggle = function(callback) {
      this._options.onToggle = callback;
    };
    return Popover2;
  }()
);
function initPopovers() {
  document.querySelectorAll("[data-popover-target]").forEach(function($triggerEl) {
    var popoverID = $triggerEl.getAttribute("data-popover-target");
    var $popoverEl = document.getElementById(popoverID);
    if ($popoverEl) {
      var triggerType = $triggerEl.getAttribute("data-popover-trigger");
      var placement = $triggerEl.getAttribute("data-popover-placement");
      var offset = $triggerEl.getAttribute("data-popover-offset");
      new Popover($popoverEl, $triggerEl, {
        placement: placement ? placement : Default10.placement,
        offset: offset ? parseInt(offset) : Default10.offset,
        triggerType: triggerType ? triggerType : Default10.triggerType
      });
    } else {
      console.error('The popover element with id "'.concat(popoverID, '" does not exist. Please check the data-popover-target attribute.'));
    }
  });
}
if (typeof window !== "undefined") {
  window.Popover = Popover;
  window.initPopovers = initPopovers;
}
var popover_default = Popover;

// node_modules/flowbite/lib/esm/components/dial/index.js
var __assign11 = function() {
  __assign11 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign11.apply(this, arguments);
};
var Default11 = {
  triggerType: "hover",
  onShow: function() {
  },
  onHide: function() {
  },
  onToggle: function() {
  }
};
var DefaultInstanceOptions11 = {
  id: null,
  override: true
};
var Dial = (
  /** @class */
  function() {
    function Dial2(parentEl, triggerEl, targetEl, options, instanceOptions) {
      if (parentEl === void 0) {
        parentEl = null;
      }
      if (triggerEl === void 0) {
        triggerEl = null;
      }
      if (targetEl === void 0) {
        targetEl = null;
      }
      if (options === void 0) {
        options = Default11;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions11;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
      this._parentEl = parentEl;
      this._triggerEl = triggerEl;
      this._targetEl = targetEl;
      this._options = __assign11(__assign11({}, Default11), options);
      this._visible = false;
      this._initialized = false;
      this.init();
      instances_default.addInstance("Dial", this, this._instanceId, instanceOptions.override);
    }
    Dial2.prototype.init = function() {
      var _this = this;
      if (this._triggerEl && this._targetEl && !this._initialized) {
        var triggerEventTypes = this._getTriggerEventTypes(this._options.triggerType);
        this._showEventHandler = function() {
          _this.show();
        };
        triggerEventTypes.showEvents.forEach(function(ev) {
          _this._triggerEl.addEventListener(ev, _this._showEventHandler);
          _this._targetEl.addEventListener(ev, _this._showEventHandler);
        });
        this._hideEventHandler = function() {
          if (!_this._parentEl.matches(":hover")) {
            _this.hide();
          }
        };
        triggerEventTypes.hideEvents.forEach(function(ev) {
          _this._parentEl.addEventListener(ev, _this._hideEventHandler);
        });
        this._initialized = true;
      }
    };
    Dial2.prototype.destroy = function() {
      var _this = this;
      if (this._initialized) {
        var triggerEventTypes = this._getTriggerEventTypes(this._options.triggerType);
        triggerEventTypes.showEvents.forEach(function(ev) {
          _this._triggerEl.removeEventListener(ev, _this._showEventHandler);
          _this._targetEl.removeEventListener(ev, _this._showEventHandler);
        });
        triggerEventTypes.hideEvents.forEach(function(ev) {
          _this._parentEl.removeEventListener(ev, _this._hideEventHandler);
        });
        this._initialized = false;
      }
    };
    Dial2.prototype.removeInstance = function() {
      instances_default.removeInstance("Dial", this._instanceId);
    };
    Dial2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    Dial2.prototype.hide = function() {
      this._targetEl.classList.add("hidden");
      if (this._triggerEl) {
        this._triggerEl.setAttribute("aria-expanded", "false");
      }
      this._visible = false;
      this._options.onHide(this);
    };
    Dial2.prototype.show = function() {
      this._targetEl.classList.remove("hidden");
      if (this._triggerEl) {
        this._triggerEl.setAttribute("aria-expanded", "true");
      }
      this._visible = true;
      this._options.onShow(this);
    };
    Dial2.prototype.toggle = function() {
      if (this._visible) {
        this.hide();
      } else {
        this.show();
      }
    };
    Dial2.prototype.isHidden = function() {
      return !this._visible;
    };
    Dial2.prototype.isVisible = function() {
      return this._visible;
    };
    Dial2.prototype._getTriggerEventTypes = function(triggerType) {
      switch (triggerType) {
        case "hover":
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
        case "click":
          return {
            showEvents: ["click", "focus"],
            hideEvents: ["focusout", "blur"]
          };
        case "none":
          return {
            showEvents: [],
            hideEvents: []
          };
        default:
          return {
            showEvents: ["mouseenter", "focus"],
            hideEvents: ["mouseleave", "blur"]
          };
      }
    };
    Dial2.prototype.updateOnShow = function(callback) {
      this._options.onShow = callback;
    };
    Dial2.prototype.updateOnHide = function(callback) {
      this._options.onHide = callback;
    };
    Dial2.prototype.updateOnToggle = function(callback) {
      this._options.onToggle = callback;
    };
    return Dial2;
  }()
);
function initDials() {
  document.querySelectorAll("[data-dial-init]").forEach(function($parentEl) {
    var $triggerEl = $parentEl.querySelector("[data-dial-toggle]");
    if ($triggerEl) {
      var dialId = $triggerEl.getAttribute("data-dial-toggle");
      var $dialEl = document.getElementById(dialId);
      if ($dialEl) {
        var triggerType = $triggerEl.getAttribute("data-dial-trigger");
        new Dial($parentEl, $triggerEl, $dialEl, {
          triggerType: triggerType ? triggerType : Default11.triggerType
        });
      } else {
        console.error("Dial with id ".concat(dialId, " does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"));
      }
    } else {
      console.error("Dial with id ".concat($parentEl.id, " does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"));
    }
  });
}
if (typeof window !== "undefined") {
  window.Dial = Dial;
  window.initDials = initDials;
}
var dial_default = Dial;

// node_modules/flowbite/lib/esm/components/input-counter/index.js
var __assign12 = function() {
  __assign12 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign12.apply(this, arguments);
};
var Default12 = {
  minValue: null,
  maxValue: null,
  onIncrement: function() {
  },
  onDecrement: function() {
  }
};
var DefaultInstanceOptions12 = {
  id: null,
  override: true
};
var InputCounter = (
  /** @class */
  function() {
    function InputCounter2(targetEl, incrementEl, decrementEl, options, instanceOptions) {
      if (targetEl === void 0) {
        targetEl = null;
      }
      if (incrementEl === void 0) {
        incrementEl = null;
      }
      if (decrementEl === void 0) {
        decrementEl = null;
      }
      if (options === void 0) {
        options = Default12;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions12;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
      this._targetEl = targetEl;
      this._incrementEl = incrementEl;
      this._decrementEl = decrementEl;
      this._options = __assign12(__assign12({}, Default12), options);
      this._initialized = false;
      this.init();
      instances_default.addInstance("InputCounter", this, this._instanceId, instanceOptions.override);
    }
    InputCounter2.prototype.init = function() {
      var _this = this;
      if (this._targetEl && !this._initialized) {
        this._inputHandler = function(event) {
          {
            var target = event.target;
            if (!/^\d*$/.test(target.value)) {
              target.value = target.value.replace(/[^\d]/g, "");
            }
            if (_this._options.maxValue !== null && parseInt(target.value) > _this._options.maxValue) {
              target.value = _this._options.maxValue.toString();
            }
            if (_this._options.minValue !== null && parseInt(target.value) < _this._options.minValue) {
              target.value = _this._options.minValue.toString();
            }
          }
        };
        this._incrementClickHandler = function() {
          _this.increment();
        };
        this._decrementClickHandler = function() {
          _this.decrement();
        };
        this._targetEl.addEventListener("input", this._inputHandler);
        if (this._incrementEl) {
          this._incrementEl.addEventListener("click", this._incrementClickHandler);
        }
        if (this._decrementEl) {
          this._decrementEl.addEventListener("click", this._decrementClickHandler);
        }
        this._initialized = true;
      }
    };
    InputCounter2.prototype.destroy = function() {
      if (this._targetEl && this._initialized) {
        this._targetEl.removeEventListener("input", this._inputHandler);
        if (this._incrementEl) {
          this._incrementEl.removeEventListener("click", this._incrementClickHandler);
        }
        if (this._decrementEl) {
          this._decrementEl.removeEventListener("click", this._decrementClickHandler);
        }
        this._initialized = false;
      }
    };
    InputCounter2.prototype.removeInstance = function() {
      instances_default.removeInstance("InputCounter", this._instanceId);
    };
    InputCounter2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    InputCounter2.prototype.getCurrentValue = function() {
      return parseInt(this._targetEl.value) || 0;
    };
    InputCounter2.prototype.increment = function() {
      if (this._options.maxValue !== null && this.getCurrentValue() >= this._options.maxValue) {
        return;
      }
      this._targetEl.value = (this.getCurrentValue() + 1).toString();
      this._options.onIncrement(this);
    };
    InputCounter2.prototype.decrement = function() {
      if (this._options.minValue !== null && this.getCurrentValue() <= this._options.minValue) {
        return;
      }
      this._targetEl.value = (this.getCurrentValue() - 1).toString();
      this._options.onDecrement(this);
    };
    InputCounter2.prototype.updateOnIncrement = function(callback) {
      this._options.onIncrement = callback;
    };
    InputCounter2.prototype.updateOnDecrement = function(callback) {
      this._options.onDecrement = callback;
    };
    return InputCounter2;
  }()
);
function initInputCounters() {
  document.querySelectorAll("[data-input-counter]").forEach(function($targetEl) {
    var targetId = $targetEl.id;
    var $incrementEl = document.querySelector('[data-input-counter-increment="' + targetId + '"]');
    var $decrementEl = document.querySelector('[data-input-counter-decrement="' + targetId + '"]');
    var minValue = $targetEl.getAttribute("data-input-counter-min");
    var maxValue = $targetEl.getAttribute("data-input-counter-max");
    if ($targetEl) {
      if (!instances_default.instanceExists("InputCounter", $targetEl.getAttribute("id"))) {
        new InputCounter($targetEl, $incrementEl ? $incrementEl : null, $decrementEl ? $decrementEl : null, {
          minValue: minValue ? parseInt(minValue) : null,
          maxValue: maxValue ? parseInt(maxValue) : null
        });
      }
    } else {
      console.error('The target element with id "'.concat(targetId, '" does not exist. Please check the data-input-counter attribute.'));
    }
  });
}
if (typeof window !== "undefined") {
  window.InputCounter = InputCounter;
  window.initInputCounters = initInputCounters;
}
var input_counter_default = InputCounter;

// node_modules/flowbite/lib/esm/components/clipboard/index.js
var __assign13 = function() {
  __assign13 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign13.apply(this, arguments);
};
var Default13 = {
  htmlEntities: false,
  contentType: "input",
  onCopy: function() {
  }
};
var DefaultInstanceOptions13 = {
  id: null,
  override: true
};
var CopyClipboard = (
  /** @class */
  function() {
    function CopyClipboard2(triggerEl, targetEl, options, instanceOptions) {
      if (triggerEl === void 0) {
        triggerEl = null;
      }
      if (targetEl === void 0) {
        targetEl = null;
      }
      if (options === void 0) {
        options = Default13;
      }
      if (instanceOptions === void 0) {
        instanceOptions = DefaultInstanceOptions13;
      }
      this._instanceId = instanceOptions.id ? instanceOptions.id : targetEl.id;
      this._triggerEl = triggerEl;
      this._targetEl = targetEl;
      this._options = __assign13(__assign13({}, Default13), options);
      this._initialized = false;
      this.init();
      instances_default.addInstance("CopyClipboard", this, this._instanceId, instanceOptions.override);
    }
    CopyClipboard2.prototype.init = function() {
      var _this = this;
      if (this._targetEl && this._triggerEl && !this._initialized) {
        this._triggerElClickHandler = function() {
          _this.copy();
        };
        if (this._triggerEl) {
          this._triggerEl.addEventListener("click", this._triggerElClickHandler);
        }
        this._initialized = true;
      }
    };
    CopyClipboard2.prototype.destroy = function() {
      if (this._triggerEl && this._targetEl && this._initialized) {
        if (this._triggerEl) {
          this._triggerEl.removeEventListener("click", this._triggerElClickHandler);
        }
        this._initialized = false;
      }
    };
    CopyClipboard2.prototype.removeInstance = function() {
      instances_default.removeInstance("CopyClipboard", this._instanceId);
    };
    CopyClipboard2.prototype.destroyAndRemoveInstance = function() {
      this.destroy();
      this.removeInstance();
    };
    CopyClipboard2.prototype.getTargetValue = function() {
      if (this._options.contentType === "input") {
        return this._targetEl.value;
      }
      if (this._options.contentType === "innerHTML") {
        return this._targetEl.innerHTML;
      }
      if (this._options.contentType === "textContent") {
        return this._targetEl.textContent.replace(/\s+/g, " ").trim();
      }
    };
    CopyClipboard2.prototype.copy = function() {
      var textToCopy = this.getTargetValue();
      if (this._options.htmlEntities) {
        textToCopy = this.decodeHTML(textToCopy);
      }
      var tempTextArea = document.createElement("textarea");
      tempTextArea.value = textToCopy;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextArea);
      this._options.onCopy(this);
      return textToCopy;
    };
    CopyClipboard2.prototype.decodeHTML = function(html) {
      var textarea = document.createElement("textarea");
      textarea.innerHTML = html;
      return textarea.textContent;
    };
    CopyClipboard2.prototype.updateOnCopyCallback = function(callback) {
      this._options.onCopy = callback;
    };
    return CopyClipboard2;
  }()
);
function initCopyClipboards() {
  document.querySelectorAll("[data-copy-to-clipboard-target]").forEach(function($triggerEl) {
    var targetId = $triggerEl.getAttribute("data-copy-to-clipboard-target");
    var $targetEl = document.getElementById(targetId);
    var contentType = $triggerEl.getAttribute("data-copy-to-clipboard-content-type");
    var htmlEntities = $triggerEl.getAttribute("data-copy-to-clipboard-html-entities");
    if ($targetEl) {
      if (!instances_default.instanceExists("CopyClipboard", $targetEl.getAttribute("id"))) {
        new CopyClipboard($triggerEl, $targetEl, {
          htmlEntities: htmlEntities && htmlEntities === "true" ? true : Default13.htmlEntities,
          contentType: contentType ? contentType : Default13.contentType
        });
      }
    } else {
      console.error('The target element with id "'.concat(targetId, '" does not exist. Please check the data-copy-to-clipboard-target attribute.'));
    }
  });
}
if (typeof window !== "undefined") {
  window.CopyClipboard = CopyClipboard;
  window.initClipboards = initCopyClipboards;
}
var clipboard_default = CopyClipboard;

// node_modules/flowbite/lib/esm/components/index.js
function initFlowbite() {
  initAccordions();
  initCollapses();
  initCarousels();
  initDismisses();
  initDropdowns();
  initModals();
  initDrawers();
  initTabs();
  initTooltips();
  initPopovers();
  initDials();
  initInputCounters();
  initCopyClipboards();
}
if (typeof window !== "undefined") {
  window.initFlowbite = initFlowbite;
}

// node_modules/flowbite/lib/esm/index.js
var events = new events_default("load", [
  initAccordions,
  initCollapses,
  initCarousels,
  initDismisses,
  initDropdowns,
  initModals,
  initDrawers,
  initTabs,
  initTooltips,
  initPopovers,
  initDials,
  initInputCounters,
  initCopyClipboards
]);
events.init();
export {
  accordion_default as Accordion,
  carousel_default as Carousel,
  collapse_default as Collapse,
  clipboard_default as CopyClipboard,
  dial_default as Dial,
  dismiss_default as Dismiss,
  drawer_default as Drawer,
  dropdown_default as Dropdown,
  input_counter_default as InputCounter,
  modal_default as Modal,
  popover_default as Popover,
  tabs_default as Tabs,
  tooltip_default as Tooltip,
  initAccordions,
  initCarousels,
  initCollapses,
  initCopyClipboards,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initFlowbite,
  initInputCounters,
  initModals,
  initPopovers,
  initTabs,
  initTooltips
};
//# sourceMappingURL=flowbite.js.map
