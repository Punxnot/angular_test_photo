'use strict';

angular.module('photoApp', [])
  .controller('PhotoGalleryController', ['$scope', '$rootScope', function($scope, $rootScope) {
    var serverData =
      [{"age":48,
      "cityName":"Los Angeles",
      "cryptedId":"1",
      "gender":"m",
      "name":"Serj",
      "photos":[ {"size128":"https://i03.fotocdn.net/s10/172/gallery_xs/381/2467658923.jpg?20151214085323", "size48":"https://i03.fotocdn.net/s10/172/gallery_t/381/2467658923.jpg?20151214085323", "sizeBox":"http://nefelin.narod.ru/images/gallery/bands/full/Serj_Tankian_01.jpg"}, {"size128":"https://i03.fotocdn.net/s10/171/gallery_xs/381/2467658922.jpg?20151226141703", "size48":"https://i03.fotocdn.net/s10/171/gallery_t/381/2467658922.jpg?20151226141703", "sizeBox":"http://www.ticketline.co.uk/images/artist/serj-tankian/serj-tankian.jpg"} ]},
      {"age":39,
      "cityName":"Лондон",
      "cryptedId":"2",
      "gender":"m",
      "name":"Benedict",
      "photos":[ {"size128":"https://i03.fotocdn.net/s10/172/gallery_xs/381/2467658923.jpg?20151214085323", "size48":"https://i03.fotocdn.net/s10/172/gallery_t/381/2467658923.jpg?20151214085323", "sizeBox":"http://images.huffingtonpost.com/2014-11-16-uktvsherlockbenedictcumberbatch5_1.jpg"}, {"size128":"https://i03.fotocdn.net/s10/171/gallery_xs/381/2467658922.jpg?20151226141703", "size48":"https://i03.fotocdn.net/s10/171/gallery_t/381/2467658922.jpg?20151226141703", "sizeBox":"https://s-media-cache-ak0.pinimg.com/736x/84/6e/30/846e300e4e51bed80afa5aa4d96e5b3e.jpg"}, {"size128":"https://i02.fotocdn.net/s10/170/gallery_xs/381/2467658921.jpg?20151214085331", "size48":"https://i02.fotocdn.net/s10/170/gallery_t/381/2467658921.jpg?20151214085331", "sizeBox":"http://media.tumblr.com/77b550c5f06432fe1da714d3793bc7bf/tumblr_inline_mlf4xsC8pu1qz4rgp.jpg"} ]},
      {"age":29,
      "cityName":"London",
      "cryptedId":"3",
      "gender":"w",
      "name":"Daenerys",
      "photos":[ {"size128":"https://i03.fotocdn.net/s10/172/gallery_xs/381/2467658923.jpg?20151214085323", "size48":"https://i03.fotocdn.net/s10/172/gallery_t/381/2467658923.jpg?20151214085323", "sizeBox":"http://1.bp.blogspot.com/--MXHsRY_JZU/VXWxJawVpLI/AAAAAAAAvro/6tkgzOaanDk/s640/bdaf0092b6b081f40bd210fe90e4f67e.jpg"}, {"size128":"https://i03.fotocdn.net/s10/171/gallery_xs/381/2467658922.jpg?20151226141703", "size48":"https://i03.fotocdn.net/s10/171/gallery_t/381/2467658922.jpg?20151226141703", "sizeBox":"https://24.media.tumblr.com/5b1b52c5139c31f83d797f4d918b83e3/tumblr_n284fkso4L1qdksdzo2_500.png"}, {"size128":"https://i02.fotocdn.net/s10/170/gallery_xs/381/2467658921.jpg?20151214085331", "size48":"https://i02.fotocdn.net/s10/170/gallery_t/381/2467658921.jpg?20151214085331", "sizeBox":"https://s-media-cache-ak0.pinimg.com/736x/29/13/a8/2913a8a6f3494ed820475705eeeb5356.jpg"} ]},
      {"age":40,
      "cityName":"London",
      "cryptedId":"4",
      "gender":"m",
      "name":"John",
      "photos":[ {"size128":"https://i03.fotocdn.net/s10/172/gallery_xs/381/2467658923.jpg?20151214085323", "size48":"https://i03.fotocdn.net/s10/172/gallery_t/381/2467658923.jpg?20151214085323", "sizeBox":"https://s-media-cache-ak0.pinimg.com/736x/3b/f3/c8/3bf3c8ff4a425eb4f2b8285c15c76891.jpg"}, {"size128":"https://i03.fotocdn.net/s10/171/gallery_xs/381/2467658922.jpg?20151226141703", "size48":"https://i03.fotocdn.net/s10/171/gallery_t/381/2467658922.jpg?20151226141703", "sizeBox":"http://static.evzmonden.ro/uploads/2016/03/john-lennon-500x400.jpg"}, {"size128":"https://i02.fotocdn.net/s10/170/gallery_xs/381/2467658921.jpg?20151214085331", "size48":"https://i02.fotocdn.net/s10/170/gallery_t/381/2467658921.jpg?20151214085331", "sizeBox":"http://media.tumblr.com/56722b121b536f20bfe17d53e198b8cf/tumblr_inline_mw5qhgZB7J1rwtiaz.png"} ]},
      {"age":27,
      "cityName":"Санкт-Петербург",
      "cryptedId":"5",
      "gender":"w",
      "name":"Sugar_free",
      "photos":[ {"size128":"https://i03.fotocdn.net/s10/179/gallery_xs/381/2467658930.jpg?20160113195847", "size48":"https://i03.fotocdn.net/s10/179/gallery_t/381/2467658930.jpg?20160113195847", "sizeBox":"https://i03.fotocdn.net/s10/179/gallery_m/381/2467658930.jpg?20160113195847"}, {"size128":"https://i03.fotocdn.net/s10/176/gallery_xs/381/2467658927.jpg?20160113195903", "size48":"https://i03.fotocdn.net/s10/176/gallery_t/381/2467658927.jpg?20160113195903", "sizeBox":"https://i03.fotocdn.net/s10/176/gallery_m/381/2467658927.jpg?20160113195903"}, {"size128":"https://i03.fotocdn.net/s10/175/gallery_xs/381/2467658926.jpg?20151226141615", "size48":"https://i03.fotocdn.net/s10/175/gallery_t/381/2467658926.jpg?20151226141615", "sizeBox":"https://i03.fotocdn.net/s10/175/gallery_m/381/2467658926.jpg?20151226141615"}, {"size128":"https://i03.fotocdn.net/s10/173/gallery_xs/381/2467658924.jpg?20151214085342", "size48":"https://i03.fotocdn.net/s10/173/gallery_t/381/2467658924.jpg?20151214085342", "sizeBox":"https://i03.fotocdn.net/s10/173/gallery_m/381/2467658924.jpg?20151214085342"} ]},
      {"age":33,
      "cityName":"Лондон",
      "cryptedId":"6",
      "gender":"w",
      "name":"Ann",
      "photos":[ {"size128":"https://i03.fotocdn.net/s10/172/gallery_xs/381/2467658923.jpg?20151214085323", "size48":"https://i03.fotocdn.net/s10/172/gallery_t/381/2467658923.jpg?20151214085323", "sizeBox":"https://i03.fotocdn.net/s10/172/gallery_m/381/2467658923.jpg?20151214085323"}, {"size128":"https://i03.fotocdn.net/s10/171/gallery_xs/381/2467658922.jpg?20151226141703", "size48":"https://i03.fotocdn.net/s10/171/gallery_t/381/2467658922.jpg?20151226141703", "sizeBox":"https://i03.fotocdn.net/s10/171/gallery_m/381/2467658922.jpg?20151226141703"}, {"size128":"https://i02.fotocdn.net/s10/170/gallery_xs/381/2467658921.jpg?20151214085331", "size48":"https://i02.fotocdn.net/s10/170/gallery_t/381/2467658921.jpg?20151214085331", "sizeBox":"https://i02.fotocdn.net/s10/170/gallery_m/381/2467658921.jpg?20151214085331"} ]}];

      $scope.serverData = serverData;
      $scope.data = serverData.pop();
      $scope.mainImageUrl = $scope.data.photos[0].sizeBox;
      $scope.activeInd = 0;
      $scope.buttonClicksNum = 0;
      $scope.dismiss = 0;
      $scope.agree = 0;
      $scope.disagree = 0;
      $scope.finished = false;
      $scope.gender = $scope.data.gender;

      var statistics = function(buttonType) {
        if (buttonType == 'yes') {
          $scope.agree += 1;
        } else if (buttonType == 'no') {
          $scope.disagree += 1;
        } else {
          $scope.dismiss += 1;
        }
      }

      $scope.getData = function(buttonType) {
        if ($scope.serverData.length > 0) {
          $scope.data = serverData.pop();
          $scope.mainImageUrl = $scope.data.photos[0].sizeBox;
          $scope.activeInd = 0;
          $scope.gender = $scope.data.gender;
          $scope.buttonClicksNum += 1;
        } else {
          $scope.finished = true;
        }
        statistics(buttonType);
      }

      $scope.setMainImage = function(ind) {
        $scope.activeInd = ind;
        $scope.mainImageUrl = $scope.data.photos[ind].sizeBox;
      }

  }]);
