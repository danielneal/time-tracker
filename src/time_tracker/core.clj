(ns time-tracker.core
  (:require
   [clojure.core.match :as match :refer (match)]
   [clojure.core.async :as async :refer (<! <!! >! >!! put! chan go go-loop)]
   [taoensso.sente :as sente]
   [org.httpkit.server :as server]
   ;   [alandipert.enduro :as e]
   [compojure.core :refer [defroutes GET POST]]
   [compojure.route :as route]
   [ring.util.response :as resp]))


;(def timers (e/file-atom {} "/tmp/addresses.clj"))

(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn]}
      (sente/make-channel-socket! {})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv)
  (def chsk-send!                    send-fn))


(defroutes app
  (GET  "/chsk" req (#'ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (#'ring-ajax-post                req))
  (GET "/" req (resp/redirect "/index.html"))
  (route/resources "/" {:root "public"}))


(def stop (server/run-server app {:port 3000}))
(stop)
