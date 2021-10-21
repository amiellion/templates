import $ from "jquery";

const  ResponsiveT = () => {

  //onclick handlers
  $(document).ready(function () {
    //cant get event "shown.bs.tab" to fire, used clicked instead
    $('a[role="tab"]').unbind('click').on('click', function (e) {
      console.log('New tab is now visible!');

        //set some timeout to change table layout properly
        setTimeout(() => {
            $($.fn.dataTable.tables(true)).DataTable().columns.adjust().responsive.recalc();
        }, 1);
    }); 
  });

  return null;
}
export default ResponsiveT;
