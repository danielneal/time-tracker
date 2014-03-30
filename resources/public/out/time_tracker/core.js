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
time_tracker.core.start_timer = (function start_timer(timer,owner){var stop_chan = cljs.core.async.chan.call(null);var c__6207__auto___22105 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6208__auto__ = (function (){var switch__6192__auto__ = (function (state_22083){var state_val_22084 = (state_22083[1]);if((state_val_22084 === 1))
{var state_22083__$1 = state_22083;var statearr_22085_22106 = state_22083__$1;(statearr_22085_22106[2] = null);
(statearr_22085_22106[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22084 === 2))
{var inst_22054 = cljs.core.async.timeout.call(null,100);var inst_22055 = [inst_22054,stop_chan];var inst_22056 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_22055,null));var state_22083__$1 = state_22083;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22083__$1,4,inst_22056);
} else
{if((state_val_22084 === 3))
{var inst_22081 = (state_22083[2]);var state_22083__$1 = state_22083;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22083__$1,inst_22081);
} else
{if((state_val_22084 === 4))
{var inst_22058 = (state_22083[2]);var inst_22059 = cljs.core.nth.call(null,inst_22058,0,null);var inst_22060 = cljs.core.nth.call(null,inst_22058,1,null);var inst_22061 = cljs.core._EQ_.call(null,inst_22060,stop_chan);var state_22083__$1 = (function (){var statearr_22086 = state_22083;(statearr_22086[7] = inst_22059);
return statearr_22086;
})();if(inst_22061)
{var statearr_22087_22107 = state_22083__$1;(statearr_22087_22107[1] = 5);
} else
{var statearr_22088_22108 = state_22083__$1;(statearr_22088_22108[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22084 === 5))
{var state_22083__$1 = state_22083;var statearr_22089_22109 = state_22083__$1;(statearr_22089_22109[2] = null);
(statearr_22089_22109[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22084 === 6))
{var inst_22065 = (state_22083[8]);var inst_22064 = cljs.core.deref.call(null,timer);var inst_22065__$1 = new cljs.core.Keyword(null,"last-elapsed","last-elapsed",2974401719).cljs$core$IFn$_invoke$arity$1(inst_22064);var state_22083__$1 = (function (){var statearr_22090 = state_22083;(statearr_22090[8] = inst_22065__$1);
return statearr_22090;
})();if(cljs.core.truth_(inst_22065__$1))
{var statearr_22091_22110 = state_22083__$1;(statearr_22091_22110[1] = 8);
} else
{var statearr_22092_22111 = state_22083__$1;(statearr_22092_22111[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22084 === 7))
{var inst_22079 = (state_22083[2]);var state_22083__$1 = state_22083;var statearr_22093_22112 = state_22083__$1;(statearr_22093_22112[2] = inst_22079);
(statearr_22093_22112[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22084 === 8))
{var inst_22065 = (state_22083[8]);var state_22083__$1 = state_22083;var statearr_22094_22113 = state_22083__$1;(statearr_22094_22113[2] = inst_22065);
(statearr_22094_22113[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22084 === 9))
{var state_22083__$1 = state_22083;var statearr_22095_22114 = state_22083__$1;(statearr_22095_22114[2] = 0);
(statearr_22095_22114[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22084 === 10))
{var inst_22069 = (state_22083[2]);var inst_22070 = cljs.core.deref.call(null,timer);var inst_22071 = new cljs.core.Keyword(null,"start-time","start-time",3689550026).cljs$core$IFn$_invoke$arity$1(inst_22070);var inst_22072 = cljs_time.core.now.call(null);var inst_22073 = cljs_time.core.interval.call(null,inst_22071,inst_22072);var inst_22074 = cljs_time.core.in_millis.call(null,inst_22073);var inst_22075 = (inst_22069 + inst_22074);var inst_22076 = om.core.update_BANG_.call(null,timer,new cljs.core.Keyword(null,"elapsed","elapsed",3642442990),inst_22075);var state_22083__$1 = (function (){var statearr_22096 = state_22083;(statearr_22096[9] = inst_22076);
return statearr_22096;
})();var statearr_22097_22115 = state_22083__$1;(statearr_22097_22115[2] = null);
(statearr_22097_22115[1] = 2);
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
var state_machine__6193__auto____0 = (function (){var statearr_22101 = [null,null,null,null,null,null,null,null,null,null];(statearr_22101[0] = state_machine__6193__auto__);
(statearr_22101[1] = 1);
return statearr_22101;
});
var state_machine__6193__auto____1 = (function (state_22083){while(true){
var ret_value__6194__auto__ = (function (){try{while(true){
var result__6195__auto__ = switch__6192__auto__.call(null,state_22083);if(cljs.core.keyword_identical_QMARK_.call(null,result__6195__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6195__auto__;
}
break;
}
}catch (e22102){if((e22102 instanceof Object))
{var ex__6196__auto__ = e22102;var statearr_22103_22116 = state_22083;(statearr_22103_22116[5] = ex__6196__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22083);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22102;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6194__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22117 = state_22083;
state_22083 = G__22117;
continue;
}
} else
{return ret_value__6194__auto__;
}
break;
}
});
state_machine__6193__auto__ = function(state_22083){
switch(arguments.length){
case 0:
return state_machine__6193__auto____0.call(this);
case 1:
return state_machine__6193__auto____1.call(this,state_22083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6193__auto____0;
state_machine__6193__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6193__auto____1;
return state_machine__6193__auto__;
})()
;})(switch__6192__auto__))
})();var state__6209__auto__ = (function (){var statearr_22104 = f__6208__auto__.call(null);(statearr_22104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6207__auto___22105);
return statearr_22104;
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
time_tracker.core.timer_view = (function timer_view(p__22118,owner){var map__22123 = p__22118;var map__22123__$1 = ((cljs.core.seq_QMARK_.call(null,map__22123))?cljs.core.apply.call(null,cljs.core.hash_map,map__22123):map__22123);var timer = map__22123__$1;var stopped = cljs.core.get.call(null,map__22123__$1,new cljs.core.Keyword(null,"stopped","stopped",3424552255));var elapsed = cljs.core.get.call(null,map__22123__$1,new cljs.core.Keyword(null,"elapsed","elapsed",3642442990));var title = cljs.core.get.call(null,map__22123__$1,new cljs.core.Keyword(null,"title","title",1124275658));if(typeof time_tracker.core.t22124 !== 'undefined')
{} else
{
/**
* @constructor
*/
time_tracker.core.t22124 = (function (title,elapsed,stopped,timer,map__22123,owner,p__22118,timer_view,meta22125){
this.title = title;
this.elapsed = elapsed;
this.stopped = stopped;
this.timer = timer;
this.map__22123 = map__22123;
this.owner = owner;
this.p__22118 = p__22118;
this.timer_view = timer_view;
this.meta22125 = meta22125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
time_tracker.core.t22124.cljs$lang$type = true;
time_tracker.core.t22124.cljs$lang$ctorStr = "time-tracker.core/t22124";
time_tracker.core.t22124.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"time-tracker.core/t22124");
});
time_tracker.core.t22124.prototype.om$core$IRender$ = true;
time_tracker.core.t22124.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "timer"},React.DOM.span({"className": "title"},self__.title),React.DOM.span({"className": "elapsed"},(function (){var seconds_STAR_ = (self__.elapsed / 1000);var minutes_STAR_ = (seconds_STAR_ / 60);var hours = (minutes_STAR_ / 60);var millis = (self__.elapsed - (seconds_STAR_ * 1000));var seconds = (seconds_STAR_ - (60 * minutes_STAR_));var minutes = (minutes_STAR_ - (60 * hours));return goog.string.format("%02.0f:%02.0f:%02.0f:%04.0f",hours,minutes,seconds,millis);
})()),(cljs.core.truth_(self__.stopped)?React.DOM.button({"onClick": (function (){return time_tracker.core.start_timer.call(null,self__.timer,self__.owner);
})},"Start"):React.DOM.button({"onClick": (function (){return time_tracker.core.stop_timer.call(null,self__.timer,self__.owner);
})},"Stop")));
});
time_tracker.core.t22124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22126){var self__ = this;
var _22126__$1 = this;return self__.meta22125;
});
time_tracker.core.t22124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22126,meta22125__$1){var self__ = this;
var _22126__$1 = this;return (new time_tracker.core.t22124(self__.title,self__.elapsed,self__.stopped,self__.timer,self__.map__22123,self__.owner,self__.p__22118,self__.timer_view,meta22125__$1));
});
time_tracker.core.__GT_t22124 = (function __GT_t22124(title__$1,elapsed__$1,stopped__$1,timer__$1,map__22123__$2,owner__$1,p__22118__$1,timer_view__$1,meta22125){return (new time_tracker.core.t22124(title__$1,elapsed__$1,stopped__$1,timer__$1,map__22123__$2,owner__$1,p__22118__$1,timer_view__$1,meta22125));
});
}
return (new time_tracker.core.t22124(title,elapsed,stopped,timer,map__22123__$1,owner,p__22118,timer_view,null));
});
time_tracker.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timers","timers",4435203392),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",1124275658),"internet",new cljs.core.Keyword(null,"elapsed","elapsed",3642442990),0,new cljs.core.Keyword(null,"stopped","stopped",3424552255),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",1124275658),"everything else",new cljs.core.Keyword(null,"elapsed","elapsed",3642442990),0,new cljs.core.Keyword(null,"stopped","stopped",3424552255),true], null)], null)], null));
time_tracker.core.timers_view = (function timers_view(p__22127,owner){var map__22132 = p__22127;var map__22132__$1 = ((cljs.core.seq_QMARK_.call(null,map__22132))?cljs.core.apply.call(null,cljs.core.hash_map,map__22132):map__22132);var timers = cljs.core.get.call(null,map__22132__$1,new cljs.core.Keyword(null,"timers","timers",4435203392));if(typeof time_tracker.core.t22133 !== 'undefined')
{} else
{
/**
* @constructor
*/
time_tracker.core.t22133 = (function (timers,map__22132,owner,p__22127,timers_view,meta22134){
this.timers = timers;
this.map__22132 = map__22132;
this.owner = owner;
this.p__22127 = p__22127;
this.timers_view = timers_view;
this.meta22134 = meta22134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
time_tracker.core.t22133.cljs$lang$type = true;
time_tracker.core.t22133.cljs$lang$ctorStr = "time-tracker.core/t22133";
time_tracker.core.t22133.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"time-tracker.core/t22133");
});
time_tracker.core.t22133.prototype.om$core$IRender$ = true;
time_tracker.core.t22133.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,om.dom.div,null,om.core.build_all.call(null,time_tracker.core.timer_view,self__.timers));
});
time_tracker.core.t22133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22135){var self__ = this;
var _22135__$1 = this;return self__.meta22134;
});
time_tracker.core.t22133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22135,meta22134__$1){var self__ = this;
var _22135__$1 = this;return (new time_tracker.core.t22133(self__.timers,self__.map__22132,self__.owner,self__.p__22127,self__.timers_view,meta22134__$1));
});
time_tracker.core.__GT_t22133 = (function __GT_t22133(timers__$1,map__22132__$2,owner__$1,p__22127__$1,timers_view__$1,meta22134){return (new time_tracker.core.t22133(timers__$1,map__22132__$2,owner__$1,p__22127__$1,timers_view__$1,meta22134));
});
}
return (new time_tracker.core.t22133(timers,map__22132__$1,owner,p__22127,timers_view,null));
});
om.core.root.call(null,time_tracker.core.timers_view,time_tracker.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app"),new cljs.core.Keyword(null,"tx-listen","tx-listen",666878114),(function (tx_data,root_cursor){return null;
})], null));

//# sourceMappingURL=core.js.map