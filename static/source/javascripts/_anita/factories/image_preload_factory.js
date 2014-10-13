
/**
 * ImagePreloadFactory
 *
 * Preload image(s)
 */
anitaApp.factory('ImagePreloadFactory', ['$q', '$rootScope', function ($q, $rootScope) {

    /**
     * @constructor
     */
    var ImagePreloader = function () {
        var self = this;
        var images = [];
        var videos = [];

        /**
         * Add single image in the preload queue
         *
         * @param {string} image
         */
        self.addImage = function (image) {
            images.push(image);
        };

        /**
         * Add image array collection to the preload queue
         *
         * @param {Array} image
         */
        self.addImages = function (image) {
            images = images.concat(image);
        };

        /**
         * Add single video in the preload queue
         *
         * @param {string} video
         */
        self.addVideo = function (video) {
            videos.push(video);
        };

        /**
         * Add video array collection to the preload queue
         *
         * @param {Array} video
         */
        self.addVideos = function (video) {
            videos = videos.concat(video);
        };

        /**
         * Start preloading image queue
         *
         * @param completeCallback
         * @param progressCallback
         *
         * @returns {$q.defer.promise}
         */
        self.start = function (completeCallback, progressCallback) {
            return preload(images, videos, completeCallback, progressCallback);
        }

        /**
         * Actual preload function
         *
         * @param images
         * @param completeCallback
         * @param progressCallback
         *
         * @returns {$q.defer.promise}
         */
        function preload(images, videos, completeCallback, progressCallback) {
            var loader = new PxLoader(),
                defer = $q.defer();

            loader.addProgressListener(function (evt) {
                if (progressCallback) progressCallback(evt.completedCount/evt.totalCount);
                if (evt.completedCount == evt.totalCount) {
                    if (completeCallback) completeCallback();
                    defer.resolve();
                    $rootScope.$apply();
                }
            });

            for (var i = 0; i < images.length; i++) {
                loader.addImage(images[i]);
            }

            for (var i = 0; i < videos.length; i++) {
                loader.addVideo(videos[i]);
            }

            loader.start();

            return defer.promise;
        };
    };

    return {
        /**
         * Return a new ImagePreloader instance
         *
         * @returns {ImagePreloader}
         */
        createInstance: function () {
            return new ImagePreloader();
        }
    };
}]);