import $ from 'jquery';

class DataSource {
    static searchClub(keyword, page = 1) {
        const data = $.ajax({
          type: "GET",
          url: "http://www.omdbapi.com",
          dataType: "JSON",
          data: {
            apikey: "b923c90d",
            s: keyword,
            page: page,
          },
          success: (result) => {
            if(result.Response == "True") {
              return result;
            } else {
              return result.Error;
            }
          }
        });
        return data;
    }

    static movieDetail(imdbID) {
      const data = $.ajax({
        type: "GET",
        url: "http://www.omdbapi.com",
        dataType: "JSON",
        data: {
          apikey: "b923c90d",
          i: imdbID,
          plot: "full",
        },
        success: (result) => {
          if(result.Response == "True") {
            return result;
          }
        }
      });
      return data;
    }
}

export default DataSource;