// Compiled by ClojureScript 0.0-2173
goog.provide('time_tracker.core');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs_time.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('goog.string');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
time_tracker.core.start_timer = (function start_timer(timer,owner){var stop_chan = cljs.core.async.chan.call(null);var c__6207__auto___21941 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6208__auto__ = (function (){var switch__6192__auto__ = (function (state_21919){var state_val_21920 = (state_21919[1]);if((state_val_21920 === 1))
{var state_21919__$1 = state_21919;var statearr_21921_21942 = state_21919__$1;(statearr_21921_21942[2] = null);
(statearr_21921_21942[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21920 === 2))
{var inst_21890 = cljs.core.async.timeout.call(null,500);var inst_21891 = [inst_21890,stop_chan];var inst_21892 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21891,null));var state_21919__$1 = state_21919;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_21919__$1,4,inst_21892);
} else
{if((state_val_21920 === 3))
{var inst_21917 = (state_21919[2]);var state_21919__$1 = state_21919;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21919__$1,inst_21917);
} else
{if((state_val_21920 === 4))
{var inst_21894 = (state_21919[2]);var inst_21895 = cljs.core.nth.call(null,inst_21894,0,null);var inst_21896 = cljs.core.nth.call(null,inst_21894,1,null);var inst_21897 = cljs.core._EQ_.call(null,inst_21896,stop_chan);var state_21919__$1 = (function (){var statearr_21922 = state_21919;(statearr_21922[7] = inst_21895);
return statearr_21922;
})();if(inst_21897)
{var statearr_21923_21943 = state_21919__$1;(statearr_21923_21943[1] = 5);
} else
{var statearr_21924_21944 = state_21919__$1;(statearr_21924_21944[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21920 === 5))
{var state_21919__$1 = state_21919;var statearr_21925_21945 = state_21919__$1;(statearr_21925_21945[2] = null);
(statearr_21925_21945[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21920 === 6))
{var inst_21901 = (state_21919[8]);var inst_21900 = cljs.core.deref.call(null,timer);var inst_21901__$1 = new cljs.core.Keyword(null,"last-elapsed","last-elapsed",2974401719).cljs$core$IFn$_invoke$arity$1(inst_21900);var state_21919__$1 = (function (){var statearr_21926 = state_21919;(statearr_21926[8] = inst_21901__$1);
return statearr_21926;
})();if(cljs.core.truth_(inst_21901__$1))
{var statearr_21927_21946 = state_21919__$1;(statearr_21927_21946[1] = 8);
} else
{var statearr_21928_21947 = state_21919__$1;(statearr_21928_21947[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21920 === 7))
{var inst_21915 = (state_21919[2]);var state_21919__$1 = state_21919;var statearr_21929_21948 = state_21919__$1;(statearr_21929_21948[2] = inst_21915);
(statearr_21929_21948[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21920 === 8))
{var inst_21901 = (state_21919[8]);var state_21919__$1 = state_21919;var statearr_21930_21949 = state_21919__$1;(statearr_21930_21949[2] = inst_21901);
(statearr_21930_21949[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21920 === 9))
{var state_21919__$1 = state_21919;var statearr_21931_21950 = state_21919__$1;(statearr_21931_21950[2] = 0);
(statearr_21931_21950[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21920 === 10))
{var inst_21905 = (state_21919[2]);var inst_21906 = cljs.core.deref.call(null,timer);var inst_21907 = new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(inst_21906);var inst_21908 = cljs_time.core.now.call(null);var inst_21909 = cljs_time.core.interval.call(null,inst_21907,inst_21908);var inst_21910 = cljs_time.core.in_millis.call(null,inst_21909);var inst_21911 = (inst_21905 + inst_21910);var inst_21912 = om.core.update_BANG_.call(null,timer,new cljs.core.Keyword(null,"elapsed","elapsed",3642442990),inst_21911);var state_21919__$1 = (function (){var statearr_21932 = state_21919;(statearr_21932[9] = inst_21912);
return statearr_21932;
})();var statearr_21933_21951 = state_21919__$1;(statearr_21933_21951[2] = null);
(statearr_21933_21951[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6192__auto__){
return (function() {
var state_machine__6193__auto__ = null;
var state_machine__6193__auto____0 = (function (){var statearr_21937 = [null,null,null,null,null,null,null,null,null,null];(statearr_21937[0] = state_machine__6193__auto__);
(statearr_21937[1] = 1);
return statearr_21937;
});
var state_machine__6193__auto____1 = (function (state_21919){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_21919);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e21938){if((e21938 instanceof Object))
{var ex__6196__auto__ = e21938;var statearr_21939_21952 = state_21919;(statearr_21939_21952[5] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21919);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21938;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21953 = state_21919;
state_21919 = G__21953;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_21919){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_21919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__))
})();var state__6209__auto__ = (function (){var statearr_21940 = f__6208__auto__.call(null);(statearr_21940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6207__auto___21941);
return statearr_21940;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6209__auto__);
}));
om.core.update_BANG_.call(null,timer,new cljs.core.Keyword(null,"stopped","stopped",3424552255),false);
om.core.update_BANG_.call(null,timer,new cljs.core.Keyword(null,"start-time","start-time",3689550026),cljs_time.core.now.call(null));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"stop-chan","stop-chan",2597343663),stop_chan);
});
time_tracker.core.stop_timer = (function stop_timer(timer,owner){var stop_chan = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"stop-chan","stop-chan",2597343663));cljs.core.async.put_BANG_.call(null,stop_chan,true);
om.core.update_BANG_.call(null,timer,new cljs.core.Keyword(null,"stopped","stopped",3424552255),true);
return om.core.update_BANG_.call(null,timer,new cljs.core.Keyword(null,"last-elapsed","last-elapsed",2974401719),new cljs.core.Keyword(null,"elapsed","elapsed",3642442990).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,timer)));
});
time_tracker.core.add_timer = (function add_timer(timers,owner){return om.core.transact_BANG_.call(null,timers,(function (p1__21954_SHARP_){return cljs.core.conj.call(null,p1__21954_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",1124275658),"new timer",new cljs.core.Keyword(null,"elapsed","elapsed",3642442990),0,new cljs.core.Keyword(null,"stopped","stopped",3424552255),true], null));
}));
});
time_tracker.core.timer_view = (function timer_view(p__21955,owner){var map__21960 = p__21955;var map__21960__$1 = ((cljs.core.seq_QMARK_.call(null,map__21960))?cljs.core.apply.call(null,cljs.core.hash_map,map__21960):map__21960);var timer = map__21960__$1;var stopped = cljs.core.get.call(null,map__21960__$1,new cljs.core.Keyword(null,"stopped","stopped",3424552255));var elapsed = cljs.core.get.call(null,map__21960__$1,new cljs.core.Keyword(null,"elapsed","elapsed",3642442990));var title = cljs.core.get.call(null,map__21960__$1,new cljs.core.Keyword(null,"title","title",1124275658));if(typeof time_tracker.core.t21961 !== 'undefined')
{} else
{
/**
* @constructor
*/
time_tracker.core.t21961 = (function (title,elapsed,stopped,timer,map__21960,owner,p__21955,timer_view,meta21962){
this.title = title;
this.elapsed = elapsed;
this.stopped = stopped;
this.timer = timer;
this.map__21960 = map__21960;
this.owner = owner;
this.p__21955 = p__21955;
this.timer_view = timer_view;
this.meta21962 = meta21962;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
time_tracker.core.t21961.cljs$lang$type = true;
time_tracker.core.t21961.cljs$lang$ctorStr = "time-tracker.core/t21961";
time_tracker.core.t21961.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"time-tracker.core/t21961");
});
time_tracker.core.t21961.prototype.om$core$IRender$ = true;
time_tracker.core.t21961.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timer pure-g pure-u-1"},React.DOM.span({"className": "title pure-u-3-5"},self__.title),React.DOM.span({"className": "elapsed pure-u-1-5"},(function (){var seconds = ((self__.elapsed / 1000) | 0);var minutes = ((seconds / 60) | 0);var hours = ((minutes / 60) | 0);var seconds__$1 = (seconds - (60 * minutes));var minutes__$1 = (minutes - (60 * hours));return goog.string.format("%02.0f:%02.0f:%02.0f",hours,minutes__$1,seconds__$1);
})()),(cljs.core.truth_(self__.stopped)?React.DOM.button({"onClick": (function (){return time_tracker.core.start_timer.call(null,self__.timer,self__.owner);
}), "className": "pure-button pure-u-1-5"},"Start"):React.DOM.button({"onClick": (function (){return time_tracker.core.stop_timer.call(null,self__.timer,self__.owner);
}), "className": "pure-button pure-button-active pure-u-1-5"},"Stop")));
});
time_tracker.core.t21961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21963){var self__ = this;
var _21963__$1 = this;return self__.meta21962;
});
time_tracker.core.t21961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21963,meta21962__$1){var self__ = this;
var _21963__$1 = this;return (new time_tracker.core.t21961(self__.title,self__.elapsed,self__.stopped,self__.timer,self__.map__21960,self__.owner,self__.p__21955,self__.timer_view,meta21962__$1));
});
time_tracker.core.__GT_t21961 = (function __GT_t21961(title__$1,elapsed__$1,stopped__$1,timer__$1,map__21960__$2,owner__$1,p__21955__$1,timer_view__$1,meta21962){return (new time_tracker.core.t21961(title__$1,elapsed__$1,stopped__$1,timer__$1,map__21960__$2,owner__$1,p__21955__$1,timer_view__$1,meta21962));
});
}
return (new time_tracker.core.t21961(title,elapsed,stopped,timer,map__21960__$1,owner,p__21955,timer_view,null));
});
time_tracker.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timers","timers",4435203392),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",1124275658),"internet",new cljs.core.Keyword(null,"elapsed","elapsed",3642442990),0,new cljs.core.Keyword(null,"stopped","stopped",3424552255),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",1124275658),"everything else",new cljs.core.Keyword(null,"elapsed","elapsed",3642442990),0,new cljs.core.Keyword(null,"stopped","stopped",3424552255),true], null)], null)], null));
time_tracker.core.timers_view = (function timers_view(p__21964,owner){var map__21969 = p__21964;var map__21969__$1 = ((cljs.core.seq_QMARK_.call(null,map__21969))?cljs.core.apply.call(null,cljs.core.hash_map,map__21969):map__21969);var timers = cljs.core.get.call(null,map__21969__$1,new cljs.core.Keyword(null,"timers","timers",4435203392));if(typeof time_tracker.core.t21970 !== 'undefined')
{} else
{
/**
* @constructor
*/
time_tracker.core.t21970 = (function (timers,map__21969,owner,p__21964,timers_view,meta21971){
this.timers = timers;
this.map__21969 = map__21969;
this.owner = owner;
this.p__21964 = p__21964;
this.timers_view = timers_view;
this.meta21971 = meta21971;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
time_tracker.core.t21970.cljs$lang$type = true;
time_tracker.core.t21970.cljs$lang$ctorStr = "time-tracker.core/t21970";
time_tracker.core.t21970.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"time-tracker.core/t21970");
});
time_tracker.core.t21970.prototype.om$core$IRender$ = true;
time_tracker.core.t21970.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "page"},cljs.core.apply.call(null,om.dom.div,{"className": "pure-g timers"},om.core.build_all.call(null,time_tracker.core.timer_view,self__.timers)),React.DOM.button({"className": "pure-button", "onClick": (function (){return time_tracker.core.add_timer.call(null,self__.timers,self__.owner);
})},"New timer"));
});
time_tracker.core.t21970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21972){var self__ = this;
var _21972__$1 = this;return self__.meta21971;
});
time_tracker.core.t21970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21972,meta21971__$1){var self__ = this;
var _21972__$1 = this;return (new time_tracker.core.t21970(self__.timers,self__.map__21969,self__.owner,self__.p__21964,self__.timers_view,meta21971__$1));
});
time_tracker.core.__GT_t21970 = (function __GT_t21970(timers__$1,map__21969__$2,owner__$1,p__21964__$1,timers_view__$1,meta21971){return (new time_tracker.core.t21970(timers__$1,map__21969__$2,owner__$1,p__21964__$1,timers_view__$1,meta21971));
});
}
return (new time_tracker.core.t21970(timers,map__21969__$1,owner,p__21964,timers_view,null));
});
om.core.root.call(null,time_tracker.core.timers_view,time_tracker.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app"),new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114),(function (tx_data,root_cursor){return null;
})], null));

//# sourceMappingURL=core.js.map