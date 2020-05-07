(function ($) {
    $('#citiesTable').DataTable( {
        "ajax": "http://localhost:9080/api/v1/cities",
        "columns": [
            { "data": "Index" },
            { "data": "Year" },
            { "data": "Age" },
            { "data": "Name" },
            { "data": "Movie" },
            { "data": "Column_6" },

        ]
    } );

})(jQuery);