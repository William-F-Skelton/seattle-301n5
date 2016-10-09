(function(module) {
  var doctors = [
    { number: 20, actor: 'William Hartnell',      begin: 1963, end: 1966 },
    { number: 30, actor: 'Patrick Troughton',     begin: 1966, end: 1969 },
    { number: 3,  actor: 'Jon Pertwee',           begin: 1970, end: 1974 },
    { number: 4,  actor: 'Tom Baker',             begin: 1974, end: 1981 },
    { number: 5,  actor: 'Peter Davison',         begin: 1982, end: 1984 },
    { number: 6,  actor: 'Colin Baker',           begin: 1984, end: 1986 },
    { number: 7,  actor: 'Sylvester McCoy',       begin: 1987, end: 1989 },
    { number: 8,  actor: 'Paul McGann',           begin: 1996, end: 1996 },
    { number: 9,  actor: 'Christopher Eccleston', begin: 2005, end: 2005 },
    { number: 10, actor: 'David Tennant',         begin: 2005, end: 2010 },
    { number: 11, actor: 'Matt Smith',            begin: 2010, end: 2013 },
    { number: 12, actor: 'Peter Capaldi',         begin: 2013, end: 2013 }
  ];

  // var obj = {
  //   // Order of object properties is not guaranteed!
  //   number1: 1,
  //   actor2: "William Hartnell",
  //   sayHello3: function() {
  //     console.log('hello');
  //   },
  //   begin4: 1963,
  //   end5: 1966
  // };

  // for(var i = 0; i < doctors.length; i++) {
  //   console.log(doctors[i]);
  // }

  // doctors.forEach(function(ele) {
  //   console.log(ele.actor);
  // });

  // function mapTheDocs(arrOfDocs) {
  //   arrOfDocs.map(function(ele) {
  //     // do some code...
  //   })
  // }


  var newDoctors = doctors.map(function(ele) {
    return {
      order: '#' + ele.number,
      playedBy: ele.actor,
      yearsPlayed: (ele.end - ele.begin) + 1
    }
  });


  var filterDoctors = newDoctors.filter(function(ele) {
    if (ele.yearsPlayed > 4) {
      return ele;
    } else {
      // console.log(ele);
    }
  });

  var mapAndFilter = doctors.filter(function(ele) {
    return ele.end > 2000;
  }).map(function(ele) {
    return {
      actorName: ele.actor
    }
  })


  // This is a very basic use case for reduce
  // var arr = [1, 2, 3, 4];
  //
  // var reduceArr = arr.reduce(function(total, ele){
  //   console.log('total', total);
  //   console.log('ele', ele);
  //   return total + ele;
  // }, 0);

  var reduceDoctors = doctors.reduce(function(a, b) {
    if (b.end > 2000) {
      a.push({
        actorName: b.actor,
        yearsPlayed: (b.end - b.begin) + 1
      })
    }
    return a;
  }, []);
  console.log('IIFE Ran.');

  module.doctors = newDoctors;

})(window)
