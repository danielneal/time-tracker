(ns time-tracker.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.string :as gstring]
            [goog.string.format]
            [cljs-time.core :refer [now interval in-millis]]
            [cljs.core.async :refer [<! alts! chan put! sliding-buffer timeout]]))

(enable-console-print!)

(defn start-timer [timer owner]
  (let [stop-chan (chan)]
    (go-loop []
             (let [[_ c] (alts! [(timeout 500) stop-chan])]
               (when-not (= c stop-chan)
                 (om/update! timer :elapsed
                             (+ (or (:last-elapsed @timer) 0)
                                (in-millis (interval (:start-time @timer) (now)))))
                 (recur))))
    (om/update! timer :stopped false)
    (om/update! timer :start-time (now))
    (om/set-state! owner :stop-chan stop-chan)))

(defn stop-timer [timer owner]
  (let [stop-chan (om/get-state owner :stop-chan)]
    (put! stop-chan true)
    (om/update! timer :stopped true)
    (om/update! timer :last-elapsed (:elapsed @timer))))

(defn add-timer [timers owner]
  (om/transact! timers #(conj % {:title "new timer" :elapsed 0 :stopped true})))

(defn timer-view [{:keys [title elapsed stopped] :as timer} owner]
  (reify
    om/IRender
    (render [_]
            (dom/div #js {:className "timer pure-g pure-u-1"}
                     (dom/span #js {:className "title pure-u-3-5"} title)
                     (dom/span #js {:className "elapsed pure-u-1-5"}
                               (let [seconds (int (/ elapsed 1000))
                                     minutes (int (/ seconds 60))
                                     hours (int (/ minutes 60))
                                     seconds (- seconds (* 60 minutes))
                                     minutes (- minutes (* 60 hours))]
                                 (gstring/format "%02.0f:%02.0f:%02.0f"
                                                 hours
                                                 minutes
                                                 seconds)))
                     (if stopped
                       (dom/button #js {:className "pure-button pure-u-1-5" :onClick #(start-timer timer owner)} "Start")
                       (dom/button #js {:className "pure-button pure-button-active pure-u-1-5" :onClick #(stop-timer timer owner)} "Stop"))))))

(def app-state (atom {:timers [{:title "internet" :elapsed 0 :stopped true}
                               {:title "everything else" :elapsed 0 :stopped true}]}))


(defn timers-view [{:keys [timers]} owner]
  (reify
    om/IRender
    (render [_]
            (dom/div #js {:className "page"}
                     (apply dom/div #js {:className "pure-g timers"}
                            (om/build-all timer-view timers))
                     (dom/button #js {:onClick #(add-timer timers owner) :className "pure-button"} "New timer")))))


(om/root timers-view app-state
  {:target (.getElementById js/document "app")
   :tx-listen
   (fn [tx-data root-cursor])})

