$(document).ready(function() {
    console.log("DOM ready");
    $('#example').DataTable( {
        "ajax": 'data.json'
    } );
    
  
    
} );

var chart = c3.generate({
    bindto: '#chart',
   
    data: {
         x: 'x',
      columns: [
        ['x', '1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
        ['Index', 1137689, 1126503, 1058586, 1010577, 919210, 827564, 751163, 709347, 649122, 603033, 585173, 557485, 538904, 519076, 500640, 489399, 477867, 460993, 464691, 449970, 450433, 448902, 452340, 432638, 409969, 390246],

      ],
      type: "line",
    colors: {
            Index: '#FFD00D'
        },


    },
    axis: {
      y: {
        label: { // ADD
          text: 'Number of Crimes',
          position: 'outer-middle'
        },
        tick: {
          format: d3.format("") // ADD
        }
      },
      x: {
        label: {
            text: 'Year',
            position: 'outer-middle',
            format: '%Y'
        },
      },

    }
});







var chart = c3.generate({
     bindto: '#chartPie',
    data: {

        columns: [
            ['Female', 10582],
            ['Male', 155598],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); },

        colors: {
        Female: '#414142',
        Male: '#757370',

        }

    }
});


var chart = c3.generate({
     bindto: '#chartPieDrug',
    data: {
        
        columns: [
            ['Drugs', 46653],
            ['Other', 166180],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); },
        
        colors: {
        Drugs: '#414142',
        Other: '#757370',

        }
        
    }
});



var chart = c3.generate({
    
        bindto: '#barchart',
       padding: {
        top: 40,
        right: 100,
        bottom: 40,
        left: 100,
    },    
    data: {
        columns: [
            ['Crime', 10396, 22682, 12830, 4446, 7383, 4893, 3751, 22796]
        ],
        type: 'bar',
        colors: {
            Crime: '#757370'
        },
       
    },
    axis: {
        x: {
        
            type: 'category',
            categories: ['Assault', 'Burglary', 'Possession of Weapon', 'Driving Intoxicated/DWI', 'Grand Larcen', 'Manslaughter/murder', 'Rape', 'Robbery']
        }
    }
});

function displayName(name) {
  document.getElementById('country_name').firstChild.data = name;
}



  
