(defproject time-tracker "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2173"]
                 [om "0.5.3"]
                 [org.clojure/core.async "0.1.278.0-76b25b-alpha"]
                 [com.taoensso/sente "0.9.0"]
                 [org.clojure/core.match "0.2.1"]
                 [http-kit "2.1.16"]
                 [ring/ring-core "1.1.8"]
                 [compojure "1.1.6"]
                 [alandipert/enduro "1.1.5"]
                 [com.andrewmcveigh/cljs-time "0.1.1"]]
  :plugins [[lein-cljsbuild "1.0.2"]]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/public/main.js"
                                   :output-dir "resources/public/out"
                                   :optimizations :none
                                   :source-map true}}]})
