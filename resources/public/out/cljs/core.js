// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
goog.require('goog.string');
cljs.core._STAR_clojurescript_version_STAR_ = "0.0-2173";
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a different way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Set *print-fn* to f.
*/
cljs.core.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){return cljs.core._STAR_print_fn_STAR_ = f;
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core._STAR_print_length_STAR_ = null;
cljs.core._STAR_print_level_STAR_ = null;
cljs.core.pr_opts = (function pr_opts(){return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flush-on-newline","flush-on-newline",4338025857),cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Keyword(null,"readably","readably",4441712502),cljs.core._STAR_print_readably_STAR_,new cljs.core.Keyword(null,"meta","meta",1017252215),cljs.core._STAR_print_meta_STAR_,new cljs.core.Keyword(null,"dup","dup",1014004081),cljs.core._STAR_print_dup_STAR_,new cljs.core.Keyword(null,"print-length","print-length",3960797560),cljs.core._STAR_print_length_STAR_], null);
});
/**
* Set *print-fn* to console.log
*/
cljs.core.enable_console_print_BANG_ = (function enable_console_print_BANG_(){cljs.core._STAR_print_newline_STAR_ = false;
return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22136__delegate = function (args){return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22136 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22136__delegate.call(this,args);};
G__22136.cljs$lang$maxFixedArity = 0;
G__22136.cljs$lang$applyTo = (function (arglist__22137){
var args = cljs.core.seq(arglist__22137);
return G__22136__delegate(args);
});
G__22136.cljs$core$IFn$_invoke$arity$variadic = G__22136__delegate;
return G__22136;
})()
;
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){return (x != null && x !== false);
});
cljs.core.not_native = null;
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){return (x == null);
});
cljs.core.array_QMARK_ = (function array_QMARK_(x){return x instanceof Array;
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){return typeof n === 'number';
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
cljs.core.object_QMARK_ = (function object_QMARK_(x){if(!((x == null)))
{return (x.constructor === Object);
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){return goog.isString(x);
});
/**
* Internal - do not use!
*/
cljs.core.native_satisfies_QMARK_ = (function native_satisfies_QMARK_(p,x){var x__$1 = (((x == null))?null:x);if((p[goog.typeOf(x__$1)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.type = (function type(x){if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.missing_protocol = (function missing_protocol(proto,obj){var ty = cljs.core.type.call(null,obj);var ty__$1 = (cljs.core.truth_((function (){var and__3431__auto__ = ty;if(cljs.core.truth_(and__3431__auto__))
{return ty.cljs$lang$type;
} else
{return and__3431__auto__;
}
})())?ty.cljs$lang$ctorStr:goog.typeOf(obj));return (new Error(["No protocol method ",proto," defined for type ",ty__$1,": ",obj].join("")));
});
cljs.core.type__GT_str = (function type__GT_str(ty){var temp__4090__auto__ = ty.cljs$lang$ctorStr;if(cljs.core.truth_(temp__4090__auto__))
{var s = temp__4090__auto__;return s;
} else
{return [cljs.core.str(ty)].join('');
}
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){return (new Array(size));
});
var make_array__2 = (function (type,size){return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$core$IFn$_invoke$arity$1 = make_array__1;
make_array.cljs$core$IFn$_invoke$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(arr){var len = arr.length;var new_arr = (new Array(len));var n__4291__auto___22138 = len;var i_22139 = 0;while(true){
if((i_22139 < n__4291__auto___22138))
{(new_arr[i_22139] = (arr[i_22139]));
{
var G__22140 = (i_22139 + 1);
i_22139 = G__22140;
continue;
}
} else
{}
break;
}
return new_arr;
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){return (array[i]);
});
var aget__3 = (function() { 
var G__22141__delegate = function (array,i,idxs){return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__22141 = function (array,i,var_args){
var idxs = null;if (arguments.length > 2) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22141__delegate.call(this,array,i,idxs);};
G__22141.cljs$lang$maxFixedArity = 2;
G__22141.cljs$lang$applyTo = (function (arglist__22142){
var array = cljs.core.first(arglist__22142);
arglist__22142 = cljs.core.next(arglist__22142);
var i = cljs.core.first(arglist__22142);
var idxs = cljs.core.rest(arglist__22142);
return G__22141__delegate(array,i,idxs);
});
G__22141.cljs$core$IFn$_invoke$arity$variadic = G__22141__delegate;
return G__22141;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$core$IFn$_invoke$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$core$IFn$_invoke$arity$2 = aget__2;
aget.cljs$core$IFn$_invoke$arity$variadic = aget__3.cljs$core$IFn$_invoke$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
* @param {...*} var_args
*/
cljs.core.aset = (function() {
var aset = null;
var aset__3 = (function (array,i,val){return (array[i] = val);
});
var aset__4 = (function() { 
var G__22143__delegate = function (array,idx,idx2,idxv){return cljs.core.apply.call(null,aset,(array[idx]),idx2,idxv);
};
var G__22143 = function (array,idx,idx2,var_args){
var idxv = null;if (arguments.length > 3) {
  idxv = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__22143__delegate.call(this,array,idx,idx2,idxv);};
G__22143.cljs$lang$maxFixedArity = 3;
G__22143.cljs$lang$applyTo = (function (arglist__22144){
var array = cljs.core.first(arglist__22144);
arglist__22144 = cljs.core.next(arglist__22144);
var idx = cljs.core.first(arglist__22144);
arglist__22144 = cljs.core.next(arglist__22144);
var idx2 = cljs.core.first(arglist__22144);
var idxv = cljs.core.rest(arglist__22144);
return G__22143__delegate(array,idx,idx2,idxv);
});
G__22143.cljs$core$IFn$_invoke$arity$variadic = G__22143__delegate;
return G__22143;
})()
;
aset = function(array,idx,idx2,var_args){
var idxv = var_args;
switch(arguments.length){
case 3:
return aset__3.call(this,array,idx,idx2);
default:
return aset__4.cljs$core$IFn$_invoke$arity$variadic(array,idx,idx2, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aset.cljs$lang$maxFixedArity = 3;
aset.cljs$lang$applyTo = aset__4.cljs$lang$applyTo;
aset.cljs$core$IFn$_invoke$arity$3 = aset__3;
aset.cljs$core$IFn$_invoke$arity$variadic = aset__4.cljs$core$IFn$_invoke$arity$variadic;
return aset;
})()
;
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){return cljs.core.reduce.call(null,(function (a,x){a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$core$IFn$_invoke$arity$1 = into_array__1;
into_array.cljs$core$IFn$_invoke$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.Fn = (function (){var obj22146 = {};return obj22146;
})();
cljs.core.IFn = (function (){var obj22148 = {};return obj22148;
})();
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._invoke[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._invoke["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$core$IFn$_invoke$arity$1 = _invoke__1;
_invoke.cljs$core$IFn$_invoke$arity$2 = _invoke__2;
_invoke.cljs$core$IFn$_invoke$arity$3 = _invoke__3;
_invoke.cljs$core$IFn$_invoke$arity$4 = _invoke__4;
_invoke.cljs$core$IFn$_invoke$arity$5 = _invoke__5;
_invoke.cljs$core$IFn$_invoke$arity$6 = _invoke__6;
_invoke.cljs$core$IFn$_invoke$arity$7 = _invoke__7;
_invoke.cljs$core$IFn$_invoke$arity$8 = _invoke__8;
_invoke.cljs$core$IFn$_invoke$arity$9 = _invoke__9;
_invoke.cljs$core$IFn$_invoke$arity$10 = _invoke__10;
_invoke.cljs$core$IFn$_invoke$arity$11 = _invoke__11;
_invoke.cljs$core$IFn$_invoke$arity$12 = _invoke__12;
_invoke.cljs$core$IFn$_invoke$arity$13 = _invoke__13;
_invoke.cljs$core$IFn$_invoke$arity$14 = _invoke__14;
_invoke.cljs$core$IFn$_invoke$arity$15 = _invoke__15;
_invoke.cljs$core$IFn$_invoke$arity$16 = _invoke__16;
_invoke.cljs$core$IFn$_invoke$arity$17 = _invoke__17;
_invoke.cljs$core$IFn$_invoke$arity$18 = _invoke__18;
_invoke.cljs$core$IFn$_invoke$arity$19 = _invoke__19;
_invoke.cljs$core$IFn$_invoke$arity$20 = _invoke__20;
_invoke.cljs$core$IFn$_invoke$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICloneable = (function (){var obj22150 = {};return obj22150;
})();
cljs.core._clone = (function _clone(value){if((function (){var and__3431__auto__ = value;if(and__3431__auto__)
{return value.cljs$core$ICloneable$_clone$arity$1;
} else
{return and__3431__auto__;
}
})())
{return value.cljs$core$ICloneable$_clone$arity$1(value);
} else
{var x__4070__auto__ = (((value == null))?null:value);return (function (){var or__3443__auto__ = (cljs.core._clone[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._clone["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICloneable.-clone",value);
}
}
})().call(null,value);
}
});
cljs.core.ICounted = (function (){var obj22152 = {};return obj22152;
})();
cljs.core._count = (function _count(coll){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._count[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._count["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = (function (){var obj22154 = {};return obj22154;
})();
cljs.core._empty = (function _empty(coll){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._empty[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._empty["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = (function (){var obj22156 = {};return obj22156;
})();
cljs.core._conj = (function _conj(coll,o){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._conj[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._conj["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = (function (){var obj22158 = {};return obj22158;
})();
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._nth[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._nth["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._nth[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._nth["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$core$IFn$_invoke$arity$2 = _nth__2;
_nth.cljs$core$IFn$_invoke$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = (function (){var obj22160 = {};return obj22160;
})();
cljs.core.ISeq = (function (){var obj22162 = {};return obj22162;
})();
cljs.core._first = (function _first(coll){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._first[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._first["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._rest[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._rest["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = (function (){var obj22164 = {};return obj22164;
})();
cljs.core._next = (function _next(coll){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._next[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._next["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = (function (){var obj22166 = {};return obj22166;
})();
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){if((function (){var and__3431__auto__ = o;if(and__3431__auto__)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3431__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__4070__auto__ = (((o == null))?null:o);return (function (){var or__3443__auto__ = (cljs.core._lookup[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._lookup["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){if((function (){var and__3431__auto__ = o;if(and__3431__auto__)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3431__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__4070__auto__ = (((o == null))?null:o);return (function (){var or__3443__auto__ = (cljs.core._lookup[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._lookup["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$core$IFn$_invoke$arity$2 = _lookup__2;
_lookup.cljs$core$IFn$_invoke$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = (function (){var obj22168 = {};return obj22168;
})();
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._contains_key_QMARK_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._assoc[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._assoc["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = (function (){var obj22170 = {};return obj22170;
})();
cljs.core._dissoc = (function _dissoc(coll,k){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._dissoc[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._dissoc["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = (function (){var obj22172 = {};return obj22172;
})();
cljs.core._key = (function _key(coll){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._key[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._key["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._val[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._val["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = (function (){var obj22174 = {};return obj22174;
})();
cljs.core._disjoin = (function _disjoin(coll,v){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._disjoin[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._disjoin["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = (function (){var obj22176 = {};return obj22176;
})();
cljs.core._peek = (function _peek(coll){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._peek[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._peek["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._pop[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._pop["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = (function (){var obj22178 = {};return obj22178;
})();
cljs.core._assoc_n = (function _assoc_n(coll,n,val){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._assoc_n[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._assoc_n["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = (function (){var obj22180 = {};return obj22180;
})();
cljs.core._deref = (function _deref(o){if((function (){var and__3431__auto__ = o;if(and__3431__auto__)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3431__auto__;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__4070__auto__ = (((o == null))?null:o);return (function (){var or__3443__auto__ = (cljs.core._deref[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._deref["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = (function (){var obj22182 = {};return obj22182;
})();
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){if((function (){var and__3431__auto__ = o;if(and__3431__auto__)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3431__auto__;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__4070__auto__ = (((o == null))?null:o);return (function (){var or__3443__auto__ = (cljs.core._deref_with_timeout[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._deref_with_timeout["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = (function (){var obj22184 = {};return obj22184;
})();
cljs.core._meta = (function _meta(o){if((function (){var and__3431__auto__ = o;if(and__3431__auto__)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3431__auto__;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__4070__auto__ = (((o == null))?null:o);return (function (){var or__3443__auto__ = (cljs.core._meta[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._meta["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = (function (){var obj22186 = {};return obj22186;
})();
cljs.core._with_meta = (function _with_meta(o,meta){if((function (){var and__3431__auto__ = o;if(and__3431__auto__)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3431__auto__;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__4070__auto__ = (((o == null))?null:o);return (function (){var or__3443__auto__ = (cljs.core._with_meta[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._with_meta["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = (function (){var obj22188 = {};return obj22188;
})();
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._reduce[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._reduce["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._reduce[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._reduce["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$core$IFn$_invoke$arity$2 = _reduce__2;
_reduce.cljs$core$IFn$_invoke$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = (function (){var obj22190 = {};return obj22190;
})();
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._kv_reduce[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._kv_reduce["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = (function (){var obj22192 = {};return obj22192;
})();
cljs.core._equiv = (function _equiv(o,other){if((function (){var and__3431__auto__ = o;if(and__3431__auto__)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3431__auto__;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__4070__auto__ = (((o == null))?null:o);return (function (){var or__3443__auto__ = (cljs.core._equiv[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._equiv["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = (function (){var obj22194 = {};return obj22194;
})();
cljs.core._hash = (function _hash(o){if((function (){var and__3431__auto__ = o;if(and__3431__auto__)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3431__auto__;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__4070__auto__ = (((o == null))?null:o);return (function (){var or__3443__auto__ = (cljs.core._hash[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._hash["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = (function (){var obj22196 = {};return obj22196;
})();
cljs.core._seq = (function _seq(o){if((function (){var and__3431__auto__ = o;if(and__3431__auto__)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3431__auto__;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__4070__auto__ = (((o == null))?null:o);return (function (){var or__3443__auto__ = (cljs.core._seq[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._seq["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = (function (){var obj22198 = {};return obj22198;
})();
cljs.core.IList = (function (){var obj22200 = {};return obj22200;
})();
cljs.core.IRecord = (function (){var obj22202 = {};return obj22202;
})();
cljs.core.IReversible = (function (){var obj22204 = {};return obj22204;
})();
cljs.core._rseq = (function _rseq(coll){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._rseq[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._rseq["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = (function (){var obj22206 = {};return obj22206;
})();
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._sorted_seq[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._sorted_seq["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._sorted_seq_from[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._sorted_seq_from["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._entry_key[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._entry_key["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._comparator[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._comparator["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IWriter = (function (){var obj22208 = {};return obj22208;
})();
cljs.core._write = (function _write(writer,s){if((function (){var and__3431__auto__ = writer;if(and__3431__auto__)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3431__auto__;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__4070__auto__ = (((writer == null))?null:writer);return (function (){var or__3443__auto__ = (cljs.core._write[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._write["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){if((function (){var and__3431__auto__ = writer;if(and__3431__auto__)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3431__auto__;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__4070__auto__ = (((writer == null))?null:writer);return (function (){var or__3443__auto__ = (cljs.core._flush[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._flush["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = (function (){var obj22210 = {};return obj22210;
})();
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){if((function (){var and__3431__auto__ = o;if(and__3431__auto__)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3431__auto__;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__4070__auto__ = (((o == null))?null:o);return (function (){var or__3443__auto__ = (cljs.core._pr_writer[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._pr_writer["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = (function (){var obj22212 = {};return obj22212;
})();
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){if((function (){var and__3431__auto__ = d;if(and__3431__auto__)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__4070__auto__ = (((d == null))?null:d);return (function (){var or__3443__auto__ = (cljs.core._realized_QMARK_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._realized_QMARK_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = (function (){var obj22214 = {};return obj22214;
})();
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._notify_watches[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._notify_watches["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._add_watch[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._add_watch["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){if((function (){var and__3431__auto__ = this$;if(and__3431__auto__)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3431__auto__;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__4070__auto__ = (((this$ == null))?null:this$);return (function (){var or__3443__auto__ = (cljs.core._remove_watch[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._remove_watch["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = (function (){var obj22216 = {};return obj22216;
})();
cljs.core._as_transient = (function _as_transient(coll){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._as_transient[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._as_transient["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = (function (){var obj22218 = {};return obj22218;
})();
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){if((function (){var and__3431__auto__ = tcoll;if(and__3431__auto__)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__4070__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3443__auto__ = (cljs.core._conj_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._conj_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){if((function (){var and__3431__auto__ = tcoll;if(and__3431__auto__)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__4070__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3443__auto__ = (cljs.core._persistent_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._persistent_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = (function (){var obj22220 = {};return obj22220;
})();
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){if((function (){var and__3431__auto__ = tcoll;if(and__3431__auto__)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__4070__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3443__auto__ = (cljs.core._assoc_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._assoc_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = (function (){var obj22222 = {};return obj22222;
})();
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){if((function (){var and__3431__auto__ = tcoll;if(and__3431__auto__)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__4070__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3443__auto__ = (cljs.core._dissoc_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._dissoc_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = (function (){var obj22224 = {};return obj22224;
})();
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){if((function (){var and__3431__auto__ = tcoll;if(and__3431__auto__)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3431__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__4070__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3443__auto__ = (cljs.core._assoc_n_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){if((function (){var and__3431__auto__ = tcoll;if(and__3431__auto__)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3431__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__4070__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3443__auto__ = (cljs.core._pop_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._pop_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = (function (){var obj22226 = {};return obj22226;
})();
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){if((function (){var and__3431__auto__ = tcoll;if(and__3431__auto__)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3431__auto__;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__4070__auto__ = (((tcoll == null))?null:tcoll);return (function (){var or__3443__auto__ = (cljs.core._disjoin_BANG_[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._disjoin_BANG_["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = (function (){var obj22228 = {};return obj22228;
})();
cljs.core._compare = (function _compare(x,y){if((function (){var and__3431__auto__ = x;if(and__3431__auto__)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3431__auto__;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__4070__auto__ = (((x == null))?null:x);return (function (){var or__3443__auto__ = (cljs.core._compare[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._compare["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = (function (){var obj22230 = {};return obj22230;
})();
cljs.core._drop_first = (function _drop_first(coll){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._drop_first[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._drop_first["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = (function (){var obj22232 = {};return obj22232;
})();
cljs.core._chunked_first = (function _chunked_first(coll){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._chunked_first[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._chunked_first["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._chunked_rest[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._chunked_rest["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = (function (){var obj22234 = {};return obj22234;
})();
cljs.core._chunked_next = (function _chunked_next(coll){if((function (){var and__3431__auto__ = coll;if(and__3431__auto__)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3431__auto__;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__4070__auto__ = (((coll == null))?null:coll);return (function (){var or__3443__auto__ = (cljs.core._chunked_next[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._chunked_next["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INamed = (function (){var obj22236 = {};return obj22236;
})();
cljs.core._name = (function _name(x){if((function (){var and__3431__auto__ = x;if(and__3431__auto__)
{return x.cljs$core$INamed$_name$arity$1;
} else
{return and__3431__auto__;
}
})())
{return x.cljs$core$INamed$_name$arity$1(x);
} else
{var x__4070__auto__ = (((x == null))?null:x);return (function (){var or__3443__auto__ = (cljs.core._name[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._name["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INamed.-name",x);
}
}
})().call(null,x);
}
});
cljs.core._namespace = (function _namespace(x){if((function (){var and__3431__auto__ = x;if(and__3431__auto__)
{return x.cljs$core$INamed$_namespace$arity$1;
} else
{return and__3431__auto__;
}
})())
{return x.cljs$core$INamed$_namespace$arity$1(x);
} else
{var x__4070__auto__ = (((x == null))?null:x);return (function (){var or__3443__auto__ = (cljs.core._namespace[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (cljs.core._namespace["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INamed.-namespace",x);
}
}
})().call(null,x);
}
});

/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.cljs$lang$type = true;
cljs.core.StringBufferWriter.cljs$lang$ctorStr = "cljs.core/StringBufferWriter";
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;return self__.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return null;
});
cljs.core.__GT_StringBufferWriter = (function __GT_StringBufferWriter(sb){return (new cljs.core.StringBufferWriter(sb));
});
/**
* Support so that collections can implement toString without
* loading all the printing machinery.
*/
cljs.core.pr_str_STAR_ = (function pr_str_STAR_(obj){var sb = (new goog.string.StringBuffer());var writer = (new cljs.core.StringBufferWriter(sb));cljs.core._pr_writer.call(null,obj,writer,cljs.core.pr_opts.call(null));
cljs.core._flush.call(null,writer);
return [cljs.core.str(sb)].join('');
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){return (o instanceof t);
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){return (x instanceof cljs.core.Symbol);
});
cljs.core.hash_symbol = (function hash_symbol(sym){return cljs.core.hash_combine.call(null,cljs.core.hash.call(null,sym.ns),cljs.core.hash.call(null,sym.name));
});
cljs.core.compare_symbols = (function compare_symbols(a,b){if(cljs.core.truth_(cljs.core._EQ_.call(null,a,b)))
{return 0;
} else
{if(cljs.core.truth_((function (){var and__3431__auto__ = cljs.core.not.call(null,a.ns);if(and__3431__auto__)
{return b.ns;
} else
{return and__3431__auto__;
}
})()))
{return -1;
} else
{if(cljs.core.truth_(a.ns))
{if(cljs.core.not.call(null,b.ns))
{return 1;
} else
{var nsc = cljs.core.compare.call(null,a.ns,b.ns);if((nsc === 0))
{return cljs.core.compare.call(null,a.name,b.name);
} else
{return nsc;
}
}
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.compare.call(null,a.name,b.name);
} else
{return null;
}
}
}
}
});

/**
* @constructor
*/
cljs.core.Symbol = (function (ns,name,str,_hash,_meta){
this.ns = ns;
this.name = name;
this.str = str;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 2154168321;
this.cljs$lang$protocol_mask$partition1$ = 4096;
})
cljs.core.Symbol.cljs$lang$type = true;
cljs.core.Symbol.cljs$lang$ctorStr = "cljs.core/Symbol";
cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core/Symbol");
});
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (o,writer,_){var self__ = this;
var o__$1 = this;return cljs.core._write.call(null,writer,self__.str);
});
cljs.core.Symbol.prototype.cljs$core$INamed$_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.name;
});
cljs.core.Symbol.prototype.cljs$core$INamed$_namespace$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.ns;
});
cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (sym){var self__ = this;
var sym__$1 = this;var h__3854__auto__ = self__._hash;if(!((h__3854__auto__ == null)))
{return h__3854__auto__;
} else
{var h__3854__auto____$1 = cljs.core.hash_symbol.call(null,sym__$1);self__._hash = h__3854__auto____$1;
return h__3854__auto____$1;
}
});
cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;return (new cljs.core.Symbol(self__.ns,self__.name,self__.str,self__._hash,new_meta));
});
cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__._meta;
});
cljs.core.Symbol.prototype.call = (function() {
var G__22238 = null;
var G__22238__2 = (function (self__,coll){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.call(null,coll,sym,null);
});
var G__22238__3 = (function (self__,coll,not_found){var self__ = this;
var self____$1 = this;var sym = self____$1;return cljs.core._lookup.call(null,coll,sym,not_found);
});
G__22238 = function(self__,coll,not_found){
switch(arguments.length){
case 2:
return G__22238__2.call(this,self__,coll);
case 3:
return G__22238__3.call(this,self__,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__22238;
})()
;
cljs.core.Symbol.prototype.apply = (function (self__,args22237){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args22237)));
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$1 = (function (coll){var self__ = this;
var sym = this;return cljs.core._lookup.call(null,coll,sym,null);
});
cljs.core.Symbol.prototype.cljs$core$IFn$_invoke$arity$2 = (function (coll,not_found){var self__ = this;
var sym = this;return cljs.core._lookup.call(null,coll,sym,not_found);
});
cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if((other instanceof cljs.core.Symbol))
{return (self__.str === other.str);
} else
{return false;
}
});
cljs.core.Symbol.prototype.toString = (function (){var self__ = this;
var _ = this;return self__.str;
});
cljs.core.__GT_Symbol = (function __GT_Symbol(ns,name,str,_hash,_meta){return (new cljs.core.Symbol(ns,name,str,_hash,_meta));
});
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){if((name instanceof cljs.core.Symbol))
{return name;
} else
{return symbol.call(null,null,name);
}
});
var symbol__2 = (function (ns,name){var sym_str = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);return (new cljs.core.Symbol(ns,name,sym_str,null,null));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$core$IFn$_invoke$arity$1 = symbol__1;
symbol.cljs$core$IFn$_invoke$arity$2 = symbol__2;
return symbol;
})()
;
cljs.core.clone = (function clone(value){return cljs.core._clone.call(null,value);
});
cljs.core.cloneable_QMARK_ = (function cloneable_QMARK_(value){var G__22240 = value;if(G__22240)
{var bit__4093__auto__ = (G__22240.cljs$lang$protocol_mask$partition1$ & 8192);if((bit__4093__auto__) || (G__22240.cljs$core$ICloneable$))
{return true;
} else
{if((!G__22240.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__22240);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__22240);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){if((coll == null))
{return null;
} else
{if((function (){var G__22242 = coll;if(G__22242)
{var bit__4086__auto__ = (G__22242.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4086__auto__) || (G__22242.cljs$core$ISeqable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._seq.call(null,coll);
} else
{if(coll instanceof Array)
{if((coll.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(coll,0));
}
} else
{if(typeof coll === 'string')
{if((coll.length === 0))
{return null;
} else
{return (new cljs.core.IndexedSeq(coll,0));
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,coll))
{return cljs.core._seq.call(null,coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str(coll),cljs.core.str("is not ISeqable")].join('')));
} else
{return null;
}
}
}
}
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){if((coll == null))
{return null;
} else
{if((function (){var G__22244 = coll;if(G__22244)
{var bit__4086__auto__ = (G__22244.cljs$lang$protocol_mask$partition0$ & 64);if((bit__4086__auto__) || (G__22244.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s = cljs.core.seq.call(null,coll);if((s == null))
{return null;
} else
{return cljs.core._first.call(null,s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){if(!((coll == null)))
{if((function (){var G__22246 = coll;if(G__22246)
{var bit__4086__auto__ = (G__22246.cljs$lang$protocol_mask$partition0$ & 64);if((bit__4086__auto__) || (G__22246.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s = cljs.core.seq.call(null,coll);if(s)
{return cljs.core._rest.call(null,s);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){if((coll == null))
{return null;
} else
{if((function (){var G__22248 = coll;if(G__22248)
{var bit__4086__auto__ = (G__22248.cljs$lang$protocol_mask$partition0$ & 128);if((bit__4086__auto__) || (G__22248.cljs$core$INext$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){return true;
});
var _EQ___2 = (function (x,y){if((x == null))
{return (y == null);
} else
{return ((x === y)) || (cljs.core._equiv.call(null,x,y));
}
});
var _EQ___3 = (function() { 
var G__22249__delegate = function (x,y,more){while(true){
if(_EQ_.call(null,x,y))
{if(cljs.core.next.call(null,more))
{{
var G__22250 = y;
var G__22251 = cljs.core.first.call(null,more);
var G__22252 = cljs.core.next.call(null,more);
x = G__22250;
y = G__22251;
more = G__22252;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__22249 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22249__delegate.call(this,x,y,more);};
G__22249.cljs$lang$maxFixedArity = 2;
G__22249.cljs$lang$applyTo = (function (arglist__22253){
var x = cljs.core.first(arglist__22253);
arglist__22253 = cljs.core.next(arglist__22253);
var y = cljs.core.first(arglist__22253);
var more = cljs.core.rest(arglist__22253);
return G__22249__delegate(x,y,more);
});
G__22249.cljs$core$IFn$_invoke$arity$variadic = G__22249__delegate;
return G__22249;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ___1;
_EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ___2;
_EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ_;
})()
;
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){return 0;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var o__$1 = this;return ((other instanceof Date)) && ((o__$1.toString() === other.toString()));
});
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){return (x === o);
}));
(cljs.core.IMeta["function"] = true);
(cljs.core._meta["function"] = (function (_){return null;
}));
(cljs.core.Fn["function"] = true);
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){return (x + 1);
});

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorStr = "cljs.core/Reduced";
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){var self__ = this;
var o__$1 = this;return self__.val;
});
cljs.core.__GT_Reduced = (function __GT_Reduced(val){return (new cljs.core.Reduced(val));
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){return (r instanceof cljs.core.Reduced);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){var cnt = cljs.core._count.call(null,cicoll);if((cnt === 0))
{return f.call(null);
} else
{var val = cljs.core._nth.call(null,cicoll,0);var n = 1;while(true){
if((n < cnt))
{var nval = f.call(null,val,cljs.core._nth.call(null,cicoll,n));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__22254 = nval;
var G__22255 = (n + 1);
val = G__22254;
n = G__22255;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){var cnt = cljs.core._count.call(null,cicoll);var val__$1 = val;var n = 0;while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,cljs.core._nth.call(null,cicoll,n));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__22256 = nval;
var G__22257 = (n + 1);
val__$1 = G__22256;
n = G__22257;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){var cnt = cljs.core._count.call(null,cicoll);var val__$1 = val;var n = idx;while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,cljs.core._nth.call(null,cicoll,n));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__22258 = nval;
var G__22259 = (n + 1);
val__$1 = G__22258;
n = G__22259;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$core$IFn$_invoke$arity$2 = ci_reduce__2;
ci_reduce.cljs$core$IFn$_invoke$arity$3 = ci_reduce__3;
ci_reduce.cljs$core$IFn$_invoke$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){var cnt = arr.length;if((arr.length === 0))
{return f.call(null);
} else
{var val = (arr[0]);var n = 1;while(true){
if((n < cnt))
{var nval = f.call(null,val,(arr[n]));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__22260 = nval;
var G__22261 = (n + 1);
val = G__22260;
n = G__22261;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){var cnt = arr.length;var val__$1 = val;var n = 0;while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,(arr[n]));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__22262 = nval;
var G__22263 = (n + 1);
val__$1 = G__22262;
n = G__22263;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){var cnt = arr.length;var val__$1 = val;var n = idx;while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,(arr[n]));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__22264 = nval;
var G__22265 = (n + 1);
val__$1 = G__22264;
n = G__22265;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$core$IFn$_invoke$arity$2 = array_reduce__2;
array_reduce.cljs$core$IFn$_invoke$arity$3 = array_reduce__3;
array_reduce.cljs$core$IFn$_invoke$arity$4 = array_reduce__4;
return array_reduce;
})()
;
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){var G__22267 = x;if(G__22267)
{var bit__4093__auto__ = (G__22267.cljs$lang$protocol_mask$partition0$ & 2);if((bit__4093__auto__) || (G__22267.cljs$core$ICounted$))
{return true;
} else
{if((!G__22267.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,G__22267);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,G__22267);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){var G__22269 = x;if(G__22269)
{var bit__4093__auto__ = (G__22269.cljs$lang$protocol_mask$partition0$ & 16);if((bit__4093__auto__) || (G__22269.cljs$core$IIndexed$))
{return true;
} else
{if((!G__22269.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,G__22269);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,G__22269);
}
});

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (arr,i){
this.arr = arr;
this.i = i;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorStr = "cljs.core/IndexedSeq";
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_coll.call(null,coll__$1);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.i + 1) < self__.arr.length))
{return (new cljs.core.IndexedSeq(self__.arr,(self__.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var c = cljs.core._count.call(null,coll__$1);if((c > 0))
{return (new cljs.core.RSeq(coll__$1,(c - 1),null));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.call(null,self__.arr,f,(self__.arr[self__.i]),(self__.i + 1));
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.array_reduce.call(null,self__.arr,f,start,self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr.length - self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.arr[self__.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(((self__.i + 1) < self__.arr.length))
{return (new cljs.core.IndexedSeq(self__.arr,(self__.i + 1)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.IndexedSeq(self__.arr,self__.i));
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var self__ = this;
var coll__$1 = this;var i__$1 = (n + self__.i);if((i__$1 < self__.arr.length))
{return (self__.arr[i__$1]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var self__ = this;
var coll__$1 = this;var i__$1 = (n + self__.i);if((i__$1 < self__.arr.length))
{return (self__.arr[i__$1]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.__GT_IndexedSeq = (function __GT_IndexedSeq(arr,i){return (new cljs.core.IndexedSeq(arr,i));
});
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){if((i < prim.length))
{return (new cljs.core.IndexedSeq(prim,i));
} else
{return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$core$IFn$_invoke$arity$1 = prim_seq__1;
prim_seq.cljs$core$IFn$_invoke$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$core$IFn$_invoke$arity$1 = array_seq__1;
array_seq.cljs$core$IFn$_invoke$arity$2 = array_seq__2;
return array_seq;
})()
;

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 32374862;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorStr = "cljs.core/RSeq";
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.hash_coll.call(null,coll__$1);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return cljs.core.cons.call(null,o,coll__$1);
});
cljs.core.RSeq.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (col,f){var self__ = this;
var col__$1 = this;return cljs.core.seq_reduce.call(null,f,col__$1);
});
cljs.core.RSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (col,f,start){var self__ = this;
var col__$1 = this;return cljs.core.seq_reduce.call(null,f,start,col__$1);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return (self__.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._nth.call(null,self__.ci,self__.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.i > 0))
{return (new cljs.core.RSeq(self__.ci,(self__.i - 1),null));
} else
{return null;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){var self__ = this;
var coll__$1 = this;return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.RSeq(self__.ci,self__.i,self__.meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.__GT_RSeq = (function __GT_RSeq(ci,i,meta){return (new cljs.core.RSeq(ci,i,meta));
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){while(true){
var sn = cljs.core.next.call(null,s);if(!((sn == null)))
{{
var G__22270 = sn;
s = G__22270;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){if(!((coll == null)))
{return cljs.core._conj.call(null,coll,x);
} else
{return cljs.core._conj.call(null,cljs.core.List.EMPTY,x);
}
});
var conj__3 = (function() { 
var G__22271__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__22272 = conj.call(null,coll,x);
var G__22273 = cljs.core.first.call(null,xs);
var G__22274 = cljs.core.next.call(null,xs);
coll = G__22272;
x = G__22273;
xs = G__22274;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__22271 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22271__delegate.call(this,coll,x,xs);};
G__22271.cljs$lang$maxFixedArity = 2;
G__22271.cljs$lang$applyTo = (function (arglist__22275){
var coll = cljs.core.first(arglist__22275);
arglist__22275 = cljs.core.next(arglist__22275);
var x = cljs.core.first(arglist__22275);
var xs = cljs.core.rest(arglist__22275);
return G__22271__delegate(coll,x,xs);
});
G__22271.cljs$core$IFn$_invoke$arity$variadic = G__22271__delegate;
return G__22271;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$core$IFn$_invoke$arity$2 = conj__2;
conj.cljs$core$IFn$_invoke$arity$variadic = conj__3.cljs$core$IFn$_invoke$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){if((coll == null))
{return null;
} else
{return cljs.core._empty.call(null,coll);
}
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){var s = cljs.core.seq.call(null,coll);var acc = 0;while(true){
if(cljs.core.counted_QMARK_.call(null,s))
{return (acc + cljs.core._count.call(null,s));
} else
{{
var G__22276 = cljs.core.next.call(null,s);
var G__22277 = (acc + 1);
s = G__22276;
acc = G__22277;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){if(!((coll == null)))
{if((function (){var G__22279 = coll;if(G__22279)
{var bit__4086__auto__ = (G__22279.cljs$lang$protocol_mask$partition0$ & 2);if((bit__4086__auto__) || (G__22279.cljs$core$ICounted$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._count.call(null,coll);
} else
{if(coll instanceof Array)
{return coll.length;
} else
{if(typeof coll === 'string')
{return coll.length;
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,coll))
{return cljs.core._count.call(null,coll);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.accumulating_seq_count.call(null,coll);
} else
{return null;
}
}
}
}
}
} else
{return 0;
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){while(true){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__22280 = cljs.core.next.call(null,coll);
var G__22281 = (n - 1);
coll = G__22280;
n = G__22281;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){while(true){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__22282 = cljs.core.next.call(null,coll);
var G__22283 = (n - 1);
var G__22284 = not_found;
coll = G__22282;
n = G__22283;
not_found = G__22284;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$core$IFn$_invoke$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$core$IFn$_invoke$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){if((coll == null))
{return null;
} else
{if((function (){var G__22289 = coll;if(G__22289)
{var bit__4086__auto__ = (G__22289.cljs$lang$protocol_mask$partition0$ & 16);if((bit__4086__auto__) || (G__22289.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._nth.call(null,coll,n);
} else
{if(coll instanceof Array)
{if((n < coll.length))
{return (coll[n]);
} else
{return null;
}
} else
{if(typeof coll === 'string')
{if((n < coll.length))
{return (coll[n]);
} else
{return null;
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((function (){var G__22290 = coll;if(G__22290)
{var bit__4093__auto__ = (G__22290.cljs$lang$protocol_mask$partition0$ & 64);if((bit__4093__auto__) || (G__22290.cljs$core$ISeq$))
{return true;
} else
{if((!G__22290.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__22290);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__22290);
}
})())
{return cljs.core.linear_traversal_nth.call(null,coll,n);
} else
{throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str.call(null,cljs.core.type.call(null,coll)))].join('')));
}
} else
{return null;
}
}
}
}
}
}
});
var nth__3 = (function (coll,n,not_found){if(!((coll == null)))
{if((function (){var G__22291 = coll;if(G__22291)
{var bit__4086__auto__ = (G__22291.cljs$lang$protocol_mask$partition0$ & 16);if((bit__4086__auto__) || (G__22291.cljs$core$IIndexed$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(coll instanceof Array)
{if((n < coll.length))
{return (coll[n]);
} else
{return not_found;
}
} else
{if(typeof coll === 'string')
{if((n < coll.length))
{return (coll[n]);
} else
{return not_found;
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IIndexed,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if((function (){var G__22292 = coll;if(G__22292)
{var bit__4093__auto__ = (G__22292.cljs$lang$protocol_mask$partition0$ & 64);if((bit__4093__auto__) || (G__22292.cljs$core$ISeq$))
{return true;
} else
{if((!G__22292.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__22292);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__22292);
}
})())
{return cljs.core.linear_traversal_nth.call(null,coll,n,not_found);
} else
{throw (new Error([cljs.core.str("nth not supported on this type "),cljs.core.str(cljs.core.type__GT_str.call(null,cljs.core.type.call(null,coll)))].join('')));
}
} else
{return null;
}
}
}
}
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$core$IFn$_invoke$arity$2 = nth__2;
nth.cljs$core$IFn$_invoke$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){if((o == null))
{return null;
} else
{if((function (){var G__22295 = o;if(G__22295)
{var bit__4086__auto__ = (G__22295.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4086__auto__) || (G__22295.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._lookup.call(null,o,k);
} else
{if(o instanceof Array)
{if((k < o.length))
{return (o[k]);
} else
{return null;
}
} else
{if(typeof o === 'string')
{if((k < o.length))
{return (o[k]);
} else
{return null;
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,o))
{return cljs.core._lookup.call(null,o,k);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
}
}
});
var get__3 = (function (o,k,not_found){if(!((o == null)))
{if((function (){var G__22296 = o;if(G__22296)
{var bit__4086__auto__ = (G__22296.cljs$lang$protocol_mask$partition0$ & 256);if((bit__4086__auto__) || (G__22296.cljs$core$ILookup$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._lookup.call(null,o,k,not_found);
} else
{if(o instanceof Array)
{if((k < o.length))
{return (o[k]);
} else
{return not_found;
}
} else
{if(typeof o === 'string')
{if((k < o.length))
{return (o[k]);
} else
{return not_found;
}
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,o))
{return cljs.core._lookup.call(null,o,k,not_found);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return not_found;
} else
{return null;
}
}
}
}
}
} else
{return not_found;
}
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$core$IFn$_invoke$arity$2 = get__2;
get.cljs$core$IFn$_invoke$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){if(!((coll == null)))
{return cljs.core._assoc.call(null,coll,k,v);
} else
{return cljs.core.PersistentHashMap.fromArrays.call(null,[k],[v]);
}
});
var assoc__4 = (function() { 
var G__22297__delegate = function (coll,k,v,kvs){while(true){
var ret = assoc.call(null,coll,k,v);if(cljs.core.truth_(kvs))
{{
var G__22298 = ret;
var G__22299 = cljs.core.first.call(null,kvs);
var G__22300 = cljs.core.second.call(null,kvs);
var G__22301 = cljs.core.nnext.call(null,kvs);
coll = G__22298;
k = G__22299;
v = G__22300;
kvs = G__22301;
continue;
}
} else
{return ret;
}
break;
}
};
var G__22297 = function (coll,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__22297__delegate.call(this,coll,k,v,kvs);};
G__22297.cljs$lang$maxFixedArity = 3;
G__22297.cljs$lang$applyTo = (function (arglist__22302){
var coll = cljs.core.first(arglist__22302);
arglist__22302 = cljs.core.next(arglist__22302);
var k = cljs.core.first(arglist__22302);
arglist__22302 = cljs.core.next(arglist__22302);
var v = cljs.core.first(arglist__22302);
var kvs = cljs.core.rest(arglist__22302);
return G__22297__delegate(coll,k,v,kvs);
});
G__22297.cljs$core$IFn$_invoke$arity$variadic = G__22297__delegate;
return G__22297;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$core$IFn$_invoke$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$core$IFn$_invoke$arity$3 = assoc__3;
assoc.cljs$core$IFn$_invoke$arity$variadic = assoc__4.cljs$core$IFn$_invoke$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){return coll;
});
var dissoc__2 = (function (coll,k){if((coll == null))
{return null;
} else
{return cljs.core._dissoc.call(null,coll,k);
}
});
var dissoc__3 = (function() { 
var G__22303__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = dissoc.call(null,coll,k);if(cljs.core.truth_(ks))
{{
var G__22304 = ret;
var G__22305 = cljs.core.first.call(null,ks);
var G__22306 = cljs.core.next.call(null,ks);
coll = G__22304;
k = G__22305;
ks = G__22306;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__22303 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22303__delegate.call(this,coll,k,ks);};
G__22303.cljs$lang$maxFixedArity = 2;
G__22303.cljs$lang$applyTo = (function (arglist__22307){
var coll = cljs.core.first(arglist__22307);
arglist__22307 = cljs.core.next(arglist__22307);
var k = cljs.core.first(arglist__22307);
var ks = cljs.core.rest(arglist__22307);
return G__22303__delegate(coll,k,ks);
});
G__22303.cljs$core$IFn$_invoke$arity$variadic = G__22303__delegate;
return G__22303;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$core$IFn$_invoke$arity$1 = dissoc__1;
dissoc.cljs$core$IFn$_invoke$arity$2 = dissoc__2;
dissoc.cljs$core$IFn$_invoke$arity$variadic = dissoc__3.cljs$core$IFn$_invoke$arity$variadic;
return dissoc;
})()
;
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){var or__3443__auto__ = goog.isFunction(f);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var G__22311 = f;if(G__22311)
{var bit__4093__auto__ = null;if(cljs.core.truth_((function (){var or__3443__auto____$1 = bit__4093__auto__;if(cljs.core.truth_(or__3443__auto____$1))
{return or__3443__auto____$1;
} else
{return G__22311.cljs$core$Fn$;
}
})()))
{return true;
} else
{if((!G__22311.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,G__22311);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.Fn,G__22311);
}
}
});
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){if((cljs.core.fn_QMARK_.call(null,o)) && (!((function (){var G__22319 = o;if(G__22319)
{var bit__4093__auto__ = (G__22319.cljs$lang$protocol_mask$partition0$ & 262144);if((bit__4093__auto__) || (G__22319.cljs$core$IWithMeta$))
{return true;
} else
{if((!G__22319.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__22319);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,G__22319);
}
})())))
{return with_meta.call(null,(function (){if(typeof cljs.core.t22320 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.t22320 = (function (meta,o,with_meta,meta22321){
this.meta = meta;
this.o = o;
this.with_meta = with_meta;
this.meta22321 = meta22321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
cljs.core.t22320.cljs$lang$type = true;
cljs.core.t22320.cljs$lang$ctorStr = "cljs.core/t22320";
cljs.core.t22320.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core/t22320");
});
cljs.core.t22320.prototype.call = (function() { 
var G__22324__delegate = function (self__,args){var self____$1 = this;var _ = self____$1;return cljs.core.apply.call(null,self__.o,args);
};
var G__22324 = function (self__,var_args){
var self__ = this;
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__22324__delegate.call(this,self__,args);};
G__22324.cljs$lang$maxFixedArity = 1;
G__22324.cljs$lang$applyTo = (function (arglist__22325){
var self__ = cljs.core.first(arglist__22325);
var args = cljs.core.rest(arglist__22325);
return G__22324__delegate(self__,args);
});
G__22324.cljs$core$IFn$_invoke$arity$variadic = G__22324__delegate;
return G__22324;
})()
;
cljs.core.t22320.prototype.apply = (function (self__,args22323){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args22323)));
});
cljs.core.t22320.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__22326__delegate = function (args){var _ = this;return cljs.core.apply.call(null,self__.o,args);
};
var G__22326 = function (var_args){
var self__ = this;
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22326__delegate.call(this,args);};
G__22326.cljs$lang$maxFixedArity = 0;
G__22326.cljs$lang$applyTo = (function (arglist__22327){
var args = cljs.core.seq(arglist__22327);
return G__22326__delegate(args);
});
G__22326.cljs$core$IFn$_invoke$arity$variadic = G__22326__delegate;
return G__22326;
})()
;
cljs.core.t22320.prototype.cljs$core$Fn$ = true;
cljs.core.t22320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22322){var self__ = this;
var _22322__$1 = this;return self__.meta22321;
});
cljs.core.t22320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22322,meta22321__$1){var self__ = this;
var _22322__$1 = this;return (new cljs.core.t22320(self__.meta,self__.o,self__.with_meta,meta22321__$1));
});
cljs.core.__GT_t22320 = (function __GT_t22320(meta__$1,o__$1,with_meta__$1,meta22321){return (new cljs.core.t22320(meta__$1,o__$1,with_meta__$1,meta22321));
});
}
return (new cljs.core.t22320(meta,o,with_meta,null));
})(),meta);
} else
{if((o == null))
{return null;
} else
{return cljs.core._with_meta.call(null,o,meta);
}
}
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){if((function (){var and__3431__auto__ = !((o == null));if(and__3431__auto__)
{var G__22331 = o;if(G__22331)
{var bit__4093__auto__ = (G__22331.cljs$lang$protocol_mask$partition0$ & 131072);if((bit__4093__auto__) || (G__22331.cljs$core$IMeta$))
{return true;
} else
{if((!G__22331.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__22331);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,G__22331);
}
} else
{return and__3431__auto__;
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){if((coll == null))
{return null;
} else
{return cljs.core._peek.call(null,coll);
}
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){if((coll == null))
{return null;
} else
{return cljs.core._pop.call(null,coll);
}
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){return coll;
});
var disj__2 = (function (coll,k){if((coll == null))
{return null;
} else
{return cljs.core._disjoin.call(null,coll,k);
}
});
var disj__3 = (function() { 
var G__22332__delegate = function (coll,k,ks){while(true){
if((coll == null))
{return null;
} else
{var ret = disj.call(null,coll,k);if(cljs.core.truth_(ks))
{{
var G__22333 = ret;
var G__22334 = cljs.core.first.call(null,ks);
var G__22335 = cljs.core.next.call(null,ks);
coll = G__22333;
k = G__22334;
ks = G__22335;
continue;
}
} else
{return ret;
}
}
break;
}
};
var G__22332 = function (coll,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22332__delegate.call(this,coll,k,ks);};
G__22332.cljs$lang$maxFixedArity = 2;
G__22332.cljs$lang$applyTo = (function (arglist__22336){
var coll = cljs.core.first(arglist__22336);
arglist__22336 = cljs.core.next(arglist__22336);
var k = cljs.core.first(arglist__22336);
var ks = cljs.core.rest(arglist__22336);
return G__22332__delegate(coll,k,ks);
});
G__22332.cljs$core$IFn$_invoke$arity$variadic = G__22332__delegate;
return G__22332;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$core$IFn$_invoke$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$core$IFn$_invoke$arity$1 = disj__1;
disj.cljs$core$IFn$_invoke$arity$2 = disj__2;
disj.cljs$core$IFn$_invoke$arity$variadic = disj__3.cljs$core$IFn$_invoke$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = (function (){var obj22338 = {};return obj22338;
})();
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){var h = goog.string.hashCode(k);(cljs.core.string_hash_cache[k] = h);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = (function (){var obj22342 = {};return obj22342;
})();
cljs.core.string_hash_cache_count = 0;
} else
{}
var h = (cljs.core.string_hash_cache[k]);if(typeof h === 'number')
{return h;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function hash(o){if((function (){var G__22344 = o;if(G__22344)
{var bit__4086__auto__ = (G__22344.cljs$lang$protocol_mask$partition0$ & 4194304);if((bit__4086__auto__) || (G__22344.cljs$core$IHash$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._hash.call(null,o);
} else
{if(typeof o === 'number')
{return (Math.floor(o) % 2147483647);
} else
{if(o === true)
{return 1;
} else
{if(o === false)
{return 0;
} else
{if(typeof o === 'string')
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{if((o == null))
{return 0;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core._hash.call(null,o);
} else
{return null;
}
}
}
}
}
}
}
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){return ((coll == null)) || (cljs.core.not.call(null,cljs.core.seq.call(null,coll)));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){if((x == null))
{return false;
} else
{var G__22346 = x;if(G__22346)
{var bit__4093__auto__ = (G__22346.cljs$lang$protocol_mask$partition0$ & 8);if((bit__4093__auto__) || (G__22346.cljs$core$ICollection$))
{return true;
} else
{if((!G__22346.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,G__22346);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICollection,G__22346);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){if((x == null))
{return false;
} else
{var G__22348 = x;if(G__22348)
{var bit__4093__auto__ = (G__22348.cljs$lang$protocol_mask$partition0$ & 4096);if((bit__4093__auto__) || (G__22348.cljs$core$ISet$))
{return true;
} else
{if((!G__22348.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__22348);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISet,G__22348);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){var G__22350 = x;if(G__22350)
{var bit__4093__auto__ = (G__22350.cljs$lang$protocol_mask$partition0$ & 512);if((bit__4093__auto__) || (G__22350.cljs$core$IAssociative$))
{return true;
} else
{if((!G__22350.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAssociative,G__22350);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAssociative,G__22350);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){var G__22352 = x;if(G__22352)
{var bit__4093__auto__ = (G__22352.cljs$lang$protocol_mask$partition0$ & 16777216);if((bit__4093__auto__) || (G__22352.cljs$core$ISequential$))
{return true;
} else
{if((!G__22352.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,G__22352);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,G__22352);
}
});
/**
* Returns true if coll satisfies ISorted
*/
cljs.core.sorted_QMARK_ = (function sorted_QMARK_(x){var G__22354 = x;if(G__22354)
{var bit__4093__auto__ = (G__22354.cljs$lang$protocol_mask$partition0$ & 268435456);if((bit__4093__auto__) || (G__22354.cljs$core$ISorted$))
{return true;
} else
{if((!G__22354.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISorted,G__22354);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISorted,G__22354);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){var G__22356 = x;if(G__22356)
{var bit__4093__auto__ = (G__22356.cljs$lang$protocol_mask$partition0$ & 524288);if((bit__4093__auto__) || (G__22356.cljs$core$IReduce$))
{return true;
} else
{if((!G__22356.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,G__22356);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,G__22356);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){if((x == null))
{return false;
} else
{var G__22358 = x;if(G__22358)
{var bit__4093__auto__ = (G__22358.cljs$lang$protocol_mask$partition0$ & 1024);if((bit__4093__auto__) || (G__22358.cljs$core$IMap$))
{return true;
} else
{if((!G__22358.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__22358);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMap,G__22358);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){var G__22360 = x;if(G__22360)
{var bit__4093__auto__ = (G__22360.cljs$lang$protocol_mask$partition0$ & 16384);if((bit__4093__auto__) || (G__22360.cljs$core$IVector$))
{return true;
} else
{if((!G__22360.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,G__22360);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IVector,G__22360);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){var G__22362 = x;if(G__22362)
{var bit__4086__auto__ = (G__22362.cljs$lang$protocol_mask$partition1$ & 512);if((bit__4086__auto__) || (G__22362.cljs$core$IChunkedSeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){var obj22366 = {};return obj22366;
});
var js_obj__1 = (function() { 
var G__22367__delegate = function (keyvals){return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__22367 = function (var_args){
var keyvals = null;if (arguments.length > 0) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__22367__delegate.call(this,keyvals);};
G__22367.cljs$lang$maxFixedArity = 0;
G__22367.cljs$lang$applyTo = (function (arglist__22368){
var keyvals = cljs.core.seq(arglist__22368);
return G__22367__delegate(keyvals);
});
G__22367.cljs$core$IFn$_invoke$arity$variadic = G__22367__delegate;
return G__22367;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$core$IFn$_invoke$arity$0 = js_obj__0;
js_obj.cljs$core$IFn$_invoke$arity$variadic = js_obj__1.cljs$core$IFn$_invoke$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){var keys = [];goog.object.forEach(obj,(function (val,key,obj__$1){return keys.push(key);
}));
return keys;
});
cljs.core.js_delete = (function js_delete(obj,key){return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){var i__$1 = i;var j__$1 = j;var len__$1 = len;while(true){
if((len__$1 === 0))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__22369 = (i__$1 + 1);
var G__22370 = (j__$1 + 1);
var G__22371 = (len__$1 - 1);
i__$1 = G__22369;
j__$1 = G__22370;
len__$1 = G__22371;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){var i__$1 = (i + (len - 1));var j__$1 = (j + (len - 1));var len__$1 = len;while(true){
if((len__$1 === 0))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__22372 = (i__$1 - 1);
var G__22373 = (j__$1 - 1);
var G__22374 = (len__$1 - 1);
i__$1 = G__22372;
j__$1 = G__22373;
len__$1 = G__22374;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = (function (){var obj22376 = {};return obj22376;
})();
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){if((s == null))
{return false;
} else
{var G__22378 = s;if(G__22378)
{var bit__4093__auto__ = (G__22378.cljs$lang$protocol_mask$partition0$ & 64);if((bit__4093__auto__) || (G__22378.cljs$core$ISeq$))
{return true;
} else
{if((!G__22378.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__22378);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeq,G__22378);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){var G__22380 = s;if(G__22380)
{var bit__4093__auto__ = (G__22380.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4093__auto__) || (G__22380.cljs$core$ISeqable$))
{return true;
} else
{if((!G__22380.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__22380);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__22380);
}
});
cljs.core.boolean$ = (function boolean$(x){if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){var or__3443__auto__ = cljs.core.fn_QMARK_.call(null,f);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var G__22384 = f;if(G__22384)
{var bit__4093__auto__ = (G__22384.cljs$lang$protocol_mask$partition0$ & 1);if((bit__4093__auto__) || (G__22384.cljs$core$IFn$))
{return true;
} else
{if((!G__22384.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IFn,G__22384);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IFn,G__22384);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && ((parseFloat(n) === parseInt(n,10)));
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){if((cljs.core.get.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){if((!((coll == null))) && (cljs.core.associative_QMARK_.call(null,coll)) && (cljs.core.contains_QMARK_.call(null,coll,k)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.call(null,coll,k)], null);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){return true;
});
var distinct_QMARK___2 = (function (x,y){return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__22385__delegate = function (x,y,more){if(!(cljs.core._EQ_.call(null,x,y)))
{var s = cljs.core.PersistentHashSet.fromArray([y,x], true);var xs = more;while(true){
var x__$1 = cljs.core.first.call(null,xs);var etc = cljs.core.next.call(null,xs);if(cljs.core.truth_(xs))
{if(cljs.core.contains_QMARK_.call(null,s,x__$1))
{return false;
} else
{{
var G__22386 = cljs.core.conj.call(null,s,x__$1);
var G__22387 = etc;
s = G__22386;
xs = G__22387;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__22385 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22385__delegate.call(this,x,y,more);};
G__22385.cljs$lang$maxFixedArity = 2;
G__22385.cljs$lang$applyTo = (function (arglist__22388){
var x = cljs.core.first(arglist__22388);
arglist__22388 = cljs.core.next(arglist__22388);
var y = cljs.core.first(arglist__22388);
var more = cljs.core.rest(arglist__22388);
return G__22385__delegate(x,y,more);
});
G__22385.cljs$core$IFn$_invoke$arity$variadic = G__22385__delegate;
return G__22385;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$core$IFn$_invoke$arity$variadic = distinct_QMARK___3.cljs$core$IFn$_invoke$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Coerces coll to a (possibly empty) sequence, if it is not already
* one. Will not force a lazy seq. (sequence nil) yields ()
*/
cljs.core.sequence = (function sequence(coll){if(cljs.core.seq_QMARK_.call(null,coll))
{return coll;
} else
{var or__3443__auto__ = cljs.core.seq.call(null,coll);if(or__3443__auto__)
{return or__3443__auto__;
} else
{return cljs.core.List.EMPTY;
}
}
});
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__22390 = x;if(G__22390)
{var bit__4086__auto__ = (G__22390.cljs$lang$protocol_mask$partition1$ & 2048);if((bit__4086__auto__) || (G__22390.cljs$core$IComparable$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){var xl = cljs.core.count.call(null,xs);var yl = cljs.core.count.call(null,ys);if((xl < yl))
{return -1;
} else
{if((xl > yl))
{return 1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return compare_indexed.call(null,xs,ys,xl,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){while(true){
var d = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));if(((d === 0)) && (((n + 1) < len)))
{{
var G__22391 = xs;
var G__22392 = ys;
var G__22393 = len;
var G__22394 = (n + 1);
xs = G__22391;
ys = G__22392;
len = G__22393;
n = G__22394;
continue;
}
} else
{return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$core$IFn$_invoke$arity$2 = compare_indexed__2;
compare_indexed.cljs$core$IFn$_invoke$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){var r = f.call(null,x,y);if(typeof r === 'number')
{return r;
} else
{if(cljs.core.truth_(r))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){if(cljs.core.seq.call(null,coll))
{var a = cljs.core.to_array.call(null,coll);goog.array.stableSort(a,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$core$IFn$_invoke$arity$1 = sort__1;
sort.cljs$core$IFn$_invoke$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){return cljs.core.sort.call(null,(function (x,y){return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$core$IFn$_invoke$arity$2 = sort_by__2;
sort_by.cljs$core$IFn$_invoke$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){var temp__4090__auto__ = cljs.core.seq.call(null,coll);if(temp__4090__auto__)
{var s = temp__4090__auto__;return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s),cljs.core.next.call(null,s));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){var val__$1 = val;var coll__$1 = cljs.core.seq.call(null,coll);while(true){
if(coll__$1)
{var nval = f.call(null,val__$1,cljs.core.first.call(null,coll__$1));if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__22395 = nval;
var G__22396 = cljs.core.next.call(null,coll__$1);
val__$1 = G__22395;
coll__$1 = G__22396;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$core$IFn$_invoke$arity$2 = seq_reduce__2;
seq_reduce.cljs$core$IFn$_invoke$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){var a = cljs.core.to_array.call(null,coll);goog.array.shuffle(a);
return cljs.core.vec.call(null,a);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){if((function (){var G__22399 = coll;if(G__22399)
{var bit__4086__auto__ = (G__22399.cljs$lang$protocol_mask$partition0$ & 524288);if((bit__4086__auto__) || (G__22399.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.call(null,coll,f);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.call(null,coll,f);
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,coll))
{return cljs.core._reduce.call(null,coll,f);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.seq_reduce.call(null,f,coll);
} else
{return null;
}
}
}
}
}
});
var reduce__3 = (function (f,val,coll){if((function (){var G__22400 = coll;if(G__22400)
{var bit__4086__auto__ = (G__22400.cljs$lang$protocol_mask$partition0$ & 524288);if((bit__4086__auto__) || (G__22400.cljs$core$IReduce$))
{return true;
} else
{return false;
}
} else
{return false;
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{if(coll instanceof Array)
{return cljs.core.array_reduce.call(null,coll,f,val);
} else
{if(typeof coll === 'string')
{return cljs.core.array_reduce.call(null,coll,f,val);
} else
{if(cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReduce,coll))
{return cljs.core._reduce.call(null,coll,f,val);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.seq_reduce.call(null,f,val,coll);
} else
{return null;
}
}
}
}
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$core$IFn$_invoke$arity$2 = reduce__2;
reduce.cljs$core$IFn$_invoke$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){if(!((coll == null)))
{return cljs.core._kv_reduce.call(null,coll,f,init);
} else
{return init;
}
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){return 0;
});
var _PLUS___1 = (function (x){return x;
});
var _PLUS___2 = (function (x,y){return (x + y);
});
var _PLUS___3 = (function() { 
var G__22401__delegate = function (x,y,more){return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__22401 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22401__delegate.call(this,x,y,more);};
G__22401.cljs$lang$maxFixedArity = 2;
G__22401.cljs$lang$applyTo = (function (arglist__22402){
var x = cljs.core.first(arglist__22402);
arglist__22402 = cljs.core.next(arglist__22402);
var y = cljs.core.first(arglist__22402);
var more = cljs.core.rest(arglist__22402);
return G__22401__delegate(x,y,more);
});
G__22401.cljs$core$IFn$_invoke$arity$variadic = G__22401__delegate;
return G__22401;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$core$IFn$_invoke$arity$0 = _PLUS___0;
_PLUS_.cljs$core$IFn$_invoke$arity$1 = _PLUS___1;
_PLUS_.cljs$core$IFn$_invoke$arity$2 = _PLUS___2;
_PLUS_.cljs$core$IFn$_invoke$arity$variadic = _PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){return (- x);
});
var ___2 = (function (x,y){return (x - y);
});
var ___3 = (function() { 
var G__22403__delegate = function (x,y,more){return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__22403 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22403__delegate.call(this,x,y,more);};
G__22403.cljs$lang$maxFixedArity = 2;
G__22403.cljs$lang$applyTo = (function (arglist__22404){
var x = cljs.core.first(arglist__22404);
arglist__22404 = cljs.core.next(arglist__22404);
var y = cljs.core.first(arglist__22404);
var more = cljs.core.rest(arglist__22404);
return G__22403__delegate(x,y,more);
});
G__22403.cljs$core$IFn$_invoke$arity$variadic = G__22403__delegate;
return G__22403;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$core$IFn$_invoke$arity$1 = ___1;
_.cljs$core$IFn$_invoke$arity$2 = ___2;
_.cljs$core$IFn$_invoke$arity$variadic = ___3.cljs$core$IFn$_invoke$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){return 1;
});
var _STAR___1 = (function (x){return x;
});
var _STAR___2 = (function (x,y){return (x * y);
});
var _STAR___3 = (function() { 
var G__22405__delegate = function (x,y,more){return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__22405 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22405__delegate.call(this,x,y,more);};
G__22405.cljs$lang$maxFixedArity = 2;
G__22405.cljs$lang$applyTo = (function (arglist__22406){
var x = cljs.core.first(arglist__22406);
arglist__22406 = cljs.core.next(arglist__22406);
var y = cljs.core.first(arglist__22406);
var more = cljs.core.rest(arglist__22406);
return G__22405__delegate(x,y,more);
});
G__22405.cljs$core$IFn$_invoke$arity$variadic = G__22405__delegate;
return G__22405;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$core$IFn$_invoke$arity$0 = _STAR___0;
_STAR_.cljs$core$IFn$_invoke$arity$1 = _STAR___1;
_STAR_.cljs$core$IFn$_invoke$arity$2 = _STAR___2;
_STAR_.cljs$core$IFn$_invoke$arity$variadic = _STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){return (x / y);
});
var _SLASH___3 = (function() { 
var G__22407__delegate = function (x,y,more){return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__22407 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22407__delegate.call(this,x,y,more);};
G__22407.cljs$lang$maxFixedArity = 2;
G__22407.cljs$lang$applyTo = (function (arglist__22408){
var x = cljs.core.first(arglist__22408);
arglist__22408 = cljs.core.next(arglist__22408);
var y = cljs.core.first(arglist__22408);
var more = cljs.core.rest(arglist__22408);
return G__22407__delegate(x,y,more);
});
G__22407.cljs$core$IFn$_invoke$arity$variadic = G__22407__delegate;
return G__22407;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$core$IFn$_invoke$arity$1 = _SLASH___1;
_SLASH_.cljs$core$IFn$_invoke$arity$2 = _SLASH___2;
_SLASH_.cljs$core$IFn$_invoke$arity$variadic = _SLASH___3.cljs$core$IFn$_invoke$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){return true;
});
var _LT___2 = (function (x,y){return (x < y);
});
var _LT___3 = (function() { 
var G__22409__delegate = function (x,y,more){while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__22410 = y;
var G__22411 = cljs.core.first.call(null,more);
var G__22412 = cljs.core.next.call(null,more);
x = G__22410;
y = G__22411;
more = G__22412;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__22409 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22409__delegate.call(this,x,y,more);};
G__22409.cljs$lang$maxFixedArity = 2;
G__22409.cljs$lang$applyTo = (function (arglist__22413){
var x = cljs.core.first(arglist__22413);
arglist__22413 = cljs.core.next(arglist__22413);
var y = cljs.core.first(arglist__22413);
var more = cljs.core.rest(arglist__22413);
return G__22409__delegate(x,y,more);
});
G__22409.cljs$core$IFn$_invoke$arity$variadic = G__22409__delegate;
return G__22409;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$core$IFn$_invoke$arity$1 = _LT___1;
_LT_.cljs$core$IFn$_invoke$arity$2 = _LT___2;
_LT_.cljs$core$IFn$_invoke$arity$variadic = _LT___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){return true;
});
var _LT__EQ___2 = (function (x,y){return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__22414__delegate = function (x,y,more){while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__22415 = y;
var G__22416 = cljs.core.first.call(null,more);
var G__22417 = cljs.core.next.call(null,more);
x = G__22415;
y = G__22416;
more = G__22417;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__22414 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22414__delegate.call(this,x,y,more);};
G__22414.cljs$lang$maxFixedArity = 2;
G__22414.cljs$lang$applyTo = (function (arglist__22418){
var x = cljs.core.first(arglist__22418);
arglist__22418 = cljs.core.next(arglist__22418);
var y = cljs.core.first(arglist__22418);
var more = cljs.core.rest(arglist__22418);
return G__22414__delegate(x,y,more);
});
G__22414.cljs$core$IFn$_invoke$arity$variadic = G__22414__delegate;
return G__22414;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$core$IFn$_invoke$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$core$IFn$_invoke$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _LT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){return true;
});
var _GT___2 = (function (x,y){return (x > y);
});
var _GT___3 = (function() { 
var G__22419__delegate = function (x,y,more){while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__22420 = y;
var G__22421 = cljs.core.first.call(null,more);
var G__22422 = cljs.core.next.call(null,more);
x = G__22420;
y = G__22421;
more = G__22422;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__22419 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22419__delegate.call(this,x,y,more);};
G__22419.cljs$lang$maxFixedArity = 2;
G__22419.cljs$lang$applyTo = (function (arglist__22423){
var x = cljs.core.first(arglist__22423);
arglist__22423 = cljs.core.next(arglist__22423);
var y = cljs.core.first(arglist__22423);
var more = cljs.core.rest(arglist__22423);
return G__22419__delegate(x,y,more);
});
G__22419.cljs$core$IFn$_invoke$arity$variadic = G__22419__delegate;
return G__22419;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$core$IFn$_invoke$arity$1 = _GT___1;
_GT_.cljs$core$IFn$_invoke$arity$2 = _GT___2;
_GT_.cljs$core$IFn$_invoke$arity$variadic = _GT___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){return true;
});
var _GT__EQ___2 = (function (x,y){return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__22424__delegate = function (x,y,more){while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__22425 = y;
var G__22426 = cljs.core.first.call(null,more);
var G__22427 = cljs.core.next.call(null,more);
x = G__22425;
y = G__22426;
more = G__22427;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__22424 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22424__delegate.call(this,x,y,more);};
G__22424.cljs$lang$maxFixedArity = 2;
G__22424.cljs$lang$applyTo = (function (arglist__22428){
var x = cljs.core.first(arglist__22428);
arglist__22428 = cljs.core.next(arglist__22428);
var y = cljs.core.first(arglist__22428);
var more = cljs.core.rest(arglist__22428);
return G__22424__delegate(x,y,more);
});
G__22424.cljs$core$IFn$_invoke$arity$variadic = G__22424__delegate;
return G__22424;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$core$IFn$_invoke$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$core$IFn$_invoke$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = _GT__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){return x;
});
var max__2 = (function (x,y){var x__3750__auto__ = x;var y__3751__auto__ = y;return ((x__3750__auto__ > y__3751__auto__) ? x__3750__auto__ : y__3751__auto__);
});
var max__3 = (function() { 
var G__22429__delegate = function (x,y,more){return cljs.core.reduce.call(null,max,(function (){var x__3750__auto__ = x;var y__3751__auto__ = y;return ((x__3750__auto__ > y__3751__auto__) ? x__3750__auto__ : y__3751__auto__);
})(),more);
};
var G__22429 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22429__delegate.call(this,x,y,more);};
G__22429.cljs$lang$maxFixedArity = 2;
G__22429.cljs$lang$applyTo = (function (arglist__22430){
var x = cljs.core.first(arglist__22430);
arglist__22430 = cljs.core.next(arglist__22430);
var y = cljs.core.first(arglist__22430);
var more = cljs.core.rest(arglist__22430);
return G__22429__delegate(x,y,more);
});
G__22429.cljs$core$IFn$_invoke$arity$variadic = G__22429__delegate;
return G__22429;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$core$IFn$_invoke$arity$1 = max__1;
max.cljs$core$IFn$_invoke$arity$2 = max__2;
max.cljs$core$IFn$_invoke$arity$variadic = max__3.cljs$core$IFn$_invoke$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){return x;
});
var min__2 = (function (x,y){var x__3757__auto__ = x;var y__3758__auto__ = y;return ((x__3757__auto__ < y__3758__auto__) ? x__3757__auto__ : y__3758__auto__);
});
var min__3 = (function() { 
var G__22431__delegate = function (x,y,more){return cljs.core.reduce.call(null,min,(function (){var x__3757__auto__ = x;var y__3758__auto__ = y;return ((x__3757__auto__ < y__3758__auto__) ? x__3757__auto__ : y__3758__auto__);
})(),more);
};
var G__22431 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22431__delegate.call(this,x,y,more);};
G__22431.cljs$lang$maxFixedArity = 2;
G__22431.cljs$lang$applyTo = (function (arglist__22432){
var x = cljs.core.first(arglist__22432);
arglist__22432 = cljs.core.next(arglist__22432);
var y = cljs.core.first(arglist__22432);
var more = cljs.core.rest(arglist__22432);
return G__22431__delegate(x,y,more);
});
G__22431.cljs$core$IFn$_invoke$arity$variadic = G__22431__delegate;
return G__22431;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$core$IFn$_invoke$arity$1 = min__1;
min.cljs$core$IFn$_invoke$arity$2 = min__2;
min.cljs$core$IFn$_invoke$arity$variadic = min__3.cljs$core$IFn$_invoke$arity$variadic;
return min;
})()
;
cljs.core.byte$ = (function byte$(x){return x;
});
/**
* Coerce to char
*/
cljs.core.char$ = (function char$(x){if(typeof x === 'number')
{return String.fromCharCode(x);
} else
{if((typeof x === 'string') && ((x.length === 1)))
{return x;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("Argument to char must be a character or number"));
} else
{return null;
}
}
}
});
cljs.core.short$ = (function short$(x){return x;
});
cljs.core.float$ = (function float$(x){return x;
});
cljs.core.double$ = (function double$(x){return x;
});
cljs.core.unchecked_byte = (function unchecked_byte(x){return x;
});
cljs.core.unchecked_char = (function unchecked_char(x){return x;
});
cljs.core.unchecked_short = (function unchecked_short(x){return x;
});
cljs.core.unchecked_float = (function unchecked_float(x){return x;
});
cljs.core.unchecked_double = (function unchecked_double(x){return x;
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add = (function() {
var unchecked_add = null;
var unchecked_add__0 = (function (){return 0;
});
var unchecked_add__1 = (function (x){return x;
});
var unchecked_add__2 = (function (x,y){return (x + y);
});
var unchecked_add__3 = (function() { 
var G__22433__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_add,(x + y),more);
};
var G__22433 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22433__delegate.call(this,x,y,more);};
G__22433.cljs$lang$maxFixedArity = 2;
G__22433.cljs$lang$applyTo = (function (arglist__22434){
var x = cljs.core.first(arglist__22434);
arglist__22434 = cljs.core.next(arglist__22434);
var y = cljs.core.first(arglist__22434);
var more = cljs.core.rest(arglist__22434);
return G__22433__delegate(x,y,more);
});
G__22433.cljs$core$IFn$_invoke$arity$variadic = G__22433__delegate;
return G__22433;
})()
;
unchecked_add = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add__0.call(this);
case 1:
return unchecked_add__1.call(this,x);
case 2:
return unchecked_add__2.call(this,x,y);
default:
return unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add.cljs$lang$maxFixedArity = 2;
unchecked_add.cljs$lang$applyTo = unchecked_add__3.cljs$lang$applyTo;
unchecked_add.cljs$core$IFn$_invoke$arity$0 = unchecked_add__0;
unchecked_add.cljs$core$IFn$_invoke$arity$1 = unchecked_add__1;
unchecked_add.cljs$core$IFn$_invoke$arity$2 = unchecked_add__2;
unchecked_add.cljs$core$IFn$_invoke$arity$variadic = unchecked_add__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add;
})()
;
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core.unchecked_add_int = (function() {
var unchecked_add_int = null;
var unchecked_add_int__0 = (function (){return 0;
});
var unchecked_add_int__1 = (function (x){return x;
});
var unchecked_add_int__2 = (function (x,y){return (x + y);
});
var unchecked_add_int__3 = (function() { 
var G__22435__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_add_int,(x + y),more);
};
var G__22435 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22435__delegate.call(this,x,y,more);};
G__22435.cljs$lang$maxFixedArity = 2;
G__22435.cljs$lang$applyTo = (function (arglist__22436){
var x = cljs.core.first(arglist__22436);
arglist__22436 = cljs.core.next(arglist__22436);
var y = cljs.core.first(arglist__22436);
var more = cljs.core.rest(arglist__22436);
return G__22435__delegate(x,y,more);
});
G__22435.cljs$core$IFn$_invoke$arity$variadic = G__22435__delegate;
return G__22435;
})()
;
unchecked_add_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_add_int__0.call(this);
case 1:
return unchecked_add_int__1.call(this,x);
case 2:
return unchecked_add_int__2.call(this,x,y);
default:
return unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_add_int.cljs$lang$maxFixedArity = 2;
unchecked_add_int.cljs$lang$applyTo = unchecked_add_int__3.cljs$lang$applyTo;
unchecked_add_int.cljs$core$IFn$_invoke$arity$0 = unchecked_add_int__0;
unchecked_add_int.cljs$core$IFn$_invoke$arity$1 = unchecked_add_int__1;
unchecked_add_int.cljs$core$IFn$_invoke$arity$2 = unchecked_add_int__2;
unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_add_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_add_int;
})()
;
cljs.core.unchecked_dec = (function unchecked_dec(x){return (x - 1);
});
cljs.core.unchecked_dec_int = (function unchecked_dec_int(x){return (x - 1);
});
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core.unchecked_divide_int = (function() {
var unchecked_divide_int = null;
var unchecked_divide_int__1 = (function (x){return unchecked_divide_int.call(null,1,x);
});
var unchecked_divide_int__2 = (function (x,y){return (x / y);
});
var unchecked_divide_int__3 = (function() { 
var G__22437__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_divide_int,unchecked_divide_int.call(null,x,y),more);
};
var G__22437 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22437__delegate.call(this,x,y,more);};
G__22437.cljs$lang$maxFixedArity = 2;
G__22437.cljs$lang$applyTo = (function (arglist__22438){
var x = cljs.core.first(arglist__22438);
arglist__22438 = cljs.core.next(arglist__22438);
var y = cljs.core.first(arglist__22438);
var more = cljs.core.rest(arglist__22438);
return G__22437__delegate(x,y,more);
});
G__22437.cljs$core$IFn$_invoke$arity$variadic = G__22437__delegate;
return G__22437;
})()
;
unchecked_divide_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_divide_int__1.call(this,x);
case 2:
return unchecked_divide_int__2.call(this,x,y);
default:
return unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_divide_int.cljs$lang$maxFixedArity = 2;
unchecked_divide_int.cljs$lang$applyTo = unchecked_divide_int__3.cljs$lang$applyTo;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$1 = unchecked_divide_int__1;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$2 = unchecked_divide_int__2;
unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_divide_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_divide_int;
})()
;
cljs.core.unchecked_inc = (function unchecked_inc(x){return (x + 1);
});
cljs.core.unchecked_inc_int = (function unchecked_inc_int(x){return (x + 1);
});
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply = (function() {
var unchecked_multiply = null;
var unchecked_multiply__0 = (function (){return 1;
});
var unchecked_multiply__1 = (function (x){return x;
});
var unchecked_multiply__2 = (function (x,y){return (x * y);
});
var unchecked_multiply__3 = (function() { 
var G__22439__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_multiply,(x * y),more);
};
var G__22439 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22439__delegate.call(this,x,y,more);};
G__22439.cljs$lang$maxFixedArity = 2;
G__22439.cljs$lang$applyTo = (function (arglist__22440){
var x = cljs.core.first(arglist__22440);
arglist__22440 = cljs.core.next(arglist__22440);
var y = cljs.core.first(arglist__22440);
var more = cljs.core.rest(arglist__22440);
return G__22439__delegate(x,y,more);
});
G__22439.cljs$core$IFn$_invoke$arity$variadic = G__22439__delegate;
return G__22439;
})()
;
unchecked_multiply = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply__0.call(this);
case 1:
return unchecked_multiply__1.call(this,x);
case 2:
return unchecked_multiply__2.call(this,x,y);
default:
return unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply.cljs$lang$maxFixedArity = 2;
unchecked_multiply.cljs$lang$applyTo = unchecked_multiply__3.cljs$lang$applyTo;
unchecked_multiply.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply__0;
unchecked_multiply.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply__1;
unchecked_multiply.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply__2;
unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core.unchecked_multiply_int = (function() {
var unchecked_multiply_int = null;
var unchecked_multiply_int__0 = (function (){return 1;
});
var unchecked_multiply_int__1 = (function (x){return x;
});
var unchecked_multiply_int__2 = (function (x,y){return (x * y);
});
var unchecked_multiply_int__3 = (function() { 
var G__22441__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_multiply_int,(x * y),more);
};
var G__22441 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22441__delegate.call(this,x,y,more);};
G__22441.cljs$lang$maxFixedArity = 2;
G__22441.cljs$lang$applyTo = (function (arglist__22442){
var x = cljs.core.first(arglist__22442);
arglist__22442 = cljs.core.next(arglist__22442);
var y = cljs.core.first(arglist__22442);
var more = cljs.core.rest(arglist__22442);
return G__22441__delegate(x,y,more);
});
G__22441.cljs$core$IFn$_invoke$arity$variadic = G__22441__delegate;
return G__22441;
})()
;
unchecked_multiply_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return unchecked_multiply_int__0.call(this);
case 1:
return unchecked_multiply_int__1.call(this,x);
case 2:
return unchecked_multiply_int__2.call(this,x,y);
default:
return unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_multiply_int.cljs$lang$maxFixedArity = 2;
unchecked_multiply_int.cljs$lang$applyTo = unchecked_multiply_int__3.cljs$lang$applyTo;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$0 = unchecked_multiply_int__0;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$1 = unchecked_multiply_int__1;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$2 = unchecked_multiply_int__2;
unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_multiply_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_multiply_int;
})()
;
cljs.core.unchecked_negate = (function unchecked_negate(x){return (- x);
});
cljs.core.unchecked_negate_int = (function unchecked_negate_int(x){return (- x);
});
cljs.core.unchecked_remainder_int = (function unchecked_remainder_int(x,n){return cljs.core.mod.call(null,x,n);
});
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_substract = (function() {
var unchecked_substract = null;
var unchecked_substract__1 = (function (x){return (- x);
});
var unchecked_substract__2 = (function (x,y){return (x - y);
});
var unchecked_substract__3 = (function() { 
var G__22443__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_substract,(x - y),more);
};
var G__22443 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22443__delegate.call(this,x,y,more);};
G__22443.cljs$lang$maxFixedArity = 2;
G__22443.cljs$lang$applyTo = (function (arglist__22444){
var x = cljs.core.first(arglist__22444);
arglist__22444 = cljs.core.next(arglist__22444);
var y = cljs.core.first(arglist__22444);
var more = cljs.core.rest(arglist__22444);
return G__22443__delegate(x,y,more);
});
G__22443.cljs$core$IFn$_invoke$arity$variadic = G__22443__delegate;
return G__22443;
})()
;
unchecked_substract = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_substract__1.call(this,x);
case 2:
return unchecked_substract__2.call(this,x,y);
default:
return unchecked_substract__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_substract.cljs$lang$maxFixedArity = 2;
unchecked_substract.cljs$lang$applyTo = unchecked_substract__3.cljs$lang$applyTo;
unchecked_substract.cljs$core$IFn$_invoke$arity$1 = unchecked_substract__1;
unchecked_substract.cljs$core$IFn$_invoke$arity$2 = unchecked_substract__2;
unchecked_substract.cljs$core$IFn$_invoke$arity$variadic = unchecked_substract__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_substract;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core.unchecked_substract_int = (function() {
var unchecked_substract_int = null;
var unchecked_substract_int__1 = (function (x){return (- x);
});
var unchecked_substract_int__2 = (function (x,y){return (x - y);
});
var unchecked_substract_int__3 = (function() { 
var G__22445__delegate = function (x,y,more){return cljs.core.reduce.call(null,unchecked_substract_int,(x - y),more);
};
var G__22445 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22445__delegate.call(this,x,y,more);};
G__22445.cljs$lang$maxFixedArity = 2;
G__22445.cljs$lang$applyTo = (function (arglist__22446){
var x = cljs.core.first(arglist__22446);
arglist__22446 = cljs.core.next(arglist__22446);
var y = cljs.core.first(arglist__22446);
var more = cljs.core.rest(arglist__22446);
return G__22445__delegate(x,y,more);
});
G__22445.cljs$core$IFn$_invoke$arity$variadic = G__22445__delegate;
return G__22445;
})()
;
unchecked_substract_int = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return unchecked_substract_int__1.call(this,x);
case 2:
return unchecked_substract_int__2.call(this,x,y);
default:
return unchecked_substract_int__3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unchecked_substract_int.cljs$lang$maxFixedArity = 2;
unchecked_substract_int.cljs$lang$applyTo = unchecked_substract_int__3.cljs$lang$applyTo;
unchecked_substract_int.cljs$core$IFn$_invoke$arity$1 = unchecked_substract_int__1;
unchecked_substract_int.cljs$core$IFn$_invoke$arity$2 = unchecked_substract_int__2;
unchecked_substract_int.cljs$core$IFn$_invoke$arity$variadic = unchecked_substract_int__3.cljs$core$IFn$_invoke$arity$variadic;
return unchecked_substract_int;
})()
;
cljs.core.fix = (function fix(q){if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){return (x | 0);
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.unchecked_int = (function unchecked_int(x){return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.unchecked_long = (function unchecked_long(x){return cljs.core.fix.call(null,x);
});
cljs.core.booleans = (function booleans(x){return x;
});
cljs.core.bytes = (function bytes(x){return x;
});
cljs.core.chars = (function chars(x){return x;
});
cljs.core.shorts = (function shorts(x){return x;
});
cljs.core.ints = (function ints(x){return x;
});
cljs.core.floats = (function floats(x){return x;
});
cljs.core.doubles = (function doubles(x){return x;
});
cljs.core.longs = (function longs(x){return x;
});
/**
* Modulus of num and div with original javascript behavior. i.e. bug for negative numbers
*/
cljs.core.js_mod = (function js_mod(n,d){return (n % d);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){return (((n % d) + d) % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){var rem = (n % d);return cljs.core.fix.call(null,((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){var q = cljs.core.quot.call(null,n,d);return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){return Math.random.call(null);
});
var rand__1 = (function (n){return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$core$IFn$_invoke$arity$0 = rand__0;
rand.cljs$core$IFn$_invoke$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){return (x >> n);
});
/**
* DEPRECATED: Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){return (x >>> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.unsigned_bit_shift_right = (function unsigned_bit_shift_right(x,n){return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){var v__$1 = (v - ((v >> 1) & 1431655765));var v__$2 = ((v__$1 & 858993459) + ((v__$1 >> 2) & 858993459));return ((((v__$2 + (v__$2 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){return true;
});
var _EQ__EQ___2 = (function (x,y){return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__22447__delegate = function (x,y,more){while(true){
if(_EQ__EQ_.call(null,x,y))
{if(cljs.core.next.call(null,more))
{{
var G__22448 = y;
var G__22449 = cljs.core.first.call(null,more);
var G__22450 = cljs.core.next.call(null,more);
x = G__22448;
y = G__22449;
more = G__22450;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__22447 = function (x,y,var_args){
var more = null;if (arguments.length > 2) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__22447__delegate.call(this,x,y,more);};
G__22447.cljs$lang$maxFixedArity = 2;
G__22447.cljs$lang$applyTo = (function (arglist__22451){
var x = cljs.core.first(arglist__22451);
arglist__22451 = cljs.core.next(arglist__22451);
var y = cljs.core.first(arglist__22451);
var more = cljs.core.rest(arglist__22451);
return G__22447__delegate(x,y,more);
});
G__22447.cljs$core$IFn$_invoke$arity$variadic = G__22447__delegate;
return G__22447;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = _EQ__EQ___3.cljs$core$IFn$_invoke$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){var n__$1 = n;var xs = cljs.core.seq.call(null,coll);while(true){
if((xs) && ((n__$1 > 0)))
{{
var G__22452 = (n__$1 - 1);
var G__22453 = cljs.core.next.call(null,xs);
n__$1 = G__22452;
xs = G__22453;
continue;
}
} else
{return xs;
}
break;
}
});
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){return "";
});
var str__1 = (function (x){if((x == null))
{return "";
} else
{return x.toString();
}
});
var str__2 = (function() { 
var G__22454__delegate = function (x,ys){var sb = (new goog.string.StringBuffer(str.call(null,x)));var more = ys;while(true){
if(cljs.core.truth_(more))
{{
var G__22455 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__22456 = cljs.core.next.call(null,more);
sb = G__22455;
more = G__22456;
continue;
}
} else
{return sb.toString();
}
break;
}
};
var G__22454 = function (x,var_args){
var ys = null;if (arguments.length > 1) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__22454__delegate.call(this,x,ys);};
G__22454.cljs$lang$maxFixedArity = 1;
G__22454.cljs$lang$applyTo = (function (arglist__22457){
var x = cljs.core.first(arglist__22457);
var ys = cljs.core.rest(arglist__22457);
return G__22454__delegate(x,ys);
});
G__22454.cljs$core$IFn$_invoke$arity$variadic = G__22454__delegate;
return G__22454;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$core$IFn$_invoke$arity$0 = str__0;
str.cljs$core$IFn$_invoke$arity$1 = str__1;
str.cljs$core$IFn$_invoke$arity$variadic = str__2.cljs$core$IFn$_invoke$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){return s.substring(start);
});
var subs__3 = (function (s,start,end){return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$core$IFn$_invoke$arity$2 = subs__2;
subs.cljs$core$IFn$_invoke$arity$3 = subs__3;
return subs;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs = cljs.core.seq.call(null,x);var ys = cljs.core.seq.call(null,y);while(true){
if((xs == null))
{return (ys == null);
} else
{if((ys == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs),cljs.core.first.call(null,ys)))
{{
var G__22458 = cljs.core.next.call(null,xs);
var G__22459 = cljs.core.next.call(null,ys);
xs = G__22458;
ys = G__22459;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){if(cljs.core.seq.call(null,coll))
{var res = cljs.core.hash.call(null,cljs.core.first.call(null,coll));var s = cljs.core.next.call(null,coll);while(true){
if((s == null))
{return res;
} else
{{
var G__22460 = cljs.core.hash_combine.call(null,res,cljs.core.hash.call(null,cljs.core.first.call(null,s)));
var G__22461 = cljs.core.next.call(null,s);
res = G__22460;
s = G__22461;
continue;
}
}
break;
}
} else
{return 0;
}
});
cljs.core.hash_imap = (function hash_imap(m){var h = 0;var s = cljs.core.seq.call(null,m);while(true){
if(s)
{var e = cljs.core.first.call(null,s);{
var G__22462 = ((h + (cljs.core.hash.call(null,cljs.core.key.call(null,e)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e)))) % 4503599627370496);
var G__22463 = cljs.core.next.call(null,s);
h = G__22462;
s = G__22463;
continue;
}
} else
{return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){var h = 0;var s__$1 = cljs.core.seq.call(null,s);while(true){
if(s__$1)
{var e = cljs.core.first.call(null,s__$1);{
var G__22464 = ((h + cljs.core.hash.call(null,e)) % 4503599627370496);
var G__22465 = cljs.core.next.call(null,s__$1);
h = G__22464;
s__$1 = G__22465;
continue;
}
} else
{return h;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){var seq__22472_22478 = cljs.core.seq.call(null,fn_map);var chunk__22473_22479 = null;var count__22474_22480 = 0;var i__22475_22481 = 0;while(true){
if((i__22475_22481 < count__22474_22480))
{var vec__22476_22482 = cljs.core._nth.call(null,chunk__22473_22479,i__22475_22481);var key_name_22483 = cljs.core.nth.call(null,vec__22476_22482,0,null);var f_22484 = cljs.core.nth.call(null,vec__22476_22482,1,null);var str_name_22485 = cljs.core.name.call(null,key_name_22483);(obj[str_name_22485] = f_22484);
{
var G__22486 = seq__22472_22478;
var G__22487 = chunk__22473_22479;
var G__22488 = count__22474_22480;
var G__22489 = (i__22475_22481 + 1);
seq__22472_22478 = G__22486;
chunk__22473_22479 = G__22487;
count__22474_22480 = G__22488;
i__22475_22481 = G__22489;
continue;
}
} else
{var temp__4092__auto___22490 = cljs.core.seq.call(null,seq__22472_22478);if(temp__4092__auto___22490)
{var seq__22472_22491__$1 = temp__4092__auto___22490;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22472_22491__$1))
{var c__4191__auto___22492 = cljs.core.chunk_first.call(null,seq__22472_22491__$1);{
var G__22493 = cljs.core.chunk_rest.call(null,seq__22472_22491__$1);
var G__22494 = c__4191__auto___22492;
var G__22495 = cljs.core.count.call(null,c__4191__auto___22492);
var G__22496 = 0;
seq__22472_22478 = G__22493;
chunk__22473_22479 = G__22494;
count__22474_22480 = G__22495;
i__22475_22481 = G__22496;
continue;
}
} else
{var vec__22477_22497 = cljs.core.first.call(null,seq__22472_22491__$1);var key_name_22498 = cljs.core.nth.call(null,vec__22477_22497,0,null);var f_22499 = cljs.core.nth.call(null,vec__22477_22497,1,null);var str_name_22500 = cljs.core.name.call(null,key_name_22498);(obj[str_name_22500] = f_22499);
{
var G__22501 = cljs.core.next.call(null,seq__22472_22491__$1);
var G__22502 = null;
var G__22503 = 0;
var G__22504 = 0;
seq__22472_22478 = G__22501;
chunk__22473_22479 = G__22502;
count__22474_22480 = G__22503;
i__22475_22481 = G__22504;
continue;
}
}
} else
{}
}
break;
}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65937646;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorStr = "cljs.core/List";
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3854__auto__ = self__.__hash;if(!((h__3854__auto__ == null)))
{return h__3854__auto__;
} else
{var h__3854__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);self__.__hash = h__3854__auto____$1;
return h__3854__auto____$1;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.count === 1))
{return null;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(self__.meta,o,coll__$1,(self__.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.List.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core._rest.call(null,coll__$1);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.count === 1))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.List(self__.meta,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.__GT_List = (function __GT_List(meta,first,rest,count,__hash){return (new cljs.core.List(meta,first,rest,count,__hash));
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 65937614;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorStr = "cljs.core/EmptyList";
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.List(self__.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.EmptyList(meta__$1));
});
cljs.core.EmptyList.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.EmptyList(self__.meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.__GT_EmptyList = (function __GT_EmptyList(meta){return (new cljs.core.EmptyList(meta));
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){var G__22506 = coll;if(G__22506)
{var bit__4093__auto__ = (G__22506.cljs$lang$protocol_mask$partition0$ & 134217728);if((bit__4093__auto__) || (G__22506.cljs$core$IReversible$))
{return true;
} else
{if((!G__22506.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReversible,G__22506);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IReversible,G__22506);
}
});
cljs.core.rseq = (function rseq(coll){return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (xs){var arr = ((((xs instanceof cljs.core.IndexedSeq)) && ((xs.i === 0)))?xs.arr:(function (){var arr = [];var xs__$1 = xs;while(true){
if(!((xs__$1 == null)))
{arr.push(cljs.core._first.call(null,xs__$1));
{
var G__22507 = cljs.core._next.call(null,xs__$1);
xs__$1 = G__22507;
continue;
}
} else
{return arr;
}
break;
}
})());var i = arr.length;var r = cljs.core.List.EMPTY;while(true){
if((i > 0))
{{
var G__22508 = (i - 1);
var G__22509 = cljs.core._conj.call(null,r,(arr[(i - 1)]));
i = G__22508;
r = G__22509;
continue;
}
} else
{return r;
}
break;
}
};
var list = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return list__delegate.call(this,xs);};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__22510){
var xs = cljs.core.seq(arglist__22510);
return list__delegate(xs);
});
list.cljs$core$IFn$_invoke$arity$variadic = list__delegate;
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 65929452;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorStr = "cljs.core/Cons";
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;var h__3854__auto__ = self__.__hash;if(!((h__3854__auto__ == null)))
{return h__3854__auto__;
} else
{var h__3854__auto____$1 = cljs.core.hash_coll.call(null,coll__$1);self__.__hash = h__3854__auto____$1;
return h__3854__auto____$1;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.rest == null))
{return null;
} else
{return cljs.core.seq.call(null,self__.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(null,o,coll__$1,self__.__hash));
});
cljs.core.Cons.prototype.toString = (function (){var self__ = this;
var coll = this;return cljs.core.pr_str_STAR_.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;return cljs.core.seq_reduce.call(null,f,start,coll__$1);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return coll__$1;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;if((self__.rest == null))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){var self__ = this;
var coll__$1 = this;return cljs.core.equiv_sequential.call(null,coll__$1,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){var self__ = this;
var coll__$1 = this;return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new cljs.core.Cons(self__.meta,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return self__.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){var self__ = this;
var coll__$1 = this;return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.__GT_Cons = (function __GT_Cons(meta,first,rest,__hash){return (new cljs.core.Cons(meta,first,rest,__hash));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){if((function (){var or__3443__auto__ = (coll == null);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var G__22514 = coll;if(G__22514)
{var bit__4086__auto__ = (G__22514.cljs$lang$protocol_mask$partition0$ & 64);if((bit__4086__auto__) || (G__22514.cljs$core$ISeq$))
{return true;
} else
{return false;
}
} else
{return false;
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
