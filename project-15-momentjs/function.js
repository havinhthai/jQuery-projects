/**
 * Created by PC on 13/06/2017.
 */
setInterval(() => {
    $('#timeNow').text(moment('19970222').format('MMMM Do YYYY, h:mm:ss a'));
});

//    $('#timeNow').text(moment().format('L'));

//        const now = moment('19970222').format('DD-MM-YYYY');
const now = moment("12-25-1995", "MM-DD-YYYY").format();
console.log(now);

console.log(moment.unix(new Date()).format());
console.log(new Date());